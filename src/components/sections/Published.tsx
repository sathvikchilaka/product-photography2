import type { ReactNode } from 'react'
import { Reveal } from '../Reveal'
import { published } from '../../data/content'

function LogoTile({ children }: { children: ReactNode }) {
  return (
    <div className="h-24 md:h-28 bg-foreground text-background rounded-[4px] flex items-center justify-center overflow-hidden px-4">
      {children}
    </div>
  )
}

/** Neutral placeholder wordmark variations — purely decorative. */
function LogoVariant({ v }: { v: number }) {
  const t = 'tracking-[-0.04em]'
  switch (v) {
    case 0:
      return (
        <span className={`text-[1.35rem] ${t}`}>
          <span className="font-black">Logo</span>
          <span className="font-black">ipsum</span>
        </span>
      )
    case 1:
      return (
        <span className={`text-[1.3rem] ${t} italic`}>
          <span className="font-black not-italic mr-0.5">L</span>OGO<span className="font-black not-italic ml-0.5">ipsum</span>
        </span>
      )
    case 2:
      return (
        <span className="inline-flex items-center gap-2 text-[1.4rem] font-black">
          <span className="inline-block w-4 h-4 rounded-full bg-background" />
          LOGO
        </span>
      )
    case 3:
      return (
        <span className={`text-[1.25rem] ${t} font-black flex items-center gap-2`}>
          <span className="inline-block w-3.5 h-3.5 rotate-45 bg-background" />
          Logoipsum
        </span>
      )
    case 4:
      return (
        <span className="text-[1.1rem] font-semibold tracking-[0.18em]">
          LOGOIPSUM
        </span>
      )
    case 5:
    default:
      return (
        <span className={`text-[1.25rem] ${t} font-black flex items-center gap-2`}>
          <span className="inline-block w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-background" />
          Logoipsum
        </span>
      )
  }
}

export function Published() {
  return (
    <section id="published" className="mt-28 md:mt-40 scroll-mt-24">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-16 items-start">
          <div className="flex flex-col gap-5 md:gap-6">
            <Reveal as="h2" className="section-heading max-w-[520px]">
              {published.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              className="text-subtle text-[0.95rem] max-w-[460px] leading-[1.65]"
            >
              {published.description}
            </Reveal>
          </div>

          <Reveal delay={120} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <LogoTile key={i}>
                <LogoVariant v={i} />
              </LogoTile>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
