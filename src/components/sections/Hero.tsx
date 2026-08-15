import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ChevronDown, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'
import { RotatingText } from '../ui/RotatingText'
import { CodeCard } from '../ui/CodeCard'

const rollen = [
  'Full-Stack-Entwickler',
  'React & TypeScript',
  'C# und .NET',
  'Java & Spring Boot',
  'Docker & Kubernetes',
]

const stack = ['TypeScript', 'React', 'C# / .NET', 'Java', 'SQL', 'Docker']

export function Hero() {
  return (
    // pt-28/pb-20 halten den Inhalt frei von der fixen Navigationsleiste (4rem)
    // und vom Scroll-Pfeil am unteren Rand.
    <section
      id="hero"
      className="grain min-h-screen flex items-center px-6 pt-28 pb-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef4f7 0%, #ffffff 45%, #e6f5f3 100%)' }}
    >
      <div className="aurora" aria-hidden="true" />
      <div className="aurora aurora-2" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        {/* ---------------- linke Spalte: Inhalt ---------------- */}
        <div className="text-center lg:text-left">
          <span
            className="rise-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              color: 'var(--color-accent-light)',
              borderColor: 'rgba(13, 148, 136, 0.3)',
              boxShadow: '0 2px 12px rgba(13, 148, 136, 0.12)',
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ background: 'var(--color-success)' }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: 'var(--color-success)' }}
              />
            </span>
            Offen f&uuml;r neue Stellen &middot; sofort verf&uuml;gbar
          </span>

          <h1
            className="shine-text rise-in text-5xl md:text-6xl xl:text-7xl font-bold mb-4 leading-[1.05] pb-1"
            style={{ animationDelay: '0.08s' }}
          >
            Patrik Hafner
          </h1>

          <p
            className="rise-in text-lg md:text-xl mb-2"
            style={{ color: 'var(--color-text-secondary)', animationDelay: '0.16s' }}
          >
            Applikationsentwickler EFZ (IPA-Wiederholung)
          </p>

          <p
            className="rise-in text-lg md:text-xl mb-6 font-medium flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            style={{ color: 'var(--color-text-secondary)', animationDelay: '0.22s' }}
          >
            <span className="font-light" style={{ color: 'var(--color-text-muted)' }}>
              Schwerpunkt:
            </span>
            <RotatingText items={rollen} />
          </p>

          <p
            className="rise-in text-base md:text-lg mb-7 max-w-xl mx-auto lg:mx-0"
            style={{ color: 'var(--color-text-muted)', lineHeight: '1.75', animationDelay: '0.3s' }}
          >
            Ich entwickle saubere, wartbare Software mit modernen Technologien,
            von der Datenbankschicht bis ins UI und vom Konzept bis zum Deployment.
          </p>

          {/* Technologien als Beleg statt blosser Behauptung */}
          <ul
            className="rise-in flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            style={{ animationDelay: '0.36s' }}
          >
            {stack.map((t) => (
              <li
                key={t}
                className="mono px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {t}
              </li>
            ))}
          </ul>

          <div
            className="rise-in flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            style={{ animationDelay: '0.42s' }}
          >
            <Button as="a" href="#projects" variant="primary" size="lg">
              Meine Projekte
            </Button>
            <Button
              as="a"
              href="/BewerbungsPortfolio/bewerbungsunterlagen/lebenslauf.pdf?v=20260716"
              variant="secondary"
              size="lg"
            >
              Lebenslauf als PDF
            </Button>
          </div>

          <div
            className="rise-in flex gap-5 justify-center lg:justify-start items-center mt-7"
            style={{ animationDelay: '0.48s' }}
          >
            <a
              href="https://github.com/hafner312"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:hafner312@gmail.com"
              className="transition-colors hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="E-Mail senden"
            >
              <MdEmail size={24} />
            </a>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <MapPin size={15} />
              Altdorf, Uri
            </span>
          </div>
        </div>

        {/* ---------------- rechte Spalte: Code-Karte ---------------- */}
        <div className="rise-in hidden lg:flex justify-end" style={{ animationDelay: '0.3s' }}>
          <CodeCard />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce"
        style={{ color: 'var(--color-text-muted)' }}
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
