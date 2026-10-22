# Journa

**Career guidance and school selection for Ghanaian students — combined into one project.**

Journa joins two products that answer two different halves of the same question:

| | |
|---|---|
| **Where do I want to go?** | Career Guidance |
| **Where do I study to get there?** | School Selection |

The combined product is still two applications. The landing page at the root links
into each one; nothing in their internal code has been merged, rewritten or
integrated yet.

---

## Project structure

```text
Journa/
├── index.html                 ← combined-product landing page (entry point)
├── README.md
├── career-guidance/           ← Career Guidance application
│   ├── JOURNA -Project/       │   the runnable web app (HTML / CSS / ES modules)
│   │   ├── index.html  assessment.html  results.html
│   │   ├── career-library.html  shs-recommendation.html
│   │   ├── schools.html  roadmap.html
│   │   ├── css/  js/  assets/images/
│   │   └── js/weights/        │   13 scoring-weight files, one per question
│   ├── the JSON files/         │   source data pipeline (verified JSON + merge script)
│   └── *.docx                 │   handover guide, career and question notes
└── school-selection/          ← School Selection application
    ├── index.html             │   home
    ├── guidelines/index.html  │   24 official selection rules
    ├── selection/index.html   │   choose and rank 5 main + 2 alternative schools
    ├── review/index.html      │   CSSPS-style placement form preview
    ├── css/  js/              │   app code and design system
    ├── docs/                  │   product spec, official guidelines, phase reports
    ├── data/                  │   extraction evidence (OCR boxes, reference sections)
    ├── scripts/               │   reproducible extraction pipeline + test suites
    ├── images/                │   register screenshots
    └── review/                │   placement form assets (coat of arms)
```

---

## Running locally

Both applications are static and dependency-free. Because they use **ES modules**,
they must be served over HTTP — opening the files directly with `file://` will not work.

```bash
# from the project root
python -m http.server 8000
# then open http://127.0.0.1:8000/
```

Any static server works (`npx serve`, VS Code Live Server, Netlify Dev, GitHub Pages).

### Entry points

| Page | URL |
|---|---|
| Landing page | `/index.html` |
| Career Guidance home | `/career-guidance/JOURNA%20-Project/index.html` |
| Career assessment | `/career-guidance/JOURNA%20-Project/assessment.html` |
| Career library | `/career-guidance/JOURNA%20-Project/career-library.html` |
| School Selection home | `/school-selection/index.html` |
| Selection guidelines | `/school-selection/guidelines/index.html` |
| Select schools | `/school-selection/selection/index.html` |
| Review form | `/school-selection/review/index.html` |

> The `JOURNA -Project` folder name contains a space, so its URL must be encoded as
> `JOURNA%20-Project`. The landing page already does this.

---

## The two applications

### Career Guidance (`career-guidance/`)

A 13-question assessment that scores the user against **76 careers** across five
categories (Professional, Technical, Business, Creative, Sports) and returns a
ranked shortlist. It then connects each career to real schools and programmes.

- **Scoring** — direct answer-to-career weights. Each question has its own weight
  file (`js/weights/q1`…`q13`), merged in `js/assessment.js`. All 76 careers appear
  in all 13 files.
- **Content** — `js/config.js` holds the career profiles, the questions and the
  programme descriptions.
- **Roadmaps** — `js/roadmap-data.js` gives every career one or more step-by-step
  pathways from JHS to the workplace.
- **Schools** — `js/school-data.js` (957 schools, 16 regions) with
  `js/career-schools.js` mapping a career's programmes onto schools that offer them.
- **Storage** — `localStorage` only (`journa_assessment_answers`, `journa_results`).
  No account, no server.

### School Selection (`school-selection/`)

A tool for applying the official 2025 BECE school-selection rules when choosing
schools.

- **Guidelines** — the 24 official rules, each shown in the official wording with a
  plain-language explanation.
- **Selection** — choose and rank up to 5 main schools plus 2 alternatives, each
  with a programme and a Day/Boarding option.
- **Validation** — live checks against the category limits (A/B/C) and the
  3-Boarding / 2-Day requirement.
- **Review** — the finished selection rendered as a CSSPS-style placement form,
  ready to print.
- **Data** — `js/school-data.js` is the same 957-school register used by Career
  Guidance, enriched with register codes, A/B/C categories and appendix lists.
  `docs/` holds the product specification, the official guidelines and the phase
  reports.
- **Tests** — `scripts/phase4`…`phase7` test suites run under plain Node.

---

## Important notes

- **Guidance only.** Journa does not submit anything to CSSPS and does not guarantee
  placement. Programme codes and school categories come from the published register
  but per-school programme membership is not published, so those cells are left
  blank rather than guessed.
- **No backend.** Both applications are entirely client-side. All user data stays in
  the browser's `localStorage` and is never transmitted.
- **Nothing has been integrated yet.** The two applications are kept separate on
  purpose. The shared 957-school dataset is the natural place to connect them later.

---

## Documentation

| File | Contents |
|---|---|
| `career-guidance/ALL IN ONE .docx` | Career Guidance handover guide |
| `career-guidance/CAREERS.docx` | Career definitions and notes |
| `career-guidance/QUESTIONS.docx` | Assessment question notes |
| `school-selection/docs/PRODUCT_SPECIFICATION.md` | School Selection product spec |
| `school-selection/docs/OFFICIAL_GUIDELINES.md` | The 24 official rules |
| `school-selection/docs/PHASE1_REPORT.md` … `PHASE7_REPORT.md` | Build reports |
| `school-selection/docs/DATA_EXTRACTION.md` | How the school data was extracted |
