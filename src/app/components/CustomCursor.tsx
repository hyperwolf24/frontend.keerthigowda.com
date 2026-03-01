'use client'

import { useEffect, useState, useRef } from 'react'

const OUTER_SIZE = 16
const INNER_SIZE = 6
const OUTER_COLOR = '#f5c542'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const rafRef = useRef<number>(0)
  const targetRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return

    setVisible(true)
    targetRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const current = targetRef.current
      if (current) {
        setPos((prev) => ({
          x: prev.x + (current.x - prev.x) * 0.2,
          y: prev.y + (current.y - prev.y) * 0.2,
        }))
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onLeave = () => {
      setHovering(false)
    }

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element).closest('a, button, [role="button"], [data-cursor-hover]')
      setHovering(!!t)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.body.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.body.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    document.body.classList.add('custom-cursor-active')
    return () => document.body.classList.remove('custom-cursor-active')
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        zIndex: 2147483647,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full border-2 transition-[width,height,margin] duration-150 ease-out"
        style={{
          width: hovering ? OUTER_SIZE * 1.4 : OUTER_SIZE,
          height: hovering ? OUTER_SIZE * 1.4 : OUTER_SIZE,
          left: 0,
          top: 0,
          marginLeft: -(hovering ? OUTER_SIZE * 0.7 : OUTER_SIZE / 2),
          marginTop: -(hovering ? OUTER_SIZE * 0.7 : OUTER_SIZE / 2),
          borderColor: OUTER_COLOR,
          backgroundColor: `${OUTER_COLOR}30`,
        }}
      />
      <div
        className="absolute rounded-full bg-[#0a192f]"
        style={{
          width: INNER_SIZE,
          height: INNER_SIZE,
          left: 0,
          top: 0,
          marginLeft: -INNER_SIZE / 2,
          marginTop: -INNER_SIZE / 2,
        }}
      />
    </div>
  )
}
