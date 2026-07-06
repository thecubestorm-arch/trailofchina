import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Hongyadong Area (洪崖洞) - Best Neighborhood to Stay in Chongqing',
  description:
    'Stay beside Chongqing\'s most iconic landmark. Riverside views, stilt-house architecture, and unbeatable nighttime scenery.',
  openGraph: {
    title: 'Hongyadong Area (洪崖洞) - Best Neighborhood to Stay in Chongqing',
    description:
      'Stay beside Chongqing\'s most iconic landmark. Riverside views, stilt-house architecture, and unbeatable nighttime scenery.',
    images: [
      {
        url: 'https://www.trailofchina.com/api/og?title=Hongyadong+Area&description=Iconic+riverside+views+and+stilt-house+architecture',
        width: 1200,
        height: 630,
        alt: 'Hongyadong Area Chongqing',
      },
    ],
  },
};

export default function HongyadongAreaPage() {
  return (
    <NeighborhoodPage
      name="Hongyadong Area"
      nameZh="洪崖洞"
      city="Chongqing"
      description="Hongyadong is Chongqing's postcard — the 11-story stilt-house complex lit up at night looks like something from Spirited Away. Staying in this area means you can watch the lights come on from your hotel window and explore the riverside at dawn before the crowds arrive. The trade-off is real: this is the most tourist-heavy zone in the city, with inflated restaurant prices and packed streets after dark. But for a 1-2 night stay, the visual drama is worth it. Budget guesthouses hide in the upper floors, while riverside hotels command premium rates."
      vibe="Iconic, touristy, spectacular at night"
      bestFor="Short stays and photographers who want the classic Chongqing view"
      priceRange="¥300-2000/night"
      nearestSubway="Xiaoshizi (Line 1/6), Huanghuayuan (Line 2)"
      tips={[
        { type: 'tip', text: 'Visit Hongyadong at dusk to watch the lights turn on — then return at 11pm when crowds thin' },
        { type: 'tip', text: 'Eat one block inland for half the price and twice the authenticity' },
        { type: 'tip', text: 'Upper-floor guesthouses have better views but require climbing — ask about elevator access' },
      ] as const}
      relatedLinks={[
        { title: 'Jiefangbei', href: '/destinations/chongqing/where-to-stay/jiefangbei' },
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
        { label: 'Hongyadong Area' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/hongyadong-area-1/800/500", alt: "Hongyadong stilt-house complex lit up at night in Chongqing" },
        { src: "https://picsum.photos/seed/hongyadong-area-2/800/500", alt: "Riverside view of Chongqing's iconic Hongyadong architecture" },
        { src: "https://picsum.photos/seed/hongyadong-area-3/800/500", alt: "Crowded tourist walkways at Hongyadong in the evening" },
      ]}
    />
  );
}