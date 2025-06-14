import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keerthi Gowda - Project Chandi',
  description: 'A special project by Keerthi Gowda - stay tuned for further updates.',
}

export default function Chandi() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Project Chandi</h2>
      <div className="max-w-4xl mx-auto">
        {/*
        <div className="relative w-full h-[32rem] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/chandi.webp"
            alt="Project Chandi"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>*/}
        <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl p-12 text-center transform hover:scale-[1.02] transition-transform duration-300">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-[#02a57f]">A Journey of Passion</h3>
            <p className="text-[#ccd6f6] text-lg leading-relaxed mb-6">
              Stay tuned for further updates on this. This is a special project very close to my heart. Been thinking of doing this for a long time.
            </p>
            <div className="w-24 h-1 bg-[#02a57f] mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 