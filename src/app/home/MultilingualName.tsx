'use client'

import { useState, useEffect } from 'react'

const names = [
  { lang: 'kannada', text: 'ಕೀರ್ತಿ ಗೌಡ' },
  { lang: 'english', text: 'Keerthi Gowda' },
  { lang: 'malayalam', text: 'കീർത്തി ഗൗഡ' },
  { lang: 'tamil', text: 'கீர்த்தி கவுடா' },
  { lang: 'sanskrit', text: 'कीर्तिः गौडा' },
  { lang: 'telugu', text: 'కీర్తి గౌడ' },
  { lang: 'japanese', text: 'ケエルティ ゴウダ' }
]

export default function MultilingualName() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Get random start index from Malayalam, Japanese, or Kannada
    const startLanguages = ['malayalam', 'japanese', 'kannada']
    const randomIndex = Math.floor(Math.random() * startLanguages.length)
    const startLang = startLanguages[randomIndex]
    const initialIndex = names.findIndex(name => name.lang === startLang)
    setCurrentIndex(initialIndex === -1 ? 0 : initialIndex)
  }, [])

  const handleClick = () => {
    setOpacity(0)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length)
      setOpacity(1)
    }, 300)
  }

  return (
    <span
      id="multilingual-name"
      className="multilingual-name"
      onClick={handleClick}
      style={{ opacity }}
      data-lang={names[currentIndex].lang}
    >
      {names[currentIndex].text}
    </span>
  )
} 