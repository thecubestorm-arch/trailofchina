import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Muslim Quarter (回民街) - Best Neighborhood to Stay in Xi\'an',
  description:
    'Stay in Xi\'an\'s legendary food quarter. Street food heaven, walk to the Bell Tower, and the city\'s most lively atmosphere.',
  openGraph: {
    title: 'Muslim Quarter (回民街) - Best Neighborhood to Stay in Xi\'an',
    description:
      "Stay in Xi'an's legendary food quarter. Street food heaven, walk to the Bell Tower, and the city's most lively atmosphere.",
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Muslim+Quarter&description=Street+food+heaven+in+Xi%27an',
        width: 1200,
        height: 630,
        alt: 'Muslim Quarter Xi\'an',
      },
    ],
  },
};

export default function MuslimQuarterPage() {
  return (
    <NeighborhoodPage
      name="Muslim Quarter"
      nameZh="回民街"
      city="Xi'an"
      description="The Muslim Quarter is Xi'an at its most vivid — a maze of lanes where lamb skewers smoke on charcoal, pita bread bakes in clay ovens, and the call to prayer echoes off Ming-dynasty walls. This Hui Muslim neighborhood has been the city's culinary heart for centuries. Staying here puts you within walking distance of the Bell Tower, Drum Tower, and City Wall south gate. The energy is unmatched, especially at night when the main drag turns into a full food street. Choose a hotel one block off the main lane for sleep without sacrificing location."
      vibe="Lively, aromatic, walkable food heaven"
      bestFor="Food lovers and travelers who want to be in the middle of everything"
      priceRange="¥220-700/night"
      nearestSubway="Zhonglou (Bell Tower, Line 2)"
      tips={[
        { type: 'tip', text: 'Book a room one street back from the main drag — same location, half the noise' },
        { type: 'tip', text: 'Breakfast here is legendary: try roujiamo (Chinese hamburger) and persimmon cakes before 9am' },
        { type: 'tip', text: 'The Great Mosque is inside the quarter and stunning at morning light — go before the tour groups' },
      ] as const}
      relatedLinks={[
        { title: 'Bell Tower Area', href: '/destinations/xian/where-to-stay/bell-tower' },
        { title: 'Dayan Pagoda Area', href: '/destinations/xian/where-to-stay/dayan-pagoda' },
        { title: "Where to Stay in Xi'an", href: '/destinations/xian/where-to-stay' },
      ]}
      relatedArticles={[
        { title: "Xi'an Food Guide: Beyond the Muslim Quarter", description: "Where locals actually eat in Xi'an — it's not all on Huimin Jie.", href: '/blog/xian-food-guide' },
        { title: 'Terracotta Warriors: How to Visit Without the Crowds', description: 'Timing, transport, and ticket tips for Xi\'an\'s #1 attraction.', href: '/blog/terracotta-warriors-guide' },
      ]}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Destinations', href: '/destinations' },
        { label: "Xi'an", href: '/destinations/xian' },
        { label: 'Where to Stay', href: '/destinations/xian/where-to-stay' },
        { label: 'Muslim Quarter' },
      ]}
    />
  );
}