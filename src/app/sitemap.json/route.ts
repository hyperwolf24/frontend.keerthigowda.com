import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://keerthigowda.com'
  const today = new Date().toISOString().split('T')[0]

  const pages = [
    {
      url: baseUrl,
      lastmod: today,
      title: 'Keerthi Gowda - Software Engineer'
    },
    {
      url: `${baseUrl}/music`,
      lastmod: today,
      title: 'Keerthi Gowda'
    },
    {
      url: `${baseUrl}/farm`,
      lastmod: today,
      title: 'Keerthi Gowda'
    },
    {
      url: `${baseUrl}/about`,
      lastmod: today,
      title: 'Keerthi Gowda'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: today,
      title: 'Keerthi Gowda'
    },
    {
      url: `${baseUrl}/chandi`,
      lastmod: today,
      title: 'Keerthi Gowda'
    },
    {
      url: `${baseUrl}/elements`,
      lastmod: today,
      title: 'Keerthi Gowda'
    }
  ]

  return NextResponse.json(pages, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 