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
    title: 'China Travel Guide - First Trip Planning',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Trail of China - China Travel Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trail of China',
    url: 'https://www.trailofchina.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.trailofchina.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeV7Client />
    </>
  )
}