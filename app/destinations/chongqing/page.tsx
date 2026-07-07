import { Metadata } from 'next';
import ChongqingHubClient from './ChongqingHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

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
    url: 'https://www.trailofchina.com/destinations/chongqing',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Chongqing", path: "/destinations/chongqing" }]);

  return (
    <>
      <header className="mb-8 relative">
        <ChineseWatermark character="渝" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Chongqing Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Chongqing</span>
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
      <ChongqingHubClient />
    </>
  );
}