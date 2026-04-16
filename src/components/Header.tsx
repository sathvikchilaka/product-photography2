import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { LinkButton } from './Button'
import { MenuIcon } from './icons'
import { MobileMenu } from './MobileMenu'
import { nav } from '../data/content'
import { cn } from '../lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-colors',
          scrolled
            ? 'bg-background/75 backdrop-blur-xl border-b border-border-soft'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container-site h-16 md:h-20 flex items-center justify-between gap-6">
          <Logo size={30} />

          <nav className="hidden md:flex items-center gap-9 text-[0.95rem] text-foreground/90">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LinkButton
              href="mailto:hello@maxmorgan.photo"
              variant="outline"
              size="md"
              className="hidden md:inline-flex rounded-[10px] h-10 px-5"
            >
              Contact
            </LinkButton>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border-soft text-foreground transition-colors hover:bg-accent/60 cursor-pointer"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
