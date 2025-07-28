'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AnimatedName from '../components/AnimatedName'

const names = [
  { 
    lang: 'kannada', 
    text: 'ಕೀರ್ತಿ ಗೌಡ',
    letters: ['ಕೀ', 'ರ್ತಿ', ' ', 'ಗೌ', 'ಡ']
  },
  { 
    lang: 'english', 
    text: 'Keerthi Gowda',
    letters: ['K', 'e', 'e', 'r', 't', 'h', 'i', ' ', 'G', 'o', 'w', 'd', 'a']
  },
  { 
    lang: 'malayalam', 
    text: 'കീർത്തി ഗൗഡ',
    letters: ['കീ', 'ർ', 'ത്തി', ' ', 'ഗൗ', 'ഡ']
  },
  { 
    lang: 'tamil', 
    text: 'கீர்த்தி கவுடா',
    letters: ['கீ', 'ர்', 'த்', 'தி', ' ', 'க', 'வு', 'டா']
  },
  { 
    lang: 'sanskrit', 
    text: 'कीर्तिः गौडा',
    letters: ['की', 'र्तिः', ' ', 'गौ', 'डा']
  },
  { 
    lang: 'telugu', 
    text: 'కీర్తి గౌడ',
    letters: ['కీ', 'ర్తి', ' ', 'గౌ', 'డ']
  },
  { 
    lang: 'japanese', 
    text: 'ケエルティ ゴウダ',
    letters: ['ケ', 'エ', 'ル', 'テ', 'ィ', ' ', 'ゴ', 'ウ', 'ダ']
  },
  { 
    lang: 'russian', 
    text: 'Кирти Гоуда',
    letters: ['К', 'и', 'р', 'т', 'и', ' ', 'Г', 'о', 'у', 'д', 'а']
  }
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
    if (isTransitioning) return
    
    setIsTransitioning(true)
    const currentIndex = names.findIndex(name => name.lang === currentName.lang)
    const nextIndex = (currentIndex + 1) % names.length
    
    setTimeout(() => {
      setCurrentName(names[nextIndex])
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 400)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center">
        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/images/keerthi-gowda.webp"
            alt="Keerthi Gowda"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccd6f6]">
          Hi, I&apos;m{' '}
          <AnimatedName
            name={currentName.text}
            letters={currentName.letters}
            onClick={handleNameClick}
            isTransitioning={isTransitioning}
            className="text-[#64ffda]"
          />
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