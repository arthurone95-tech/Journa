import json
import os
import re
from collections import defaultdict

# --- Configuration ---
MAX_SIZE_BYTES = 1_000_000  # ~1 MB per file
SPLIT_IF_LARGE = True

# --- Program name mappings for the main register (shs_register) ---
PROGRAM_MAP = {
    "Agric": "Agriculture",
    "Bus": "Business",
    "Tech": "Technical",        # only for the main register
    "HomEcon": "Home Economics",
    "VisArts": "Visual Arts",
    "GenArts": "General Arts",
    "GenSci": "General Science",
    "STEM": "STEM",
    "Lang": "Language",
}

# --- Full‑name expansions for abbreviations (applied to ALL programs) ---
EXPANSIONS = [
    # Order matters: longer or more specific first
    (r'\bAgric\b', 'Agricultural'),       # "Agric Mech" → "Agricultural Mechanics"
    (r'\bEng\.?\b', 'Engineering'),       # "Eng" / "Eng." → "Engineering"
    (r'\bTech\.?\b', 'Technology'),       # "Tech" / "Tech." → "Technology"
    (r'\bConst\.?\b', 'Construction'),    # "Const" / "Const." → "Construction"
    (r'\bCons\.?\b', 'Construction'),     # "Cons" / "Cons." → "Construction"
    (r'\bCat\.?\b', 'Catering'),          # "Cat" / "Cat." → "Catering"
    (r'\bMgt\.?\b', 'Management'),        # "Mgt" / "Mgt." → "Management"
    (r'\bFabr\.?\b', 'Fabrication'),      # "Fabr" / "Fabr." → "Fabrication"
    (r'\bMech\.?\b', 'Mechanical'),       # "Mech" / "Mech." → "Mechanical"
    (r'\bElec\.?\b', 'Electrical'),       # "Elec" / "Elec." → "Electrical"
    (r'\bInfo\.?\b', 'Information'),      # "Info" / "Info." → "Information"
    (r'\bHosp\b', 'Hospitality'),         # "Hosp" → "Hospitality"
    (r'\bMotor Veh\b', 'Motor Vehicle'),  # already mostly full, but safe
    (r'\bAppl\b', 'Applied'),             # "Appl" → "Applied"
    (r'\bAuto\b', 'Automotive'),          # "Auto" → "Automotive"
]

def expand_program_name(name: str) -> str:
    """Expand all abbreviations in a program name to full words."""
    if not name:
        return ""
    # Capitalize first letter of each word initially, but keep acronyms like ICT, CBT
    words = name.split()
    normalized = []
    for w in words:
        if w.upper() in ("ICT", "CBT", "STEM", "TVET"):
            normalized.append(w.upper())
        else:
            normalized.append(w.capitalize())
    name = " ".join(normalized)

    # Apply expansions (case‑insensitive)
    for pattern, replacement in EXPANSIONS:
        name = re.sub(pattern, replacement, name, flags=re.IGNORECASE)

    # Clean up extra spaces and punctuation
    name = re.sub(r'\s+', ' ', name).strip()
    # Fix common double spaces and punctuation around slashes
    name = re.sub(r'\s*/\s*', ' / ', name)
    name = re.sub(r'\s*&\s*', ' & ', name)
    name = re.sub(r'\s+', ' ', name).strip()
    return name

# Region name normalisation
REGION_MAP = {
    "Greater Accra": "G. Accra",
}

# All regions in alphabetical order
ALL_REGIONS = [
    "Ahafo", "Ashanti", "Bono", "Bono East", "Central", "Eastern",
    "G. Accra", "North East", "Northern", "Oti", "Savannah",
    "Upper East", "Upper West", "Volta", "Western", "Western North"
]

# ---------- Helper functions ----------
def normalize_region(region):
    return REGION_MAP.get(region, region)

def clean_program_name(name):
    if not name:
        return ""
    return re.sub(r'\s+', ' ', name.strip())

def map_program(token):
    token = token.strip()
    return PROGRAM_MAP.get(token, token)

def combine_statuses(statuses):
    status_set = set()
    for s in statuses:
        if not s:
            continue
        tokens = re.split(r'[|/,]', s)
        for t in tokens:
            t = t.strip()
            if t:
                if t.lower() in ["day", "day/boarding"]:
                    status_set.add("Day")
                elif t.lower() in ["boarding", "boarding/day"]:
                    status_set.add("Boarding")
                else:
                    status_set.add(t)
    if "Day" in status_set and "Boarding" in status_set:
        return "Day/Boarding"
    elif "Day" in status_set:
        return "Day"
    elif "Boarding" in status_set:
        return "Boarding"
    else:
        return "/".join(sorted(status_set)) if status_set else ""

def combine_school_types(types):
    t_set = set()
    for t in types:
        if not t:
            continue
        for part in t.split(','):
            part = part.strip()
            if part:
                t_set.add(part.upper())
    return ", ".join(sorted(t_set)) if t_set else ""

# ---------- Main merging with priority to main register ----------
def load_and_merge():
    # 1. Load main register first (authoritative for location, gender)
    main_file = "shs_register_verified.json"
    schools = {}  # key: (region, school_name) -> dict with fields

    if not os.path.exists(main_file):
        print(f"ERROR: {main_file} not found. Aborting.")
        return {}

    with open(main_file, 'r', encoding='utf-8') as f:
        main_data = json.load(f)

    for region, entries in main_data.items():
        if region.startswith('_'):
            continue
        region_norm = normalize_region(region)
        for entry in entries:
            name = entry.get("school_name", "").strip()
            if not name:
                continue
            key = (region_norm, name)
            loc = entry.get("location", "").strip()
            gender = entry.get("gender", "").strip()
            sch_type = entry.get("school_type", "").strip()
            status = entry.get("status", "").strip()
            # Programs (may be a string like "Agric, Bus, ...")
            prog_str = entry.get("programs", "")
            programs = []
            if prog_str and "See Appendix" not in prog_str:
                for p in prog_str.split(','):
                    p = p.strip()
                    if p:
                        # map abbreviations (Agric -> Agriculture, etc.)
                        mapped = map_program(p)
                        programs.append(clean_program_name(mapped))

            schools[key] = {
                "location": loc,
                "gender": gender,
                "school_type": {sch_type} if sch_type else set(),
                "status": {status} if status else set(),
                "programs": set(programs),
                "source": "main"
            }

    # 2. Process Appendix 1 (TVET)
    appendix_files = [
        ("appendix1_verified.json", "institution", "location", "gender", "status", "trades", "TVET"),
        ("appendix2_verified.json", "school_name", None, "gender", None, "technical_subjects", "SHTS"),
        ("appendix5_verified.json", "school_name", "location", "gender", "status", "stem_subjects", "SHS"),
    ]

    for filename, name_field, loc_field, gen_field, stat_field, prog_field, default_type in appendix_files:
        if not os.path.exists(filename):
            print(f"Warning: {filename} not found, skipping.")
            continue
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)

        for region, entries in data.items():
            if region.startswith('_'):
                continue
            region_norm = normalize_region(region)
            for entry in entries:
                name = entry.get(name_field, "").strip()
                if not name:
                    continue
                key = (region_norm, name)

                # Get location (if present in this file)
                loc = ""
                if loc_field:
                    loc = entry.get(loc_field, "").strip()

                gender = entry.get(gen_field, "").strip() if gen_field else ""

                sch_type = entry.get("sch_type", "") if "sch_type" in entry else ""
                if not sch_type:
                    sch_type = entry.get("school_type", "")
                if not sch_type:
                    sch_type = default_type
                sch_type = sch_type.strip()

                status = entry.get(stat_field, "").strip() if stat_field else ""

                # Programs
                programs_raw = entry.get(prog_field, [])
                if isinstance(programs_raw, str):
                    if "See Appendix" not in programs_raw:
                        programs_raw = [p.strip() for p in programs_raw.split(',') if p.strip()]
                    else:
                        programs_raw = []
                elif not isinstance(programs_raw, list):
                    programs_raw = []
                # clean all program names
                programs = [clean_program_name(p) for p in programs_raw if p.strip()]

                if key in schools:
                    # School exists in main register -> only add extra info
                    rec = schools[key]
                    if sch_type:
                        rec["school_type"].add(sch_type)
                    if status:
                        rec["status"].add(status)
                    rec["programs"].update(programs)
                    # Do NOT overwrite location/gender from main
                else:
                    # School not in main -> create new record from appendix data
                    schools[key] = {
                        "location": loc,
                        "gender": gender,
                        "school_type": {sch_type} if sch_type else set(),
                        "status": {status} if status else set(),
                        "programs": set(programs),
                        "source": "appendix"
                    }

    # 3. Build final per-region output, expanding program names
    result_by_region = defaultdict(list)

    for (region, name), rec in schools.items():
        final_location = rec["location"]
        final_gender = rec["gender"]
        final_type = combine_school_types(rec["school_type"])
        final_status = combine_statuses(rec["status"])
        # Expand ALL program names, deduplicate, sort, and join as a string
        expanded_programs = sorted({expand_program_name(p) for p in rec["programs"] if p})
        final_programs = ", ".join(expanded_programs)

        result_by_region[region].append({
            "school_name": name,
            "location": final_location,
            "gender": final_gender,
            "school_type": final_type,
            "status": final_status,
            "programs": final_programs,
        })

    # Sort schools within each region alphabetically
    for region in result_by_region:
        result_by_region[region].sort(key=lambda x: x["school_name"].lower())

    # Output only regions in ALL_REGIONS order, plus any extra
    final_output = {}
    for region in ALL_REGIONS:
        if region in result_by_region:
            final_output[region] = result_by_region[region]
    for region in sorted(result_by_region.keys()):
        if region not in final_output:
            final_output[region] = result_by_region[region]

    return final_output

# ---------- Numbering and splitting ----------
def assign_numbers_and_split(data, max_size=MAX_SIZE_BYTES):
    # Estimate size
    temp_full = {}
    for region in ALL_REGIONS:
        if region in data:
            temp_full[region] = data[region]
    estimated_size = len(json.dumps(temp_full, indent=2))

    if estimated_size <= max_size or not SPLIT_IF_LARGE:
        num = 1
        for region in ALL_REGIONS:
            if region not in data:
                continue
            for school in data[region]:
                school["number"] = num
                num += 1
        return [("merged.json", data)]

    # Split into 3 groups (5, 5, 6 regions roughly)
    region_list = [r for r in ALL_REGIONS if r in data]
    total = len(region_list)
    group_sizes = [total // 3 + (1 if i < total % 3 else 0) for i in range(3)]
    groups = []
    idx = 0
    for size in group_sizes:
        groups.append(region_list[idx:idx+size])
        idx += size

    chunks = []
    num = 1
    for group in groups:
        chunk_data = {}
        for region in group:
            if region in data:
                chunk_data[region] = data[region]
        for region in group:
            if region in data:
                for school in data[region]:
                    school["number"] = num
                    num += 1
        chunks.append(chunk_data)

    return [(f"merged_part{i+1}.json", chunk) for i, chunk in enumerate(chunks)]

# ---------- Main execution ----------
if __name__ == "__main__":
    merged_data = load_and_merge()

    if not merged_data:
        print("No data merged. Check that the files exist.")
    else:
        output_files = assign_numbers_and_split(merged_data)
        for filename, chunk in output_files:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(chunk, f, indent=2, ensure_ascii=False)
            print(f"Written {filename} with {sum(len(v) for v in chunk.values())} schools.")
        print("Merging complete.")