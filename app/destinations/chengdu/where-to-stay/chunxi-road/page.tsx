import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Chunxi Road (春熙路) - Best Neighborhood to Stay in Chengdu',
  description:
    'Stay in Chengdu\'s central shopping and dining district. Modern hotels, easy metro access, and the best base for first-time visitors.',
  openGraph: {
    title: 'Chunxi Road (春熙路) - Best Neighborhood to Stay in Chengdu',
    description:
      'Stay in Chengdu\'s central shopping and dining district. Modern hotels, easy metro access, and the best base for first-time visitors.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Chunxi+Road&description=Central+shopping+district+with+modern+hotels',
        width: 1200,
        height: 630,
        alt: 'Chunxi Road Chengdu',
      },
    ],
  },
};

export default function ChunxiRoadPage() {
  return (
    <NeighborhoodPage
      name="Chunxi Road"
      nameZh="春熙路"
      city="Chengdu"
      description="Chunxi Road is Chengdu's answer to Nanjing Road — a bustling pedestrian shopping district anchored by IFS Plaza and its famous climbing panda sculpture. This is the most convenient base in the city: Line 2 and Line 3 cross here, putting you within 20 minutes of almost every major sight. The area is packed with modern hotels from international chains to stylish boutiques, plus hundreds of restaurants covering every Sichuan specialty. It's busy and commercial, but undeniably practical."
      vibe="Bustling, modern, ultra-convenient"
      bestFor="First-time visitors and shoppers who want maximum convenience"
      priceRange="¥350-1200/night"
      nearestSubway="Chunxi Road (Line 2/3), Tianfu Square (Line 1/2)"
      tips={[
        { type: 'tip', text: 'Book hotels near Tianfu Square for slightly quieter stays with the same metro access' },
        { type: 'tip', text: 'IFS and Taikoo Li have the best dining courts — skip the tourist-trap snack streets' },
        { type: 'tip', text: 'Late-night hotpot spots within walking distance stay open past midnight' },
      ] as const}
      relatedLinks={[
        { title: 'Jinli Area', href: '/destinations/chengdu/where-to-stay/jinli-area' },
        { title: 'Wide & Narrow Alleys', href: '/destinations/chengdu/where-to-stay/wide-narrow-alley' },
        { title: 'Where to Stay in Chengdu', href: '/destinations/chengdu/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Chengdu Food Guide: What to Eat and Where', description: 'From mapo tofu to rabbit heads — a street-by-street eating guide.', href: '/blog/chengdu-food-guide' },
        { title: 'How Many Days in Chengdu?', description: 'Sample itineraries for 2, 3, and 5-day visits.', href: '/blog/chengdu-itinerary' },
      ]}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'Where to Stay', href: '/destinations/chengdu/where-to-stay' },
        { label: 'Chunxi Road' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/chunxi-road-1/800/500", alt: "Chunxi Road shopping district in Chengdu" },
        { src: "https://picsum.photos/seed/chunxi-road-2/800/500", alt: "IFS Plaza with the famous climbing panda sculpture in Chengdu" },
        { src: "https://picsum.photos/seed/chunxi-road-3/800/500", alt: "Busy pedestrian street in Chengdu's central shopping area" },
      ]}
    />
  );
}