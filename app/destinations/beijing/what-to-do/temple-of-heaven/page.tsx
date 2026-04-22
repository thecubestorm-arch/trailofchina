import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Temple of Heaven (天坛) Beijing | Complete Visitor Guide',
  description:
    'Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.',
  openGraph: {
    title: 'Temple of Heaven (天坛) Beijing | Complete Visitor Guide',
    description:
      'Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/temple-of-heaven',
    type: 'website',
  },
};

export default function TempleOfHeavenPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Come at dawn for tai chi and choir performances — the park is where real Beijing life happens',
    },
    {
      type: 'tip',
      text: 'Circular Mound Altar has amazing acoustics — whisper at the center and hear it echo clearly',
    },
    {
      type: 'tip',
      text: 'The park is larger than expected — allow at least 3 hours to explore properly',
    },
    {
      type: 'tip',
      text: 'Echo Wall works if you listen closely — two people can hear each other through the wall',
    },
    {
      type: 'tip',
      text: 'Avoid Chinese national holidays — the park becomes extremely crowded',
    },
  ] as const

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Ignore "guided tour" offers at entrance — they\'re selling the same access you have with your ticket',
    },
    {
      type: 'scam',
      text: 'Don\'t buy incense from vendors outside — it\'s overpriced and the quality is poor',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Hall of Prayer for Good Harvests at golden hour — the iconic silhouette against the sky',
    },
    {
      type: 'photo',
      text: 'Locals doing tai chi at dawn — authentic Beijing life in the park',
    },
    {
      type: 'photo',
      text: 'Echo Wall — capture the famous acoustics with people leaning against it',
    },
    {
      type: 'photo',
      text: 'Circular Mound Altar — the three levels symbolize heaven, earth, and humanity',
    },
  ] as const

  return (
    <AttractionPage
      name="Temple of Heaven"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="天坛"
      city="Beijing"
      description={`Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.`}
      hours="6:00-22:00 (park), 8:00-17:30 (halls)"
      price="Park ¥15, All-access ¥34"
      nearestSubway="Tiantan Dongmen, Line 5"
      bestTime="6:00-8:00 AM for local life, 8:30-11:00 for halls"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=39.8845&lon=116.4072&zoom=16&marker=39.8845%2C116.4072"
      relatedLinks={[
        { title: 'Summer Palace', href: '/destinations/beijing/what-to-do/summer-palace' },
        { title: 'Lama Temple', href: '/destinations/beijing/what-to-do/lama-temple' },
        { title: 'Hutong Tours', href: '/destinations/beijing/what-to-do/hutong' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'Forbidden City', href: '/destinations/beijing/what-to-do/forbidden-city' },
      ]}
    />
  );
}
