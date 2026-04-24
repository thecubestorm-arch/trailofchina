import type { Metadata } from 'next'
import HomeV3Client from './HomeV3Client'

export const metadata: Metadata = {
  title: 'Trail of China — First-Trip China Travel Guide',
  description:
    'Practical China travel guides for first-time visitors. Destinations, visas, apps, itineraries — everything you need for a smooth first trip.',
  keywords: [
    'China travel guide',
    'first trip to China',
    'China itinerary',
    'China visa',
    'China apps',
    'Shanghai travel',
    'Beijing travel',
    'China travel tips',
  ],
  alternates: {
    canonical: 'https://trailofchina.com',
  },
  openGraph: {
    title: 'Trail of China — First-Trip China Travel Guide',
    description:
      'Practical guides, honest advice, and ready-made itineraries. Everything you need for a smooth first trip to China.',
    url: 'https://trailofchina.com',
    siteName: 'Trail of China',
    images: [
      {
        url: 'https://trailofchina.com/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Trail of China — First-Trip China Travel Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trail of China — First-Trip China Travel Guide',
    description:
      'Practical guides, honest advice, and ready-made itineraries. Everything you need for a smooth first trip to China.',
    images: ['https://trailofchina.com/images/og/home.jpg'],
  },
}

export default function HomePageV3() {
  return <HomeV3Client />
}
