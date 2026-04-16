import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { Collage } from './components/sections/Collage'
import { DisplayName } from './components/sections/DisplayName'
import { About } from './components/sections/About'
import { Portfolio } from './components/sections/Portfolio'
import { Published } from './components/sections/Published'
import { ImageRow } from './components/sections/ImageRow'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Header />
      <main className="flex-1">
        <Hero />
        <Collage />
        <DisplayName />
        <About />
        <Portfolio />
        <Published />
        <ImageRow />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
