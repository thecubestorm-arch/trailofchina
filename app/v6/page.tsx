import type { Metadata } from 'next'
import HomeV6Client from './HomeV6Client'

export const metadata: Metadata = {
  title: 'China Travel Guide V6 | Trail of China',
  description:
    'Your first trip to China, simplified. Video-first homepage with visa-free updates, practical guides, destination ideas, and essential China basics for first-time travelers.',
  openGraph: {
    title: 'China Travel Guide V6 | Trail of China',
    description:
      'Your first trip to China, simplified. Video-first homepage with visa-free updates, practical guides, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: ['/images/hero/china-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/china-hero.jpg'],
  },
}

export default function HomeV6Page() {
  return <HomeV6Client />
}
