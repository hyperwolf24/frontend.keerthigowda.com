'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        KG
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/">
          Home
        </Link>
        <Link href="/music">
          Music
        </Link>
        <Link href="/farm">
          Farm
        </Link>
        <Link href="/chandi">
          Project Chandi
        </Link>
        <Link href="/elements">
          Project Elements
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
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