import { Metadata } from 'next';
import GuangzhouHubClient from './GuangzhouHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Guangzhou Travel Guide',
  description:
    "Plan a complete Guangzhou trip with this city guide covering Canton Tower, Shamian Island, dim sum, the best Cantonese food, neighborhoods, and practical local tips for first-time visitors.",
  path: '/destinations/guangzhou',
});

export default function GuangzhouPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Guangzhou Travel Guide',
    description: metadata.description,
    url: 'https://www.trailofchina.com/destinations/guangzhou',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Guangzhou", path: "/destinations/guangzhou" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GuangzhouHubClient />
    </>
  );
}