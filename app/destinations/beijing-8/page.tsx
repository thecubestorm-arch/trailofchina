import { Metadata } from 'next';
import BeijingHubClient from '../beijing/BeijingHubClient';

export const metadata: Metadata = {
  title: 'Beijing Travel Guide | Trail of China',
  description: 'Complete guide to Beijing: Forbidden City, Great Wall, hutongs, Peking Duck, and more.',
  alternates: { canonical: '/destinations/beijing' },
  robots: { index: false, follow: false },
};

export default function Beijing8Page() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Beijing Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/beijing-8',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <BeijingHubClient />
    </>
  );
}
