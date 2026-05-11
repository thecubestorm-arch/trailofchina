import { Metadata } from 'next';
import BeijingHubClient from './BeijingHubClient';
import { makeMetadata } from '@/lib/metadata';
import AuthorByline from '@/components/AuthorByline';

export const metadata: Metadata = makeMetadata({
  title: 'Beijing Travel Guide',
  description:
    "Plan a complete Beijing trip with this city guide covering the Forbidden City, Great Wall, hutongs, best neighborhoods, and practical local tips for first-time visitors.",
  path: '/destinations/beijing',
});

export default function BeijingPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Beijing Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/beijing',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <AuthorByline />
      <BeijingHubClient />
    </>
  );
}
