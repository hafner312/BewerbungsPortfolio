import { Award, ExternalLink, Github, Info } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { useSpotlight } from '../ui/useSpotlight'
import { projects } from '../../data/projects'

export function Projects() {
  const onMove = useSpotlight()

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projekte"
          subtitle="Ausgewählte Arbeiten aus meiner Entwicklertätigkeit"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isHighlight = !!project.highlight
            return (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div
                  onMouseMove={onMove}
                  className={`card spotlight group relative h-full flex flex-col rounded-2xl overflow-hidden ${
                    isHighlight ? 'pulse-ring' : ''
                  }`}
                  style={
                    isHighlight
                      ? { border: '2px solid var(--color-accent)' }
                      : undefined
                  }
                >
                  <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    {project.image ? (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}projekte/${project.image}`}
                          alt={project.imageAlt ?? ''}
                          loading="lazy"
                          decoding="async"
                          width={880}
                          height={495}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Verlauf nach unten: laesst das Bild in die Karte uebergehen
                            und haelt das Emoji-Abzeichen gut lesbar */}
                        <div
                          className="absolute inset-0"
                          aria-hidden="true"
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(15,23,42,0) 45%, rgba(15,23,42,0.42) 100%)',
                          }}
                        />
                        <span className="absolute bottom-3 left-3 flex items-center justify-center w-11 h-11 rounded-xl text-2xl bg-white/85 backdrop-blur-sm shadow-md transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
                          {project.icon}
                        </span>
                      </>
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
                        {project.icon}
                      </span>
                    )}

                    {isHighlight && (
                      <span
                        className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                        style={{ background: 'var(--color-accent-2)' }}
                      >
                        <Award size={13} />
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <h3 className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm transition-colors"
                          style={{ color: 'var(--color-text-muted)' }}
                          onMouseOver={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                          onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                        >
                          <Github size={16} />
                          Code ansehen
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm transition-colors"
                          style={{ color: 'var(--color-text-muted)' }}
                          onMouseOver={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                          onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                        >
                          <ExternalLink size={16} />
                          Live-Demo
                        </a>
                      )}
                    </div>

                    {project.hostingNote && (
                      <p
                        className="flex items-start gap-1.5 text-xs leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <Info size={13} className="mt-0.5 flex-shrink-0" />
                        {project.hostingNote}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
