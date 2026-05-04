import type { Metadata } from 'next'
import HomeV7Client from './HomeV7Client'

export const metadata: Metadata = {
  title: 'Travel China Without Confusion',
  description:
    'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'Trail of China — Travel China Without Confusion',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomeV7Page() {
  return <HomeV7Client />
}
