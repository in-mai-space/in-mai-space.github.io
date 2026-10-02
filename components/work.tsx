import { ArrowUpRight } from 'lucide-react'
import { Accordion } from './accordion'
import { projects, roles } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{children}</h2>
}

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export function Work() {
  return (
    <Accordion
      className="border-l border-border"
      itemClassName="pl-6"
      items={roles.map((r, i) => ({
        id: slug(`${r.org} ${r.role}`),
        header: (
          <>
            <span
              aria-hidden
              className="absolute -left-[5.5px] top-[17px] flex size-2.5 items-center justify-center"
            >
              {i === 0 && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
              )}
              <span
                className={cn(
                  'relative size-2.5 rounded-full border-2 border-background transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-data-open:bg-accent',
                  i === 0 ? 'bg-accent' : 'bg-border',
                )}
              />
            </span>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <p className="font-medium transition-colors group-hover:text-accent group-data-open:text-accent">
                {r.role}
              </p>
              <span className="order-last shrink-0 font-mono text-xs text-muted-foreground sm:order-none">
                {r.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{r.org}</p>
          </>
        ),
        body: (
          <>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{r.blurb}</p>
          </>
        ),
      }))}
    />
  )
}

export function Projects() {
  return (
    <Accordion
      className="divide-y divide-border"
      items={projects.map((p) => ({
        id: slug(p.name),
        header: (
          <div className="flex items-baseline justify-between gap-6">
            <p className="flex items-center gap-2.5">
              <span className="font-medium transition-colors group-hover:text-accent group-data-open:text-accent">
                {p.name}
              </span>
              {p.inProgress && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  In progress
                </span>
              )}
            </p>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{p.year}</span>
          </div>
        ),
        body: (
          <>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-muted-foreground">{p.tags.join(' · ')}</p>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  title="View on GitHub"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </>
        ),
      }))}
    />
  )
}
