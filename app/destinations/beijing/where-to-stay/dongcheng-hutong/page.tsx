import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Dongcheng Hutong Area (东城) Beijing | Where to Stay for Authentic Beijing',
  description:
    'Stay in Beijing historic hutong alleys with courtyard hotels and real old Beijing atmosphere. Perfect for travelers who want authentic Beijing experience.',
  openGraph: {
    title: 'Dongcheng Hutong Area (东城) Beijing | Where to Stay for Authentic Beijing',
    description:
      'Stay in Beijing historic hutong alleys with courtyard hotels and real old Beijing atmosphere. Perfect for travelers who want authentic Beijing experience.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Dongcheng+Hutong&description=Historic+hutong+alleys+and+authentic+Beijing',
        width: 1200,
        height: 630,
        alt: 'Dongcheng Hutong Beijing',
      },
    ],
  },
};

export default function DongchengHutongPage() {
  return (
    <NeighborhoodPage
      name="Dongcheng Hutong Area"
      nameZh="东城"
      city="Beijing"
      description="The Dongcheng hutong area is where old Beijing survives. Narrow alleyways lined with siheyuan courtyard houses, many converted into boutique hotels and Airbnbs. You'll wake up to birdsong, walk past elderly residents playing chess, and be within walking distance of the Forbidden City, Drum Tower, and Lama Temple. Not luxury — but deeply atmospheric."
      vibe="Historic hutong alleys, courtyard hotels, and real old Beijing"
      bestFor="Travelers who want authentic Beijing atmosphere — courtyard living, hutong wandering, walking distance to major sights"
      priceRange="¥200-1500/night"
      nearestSubway="Zhangzizhonglu, Line 5 / Nanluoguxiang, Line 6"
      tips={[
        { type: 'tip', text: "Courtyard hotels (四合院酒店) are the best value here - book early, the good ones fill up fast" },
        { type: 'tip', text: "Some hutong hotels have no elevator - ask before booking if you have mobility concerns" },
        { type: 'tip', text: "Walk to Nanluoguxiang for dinner - it's just 10 minutes away" },
        { type: 'tip', text: 'Combine with morning visit to Drum Tower for a full day of exploration' },
      ] as const}
      relatedLinks={[
        { title: 'Hutong Tours', href: '/destinations/beijing/things-to-do/hutong-tours' },
        { title: 'Forbidden City', href: '/destinations/beijing/things-to-do/forbidden-city' },
        { title: 'Lama Temple', href: '/destinations/beijing/things-to-do/lama-temple' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'Where to Stay in Beijing', href: '/destinations/beijing/where-to-stay' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/dongcheng-hutong-1/800/500", alt: "Traditional hutong alleyways in Dongcheng, Beijing" },
        { src: "https://picsum.photos/seed/dongcheng-hutong-2/800/500", alt: "Courtyard siheyuan hotel in Beijing's historic hutongs" },
        { src: "https://picsum.photos/seed/dongcheng-hutong-3/800/500", alt: "Nanluoguxiang street scene at dusk" },
      ]}
    />
  );
}
