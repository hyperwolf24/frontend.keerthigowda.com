'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        KG
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link href="/music" className={pathname === '/music' ? 'active' : ''}>
          Music
        </Link>
        <Link href="/farm" className={pathname === '/farm' ? 'active' : ''}>
          Farm
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </div>
      <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
} 