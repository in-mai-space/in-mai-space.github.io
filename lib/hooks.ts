'use client'

import { useEffect } from 'react'

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
