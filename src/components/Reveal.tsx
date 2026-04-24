import type { ElementType, HTMLAttributes } from 'react'
import { useReveal } from '../lib/useReveal'
import { cn } from '../lib/utils'

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  delay?: number
  variant?: 'fade' | 'image' | 'slide'
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
  const variantClass =
    variant === 'image' ? 'reveal-img' : variant === 'slide' ? 'reveal-slide' : 'reveal'
  return (
    <Tag ref={ref as never} className={cn(variantClass, className)} {...rest}>
      {children}
    </Tag>
  )
}
