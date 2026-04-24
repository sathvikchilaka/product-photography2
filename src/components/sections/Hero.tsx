import { LinkButton } from '../Button'
import { hero } from '../../data/content'

export function Hero() {
  return (
    <section id="top" className="relative pt-6 md:pt-10">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[980px] pt-10 md:pt-24">
          <h1
            className="display-xl mount-reveal-scale"
            style={{ ['--mount-delay' as string]: '40ms' }}
          >
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="eyebrow max-w-[640px] text-[0.95rem] md:text-[0.95rem] mount-reveal"
            style={{ ['--mount-delay' as string]: '160ms' }}
          >
            {hero.eyebrow}
          </p>

          <div
            className="flex flex-row gap-3 md:gap-4 pt-2 mount-reveal"
            style={{ ['--mount-delay' as string]: '260ms' }}
          >
            <LinkButton
              href={hero.ctas.primary.href}
              variant="primary"
              size="lg"
              className="h-12 md:h-12 px-6 md:px-7"
            >
              {hero.ctas.primary.label}
            </LinkButton>
            <LinkButton
              href={hero.ctas.secondary.href}
              variant="outline"
              size="lg"
              className="h-12 md:h-12 px-6 md:px-7"
            >
              {hero.ctas.secondary.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
