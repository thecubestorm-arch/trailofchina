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
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/temple-of-heaven',
    type: 'website',
  },
};

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
        { src: 'https://picsum.photos/seed/temple-heaven-1/800/500', alt: 'Temple of Heaven circular Hall of Prayer for Good Harvests in Beijing' },
        { src: 'https://picsum.photos/seed/temple-heaven-2/800/500', alt: 'Echo Wall at Temple of Heaven with tourists' },
        { src: 'https://picsum.photos/seed/temple-heaven-3/800/500', alt: 'Temple of Heaven park at dawn with tai chi practitioners' },
      ]}
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
    />
  );
}
