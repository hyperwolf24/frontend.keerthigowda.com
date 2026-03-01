'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Temporarily disabled - will be enabled later when required
  // const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  // Temporarily disabled - will be enabled later when required
  // const handleProjectsToggle = () => {
  //   setIsProjectsOpen(!isProjectsOpen)
  // }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    // Temporarily disabled - will be enabled later when required
    // setIsProjectsOpen(false)
  }

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        KG
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link href="/music" onClick={handleLinkClick}>
          Music
        </Link>
        <Link href="/chandi" onClick={handleLinkClick}>
          Project Chandi
        </Link>
        <Link href="/farm" onClick={handleLinkClick}>
          Farm
        </Link>
        <Link href="/blog" onClick={handleLinkClick}>
          Blog
        </Link>
        {/* Temporarily disabled - will be enabled later when required */}
        {/* <div 
          className="nav-dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setIsProjectsOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsProjectsOpen(false)}
        >
          <span 
            className="nav-dropdown-trigger"
            onClick={handleProjectsToggle}
          >
            Projects
          </span>
          <div className={`nav-dropdown-menu ${isProjectsOpen ? 'active' : ''}`}>
            <Link href="/chandi" onClick={handleLinkClick}>Chandi</Link>
          </div>
        </div> */}
        <Link href="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link href="/contact" onClick={handleLinkClick}>
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