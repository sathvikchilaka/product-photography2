import { useEffect, useRef } from 'react'

type Options = {
  delay?: number
}

/**
 * Reveals `.reveal` / `.reveal-img` / `.reveal-slide` elements by setting
 * `data-revealed="true"` once they enter the viewport or are scrolled past.
 *
 * Uses a scroll + resize listener rather than IntersectionObserver: simpler,
 * deterministic, and avoids IO edge cases (missed initial callbacks after
 * hash-nav, StrictMode double-mount timing, smooth-scroll interactions).
 *
 * An element is revealed when:
 *   - Its bottom has scrolled above the viewport top (scrolled past), OR
 *   - Its top has crossed into the upper 88% of the viewport (entering).
 *
 * Once revealed, listeners are detached for that element.
 */
export function useReveal<T extends HTMLElement>({ delay = 0 }: Options = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let revealed = false
    let delayTimer: number | undefined

    const reveal = () => {
      if (revealed) return
      revealed = true
      detach()
      if (delay) {
        delayTimer = window.setTimeout(
          () => el.setAttribute('data-revealed', 'true'),
          delay,
        )
      } else {
        el.setAttribute('data-revealed', 'true')
      }
    }

    const check = () => {
      if (revealed) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.bottom <= 0 || rect.top < vh * 0.88) reveal()
    }

    const detach = () => {
      window.removeEventListener('scroll', check, true)
      window.removeEventListener('resize', check)
    }

    // Defer first check until after first paint + any hash-anchor scroll settles.
    const raf = requestAnimationFrame(check)
    // Capture-phase scroll catches scrolls on any ancestor (incl. document).
    window.addEventListener('scroll', check, { passive: true, capture: true })
    window.addEventListener('resize', check, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      detach()
      if (delayTimer) window.clearTimeout(delayTimer)
    }
  }, [delay])

  return ref
}
