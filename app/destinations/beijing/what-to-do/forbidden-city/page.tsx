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
        { src: 'https://picsum.photos/seed/forbidden-city-gate/800/600', alt: 'Forbidden City entrance gate' },
        { src: 'https://picsum.photos/seed/forbidden-city-courtyard/800/600', alt: 'Forbidden City courtyard' },
        { src: 'https://picsum.photos/seed/forbidden-city-roofs/800/600', alt: 'Golden roofs of the Forbidden City' },
        { src: 'https://picsum.photos/seed/forbidden-city-throne/800/600', alt: 'Imperial throne room' },
        { src: 'https://picsum.photos/seed/forbidden-city-corridor/800/600', alt: 'Long corridor inside the Forbidden City' },
      ]}
      hook="9,999 rooms, 500 years of emperors — arrive before 8 AM to beat the crowds."
      quickInfo={{
        price: '¥60-80',
        hours: '8:30–17:00 (closed Mondays)',
        bestTime: 'Morning, Wed–Fri',
        metro: 'Tiananmen East (Line 1)',
      }}
      whyYouLoveIt={`The first time you walk through the Meridian Gate and see the golden roofs stretching to the horizon, you understand why this place was forbidden. The scale is overwhelming — 980 buildings, courtyards within courtyards, and a central axis so precisely aligned that the emperor literally stood at the center of the world.

What gets me every time is the detail. The glazed tiles shimmer in morning light, the marble staircases are worn smooth by 500 years of footsteps, and the painted ceilings in the side halls still hold their original colors. Most visitors rush the central axis and miss the quieter halls — the Palace of Heavenly Purity, the Hall of Mental Cultivation, the western wing galleries. These are where the real history lives, and you'll share them with a fraction of the crowds.

The center stairs at the Hall of Supreme Harmony were reserved for the emperor alone. Walking past them knowing that commoners were executed for touching the same stone gives the place a weight no museum can replicate. Come early, walk slow, and let the scale sink in.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 1 to Tiananmen East Station. Use Exit B and walk north — you'll reach the Meridian Gate (south entrance) in about 5 minutes. This is the main entry point and the start of the classic route.

For a quieter approach, enter from the north gate (Gate of Divine Prowess) and walk the route in reverse. Take Line 1 to Tiananmen East, walk through the south gate, and exit north into Jingshan Park for the rooftop panorama.`,
        whatToSkip: `Skip the tourist shops inside the complex — overpriced souvenirs that you can buy for half the price outside. The audio guide rental (around ¥40) is also underwhelming — the narration is dry and the device is clunky. Download a podcast or read up beforehand instead.

Avoid weekends and Chinese national holidays if possible. The central axis becomes a human conveyor belt, and you'll spend more time navigating crowds than seeing the architecture.`,
        photographyTips: `Morning light on the golden roofs is the single best shot — arrive at 8:30 AM opening and head straight for the Hall of Supreme Harmony. The low sun hits the glazed tiles at an angle that makes them glow.

For corridor shots, use the covered walkways on the east and west sides of the central axis. The repeating red pillars and shadow patterns create strong leading lines, and most tourists miss them entirely. A wide-angle lens helps capture the vertical scale of the halls.`,
      }}
      description={`The Forbidden City (故宫) is the world\'s largest and best-preserved palace complex, spanning 180 acres with 980 buildings containing 8,700 rooms. It served as the imperial palace for 24 emperors over 500 years during the Ming and Qing dynasties.

Today, it houses the Palace Museum with over one million cultural relics, from ancient bronzes and ceramics to imperial robes and calligraphy. The complex follows strict feng shui principles, with the Hall of Supreme Harmony at its geometric center, symbolizing the emperor\'s position as the center of the universe.

The layout reflects ancient Chinese cosmology, with the Three Great Halls (Supreme Harmony, Central Harmony, and Preserving Harmony) on the central axis for ceremonial functions, and the Imperial Garden to the north providing imperial relaxation. The surrounding moat and high walls reinforced the emperor\'s separation from commoners — entering without permission was punishable by death.`}
      hours="8:30-17:00 (closed Mondays, last entry 16:00)"
      price="¥60 (April-October), ¥40 (November-March)"
      nearestSubway="Tiananmen East Station, Line 1"
      bestTime="Morning hours (8:30-11:00) for light and fewer crowds"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.3858%2C39.9143%2C116.3958%2C39.9203&layer=mapnik&marker=39.9173%2C116.3908"
      address="4 Jingshan Front Street, Dongcheng District"
      addressZh="北京市东城区景山前街4号"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: 'Great Wall of China', description: "The world's longest wall stretching across northern China.", href: '/destinations/beijing/what-to-do/great-wall' },
        { title: 'Temple of Heaven', description: 'The majestic temple complex where emperors performed rituals.', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
        { title: 'Peking Duck', description: "Beijing's most famous dish - try it at the city's best restaurants.", href: '/destinations/beijing/where-to-eat/peking-duck' },
        { title: 'Summer Palace', description: 'Imperial gardens and lakes on the outskirts of Beijing.', href: '/destinations/beijing/what-to-do/summer-palace' },
        { title: 'Jingshan Park', description: 'Explore Jingshan Park, one of Beijing\'s top attractions.', href: '/destinations/beijing/what-to-do/jingshan-park' },
        { title: 'Beijing Local Tips', description: 'Practical tips for navigating Beijing like a local.', href: '/destinations/beijing/local-tips' },
        { title: 'China Basics', description: 'Essential tips for first-time visitors to China.', href: '/china-basics' },
        { title: 'Where to Eat in Beijing', description: "Discover Beijing's best local dishes and restaurants.", href: '/destinations/beijing/where-to-eat' },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
