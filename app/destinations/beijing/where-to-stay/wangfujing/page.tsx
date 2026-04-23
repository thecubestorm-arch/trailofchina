import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Wangfujing (王府井) Beijing | Central Shopping & Tourist Hub Hotels',
  description:
    'Stay in Beijing central shopping district with international hotels and walking distance to everything. Perfect for first-time visitors who want convenience.',
  openGraph: {
    title: 'Wangfujing (王府井) Beijing | Central Shopping & Tourist Hub Hotels',
    description:
      'Stay in Beijing central shopping district with international hotels and walking distance to everything. Perfect for first-time visitors who want convenience.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Wangfujing&description=Central+shopping+and+tourist+hub',
        width: 1200,
        height: 630,
        alt: 'Wangfujing Beijing',
      },
    ],
  },
};

export default function WangfujingPage() {
  return (
    <NeighborhoodPage
      name="Wangfujing"
      nameZh="王府井"
      city="Beijing"
      description="Wangfujing is Beijing's main shopping street and the most tourist-friendly area. International hotels, western restaurants, and the famous Wangfujing Snack Street. You're 10 minutes from the Forbidden City and surrounded by conveniences. It's practical and comfortable, if not the most atmospheric."
      vibe="Central, tourist-friendly, and walking distance to everything"
      bestFor="First-time visitors who want to be walking distance from the Forbidden City and major shopping"
      priceRange="¥400-2500/night"
      nearestSubway="Wangfujing, Line 1"
      tips={[
        { type: 'tip', text: 'Best location for Forbidden City morning visits - you can be there at opening' },
        { type: 'tip', text: "Wangfujing Snack Street is overpriced - eat one block east for real food at half the price" },
        { type: 'tip', text: 'Major hotels have English-speaking staff - ask for assistance if needed' },
        { type: 'tip', text: 'Donghuamen Night Market (seasonal) is nearby for evening entertainment' },
      ] as const}
      relatedLinks={[
        { title: 'Forbidden City', href: '/destinations/beijing/things-to-do/forbidden-city' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Shopping', href: '/destinations/beijing/things-to-do/shopping' },
        { title: 'Beijing Guide', href: '/destinations/beijing/guide' },
        { title: 'Where to Stay in Beijing', href: '/destinations/beijing/where-to-stay' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/wangfujing-1/800/500", alt: "Wangfujing pedestrian shopping street in central Beijing" },
        { src: "https://picsum.photos/seed/wangfujing-2/800/500", alt: "Night market stalls on Wangfujing Snack Street" },
        { src: "https://picsum.photos/seed/wangfujing-3/800/500", alt: "Historic buildings along Beijing's Wangfujing avenue" },
      ]}
    />
  );
}
