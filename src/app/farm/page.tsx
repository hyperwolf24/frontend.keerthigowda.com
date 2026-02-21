import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keerthi Gowda - Farm',
  description: 'Explore the farm of Keerthi Gowda, featuring various crops including coconut, arecanut, cardamom, and more.',
}

const crops = [
  { name: 'Coconut', image: '/images/coconut.webp' },
  { name: 'Arecanut', image: '/images/arecanut.webp' },
  { name: 'Cardamom', image: '/images/cardamom.webp' },
  { name: 'Pepper', image: '/images/pepper.webp' },
  { name: 'Coffee', image: '/images/coffee.webp' },
  { name: 'Nutmeg', image: '/images/nutmeg.webp' },
  { name: 'Jackfruit', image: '/images/jackfruit.webp' },
  { name: 'Butter Fruit', image: '/images/butterfruit.webp' },
  { name: 'Chikoo', image: '/images/chikoo.webp' },
  { name: 'Guava', image: '/images/guava.webp' },
]

export default function Farm() {
  return (
    <section className="relative py-16 px-8 z-4 w-full mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">The Farm</h2>
      <p className="text-[#ccd6f6] text-lg mb-12 text-center max-w-2xl mx-auto">
        Just a small farm in my backyard.
      </p>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <div key={crop.name} className="bg-[#112240]/60 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-1 shadow-lg p-5">
              <div className="relative w-[150px] h-[150px] mx-auto">
                <Image
                  src={crop.image}
                  alt={`${crop.name} Trees`}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[#02a57f] text-xl font-semibold mb-2">{crop.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animals Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">Livestock & Animals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-1 shadow-lg p-5">
            <div className="text-center">
              <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                <Image
                  src="/images/sahiwal.webp"
                  alt="Sahiwal Cows"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h4 className="text-[#02a57f] text-xl font-semibold mb-2">Sahiwal Cows</h4>
            </div>
          </div>
          
          <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-1 shadow-lg p-5 relative">
            <div className="absolute top-2 right-2 bg-[#02a57f] text-white text-xs px-2 py-1 rounded-full font-medium">
              Coming Soon
            </div>
            <div className="text-center">
              <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                <Image
                  src="/images/horse.webp"
                  alt="Horses"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h4 className="text-[#02a57f] text-xl font-semibold mb-2">Horses</h4>
            </div>
          </div>
          
          <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-1 shadow-lg p-5 relative">
            <div className="absolute top-2 right-2 bg-[#02a57f] text-white text-xs px-2 py-1 rounded-full font-medium">
              Coming Soon
            </div>
            <div className="text-center">
              <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                <Image
                  src="/images/yellow-python.webp"
                  alt="Yellow Python"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h4 className="text-[#02a57f] text-xl font-semibold mb-2">Turtles & Snakes</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 