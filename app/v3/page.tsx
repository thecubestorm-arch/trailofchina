import type { Metadata } from 'next'
import HomeV3Client from './HomeV3Client'

export const metadata: Metadata = {
  title: 'China Travel Guide V3 | Trail of China',
  description:
    'Your first trip to China, simplified. Includes a mini-map hero, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'China Travel Guide V3 | Trail of China',
    description:
      'Your first trip to China, simplified. Includes a mini-map hero, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: ['/images/hero/china-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/china-hero.jpg'],
  },
}

export default function HomeV3Page() {
  return <HomeV3Client />
}
