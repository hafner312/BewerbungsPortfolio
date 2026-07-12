import { FileText } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const documents = [
  {
    title: 'Fähigkeitszeugnis Metallbauer EFZ',
    caption: 'Eidgenössisches Fähigkeitszeugnis, Amt für Berufsbildung und Mittelschulen Uri, 23. Juni 2015.',
    image: '/BewerbungsPortfolio/zeugnisse/faehigkeitszeugnis-metallbauer-efz.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/faehigkeitszeugnis-metallbauer-efz.pdf',
  },
  {
    title: 'Ausbildungszeugnis Louis Zurfluh AG',
    caption: '4-jährige Ausbildung zum Metallbauer EFZ, 01.08.2011 – 31.07.2015, mit Erfolg beendet.',
    image: '/BewerbungsPortfolio/zeugnisse/louis-zurfluh-ag-ausbildungszeugnis.jpg',
    pdf: '/BewerbungsPortfolio/zeugnisse/louis-zurfluh-ag-ausbildungszeugnis.pdf',
  },
]

export function References() {
  return (
    <section id="references" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Zeugnisse"
          subtitle="Arbeitszeugnisse und Qualifikationsnachweise"
        />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {documents.map((doc, i) => (
            <AnimatedSection key={doc.title} delay={i * 0.1}>
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
      </div>
    </section>
  )
}
