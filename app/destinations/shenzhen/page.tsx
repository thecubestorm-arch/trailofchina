import { Metadata } from 'next';
import ShenzhenHubClient from './ShenzhenHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = makeMetadata({
  title: 'Shenzhen Travel Guide',
  description:
    "Complete Shenzhen travel guide for first-time visitors. Huaqiangbei electronics, Ping An Tower, Dafen Village, OCT Loft, neighborhoods, and practical tips.",
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
      <header className="mb-8 relative">
        <ChineseWatermark character="深" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Shenzhen Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Shenzhen</span>
        </div>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ShenzhenHubClient />
    </>
  );
}