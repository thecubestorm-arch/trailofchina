import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
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

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Don\'t buy "blessed" items from vendors outside — they\'re overpriced and not authentic',
    },
    {
      type: 'scam',
      text: 'Ignore fortune-tellers near the gate — they\'re not associated with the temple',
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
      nameZh="雍和宫"
      city="Beijing"
      description={`Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.`}
      hours="9:00-16:30"
      price="¥25"
      nearestSubway="Yonghegong, Lines 2/5"
      bestTime="Early morning (9:00-10:30) for monk chanting"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=39.9461&lon=116.4064&zoom=16&marker=39.9461%2C116.4064"
      relatedLinks={[
        { title: 'Temple of Heaven', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        { title: 'Bell and Drum Towers', href: '/destinations/beijing/what-to-do/bell-and-drum-towers' },
        { title: 'Hutong Tours', href: '/destinations/beijing/what-to-do/hutong' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
      ]}
    />
  );
}
