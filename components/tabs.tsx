'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Tab = {
  id: string
  lead: string
  label: string
  content: React.ReactNode
}

type Box = { left: number; top: number; width: number }

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id)
  const [mark, setMark] = useState<Box | null>(null)
  const [direction, setDirection] = useState(1)
  const list = useRef<HTMLDivElement>(null)
  const buttons = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1)
      if (tabs.some((tab) => tab.id === hash)) setActive(hash)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [tabs])

  useLayoutEffect(() => {
    const measure = () => {
      const node = buttons.current[active]
      if (!node) return
      setMark({
        left: node.offsetLeft,
        top: node.offsetTop + node.offsetHeight,
        width: node.offsetWidth,
      })
    }
    measure()
    const observer = new ResizeObserver(measure)
    if (list.current) observer.observe(list.current)
    return () => observer.disconnect()
  }, [active])

  const select = (id: string) => {
    const from = tabs.findIndex((tab) => tab.id === active)
    const to = tabs.findIndex((tab) => tab.id === id)
    if (to !== from) setDirection(to > from ? 1 : -1)
    setActive(id)
    history.replaceState(null, '', `#${id}`)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const index = tabs.findIndex((tab) => tab.id === active)
    const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]
    select(next.id)
    buttons.current[next.id]?.focus()
  }

  return (
    <div className="lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <div
        ref={list}
        role="tablist"
        aria-label="Sections"
        onKeyDown={onKeyDown}
        className="relative font-serif text-xl leading-relaxed text-muted-foreground sm:text-2xl"
      >
        {tabs.map((tab, i) => (
          <span key={tab.id}>
            {tab.lead}{' '}
            <button
              ref={(node) => {
                buttons.current[tab.id] = node
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => select(tab.id)}
              className={cn(
                'italic transition-colors duration-300',
                active === tab.id
                  ? 'text-accent'
                  : 'text-foreground underline decoration-border decoration-dashed decoration-1 underline-offset-[6px] hover:text-accent hover:decoration-accent',
              )}
            >
              {tab.label}
            </button>
            {i < tabs.length - 1 ? ', ' : '.'}
          </span>
        ))}
        {mark && (
          <span
            aria-hidden
            className="squiggle pointer-events-none absolute h-1.5 bg-accent transition-all duration-500 ease-[cubic-bezier(0.34,1.45,0.64,1)]"
            style={{ left: mark.left, top: mark.top - 4, width: mark.width }}
          />
        )}
      </div>

      <div className="lg:-mx-2 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:px-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={active !== tab.id}
            className="tab-panel pt-6"
            style={{ '--dir': direction } as React.CSSProperties}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
