import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Beijing Hutong Tours (胡同) | Walking Routes, Rickshaws & Authentic Alleys',
  description:
    'Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.',
  openGraph: {
    title: 'Beijing Hutong Tours (胡同) | Walking Routes, Rickshaws & Authentic Alleys',
    description:
      'Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/hutong',
    type: 'website',
  },
};

export default function HutongPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Walk don\'t rickshaw for authentic experience — you\'ll miss the side alleys',
    },
    {
      type: 'tip',
      text: 'Nanluoguxiang is touristy — explore side alleys for real hutong life',
    },
    {
      type: 'tip',
      text: 'Yandai Xiejie near Shichahai is quieter than Nanluoguxiang',
    },
    {
      type: 'tip',
      text: 'Real hutong life is one block off main drags — wander off the beaten path',
    },
    {
      type: 'tip',
      text: 'Rickshaw prices are negotiable — agree on price before starting',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Hutong rooftops from Drum Tower — the classic overview of red tile roofs',
    },
    {
      type: 'photo',
      text: 'Old doorways and courtyard gates — the entrances to siheyuan houses',
    },
    {
      type: 'photo',
      text: 'Laundry lines between siheyuan — everyday hutong life',
    },
    {
      type: 'photo',
      text: 'Shichahai lake at sunset — the lakeside huts and reflections',
    },
  ] as const

  return (
    <AttractionPage
      name="Hutong"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="胡同"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/hutong-alley/800/600', alt: 'Narrow hutong alleyway in Beijing' },
        { src: 'https://picsum.photos/seed/hutong-courtyard/800/600', alt: 'Traditional siheyuan courtyard entrance' },
        { src: 'https://picsum.photos/seed/hutong-red-door/800/600', alt: 'Red door of a traditional hutong home' },
        { src: 'https://picsum.photos/seed/hutong-breakfast/800/600', alt: 'Morning breakfast stall in a hutong' },
        { src: 'https://picsum.photos/seed/hutong-evening/800/600', alt: 'Hutong alley in the evening light' },
      ]}
      hook="The old Beijing that's disappearing — narrow alleyways, courtyard homes, and the real flavor of the city."
      quickInfo={{
        price: 'Free',
        hours: 'Always open',
        bestTime: 'Morning for breakfast stalls',
        metro: 'Nanluoguxiang (Line 6/8)',
      }}
      whyYouLoveIt={`Hutongs are old Beijing's last stand. While the rest of the city tears itself down and rebuilds every five years, these narrow alleyways still hold courtyard homes that have been in families for generations. The contrast is everywhere — a brand new Tesla squeezed into a space built for horse carts, 5G antennas bolted to Qing Dynasty roof beams, elderly men in tank tops playing chess on folding tables while delivery drivers on scooters weave around them.

Nanluoguxiang gets the tour buses, and honestly it's fine for what it is — a polished version of hutong life with craft beer and souvenir shops. But walk one block east or west and you're in a different world. Red doors with faded gold character plaques. Courtyards you can glimpse through half-open gates, where persimmon trees grow over tile roofs and bicycles from the 1980s still get daily use. The jianbing stalls here make the best breakfast in Beijing — a crispy crepe with egg, scallions, and chili paste, cooked on a griddle that's been seasoned by decades of use.

What makes hutongs matter is that they won't last. Every year, more get demolished for apartment towers. The ones that survive are becoming boutique hotels and Instagram backdrops. Walking these alleys now feels like documenting something that won't exist in 20 years — not as a tourist attraction, but as actual neighborhoods where people live, cook, argue, and hang laundry between buildings that were old when their grandparents were born.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 6 or Line 8 to Nanluoguxiang Station. Use Exit E and walk straight into the main hutong drag. This is the most touristy entrance but the easiest starting point.

For a more authentic experience, start from Shichahai instead. Take Line 2 to Gulou Dajie, walk south to Yandai Xiejie, and explore the quieter lanes around the lakes. The Drum Tower and Bell Tower are nearby landmarks that help with navigation.`,
        whatToSkip: `Skip the rickshaw tours. They're overpriced, the drivers stick to the main drags, and you'll miss the side alleys where real life happens. A rickshaw ride costs ¥80-120 per hour and you're essentially paying someone to pedal you past the same shops you could walk past for free. Walk instead — your feet will find better things.

The main Nanluoguxiang drag is increasingly a tourist mall in hutong clothing. It's fine for a quick look, but don't mistake it for authentic Beijing. The real hutong experience is one block over, where there are no souvenir shops and the only food for sale is from the old woman who's been making jianbing on the same corner for 30 years.`,
        photographyTips: `Red doors are the hutong's signature — each one is different, with faded paint, brass knockers, and character plaques that tell you something about the family inside. Shoot them in morning light when shadows bring out the texture of weathered wood.

Elderly residents are what make hutong photos human. The old men playing chess, the grandmothers sweeping doorsteps, the kids running home from school through alleys barely wider than their outstretched arms. Ask permission before photographing people directly — a smile and a nod is usually enough. Morning light is softer and the alleys are quieter before 9 AM.`,
      }}
      description={`Beijing\'s traditional alleyways — living counterpoint to imperial monuments. Nanluoguxiang is polished tourist lane, Yandai Xiejie near Shichahai is quieter. Walk or hire rickshaw. Real hutong life is one block off main tourist drags.`}
      hours="Always open (outdoor neighborhood)"
      price="Free to walk, rickshaw ¥80-120/hr"
      nearestSubway="Nanluoguxiang Station, Line 6"
      bestTime="Morning or late afternoon"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.3919%2C39.9328%2C116.4019%2C39.9388&layer=mapnik&marker=39.9358%2C116.3969"
      address="Nanluoguxiang, Dongcheng District"
      addressZh="北京市东城区南锣鼓巷"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Forbidden City", description: "Explore Forbidden City, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Bell and Drum Towers", description: "Explore Bell and Drum Towers, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/bell-and-drum-towers" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Local Tips", description: "Practical tips for navigating Beijing like a local.", href: "/destinations/beijing/local-tips" },
        { title: "Beijing Guide", description: "Complete guide to planning your Beijing trip.", href: "/destinations/beijing" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
