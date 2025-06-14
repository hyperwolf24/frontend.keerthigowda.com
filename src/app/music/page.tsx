import Image from 'next/image'
import { musicMetadata } from '../metadata'
import styles from './music.module.css'

export const metadata = musicMetadata

export default function Music() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative w-full h-[32rem] rounded-lg overflow-hidden">
          <Image
            src="/images/mridangam1.webp"
            alt="Keerthi with Mridangam"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative w-full h-[32rem] rounded-lg overflow-hidden">
          <Image
            src="/images/concert.jpeg"
            alt="Chennai Concert. Trichy Sankaran Playing Mridangam"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative w-full h-[32rem] rounded-lg overflow-hidden">
          <Image
            src="/images/ganapa.webp"
            alt="Ganapathi with Mridangam"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Musical Journey</h1>
      
      <p className="mb-8 text-[#ccd6f6] leading-relaxed relative z-10 text-center max-w-2xl mx-auto">
        My journey with music began during my school days, but I developed a significant interest in Carnatic music in late 2024.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 max-w-4xl mx-auto">
        <div className={styles.musicCard}>
          <h3 className="text-2xl font-semibold mb-4 text-[#018c6d]">Mridangam</h3>
          <p className="text-[#ccd6f6]">
            I started learning Mridangam in June 2025, excited to explore its rhythms and deepen my connection with the instrument.
          </p>
        </div>

        <div className={styles.musicCard}>
          <h3 className="text-2xl font-semibold mb-4 text-[#018c6d]">Harmonium</h3>
          <p className="text-[#ccd6f6]">
            Recently started learning Carnatic harmonium.
          </p>
        </div>

        <div className={styles.musicCard}>
          <h3 className="text-2xl font-semibold mb-4 text-[#018c6d]">Yakshagana</h3>
          <p className="text-[#ccd6f6]">
            Recently started learning Yakshagana (Tenku Tittu).
          </p>
        </div>
      </div>
    </div>
  )
} 