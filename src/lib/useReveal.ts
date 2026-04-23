import { useEffect, useRef } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export function useReveal<T extends HTMLElement>(opts: Options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true, delay = 0 } = opts
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.setAttribute('data-revealed', 'true')
      return
    }
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh && rect.bottom > 0) {
      el.setAttribute('data-revealed', 'true')
      if (once) return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay) {
              window.setTimeout(() => entry.target.setAttribute('data-revealed', 'true'), delay)
            } else {
              entry.target.setAttribute('data-revealed', 'true')
            }
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            entry.target.setAttribute('data-revealed', 'false')
          }
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once, delay])

  return ref
}
