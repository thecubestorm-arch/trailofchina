import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Xi\'an Bell Tower & Drum Tower: Icons of the Ancient Capital',
  description:
    'Visit Xi\'an\'s iconic Bell Tower and Drum Tower — the twin landmarks at the heart of the city. Tickets, hours, best photo spots, and history guide.',
  openGraph: {
    title: 'Xi\'an Bell Tower & Drum Tower: Icons of the Ancient Capital',
    description:
      'Visit Xi\'an\'s iconic Bell Tower and Drum Tower — the twin landmarks at the heart of the city. Tickets, hours, best photo spots, and history guide.',
    url: 'https://trailofchina.com/destinations/xian/what-to-do/bell-drum-tower',
    type: 'website',
  },
};

export default function BellDrumTowerPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Buy the combo ticket (¥80) instead of individual tickets (¥50 each) — saves ¥20',
    },
    {
      type: 'tip' as const,
      text: 'Drum Tower at sunset is stunning — the golden light on the red pillars and green tiles is photographer\'s gold',
    },
    {
      type: 'tip' as const,
      text: 'Use the underground passage to reach Bell Tower from Drum Tower — it\'s safer than crossing the busy traffic circle',
    },
    {
      type: 'tip' as const,
      text: 'Allow 30-45 minutes for each tower — enough time to climb, explore, and take photos',
    },
    {
      type: 'tip' as const,
      text: 'Cultural performances happen hourly at Drum Tower — check the schedule when you arrive',
    },
  ];


  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Bell Tower illuminated at night — the golden glow against the dark sky is iconic Xi\'an',
    },
    {
      type: 'photo' as const,
      text: 'Sunset from Drum Tower\'s upper level — panoramic views of the city with the Bell Tower in frame',
    },
    {
      type: 'photo' as const,
      text: 'The traffic circle between towers at blue hour — long exposure shots capture light trails around the monuments',
    },
    {
      type: 'photo' as const,
      text: 'Traditional drum performance at Drum Tower — capture the performers in colorful costumes mid-beat',
    },
  ];

  return (
    <AttractionPage
      name="Bell Tower & Drum Tower"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="钟楼与鼓楼"
      city="Xi'an"
      description={`Standing at the geographic and symbolic heart of Xi'an, the Bell Tower (钟楼) and Drum Tower (鼓楼) are the city's most recognizable landmarks. These magnificent Ming dynasty structures have watched over Xi'an for over 600 years, marking time for the ancient capital and serving as gathering points for celebrations, warnings, and daily life.

The Bell Tower, built in 1384, sits in the middle of a bustling traffic circle where four main roads converge. Rising 36 meters on a square brick base, its three-tiered wooden structure features intricate brackets, green-glazed tiles, and golden finials that gleam in sunlight. Inside, you'll find ancient bells (no longer rung) and exhibits on the tower's history. Climb to the upper level for panoramic views of Xi'an radiating outward in four directions.

Just 300 meters northwest stands the Drum Tower, completed in 1380. Slightly larger than its bell-tower counterpart, it once housed massive drums used to mark the hours (bells rang at dawn, drums at dusk — hence the saying "morning bell, evening drum"). Today, the tower hosts traditional drum performances that showcase ancient Chinese percussion. The interior displays replica drums and instruments from various dynasties.

Both towers are beautifully illuminated at night, creating a magical atmosphere in the city center. The area between them is a pedestrian-friendly zone with shops, restaurants, and easy access to the Muslim Quarter. Whether you're interested in history, architecture, or simply want that iconic Xi'an photo, the Bell and Drum Towers are essential stops. The combo ticket offers great value, and the underground passage connecting them makes visiting both towers convenient and safe.`}
      hours="8:00-22:00 (Bell Tower), 8:00-21:30 (Drum Tower)"
      price="Combo ticket ¥80, Individual ¥50 each"
      nearestSubway="Zhonglou (Bell Tower), Line 2 or 6"
      bestTime="Sunset for photos (5-7 PM), evening for illuminated views"
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=34.2606&lon=108.9461&zoom=16&marker=34.2606%2C108.9461"
      relatedLinks={[
        { title: 'Muslim Quarter', href: '/destinations/xian/what-to-do/muslim-quarter' },
        { title: 'City Wall', href: '/destinations/xian/what-to-do/city-wall' },
        { title: 'Big Wild Goose Pagoda', href: '/destinations/xian/what-to-do/big-wild-goose-pagoda' },
        { title: 'Terracotta Warriors', href: '/destinations/xian/what-to-do/terracotta-warriors' },
        { title: 'Where to Eat in Xi\'an', href: '/destinations/xian/where-to-eat' },
        { title: 'Xi\'an Local Tips', href: '/destinations/xian/local-tips' },
        { title: 'Xi\'an Guide', href: '/destinations/xian' },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
