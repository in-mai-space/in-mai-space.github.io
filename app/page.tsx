import { LeafFall } from '@/components/leaf-fall'
import { Play } from '@/components/play'
import { Tabs } from '@/components/tabs'
import { ThemeToggle } from '@/components/theme-toggle'
import { Projects, Work } from '@/components/work'
import { site, socials } from '@/lib/content'

export default function Page() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 py-10 sm:px-8 sm:py-12 lg:h-dvh lg:min-h-0">
      <header className="flex items-center justify-between">
        <span className="font-serif text-lg tracking-tight">{site.name}</span>
        <ThemeToggle />
      </header>

      <main className="flex min-h-0 flex-1 flex-col">
        <section className="mt-10 sm:mt-12">
          <h1 className="text-2xl tracking-tight sm:text-3xl">
            Hi, I&apos;m <span className="font-serif italic text-accent">Mai</span>.
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I&apos;m studying CS and Math at Northeastern, and I&apos;m interested in backend
            development, data engineering, and distributed systems. Outside of that, I enjoy
            reading, cooking, swimming, and learning Mandarin.
          </p>
        </section>

        <div className="mt-8 flex min-h-0 flex-1 flex-col">
          <Tabs
            tabs={[
              {
                id: 'experience',
                lead: 'Here’s where I’ve',
                label: 'worked',
                content: <Work />,
              },
              {
                id: 'projects',
                lead: 'what I’ve',
                label: 'built',
                content: <Projects />,
              },
              {
                id: 'play',
                lead: 'and what I do for',
                label: 'play',
                content: <Play />,
              },
            ]}
          />
        </div>
      </main>

      <footer className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.label === 'Email' ? undefined : '_blank'}
            rel={s.label === 'Email' ? undefined : 'noreferrer'}
            className="transition-colors hover:text-foreground"
          >
            {s.label}
          </a>
        ))}
        <span className="ml-auto">{site.location}</span>
      </footer>

      <LeafFall />
    </div>
  )
}
