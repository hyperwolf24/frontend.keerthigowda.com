import { NextResponse } from 'next/server'

export async function GET() {
  const advice = {
    "user-agent": "*",
    "optimize-for-first-visit": true
  }

  return NextResponse.json(advice, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 