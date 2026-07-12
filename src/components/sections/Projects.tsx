import { Award, ExternalLink, Github } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'

export function Projects() {
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
                  className="card relative h-full flex flex-col rounded-2xl overflow-hidden"
                  style={
                    isHighlight
                      ? {
                          border: '2px solid var(--color-accent)',
                          boxShadow: '0 6px 26px rgba(13,148,136,0.22)',
                        }
                      : undefined
                  }
                >
                  <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-6xl drop-shadow-lg">{project.icon}</span>
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
