'use client'

import { useCallback, useEffect, useState } from 'react'
import { useKeySequence } from '@/lib/hooks'

const konami = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
] as const

const leaves = ['🌿', '🍃', '🌱', '🍀', '🪴']

type Drop = {
  id: number
  leaf: string
  left: number
  delay: number
  duration: number
  size: number
}

function makeDrops(): Drop[] {
  return Array.from({ length: 44 }, (_, id) => ({
    id,
    leaf: leaves[id % leaves.length],
    left: Math.random() * 100,
    delay: Math.random() * 2.2,
    duration: 3.4 + Math.random() * 2.4,
    size: 18 + Math.random() * 22,
  }))
}

export function LeafFall() {
  const [drops, setDrops] = useState<Drop[]>([])

  useKeySequence(
    konami,
    useCallback(() => setDrops(makeDrops()), []),
  )

  useEffect(() => {
    if (drops.length === 0) return
    const id = window.setTimeout(() => setDrops([]), 7000)
    return () => window.clearTimeout(id)
  }, [drops])

  if (drops.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-80 overflow-hidden" aria-hidden>
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute top-0 animate-fall"
          style={{
            left: `${drop.left}%`,
            fontSize: `${drop.size}px`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {drop.leaf}
        </span>
      ))}
    </div>
  )
}
