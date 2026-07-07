import { Metadata } from 'next';
import GuangzhouHubClient from './GuangzhouHubClient';
import { makeMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = makeMetadata({
  title: 'Guangzhou Travel Guide',
  description:
    "Plan a complete Guangzhou trip with Canton Tower, Shamian Island, dim sum, Cantonese food, neighborhoods, and practical local tips for first-time visitors.",
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
      <header className="mb-8 relative">
        <ChineseWatermark character="广" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Guangzhou Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Guangzhou</span>
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
      <GuangzhouHubClient />
    </>
  );
}