import type { ElementType, HTMLAttributes } from 'react'
import { useReveal } from '../lib/useReveal'
import { cn } from '../lib/utils'

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  delay?: number
  variant?: 'fade' | 'image'
}

export function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'fade',
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>({ delay })
  return (
    <Tag
      ref={ref as never}
      className={cn(variant === 'image' ? 'reveal-img' : 'reveal', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
