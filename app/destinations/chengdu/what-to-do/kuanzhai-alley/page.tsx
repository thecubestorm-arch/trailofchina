import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
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

  const relatedLinks = [] as const;

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
      images={[
        { src: 'https://picsum.photos/seed/kuanzhai-alley-1/800/500', alt: 'Kuanzhai Alley traditional Qing-dynasty architecture in Chengdu' },
        { src: 'https://picsum.photos/seed/kuanzhai-alley-2/800/500', alt: 'Wide Alley tea house at Kuanzhai Alley' },
        { src: 'https://picsum.photos/seed/kuanzhai-alley-3/800/500', alt: 'Brick art wall at Well Alley in Chengdu' },
      ]}
      description={`Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques, Well Alley (Jing) for local snacks and wall art. Chengdu's answer to Beijing's hutong but more polished. Packed but pretty.`}
      hours="Open all day, best 10:00-22:00"
      price="Free entry"
      nearestSubway="Kuanzhai Alley, Line 4"
      bestTime="Morning for quiet, evening for atmosphere"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0393%2C30.6647%2C104.0493%2C30.6707&layer=mapnik&marker=30.6677%2C104.0443"
      address="8 Kuan Alley, Qingyang District"
      addressZh="成都市青羊区宽巷子8号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Jinli", description: "Explore Jinli, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Wenshu Monastery", description: "Explore Wenshu Monastery, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/wenshu-monastery" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
        { title: "Chengdu Guide", description: "Complete guide to planning your Chengdu trip.", href: "/destinations/chengdu" },
      ]}
    />
  );
}
