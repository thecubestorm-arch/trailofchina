import { Metadata } from 'next';
import ChongqingHubClient from './ChongqingHubClient';
import { makeMetadata } from '@/lib/metadata';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Chongqing Travel Guide',
  description:
    'Plan a complete Chongqing trip with mountain city highlights, hotpot nights, Hongyadong views, monorail rides, and practical local tips for first-time visitors.',
  path: '/destinations/chongqing',
});

export default function ChongqingPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Chongqing Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/chongqing',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Chongqing", path: "/destinations/chongqing" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <AuthorByline />
      <ChongqingHubClient />
    </>
  );
}