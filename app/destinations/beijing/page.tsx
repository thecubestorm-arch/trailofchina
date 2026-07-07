import { Metadata } from 'next';
import BeijingHubClient from './BeijingHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = makeMetadata({
  title: 'Beijing Travel Guide',
  description:
    "Plan a complete Beijing trip with this city guide covering the Forbidden City, Great Wall, hutongs, best neighborhoods, and practical local tips for first-time visitors.",
  path: '/destinations/beijing',
});

export default function BeijingPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Beijing Travel Guide',
    description: metadata.description,
    url: 'https://www.trailofchina.com/destinations/beijing',
  };

  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Beijing", path: "/destinations/beijing" }]);

  return (
    <>
      <header className="mb-8 relative">
        <ChineseWatermark character="京" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Beijing Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Beijing</span>
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
      <BeijingHubClient />
    </>
  );
}
