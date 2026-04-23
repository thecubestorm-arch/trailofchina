import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Xintiandi (新天地) - Best Neighborhood to Stay in Shanghai',
  description:
    'Stay in Shanghai polished entertainment district with restored shikumen buildings. Perfect for business travelers and couples who want upscale dining and nightlife steps from their hotel.',
  openGraph: {
    title: 'Xintiandi (新天地) - Best Neighborhood to Stay in Shanghai',
    description:
      'Stay in Shanghai polished entertainment district with restored shikumen buildings. Perfect for business travelers and couples who want upscale dining and nightlife steps from their hotel.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Xintiandi&description=Polished+modern+and+expat-friendly',
        width: 1200,
        height: 630,
        alt: 'Xintiandi Shanghai',
      },
    ],
  },
};

export default function XintiandiPage() {
  return (
    <NeighborhoodPage
      name="Xintiandi"
      nameZh="新天地"
      city="Shanghai"
      description="Xintiandi is Shanghai's polished entertainment district — restored shikumen (stone-gate) buildings housing international restaurants, bars, and boutiques. It's clean, safe, and English-friendly, though more expensive and less &ldquo;authentic&rdquo; than other neighborhoods. The area connects easily to Huaihai Road shopping."
      vibe="Polished, modern, and expat-friendly"
      bestFor="Business travelers and couples who want upscale dining and nightlife steps from their hotel"
      priceRange="¥400-2500/night"
      nearestSubway="Xintiandi (Line 10/13)"
      tips={[
        { type: 'tip', text: 'Great for a one-night stopover' },
        { type: 'tip', text: 'Prices run 20-30% higher than areas 2 blocks away' },
        { type: 'tip', text: 'Walk to Fuxing Park for a quieter morning alternative' },
      ] as const}
      relatedLinks={[
        { title: 'The Bund Area', href: '/destinations/shanghai/where-to-stay/bund-area' },
        { title: 'French Concession', href: '/destinations/shanghai/where-to-stay/french-concession' },
        { title: 'Jing\'an', href: '/destinations/shanghai/where-to-stay/jingan' },
        { title: 'Where to Stay in Shanghai', href: '/destinations/shanghai/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Shanghai', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/shanghai/where-to-stay' },
        { title: 'Jing\'an', description: 'Central, connected, and always buzzing — Shanghai\'s transport hub.', href: '/destinations/shanghai/where-to-stay/jingan' },
        { title: 'What to Do in Shanghai', description: 'Must-see attractions and hidden gems in Shanghai.', href: '/destinations/shanghai/what-to-do' },
        { title: 'Local Experiences in Shanghai', description: 'Authentic local experiences: shikumen walks, Art Deco tours, and street food adventures.', href: '/destinations/shanghai/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/xintiandi-1/800/500", alt: "Restored shikumen stone-gate buildings in Shanghai's Xintiandi" },
        { src: "https://picsum.photos/seed/xintiandi-2/800/500", alt: "Upscale restaurants in the Xintiandi entertainment district" },
        { src: "https://picsum.photos/seed/xintiandi-3/800/500", alt: "Fuxing Park near Xintiandi in Shanghai" },
      ]}
    />
  );
}
