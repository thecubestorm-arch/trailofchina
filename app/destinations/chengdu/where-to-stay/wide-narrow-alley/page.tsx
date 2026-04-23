import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Wide & Narrow Alleys (宽窄巷子) - Best Neighborhood to Stay in Chengdu',
  description:
    'Stay among Chengdu\'s trendiest boutiques and courtyard hotels. Hipster cafes, traditional architecture, and the city\'s best atmosphere.',
  openGraph: {
    title: 'Wide & Narrow Alleys (宽窄巷子) - Best Neighborhood to Stay in Chengdu',
    description:
      'Stay among Chengdu\'s trendiest boutiques and courtyard hotels. Hipster cafes, traditional architecture, and the city\'s best atmosphere.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Wide+%26+Narrow+Alleys&description=Boutique+hotels+and+hipster+cafes+in+traditional+courtyards',
        width: 1200,
        height: 630,
        alt: 'Wide and Narrow Alleys Chengdu',
      },
    ],
  },
};

export default function WideNarrowAlleyPage() {
  return (
    <NeighborhoodPage
      name="Wide & Narrow Alleys"
      nameZh="宽窄巷子"
      city="Chengdu"
      description="The Wide and Narrow Alleys (Kuanzhai Xiangzi) are three parallel Qing-dynasty lanes restored into Chengdu's most stylish leisure zone. Wide Alley (Kuan) has the grand courtyard hotels and tea houses; Narrow Alley (Zhai) packs in hipster coffee shops, craft beer bars, and indie boutiques; and the third lane hosts more local street food. Staying here means falling asleep in a traditional courtyard and waking up to pour-over coffee — it's the best of old and new Chengdu in one walkable area."
      vibe="Boutique, hipster-meets-traditional"
      bestFor="Travelers who want atmosphere, design hotels, and great coffee"
      priceRange="¥400-1500/night"
      nearestSubway="Kuanzhai Xiangzi (Line 4), People's Park (Line 2)"
      tips={[
        { type: 'tip', text: 'Courtyard hotels on Wide Alley offer the most atmospheric stays — book early for weekend availability' },
        { type: 'tip', text: 'Narrow Alley cafes fill up by 10am on weekends — go early or late afternoon' },
        { type: 'tip', text: 'People\'s Park is a 5-minute walk and the best spot for morning tea house culture' },
      ] as const}
      relatedLinks={[
        { title: 'Jinli Area', href: '/destinations/chengdu/where-to-stay/jinli-area' },
        { title: 'Chunxi Road', href: '/destinations/chengdu/where-to-stay/chunxi-road' },
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
        { label: 'Wide & Narrow Alleys' },
      ]}
    />
  );
}