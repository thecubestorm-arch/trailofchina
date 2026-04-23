import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Jing\'an (静安) - Best Neighborhood to Stay in Shanghai',
  description:
    'Stay in Shanghai central transportation and shopping hub. Perfect for first-time visitors who want to be near everything — shopping, transport, and nightlife.',
  openGraph: {
    title: 'Jing\'an (静安) - Best Neighborhood to Stay in Shanghai',
    description:
      'Stay in Shanghai central transportation and shopping hub. Perfect for first-time visitors who want to be near everything — shopping, transport, and nightlife.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Jing%27an&description=Central+connected+and+always+buzzing',
        width: 1200,
        height: 630,
        alt: 'Jing\'an Shanghai',
      },
    ],
  },
};

export default function JinganPage() {
  return (
    <NeighborhoodPage
      name="Jing\'an"
      nameZh="静安"
      city="Shanghai"
      description="Jing'an is the transportation and shopping hub of Shanghai. Jing'an Temple sits at the center, surrounded by mega-malls, international restaurants, and some of the city's best subway connections. It's not the most atmospheric area, but it's the most practical — everything is within reach."
      vibe="Central, connected, and always buzzing"
      bestFor="First-time visitors who want to be near everything — shopping, transport, and nightlife"
      priceRange="¥250-2000/night"
      nearestSubway="Jing'an Temple (Line 2/7)"
      tips={[
        { type: 'tip', text: 'Best subway access in Shanghai' },
        { type: 'tip', text: 'Avoid hotels directly on Nanjing West Road (noisy)' },
        { type: 'tip', text: 'Jing\'an Temple area has great ramen and international food' },
      ] as const}
      relatedLinks={[
        { title: 'The Bund Area', href: '/destinations/shanghai/where-to-stay/bund-area' },
        { title: 'French Concession', href: '/destinations/shanghai/where-to-stay/french-concession' },
        { title: 'Xintiandi', href: '/destinations/shanghai/where-to-stay/xintiandi' },
        { title: 'Where to Stay in Shanghai', href: '/destinations/shanghai/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Shanghai', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/shanghai/where-to-stay' },
        { title: 'Xintiandi', description: 'Polished, modern, and expat-friendly entertainment district.', href: '/destinations/shanghai/where-to-stay/xintiandi' },
        { title: 'What to Do in Shanghai', description: 'Must-see attractions and hidden gems in Shanghai.', href: '/destinations/shanghai/what-to-do' },
        { title: 'Local Experiences in Shanghai', description: 'Authentic local experiences: shikumen walks, Art Deco tours, and street food adventures.', href: '/destinations/shanghai/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/jingan-1/800/500", alt: "Jing'an Temple surrounded by modern skyscrapers in Shanghai" },
        { src: "https://picsum.photos/seed/jingan-2/800/500", alt: "Nanjing West Road shopping district in Shanghai's Jing'an" },
        { src: "https://picsum.photos/seed/jingan-3/800/500", alt: "Busy intersection near Jing'an Temple metro station" },
      ]}
    />
  );
}
