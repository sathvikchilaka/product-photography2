import { Reveal } from '../Reveal'
import { imageRow } from '../../data/content'

export function ImageRow() {
  return (
    <section aria-label="Featured images" className="mt-16 md:mt-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
        {imageRow.map((img, i) => (
          <Reveal
            key={img.src}
            variant="image"
            delay={i * 100}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
