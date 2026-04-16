import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function X(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.53 3H20.3l-6.06 6.93L21.5 21h-5.6l-4.39-5.72L6.46 21H3.68l6.48-7.41L2.9 3h5.73l3.97 5.24L17.53 3Zm-.98 16.3h1.54L7.52 4.62H5.87l10.68 14.68Z" />
    </svg>
  )
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11Zm6 0h3.84v1.5h.06c.54-1 1.85-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.17v5.39h-4v-4.78c0-1.14-.02-2.6-1.58-2.6-1.59 0-1.84 1.24-1.84 2.52v4.86H9v-11Z" />
    </svg>
  )
}

export function YouTube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23 12s0-3.62-.46-5.36a2.77 2.77 0 0 0-1.95-1.95C18.84 4.23 12 4.23 12 4.23s-6.84 0-8.59.46A2.77 2.77 0 0 0 1.46 6.64C1 8.38 1 12 1 12s0 3.62.46 5.36a2.77 2.77 0 0 0 1.95 1.95c1.75.46 8.59.46 8.59.46s6.84 0 8.59-.46a2.77 2.77 0 0 0 1.95-1.95C23 15.62 23 12 23 12Zm-13.2 3.45V8.55L15.5 12l-5.7 3.45Z" />
    </svg>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  x: X,
  linkedin: LinkedIn,
  youtube: YouTube,
} as const

export type SocialIconName = keyof typeof socialIconMap
