import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Wenshu Monastery (文殊院) Chengdu | Tea House, History & Peace',
  description:
    'Chengdu\'s best-preserved Buddhist monastery and the spiritual heart of the city. The real draw isn\'t the temple — it\'s the tea house in the courtyard where locals play mahjong for hours over ¥10 tea. This is authentic Chengdu life.',
  openGraph: {
    title: 'Wenshu Monastery (文殊院) Chengdu | Tea House, History & Peace',
    description:
      'Chengdu\'s best-preserved Buddhist monastery and the spiritual heart of the city.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/wenshu-monastery',
    type: 'website',
  },
};

export default function WenshuMonasteryPage() {
  const tips = [
    {
      type: 'tip',
      text: 'The tea house is the main attraction — not the temple itself, come for the mahjong and tea experience',
    },
    {
      type: 'tip',
      text: '¥10 gets you a gaiwan tea and a seat all afternoon — best value in Chengdu',
    },
    {
      type: 'tip',
      text: 'Try the vegetarian restaurant near the entrance — excellent and reasonably priced',
    },
    {
      type: 'tip',
      text: 'Locals play mahjong here — watch or join, it\'s part of the local culture',
    },
    {
      type: 'tip',
      text: 'No photos inside the main hall — respect the sacred space',
    },
  ] as const;

  const relatedLinks = [
    { title: 'People\'s Park Teahouse', href: '/destinations/chengdu/what-to-do/peoples-park-teahouse' },
    { title: 'Kuanzhai Alley', href: '/destinations/chengdu/what-to-do/kuanzhai-alley' },
    { title: 'Chengdu Where to Eat', href: '/destinations/chengdu/where-to-eat' },
    { title: 'Chengdu Guide', href: '/destinations/chengdu' },
  ] as const;

  return (
    <AttractionPage
      name="Wenshu Monastery"
      nameZh="文殊院"
      city="Chengdu"
      description={`Chengdu's best-preserved Buddhist monastery and the spiritual heart of the city. The real draw isn\'t the temple — it\'s the tea house in the courtyard where locals play mahjong for hours over ¥10 tea. This is authentic Chengdu life.`}
      hours="8:00-17:00 (tea house until 20:00)"
      price="Free entry, tea ¥10-20"
      nearestSubway="Wenshu Monastery, Line 1"
      bestTime="Afternoon (2:00-5:00 PM) for tea house atmosphere"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=30.6656&lon=104.0834&zoom=16&marker=30.6656%2C104.0834"
      relatedLinks={relatedLinks}
    />
  );
}
