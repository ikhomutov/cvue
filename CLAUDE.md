# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CVue is a Vue 3 single-page resume/CV generator that renders a professional resume from YAML data fetched at runtime. Deployed on Netlify at https://cvue-demo.netlify.app/.

## Commands

- **Dev server:** `bun run dev`
- **Production build:** `bun run build`
- **Preview build:** `bun run preview`
- **Lint:** `bun run lint`

No test framework is configured.

## Environment Variables

Set in `.env` files (Vite convention, prefixed with `VITE_`):
- `VITE_RESUME_URL` — URL to a YAML file containing resume data
- `VITE_COLOR` — Primary theme color
- `VITE_TITLE` — Page title
- `VITE_GOOGLE_ANALYTICS` — GA tracking ID

## Architecture

**Build:** Vite 6 with `@vitejs/plugin-vue`. `@` alias configured in `vite.config.js`.

**Data flow:** `App.vue` fetches YAML from `VITE_RESUME_URL`, parses it with `js-yaml`, and passes sections as props down to `ResumePage.vue`, which conditionally renders section components.

**Component hierarchy:**
- `App.vue` → `ResumePage.vue` → 9 section components (`BasicSection`, `SkillsSection`, `ExperienceSection`, etc.)
- Sections use reusable item components: `PrimaryItem` (with markdown via `marked`), `SecondaryItem`, `ContactItem`
- UI primitives: `SvgIcon` (renders `@mdi/js` icon paths), `ListItem`, `SectionItem` (section wrapper with title)

**No router or state management** — the app is a single view with no navigation.

**Styling:** Scoped CSS in `.vue` files with CSS custom properties (`--primary-color`, `--secondary-color`) for theming. Layout is fixed 890px width, optimized for print with media queries.
