import { useState } from 'react'
import { cn } from './lib/utils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight">product-photography2</span>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Vite · React · TS · Tailwind 4
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-24 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Build something great
          </h1>
          <p className="text-sm text-muted-foreground max-w-md">
            Edit <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs">src/App.tsx</code> and save to test HMR.
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            className={cn(
              'cursor-pointer transition-colors rounded-md h-9 px-4 text-sm font-medium',
              'bg-primary text-primary-foreground hover:bg-primary/90',
              'focus-visible:ring-1 focus-visible:ring-ring',
              'disabled:pointer-events-none disabled:opacity-50',
            )}
          >
            Count is {count}
          </button>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-center text-xs text-muted-foreground">
          Built with Vite + React + Tailwind 4
        </div>
      </footer>
    </div>
  )
}

export default App
