import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { sectionIndex, site, socials } from '@/lib/content'

export function Contact() {
  return (
    <footer id="contact" className="section bg-secondary/40">
      <div className="shell">
        <SectionHeading
          index={sectionIndex('contact')}
          label="Contact"
          title={
            <>
              Let&apos;s <span className="font-serif italic text-accent">keep in touch</span>
            </>
          }
        />

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-14 sm:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className="bg-card">
              <li className="h-full">
                <a
                  href={s.href}
                  target={s.label === 'Email' ? undefined : '_blank'}
                  rel={s.label === 'Email' ? undefined : 'noreferrer'}
                  className="group flex h-full flex-col gap-1 p-4 transition-colors hover:bg-secondary sm:p-5"
                >
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-1 break-all text-sm">
                    {s.handle}
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-14 sm:flex-row sm:items-center">
          <span className="font-serif text-base text-foreground">{site.name}</span>
          <span>© {new Date().getFullYear()}, designed & built with care.</span>
        </div>
      </div>
    </footer>
  )
}
