'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { sectionIndex, shelf } from '@/lib/content'
import { cn } from '@/lib/utils'

const tones = [
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
  'bg-secondary text-secondary-foreground',
]

const spineHeight = (title: string, author: string) =>
  Math.min(300, Math.max(190, 76 + (title.length + author.length) * 6))

export function Reading() {
  const scroller = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const active = shelf[hovered ?? shelf.findIndex((book) => book.current)] ?? shelf[0]

  const nudge = (direction: number) =>
    scroller.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })

  return (
    <section id="reading" className="section">
      <div className="shell">
        <SectionHeading
          index={sectionIndex('reading')}
          label="Bookshelf"
          title={
            <>
              On my <span className="font-serif italic text-accent">nightstand</span>
            </>
          }
          lede="Books I've read this year, plus the one I'm in the middle of. Two book clubs and whatever I pick up on my own, so my backlog is never empty, and many of them are amazing recommendations from my mom and my coworkers."
        />

        <Reveal delay={80} className="mt-10 sm:mt-12">
          <div className="flex min-h-9 items-center justify-between gap-4">
            <p className="flex min-w-0 items-baseline gap-2 text-sm">
              {active.current && (
                <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  Most recent
                </span>
              )}
              <span className="truncate">
                <span className="font-medium">{active.title}</span>
                <span className="text-muted-foreground"> · {active.author}</span>
              </span>
            </p>

            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Scroll shelf left"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Scroll shelf right"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative -mx-5 mt-4 sm:-mx-8">
            <div
              ref={scroller}
              className="no-scrollbar flex items-end gap-2 overflow-x-auto px-5 pb-4 pt-6 sm:gap-3 sm:px-8"
            >
              {shelf.map((book, i) => (
                <div
                  key={book.title}
                  title={`${book.title} — ${book.author}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ height: `${spineHeight(book.title, book.author)}px` }}
                  className={cn(
                    'flex w-14 shrink-0 flex-col justify-between overflow-hidden rounded-md border border-border p-3 shadow-sm transition-transform duration-300 hover:-translate-y-2 sm:w-16',
                    tones[i % tones.length],
                    book.current && 'ring-2 ring-accent ring-offset-2 ring-offset-background',
                  )}
                >
                  {book.current ? (
                    <span className="size-2 rounded-full bg-accent ring-2 ring-card" />
                  ) : (
                    <span className="font-mono text-[10px] opacity-70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  )}
                  <span className="[writing-mode:vertical-rl] rotate-180">
                    <span className="block text-xs font-medium leading-tight">{book.title}</span>
                    <span className="mt-1 block text-[10px] opacity-70">{book.author}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mx-5 h-2 rounded-full bg-border sm:mx-8" />

            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent sm:w-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent sm:w-10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
