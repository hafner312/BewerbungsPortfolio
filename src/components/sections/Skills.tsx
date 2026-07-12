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
                <div className="card h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 shadow-md"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--color-text-primary), #1e3a4f)',
                      }}
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
