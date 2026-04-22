import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Kuanzhai Alley (宽窄巷子) Chengdu | Three Alleys, Three Vibes',
  description:
    'Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques, Well Alley (Jing) for local snacks and wall art. Chengdu\'s answer to Beijing\'s hutong but more polished. Packed but pretty.',
  openGraph: {
    title: 'Kuanzhai Alley (宽窄巷子) Chengdu | Three Alleys, Three Vibes',
    description:
      'Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/kuanzhai-alley',
    type: 'website',
  },
};

export default function KuanzhaiAlleyPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Each alley has a different vibe — walk all three to get the full experience',
    },
    {
      type: 'tip',
      text: 'Skip the overpriced restaurants — snack street is where you\'ll find better value',
    },
    {
      type: 'tip',
      text: 'Wide Alley tea houses are best for atmosphere — try authentic Chengdu tea culture',
    },
    {
      type: 'tip',
      text: 'Come early morning (before 10 AM) for photos without crowds',
    },
    {
      type: 'tip',
      text: 'Brick art on Well Alley walls is Instagrammable — don\'t miss this hidden gem',
    },
  ] as const;

  const relatedLinks = [
    { title: 'Jinli', href: '/destinations/chengdu/what-to-do/jinli-ancient-street' },
    { title: 'Wenshu Monastery', href: '/destinations/chengdu/what-to-do/wenshu-monastery' },
    { title: 'Chengdu Where to Eat', href: '/destinations/chengdu/where-to-eat' },
    { title: 'Chengdu Guide', href: '/destinations/chengdu' },
  ] as const;

  return (
    <AttractionPage
      name="Kuanzhai Alley"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="宽窄巷子"
      city="Chengdu"
      description={`Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques, Well Alley (Jing) for local snacks and wall art. Chengdu\'s answer to Beijing\'s hutong but more polished. Packed but pretty.`}
      hours="Open all day, best 10:00-22:00"
      price="Free entry"
      nearestSubway="Kuanzhai Alley, Line 4"
      bestTime="Morning for quiet, evening for atmosphere"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=30.6589&lon=104.0686&zoom=16&marker=30.6589%2C104.0686"
      relatedLinks={relatedLinks}
    />
  );
}
