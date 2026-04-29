import type { Metadata } from 'next'
import HomeV4Client from './HomeV4Client'

export const metadata: Metadata = {
  title: 'China Travel Guide V2 | Trail of China',
  description:
    'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'China Travel Guide V2 | Trail of China',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: ['/images/hero/china-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/china-hero.jpg'],
  },
}

export default function HomeV4Page() {
  return <HomeV4Client />
}
