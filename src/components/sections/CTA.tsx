import { Reveal } from '../Reveal'
import { cta } from '../../data/content'

export function CTA() {
  return (
    <section
      id="testimonial"
      aria-label="Call to action"
      className="mt-16 md:mt-24 overflow-hidden scroll-mt-24"
    >
      <div className="container-site">
        <Reveal>
          <a
            href="mailto:hello@maxmorgan.photo"
            className="display-cta block text-center transition-opacity hover:opacity-80"
          >
            {cta.title}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
