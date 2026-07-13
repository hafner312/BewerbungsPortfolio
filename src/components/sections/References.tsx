import { useState } from 'react'
import { ChevronDown, FileText } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const documents = [
  {
    title: 'Arbeitsbestätigung Persigo AG',
    caption: 'Temporäreinsatz als Metallbauer, 11.09.2023 – 19.10.2023.',
    image: '/BewerbungsPortfolio/zeugnisse/persigo-arbeitsbestaetigung.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/persigo-arbeitsbestaetigung.pdf',
  },
  {
    title: 'Arbeitsbestätigung Stellenpartner Zug AG',
    caption: 'Temporäreinsatz als Metallbauer, 12.12.2022 – 19.01.2023.',
    image: '/BewerbungsPortfolio/zeugnisse/stellenpartner-zug-arbeitsbestaetigung.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/stellenpartner-zug-arbeitsbestaetigung.pdf',
  },
  {
    title: 'Arbeitszeugnis Arthur Weber AG',
    caption: 'Logistiker im Lager Schattdorf, 11.01.2021 – 31.12.2021.',
    image: '/BewerbungsPortfolio/zeugnisse/arthur-weber-arbeitszeugnis.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/arthur-weber-arbeitszeugnis.pdf',
  },
  {
    title: 'Arbeitsbestätigung WALKER Stahl- und Metallbau AG',
    caption: 'Metallbauer EFZ, 23.04.2018 – 30.06.2018.',
    image: '/BewerbungsPortfolio/zeugnisse/walker-arbeitsbestaetigung.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/walker-arbeitsbestaetigung.pdf',
  },
  {
    title: 'Arbeitszeugnis Alters- und Pflegeheim Rüttigarten',
    caption: 'Zivildiensteinsatz in der Pflege, 15.05.2017 – 28.07.2017.',
    image: '/BewerbungsPortfolio/zeugnisse/ruettigarten-arbeitszeugnis.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/ruettigarten-arbeitszeugnis.pdf',
  },
  {
    title: 'Arbeitszeugnis Emil Gisler AG (GIPO)',
    caption: 'Komponentenschlosserei im Maschinenbau, 03.10.2016 – 31.03.2017.',
    image: '/BewerbungsPortfolio/zeugnisse/emil-gisler-arbeitszeugnis.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/emil-gisler-arbeitszeugnis.pdf',
  },
  {
    title: 'Ausbildungszeugnis Louis Zurfluh AG',
    caption: '4-jährige Ausbildung zum Metallbauer EFZ, 01.08.2011 – 31.07.2015, mit Erfolg beendet.',
    image: '/BewerbungsPortfolio/zeugnisse/louis-zurfluh-ag-ausbildungszeugnis.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/louis-zurfluh-ag-ausbildungszeugnis.pdf',
  },
  {
    title: 'Fähigkeitszeugnis Metallbauer EFZ',
    caption: 'Eidgenössisches Fähigkeitszeugnis, Amt für Berufsbildung und Mittelschulen Uri, 23. Juni 2015.',
    image: '/BewerbungsPortfolio/zeugnisse/faehigkeitszeugnis-metallbauer-efz.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/faehigkeitszeugnis-metallbauer-efz.pdf',
  },
]

export function References() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="references" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Zeugnisse"
          subtitle="Arbeitszeugnisse und Qualifikationsnachweise"
        />

        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            style={{
              background: 'var(--color-accent-glow)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(13,148,136,0.25)',
            }}
            aria-expanded={expanded}
          >
            <ChevronDown
              size={18}
              className="transition-transform duration-300"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
            />
            {expanded ? 'Zeugnisse ausblenden' : `${documents.length} Zeugnisse anzeigen`}
          </button>
        </div>

        {expanded && (
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={(i % 4) * 0.1}>
                <figure className="card h-full overflow-hidden rounded-2xl">
                  <a
                    href={doc.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[var(--color-bg-elevated)]"
                    aria-label={`${doc.title} als PDF öffnen`}
                  >
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="aspect-[4/3] w-full object-contain p-3"
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="border-t border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {doc.caption}
                    </p>
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <FileText size={14} />
                      Als PDF öffnen
                    </a>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
