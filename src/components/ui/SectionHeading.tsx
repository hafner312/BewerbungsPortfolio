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
      <div
        className="mt-5 mx-auto w-20 h-1 rounded-full"
        style={{
          background:
            'linear-gradient(90deg, var(--color-accent), var(--color-accent-green))',
        }}
      />
    </div>
  )
}
