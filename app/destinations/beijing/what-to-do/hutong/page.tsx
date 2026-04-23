import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Beijing Hutong Tours (胡同) | Walking Routes, Rickshaws & Authentic Alleys',
  description:
    'Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.',
  openGraph: {
    title: 'Beijing Hutong Tours (胡同) | Walking Routes, Rickshaws & Authentic Alleys',
    description:
      'Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/hutong',
    type: 'website',
  },
};

export default function HutongPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Walk don\'t rickshaw for authentic experience — you\'ll miss the side alleys',
    },
    {
      type: 'tip',
      text: 'Nanluoguxiang is touristy — explore side alleys for real hutong life',
    },
    {
      type: 'tip',
      text: 'Yandai Xiejie near Shichahai is quieter than Nanluoguxiang',
    },
    {
      type: 'tip',
      text: 'Real hutong life is one block off main drags — wander off the beaten path',
    },
    {
      type: 'tip',
      text: 'Rickshaw prices are negotiable — agree on price before starting',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'Hutong rooftops from Drum Tower — the classic overview of red tile roofs',
    },
    {
      type: 'photo',
      text: 'Old doorways and courtyard gates — the entrances to siheyuan houses',
    },
    {
      type: 'photo',
      text: 'Laundry lines between siheyuan — everyday hutong life',
    },
    {
      type: 'photo',
      text: 'Shichahai lake at sunset — the lakeside huts and reflections',
    },
  ] as const

  return (
    <AttractionPage
      name="Hutong"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="胡同"
      city="Beijing"
      description={`Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.`}
      hours="Always open (outdoor neighborhood)"
      price="Free to walk, rickshaw ¥80-120/hr"
      nearestSubway="Nanluoguxiang Station, Line 6"
      bestTime="Morning or late afternoon"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.398%2C39.9341%2C116.408%2C39.9401&layer=mapnik&marker=39.9371%2C116.403"
        
      relatedLinks={[
        { title: 'Forbidden City', href: '/destinations/beijing/what-to-do/forbidden-city' },
        { title: 'Bell and Drum Towers', href: '/destinations/beijing/what-to-do/bell-and-drum-towers' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'Beijing Guide', href: '/destinations/beijing' },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
