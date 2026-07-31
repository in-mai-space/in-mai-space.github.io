import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { projects, sectionIndex } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section id="projects" className="section bg-secondary/40">
      <div className="shell">
        <SectionHeading
          index={sectionIndex('projects')}
          label="Projects"
          title={
            <>
              Things I&apos;ve <span className="font-serif italic text-accent">made</span>
            </>
          }
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className={cn(p.featured && 'sm:col-span-2')}>
              <a
                href={p.href}
                target={p.href && '_blank'}
                rel={p.href && 'noreferrer'}
                className={cn(
                  'group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all sm:p-6',
                  p.href && 'hover:-translate-y-1 hover:border-accent',
                )}
              >
                <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg tracking-tight sm:text-xl">{p.name}</h3>
                    {p.href && (
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    )}
                  </div>
                  <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap items-center gap-2">
                  <span className="mr-1 font-mono text-xs text-accent">{p.year}</span>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
