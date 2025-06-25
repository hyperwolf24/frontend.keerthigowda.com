import { Metadata } from 'next'

const baseMetadata = {
  metadataBase: new URL('https://keerthigowda.com'),
  authors: [{ name: 'Keerthi Gowda' }],
  creator: 'Keerthi Gowda',
  publisher: 'Keerthi Gowda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'MPqjuuwDV6FcA6-ESZFgeZNTVnMOrin1IM6YyJpZW1w',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Keerthi Gowda',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@keerthigowda',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://keerthigowda.com',
  },
}

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Software Engineer',
  description: 'Welcome to the official website of Keerthi Gowda - Software Engineer, Farmer, and more. Explore music, farming and learn about Keerthi\'s work.',
  keywords: 'Keerthi Gowda, Software Engineer, Farmer, official website, music, farming',
  alternates: {
    canonical: 'https://keerthigowda.com',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Software Engineer',
    description: 'Welcome to the official website of Keerthi Gowda - Software Engineer, Farmer, and more.',
    images: ['/images/keerthi-profile.webp'],
    url: 'https://keerthigowda.com',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Software Engineer',
    description: 'Welcome to the official website of Keerthi Gowda - Software Engineer, Farmer, and more.',
    images: ['/images/keerthi-profile.webp'],
  },
}

export const musicMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Music',
  description: 'Explore Keerthi Gowda\'s musical journey, including Mridangam, Harmonium, and Yakshagana. Discover performances, recordings, and musical achievements.',
  keywords: 'Keerthi Gowda, Music, Mridangam, Harmonium, Yakshagana, Indian Classical Music',
  alternates: {
    canonical: 'https://keerthigowda.com/music',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Music',
    description: 'Explore Keerthi Gowda\'s musical journey, including Mridangam, Harmonium, and Yakshagana.',
    images: ['/images/mridangam1.webp'],
    url: 'https://keerthigowda.com/music',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Music',
    description: 'Explore Keerthi Gowda\'s musical journey, including Mridangam, Harmonium, and Yakshagana.',
    images: ['/images/mridangam1.webp'],
  },
}

export const farmMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Farm',
  description: 'Explore the farm of Keerthi Gowda, featuring various crops including coconut, arecanut, cardamom, and more. Learn about sustainable farming practices and organic cultivation.',
  keywords: 'Keerthi Gowda, Farm, Agriculture, Organic Farming, Coconut, Arecanut, Cardamom',
  alternates: {
    canonical: 'https://keerthigowda.com/farm',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Farm',
    description: 'Explore the farm of Keerthi Gowda, featuring various crops including coconut, arecanut, cardamom, and more.',
    images: ['/images/farm.webp'],
    url: 'https://keerthigowda.com/farm',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Farm',
    description: 'Explore the farm of Keerthi Gowda, featuring various crops including coconut, arecanut, cardamom, and more.',
    images: ['/images/farm.webp'],
  },
}

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - About',
  description: 'Learn more about Keerthi Gowda - Full Stack Engineer with expertise in Python, Flutter, and more. Discover his journey, skills, and professional experience.',
  keywords: 'Keerthi Gowda, Software Engineer, Full Stack, Python, Flutter, Web Development',
  alternates: {
    canonical: 'https://keerthigowda.com/about',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - About',
    description: 'Learn more about Keerthi Gowda - Full Stack Engineer with expertise in Python, Flutter, and more.',
    images: ['/images/keerthi-gowda.webp'],
    url: 'https://keerthigowda.com/about',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - About',
    description: 'Learn more about Keerthi Gowda - Full Stack Engineer with expertise in Python, Flutter, and more.',
    images: ['/images/keerthi-gowda.webp'],
  },
}

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Contact',
  description: 'Get in touch with Keerthi Gowda through email, LinkedIn, or GitHub. Connect for professional opportunities, collaborations, or inquiries.',
  keywords: 'Keerthi Gowda, Contact, Email, LinkedIn, GitHub, Professional Network',
  alternates: {
    canonical: 'https://keerthigowda.com/contact',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Contact',
    description: 'Get in touch with Keerthi Gowda through email, LinkedIn, or GitHub.',
    images: ['/images/keerthi-profile.webp'],
    url: 'https://keerthigowda.com/contact',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Contact',
    description: 'Get in touch with Keerthi Gowda through email, LinkedIn, or GitHub.',
    images: ['/images/keerthi-profile.webp'],
  },
}

export const blogMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Blog',
  description: 'Read Keerthi Gowda\'s thoughts on technology, agriculture, and life. Explore articles on software engineering, farming, and personal insights.',
  keywords: 'Keerthi Gowda, Blog, Technology, Agriculture, Software Engineering, Medium',
  alternates: {
    canonical: 'https://keerthigowda.com/blog',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Blog',
    description: 'Read Keerthi Gowda\'s thoughts on technology, agriculture, and life.',
    images: ['/images/keerthi-gowda.webp'],
    url: 'https://keerthigowda.com/blog',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Blog',
    description: 'Read Keerthi Gowda\'s thoughts on technology, agriculture, and life.',
    images: ['/images/keerthi-gowda.webp'],
  },
} 