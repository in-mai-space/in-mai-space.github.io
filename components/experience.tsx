import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { roles, sectionIndex } from '@/lib/content'

export function Experience() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          index={sectionIndex('work')}
          label="Experience"
          title={
            <>
              Places I&apos;ve <span className="font-serif italic text-accent">built & grown</span>
            </>
          }
        />

        <ul className="mt-10 sm:mt-12">
          {roles.map((r, i) => (
            <Reveal
              key={`${r.org} ${r.role}`}
              delay={i * 70}
              className="group border-t border-border first:border-t-0"
            >
              <li className="py-6 sm:py-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg tracking-tight sm:text-xl">{r.role}</h3>
                      <ArrowUpRight className="size-4 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      <a
                        href={r.orgHref}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {r.org}
                      </a>
                    </p>
                    {r.blurb && (
                      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                        {r.blurb}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="order-first shrink-0 font-mono text-xs text-muted-foreground sm:order-none sm:text-sm">
                    {r.period}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
