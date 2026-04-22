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

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Ignore "free" tea or snack offerings from vendors inside — they will demand payment afterward'
    },
    {
      type: 'scam',
      text: 'Fake "exclusive discount" coupons sold by street vendors — these are worthless'
    },
    {
      type: 'scam',
      text: 'Unlicensed "guides" inside claiming to have "special access" — there\'s no special access needed'
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
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=29.5492&lon=106.5625&zoom=16&marker=29.5492%2C106.5625"
      relatedLinks={[
        { title: 'Chongqing Local Tips', href: '/destinations/chongqing/local-tips' },
        { title: 'Chongqing Food Guide', href: '/destinations/chongqing/where-to-eat' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Stay in Chongqing', href: '/destinations/chongqing/where-to-stay' },
        { title: 'Ciqikou Ancient Town', href: '/destinations/chongqing/what-to-do/ciqikou' },
        { title: 'Dazu Rock Carvings', href: '/destinations/chongqing/what-to-do/dazu-rock-carvings' },
      ]}
    />
  );
}
