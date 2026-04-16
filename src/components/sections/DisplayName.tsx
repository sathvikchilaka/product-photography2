import { Reveal } from '../Reveal'
import { displayName } from '../../data/content'

export function DisplayName() {
  return (
    <section aria-label="Max Morgan" className="mt-14 md:mt-24 overflow-hidden">
      <div className="px-4 md:px-8">
        <Reveal
          as="h2"
          className="display-name text-center leading-none"
        >
          {displayName}
        </Reveal>
      </div>
    </section>
  )
}
