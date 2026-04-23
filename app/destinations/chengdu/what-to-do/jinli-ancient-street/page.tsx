import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Jinli Ancient Street (锦里) Chengdu | Shopping, Snacks & Night Visits',
  description:
    'Chengdu\'s most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine. Packed by day, magical at night. The perfect first stop in Chengdu for street food and souvenirs.',
  openGraph: {
    title: 'Jinli Ancient Street (锦里) Chengdu | Shopping, Snacks & Night Visits',
    description:
      'Chengdu\'s most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/jinli-ancient-street',
    type: 'website',
  },
};

export default function JinliAncientStreetPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Go at night when red lanterns are lit — the street transforms into a magical lantern-lit corridor',
    },
    {
      type: 'tip',
      text: 'Avoid weekends — Jinli becomes extremely packed and difficult to walk through',
    },
    {
      type: 'tip',
      text: 'Combine with Wuhou Shrine next door — they share an entrance and are best visited together',
    },
    {
      type: 'tip',
      text: 'Sugar painting (糖画) artists are worth watching — traditional art form with intricate designs',
    },
    {
      type: 'tip',
      text: 'Try three-cannon tea (三大炮) — a unique Chengdu street food experience',
    },
  ] as const;

  const photoSpots = [
    {
      type: 'photo',
      text: 'Red lantern street at night — the iconic lantern corridor with reflection on wet pavement',
    },
    {
      type: 'photo',
      text: 'Sugar painting artists at work — capturing the traditional art form in progress',
    },
    {
      type: 'photo',
      text: 'Wuhou Shrine entrance — the historic gate visible from Jinli street',
    },
    {
      type: 'photo',
      text: 'Traditional wooden architecture — intricate carvings and red wood facades',
    },
  ] as const;

  return (
    <AttractionPage
      name="Jinli Ancient Street"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
      ]}
      nameZh="锦里"
      city="Chengdu"
      description={`Chengdu's most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine. Packed by day, magical at night. The perfect first stop in Chengdu for street food and souvenirs.`}
      hours="Open all day, best 10:00-22:00"
      price="Free entry"
      nearestSubway="Gaoshengqiao, Line 3"
      bestTime="Evening (after 6 PM) when lanterns are lit"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0424%2C30.6457%2C104.0524%2C30.6517&layer=mapnik&marker=30.6487%2C104.0474"
      address="Jinli Street, Wuhou District"
      addressZh="成都市武侯区锦里"
      relatedLinks={[]}
      relatedArticles={[
        { title: "Panda Base", description: "World's most famous giant panda sanctuary with over 200 pandas.", href: "/destinations/chengdu/what-to-do/panda-base" },
        { title: "Sichuan Hotpot", description: "Chengdu's most famous culinary experience - spicy and numbing.", href: "/destinations/chengdu/where-to-eat/sichuan-hotpot" },
        { title: "Wenshu Monastery", description: "Beautiful Buddhist monastery with peaceful gardens.", href: "/destinations/chengdu/what-to-do/wenshu-monastery" },
        { title: "Kuanzhai Alley", description: "Explore Kuanzhai Alley, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/kuanzhai-alley" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
