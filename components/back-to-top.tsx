'use client'

import { ArrowUp } from 'lucide-react'
import { useScrolled } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const visible = useScrolled(600)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        'fixed bottom-5 right-5 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent sm:bottom-8 sm:right-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
