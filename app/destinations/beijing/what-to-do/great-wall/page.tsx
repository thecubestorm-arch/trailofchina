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
        { src: 'https://picsum.photos/seed/great-wall-mutianyu/800/600', alt: 'Great Wall at Mutianyu section winding through mountains' },
        { src: 'https://picsum.photos/seed/great-wall-steps/800/600', alt: 'Steep stone steps on the Great Wall' },
        { src: 'https://picsum.photos/seed/great-wall-mountains/800/600', alt: 'Great Wall snaking through mountain ridges' },
        { src: 'https://picsum.photos/seed/great-wall-towers/800/600', alt: 'Ancient watchtowers along the Great Wall' },
        { src: 'https://picsum.photos/seed/great-wall-toboggan/800/600', alt: 'Toboggan slide down from Mutianyu' },
      ]}
      hook="Mutianyu has cable cars, a toboggan slide, and a fraction of Badaling's crowds."
      quickInfo={{
        price: '¥40–65',
        hours: '7:30–17:30',
        bestTime: 'Weekday mornings',
        metro: 'Bus or driver required',
      }}
      whyYouLoveIt={`Most people go to Badaling because it's the easiest to reach. That's exactly why you shouldn't. Badaling is a theme park version of the Great Wall — packed shoulder-to-shoulder with tour groups, souvenir stalls every 50 meters, and a cable car that costs more than the entrance ticket.

Mutianyu is different. The wall here is just as spectacular — fully restored watchtowers, the same dramatic mountain backdrop — but the crowds are a fraction of what you'll find at Badaling. You can walk for 20 minutes between towers without seeing another person. The toboggan slide back down is genuinely fun — a metal luge track that winds through the forest below the wall. Kids love it. Adults pretend they don't.

Standing on a wall built 2,000 years ago, with mountains falling away on both sides, is one of those travel moments that doesn't need explanation. You feel the scale of what it took to build this thing by hand, stone by stone, across some of the most unforgiving terrain on the planet. The wind hits different up here. History feels present.`}
      practicalDetails={{
        gettingThere: `From Beijing city center, take bus 916 Express from Dongzhimen Long-Distance Bus Station to Huairou District (about 1 hour). From there, transfer to a taxi or local bus H23 to Mutianyu (about 30 minutes). Total cost is under ¥30 each way.

For a simpler option, hire a driver for the day. Rates start around ¥400-600 round-trip from central Beijing and give you flexibility on timing. Most hotels can arrange this, or use Didi's English app.`,
        whatToSkip: `Avoid Badaling unless you genuinely have no other option. It's the closest section to Beijing, which makes it the default for every tour bus. The experience is standing in line to stand in line, with hawkers selling "I climbed the Great Wall" T-shirts every few meters.

Skip the cable car at Mutianyu if you're reasonably fit — the 20-minute hike to the wall is on a paved path through pine forest and it's pleasant. Save the cable car money for the toboggan ride down.`,
        photographyTips: `Morning fog in the valleys below the wall creates a dramatic layered effect — the wall appears to float above the clouds. Arrive at 7:30 AM opening for the best chance of catching this, especially in spring and autumn.

The classic shot of the wall disappearing into the mountains works best from the higher watchtowers. Walk past the first few restored sections to Tower 14 or beyond — the crowds thin out and the wall gets more dramatic as it follows the ridgeline. Bring a wide-angle lens for the sweeping landscape shots and a telephoto to compress the wall against distant peaks.`,
      }}
      description={`The Great Wall of China (长城) stretches over 13,000 miles across northern China, with the most impressive sections within reach of Beijing. The wall wasn\'t built by a single dynasty but evolved over 2,000 years, from the 7th century BC to the 17th century AD.

Multiple sections near Beijing each offer different experiences: fully restored and crowded, wild and unrestored, or a balance of both. The Ming Dynasty (1368-1644) built the best-preserved sections using bricks and stone, replacing earlier earthen walls.

The wall served multiple purposes: border defense against northern nomads, tax collection, and immigration control. Watchtowers every 200 meters allowed signal fires, and garrisons of 5,000 soldiers manned major sections. Today, only about 30% remains intact.

The Great Wall is more than bricks and stone — it\'s the cultural symbol of China, visible from space (a common myth, though technically false), and a UNESCO World Heritage site attracting 10 million visitors annually.`}
      hours="7:30-17:30 (varies by section)"
      price="¥40-65 (depends on section)"
      nearestSubway="Various — see section details below"
      bestTime="Early morning (before 8:00 AM) to beat crowds and get best light for photos"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.0061%2C40.3533%2C116.0161%2C40.3593&layer=mapnik&marker=40.3563%2C116.0111"
      address="Badaling, Yanqing District"
      addressZh="北京市延庆区八达岭"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Forbidden City", description: "The world's largest palace complex with 980 buildings.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Temple of Heaven", description: "The majestic temple complex where emperors performed rituals.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Peking Duck", description: "Beijing's most famous dish - try it at the city's best restaurants.", href: "/destinations/beijing/where-to-eat/peking-duck" },
        { title: "Beijing Local Tips", description: "Practical tips for navigating Beijing like a local.", href: "/destinations/beijing/local-tips" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "798 Art District", description: "Explore 798 Art District, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/798-art-district" },
        { title: "Summer Palace", description: "Imperial gardens and lakes on the outskirts of Beijing.", href: "/destinations/beijing/what-to-do/summer-palace" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
