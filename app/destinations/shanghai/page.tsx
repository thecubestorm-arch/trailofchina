import { Metadata } from 'next';
import ShanghaiHubClient from './ShanghaiHubClient';
import { breadcrumbSchema } from '@/lib/schema'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide',
  description: 'Complete Shanghai travel guide: best things to do, where to eat, local tips, and itineraries for first-time visitors.',
  alternates: { canonical: '/destinations/shanghai' },
  openGraph: {
    title: 'Shanghai Travel Guide - Trail of China',
    description: 'Complete Shanghai travel guide for first-time visitors.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shanghai Travel Guide - Trail of China' }],
  },
};

export default function ShanghaiPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Shanghai", path: "/destinations/shanghai" }]);
  return (
    <>
      <header className="mb-8 relative">
        <ChineseWatermark character="沪" />
        <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
          Shanghai Travel Guide
        </h1>
        <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
          <span className="text-2xl">Destinations</span>
          <span className="text-lg">• Shanghai</span>
        </div>
      </header>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ShanghaiHubClient />
    </>
  );
}
