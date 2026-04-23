import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Cuntan / Nan\'an (南岸) - Best Neighborhood to Stay in Chongqing',
  description:
    'Stay across the river for local flavor, budget prices, and skyline views of downtown Chongqing without the downtown prices.',
  openGraph: {
    title: "Cuntan / Nan'an (南岸) - Best Neighborhood to Stay in Chongqing",
    description:
      'Stay across the river for local flavor, budget prices, and skyline views of downtown Chongqing without the downtown prices.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Cuntan+%2F+Nan%27an&description=Budget-friendly+with+skyline+views+across+the+river',
        width: 1200,
        height: 630,
        alt: 'Cuntan Nan\'an Chongqing',
      },
    ],
  },
};

export default function CuntanPage() {
  return (
    <NeighborhoodPage
      name="Cuntan / Nan'an"
      nameZh="南岸"
      city="Chongqing"
      description="Nan'an — the district across the Yangtze from downtown — is where Chongqing locals actually live and eat. Staying here means skyline views of the Yuzhong peninsula without Yuzhong prices, plus access to Nanbin Road's riverside bars and restaurants. The Cuntan area has seen major development with new metro connections, making it far more accessible than even a few years ago. It's less polished than Jiefangbei but more authentic: street-side hotpot, neighborhood markets, and a real sense of daily Chongqing life."
      vibe="Local, authentic, great skyline views"
      bestFor="Budget travelers and repeat visitors who want the real Chongqing"
      priceRange="¥150-600/night"
      nearestSubway="Cuntan (Line 10), Nanping (Line 3)"
      tips={[
        { type: 'tip', text: 'Nanbin Road restaurants face the skyline — book a table at dusk for the best free show in town' },
        { type: 'tip', text: 'Cross-river taxis are cheap at night but can queue during rush hour — plan around metro hours' },
        { type: 'tip', text: 'Newer hotels near Cuntan station offer excellent value compared to central properties' },
      ] as const}
      relatedLinks={[
        { title: 'Jiefangbei', href: '/destinations/chongqing/where-to-stay/jiefangbei' },
        { title: 'Hongyadong Area', href: '/destinations/chongqing/where-to-stay/hongyadong-area' },
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
        { label: "Cuntan / Nan'an" },
      ]}
      images={[
        { src: "https://picsum.photos/seed/cuntan-1/800/500", alt: "Skyline view of Yuzhong peninsula from across the Yangtze River" },
        { src: "https://picsum.photos/seed/cuntan-2/800/500", alt: "Nanbin Road riverside dining area in Chongqing at dusk" },
        { src: "https://picsum.photos/seed/cuntan-3/800/500", alt: "Local street-side hotpot restaurant in Chongqing's Nan'an district" },
      ]}
    />
  );
}