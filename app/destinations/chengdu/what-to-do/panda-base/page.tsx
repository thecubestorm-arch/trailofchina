import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Chengdu Panda Base (成都大熊猫繁育研究基地) - Giant Panda Sanctuary',
  description:
    'World-famous giant panda sanctuary where you can see pandas up close. Best time to visit is morning hours when they\'re most active.',
  openGraph: {
    title: 'Chengdu Panda Base (成都大熊猫繁育研究研究基地) - Giant Panda Sanctuary',
    description:
      'World-famous giant panda sanctuary where you can see pandas up close. Best time to visit is morning hours when they\'re most active.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/panda-base',
    type: 'website',
  },
};

export default function PandaBasePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Visit in the morning (8:30-10:30 AM) when pandas are most active — they sleep through the afternoon heat',
    },
    {
      type: 'tip',
      text: 'Allow 3-4 hours — there are 6 major enclosures spread across the large park',
    },
    {
      type: 'tip',
      text: 'The 2nd Panda Village houses the youngest pandas and the most active animals',
    },
    {
      type: 'tip',
      text: 'There are two red pandas — smaller and less obvious, near the entrance area',
    },
    {
      type: 'tip',
      text: 'Bring binoculars for better viewing — pandas can be high in trees or hidden in foliage',
    },
    {
      type: 'tip',
      text: 'The pandas sleep 10-16 hours daily, so managing expectations is important — you might see one eating or one sleeping',
    },
    {
      type: 'tip',
      text: 'Visitor Center has educational exhibits about panda conservation and the challenges of breeding',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'The 2nd Panda Village at 9:00 AM — the most likely to see active pandas playing',
    },
    {
      type: 'photo',
      text: 'Panda Hospital area — occasionally you can see rehabilitation pandas (check for announcements)'
    },
    {
      type: 'photo',
      text: 'The entrance area red pandas — small and quick, look for them in the tree branches',
    },
    {
      type: 'photo',
      text: 'Sunset at the observation towers — quieter and golden lighting',
    },
  ] as const

  return (
    <AttractionPage
      name="Panda Base"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="成都大熊猫繁育研究基地"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/panda-base-1/800/600', alt: 'Giant pandas eating bamboo' },
        { src: 'https://picsum.photos/seed/panda-base-2/800/600', alt: 'Baby pandas in nursery' },
        { src: 'https://picsum.photos/seed/panda-base-3/800/600', alt: 'Panda resting in tree' },
      ]}
      description={`Chengdu Panda Base (成都大熊猫繁育研究基地) is the world\'s most famous giant panda sanctuary, housing over 200 pandas at any given time. Opened in 1987, it was founded to rescue and breed giant pandas, which are critically endangered.

The base covers 600 acres of bamboo forests and mountains, with multiple village areas containing pandas of different ages. Visitors can see newborns in the nursery, adolescents in the adolescents' home, and adults in various enclosures. The pandas sleep 10-16 hours daily and spend 12-16 hours eating — bamboo is their only food source.

Pandas have a special wrist bone that acts like a thumb, allowing them to grip bamboo stalks. They\'re not true bears but a unique branch of the bear family that split off 40 million years ago. Despite their size (up to 150 kg), they\'s excellent climbers and swimmers.

The base is also home to red pandas (smaller, squirrel-like relatives) and other endangered species. Conservation efforts include breeding programs that have increased the wild population from fewer than 1,000 in the 1970s to over 1,800 today.`}
      hours="7:30-18:00 (last entry 17:00)"
      price="¥55 (including entry + bus shuttle)"
      nearestSubway="Panda Avenue Station, Line 3"
      bestTime="Morning hours (8:30-10:30 AM) when pandas are most active"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.1406%2C30.731%2C104.1506%2C30.737&layer=mapnik&marker=30.734%2C104.1456"
      address="1375 Panda Base Road, Chenghua District"
      addressZh="成都市成华区熊猫基地路1375号"
        
      relatedLinks={[
        { title: 'Chengdu Local Tips', href: '/destinations/chengdu/local-tips' },
        { title: 'Chengdu Food Guide', href: '/destinations/chengdu/where-to-eat' },
        { title: 'China Basics', href: '/china-basics' },
        { title: 'Where to Stay in Chengdu', href: '/destinations/chengdu/where-to-stay' },
        { title: 'Jinsha Site Museum', href: '/destinations/chengdu/what-to-do/jinsha-site' },
        { title: 'Wuhou Temple', href: '/destinations/chengdu/what-to-do/wuhou-temple' },
      ]}
      relatedArticles={[
        { title: "Jinli Ancient Street", description: "Historic street with traditional Sichuan architecture and snacks.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Sichuan Hotpot", description: "Chengdu's most famous culinary experience - spicy and numbing.", href: "/destinations/chengdu/where-to-eat/sichuan-hotpot" },
        { title: "Chengdu Local Tips", description: "Essential tips for visiting Chengdu and avoiding common pitfalls.", href: "/destinations/chengdu/local-tips" },
      ]}
      tips={[...tips, ...photoSpots]}
    />
  );
}
