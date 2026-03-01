'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedNameProps {
  name: string
  letters?: string[]
  onClick?: () => void
  isTransitioning?: boolean
  className?: string
}

const TYPING_DELAY_MS = 90
const CURSOR_VISIBLE_MS = 400

export default function AnimatedName({
  name,
  letters,
  onClick,
  isTransitioning = false,
  className = ''
}: AnimatedNameProps) {
  const [typedCount, setTypedCount] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  const chars = letters ?? name.split('')

  useEffect(() => {
    setTypedCount(0)
    setIsTypingComplete(false)

    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []

    let i = 0
    const schedule = () => {
      if (i >= chars.length) {
        const t = setTimeout(() => setIsTypingComplete(true), CURSOR_VISIBLE_MS)
        timeoutRefs.current.push(t)
        return
      }
      const t = setTimeout(() => {
        i += 1
        setTypedCount(i)
        schedule()
      }, TYPING_DELAY_MS)
      timeoutRefs.current.push(t)
    }
    schedule()

    return () => {
      timeoutRefs.current.forEach(clearTimeout)
    }
  }, [name, letters])

  return (
    <div
      onClick={onClick}
      className={`inline-block cursor-pointer transition-opacity duration-300 ${className}`}
      style={{ opacity: isTransitioning ? 0 : 1 }}
    >
      <span className={className}>
        {chars.map((char, i) => (
          <span key={`${name}-${i}`} className="inline-block">
            {i < typedCount ? (char === ' ' ? '\u00A0' : char) : null}
          </span>
        ))}
        {!isTypingComplete && (
          <span className={`inline-block animate-pulse ${className}`}>|</span>
        )}
      </span>
    </div>
  )
} 