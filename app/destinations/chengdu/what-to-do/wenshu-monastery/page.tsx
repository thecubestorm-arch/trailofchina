import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Wenshu Monastery (文殊院) Chengdu | Tea House, History & Peace',
  description:
    'Chengdu\'s best-preserved Buddhist monastery and the spiritual heart of the city. The real draw isn\'t the temple — it\'s the tea house in the courtyard where locals play mahjong for hours over ¥10 tea. This is authentic Chengdu life.',
  openGraph: {
    title: 'Wenshu Monastery (文殊院) Chengdu | Tea House, History & Peace',
    description:
      'Chengdu\'s best-preserved Buddhist monastery and the spiritual heart of the city.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/wenshu-monastery',
    type: 'website',
  },
};

export default function WenshuMonasteryPage() {
  const tips = [
    {
      type: 'tip',
      text: 'The tea house is the main attraction — not the temple itself, come for the mahjong and tea experience',
    },
    {
      type: 'tip',
      text: '¥10 gets you a gaiwan tea and a seat all afternoon — best value in Chengdu',
    },
    {
      type: 'tip',
      text: 'Try the vegetarian restaurant near the entrance — excellent and reasonably priced',
    },
    {
      type: 'tip',
      text: 'Locals play mahjong here — watch or join, it\'s part of the local culture',
    },
    {
      type: 'tip',
      text: 'No photos inside the main hall — respect the sacred space',
    },
  ] as const;

  const relatedLinks = [] as const;

  return (
    <AttractionPage
      name="Wenshu Monastery"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="文殊院"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/wenshu-gate/800/500', alt: 'Ornate entrance gate of Wenshu Monastery' },
        { src: 'https://picsum.photos/seed/wenshu-incense/800/500', alt: 'Incense coils burning in the monastery courtyard' },
        { src: 'https://picsum.photos/seed/wenshu-garden/800/500', alt: 'Peaceful tea garden at Wenshu Monastery' },
        { src: 'https://picsum.photos/seed/wenshu-monks/800/500', alt: 'Monks chanting in the main prayer hall' },
        { src: 'https://picsum.photos/seed/wenshu-tea/800/500', alt: 'Gaiwan tea served in the monastery courtyard' },
      ]}
      hook="Chengdu's most peaceful temple — monks chanting, incense, and a hidden vegetarian restaurant."
      quickInfo={{
        price: '¥5',
        hours: '8:00–17:00',
        bestTime: 'Morning for chanting',
        metro: 'Wenshu Monastery (Line 1)',
      }}
      whyYouLoveIt={`The morning chanting session is the reason to come early — the sound of monks reciting sutras fills the courtyard as incense smoke drifts through the air, creating a moment of genuine peace in the middle of the city. Most visitors arrive in the afternoon and miss this entirely, but the 8 AM ceremony is open to the public and utterly hypnotic.

The hidden vegetarian restaurant in the monastery courtyard serves some of the best meat-free Sichuan food you'll ever eat — mapo tofu made with mushrooms, kung pao "chicken" from soy protein, and a tea-smoked duck that fools even dedicated carnivores. After lunch, claim a bamboo chair in the tea garden and watch locals play mahjong for hours over endless refills of green tea.`}
      practicalDetails={{
        gettingThere: 'Line 1',
        whatToSkip: 'Commercialized tea house near entrance',
        photographyTips: 'Morning incense, monks in prayer',
      }}
      description={`Chengdu's best-preserved Buddhist monastery and the spiritual heart of the city. The real draw isn\'t the temple — it\'s the tea house in the courtyard where locals play mahjong for hours over ¥10 tea. This is authentic Chengdu life.`}
      hours="8:00-17:00 (tea house until 20:00)"
      price="Free entry, tea ¥10-20"
      nearestSubway="Wenshu Monastery, Line 1"
      bestTime="Afternoon (2:00-5:00 PM) for tea house atmosphere"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0652%2C30.6749%2C104.0752%2C30.6809&layer=mapnik&marker=30.6779%2C104.0702"
      address="66 Wenshu Street, Qingyang District"
      addressZh="成都市青羊区文殊院街66号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "People's Park Teahouse", description: "Explore People's Park Teahouse, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/peoples-park-teahouse" },
        { title: "Kuanzhai Alley", description: "Explore Kuanzhai Alley, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/kuanzhai-alley" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
        { title: "Chengdu Guide", description: "Complete guide to planning your Chengdu trip.", href: "/destinations/chengdu" },
      ]}
    />
  );
}
