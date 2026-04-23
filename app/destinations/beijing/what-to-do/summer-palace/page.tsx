import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
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
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="颐和园"
      city="Beijing"
      description={`Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.`}
      hours="6:00-18:00 (Nov-Mar to 17:00)"
      price="¥30 (park), ¥60 (all-inclusive)"
      nearestSubway="Beigongmen, Line 4"
      bestTime="Morning (8:00-11:00) or late afternoon"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.2705%2C39.9969%2C116.2805%2C40.0029&layer=mapnik&marker=39.9999%2C116.2755"
      address="19 Xinjiangongmen Road, Haidian District"
      addressZh="北京市海淀区新建宫门路19号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Temple of Heaven", description: "Explore Temple of Heaven, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Forbidden City", description: "Explore Forbidden City, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Lama Temple", description: "Explore Lama Temple, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/lama-temple" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Guide", description: "Complete guide to planning your Beijing trip.", href: "/destinations/beijing" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
