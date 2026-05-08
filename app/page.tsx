import type { Metadata } from 'next'
import HomeV7Client from './v7/HomeV7Client'

export const metadata: Metadata = {
  title: 'China Travel Guide - First Trip Planning',
  description:
    'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'China Travel Guide - First Trip Planning | Trail of China',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  return <HomeV7Client />
}