import { Reveal } from '../Reveal'
import { cta } from '../../data/content'

export function CTA() {
  return (
    <section
      id="testimonial"
      aria-label="Call to action"
      className="mt-16 md:mt-24 overflow-hidden scroll-mt-24"
    >
      <div className="px-4 md:px-8">
        <Reveal>
          <a
            href="mailto:hello@maxmorgan.photo"
            className="display-2xl block text-center whitespace-nowrap leading-[0.88] transition-opacity hover:opacity-80"
          >
            {cta.title}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
