import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keerthi Gowda - Project Wedding Elements',
  description: 'A unique wedding photography project offering pay-per-photo candid moments.',
}

export default function WeddingElements() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Project Wedding Elements</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[32rem] rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/wedding-candid.jpg"
            alt="Wedding Candid Photography"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl p-12 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-[#02a57f] text-center">Capturing Life&apos;s Precious Moments</h3>
            <p className="text-[#ccd6f6] text-lg leading-relaxed mb-8 text-center">
              Something interesting is to be announced. A much awaited project I have been working on.
            </p>
            <div className="space-y-6">
              <div className="bg-[#112240]/40 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-3 text-[#02a57f]">Pay Per Capture</h4>
                <p className="text-[#ccd6f6] leading-relaxed">
                  This project is about shooting wedding candids at different costs. Pay for what is delivered. It will be a pay per photo where each candid one likes is what we get paid for.
                </p>
              </div>
              <div className="bg-[#112240]/40 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-3 text-[#02a57f]">Pure Candid Moments</h4>
                <p className="text-[#ccd6f6] leading-relaxed">
                  We do not do any casual photos - it is all about candid photos and videos. Editing comes at extra cost.
                </p>
              </div>
              <div className="bg-[#112240]/40 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-3 text-[#02a57f]">Accessible Photography</h4>
                <p className="text-[#ccd6f6] leading-relaxed">
                  This is mainly for those who cannot afford a high budget wedding photography. All we need is an idea of the event and we will deliver the moments of the event.
                </p>
              </div>
            </div>
            <div className="w-24 h-1 bg-[#02a57f] mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 