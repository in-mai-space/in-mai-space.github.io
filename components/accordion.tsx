'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type Item = { id: string; header: React.ReactNode; body: React.ReactNode }

export function Accordion({
  items,
  className,
  itemClassName,
}: {
  items: Item[]
  className?: string
  itemClassName?: string
}) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className={className}>
      {items.map((item) => {
        const expanded = open === item.id
        return (
          <li
            key={item.id}
            data-open={expanded || undefined}
            className={cn('group relative', itemClassName)}
          >
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`${item.id}-body`}
              onClick={() => setOpen(expanded ? null : item.id)}
              className="flex w-full items-center gap-3 py-2.5 text-left"
            >
              <div className="min-w-0 flex-1">{item.header}</div>
              <ChevronDown
                className={cn(
                  'size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-foreground',
                  expanded && 'rotate-180',
                )}
              />
            </button>
            <div
              id={`${item.id}-body`}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="min-h-0 overflow-hidden" inert={!expanded}>
                <div className="pb-3 pr-7">{item.body}</div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
