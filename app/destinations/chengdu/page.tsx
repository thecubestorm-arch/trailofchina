import { Metadata } from 'next';
import ChengduHubClient from './ChengduHubClient';
import { makeMetadata } from '@/lib/metadata';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Chengdu Travel Guide',
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
    url: 'https://www.trailofchina.com/destinations/chengdu',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Chengdu", path: "/destinations/chengdu" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <AuthorByline />
      <ChengduHubClient />
    </>
  );
}
