import { cn } from '../lib/utils'

type LogoProps = {
  className?: string
  /** px size for the M glyph */
  size?: number
}

export function Logo({ className, size = 34 }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Max Morgan — home"
      className={cn(
        'inline-flex items-baseline leading-none text-foreground transition-opacity hover:opacity-80',
        className,
      )}
      style={{ fontSize: `${size}px` }}
    >
      <span className="font-black tracking-[-0.05em]">M</span>
      <span className="font-normal tracking-[-0.05em] text-subtle">M</span>
    </a>
  )
}
