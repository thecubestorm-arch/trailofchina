import type { Metadata } from 'next'
import HomeV7Client from './v7/HomeV7Client'
import { breadcrumbSchema, travelGuideSchema, websiteSchema } from '@/lib/schema'

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
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }]);
  const travelGuideJsonLd = travelGuideSchema({
    title: 'Trail of China — China Travel Guide',
    description:
      'Your first trip to China, simplified. Visa-free updates, practical trip planning, destination ideas, and essential China basics for first-time travelers.',
    url: '/',
    image: 'https://www.trailofchina.com/og-default.jpg',
  });
  const websiteJsonLd = websiteSchema({
    name: 'Trail of China',
    url: '/',
    searchUrl: '/search?q={search_term_string}',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomeV7Client />
    </>
  )
}
