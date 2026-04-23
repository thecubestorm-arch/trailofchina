import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Shengjianbao (生煎包) in Shanghai | Pan-Fried Buns Guide',
  description: 'Crispy bottom, fluffy top, pork and soup inside — Shanghai\'s beloved breakfast staple. How shengjianbao differs from xiaolongbao and where to find the best versions.',
  openGraph: {
    title: 'Shengjianbao (生煎包) in Shanghai',
    description: 'Crispy bottom, fluffy top, pork and soup inside — Shanghai\'s beloved breakfast staple',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Xiaoyang Shengjian',
    location: 'Multiple locations throughout Shanghai',
    price: '¥10/4pc',
  },
  {
    name: 'Yang\'s Fry Dumpling',
    location: '吴江路 (Wujiang Road)',
    price: '¥12-15/4pc',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Poke a hole in the bottom first to let out steam and prevent burning your mouth',
  },
  {
    type: 'tip',
    text: 'The crispy bottom is the best part — don\'t skip eating it',
  },
  {
    type: 'tip',
    text: 'Best enjoyed hot and fresh — shengjianbao doesn\'t reheat well',
  },
  {
    type: 'where',
    text: 'Shengjianbao is a Shanghai breakfast staple — most people eat it for morning baozi',
  },
  {
    type: 'where',
    text: 'Look for restaurants with open kitchens where you can watch them fry the buns',
  },
] as const;

const relatedLinks = [
  {
    title: 'Shanghai Food Guide',
    href: '/destinations/shanghai/where-to-eat',
  },
  {
    title: 'Xiaolongbao (小笼包)',
    href: '/destinations/shanghai/where-to-eat/xiaolongbao',
  },
  {
    title: 'Hairy Crab (大闸蟹)',
    href: '/destinations/shanghai/where-to-eat/hairy-crab',
  },
] as const;

export default function ShengjianbaoPage() {
  const name = 'Shengjianbao';
  const nameZh = '生煎包';
  const city = 'Shanghai';
  const description = `Crispy bottom, fluffy top, pork and soup inside — Shanghai's beloved breakfast staple. Shengjianbao (literally "raw fried buns") are larger than xiaolongbao and cooked differently: the dough is rolled thicker, filled with pork and broth, then pan-fried until the bottom turns golden and crispy.

Unlike xiaolongbao, which are steamed in bamboo baskets, shengjianbao are cooked in flat pans over high heat with a layer of oil. This creates the signature crisp bottom while keeping the top bun fluffy and tender. The filling typically includes pork, ginger, and a soup base that melts during cooking.

How they differ from xiaolongbao: Size (shengjianbao are larger), cooking method (pan-fried vs steamed), dough thickness (thicker for shengjianbao), and the texture (crispy bottom vs all-around soup). While xiaolongbao are considered more refined, shengjianbao are the people's breakfast — quick, affordable, and deeply satisfying.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥10-20 per person"
      bestTime="Breakfast (6 AM–11 AM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/shengjianbao-1/800/500", alt: "Pan-fried shengjianbao with crispy golden bottom" },
        { src: "https://picsum.photos/seed/shengjianbao-2/800/500", alt: "Shanghai shengjianbao fresh from the hot pan" },
        { src: "https://picsum.photos/seed/shengjianbao-3/800/500", alt: "Juicy pork shengjianbao with soup inside" },
      ]}
    />
  );
}
