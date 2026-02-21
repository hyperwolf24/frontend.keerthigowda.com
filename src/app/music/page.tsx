import Image from 'next/image'
import { musicMetadata } from '../metadata'

export const metadata = musicMetadata

export default function Music() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Musical Journey</h1>
      
      <p className="mb-8 text-[#ccd6f6] leading-relaxed relative z-10 text-center max-w-2xl mx-auto">
        Nothing crazy, just a few things I like to do.
      </p>

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
            src="/images/concert.webp"
            alt="Chennai Concert. Trichy Sankaran Sir's Performance"
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

    </div>
  )
} 