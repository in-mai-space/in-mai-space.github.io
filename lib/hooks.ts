'use client'

import { useEffect, useState } from 'react'

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          timeZone,
        }).format(new Date()),
      )

    format()
    const id = window.setInterval(format, 15_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

export function useKeySequence(sequence: readonly string[], onMatch: () => void) {
  useEffect(() => {
    let progress = 0

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

      if (key === sequence[progress].toLowerCase()) progress += 1
      else progress = key === sequence[0].toLowerCase() ? 1 : 0

      if (progress === sequence.length) {
        progress = 0
        onMatch()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sequence, onMatch])
}
