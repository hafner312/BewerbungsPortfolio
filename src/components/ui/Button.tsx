import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-lg hover:shadow-[0_0_20px_var(--color-accent-glow)]',
    secondary:
      'border border-[var(--color-accent)] text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)]',
    ghost:
      'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
