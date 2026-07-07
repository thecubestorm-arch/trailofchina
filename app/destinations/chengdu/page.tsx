import { Metadata } from 'next';
import ChengduHubClient from './ChengduHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

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
      <header className="mb-8 relative">
        <ChineseWatermark character="蓉" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Chengdu Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Chengdu</span>
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
      <ChengduHubClient />
    </>
  );
}
