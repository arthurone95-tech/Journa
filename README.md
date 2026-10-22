# Journa

**Career guidance and school selection for Ghanaian students — combined into one project.**

Journa joins two products that answer two different halves of the same question:

| | |
|---|---|
| **Where do I want to go?** | Career Guidance |
| **Where do I study to get there?** | School Selection |

The combined product is **one installable, offline-capable web app**. A shared shell
gives both services the same brand, navigation, design tokens and install experience,
and one service worker caches the whole app so it keeps working with no connection.

The two applications keep their own code, pages and data. The shell wraps them — it
does not rewrite them.

---

## Installable, offline-first web app

| Piece | What it does |
|---|---|
| `manifest.webmanifest` | Name, colours, standalone display mode, icons (incl. maskable) |
| `sw.js` | Versioned precache of the whole app + runtime cache for web fonts |
| `offline.html` | Fallback page for a URL that was never cached |
| `assets/journa/` | Shared shell: `config.js`, `shell.css`, `shell.js`, icons |

- **Precached on install** — 87 files: every page of both services, all local CSS and
  ES modules, the 957-school / 76-career / roadmap datasets and the UI images.
- **Cache-first navigations** — pages open instantly and work offline.
- **Stale-while-revalidate** for Google Fonts and Font Awesome; if they were never
  cached the pages fall back to the system font stack.
- **Updates** — bumping `VERSION` in `sw.js` produces a new cache and deletes the old
  one. A page with no unsaved input updates and reloads itself; a page with unsaved
  work shows an update notice and lets the user apply it when ready.
- **Offline is real, not just a registered worker** — the assessment, its scoring,
  the results page, the career library, roadmaps, the school directory and the
  selection/review workflow all run from the cache.
- **Nothing sensitive is cached** — user answers and school choices live only in
  `localStorage`; no account, no server, no transmission.

Installing requires a secure context: `https://` or `http://localhost`
(`http://127.0.0.1` also counts).

---

## Project structure

```text
Journa/
├── index.html                 ← unified app home (entry point)
├── manifest.webmanifest        ← PWA manifest
├── sw.js                       ← service worker (precache + runtime + offline)
├── offline.html                ← offline fallback page
├── assets/journa/              ← shared shell: config.js, shell.css, shell.js, icons/
├── README.md
├── career-guidance/           ← Career Guidance service
│   ├── JOURNA -Project/       │   the runnable web app (HTML / CSS / ES modules)
│   │   ├── index.html  assessment.html  results.html
│   │   ├── career-library.html  shs-recommendation.html
│   │   ├── schools.html  roadmap.html
│   │   ├── css/  js/  assets/images/
│   │   └── js/weights/        │   13 scoring-weight files, one per question
│   ├── the JSON files/         │   source data pipeline (verified JSON + merge script)
│   └── *.docx                 │   handover guide, career and question notes
└── school-selection/          ← School Selection service
    ├── index.html             │   home
    ├── guidelines/index.html  │   24 official selection rules
    ├── selection/index.html  │   choose and rank 5 main + 2 alternative schools
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
| App home | `/index.html` |
| Career Guidance home | `/career-guidance/JOURNA%20-Project/index.html` |
| Career assessment | `/career-guidance/JOURNA%20-Project/assessment.html` |
| Career library | `/career-guidance/JOURNA%20-Project/career-library.html` |
| School Selection home | `/school-selection/index.html` |
| Selection guidelines | `/school-selection/guidelines/index.html` |
| Select schools | `/school-selection/selection/index.html` |
| Review form | `/school-selection/review/index.html` |

> The `JOURNA -Project` folder name contains a space, so its URL must be encoded as
> `JOURNA%20-Project`. The shared navigation already does this.

Serve from the **project root**, not from inside a service folder — the service
worker and the manifest sit at the root and must control the whole app.

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
- **Services are separate by design.** They share the same 957-school dataset and the
  same shell, but each keeps its own pages and code. Changing one does not change
  the other.
- **Use HTTPS (or localhost) in production.** Service workers only run in a secure
  context, so installing the app and using it offline requires `https://`.

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
