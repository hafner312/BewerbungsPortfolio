import { Award, Briefcase, Download, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { timeline } from '../../data/timeline'
import type { TimelineEntry } from '../../types'

const typeIcon = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
}

function TimelineItem({ entry, index, isLast }: { entry: TimelineEntry; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const Icon = typeIcon[entry.type]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-10"
    >
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent)] flex items-center justify-center shrink-0">
          <Icon size={16} className="text-[var(--color-accent)]" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-[var(--color-border)] mt-2" />}
      </div>

      <div className="pb-4 flex-1">
        <span className="mono text-xs font-medium text-[var(--color-accent)] uppercase tracking-widest">
          {entry.date}
        </span>
        <h3 className="text-[var(--color-text-primary)] font-bold text-lg mt-1">
          {entry.title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm mb-3">
          {entry.organization} · {entry.location}
        </p>
        <ul className="space-y-1">
          {entry.description.map((point, i) => (
            <li key={i} className="text-[var(--color-text-secondary)] text-sm flex gap-2">
              <span className="text-[var(--color-accent)] mt-1">›</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-[var(--color-bg-base)]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Lebenslauf"
          subtitle="Mein beruflicher und akademischer Werdegang"
        />

        <div className="flex justify-center mb-10">
          <Button as="a" href="/BewerbungsPortfolio/bewerbungsunterlagen/lebenslauf.pdf?v=20260716" variant="secondary">
            <Download size={16} />
            Lebenslauf als PDF
          </Button>
        </div>

        <div>
          {timeline.map((entry, i) => (
            <TimelineItem key={i} entry={entry} index={i} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
