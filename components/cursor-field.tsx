'use client'

import { useEffect, useRef, useState } from 'react'

const layers = [
  { size: 520, ease: 0.045, opacity: 0.3, drift: 30 },
  { size: 340, ease: 0.08, opacity: 0.24, drift: 18 },
  { size: 200, ease: 0.13, opacity: 0.18, drift: 10 },
]

export function CursorField() {
  const field = useRef<HTMLDivElement>(null)
  const blobs = useRef<(HTMLDivElement | null)[]>([])
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !still)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const host = field.current?.parentElement
    if (!host) return

    const target = { x: host.clientWidth / 2, y: host.clientHeight / 2 }
    const trail = layers.map(() => ({ ...target }))
    const started = performance.now()
    let frame = 0

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      target.x = event.clientX - rect.left
      target.y = event.clientY - rect.top
    }

    const setLit = (lit: boolean) => field.current?.toggleAttribute('data-lit', lit)
    const onEnter = () => setLit(true)
    const onLeave = () => setLit(false)

    const tick = (now: number) => {
      const seconds = (now - started) / 1000

      trail.forEach((point, i) => {
        const layer = layers[i]
        point.x += (target.x - point.x) * layer.ease
        point.y += (target.y - point.y) * layer.ease

        const node = blobs.current[i]
        if (!node) return

        const driftX = Math.sin(seconds * 0.6 + i * 1.7) * layer.drift
        const driftY = Math.cos(seconds * 0.45 + i * 2.3) * layer.drift
        node.style.transform = `translate(${point.x + driftX}px, ${point.y + driftY}px) translate(-50%, -50%)`
      })

      field.current?.style.setProperty('--x', `${trail[1].x}px`)
      field.current?.style.setProperty('--y', `${trail[1].y}px`)
      frame = requestAnimationFrame(tick)
    }

    host.addEventListener('pointermove', onMove, { passive: true })
    host.addEventListener('pointerenter', onEnter)
    host.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerenter', onEnter)
      host.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={field}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 data-lit:opacity-100"
    >
      {layers.map((layer, i) => (
        <div
          key={layer.size}
          ref={(node) => {
            blobs.current[i] = node
          }}
          className="absolute left-0 top-0 rounded-full bg-accent blur-3xl will-change-transform"
          style={{ width: layer.size, height: layer.size, opacity: layer.opacity }}
        />
      ))}
      <div className="pointer-dots absolute inset-0" />
    </div>
  )
}
