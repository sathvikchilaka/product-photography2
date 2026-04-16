import { LinkButton } from '../Button'
import { Reveal } from '../Reveal'
import { hero } from '../../data/content'

export function Hero() {
  return (
    <section id="top" className="relative pt-6 md:pt-10">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[980px] pt-10 md:pt-24">
          <Reveal as="h1" className="display-xl">
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="eyebrow max-w-[640px] text-[0.95rem] md:text-[0.95rem]"
          >
            {hero.eyebrow}
          </Reveal>

          <Reveal
            delay={220}
            className="flex flex-row gap-3 md:gap-4 pt-2"
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
