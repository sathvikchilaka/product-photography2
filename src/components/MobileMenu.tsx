import { useEffect } from 'react'
import { Logo } from './Logo'
import { CloseIcon } from './icons'
import { nav } from '../data/content'
import { cn } from '../lib/utils'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-50 md:hidden bg-background transition-opacity duration-300',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <div className="h-16 flex items-center justify-between px-5">
        <Logo size={30} />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border-soft text-foreground transition-colors hover:bg-accent/60 cursor-pointer"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="px-5 pt-8 pb-10 flex flex-col min-h-[calc(100dvh-4rem)]">
        <ul className="flex flex-col">
          {nav.map((item, idx) => (
            <li
              key={item.href}
              className={cn(
                'border-b border-border-soft',
                idx === 0 && 'border-t border-border-soft',
              )}
            >
              <a
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center py-6 text-[2rem] leading-none font-normal tracking-[-0.01em] text-foreground',
                  'transition-opacity hover:opacity-70',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@maxmorgan.photo"
          onClick={onClose}
          className={cn(
            'mt-6 inline-flex items-center justify-center h-16 rounded-[10px]',
            'border border-border text-foreground text-lg',
            'transition-colors hover:bg-accent/60 cursor-pointer',
          )}
        >
          Contact
        </a>
      </div>
    </div>
  )
}
