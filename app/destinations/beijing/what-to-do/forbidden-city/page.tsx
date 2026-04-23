import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Forbidden City (故宫) - Beijing\'s Imperial Palace',
  description:
    'The world\'s largest palace complex. 980 buildings, 8,700 rooms, home to 24 emperors over 500 years. Complete visitor guide with hours, tickets, and insider tips.',
  openGraph: {
    title: 'Forbidden City (故宫) - Beijing\'s Imperial Palace',
    description:
      'The world\'s largest palace complex. 980 buildings, 8,700 rooms, home to 24 emperors over 500 years. Complete visitor guide.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/forbidden-city',
    type: 'website',
  },
};

export default function ForbiddenCityPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Book tickets on their WeChat mini-program at midnight, 7 days in advance — tickets sell out fast',
    },
    {
      type: 'tip',
      text: 'Enter from the north gate (Gate of Divine Prowess) to walk the route in reverse with fewer crowds',
    },
    {
      type: 'tip',
      text: 'Allow 3-4 hours minimum — the complex is enormous with 980 buildings across 720,000 square meters',
    },
    {
      type: 'tip',
      text: 'Start at the Meridian Gate (south) and exit through the Gate of Divine Prowess (north) directly into Jingshan Park for a rooftop panorama',
    },
    {
      type: 'tip',
      text: 'Visit in the morning hours (8:30-11:00) when light streams through the halls — best for photography',
    },
    {
      type: 'tip',
      text: 'The Hall of Supreme Harmony (taishan) hosts daily demonstrations at 10:00 and 14:00 — arrive 15 minutes early',
    },
    {
      type: 'tip',
      text: 'Don\'t miss the Palace of Heavenly Purity and the Hall of Mental Cultivation — less crowded but historically significant',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'Jingshan Park\'s rooftop (directly north of the complex) — the single best overview photo of the entire palace',
    },
    {
      type: 'photo',
      text: 'Meridian Gate at sunrise — the iconic gate with the city backdrop',
    },
    {
      type: 'photo',
      text: 'The Hall of Supreme Harmony during the 10:00 demonstration — dramatic lighting with traditional ceremony',
    },
    {
      type: 'photo',
      text: 'The 101-step stone corridor connecting the main halls — unique perspective from below',
    },
    {
      type: 'photo',
      text: 'The Imperial Garden in early evening — golden hour light on the ancient pines and rockeries',
    },
  ] as const

  return (
    <AttractionPage
      name="Forbidden City"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="故宫"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/forbidden-city-1/800/600', alt: 'Forbidden City entrance gate' },
        { src: 'https://picsum.photos/seed/forbidden-city-2/800/600', alt: 'Forbidden City courtyard' },
        { src: 'https://picsum.photos/seed/forbidden-city-3/800/600', alt: 'Forbidden City throne room' },
      ]}
      description={`The Forbidden City (故宫) is the world\'s largest and best-preserved palace complex, spanning 180 acres with 980 buildings containing 8,700 rooms. It served as the imperial palace for 24 emperors over 500 years during the Ming and Qing dynasties.

Today, it houses the Palace Museum with over one million cultural relics, from ancient bronzes and ceramics to imperial robes and calligraphy. The complex follows strict feng shui principles, with the Hall of Supreme Harmony at its geometric center, symbolizing the emperor\'s position as the center of the universe.

The layout reflects ancient Chinese cosmology, with the Three Great Halls (Supreme Harmony, Central Harmony, and Preserving Harmony) on the central axis for ceremonial functions, and the Imperial Garden to the north providing imperial relaxation. The surrounding moat and high walls reinforced the emperor\'s separation from commoners — entering without permission was punishable by death.`}
      hours="8:30-17:00 (closed Mondays, last entry 16:00)"
      price="¥60 (April-October), ¥40 (November-March)"
      nearestSubway="Tiananmen East Station, Line 1"
      bestTime="Morning hours (8:30-11:00) for light and fewer crowds"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.3573%2C39.876400000000004%2C116.43730000000001%2C39.9564&layer=mapnik&marker=39.9164%2C116.3973"
      relatedLinks={[
        { title: 'Summer Palace', href: '/destinations/beijing/what-to-do/summer-palace' },
        { title: 'Temple of Heaven', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        { title: 'Jingshan Park', href: '/destinations/beijing/what-to-do/jingshan-park' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Eat in Beijing', href: '/destinations/beijing/where-to-eat' },
      ]}
      relatedArticles={[
        { title: 'Great Wall of China', description: "The world's longest wall stretching across northern China.", href: '/destinations/beijing/what-to-do/great-wall' },
        { title: 'Temple of Heaven', description: 'The majestic temple complex where emperors performed rituals.', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        { title: 'Peking Duck', description: "Beijing's most famous dish - try it at the city's best restaurants.", href: '/destinations/beijing/where-to-eat/peking-duck' },
        { title: 'Summer Palace', description: 'Imperial gardens and lakes on the outskirts of Beijing.', href: '/destinations/beijing/what-to-do/summer-palace' },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
