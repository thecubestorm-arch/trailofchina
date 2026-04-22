import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Summer Palace (颐和园) Beijing | Tickets, Hours & Walking Routes',
  description:
    'Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.',
  openGraph: {
    title: 'Summer Palace (颐和园) Beijing | Tickets, Hours & Walking Routes',
    description:
      'Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/summer-palace',
    type: 'website',
  },
};

export default function SummerPalacePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Enter from East Gate for classic route through the park',
    },
    {
      type: 'tip',
      text: 'Long Corridor has 14,000 painted beams — take your time walking through it',
    },
    {
      type: 'tip',
      text: 'Suzhou Street is charming — think "Forbidden City for commoners"',
    },
    {
      type: 'tip',
      text: 'Marble Boat is smaller than expected — it\'s a symbolic monument, not an actual boat',
    },
    {
      type: 'tip',
      text: 'Budget 3-4 hours — the park is enormous with Kunming Lake and Longevity Hill',
    },
  ] as const

  const scamAlerts: { type: 'scam'; text: string }[] = []

  const photoSpots = [
    {
      type: 'photo',
      text: 'Long Corridor — capture the colorful paintings from within the corridor',
    },
    {
      type: 'photo',
      text: 'Marble Boat — the iconic symbol of Cixi\'s extravagance on Kunming Lake',
    },
    {
      type: 'photo',
      text: 'Kunming Lake from Longevity Hill — the classic panoramic view',
    },
    {
      type: 'photo',
      text: 'Seventeen-Arch Bridge at sunset — the bridge and islands illuminated',
    },
  ] as const

  return (
    <AttractionPage
      name="Summer Palace"
      nameZh="颐和园"
      city="Beijing"
      description={`Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.`}
      hours="6:00-18:00 (Nov-Mar to 17:00)"
      price="¥30 (park), ¥60 (all-inclusive)"
      nearestSubway="Beigongmen, Line 4"
      bestTime="Morning (8:00-11:00) or late afternoon"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=39.9977&lon=116.2833&zoom=16&marker=39.9977%2C116.2833"
      relatedLinks={[
        { title: 'Temple of Heaven', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        { title: 'Forbidden City', href: '/destinations/beijing/what-to-do/forbidden-city' },
        { title: 'Lama Temple', href: '/destinations/beijing/what-to-do/lama-temple' },
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Guide', href: '/destinations/beijing' },
      ]}
    />
  );
}
