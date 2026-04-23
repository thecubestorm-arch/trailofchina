import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
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
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="798艺术区"
      city="Beijing"
      description={`Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.`}
      hours="10:00-18:00 (most galleries, weekdays many closed)"
      price="Free entry, some exhibitions ¥50-80"
      nearestSubway="Jiangtai, Line 14"
      bestTime="Weekend afternoons"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.4894%2C39.9809%2C116.4994%2C39.9869&layer=mapnik&marker=39.9839%2C116.4944"
      address="4 Jiuxianqiao Road, Chaoyang District"
      addressZh="北京市朝阳区酒仙桥路4号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Lama Temple", description: "Explore Lama Temple, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/lama-temple" },
        { title: "Hutong Tours", description: "Explore Hutong Tours, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/hutong" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Guide", description: "Complete guide to planning your Beijing trip.", href: "/destinations/beijing" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
