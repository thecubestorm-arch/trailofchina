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
      hook="Xi'an's twin landmarks — the Bell Tower marking dawn and the Drum Tower marking dusk, for 600 years."
      quickInfo={{
        price: '¥30 each or ¥50 combined',
        hours: '8:30–21:30',
        bestTime: 'Evening for illumination',
        metro: 'Zhonglou (Line 2)',
      }}
      whyYouLoveIt={`For 600 years, the bells and drums of these towers regulated the rhythm of Xi'an. The Bell Tower — built in 1384 — rang at dawn to open the city gates. The Drum Tower — completed in 1380 — beat at dusk to close them. This wasn't just timekeeping; it was the heartbeat of an empire. When you climb to the top of either tower and look out over the city radiating in four directions, you're standing where emperors' officials once stood, watching over the Tang Dynasty capital.

The view from the top is surprisingly good. Four main roads stretch out from the Bell Tower like spokes on a wheel, and the traffic circle below is a constant swirl of cars, buses, and scooters. At night, both towers are floodlit in warm gold and the green glazed tiles glow. The Drum Tower still hosts traditional drum performances every hour — the sound carries across the plaza and into the Muslim Quarter. You don't need to be a history buff to feel the weight of this place.`}
      images={[
        { src: 'https://picsum.photos/seed/bell-tower-night/800/600', alt: "Xi'an Bell Tower illuminated at night" },
        { src: 'https://picsum.photos/seed/drum-tower-dusk/800/600', alt: "Drum Tower at golden hour" },
        { src: 'https://picsum.photos/seed/bell-tower-view/800/600', alt: "View from the top of Bell Tower" },
        { src: 'https://picsum.photos/seed/drum-tower-interior/800/600', alt: "Interior of Drum Tower with traditional drums" },
        { src: 'https://picsum.photos/seed/bell-tower-roundabout/800/600', alt: "Traffic circle around Bell Tower at night" },
      ]}
      practicalDetails={{
        gettingThere: `Metro Line 2 to Zhonglou (Bell Tower) Station — the exit puts you directly under the tower in the underground pedestrian passage. You literally cannot miss it. For the Drum Tower, use the same station and walk 300 meters northwest through the underground passage — it connects directly to the Drum Tower plaza.

The underground passage is well-signed in English and is the only safe way to reach the Bell Tower — the traffic circle above is a chaotic roundabout with no pedestrian crossings.`,
        whatToSkip: `Climbing both towers is unnecessary — the views are nearly identical since they're only 300 meters apart. Pick one. The Bell Tower has the better location (center of the traffic circle) and the more impressive exterior. The Drum Tower has the hourly drum performances, which are genuinely cool. If you only do one, choose based on whether you prefer architecture or live performance.

The "combo ticket" marketing pushes you to buy both, but unless you're a completist, one is enough. The interiors of both towers are sparse — a few exhibits about bells and drums, some replica instruments, and a steep wooden staircase. The real value is the view from the top and the exterior architecture.`,
        photographyTips: `Night illumination is the classic shot — the Bell Tower glowing gold against the black sky, reflected in the wet pavement after rain. The best vantage point is from the pedestrian bridge on the southeast side of the traffic circle, which gives you a clean, unobstructed angle.

For traffic shots, set up on the upper level of either tower with a tripod and shoot long exposures of the roundabout below. The light trails from cars circling the tower create dynamic, colorful patterns. Blue hour (20–30 minutes after sunset) is the sweet spot — the sky still has color, the tower lights are on, and there's enough ambient light to balance the exposure.

The Drum Tower at sunset is photographer's gold — the golden light hits the red pillars and green tiles from the west, creating warm, saturated colors. The traditional drum performances make great action shots if you shoot at 1/250s or faster to freeze the motion.`,
      }}
      description={`Standing at the geographic and symbolic heart of Xi'an, the Bell Tower (钟楼) and Drum Tower (鼓楼) are the city's most recognizable landmarks. These magnificent Ming dynasty structures have watched over Xi'an for over 600 years, marking time for the ancient capital and serving as gathering points for celebrations, warnings, and daily life.

The Bell Tower, built in 1384, sits in the middle of a bustling traffic circle where four main roads converge. Rising 36 meters on a square brick base, its three-tiered wooden structure features intricate brackets, green-glazed tiles, and golden finials that gleam in sunlight. Inside, you'll find ancient bells (no longer rung) and exhibits on the tower's history. Climb to the upper level for panoramic views of Xi'an radiating outward in four directions.

Just 300 meters northwest stands the Drum Tower, completed in 1380. Slightly larger than its bell-tower counterpart, it once housed massive drums used to mark the hours (bells rang at dawn, drums at dusk — hence the saying "morning bell, evening drum"). Today, the tower hosts traditional drum performances that showcase ancient Chinese percussion. The interior displays replica drums and instruments from various dynasties.

Both towers are beautifully illuminated at night, creating a magical atmosphere in the city center. The area between them is a pedestrian-friendly zone with shops, restaurants, and easy access to the Muslim Quarter. Whether you're interested in history, architecture, or simply want that iconic Xi'an photo, the Bell and Drum Towers are essential stops. The combo ticket offers great value, and the underground passage connecting them makes visiting both towers convenient and safe.`}
      hours="8:00-22:00 (Bell Tower), 8:00-21:30 (Drum Tower)"
      price="Combo ticket ¥80, Individual ¥50 each"
      nearestSubway="Zhonglou (Bell Tower), Line 2 or 6"
      bestTime="Sunset for photos (5-7 PM), evening for illuminated views"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=108.9400%2C34.2581%2C108.9500%2C34.2641&layer=mapnik&marker=34.2611%2C108.9450"
      address="Bell Tower, Lianhu District"
      addressZh="西安市莲湖区钟楼"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Muslim Quarter", description: "Explore Muslim Quarter, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/muslim-quarter" },
        { title: "City Wall", description: "Explore City Wall, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Big Wild Goose Pagoda", description: "Explore Big Wild Goose Pagoda, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/big-wild-goose-pagoda" },
        { title: "Terracotta Warriors", description: "Explore Terracotta Warriors, one of Xi'an's top attractions.", href: "/destinations/xian/what-to-do/terracotta-warriors" },
        { title: "Where to Eat in Xi'an", description: "Discover Xi'an's best local dishes and restaurants.", href: "/destinations/xian/where-to-eat" },
        { title: "Xi'an Local Tips", description: "Practical tips for navigating Xi'an like a local.", href: "/destinations/xian/local-tips" },
        { title: "Xi'an Guide", description: "Complete guide to planning your Xi'an trip.", href: "/destinations/xian" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
