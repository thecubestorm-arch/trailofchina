import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'French Concession (法租界) - Best Neighborhood to Stay in Shanghai',
  description:
    'Stay in Shanghai leafy, charming neighborhood with lane houses, cafes, and boutiques. Perfect for travelers who want to experience Shanghai like a local.',
  openGraph: {
    title: 'French Concession (法租界) - Best Neighborhood to Stay in Shanghai',
    description:
      'Stay in Shanghai leafy, charming neighborhood with lane houses, cafes, and boutiques. Perfect for travelers who want to experience Shanghai like a local.',
    images: [
      {
        url: 'https://www.trailofchina.com/api/og?title=French+Concession&description=Leafy+streets+cafe+hou',
        width: 1200,
        height: 630,
        alt: 'French Concession Shanghai',
      },
    ],
  },
};

export default function FrenchConcessionPage() {
  return (
    <NeighborhoodPage
      name="French Concession"
      nameZh="法租界"
      city="Shanghai"
      description="The former French Concession is Shanghai's most livable neighborhood. Plane tree-lined streets, 1930s lane houses converted into cafes and boutiques, and a nightlife scene that ranges from cocktail bars to hole-in-the-wall dumpling shops. This is where expats and locals overlap most naturally."
      vibe="Leafy streets, courtyard cafes, and Shanghai's best neighborhood feel"
      bestFor="Travelers who want to experience Shanghai like a local — cafe hopping, boutique shopping, street wandering"
      priceRange="¥300-1500/night"
      nearestSubway="South Shaanxi Road (Line 1/10/12)"
      tips={[
        { type: 'tip', text: 'Boutique hotels and Airbnbs in lane houses are the best value' },
        { type: 'tip', text: 'Walk everywhere — the area is not taxi-friendly on weekends' },
        { type: 'tip', text: 'Stay near Fuxing Road for the best atmosphere' },
      ] as const}
      relatedLinks={[
        { title: 'The Bund Area', href: '/destinations/shanghai/where-to-stay/bund-area' },
        { title: 'Jing\'an', href: '/destinations/shanghai/where-to-stay/jingan' },
        { title: 'Xintiandi', href: '/destinations/shanghai/where-to-stay/xintiandi' },
        { title: 'Where to Stay in Shanghai', href: '/destinations/shanghai/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Shanghai', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/shanghai/where-to-stay' },
        { title: 'The Bund Area', description: 'Iconic waterfront luxury and colonial grandeur in Shanghai.', href: '/destinations/shanghai/where-to-stay/bund-area' },
        { title: 'What to Do in Shanghai', description: 'Must-see attractions and hidden gems in Shanghai.', href: '/destinations/shanghai/what-to-do' },
        { title: 'Local Experiences in Shanghai', description: 'Authentic local experiences: shikumen walks, Art Deco tours, and street food adventures.', href: '/destinations/shanghai/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/french-concession-1/800/500", alt: "Plane tree-lined streets of Shanghai's French Concession" },
        { src: "https://picsum.photos/seed/french-concession-2/800/500", alt: "Historic lane houses and cafes in the French Concession" },
        { src: "https://picsum.photos/seed/french-concession-3/800/500", alt: "Charming boutiques on a quiet French Concession street" },
      ]}
    />
  );
}
