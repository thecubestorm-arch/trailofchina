import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Lama Temple (雍和宫) Beijing | History, Hours & Visitor Tips',
  description:
    'Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.',
  openGraph: {
    title: 'Lama Temple (雍和宫) Beijing | History, Hours & Visitor Tips',
    description:
      'Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/lama-temple',
    type: 'website',
  },
};

export default function LamaTemplePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Come at opening for monk chanting — the spiritual morning ritual',
    },
    {
      type: 'tip',
      text: 'The Maitreya Buddha is in Wanfu Pavilion — the 18-meter statue carved from single sandalwood tree',
    },
    {
      type: 'tip',
      text: 'Free incense at entrance — participate in the ritual',
    },
    {
      type: 'tip',
      text: 'Dress respectfully — shoulders and knees covered',
    },
    {
      type: 'tip',
      text: 'Combine with Confucius Temple next door — same entrance, same ticket',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'Red walls and golden roofs — the iconic Lama Temple aesthetic',
    },
    {
      type: 'photo',
      text: 'Incense smoke at morning light — the spiritual atmosphere',
    },
    {
      type: 'photo',
      text: 'Prayer wheels — outside Wanfu Pavilion only (no photos inside)',
    },
  ] as const

  return (
    <AttractionPage
      name="Lama Temple"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="雍和宫"
      city="Beijing"
      description={`Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.`}
      hours="9:00-16:30"
      price="¥25"
      nearestSubway="Yonghegong, Lines 2/5"
      bestTime="Early morning (9:00-10:30) for monk chanting"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.4126%2C39.9447%2C116.4226%2C39.9507&layer=mapnik&marker=39.9477%2C116.4176"
      address="12 Yonghegong Street, Dongcheng District"
      addressZh="北京市东城区雍和宫大街12号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Temple of Heaven", description: "Explore Temple of Heaven, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Bell and Drum Towers", description: "Explore Bell and Drum Towers, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/bell-and-drum-towers" },
        { title: "Hutong Tours", description: "Explore Hutong Tours, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/hutong" },
        { title: "Beijing Local Tips", description: "Practical tips for navigating Beijing like a local.", href: "/destinations/beijing/local-tips" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
