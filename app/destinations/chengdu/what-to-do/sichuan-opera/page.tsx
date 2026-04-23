import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Sichuan Opera Face-Changing (川剧变脸) Chengdu | Shows, Tickets & What to Expect',
  description:
    'Sichuan opera\'s face-changing (bianlian) is one of China\'s most spectacular traditional arts. Masks change in a fraction of a second — by sleight of hand that\'s been secret for centuries. Chengdu is the only place to see it performed live.',
  openGraph: {
    title: 'Sichuan Opera Face-Changing (川剧变脸) Chengdu | Shows, Tickets & What to Expect',
    description:
      'Sichuan opera\'s face-changing (bianlian) is one of China\'s most spectacular traditional arts.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/sichuan-opera',
    type: 'website',
  },
};

export default function SichuanOperaPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Shufeng Square is the most tourist-friendly venue — English subtitles and good views',
    },
    {
      type: 'tip',
      text: 'Face-changing is the finale — don\'t leave early or you\'ll miss the main event',
    },
    {
      type: 'tip',
      text: 'Some shows include fire-spitting and rolling-lamp acts — spectacular additional performances',
    },
    {
      type: 'tip',
      text: 'Book 1-2 days ahead in peak season — popular shows sell out',
    },
    {
      type: 'tip',
      text: 'Camera flash kills the illusion — don\'t use flash or your phone during the show',
    },
  ] as const;

  const relatedLinks = [] as const;

  return (
    <AttractionPage
      name="Sichuan Opera"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="川剧变脸"
      city="Chengdu"
      description={`Sichuan opera\'s face-changing (bianlian) is one of China\'s most spectacular traditional arts. Masks change in a fraction of a second — by sleight of hand that\'s been secret for centuries. Chengdu is the only place to see it performed live.`}
      hours="Evening shows 7:30-9:00 PM"
      price="¥120-280"
      nearestSubway="Varies by venue"
      bestTime="Evening shows (book ahead)"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0564%2C30.6442%2C104.0664%2C30.6502&layer=mapnik&marker=30.6472%2C104.0614"
      address="23 Qinyang Road, Qingyang District"
      addressZh="成都市青羊区琴台路23号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Jinli", description: "Explore Jinli, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Kuanzhai Alley", description: "Explore Kuanzhai Alley, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/kuanzhai-alley" },
        { title: "Chengdu Guide", description: "Complete guide to planning your Chengdu trip.", href: "/destinations/chengdu" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
      ]}
    />
  );
}
