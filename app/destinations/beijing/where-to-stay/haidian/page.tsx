import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Haidian (海淀) Beijing | University District & Summer Palace Base',
  description:
    'Stay in Beijing university district with cheaper hotels and academic vibe. Perfect for budget travelers and visitors to the Summer Palace.',
  openGraph: {
    title: 'Haidian (海淀) Beijing | University District & Summer Palace Base',
    description:
      'Stay in Beijing university district with cheaper hotels and academic vibe. Perfect for budget travelers and visitors to the Summer Palace.',
    images: [
      {
        url: 'https://trailofchina.com/api/og?title=Haidian&description=University+district+and+Summer+Palace',
        width: 1200,
        height: 630,
        alt: 'Haidian Beijing',
      },
    ],
  },
};

export default function HaidianPage() {
  return (
    <NeighborhoodPage
      name="Haidian"
      nameZh="海淀"
      city="Beijing"
      description="Haidian is Beijing's university district - home to Tsinghua and Peking University, with a younger, more academic vibe. Cheaper hotels, lots of student restaurants, and walking distance to the Summer Palace. Less touristy, more local. Good base if you've already seen central Beijing."
      vibe="Academic, leafy, and quieter than central Beijing"
      bestFor="Budget travelers and anyone visiting the Summer Palace, Tsinghua, or Peking University"
      priceRange="¥150-800/night"
      nearestSubway="Peking University East Gate, Line 4"
      tips={[
        { type: 'tip', text: 'Best budget area in Beijing - student prices mean much lower costs' },
        { type: 'tip', text: 'Wudaokou has great Korean food (Koreatown) - don\'t miss it' },
        { type: 'tip', text: 'Summer Palace is only 15 minutes away by taxi' },
        { type: 'tip', text: '30 min subway to Tiananmen and central Beijing' },
        { type: 'tip', text: 'University campuses are beautiful in autumn - leaves create stunning scenery' },
      ] as const}
      relatedLinks={[
        { title: 'Summer Palace', href: '/destinations/beijing/things-to-do/summer-palace' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Guide', href: '/destinations/beijing/guide' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'Where to Stay in Beijing', href: '/destinations/beijing/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Beijing', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/beijing/where-to-stay' },
        { title: 'Sanlitun', description: 'Modern, international, and Beijing\'s nightlife capital.', href: '/destinations/beijing/where-to-stay/sanlitun' },
        { title: 'What to Do in Beijing', description: 'Must-see attractions and hidden gems in Beijing.', href: '/destinations/beijing/what-to-do' },
        { title: 'Local Experiences in Beijing', description: 'Hutong breakfast walks, temple rituals, calligraphy, and street food tours.', href: '/destinations/beijing/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/haidian-1/800/500", alt: "Peking University campus in Haidian district, Beijing" },
        { src: "https://picsum.photos/seed/haidian-2/800/500", alt: "Summer Palace gardens near Beijing's university district" },
        { src: "https://picsum.photos/seed/haidian-3/800/500", alt: "Tree-lined academic streets in Haidian" },
      ]}
    />
  );
}
