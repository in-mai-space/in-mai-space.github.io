'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { dishes } from '@/lib/content'

function Lightbox({
  index,
  onClose,
  onStep,
}: {
  index: number
  onClose: () => void
  onStep: (delta: number) => void
}) {
  const dish = dishes[index]

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onStep(1)
      if (event.key === 'ArrowLeft') onStep(-1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onStep])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={dish.caption}
      onClick={onClose}
      className="fixed inset-0 z-70 flex flex-col items-center justify-center gap-4 bg-background/95 p-4 backdrop-blur-md duration-200 animate-in fade-in"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent"
      >
        <X className="size-4" />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className="relative h-[68vh] w-full max-w-3xl"
      >
        <Image
          src={dish.src}
          alt={dish.alt}
          fill
          sizes="(max-width: 768px) 100vw, 48rem"
          className="rounded-2xl object-contain"
          priority
        />
      </div>

      <div
        onClick={(event) => event.stopPropagation()}
        className="flex items-center gap-4 text-sm text-muted-foreground"
      >
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous dish"
          className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="min-w-40 text-center text-foreground">{dish.caption}</span>
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next dish"
          className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}

export function Cooking() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])

  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null ? current : (current + delta + dishes.length) % dishes.length,
      ),
    [],
  )

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {dishes.map((dish, i) => (
          <button
            key={dish.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={dish.caption}
            className="group relative block aspect-square w-full overflow-hidden rounded-md bg-muted"
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 14rem, 7rem"
              className="object-cover transition-opacity duration-300 group-hover:opacity-85"
            />
          </button>
        ))}
      </div>

      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </>
  )
}
