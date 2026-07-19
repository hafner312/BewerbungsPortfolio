# BewerbungsPortfolio

Persoenliche Portfolio-Website (Bewerbungsseite) von Patrik Hafner, Applikationsentwickler. Single-Page-Site mit Lebenslauf, Projekten, Skills, Zeitleiste, Referenzen/Zeugnissen und Kontaktformular, gebaut mit React, TypeScript und Vite und per GitHub Pages/GitHub Actions deployt. Zusaetzlich enthaelt das Repo Vorlagen und Skripte zum Erstellen individueller Bewerbungsschreiben als PDF.

## Tech-Stack

- **React 19** + **TypeScript**, gebaut mit **Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`) fuers Styling
- **Framer Motion** fuer Animationen, **react-intersection-observer** fuer Scroll-Trigger
- **EmailJS** (`@emailjs/browser`) fuers Versenden des Kontaktformulars direkt aus dem Browser (kein eigenes Backend)
- **lucide-react** / **react-icons** fuer Icons, **@fontsource** Pakete fuer selbst gehostete Schriftarten (Inter, JetBrains Mono, Space Grotesk)
- Deployment via **GitHub Actions** (`.github/workflows/deploy.yml`) nach **GitHub Pages**

## Funktionsumfang

- Landingpage (`src/App.tsx`) mit den Sektionen Navbar, Hero, About, Skills, Projects, Timeline, References, Learning, Contact, Footer (`src/components/sections`, `src/components/layout`)
- Separate, eigenstaendige HTML-Einstiegspunkte fuer **Impressum** (`impressum.html`) und **Datenschutz** (`datenschutz.html`), jeweils mit eigenem React-Entry (`src/impressum-main.tsx`, `src/datenschutz-main.tsx`) und eigenem Layout (`LegalLayout.tsx`)
- Projekt-, Skill- und Zeitleisten-Daten sind als typisierte Konstanten in `src/data/` gepflegt (`projects.ts`, `skills.ts`, `timeline.ts`) - neue Projekte/Skills werden dort ergaenzt, nicht in den Komponenten
- Statische Dokumente/Bilder (Lebenslauf-PDF, Bewerbung-PDF, Foto, Zeugnisse, Zertifikate) liegen unter `public/` und werden beim Build unveraendert nach `dist/` kopiert
- `bewerbungsvorlagen/` enthaelt HTML-Vorlagen fuer Anschreiben und Lebenslauf samt PowerShell-Skripten (`build.ps1`), die per headless Microsoft Edge ein PDF daraus rendern
- `bewerbungen/` enthaelt konkrete, an eine Firma gerichtete Bewerbungen (HTML/PDF/E-Mail-Text) sowie `send-vorbereiten.ps1`, das einen fertigen (aber ungesendeten) Outlook-Entwurf mit Anhaengen vorbereitet

## Projektstruktur

```
src/
  App.tsx                  Hauptseite: setzt alle Sections zusammen
  main.tsx                  Entry Point fuer index.html
  impressum-main.tsx         Entry Point fuer impressum.html
  datenschutz-main.tsx        Entry Point fuer datenschutz.html
  components/layout/          Navbar, Footer, LegalLayout
  components/sections/         Hero, About, Skills, Projects, Timeline, References, Learning, Contact
  components/ui/               Wiederverwendbare UI-Bausteine (Button, Badge, SectionHeading, AnimatedSection)
  data/                        Projekt-, Skill- und Timeline-Inhalte als Daten (projects.ts, skills.ts, timeline.ts)
  pages/                       Impressum.tsx, Datenschutz.tsx
  lib/emailjs.ts               EmailJS-Konfiguration/-Aufruf fuers Kontaktformular
public/                     Statische Assets (Fotos, Zeugnisse, Zertifikate, Bewerbungsunterlagen als PDF/JPG)
bewerbungsvorlagen/          HTML-Vorlagen (Anschreiben, Lebenslauf) + PDF-Build-Skripte
bewerbungen/                 Konkrete Bewerbungen pro Firma + Versand-Vorbereitung via Outlook
.github/workflows/deploy.yml  CI/CD: Build + Deploy nach GitHub Pages bei Push auf main
dist/                        Build-Output (generiert, nicht manuell bearbeiten)
```

## Einrichtung und Ausfuehren

Voraussetzung: Node.js (siehe `@types/node` Version im `package.json`, empfohlen aktuelles LTS), npm.

```powershell
npm install
```

Fuer das Kontaktformular werden EmailJS-Zugangsdaten benoetigt: `.env.example` nach `.env.local` kopieren und die drei `VITE_EMAILJS_*`-Werte mit den eigenen EmailJS-Werten (Service-ID, Template-ID, Public Key) befuellen.

```powershell
copy .env.example .env.local
npm run dev        # Dev-Server (Vite)
npm run build       # Produktions-Build nach dist/ (tsc -b && vite build)
npm run preview     # Lokale Vorschau des Builds
```

## Deployment

Bei jedem Push auf `main` baut die GitHub-Action `.github/workflows/deploy.yml` die Seite (mit den EmailJS-Secrets aus den Repo-Settings) und deployt `dist/` automatisch nach GitHub Pages. Die Vite-Basis ist auf `/BewerbungsPortfolio/` gesetzt (`vite.config.ts`), passend zu einem Deployment unter `https://<user>.github.io/BewerbungsPortfolio/`.

## Bewerbungsunterlagen erzeugen

```powershell
cd bewerbungsvorlagen/anschreiben   # oder lebenslauf
./build.ps1
```

Das Skript rendert `source.html` per headless Microsoft Edge zu einem PDF und legt es unter `public/bewerbungsunterlagen/` ab.
