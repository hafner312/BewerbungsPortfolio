import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef4f7 0%, #ffffff 45%, #e6f5f3 100%)' }}
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="blob-drift absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--color-accent)' }}
      />
      <div
        className="blob-drift-slow absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--color-accent-2)' }}
      />
      <div
        className="blob-drift absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--color-accent-cyan)' }}
      />

      <div className="relative z-10 max-w-3xl">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border backdrop-blur-sm"
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
          Offen f&uuml;r neue Stellen
        </span>

        <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 leading-tight pb-1">
          Patrik Hafner
        </h1>

        <p className="text-xl md:text-2xl mb-10 font-light" style={{ color: 'var(--color-text-secondary)' }}>
          Applikationsentwickler EFZ (IPA-Wiederholung)
          <span style={{ color: 'var(--color-accent)' }}> &middot; </span>
          Full-Stack-Entwickler
        </p>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
          Ich entwickle saubere, wartbare Software mit modernen Technologien,
          von der Datenbankschicht bis ins UI und vom Konzept bis zum Deployment.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button as="a" href="#projects" variant="primary" size="lg">
            Meine Projekte
          </Button>
          <Button as="a" href="/BewerbungsPortfolio/bewerbungsunterlagen/cv.pdf" variant="secondary" size="lg">
            Lebenslauf als PDF
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/hafner312"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:hafner312@gmail.com"
            className="transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            aria-label="E-Mail senden"
          >
            <MdEmail size={26} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 transition-colors animate-bounce"
        style={{ color: 'var(--color-text-muted)' }}
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
