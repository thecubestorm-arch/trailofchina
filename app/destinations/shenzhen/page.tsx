import { Metadata } from 'next';
import ShenzhenHubClient from './ShenzhenHubClient';
import { makeMetadata } from '@/lib/metadata';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shenzhen Travel Guide',
  description:
    "Plan a complete Shenzhen trip with this city guide covering Huaqiangbei, Ping An Finance Centre, Dafen Oil Painting Village, OCT Loft, best neighborhoods, and practical local tips for first-time visitors.",
  path: '/destinations/shenzhen',
});

export default function ShenzhenPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Shenzhen Travel Guide',
    description: metadata.description,
    url: 'https://www.trailofchina.com/destinations/shenzhen',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Shenzhen", path: "/destinations/shenzhen" }]);

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
      <AuthorByline />
      <ShenzhenHubClient />
    </>
  );
}