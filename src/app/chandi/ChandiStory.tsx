'use client'

import { useState } from 'react'

export default function ChandiStory() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[#112240]/60 backdrop-blur-sm rounded-xl p-8 mb-10">
      <p className="text-white text-sm mb-6">1 March 2026.</p>

      <div className="text-white text-lg leading-relaxed space-y-6">
        <p>
          Some dates don&apos;t mean anything until they do. This is one of them.
        </p>

        {isExpanded && (
          <>
            <p>
              Not because something dramatic happened. But because something shifted — quietly, completely. The way I looked at things. The way I wanted to live. The kind of experiences I wanted to carry with me. It became clear that you can change what is happening, but you cannot change what happened. You cannot go back and undo what you once were. All you have is right now, and what you choose to do with it.
            </p>
            <p>
              Somewhere along the way, I had convinced myself I was on a path. A spiritual one. The kind that starts with real feeling — genuine encounters with energy, with Devi, with something that you cannot explain but you know is there. It was alive once. I felt it. And then, slowly, without noticing, the path became routine. The rituals stayed but the feeling left. The words were the same but the weight was gone. It had turned into performance — going through the motions because that is what you do, not because you feel it. Pseudo-spirituality with no experience behind it. That realisation was heavier than I expected.
            </p>
            <p>
              So this is the reset. Not a reinvention, not a rebrand. Just a return to something honest. Raw experience — through my eyes, my body, my mind and moslty through my lenses. The terrain, the cold, the altitude, the water. Things that cannot be faked. Things that either happen or they don&apos;t. Project Chandi is that journey, documented as it unfolds, with nothing added and nothing taken away.
            </p>

            <p>
              Every product gets a v2. Every build gets a revision. This is that
              for life — raw experiences, solo, documented as it happens. No
              filter, no script. Just terrain and time.
            </p>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 text-[#02a57f] hover:underline focus:outline-none focus:underline"
      >
        {isExpanded ? 'Read less' : 'Read more ...'}
      </button>
    </div>
  )
}
