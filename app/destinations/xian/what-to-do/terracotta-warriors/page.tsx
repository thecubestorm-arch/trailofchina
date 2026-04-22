import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Terracotta Warriors (兵马俑) - Xi\'an\'s Ancient Army',
  description:
    'The 2,200-year-old army of Emperor Qin Shi Huang. Three main pits with over 8,000 life-sized soldiers, horses, and chariots.',
  openGraph: {
    title: 'Terracotta Warriors (兵马俑) - Xi\'an\'s Ancient Army',
    description:
      'The 2,200-year-old army of Emperor Qin Shi Huang. Three main pits with over 8,000 life-sized soldiers, horses, and chariots.',
    url: 'https://trailofchina.com/destinations/xian/what-to-do/terracotta-warriors',
    type: 'website',
  },
};

export default function TerracottaWarriorsPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Pit 1 is the largest and most impressive — arrives first and should be your priority',
    },
    {
      type: 'tip',
      text: 'Arrive near opening time (8:30 AM) to beat tour groups — the site becomes extremely crowded by 10:30 AM',
    },
    {
      type: 'tip',
      text: 'The shuttle bus from Xi\'an Station takes 1 hour and costs ¥20-30 round trip',
    },
    {
      type: 'tip',
      text: 'Pit 3 is the command center — smaller but historically important as the headquarters',
    },
    {
      type: 'tip',
      text: 'Pit 2 has the cavalry and archers — less crowded and shows different troop types',
    },
    {
      type: 'tip',
      text: 'The Exhibition Hall holds the actual armor and weapons, plus detailed maps of the excavation process',
    },
    {
      type: 'tip',
      text: 'Audio guides are available and recommended — the history is complex and worth understanding',
    },
  ] as const

  const scamAlerts = [
    {
      type: 'scam',
      text: 'Ignore "free" tea offerings from people near the entrance — they will demand payment afterward',
    },
    {
      type: 'scam',
      text: 'Fake "museum-certified" replicas sold outside the site — these are worthless souvenirs',
    },
    {
      type: 'scam',
      text: '"Special access" tours claiming to bypass lines — they\'re lying and will take your money',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Pit 1 from the upper viewing platform — the classic overview shot with the entire army laid out',
    },
    {
      type: 'photo',
      text: 'Pit 2\'s cavalry formation — unique pose and better lighting in the morning',
    },
    {
      type: 'photo',
      text: 'The Terracotta Horse at the Exhibition Hall — the only complete horse found at the site',
    },
    {
      type: 'photo',
      text: 'The bronze chariot at the Exhibition Hall — the most intricate artifact at the site',
    },
  ] as const

  return (
    <AttractionPage
      name="Terracotta Warriors"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="兵马俑"
      city="Xi\'an"
      description={`The Terracotta Warriors (兵马俑) are the 2,200-year-old army of China\'s first emperor, Qin Shi Huang. Discovered in 1974 by farmers digging a well, the site contains over 8,000 life-sized soldiers, 130 chariots with 520 horses, and 150 cavalry horses.

The warriors were buried with the emperor in 210-209 BC to protect him in the afterlife. Each warrior is unique — different facial features, heights, and uniforms indicating rank. They were originally painted in bright colors, but most pigment deteriorated upon exposure to air after excavation.

The three main pits form a battle formation: Pit 1 is the main army (6,000 soldiers), Pit 2 is the cavalry and archers (1,300 soldiers), and Pit 3 is the command center (89 soldiers). The emperor\'s actual tomb mound remains unexcavated — archaeological concern about preserving the artifacts has led to leaving it undisturbed.

The site is a UNESCO World Heritage site and one of China\'s most famous attractions, drawing over 10 million visitors annually. It provides an unparalleled glimpse into ancient Chinese military organization, craftsmanship, and beliefs about the afterlife.`}
      hours="8:30-17:00 (last entry 16:00)"
      price="¥120 (including bus shuttle from Xi\'an Station)"
      nearestSubway="Shuttle bus from Xi\'an Station (20-30 minutes)"
      bestTime="Morning hours (8:30-10:30 AM) to beat tour groups"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=34.3842&lon=109.1592&zoom=16&marker=34.3842%2C109.1592"
      relatedLinks={[
        { title: 'Xi\'an City Wall', href: '/destinations/xian/what-to-do/xian-city-wall' },
        { title: 'Muslim Quarter', href: '/destinations/xian/what-to-do/muslim-quarter' },
        { title: 'Xi\'an Local Tips', href: '/destinations/xian/local-tips' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Eat in Xi\'an', href: '/destinations/xian/where-to-eat' },
        { title: 'Big Wild Goose Pagoda', href: '/destinations/xian/what-to-do/big-wild-geese-pagoda' },
      ]}
      relatedArticles={[
        { title: "City Wall", description: "Best-preserved ancient city wall with a 13.7 km perimeter.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Muslim Quarter", description: "Historic Islamic neighborhood with amazing street food.", href: "/destinations/xian/what-to-do/muslim-quarter" },
        { title: "Yangroupaomo", description: "Xi'an's iconic lamb-oatmeal breakfast soup.", href: "/destinations/xian/where-to-eat/yangroupaomo" },
      ]}
    />
  );
}
