'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { sectionIndex, sections } from '@/lib/content'
import { useActiveSection, useScrolled } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const sectionIds = sections.map((section) => section.id)

export function SiteNav() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-baseline" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg leading-none tracking-tight sm:text-xl">
            in-<span className="italic text-accent">mai</span>-space
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                  active === section.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === section.id && (
                  <span className="absolute inset-0 rounded-full bg-accent-soft" />
                )}
                <span className="relative">{section.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'grid overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-transparent',
        )}
      >
        <div className="min-h-0">
          <ul className="shell flex flex-col py-2 pb-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-border/60 py-3.5 text-lg tracking-tight last:border-0"
                >
                  <span className="font-mono text-xs text-accent">{sectionIndex(section.id)}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
