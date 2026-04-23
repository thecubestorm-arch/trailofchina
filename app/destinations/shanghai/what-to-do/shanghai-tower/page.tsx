import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Shanghai Tower Observation Deck | Tickets, Hours & Best Views',
  description:
    'Shanghai Tower observation deck guide: how to buy tickets, best time to visit, 360° views from 546 meters, and comparison with Jin Mao and SWFC.',
  openGraph: {
    title: 'Shanghai Tower Observation Deck | Tickets, Hours & Best Views',
    description:
      'Shanghai Tower observation deck guide: how to buy tickets, best time to visit, 360° views from 546 meters, and comparison with Jin Mao and SWFC.',
    url: 'https://trailofchina.com/destinations/shanghai/what-to-do/shanghai-tower',
    type: 'website',
  },
};

export default function ShanghaiTowerPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Book tickets online in advance to skip the queue — walk-up tickets often have 30-60 minute waits during peak hours',
    },
    {
      type: 'tip' as const,
      text: 'Arrive 30 minutes before sunset for the best photo opportunity — you\'ll see the city in daylight, during sunset, and lit up at night',
    },
    {
      type: 'tip' as const,
      text: 'Bring your passport — it\'s required for entry and ticket verification',
    },
    {
      type: 'tip' as const,
      text: 'The observation deck can be windy and cold — bring a light jacket even in summer, especially if you step onto the outdoor terrace',
    },
    {
      type: 'tip' as const,
      text: 'The elevators reach 18 m/s (64.8 km/h) — one of the world\'s fastest. Your ears may pop, so swallow or yawn during the ride',
    },
    {
      type: 'tip' as const,
      text: 'Compare all three Lujiazui observation decks: Shanghai Tower (highest, best 360° views), SWFC (glass floor walk), Jin Mao (lowest, cheapest)',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'The 360° observation deck at sunset — the Bund lights up while Pudong reflects golden light',
    },
    {
      type: 'photo' as const,
      text: 'Looking straight down through the glass floor sections — not for the faint-hearted, but dramatic',
    },
    {
      type: 'photo' as const,
      text: 'The SWFC (bottle opener building) from the Shanghai Tower deck — unique angle of the neighboring skyscraper',
    },
    {
      type: 'photo' as const,
      text: 'Night panoramic with the Huangpu River reflecting city lights — use a steady hand or small tripod',
    },
  ];

  return (
    <AttractionPage
      name="Shanghai Tower"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Shanghai', href: '/destinations/shanghai' },
      { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
    ]}
      nameZh="上海中心大厦"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/shanghai-tower-1/800/500', alt: 'Shanghai Tower observation deck panoramic city view' },
        { src: 'https://picsum.photos/seed/shanghai-tower-2/800/500', alt: 'Shanghai Tower exterior twisted glass skyscraper' },
        { src: 'https://picsum.photos/seed/shanghai-tower-3/800/500', alt: 'Lujiazui skyline at sunset from Shanghai Tower' },
      ]}
      description={`The Shanghai Tower (上海中心大厦) is China's tallest building and one of the world's tallest at 632 meters. Its observation deck, located on the 118th floor at 546 meters, offers the highest public viewing platform in Shanghai with uninterrupted 360° panoramic views of the entire city.

The building's distinctive twisted form — rotating 120° from base to top — isn't just aesthetic. The spiral shape reduces wind loads by 24%, a crucial engineering feat for a building this tall in a typhoon-prone city. The tower houses offices, a hotel, retail spaces, and the observation deck, spread across 128 above-ground floors.

The elevator ride itself is an experience: traveling at 18 meters per second (about 65 km/h), it's among the world's fastest passenger elevators, reaching the observation deck in under 55 seconds. The ride is surprisingly smooth, though ear-popping is common.

Three skyscrapers in Lujiazui offer observation decks. Shanghai Tower is the highest and newest (opened 2017), with the best all-around views. The SWFC (492m) features the famous glass-floor walkway on the 100th floor. Jin Mao (421m) is the oldest and cheapest, with a view straight down through its open atrium. For first-time visitors, Shanghai Tower offers the most impressive single experience.`}
      hours="8:30-22:00 (last entry 21:30)"
      price="¥180 (standard), ¥120 (children 1.0-1.4m), free under 1.0m"
      nearestSubway="Lujiazui Station, Line 2"
      bestTime="30 minutes before sunset for daylight-to-night transition shots"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4962%2C31.2326%2C121.5062%2C31.2386&layer=mapnik&marker=31.2356%2C121.5012"
      address="501 Yincheng Middle Road, Pudong New Area"
      addressZh="上海市浦东新区银城中路501号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "Shanghai Guide", description: "Complete guide to planning your Shanghai trip.", href: "/destinations/shanghai" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}