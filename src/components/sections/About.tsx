import { Quote } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

/** Eckdaten als Leiste statt als Kacheln - Kacheln gibt es auf der Seite schon genug */
const fakten = [
  { label: 'Abschluss', value: 'Applikationsentwickler EFZ', zusatz: 'IPA-Wiederholung' },
  { label: 'Berufserfahrung', value: '10+ Jahre', zusatz: 'davon 10 im Metallbau' },
  { label: 'Schwerpunkt', value: 'Full-Stack', zusatz: 'Datenbank bis UI' },
  { label: 'Standort', value: 'Altdorf, Uri', zusatz: 'Schweiz' },
]

export function About() {
  return (
    // Warmer Cremeton - bewusst der einzige warme Abschnitt, damit sich der
    // persoenliche Teil vom Rest der Seite abhebt.
    <section id="about" className="py-24 px-6" style={{ background: '#faf6ef' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="&Uuml;ber mich"
          subtitle="Vom Metallbauer zum Applikationsentwickler"
        />

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
          {/* ---------------- Portrait ---------------- */}
          <AnimatedSection>
            <figure className="relative mx-auto w-fit">
              {/* Farbblock dahinter, leicht gekippt */}
              <span
                aria-hidden="true"
                className="absolute -inset-3 rounded-[26px] -z-10"
                style={{ background: 'var(--color-accent)', transform: 'rotate(-4deg)' }}
              />
              <img
                src="/BewerbungsPortfolio/photo.jpeg"
                alt="Patrik Hafner"
                width={320}
                height={380}
                loading="lazy"
                className="relative w-64 md:w-80 aspect-[4/5] object-cover object-top rounded-[22px]"
                style={{
                  border: '5px solid #faf6ef',
                  boxShadow: '0 18px 44px rgba(60, 45, 25, 0.18)',
                  transform: 'rotate(1.5deg)',
                }}
              />
              <figcaption
                className="mt-6 text-center text-sm"
                style={{ color: '#8a7a63' }}
              >
                <span className="mono">Patrik Hafner</span> &middot; Altdorf, Uri
              </figcaption>
            </figure>
          </AnimatedSection>

          {/* ---------------- Text ---------------- */}
          <AnimatedSection delay={0.1}>
            {/* Leitsatz, gross gesetzt */}
            <div className="relative pl-10 mb-8">
              <Quote
                aria-hidden="true"
                size={34}
                className="absolute left-0 top-0"
                style={{ color: 'var(--color-accent)', opacity: 0.35 }}
              />
              <p
                className="display text-xl md:text-2xl leading-snug font-semibold"
                style={{ color: '#2b2419' }}
              >
                Nach über zehn Jahren im Metallbau habe ich noch einmal von vorne
                angefangen – diesmal mit Code.
              </p>
            </div>

            <div className="space-y-5 leading-relaxed text-[15px] md:text-base" style={{ color: '#5b5040' }}>
              <p>
                Ich bin in Ausbildung zum Applikationsentwickler EFZ (IPA-Wiederholung)
                und arbeite mit Leidenschaft an sauberer, wartbarer Software.
                Dabei verbinde ich kreative Ideen mit einer schnellen Auffassungsgabe.
              </p>
              <p>
                Aus meiner Zeit als Metallbauer bringe ich pr&auml;zises Arbeiten,
                technisches Verst&auml;ndnis, Zuverl&auml;ssigkeit und eine strukturierte
                Herangehensweise mit – Eigenschaften, die mir in der Entwicklung
                t&auml;glich zugutekommen.
              </p>
              <p>
                Ich arbeite mit modernen Technologien wie React, TypeScript, C#, .NET,
                Java und SQL. Besonders interessieren mich Cloud-Dienste, DevOps und
                kreative App-Ideen.
              </p>
            </div>

            {/* Eckdaten als Leiste mit Trennlinien */}
            <dl
              className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6"
              style={{ borderTop: '1px solid rgba(120, 100, 70, 0.22)' }}
            >
              {fakten.map((f, i) => (
                <div
                  key={f.label}
                  className="pt-5 px-4 first:pl-0"
                  style={{
                    borderLeft:
                      i === 0 ? 'none' : '1px solid rgba(120, 100, 70, 0.18)',
                  }}
                >
                  <dt
                    className="text-[11px] font-bold uppercase tracking-[0.14em] mb-1.5"
                    style={{ color: 'var(--color-accent-light)' }}
                  >
                    {f.label}
                  </dt>
                  <dd className="display font-bold text-base leading-tight" style={{ color: '#2b2419' }}>
                    {f.value}
                  </dd>
                  <dd className="text-xs mt-0.5" style={{ color: '#8a7a63' }}>
                    {f.zusatz}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
