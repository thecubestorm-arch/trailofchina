import type { Metadata } from 'next'
import HomeV7Client from './HomeV7Client'

export const metadata: Metadata = {
  title: 'China Travel Guide V7 | Trail of China',
  description:
    'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'China Travel Guide V7 | Trail of China',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: ['https://picsum.photos/seed/china-skyline/1920/1080'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://picsum.photos/seed/china-skyline/1920/1080'],
  },
}

export default function HomeV7Page() {
  return <HomeV7Client />
}
