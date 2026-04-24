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
      images={[
        { src: 'https://picsum.photos/seed/sichuan-opera-face/800/500', alt: 'Face-changing performer mid-transformation on stage' },
        { src: 'https://picsum.photos/seed/sichuan-opera-fire/800/500', alt: 'Fire-spitting act during Sichuan Opera show' },
        { src: 'https://picsum.photos/seed/sichuan-opera-puppet/800/500', alt: 'Shadow puppetry performance in Sichuan Opera' },
        { src: 'https://picsum.photos/seed/sichuan-opera-stage/800/500', alt: 'Elaborate stage set for Sichuan Opera performance' },
        { src: 'https://picsum.photos/seed/sichuan-opera-costume/800/500', alt: 'Performer in ornate traditional opera costume' },
      ]}
      hook="Face-changing, fire-spitting, shadow puppetry — 90 minutes of adrenaline, not your typical opera."
      quickInfo={{
        price: '¥150–280',
        hours: 'Evening shows ~20:00',
        bestTime: 'Book 1–2 days ahead',
        metro: 'Varies by venue',
      }}
      whyYouLoveIt={`The face-changing reveal happens so fast your brain can't process it — one moment the performer wears a red demon mask, the next it's blue, then green, then gold, all in under a second. The technique is a closely guarded secret passed down through generations, and even sitting in the front row won't help you catch the switch. When the performer walks into the audience and changes masks inches from your face, the entire room gasps in unison.

The fire-spitting act that precedes the face-changing finale is equally spectacular — performers literally breathe jets of flame across the stage while manipulating rolling lamps with their feet. Shadow puppetry segments tell classical Chinese stories with hand-cut leather figures projected onto a screen, providing a brief calm before the next explosion of theatrical energy. This isn't the opera you think you know — it's closer to a rock concert in traditional dress.`}
      practicalDetails={{
        gettingThere: 'Various venues, book on Trip.com',
        whatToSkip: 'Cheapest seats — can\'t see',
        photographyTips: 'No flash, mask change too fast to photograph',
      }}
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
