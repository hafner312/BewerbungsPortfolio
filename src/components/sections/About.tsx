import { Award, Code2, Lightbulb, Zap } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const stats = [
  { icon: Award, label: 'Abschluss', value: 'Applikationsentwickler EFZ (IPA-Wiederholung)' },
  { icon: Zap, label: 'Berufserfahrung', value: '10+ Jahre' },
  { icon: Code2, label: 'Tech-Stack', value: 'Full-Stack' },
  { icon: Lightbulb, label: 'Lernbereitschaft', value: 'Sehr hoch' },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="&Uuml;ber mich"
          subtitle="Vom Metallbauer zum Applikationsentwickler"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div
                className="w-full h-full rounded-3xl overflow-hidden p-[3px]"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-accent), var(--color-accent-cyan) 55%, var(--color-accent-2))',
                  boxShadow: '0 12px 40px rgba(13,148,136,0.25)',
                }}
              >
                <img
                  src="/BewerbungsPortfolio/photo.jpeg"
                  alt="Patrik Hafner"
                  className="w-full h-full object-cover object-top rounded-[21px]"
                />
              </div>
              <div
                className="absolute -inset-4 rounded-[2rem] -z-10 opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-green))' }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-5 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                Ich bin in Ausbildung zum Applikationsentwickler EFZ (IPA-Wiederholung)
                und arbeite mit Leidenschaft an sauberer, wartbarer Software.
                Dabei verbinde ich kreative Ideen mit einer schnellen Auffassungsgabe.
              </p>
              <p>
                Nach &uuml;ber 10 Jahren als Metallbauer habe ich den Schritt in die
                Informatik gewagt. Aus dieser Zeit bringe ich pr&auml;zises Arbeiten,
                technisches Verst&auml;ndnis, Zuverl&auml;ssigkeit und eine strukturierte
                Herangehensweise mit.
              </p>
              <p>
                Ich arbeite mit modernen Technologien wie React, TypeScript, C#, .NET,
                Java und SQL. Besonders interessieren mich Cloud-Dienste, DevOps und
                kreative App-Ideen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card flex items-center gap-3 p-4 rounded-2xl">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 shadow-md"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-text-primary), #1e3a4f)',
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                      {value}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
