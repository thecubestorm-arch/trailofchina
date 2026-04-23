import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Hongya Cave (洪崖洞) - Chongqing\'s Stilted wonder',
  description:
    'Chongqing\'s iconic stilted building complex on the Jialing River. 11 stories of shops, restaurants, and views. Free to explore.',
  openGraph: {
    title: 'Hongya Cave (洪崖洞) - Chongqing\'s Stilted wonder',
    description:
      'Chongqing\'s iconic stilted building complex on the Jialing River. 11 stories of shops, restaurants, and views. Free to explore.',
    url: 'https://trailofchina.com/destinations/chongqing/what-to-do/hongya-cave',
    type: 'website',
  },
};

export default function HongyaCavePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Visit during "golden hour" — 30 minutes before sunset until about 20 minutes after for the best light and photos',
    },
    {
      type: 'tip',
      text: 'Go to the top floor (11th) first for the panoramic view, then work your way down'
    },
    {
      type: 'tip',
      text: 'The building has 11 stories but only 6 are above ground — the rest descend into the hillside'
    },
    {
      type: 'tip',
      text: 'The "cave" section (Basement 1 and 2) has food stalls and local snacks — try the stinky tofu'
    },
    {
      type: 'tip',
      text: 'The night lights turn on at 7:30 PM — the best time for photography when the building is fully illuminated'
    },
    {
      type: 'tip',
      text: 'Take the elevator instead of stairs — Chongqing is extremely hilly and the climb is exhausting'
    },
    {
      type: 'tip',
      text: 'Visit on a weekday to avoid the massive weekend crowds — weekends can make navigation difficult'
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'From the river level (Jialing River Bridge area) — the classic view of the building rising from the hillside'
    },
    {
      type: 'photo',
      text: 'Top floor balcony at sunset — the light on the building is spectacular'
    },
    {
      type: 'photo',
      text: 'Nighttime from the opposite bank — the illuminated building is Chongqing\'s signature image'
    },
    {
      type: 'photo',
      text: 'The staircase entrance at night — the red lanterns and neon lights are iconic'
    },
  ] as const

  return (
    <AttractionPage
      name="Hongya Cave"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="洪崖洞"
      city="Chongqing"
      description={`Hongya Cave (洪崖洞) is Chongqing\'s most iconic landmark — an 11-story stilted building complex built into the hillside overlooking the Jialing River. The structure resembles ancient Chaotianmen Gate but was rebuilt in 2006 with modern amenities.

The building rises 15 stories in total, with 6 above ground and 5 descending into the hillside. Each level has a different theme: Level 1 is the entrance with food stalls, Level 2 has snacks, Level 3 has shopping, Level 4 has tea houses, Level 5 has performance venues, Level 6 has restaurants, Level 7 has entertainment, and Level 8-11 are observation decks and luxury suites.

The architecture is unique to Chongqing — stilted buildings (吊脚楼) have been used for over 2,000 years to deal with the city\'s mountainous terrain and river floods. Hongya Cave features 30 meters of elevation change and over 1,000 meters of corridors.

It\'s free to explore and has become Chongqing\'s most popular tourist destination, attracting over 100 million visitors since opening. The nightly light shows and the view of the river and city make it a must-visit for any Chongqing traveler.`}
      hours="14:00-22:00 (levels open at different times)"
      price="Free (some attractions within have separate fees)"
      nearestSubway="Linjiangmen Station, Line 1"
      bestTime="Golden hour (sunset) and nighttime for the lights"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5703%2C29.5621%2C106.5803%2C29.5681&layer=mapnik&marker=29.5651%2C106.5753"
      address="88 Jialingjiang Binjiang Road, Yuzhong District"
      addressZh="重庆市渝中区嘉陵江滨江路88号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Ciqikou Ancient Town", description: "Historic port town with cobblestone streets and traditional architecture.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Chongqing Hotpot", description: "Chongqing's signature dish - spicy, oily, and unforgettable.", href: "/destinations/chongqing/where-to-eat/chongqing-hotpot" },
        { title: "Yangtze River Cable Car", description: "Aerial ride over the Yangtze River with stunning city views.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Chongqing Local Tips", description: "Practical tips for navigating Chongqing like a local.", href: "/destinations/chongqing/local-tips" },
        { title: "Chongqing Food Guide", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Stay in Chongqing", description: "Find the best neighborhoods and accommodations in Chongqing.", href: "/destinations/chongqing/where-to-stay" },
        { title: "Dazu Rock Carvings", description: "Explore Dazu Rock Carvings, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/dazu-rock-carvings" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
