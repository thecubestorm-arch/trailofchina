import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Big Wild Goose Pagoda: Xi\'an\'s Most Iconic Buddhist Landmark',
  description:
    'Visit the Big Wild Goose Pagoda — a 7th-century Buddhist pagoda and Xi\'an symbol. Complete guide with hours, tickets, night fountain show, and nearby temples.',
  openGraph: {
    title: 'Big Wild Goose Pagoda: Xi\'an\'s Most Iconic Buddhist Landmark',
    description:
      'Visit the Big Wild Goose Pagoda — a 7th-century Buddhist pagoda and Xi\'an symbol. Complete guide with hours, tickets, night fountain show, and nearby temples.',
    url: 'https://trailofchina.com/destinations/xian/what-to-do/big-wild-goose-pagoda',
    type: 'website',
  },
};

export default function BigWildGoosePagodaPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Come for the evening fountain show (free) — it starts around 8 PM and is spectacular with the pagoda lit up',
    },
    {
      type: 'tip' as const,
      text: 'North Square is the best spot for photos — wide open space with the pagoda framed against the sky',
    },
    {
      type: 'tip' as const,
      text: 'Pagoda climb costs extra (¥25) but worth it — 7 stories with views over Xi\'an and close-up looks at Buddhist relics',
    },
    {
      type: 'tip' as const,
      text: 'Allow 2-3 hours to explore the full Da Ci\'en Temple complex, not just the pagoda',
    },
    {
      type: 'tip' as const,
      text: 'Combine with a visit to nearby Small Wild Goose Pagoda (小雁塔) for a full day of Tang dynasty Buddhist sites',
    },
  ];

  const scamAlerts = [
    {
      type: 'scam' as const,
      text: 'Avoid "fortune tellers" near the temple entrance — they charge inflated fees for dubious readings',
    },
    {
      type: 'scam' as const,
      text: 'Don\'t buy incense from street vendors — it\'s sold at reasonable prices inside the temple if you wish to burn some',
    },
  ];

  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Pagoda reflection in the North Square fountain pools — especially beautiful at dusk with lights on',
    },
    {
      type: 'photo' as const,
      text: 'Climbing the pagoda stairs — capture the ancient brickwork and Buddhist statues on each level',
    },
    {
      type: 'photo' as const,
      text: 'Fountain show at night — the water dances in sync with music while the pagoda glows in the background',
    },
    {
      type: 'photo' as const,
      text: 'Da Ci\'en Temple courtyard — traditional architecture with incense burners and prayer flags',
    },
  ];

  return (
    <AttractionPage
      name="Big Wild Goose Pagoda"
      breadcrumbs={[
      { label: "Home", href: '/' },
      { label: "Destinations", href: '/destinations' },
      { label: "Xi'an", href: '/destinations/xian' },
      { label: "What to Do", href: '/destinations/xian/what-to-do' },
    ]}
      nameZh="大雁塔"
      city="Xi'an"
      description={`The Big Wild Goose Pagoda (大雁塔) is Xi'an's most iconic Buddhist monument and a towering symbol of the city's golden age as the eastern terminus of the Silk Road. Built in 652 AD during the Tang Dynasty, this seven-story brick pagoda was commissioned by the famous monk Xuanzang ( immortalized in Journey to the West) to house Buddhist scriptures and relics he brought back from his epic 17-year pilgrimage to India.

Standing 64 meters tall, the pagoda exemplifies classic Tang dynasty architecture with its simple, elegant lines and slightly inward-sloping walls. Unlike many wooden pagodas that burned down over the centuries, this brick structure has survived earthquakes, wars, and 1,300 years of weathering. You can climb the interior stairs (steep and narrow) to each of the seven levels, where Buddhist statues and ancient inscriptions await. From the top, you'll enjoy sweeping views over Xi'an and the surrounding temple grounds.

The pagoda sits within the Da Ci\'en Temple complex (大慈恩寺), a peaceful oasis of traditional Chinese Buddhist architecture. The temple's main halls feature colorful murals, gilded Buddha statues, and incense-filled courtyards where monks still conduct daily prayers. The grounds are beautifully landscaped with pine trees, stone steles, and quiet paths perfect for contemplation.

Just north of the temple lies the North Square, home to Asia's largest musical fountain show. Every evening (typically 8 PM, check schedule), water jets dance in choreographed patterns synchronized to music, with the illuminated pagoda as the backdrop — and it's completely free to watch. This combination of ancient spirituality and modern spectacle makes the Big Wild Goose Pagoda a must-visit landmark that captures Xi'an's ability to honor its past while embracing the present.`}
      hours="8:00-17:30 (temple complex), fountain show ~20:00 daily"
      price="Temple ¥40, Pagoda climb extra ¥25, Fountain show free"
      nearestSubway="Dayanta (Big Wild Goose Pagoda), Line 3 or 4"
      bestTime="Late afternoon (4-6 PM) to explore temple, stay for evening fountain show"
      tips={[...tips, ...scamAlerts, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/embed?layer=Mapnik&frame=&lat=34.2194&lon=108.9642&zoom=16&marker=34.2194%2C108.9642"
      relatedLinks={[
        { title: 'City Wall', href: '/destinations/xian/what-to-do/city-wall' },
        { title: 'Muslim Quarter', href: '/destinations/xian/what-to-do/muslim-quarter' },
        { title: 'Bell & Drum Tower', href: '/destinations/xian/what-to-do/bell-drum-tower' },
        { title: 'Terracotta Warriors', href: '/destinations/xian/what-to-do/terracotta-warriors' },
        { title: 'Where to Eat in Xi\'an', href: '/destinations/xian/where-to-eat' },
        { title: 'Xi\'an Local Tips', href: '/destinations/xian/local-tips' },
        { title: 'Xi\'an Guide', href: '/destinations/xian' },
      ]}
    />
  );
}
