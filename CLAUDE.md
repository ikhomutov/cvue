# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CVue is a Vue 3 single-page resume/CV generator that renders a professional resume from [JSON Resume](https://jsonresume.org/) data fetched at runtime. Deployed on Netlify at https://cvue-demo.netlify.app/.

## Commands

- **Dev server:** `bun run dev`
- **Production build:** `bun run build`
- **Preview build:** `bun run preview`
- **Lint:** `bun run lint`

No test framework is configured.

## Environment Variables

Set in `.env` files (Vite convention, prefixed with `VITE_`):
- `VITE_RESUME_URL` — URL to a JSON file in JSON Resume format (or local path for dev via vite-plugin-local-resume)
- `VITE_COLOR` — Primary theme color
- `VITE_TITLE` — Page title
- `VITE_GOOGLE_ANALYTICS` — GA tracking ID

## Architecture

**Build:** Vite 6 with `@vitejs/plugin-vue`. `@` alias configured in `vite.config.js`.

**Data flow:** `App.vue` fetches JSON from `VITE_RESUME_URL`, parses it with `response.json()`, and passes sections as props down to `ResumePage.vue`, which conditionally renders section components.

**Data format:** [JSON Resume](https://jsonresume.org/) standard. Key sections: `basics`, `work`, `volunteer`, `education`, `awards`, `certificates`, `skills`, `projects`, `languages`, `interests`. Date fields use ISO 8601 format (`2024-11-01`) and are formatted for display via `src/utils.js` (`formatDate`, `formatDateRange`).

**Component hierarchy:**
- `App.vue` → `ResumePage.vue` → 10 section components (`BasicSection`, `SkillsSection`, `ExperienceSection`, `VolunteerSection`, `EducationSection`, `AwardsSection`, `CertificatesSection`, `ProjectsSection`, `LanguagesSection`, `InterestsSection`)
- Sections use reusable item components: `PrimaryItem` (with markdown via `marked`), `SecondaryItem`, `ContactItem`
- UI primitives: `SvgIcon` (renders inline SVG body via `v-html`), `ListItem`, `SectionItem` (section wrapper with title)

**Icons:** Inline SVG bodies from Tabler Icons (sourced via Iconify API), stored in `src/icons.js`. No icon library dependency — just raw SVG strings. `SvgIcon.vue` renders them with `v-html` inside an `<svg>` tag. To add a new icon: fetch SVG body from https://icon-sets.iconify.design/tabler/, add export to `src/icons.js`.

**No router or state management** — the app is a single view with no navigation.

**Styling:** Scoped CSS in `.vue` files with CSS custom properties (`--primary-color`, `--secondary-color`) for theming. Layout is fixed 890px width, optimized for print with media queries.
