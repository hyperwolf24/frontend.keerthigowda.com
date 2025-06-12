import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keerthi Gowda - Farm',
  description: 'Explore the farm of Keerthi Gowda, featuring various crops including coconut, arecanut, cardamom, and more.',
}

const crops = [
  { name: 'Coconut', image: '/images/coconut.webp', duration: '15+ years' },
  { name: 'Arecanut', image: '/images/arecanut.webp', duration: '8+ years' },
  { name: 'Cardamom', image: '/images/cardamom.webp', duration: '2 years' },
  { name: 'Pepper', image: '/images/pepper.webp', duration: '1 year' },
  { name: 'Coffee', image: '/images/coffee.webp', duration: '1 year' },
  { name: 'Nutmeg', image: '/images/nutmeg.webp', duration: '1 year' },
  { name: 'Sandal', image: '/images/sandal.webp', duration: '0.5 year' },
  { name: 'Jackfruit', image: '/images/jackfruit.webp', duration: '1 year' },
  { name: 'Butter Fruit', image: '/images/butterfruit.webp', duration: '0.5 year' },
  { name: 'Chikoo', image: '/images/chikoo.webp', duration: '8+ years' },
  { name: 'Guava', image: '/images/guava.webp', duration: '3+ years' },
]

export default function Farm() {
  return (
    <section className="relative py-16 px-8 z-4 w-full mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">The Farm</h2>
      <p className="text-[#ccd6f6] text-lg mb-12 text-center max-w-2xl mx-auto">
        Located 20 km from Ramanagara and 56 km from Bangalore, my farm is where I spend my weekends.
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
                <p className="text-[#ccd6f6] text-sm">Cultivating for {crop.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 