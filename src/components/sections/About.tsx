import { SectionHeading } from '../ui/SectionHeading'

/** Der Fliesstext ist in benannte Abschnitte gegliedert statt ein Textblock */
const abschnitte = [
  {
    nr: '01',
    titel: 'Wer ich bin',
    text: 'Ich bin in Ausbildung zum Applikationsentwickler EFZ (IPA-Wiederholung) und arbeite mit Leidenschaft an sauberer, wartbarer Software. Dabei verbinde ich kreative Ideen mit einer schnellen Auffassungsgabe.',
  },
  {
    nr: '02',
    titel: 'Was ich mitbringe',
    text: 'Aus über zehn Jahren als Metallbauer bringe ich präzises Arbeiten, technisches Verständnis, Zuverlässigkeit und eine strukturierte Herangehensweise mit – Eigenschaften, die mir in der Entwicklung täglich zugutekommen.',
  },
  {
    nr: '03',
    titel: 'Womit ich arbeite',
    text: 'React, TypeScript, C#, .NET, Java und SQL. Besonders interessieren mich Cloud-Dienste, DevOps und kreative App-Ideen.',
  },
]

/** Eckdaten als Leiste - Kacheln kommen auf der Seite schon oft genug vor */
const fakten = [
  { label: 'Abschluss', value: 'Applikationsentwickler EFZ', zusatz: 'IPA-Wiederholung' },
  { label: 'Berufserfahrung', value: '10+ Jahre', zusatz: 'davon 10 im Metallbau' },
  { label: 'Schwerpunkt', value: 'Full-Stack', zusatz: 'Datenbank bis UI' },
  { label: 'Standort', value: 'Altdorf, Uri', zusatz: 'Schweiz' },
]

export function About() {
  return (
    // Warmer Cremeton - bewusst der einzige warme Abschnitt der Seite.
    <section id="about" className="py-24 px-6" style={{ background: '#faf6ef' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="&Uuml;ber mich"
          subtitle="Vom Metallbauer zum Applikationsentwickler"
        />

        <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
          {/* ---------------- Portrait ---------------- */}
          <figure className="relative mx-auto w-fit">
            {/* Versetzter Rahmen statt farbigem Block - ruhiger und gerade */}
            <span
              aria-hidden="true"
              className="absolute -z-10 rounded-[20px]"
              style={{
                inset: '18px -18px -18px 18px',
                border: '1px solid rgba(120, 100, 70, 0.35)',
              }}
            />
            <img
              src="/BewerbungsPortfolio/photo.jpeg"
              alt="Patrik Hafner"
              width={300}
              height={375}
              loading="lazy"
              className="relative block w-60 md:w-[300px] aspect-[4/5] object-cover object-top rounded-[18px]"
              style={{ boxShadow: '0 14px 36px rgba(60, 45, 25, 0.16)' }}
            />
            <figcaption className="mt-5 text-sm" style={{ color: '#8a7a63' }}>
              <span className="mono">Patrik Hafner</span> &middot; Altdorf, Uri
            </figcaption>
          </figure>

          {/* ---------------- Gegliederter Text ---------------- */}
          <div className="space-y-8">
            {abschnitte.map((a) => (
              <div
                key={a.nr}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-1 items-baseline"
              >
                <span
                  className="mono text-sm font-bold"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                >
                  {a.nr}
                </span>
                <h3
                  className="display font-bold text-lg leading-tight"
                  style={{ color: '#2b2419' }}
                >
                  {a.titel}
                </h3>
                <span aria-hidden="true" />
                <p
                  className="text-[15px] md:text-base leading-relaxed"
                  style={{ color: '#5b5040' }}
                >
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eckdaten ueber die volle Breite - in der schmalen Spalte wurde
            "Applikationsentwickler" mitten im Wort umbrochen. */}
        <dl
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 pt-7"
          style={{ borderTop: '1px solid rgba(120, 100, 70, 0.28)' }}
        >
          {fakten.map((f) => (
            <div key={f.label} className="min-w-0">
              <dt
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: 'var(--color-accent-light)' }}
              >
                {f.label}
              </dt>
              <dd
                className="display font-bold text-lg leading-tight"
                style={{ color: '#2b2419' }}
              >
                {f.value}
              </dd>
              <dd className="text-xs mt-1" style={{ color: '#8a7a63' }}>
                {f.zusatz}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
