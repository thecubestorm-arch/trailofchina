import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'The Bund (外滩) - Best Neighborhood to Stay in Shanghai',
  description:
    'Stay in Shanghai iconic waterfront district with luxury hotels and colonial grandeur. Perfect for travelers who want skyline views and don\'t mind paying for them.',
  openGraph: {
    title: 'The Bund (外滩) - Best Neighborhood to Stay in Shanghai',
    description:
      'Stay in Shanghai iconic waterfront district with luxury hotels and colonial grandeur. Perfect for travelers who want skyline views and don\'t mind paying for them.',
    images: [
      {
        url: 'https://www.trailofchina.com/api/og?title=The+Bund&description=Iconic+waterfront+luxury+and+colonial+grandeur',
        width: 1200,
        height: 630,
        alt: 'The Bund Shanghai',
      },
    ],
  },
};

export default function BundAreaPage() {
  return (
    <NeighborhoodPage
      name="The Bund Area"
      nameZh="外滩"
      city="Shanghai"
      description="The Bund area encompasses the historic waterfront promenade and the streets immediately behind it. This is where Shanghai's colonial past meets its futuristic present — 1920s Art Deco buildings face off against Pudong's skyline across the river. Luxury hotels dominate, but mid-range options exist a few blocks inland."
      vibe="Iconic waterfront luxury and colonial grandeur"
      bestFor="Travelers who want to wake up to skyline views and don't mind paying for them"
      priceRange="¥500-3000+/night"
      nearestSubway="East Nanjing Road (Line 2/10)"
      tips={[
        { type: 'tip', text: 'Book rooms with Bund view for the best skyline views at night' },
        { type: 'tip', text: 'Avoid restaurants with "view surcharges" — same food costs more with a view' },
        { type: 'tip', text: 'Nanjing Road is walkable from here for shopping' },
        { type: 'tip', text: 'Walk one block inland for half-price food and authentic local eateries' },
      ] as const}
      relatedLinks={[
        { title: 'French Concession', href: '/destinations/shanghai/where-to-stay/french-concession' },
        { title: 'Jing\'an', href: '/destinations/shanghai/where-to-stay/jingan' },
        { title: 'Xintiandi', href: '/destinations/shanghai/where-to-stay/xintiandi' },
        { title: 'Where to Stay in Shanghai', href: '/destinations/shanghai/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Shanghai', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/shanghai/where-to-stay' },
        { title: 'French Concession', description: 'Leafy streets, courtyard cafes, and Shanghai\'s best neighborhood feel.', href: '/destinations/shanghai/where-to-stay/french-concession' },
        { title: 'What to Do in Shanghai', description: 'Must-see attractions and hidden gems in Shanghai.', href: '/destinations/shanghai/what-to-do' },
        { title: 'Local Experiences in Shanghai', description: 'Authentic local experiences: shikumen walks, Art Deco tours, and street food adventures.', href: '/destinations/shanghai/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/bund-area-1/800/500", alt: "The Bund waterfront skyline at night in Shanghai" },
        { src: "https://picsum.photos/seed/bund-area-2/800/500", alt: "Colonial-era architecture along the Shanghai Bund" },
        { src: "https://picsum.photos/seed/bund-area-3/800/500", alt: "Huangpu River view from the Bund in Shanghai" },
      ]}
    />
  );
}
