import { Metadata } from 'next';
import ChengduHubClient from './ChengduHubClient';
import { makeMetadata } from '@/lib/metadata';

export const metadata: Metadata = makeMetadata({
  title: 'Chengdu Travel Guide | Trail of China',
  description:
    'Plan a complete Chengdu trip with panda timing, temple and old-town highlights, best neighborhoods, and practical local tips for first-time visitors.',
  path: '/destinations/chengdu',
});

export default function ChengduPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Chengdu Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/chengdu',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <ChengduHubClient />
    </>
  );
}
