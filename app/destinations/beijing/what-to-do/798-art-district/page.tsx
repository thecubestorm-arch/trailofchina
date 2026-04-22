import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: '798 Art District Beijing | Galleries, Cafes & Contemporary Art',
  description:
    'Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.',
  openGraph: {
    title: '798 Art District Beijing | Galleries, Cafes & Contemporary Art',
    description:
      'Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/798-art-district',
    type: 'website',
  },
};

export default function ArtDistrict798Page() {
  const tips = [
    {
      type: 'tip',
      text: 'Go on weekends only — most galleries are closed on weekdays',
    },
    {
      type: 'tip',
      text: 'UCCA is the anchor gallery — don\'t miss it',
    },
    {
      type: 'tip',
      text: '798 is huge — plan 2-3 hours to explore properly',
    },
    {
      type: 'tip',
      text: 'Many cafes double as galleries — seat yourself and enjoy',
    },
  ] as const

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Some "galleries" are actually retail shops selling mass-produced art — know what you\'re buying',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Factory pipes and Bauhaus architecture — the iconic industrial aesthetic of 798',
    },
    {
      type: 'photo',
      text: 'UCCA interior — the modern art space in converted warehouse',
    },
    {
      type: 'photo',
      text: 'Outdoor sculptures — the district is an open-air art gallery',
    },
    {
      type: 'photo',
      text: 'Mao-era slogans on walls — the historical contrast to contemporary art',
    },
  ] as const

  return (
    <AttractionPage
      name="798 Art District"
      nameZh="798艺术区"
      city="Beijing"
      description={`Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.`}
      hours="10:00-18:00 (most galleries, weekdays many closed)"
      price="Free entry, some exhibitions ¥50-80"
      nearestSubway="Jiangtai, Line 14"
      bestTime="Weekend afternoons"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=39.9764&lon=116.5119&zoom=16&marker=39.9764%2C116.5119"
      relatedLinks={[
        { title: 'Lama Temple', href: '/destinations/beijing/what-to-do/lama-temple' },
        { title: 'Hutong Tours', href: '/destinations/beijing/what-to-do/hutong' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Guide', href: '/destinations/beijing' },
      ]}
    />
  );
}
