'use client'

import { useEffect, useState, useMemo } from 'react'
import AnimatedName from './AnimatedName'

const ORB_COUNT = 10
const ANIMATION_DURATION_MS = 4800
const LOGO_HOLD_MS = 1200
const FADEOUT_MS = 1400
const STORAGE_KEY = 'kg_loader_seen'

const LOADER_NAME = 'Keerthi Gowda'
const LOADER_LETTERS = ['K', 'e', 'e', 'r', 't', 'h', 'i', ' ', 'G', 'o', 'w', 'd', 'a']

function getOrbSeed(): number {
  if (typeof window === 'undefined') return 0
  const stored = sessionStorage.getItem(STORAGE_KEY)
  return stored ? 42 : 0
}

export default function OrbLoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState<'loading' | 'logo' | 'exit'>('loading')
  const [logoReveal, setLogoReveal] = useState(false)

  const orbs = useMemo(() => {
    const seed = getOrbSeed()
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 1.1) * 0.5 + 0.5
      return Math.floor(x * 10000) / 10000
    }
    return Array.from({ length: ORB_COUNT }, (_, i) => {
      const turn = (rng(i + 5) * 4 - 2) * 360
      return {
        id: i,
        x: (rng(i) * 80 - 40),
        y: (rng(i + 10) * 80 - 40),
        delay: rng(i + 20) * 0.35,
        size: 14 + rng(i + 30) * 18,
        rotateStart: `${(rng(i + 40) * 2 - 1) * 180}deg`,
        rotateMid: `${(rng(i + 50) * 2 - 1) * 540}deg`,
        rotateEnd: `${(rng(i + 60) * 2 - 1) * 360}deg`,
      }
    })
  }, [])

  useEffect(() => {
    const seen = typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)
    if (seen) {
      setVisible(false)
      return
    }

    const t0 = setTimeout(() => setLogoReveal(true), 3800)
    const t1 = setTimeout(() => setPhase('logo'), ANIMATION_DURATION_MS)
    const t2 = setTimeout(() => setPhase('exit'), ANIMATION_DURATION_MS + LOGO_HOLD_MS)
    const t3 = setTimeout(() => {
      if (typeof window !== 'undefined') sessionStorage.setItem(STORAGE_KEY, '1')
      setVisible(false)
    }, ANIMATION_DURATION_MS + LOGO_HOLD_MS + FADEOUT_MS)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        opacity: phase === 'exit' ? 0 : 1,
        transition: `opacity ${FADEOUT_MS}ms ease-out`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-hidden="true"
    >
      {/* Orbs: spin and cluster to center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full bg-white"
            style={{
              width: orb.size,
              height: orb.size,
              left: '50%',
              top: '50%',
              marginLeft: -orb.size / 2,
              marginTop: -orb.size / 2,
              '--orb-x': `${orb.x}vw`,
              '--orb-y': `${orb.y}vh`,
              '--orb-rotate-start': orb.rotateStart,
              '--orb-rotate-mid': orb.rotateMid,
              '--orb-rotate-end': orb.rotateEnd,
              animation: `orb-sequence ${ANIMATION_DURATION_MS}ms ease-in-out ${orb.delay}s both`,
              boxShadow: '0 0 30px rgba(255,255,255,0.4)',
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Name with typing animation, same position as home */}
      <div
        className="relative z-10 flex min-h-screen w-full items-center justify-center text-center pointer-events-none"
        style={{
          opacity: logoReveal ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <span className="text-4xl md:text-5xl font-bold tracking-tight">
          {logoReveal && (
            <AnimatedName
              name={LOADER_NAME}
              letters={LOADER_LETTERS}
              className="text-[#64ffda]"
            />
          )}
        </span>
      </div>
    </div>
  )
}
