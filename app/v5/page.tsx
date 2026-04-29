import type { Metadata } from 'next'
import HomeV5Client from './HomeV5Client'

export const metadata: Metadata = {
  title: 'China Travel Guide V5 | Trail of China',
  description:
    'Your first trip to China, simplified. Includes a mini-map hero, explore-China split view, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'China Travel Guide V5 | Trail of China',
    description:
      'Your first trip to China, simplified. Includes a mini-map hero, explore-China split view, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: ['/images/hero/china-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/china-hero.jpg'],
  },
}

export default function HomeV5Page() {
  return <HomeV5Client />
}
