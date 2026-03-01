import { Metadata } from 'next'
import Image from 'next/image'
import ChandiStory from './ChandiStory'

export const metadata: Metadata = {
  title: 'Keerthi Gowda - Project Chandi',
  description: 'Project Chandi - A raw, unfiltered journey through India. Treks, surf, snow, and everything in between.',
}

export default function Chandi() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#02a57f]">
        Project Chandi
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden mb-10">
          <Image
            src="/images/chandi.webp"
            alt="Project Chandi"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, 24rem"
          />
        </div>

        {/* Story — 1 March 2026, collapsible, product ref at end, green bar in middle */}
        <ChandiStory />

        {/* What next */}
        <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-[#02a57f] font-semibold text-lg mb-3">What next</h3>
          <p className="text-white text-base">
            I&apos;ll keep posting on what I&apos;m doing next as it happens.
          </p>
          <div className="w-24 h-1 bg-[#02a57f] mx-auto mt-6" />
        </div>
      </div>
    </div>
  )
}
