'use client'

import { animate } from 'animejs'
import { useEffect, useRef } from 'react'

interface AnimatedNameProps {
  name: string
  letters?: string[]
  onClick?: () => void
  isTransitioning?: boolean
  className?: string
}

export default function AnimatedName({ 
  name, 
  letters,
  onClick, 
  isTransitioning = false, 
  className = ''
}: AnimatedNameProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prevNameRef = useRef(name)
  const animationInitialized = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return
    
    // Clear previous animation targets
    const container = containerRef.current
    container.innerHTML = ''
    
    // Create span for each character
    const characters = letters || name.split('')
    characters.forEach(char => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space for spaces
      span.style.display = 'inline-block'
      span.classList.add('animated-char')
      container.appendChild(span)
    })
    
    // Only animate when name changes or on initial render
    const isInitialRender = !animationInitialized.current
    const hasNameChanged = name !== prevNameRef.current
    
    if (isInitialRender || hasNameChanged) {
      // Get direct spans from container to ensure we're targeting the right elements
      const spans = container.querySelectorAll('.animated-char')
      
      // Apply animation exactly as provided in the example
      animate(spans, {
        // Property keyframes
        y: [
          { to: '-2.75rem', ease: 'outExpo', duration: 600 },
          { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        // Property specific parameters
        rotate: {
          from: '-1turn',
          delay: 0
        },
        delay: (_: unknown, i: number) => i * 50, // Function based value
        ease: 'inOutCirc',
        loop: false // Remove looping
      });
      
      animationInitialized.current = true
    }
    
    prevNameRef.current = name;
  }, [name, letters])

  return (
    <div 
      ref={containerRef}
      onClick={onClick}
      className={`inline-block cursor-pointer transition-opacity duration-300 ${className}`}
      style={{ opacity: isTransitioning ? 0 : 1 }}
    />
  )
} 