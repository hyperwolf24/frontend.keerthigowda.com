import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import FloatingBubbles from './components/FloatingBubbles'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://keerthigowda.com'),
  title: 'Keerthi Gowda',
  description: 'Official website of Keerthi Gowda - Software Engineer, farmer, and more.',
  keywords: 'Keerthi Gowda, music, farming',
  authors: [{ name: 'Keerthi Gowda' }],
  openGraph: {
    title: 'Keerthi Gowda',
    description: 'Official website of Keerthi Gowda',
    type: 'website',
    images: ['/images/keerthi-profile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keerthi Gowda',
    description: 'Official website of Keerthi Gowda',
    images: ['/images/keerthi-profile.jpg'],
  },
  verification: {
    google: 'MPqjuuwDV6FcA6-ESZFgeZNTVnMOrin1IM6YyJpZW1w',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" />
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/icons/apple-icon-precomposed.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body className={ibmPlexMono.className}>
        <div className="relative min-h-screen">
          {/* Background layer */}
          <div className="farm-background fixed inset-0 -z-10"></div>
          
          {/* Bubbles layer */}
          <div className="relative z-0">
            <FloatingBubbles />
          </div>
          
          {/* Content layer */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full py-4 text-[#8892b0]">
              <div className="container mx-auto px-4">
                <p className="text-center">
                  &copy; {new Date().getFullYear()} Keerthi Gowda. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
