import { Cooking } from './cooking'
import { Heading } from './work'
import { shelf } from '@/lib/content'

const current = shelf.filter((book) => book.current)

export function Play() {
  return (
    <div className="space-y-8">
      <section className="enter">
        <Heading>Reading</Heading>
        {current.length > 0 && (
          <div className="rounded-md border border-border px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              Reading now
            </p>
            <ul className="mt-1 space-y-0.5">
              {current.map((book) => (
                <li key={book.title}>
                  <span className="font-serif text-base italic">{book.title}</span>
                  <span className="text-sm text-muted-foreground"> · {book.author}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="enter">
        <Heading>Cooking</Heading>
        <p className="mb-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          I love cooking and experimenting with food, whether it&apos;s dinner for myself or trays
          and trays of prep for a big party. A few things from lately.
        </p>
        <Cooking />
      </section>
    </div>
  )
}
