'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const names = [
  { lang: 'kannada', text: 'ಕೀರ್ತಿ ಗೌಡ' },
  { lang: 'english', text: 'Keerthi Gowda' },
  { lang: 'malayalam', text: 'കീർത്തി ഗൗഡ' },
  { lang: 'tamil', text: 'கீர்த்தி கவுடா' },
  { lang: 'sanskrit', text: 'कीर्तिः गौडा' },
  { lang: 'telugu', text: 'కీర్తి గౌడ' },
  { lang: 'japanese', text: 'ケエルティ ゴウダ' }
]

export default function HomeContent() {
  const [currentName, setCurrentName] = useState(names[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Get random start index from Malayalam, Japanese, or Kannada
    const startLanguages = ['malayalam', 'japanese', 'kannada']
    const randomIndex = Math.floor(Math.random() * startLanguages.length)
    const startLang = startLanguages[randomIndex]
    const initialIndex = names.findIndex(name => name.lang === startLang)
    setCurrentName(names[initialIndex >= 0 ? initialIndex : 0])
  }, [])

  const handleNameClick = () => {
    setIsTransitioning(true)
    const currentIndex = names.findIndex(name => name.lang === currentName.lang)
    const nextIndex = (currentIndex + 1) % names.length
    
    setTimeout(() => {
      setCurrentName(names[nextIndex])
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/farm-background.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center">
        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/images/keerthi-gowda3.jpeg"
            alt="Keerthi Gowda"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccd6f6]">
          Hi, I'm{' '}
          <span
            className="text-[#64ffda] cursor-pointer transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1 }}
            onClick={handleNameClick}
          >
            {currentName.text}
          </span>
        </h1>
        <p className="text-xl text-[#8892b0]">Full Stack Engineer | Farmer by Weekend</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Keerthi Gowda',
            url: 'https://keerthigowda.com',
            sameAs: [
              'https://www.instagram.com/keerthi.__.__',
              'https://www.youtube.com/@hyperwolf24',
              'https://x.com/hyperwolf_24'
            ],
            jobTitle: 'Software Engineer and Farmer',
            description: 'Keerthi Gowda is a Software Engineer and Farmer based in Bengaluru, India.'
          })
        }}
      />
    </section>
  )
} 