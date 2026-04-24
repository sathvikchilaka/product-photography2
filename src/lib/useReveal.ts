import { useEffect, useRef } from 'react'

type Options = {
  delay?: number
}

export function useReveal<T extends HTMLElement>(opts: Options = {}) {
  const { delay = 0 } = opts
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer: number | undefined
    const raf = requestAnimationFrame(() => {
      if (delay) {
        timer = window.setTimeout(() => el.setAttribute('data-revealed', 'true'), delay)
      } else {
        el.setAttribute('data-revealed', 'true')
      }
    })
    return () => {
      cancelAnimationFrame(raf)
      if (timer) window.clearTimeout(timer)
    }
  }, [delay])

  return ref
}
