import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Great Wall of China (长城) - Beijing\'s Iconic Fortress',
  description:
    'Multiple sections within reach of Beijing, each with a different character. Complete guide to Mutianyu, Badaling, Jinshanling, and more.',
  openGraph: {
    title: 'Great Wall of China (长城) - Beijing\'s Iconic Fortress',
    description:
      'Multiple sections within reach of Beijing, each with a different character. Complete guide to Mutianyu, Badaling, Jinshanling, and more.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/great-wall',
    type: 'website',
  },
};

export default function GreatWallPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Go to the Great Wall EARLY (before 8:00 AM) to beat tour groups — this makes the biggest difference in experience',
    },
    {
      type: 'tip',
      text: 'Mutianyu is the best balance of crowd vs. scenery — fully restored but less crowded than Badaling',
    },
    {
      type: 'tip',
      text: 'Take the cable car up and toboggan down at Mutianyu — a fun way to experience the wall with minimal effort',
    },
    {
      type: 'tip',
      text: 'Jinshanling offers the most authentic "wild wall" experience — partially unrestored with stunning watchtower views',
    },
    {
      type: 'tip',
      text: 'For hikers, the 3-4 hour trek from Jinshanling to Simatai is one of China\'s greatest hikes',
    },
    {
      type: 'tip',
      text: 'Wear good hiking shoes — the steps are uneven and can be steep, especially in hot weather',
    },
    {
      type: 'tip',
      text: 'Bring water and snacks — prices on the wall are 2-3x what you\'d pay in town',
    },
    {
      type: 'tip',
      text: 'Check the weather forecast — clear days offer the best views but hot days can be miserable. Spring and autumn are ideal.',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'Badaling\'s "North Tower 8" — the most photographed section with the wall snaking through mountains',
    },
    {
      type: 'photo',
      text: 'Mutianyu\'s "Eye of the Wall" — unique perspective where the wall curves around the mountain',
    },
    {
      type: 'photo',
      text: 'Jinshanling\'s watchtower viewpoints — each tower offers different angles of the wild wall',
    },
    {
      type: 'photo',
      text: 'Sunrise at Jinshanling — the first light hitting the wall is magical',
    },
  ] as const

  return (
    <AttractionPage
      name="Great Wall"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="长城"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/great-wall-1/800/600', alt: 'Great Wall winding through mountains' },
        { src: 'https://picsum.photos/seed/great-wall-2/800/600', alt: 'Great Wall watchtower' },
        { src: 'https://picsum.photos/seed/great-wall-3/800/600', alt: 'Great Wall at sunrise' },
      ]}
      description={`The Great Wall of China (长城) stretches over 13,000 miles across northern China, with the most impressive sections within reach of Beijing. The wall wasn\'t built by a single dynasty but evolved over 2,000 years, from the 7th century BC to the 17th century AD.

Multiple sections near Beijing each offer different experiences: fully restored and crowded, wild and unrestored, or a balance of both. The Ming Dynasty (1368-1644) built the best-preserved sections using bricks and stone, replacing earlier earthen walls.

The wall served multiple purposes: border defense against northern nomads, tax collection, and immigration control. Watchtowers every 200 meters allowed signal fires, and garrisons of 5,000 soldiers manned major sections. Today, only about 30% remains intact.

The Great Wall is more than bricks and stone — it\'s the cultural symbol of China, visible from space (a common myth, though technically false), and a UNESCO World Heritage site attracting 10 million visitors annually.`}
      hours="7:30-17:30 (varies by section)"
      price="¥40-65 (depends on section)"
      nearestSubway="Various — see section details below"
      bestTime="Early morning (before 8:00 AM) to beat crowds and get best light for photos"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.5654%2C40.4289%2C116.5754%2C40.4349&layer=mapnik&marker=40.4319%2C116.5704"
      address="Badaling, Yanqing District"
      addressZh="北京市延庆区八达岭"
        
      relatedLinks={[
        { title: 'Forbidden City', href: '/destinations/beijing/what-to-do/forbidden-city' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Eat in Beijing', href: '/destinations/beijing/where-to-eat' },
        { title: '798 Art District', href: '/destinations/beijing/what-to-do/798-art-district' },
        { title: 'Summer Palace', href: '/destinations/beijing/what-to-do/summer-palace' },
      ]}
      relatedArticles={[
        { title: "Forbidden City", description: "The world's largest palace complex with 980 buildings.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Temple of Heaven", description: "The majestic temple complex where emperors performed rituals.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Peking Duck", description: "Beijing's most famous dish - try it at the city's best restaurants.", href: "/destinations/beijing/where-to-eat/peking-duck" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
