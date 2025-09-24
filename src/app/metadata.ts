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
  description: 'Software Engineer and Agricultural Entrepreneur. Professional portfolio showcasing technical expertise and agricultural ventures.',
  keywords: 'Software Engineer, Agricultural Entrepreneur, Technology, Agriculture',
  alternates: {
    canonical: 'https://keerthigowda.com',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Software Engineer',
    description: 'Software Engineer and Agricultural Entrepreneur. Professional portfolio showcasing technical expertise and agricultural ventures.',
    images: ['/images/keerthi-profile.webp'],
    url: 'https://keerthigowda.com',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Software Engineer',
    description: 'Software Engineer and Agricultural Entrepreneur. Professional portfolio showcasing technical expertise and agricultural ventures.',
    images: ['/images/keerthi-profile.webp'],
  },
}

export const musicMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Music',
  description: 'Musical pursuits in Carnatic traditions including Mridangam, Harmonium, and Yakshagana.',
  keywords: 'Music, Mridangam, Harmonium, Yakshagana, Indian Classical Music, Carnatic',
  alternates: {
    canonical: 'https://keerthigowda.com/music',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Music',
    description: 'Musical pursuits in Carnatic traditions including Mridangam, Harmonium, and Yakshagana.',
    images: ['/images/mridangam1.webp'],
    url: 'https://keerthigowda.com/music',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Music',
    description: 'Musical pursuits in Carnatic traditions including Mridangam, Harmonium, and Yakshagana.',
    images: ['/images/mridangam1.webp'],
  },
}

export const farmMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Farm',
  description: 'Sustainable agricultural practices with diverse crop cultivation and livestock management.',
  keywords: 'Agriculture, Sustainable Farming, Crop Cultivation, Livestock Management, Organic Farming',
  alternates: {
    canonical: 'https://keerthigowda.com/farm',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Farm',
    description: 'Sustainable agricultural practices with diverse crop cultivation and livestock management.',
    images: ['/images/farm.webp'],
    url: 'https://keerthigowda.com/farm',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Farm',
    description: 'Sustainable agricultural practices with diverse crop cultivation and livestock management.',
    images: ['/images/farm.webp'],
  },
}

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - About',
  description: 'Full Stack Engineer with expertise in modern web technologies, mobile development, and agricultural technology.',
  keywords: 'Software Engineer, Full Stack, Python, Flutter, Web Development, Mobile Development',
  alternates: {
    canonical: 'https://keerthigowda.com/about',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - About',
    description: 'Full Stack Engineer with expertise in modern web technologies, mobile development, and agricultural technology.',
    images: ['/images/keerthi-gowda.webp'],
    url: 'https://keerthigowda.com/about',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - About',
    description: 'Full Stack Engineer with expertise in modern web technologies, mobile development, and agricultural technology.',
    images: ['/images/keerthi-gowda.webp'],
  },
}

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Contact',
  description: 'Professional contact information for collaborations and inquiries.',
  keywords: 'Contact, Email, LinkedIn, GitHub, Professional Network, Collaboration',
  alternates: {
    canonical: 'https://keerthigowda.com/contact',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Contact',
    description: 'Professional contact information for collaborations and inquiries.',
    images: ['/images/keerthi-profile.webp'],
    url: 'https://keerthigowda.com/contact',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Contact',
    description: 'Professional contact information for collaborations and inquiries.',
    images: ['/images/keerthi-profile.webp'],
  },
}

export const blogMetadata: Metadata = {
  ...baseMetadata,
  title: 'Keerthi Gowda - Blog',
  description: 'Technical articles and insights on software engineering, agriculture, and technology.',
  keywords: 'Blog, Technology, Agriculture, Software Engineering, Technical Articles',
  alternates: {
    canonical: 'https://keerthigowda.com/blog',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Keerthi Gowda - Blog',
    description: 'Technical articles and insights on software engineering, agriculture, and technology.',
    images: ['/images/keerthi-gowda.webp'],
    url: 'https://keerthigowda.com/blog',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Keerthi Gowda - Blog',
    description: 'Technical articles and insights on software engineering, agriculture, and technology.',
    images: ['/images/keerthi-gowda.webp'],
  },
} 