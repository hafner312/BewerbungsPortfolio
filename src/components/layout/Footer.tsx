import { ArrowUp, Mail, MapPin } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const quickLinks = [
  { label: '\u00dcber mich', href: '#about' },
  { label: 'F\u00e4higkeiten', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Lebenslauf', href: '#timeline' },
  { label: 'Kontakt', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/hafner312', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hafner312@gmail.com', label: 'E-Mail' },
]

export function Footer() {
  return (
    <footer className="relative" style={{ background: 'var(--color-bg-elevated)' }}>
      <div
        className="h-1 w-full"
        style={{
          background:
            'linear-gradient(90deg, var(--color-accent), var(--color-accent-2))',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#hero" className="group inline-flex items-center gap-2.5 mb-4">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-bold text-sm shadow-md transition-transform group-hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
                }}
              >
                PH
              </span>
              <span className="display font-bold text-lg text-[var(--color-text-primary)] tracking-tight">
                Patrik Hafner
              </span>
            </a>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Applikationsentwickler EFZ (IPA-Wiederholung), mit Fokus auf saubere,
              wartbare Software vom Konzept bis zum Deployment.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-[var(--color-text-muted)]">
              <MapPin size={15} style={{ color: 'var(--color-accent)' }} />
              Altdorf, Uri – Schweiz
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Vernetzen
            </h4>
            <a
              href="mailto:hafner312@gmail.com"
              className="inline-block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-5"
            >
              hafner312@gmail.com
            </a>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-bg-surface)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--color-accent)'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--color-bg-surface)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-sm text-[var(--color-text-muted)] flex flex-wrap items-center justify-center gap-x-2">
            <span>© {new Date().getFullYear()} Patrik Hafner · Mit React und TypeScript gebaut</span>
            <span aria-hidden="true">·</span>
            <a href="/BewerbungsPortfolio/impressum.html" className="hover:text-[var(--color-accent)] transition-colors">
              Impressum
            </a>
            <span aria-hidden="true">·</span>
            <a href="/BewerbungsPortfolio/datenschutz.html" className="hover:text-[var(--color-accent)] transition-colors">
              Datenschutz
            </a>
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Nach oben
            <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
