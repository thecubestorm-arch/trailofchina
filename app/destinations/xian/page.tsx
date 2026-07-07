import { Metadata } from 'next';
import XianHubClient from './XianHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

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
    url: 'https://www.trailofchina.com/destinations/xian',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Xi'an", path: "/destinations/xian" }]);

  return (
    <>
      <header className="mb-8 relative">
        <ChineseWatermark character="安" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          {'Xi\'an Travel Guide'}
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Xi'an</span>
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
      <XianHubClient />
    </>
  );
}
