'use client'

import { ArrowUpRight, Clapperboard, Tv } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { films, sectionIndex, shows } from '@/lib/content'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'films', label: 'Films on repeat', icon: Clapperboard },
  { id: 'shows', label: 'Shows in rotation', icon: Tv },
] as const

export function Films() {
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('films')

  return (
    <section id="films" className="section">
      <div className="shell">
        <SectionHeading
          index={sectionIndex('films')}
          label="Screening room"
          title={
            <>
              On my <span className="font-serif italic text-accent">watchlist</span>
            </>
          }
          lede="Films I keep coming back to, plus the shows I binge way too quickly, usually instead of sleeping."
        />

        <Reveal delay={80} className="mt-8 flex gap-1 rounded-full border border-border bg-card p-1 lg:hidden">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                'flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors',
                tab === id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-10 lg:mt-12 lg:grid-cols-3">
          <div className={cn('lg:col-span-2 lg:block', tab === 'films' ? 'block' : 'hidden')}>
            <div className="mb-5 hidden items-center gap-2 text-sm font-medium lg:flex">
              <Clapperboard className="size-4 text-accent" />
              Films on repeat
            </div>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {films.map((film, i) => (
                <Reveal key={film.title} delay={i * 50} className="bg-card">
                  <li className="h-full">
                    <a
                      href={film.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`${film.title} on Letterboxd`}
                      className="group flex h-full flex-col gap-2 p-5 transition-colors hover:bg-secondary sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="flex min-w-0 items-start gap-1.5 text-pretty font-medium leading-snug">
                          <span>{film.title}</span>
                          <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </h3>
                        <span className="mt-0.5 shrink-0 font-mono text-[11px] text-muted-foreground">
                          {film.year}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {film.director}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {film.note}
                      </p>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className={cn('lg:block', tab === 'shows' ? 'block' : 'hidden')}>
            <div className="mb-5 hidden items-center gap-2 text-sm font-medium lg:flex">
              <Tv className="size-4 text-accent" />
              Shows in rotation
            </div>
            <ul className="flex flex-col gap-2">
              {shows.map((show, i) => (
                <Reveal key={show.title} delay={i * 50}>
                  <li>
                    <a
                      href={show.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`${show.title} on Letterboxd`}
                      className="group flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 rounded-lg border border-border bg-card px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-accent"
                    >
                      <span className="flex min-w-0 items-start gap-1.5 text-sm font-medium leading-snug">
                        <span className="text-pretty">{show.title}</span>
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-accent">
                        {show.tag}
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
