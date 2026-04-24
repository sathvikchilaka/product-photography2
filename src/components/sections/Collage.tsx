import { Img } from '../Img'
import { collageImages } from '../../data/content'

/**
 * Asymmetric photo collage with overlapping cards.
 * Positions are intentional — not a grid — to mirror the reference composition.
 */
export function Collage() {
  const [i0, i1, i2, i3, i4] = collageImages

  return (
    <section aria-label="Featured work" className="relative mt-12 md:mt-20">
      {/* Desktop / tablet */}
      <div className="hidden md:block container-site">
        <div className="relative h-[560px] lg:h-[660px] xl:h-[720px]">
          {/* Far left small portrait */}
          <div
            className="absolute overflow-hidden"
            style={{ left: '2%', top: '4%', width: '15%', aspectRatio: '3 / 4' }}
          >
            <Img src={i0.src} alt={i0.alt} phWidth={600} phHeight={800} className="h-full w-full object-cover grayscale" loading="lazy" />
          </div>

          {/* Small square next to it */}
          <div
            style={{ left: '20%', top: '32%', width: '15%', aspectRatio: '1 / 1' }}
            className="absolute overflow-hidden"
          >
            <Img src={i1.src} alt={i1.alt} phWidth={600} phHeight={600} className="h-full w-full object-cover" loading="lazy" />
          </div>

          {/* Large tall center image */}
          <div
            style={{ left: '38%', top: '0%', width: '30%', aspectRatio: '3 / 4.35' }}
            className="absolute overflow-hidden"
          >
            <Img src={i2.src} alt={i2.alt} phWidth={900} phHeight={1200} className="h-full w-full object-cover" loading="lazy" />
          </div>

          {/* Small portrait lower-left */}
          <div
            style={{ left: '11%', top: '58%', width: '13%', aspectRatio: '3 / 4' }}
            className="absolute overflow-hidden"
          >
            <Img src={i3.src} alt={i3.alt} phWidth={500} phHeight={650} className="h-full w-full object-cover" loading="lazy" />
          </div>

          {/* Right-edge portrait */}
          <div
            style={{ right: '1%', top: '14%', width: '16%', aspectRatio: '3 / 4.35' }}
            className="absolute overflow-hidden"
          >
            <Img src={i4.src} alt={i4.alt} phWidth={500} phHeight={720} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Mobile — matches the overlapping mobile screenshot */}
      <div className="md:hidden px-5">
        <div className="relative h-[560px]">
          <div
            className="absolute overflow-hidden"
            style={{ left: 0, top: '8%', width: '38%', aspectRatio: '4 / 3' }}
          >
            <Img src={i1.src} alt={i1.alt} phWidth={600} phHeight={600} className="h-full w-full object-cover" loading="lazy" />
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ left: 0, top: '44%', width: '38%', aspectRatio: '1 / 1' }}
          >
            <Img src={i3.src} alt={i3.alt} phWidth={500} phHeight={650} className="h-full w-full object-cover" loading="lazy" />
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ left: '34%', top: 0, width: '54%', aspectRatio: '3 / 5' }}
          >
            <Img src={i2.src} alt={i2.alt} phWidth={900} phHeight={1200} className="h-full w-full object-cover" loading="lazy" />
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ right: '-1.25rem', top: '26%', width: '28%', aspectRatio: '3 / 5' }}
          >
            <Img src={i4.src} alt={i4.alt} phWidth={500} phHeight={720} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
