interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-1.5" aria-hidden="true">
        <span
          className="w-12 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent))' }}
        />
        <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-accent)' }} />
        <span
          className="w-12 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-accent-2), transparent)' }}
        />
      </div>
    </div>
  )
}
