import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Jinli Area (锦里) - Best Neighborhood to Stay in Chengdu',
  description:
    'Stay near Chengdu\'s most famous traditional street. Backpacker hostels to mid-range hotels within walking distance of Wuhou Shrine.',
  openGraph: {
    title: 'Jinli Area (锦里) - Best Neighborhood to Stay in Chengdu',
    description:
      'Stay near Chengdu\'s most famous traditional street. Backpacker hostels to mid-range hotels within walking distance of Wuhou Shrine.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Jinli+Area&description=Traditional+Chengdu+vibe+near+Wuhou+Shrine',
        width: 1200,
        height: 630,
        alt: 'Jinli Area Chengdu',
      },
    ],
  },
};

export default function JinliAreaPage() {
  return (
    <NeighborhoodPage
      name="Jinli Area"
      nameZh="锦里"
      city="Chengdu"
      description="Jinli Street is Chengdu's most atmospheric traditional quarter — a restored ancient lane lined with snack stalls, craft shops, and red lanterns. The surrounding Wuhou District offers a slower pace than the shopping districts, with tree-lined streets, teahouses, and Sichuan opera houses. Backpacker hostels cluster near the shrine gates, while mid-range boutique hotels hide in the older lanes a few blocks away. Evenings here are magical: lantern-lit streets, street performers, and the smell of spicy skewers everywhere."
      vibe="Traditional, atmospheric, lantern-lit"
      bestFor="Culture lovers, history-focused travelers, and those who want evening charm"
      priceRange="¥200-900/night"
      nearestSubway="Gaoshengqiao (Line 3), Huaxiba (Line 3)"
      tips={[
        { type: 'tip', text: 'Stay one block off Jinli Street itself to avoid late-night crowds and noise' },
        { type: 'tip', text: 'Wuhou Shrine closes at 6pm — visit in the afternoon, then enjoy Jinli Street at night' },
        { type: 'tip', text: 'Many guesthouses include free tea tastings and Sichuan opera discount tickets' },
      ] as const}
      relatedLinks={[
        { title: 'Chunxi Road', href: '/destinations/chengdu/where-to-stay/chunxi-road' },
        { title: 'Wide & Narrow Alleys', href: '/destinations/chengdu/where-to-stay/wide-narrow-alley' },
        { title: 'Where to Stay in Chengdu', href: '/destinations/chengdu/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Chengdu Food Guide: What to Eat and Where', description: 'From mapo tofu to rabbit heads — a street-by-street eating guide.', href: '/blog/chengdu-food-guide' },
        { title: 'Panda Base vs. Panda Valley: Which to Visit', description: 'How to choose the right panda experience near Chengdu.', href: '/blog/panda-base-vs-valley' },
      ]}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'Where to Stay', href: '/destinations/chengdu/where-to-stay' },
        { label: 'Jinli Area' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/jinli-area-1/800/500", alt: "Red lanterns illuminating Jinli Street in Chengdu" },
        { src: "https://picsum.photos/seed/jinli-area-2/800/500", alt: "Traditional snack stalls along Jinli Ancient Street" },
        { src: "https://picsum.photos/seed/jinli-area-3/800/500", alt: "Wuhou Shrine temple grounds near Jinli in Chengdu" },
      ]}
    />
  );
}