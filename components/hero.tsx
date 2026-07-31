'use client'

import { ArrowDown, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CursorField } from './cursor-field'
import { Reveal } from './reveal'
import { greetings, heroTags, site } from '@/lib/content'
import { useLocalTime } from '@/lib/hooks'

function greetingFor(hour: number) {
  let match = greetings[0]
  for (const greeting of greetings) if (hour >= greeting.from) match = greeting
  return match.text
}

export function Hero() {
  const [greeting, setGreeting] = useState('Welcome in')
  const time = useLocalTime(site.timezone)

  useEffect(() => setGreeting(greetingFor(new Date().getHours())), [])

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <CursorField />

      <div className="shell relative z-10 py-14 sm:py-16">
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {greeting}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs">
            <MapPin className="size-3.5" />
            {site.location}
            {time && <span className="text-accent">· {time}</span>}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-balance text-3xl leading-[1.15] tracking-tight sm:mt-8 sm:text-5xl md:text-6xl">
            Hi, I&apos;m Mai. <span className="font-serif italic text-accent">CS + Math</span> senior
            at Northeastern.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
            I enjoy backend development and data engineering. Outside of software engineering, I
            usually read, swim, cook, or get halfway through some TV show.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10">
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </Reveal>

        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-12">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex size-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent">
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </span>
            See what I&apos;ve been working on
          </a>
        </Reveal>
      </div>
    </section>
  )
}
