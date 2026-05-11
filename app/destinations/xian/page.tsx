import { Metadata } from 'next';
import XianHubClient from './XianHubClient';
import { makeMetadata } from '@/lib/metadata';

export const metadata: Metadata = makeMetadata({
  title: "Xi'an Travel Guide",
  description:
    "Plan a complete Xi'an trip with this city guide covering Terracotta Warriors, food streets, best neighborhoods, and practical local tips for first-time visitors.",
  path: '/destinations/xian',
});

export default function XianPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: "Xi'an Travel Guide",
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/xian',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <XianHubClient />
    </>
  );
}
