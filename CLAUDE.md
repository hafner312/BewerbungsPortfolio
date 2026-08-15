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
- **Vorlage für jedes neue Anschreiben ist `bewerbungsvorlagen/anschreiben/source.html`** — nicht eine ältere Mappe aus `bewerbungen/<firma>/` kopieren. Für eine neue Bewerbung diese Vorlage nach `bewerbungen/<firma>/bewerbung.html` kopieren, dazu den Ordner `assets/` (Foto + Schriften) mitkopieren, dann Platzhalter (`[Ansprechperson]`, `[Firma]`, `[Strasse]`, `[PLZ Ort]`, `[Datum]`, `[Position]`) ersetzen und die Absätze an die Stelle anpassen. Gestaltung von Anschreiben und Lebenslauf ist bewusst identisch mit der Portfolio-Website (dunkelgrüner Kopf, Akzent `#0d9488`, Schriften Space Grotesk / Inter / JetBrains Mono aus `assets/fonts/`) — dieses Erscheinungsbild beim Anpassen nicht verändern. Anschreiben bleibt **immer einseitig** (nach jeder Textänderung Seitenzahl im erzeugten PDF prüfen).
- `bewerbungen/<firma>/` — per-company application artifacts (rendered `bewerbung.html`/`.pdf`, `email.txt`, its own `build.ps1`). `bewerbungen/send-vorbereiten.ps1` opens a pre-filled but **unsent** Outlook draft (`$mail.Display()`, never `.Send()`) — it never sends email automatically, by design.
- Direktversand-GUI: `bewerbungen/bewerbung-senden.ps1` (gestartet per Doppelklick auf `bewerbungen/Bewerbung senden.cmd`) zeigt ein Fenster, in dem der Nutzer eine Bewerbung wählt, die PDF ansieht und auf **Senden** klickt (Ja/Nein-Rückfrage, Versand direkt über Gmail-SMTP). Das Gmail-App-Passwort kommt aus `.env.local` (`GMAIL_APP_PASSWORD`, in `.gitignore`) — nie ins Repo. Empfänger + Betreff lädt das Fenster aus `bewerbungen/<firma>/versand.txt` (`An:` / `Betreff:`). **Wichtig:** Bei jeder neuen Bewerbung diese `versand.txt` mit korrekter Empfänger-Adresse und Betreff anlegen/befüllen, damit der Nutzer nur noch Senden drücken muss (er will nichts mehr selbst eintippen). Fehlt `Betreff:`, wird er aus `email.txt` abgeleitet. `bewerbungen/send-email.ps1` ist die Kommandozeilen-Variante desselben Versands (mit `-Vorschau`-Schalter für eine HTML-Browservorschau).
- Bewerbungsstand: `bewerbungen/uebersicht.md` ist die zentrale Tabelle aller Bewerbungen mit Ergebnis (Grundlage für die RAV-/ALV-Formulare in `Arbeitsbemühungen/` — **ein ausfüllbares PDF-Formular pro Kalendermonat**, benannt `Arbeitsbemühungen ALV <Monat> <Jahr>.pdf`. Seite 1 fasst 8 Bewerbungen, Seite 2 ist Fortsetzung desselben Monats. Bewerbungen aus einem neuen Monat gehören auf ein neues Blatt (Kopie des Vormonats, Zeilen leeren, `Monat_Jahr` setzen; Name/AHV-Nr./Unterschrift bleiben). Die Felder lassen sich mit `pdf-lib` per Node setzen — Achtung: die Datumsziffern sind gedreht angeordnet, `Tag_Monat[0..3]` = Zeile 1 (Tag-Zehner, Tag-Einer, Monat-Zehner, Monat-Einer), Zeilen sonst über den Feldindex `[0..7]`). Trifft eine Absage ein, in `bewerbungen/<firma>/absage.txt` Datum, Absender und Absagegrund festhalten **und** die Zeile in `uebersicht.md` aktualisieren. Die Versand-GUI markiert Ordner mit `absage.txt` in der Klappliste und warnt vor erneutem Versand.

## Bewerbungstexte: IPA-Situation (verbindlich für jedes neue Anschreiben)

Patrik hat die Ausbildung zum Applikationsentwickler EFZ (schulisch + betriebliches Praktikum) vollständig absolviert; nur die Note der individuellen praktischen Arbeit (IPA) hat für das Diplom knapp nicht ausgereicht. Er bewirbt sich auf reguläre Stellen und möchte die IPA-Wiederholung im Rahmen einer echten Anstellung **bei genau der Firma absolvieren, bei der er sich bewirbt** — das muss in jedem neuen Anschreiben explizit stehen, nicht nur implizit mitschwingen. Das gilt **immer, ausnahmslos** — auch bei Initiativ-Anfragen, auch wenn der Empfänger "nur" Recruiter/Talent Acquisition ist, solange er für eine konkrete Firma arbeitet (z.B. V-ZUG, Bossard, Ergon).

- Textbaustein (anpassen an Anrede/Firma, nicht wortwörtlich kopieren): "Die schulische Ausbildung zum Applikationsentwickler EFZ an der WISS Zürich sowie das dazugehörige betriebliche Praktikum habe ich vollständig absolviert; lediglich die Note der abschliessenden praktischen Arbeit (IPA) hat für das Diplom knapp nicht ausgereicht. Diese möchte ich nun möglichst zeitnah nachholen – und würde mich sehr freuen, dies bei der [Firma] AG tun zu können."
- Ausnahme, wo die generische Form "bei einer von Ihnen vermittelten Stelle" statt eines Firmennamens richtig ist: NUR bei einer echten Personalvermittlung/Zeitarbeitsfirma (z.B. Consult & Pepper), die für viele wechselnde Endkunden vermittelt und selbst nicht der Arbeitgeber wird. Ein unternehmenseigener Recruiter/Talent-Acquisition-Kontakt zählt NICHT als dieser Ausnahmefall — dort immer den Firmennamen nennen.
- NICHT "nicht bestanden" oder "durchgefallen" schreiben — "nachholen" ist der richtige, neutrale Begriff. NICHT "werde ich absolvieren" (impliziert falsche Gewissheit) — "möchte ich nachholen".
- Ton: selbstbewusst, nicht entschuldigend; die Wiederholung als normalen nächsten Schritt darstellen.
- Vor dem Abschluss jedes neuen Anschreibens explizit gegenlesen, ob der Firmenname im IPA-Satz vorkommt — dieser Fehler (generisches "in einem Betrieb" statt Firmenname) ist bereits mehrfach passiert.

## Conventions

- German for all user-facing copy, comments in template/PowerShell files are also German.
- `.agents/` and `.claude/settings.local.json` exist but are local tooling config, not app code.
- Don't commit `.env.local` or reveal its values; use `.env.example` as the template for required variable names only.
