import { Reveal } from '../Reveal'
import { about } from '../../data/content'

export function About() {
  return (
    <section id="about" className="mt-24 md:mt-40 scroll-mt-24">
      <div className="container-site">
        {/* Heading + studio thumbs row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-start">
          <div className="flex flex-col gap-5 md:gap-7">
            <Reveal as="span" className="eyebrow block">
              {about.eyebrow}
            </Reveal>
            <Reveal as="h2" className="section-heading max-w-[640px]">
              {about.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120} className="hidden md:flex gap-4 pt-6">
            {about.studioThumbs.map((img) => (
              <div
                key={img.src}
                className="w-[180px] lg:w-[220px] aspect-[4/3] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </Reveal>
        </div>

        {/* Portrait + bio + stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-[minmax(320px,420px)_1fr] gap-10 md:gap-16 items-start">
          <Reveal variant="image" className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={about.portrait.src}
              alt={about.portrait.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <div className="flex flex-col gap-10 md:gap-14 md:pt-6">
            <Reveal
              as="p"
              delay={80}
              className="text-foreground/85 text-[0.95rem] md:text-[1rem] leading-[1.65] max-w-[640px]"
            >
              {about.bio}
            </Reveal>

            <Reveal
              delay={160}
              className="grid grid-cols-3 gap-4 md:gap-10 max-w-[620px]"
            >
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <div className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] leading-none">
                    {s.value}
                  </div>
                  <div className="text-[0.7rem] md:text-[0.78rem] text-subtle leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
