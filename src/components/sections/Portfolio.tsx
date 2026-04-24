import { Reveal } from '../Reveal'
import { Img } from '../Img'
import { ArrowUpRight } from '../icons'
import { portfolioIntro, projects } from '../../data/content'
import { cn } from '../../lib/utils'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center h-8 px-3 border border-border-soft text-[0.78rem] text-foreground/85 rounded-[4px]">
      {children}
    </span>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="mt-28 md:mt-40 scroll-mt-24">
      <div className="container-site">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">
          <Reveal as="span" className="eyebrow">
            {portfolioIntro.eyebrow}
          </Reveal>
          <Reveal as="h2" className="section-heading max-w-[900px]">
            {portfolioIntro.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-subtle text-[0.95rem] max-w-[620px]"
          >
            {portfolioIntro.subtitle}
          </Reveal>
        </div>
      </div>

      <div className="mt-12 md:mt-20 flex flex-col gap-16 md:gap-24">
        {projects.map((p, idx) => (
          <ProjectBlock key={p.title} project={p} index={idx} />
        ))}
      </div>
    </section>
  )
}

type Project = (typeof projects)[number]

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <article className="w-full">
      <div className="group w-full h-[55vw] max-h-[620px] min-h-[320px] overflow-hidden">
        <Img
          src={project.image}
          alt={project.title}
          phWidth={1600}
          phHeight={900}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </div>

      <div className="container-site">
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-12">
          <Reveal className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-[1.5rem] md:text-[2rem] font-semibold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-5 md:pt-2 md:max-w-[460px]">
            <p className="text-foreground/85 text-[0.95rem] leading-[1.7]">
              {project.description}
            </p>
            <a
              href={project.href}
              className={cn(
                'inline-flex items-center gap-2 text-[0.95rem] text-foreground self-start',
                'transition-opacity hover:opacity-70',
              )}
            >
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
