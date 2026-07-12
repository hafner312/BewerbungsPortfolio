import { Layout, Server, Cloud, Wrench } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { skills, categoryLabels } from '../../data/skills'
import type { Skill } from '../../types'

const categoryIcons: Record<Skill['category'], typeof Layout> = {
  frontend: Layout,
  backend: Server,
  devops: Cloud,
  tools: Wrench,
}

const categories = Object.keys(categoryLabels) as Skill['category'][]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-bg-base)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Fähigkeiten"
          subtitle="Technologien und Werkzeuge, mit denen ich arbeite"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat]
            const items = skills.filter((s) => s.category === cat)
            return (
              <AnimatedSection key={cat} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 2px 10px rgba(15,23,42,0.07)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 12px 34px rgba(13,148,136,0.20)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 2px 10px rgba(15,23,42,0.07)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                      style={{ background: 'var(--color-text-primary)' }}
                    >
                      <Icon size={20} className="text-white" />
                    </span>
                    <div>
                      <h3
                        className="font-bold text-lg leading-tight"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {categoryLabels[cat]}
                      </h3>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {items.length} Technologien
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill.name}>{skill.name}</Badge>
                    ))}
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
