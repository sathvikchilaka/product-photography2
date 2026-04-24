import { Reveal } from '../Reveal'

export function DisplayName() {
  return (
    <section aria-label="Max Morgan" className="mt-14 md:mt-24 overflow-hidden">
      <div className="px-4 md:px-8">
        <Reveal
          as="h2"
          variant="slide"
          className="display-name tracking-wider leading-64 text-nowrap uppercase text-8xl font-black text-center"
        >
          Santhosh Racharla
        </Reveal>
      </div>
    </section>
  )
}
