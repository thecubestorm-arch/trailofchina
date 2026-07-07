import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Temple of Heaven (天坛) Beijing | Complete Visitor Guide',
  description:
    'Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.',
  openGraph: {
    title: 'Temple of Heaven (天坛) Beijing | Complete Visitor Guide',
    description:
      'Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.',
    url: 'https://www.trailofchina.com/destinations/beijing/what-to-do/temple-of-heaven',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Temple of Heaven (天坛) Beijing | Complete Visitor Guide - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Temple of Heaven private tour Beijing');

export default function TempleOfHeavenPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Come at dawn for tai chi and choir performances — the park is where real Beijing life happens',
    },
    {
      type: 'tip',
      text: 'Circular Mound Altar has amazing acoustics — whisper at the center and hear it echo clearly',
    },
    {
      type: 'tip',
      text: 'The park is larger than expected — allow at least 3 hours to explore properly',
    },
    {
      type: 'tip',
      text: 'Echo Wall works if you listen closely — two people can hear each other through the wall',
    },
    {
      type: 'tip',
      text: 'Avoid Chinese national holidays — the park becomes extremely crowded',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Hall of Prayer for Good Harvests at golden hour — the iconic silhouette against the sky',
    },
    {
      type: 'photo',
      text: 'Locals doing tai chi at dawn — authentic Beijing life in the park',
    },
    {
      type: 'photo',
      text: 'Echo Wall — capture the famous acoustics with people leaning against it',
    },
    {
      type: 'photo',
      text: 'Circular Mound Altar — the three levels symbolize heaven, earth, and humanity',
    },
  ] as const

  return (
    <AttractionPage
      name="Temple of Heaven"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="天坛"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/temple-of-heaven-hall/800/600', alt: 'Temple of Heaven Hall of Prayer for Good Harvests' },
        { src: 'https://picsum.photos/seed/temple-of-heaven-park/800/600', alt: 'Temple of Heaven park at dawn' },
        { src: 'https://picsum.photos/seed/temple-of-heaven-echo-wall/800/600', alt: 'Echo Wall at Temple of Heaven' },
        { src: 'https://picsum.photos/seed/temple-of-heaven-taichi/800/600', alt: 'Locals practicing tai chi at Temple of Heaven' },
        { src: 'https://picsum.photos/seed/temple-of-heaven-altar/800/600', alt: 'Circular Mound Altar at Temple of Heaven' },
      ]}
      hook="Where emperors prayed for harvests — and where Beijingers practice tai chi at dawn. Come at 6 AM."
      quickInfo={{
        price: '¥15–34',
        hours: '6:00–21:00',
        bestTime: 'Dawn (6–8 AM)',
        metro: 'Tiantan East Gate (Line 5)',
      }}
      whyYouLoveIt={`The Temple of Heaven is two places in one. Before 8 AM, it's a living room for half of Beijing. Retirees practice tai chi in synchronized groups under the ancient cypress trees. A choir belts out revolutionary songs near the east gate. Old men fly kites with reel handles that look like they've been in their families for generations. No one charges admission for this part — the park opens at 6 AM and the real Beijing shows up.

Then there are the halls. The Hall of Prayer for Good Harvests is the postcard image for a reason — three tiers of blue glazed tiles rising to a single golden finial, built without a single nail. But the engineering detail that stays with you is the Echo Wall. Stand at one end, whisper, and someone at the opposite side can hear you clearly through a curved brick wall built in 1530. The Circular Mound Altar has the same acoustic trick — speak from the center stone and your voice amplifies as if the heavens are listening. Because that's exactly what they were designed to do.

What makes this place essential is the contrast. You get imperial grandeur and daily life, ancient acoustics and morning exercise, all in the same park. It's Beijing's most human monument.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 5 to Tiantan East Gate Station. Use Exit A2 and walk straight south — you'll enter through the park's east gate in about 3 minutes. This is the best entrance if you want to catch the morning tai chi and choir groups.

Alternatively, take Line 5 to Tiantan Dongmen and enter from the north gate for a more direct route to the Hall of Prayer for Good Harvests.`,
        whatToSkip: `Don't buy the park-only ticket (¥15) if you want to see the main halls — it only covers the outer gardens. The all-access ticket (¥34) includes the Hall of Prayer, the Echo Wall, and the Circular Mound Altar, which are the reasons you came.

Skip the audio guide. The information panels at each site are sufficient, and the real experience is watching the locals, not listening to a dry history narration.`,
        photographyTips: `Golden light on the Hall of Prayer hits best between 7:00 and 8:30 AM in summer, slightly later in winter. The low sun illuminates the blue tiles from the east side, bringing out colors that look flat at midday.

The retirees doing tai chi make some of the most genuine travel photos you'll take in China. Ask permission first — most will nod and keep moving — and shoot from a respectful distance. The red exercise outfits against the green cypress trees and grey stone pathways create a color palette that's distinctly Beijing.`,
      }}
      description={`Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is Beijing\'s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing, and choir singing. The park is where real Beijing life happens.`}
      hours="6:00-22:00 (park), 8:00-17:30 (halls)"
      price="Park ¥15, All-access ¥34"
      nearestSubway="Tiantan Dongmen, Line 5"
      bestTime="6:00-8:00 AM for local life, 8:30-11:00 for halls"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.3979%2C39.8769%2C116.4079%2C39.8829&layer=mapnik&marker=39.8799%2C116.4029"
      address="7 Tiantan Road, Dongcheng District"
      addressZh="北京市东城区天坛路7号"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Forbidden City", description: "The world's largest palace complex with 980 buildings.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Great Wall of China", description: "The world's longest wall stretching across northern China.", href: "/destinations/beijing/what-to-do/great-wall" },
        { title: "Peking Duck", description: "Beijing's most famous dish - try it at the city's best restaurants.", href: "/destinations/beijing/where-to-eat/peking-duck" },
        { title: "Summer Palace", description: "Imperial gardens and lakes on the outskirts of Beijing.", href: "/destinations/beijing/what-to-do/summer-palace" },
        { title: "Lama Temple", description: "Explore Lama Temple, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/lama-temple" },
        { title: "Hutong Tours", description: "Explore Hutong Tours, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/hutong" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Local Tips", description: "Practical tips for navigating Beijing like a local.", href: "/destinations/beijing/local-tips" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Quick Temple Photo?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Experience the Temple of Heaven at dawn. Book a guided tour that includes tai chi with locals, ancient ritual explanations, and park culture insights.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Guided Visit →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Tai chi at dawn experience</span>
              <span>✓ Ancient rituals explained</span>
              <span>✓ Local park culture insights</span>
            </div>
          </div>
        </section>
      }
    />
  );
}