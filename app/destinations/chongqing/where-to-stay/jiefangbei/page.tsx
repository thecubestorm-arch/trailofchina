import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Jiefangbei (解放碑) - Best Neighborhood to Stay in Chongqing',
  description:
    'Stay in Chongqing\'s downtown core. Shopping, dining, and the best metro connections in a city where elevation matters.',
  openGraph: {
    title: 'Jiefangbei (解放碑) - Best Neighborhood to Stay in Chongqing',
    description:
      'Stay in Chongqing\'s downtown core. Shopping, dining, and the best metro connections in a city where elevation matters.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Jiefangbei&description=Downtown+core+with+the+best+transport+links',
        width: 1200,
        height: 630,
        alt: 'Jiefangbei Chongqing',
      },
    ],
  },
};

export default function JiefangbeiPage() {
  return (
    <NeighborhoodPage
      name="Jiefangbei"
      nameZh="解放碑"
      city="Chongqing"
      description="Jiefangbei is Chongqing's Times Square — a neon-lit pedestrian district centered on the Liberation Monument and surrounded by shopping malls, hotpot restaurants, and international hotels. It's the single most convenient base in a city where geography makes every kilometer count. Line 1, 2, and 6 all converge here, giving you fast access to every major sight. The trade-off: it's crowded, loud, and hotels skew expensive. But if it's your first time in Chongqing, this is the smartest place to start."
      vibe="Downtown energy, neon-lit, maximum convenience"
      bestFor="First-time visitors who want the most convenient base"
      priceRange="¥400-1500/night"
      nearestSubway="Jiefangbei (Line 2), Linjiangmen (Line 2), Xiaoshizi (Line 1/6)"
      tips={[
        { type: 'tip', text: 'Confirm which metro exit is closest to your hotel — Chongqing exits can be 10 minutes apart vertically' },
        { type: 'tip', text: 'Hotpot restaurants near Jiefangbei stay open until 2am — perfect for late arrivals' },
        { type: 'tip', text: 'Walk 15 minutes downhill to reach Hongyadong and the riverside' },
      ] as const}
      relatedLinks={[
        { title: 'Hongyadong Area', href: '/destinations/chongqing/where-to-stay/hongyadong-area' },
        { title: 'Cuntan / Nan\'an', href: '/destinations/chongqing/where-to-stay/cuntan' },
        { title: 'Where to Stay in Chongqing', href: '/destinations/chongqing/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Chongqing Food Guide: Hotpot and Beyond', description: 'Navigate Chongqing\'s legendary food scene from street noodles to hotpot.', href: '/blog/chongqing-food-guide' },
        { title: 'Chongqing in 3 Days: The Ultimate Itinerary', description: 'How to see the Mountain City\'s best in a short trip.', href: '/blog/chongqing-itinerary' },
      ]}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Destinations', href: '/destinations' },
        { label: 'Chongqing', href: '/destinations/chongqing' },
        { label: 'Where to Stay', href: '/destinations/chongqing/where-to-stay' },
        { label: 'Jiefangbei' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/jiefangbei-1/800/500", alt: "Jiefangbei pedestrian street neon lights in Chongqing" },
        { src: "https://picsum.photos/seed/jiefangbei-2/800/500", alt: "Liberation Monument square in downtown Chongqing" },
        { src: "https://picsum.photos/seed/jiefangbei-3/800/500", alt: "Busy shopping district around Jiefangbei at night" },
      ]}
    />
  );
}