# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

Personal portfolio / job-application website for Patrik Hafner (Applikationsentwickler), built with React 19 + TypeScript + Vite 6 + Tailwind CSS 4, deployed to GitHub Pages via GitHub Actions. It's a static single-page site (no backend) with a contact form wired directly to EmailJS from the browser. The repo also doubles as a workspace for producing actual job-application documents (cover letters/CVs as PDF) via HTML templates and PowerShell build scripts — those are content-authoring tools, not part of the deployed site's runtime, except that the generated PDFs end up in `public/` and get shipped with the site. UI copy and content are in German; match that when editing user-facing text.

## Build / run / test

```powershell
npm install
npm run dev        # Vite dev server
npm run build       # tsc -b && vite build -> dist/
npm run preview     # preview the production build locally
```

No test suite is configured. There is no lint script in `package.json` either — rely on `tsc -b` (run as part of `build`) to catch type errors.

Environment: copy `.env.example` to `.env.local` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (used by `src/lib/emailjs.ts` for the contact form). `.env.local` already exists in this checkout — never print or commit its contents.

Deployment is automatic: push to `main` triggers `.github/workflows/deploy.yml`, which builds with the EmailJS values from GitHub Secrets and publishes `dist/` to GitHub Pages.

## Architecture / structure

- Three separate HTML entry points, each with its own Vite build input (see `vite.config.ts` `rollupOptions.input`): `index.html` -> `src/main.tsx` (main site), `impressum.html` -> `src/impressum-main.tsx`, `datenschutz.html` -> `src/datenschutz-main.tsx`. When adding a new standalone page, follow this pattern (new HTML file + new `*-main.tsx` entry + register it in `vite.config.ts`).
- `vite.config.ts` sets `base: '/BewerbungsPortfolio/'` — required for correct asset paths on GitHub Pages; keep in sync if the repo/Pages path ever changes.
- Content is data-driven: `src/data/projects.ts`, `skills.ts`, `timeline.ts` hold typed content arrays (typed via `src/types/index.ts`). Add/edit portfolio content there, not inline in components.
- `src/components/sections/` = one file per landing-page section, composed in order inside `src/App.tsx`. `src/components/ui/` = shared presentational primitives (Button, Badge, SectionHeading, AnimatedSection). `src/components/layout/` = Navbar/Footer/LegalLayout (LegalLayout wraps Impressum/Datenschutz pages).
- `public/` holds static binary assets that ship as-is (photos, Zeugnisse/certificates as JPG+PDF, `bewerbungsunterlagen/*.pdf`). `dist/` is generated build output — don't hand-edit it, it will be overwritten.
- `bewerbungsvorlagen/{anschreiben,lebenslauf}/source.html` + `build.ps1` — each `build.ps1` shells out to headless Microsoft Edge (`msedge.exe --headless --print-to-pdf`) to render the HTML template to PDF and drops it into `public/bewerbungsunterlagen/`. Run the relevant `build.ps1` after editing a `source.html` template, and re-run `npm run build` afterward if the site needs the updated PDF.
- `bewerbungen/<firma>/` — per-company application artifacts (rendered `bewerbung.html`/`.pdf`, `email.txt`, its own `build.ps1`). `bewerbungen/send-vorbereiten.ps1` opens a pre-filled but **unsent** Outlook draft (`$mail.Display()`, never `.Send()`) — it never sends email automatically, by design.

## Conventions

- German for all user-facing copy, comments in template/PowerShell files are also German.
- `.agents/` and `.claude/settings.local.json` exist but are local tooling config, not app code.
- Don't commit `.env.local` or reveal its values; use `.env.example` as the template for required variable names only.
