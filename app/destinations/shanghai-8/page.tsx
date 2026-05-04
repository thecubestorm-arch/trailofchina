import { Metadata } from 'next';
import ShanghaiSuperClient from './ShanghaiSuperClient';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Trail of China',
  description: 'Explore Shanghai — the Bund, Yu Garden, French Concession, and more. Search, filter, and plan your perfect trip.',
};

export default function Shanghai8Page() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Shanghai Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/shanghai-8',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
      />
      <ShanghaiSuperClient />
    </>
  );
}
