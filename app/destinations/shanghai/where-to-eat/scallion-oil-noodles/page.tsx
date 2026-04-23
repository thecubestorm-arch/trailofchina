import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Scallion Oil Noodles (葱油拌面) in Shanghai | Best Bowls & History',
  description: 'Simple iconic dish — noodles in caramelized scallion oil. Best versions have deep-brown almost burnt scallions. Shanghai comfort food at its finest.',
  openGraph: {
    title: 'Scallion Oil Noodles (葱油拌面) in Shanghai',
    description: 'Simple iconic dish — noodles in caramelized scallion oil',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Old Shanghainese Restaurants',
    location: 'Citywide (Former French Concession, Former International Settlement)',
    price: '¥15-25',
  },
  {
    name: 'Hao Niu La',
    location: '进贤路 (Jinxian Road)',
    price: '¥18-22',
  },
  {
    name: 'De Sheng Cun',
    location: '静安区 (Jing\'an District)',
    price: '¥20-25',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Simple doesn\'t mean easy — the oil quality and scallion frying technique make or break it',
  },
  {
    type: 'tip',
    text: 'Best versions use old scallions (green parts) that are fried until deep brown, almost burnt',
  },
  {
    type: 'tip',
    text: 'Look for restaurants where the scallion oil is freshly made that morning',
  },
  {
    type: 'where',
    text: 'Scallion oil noodles were originally a working-class dish — cheap, filling, and delicious',
  },
  {
    type: 'where',
    text: 'Best enjoyed as a light lunch or dinner — it\'s simple but not light',
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
    title: 'Red Braised Pork',
    href: '/destinations/shanghai/where-to-eat/red-braised-pork',
  },
] as const;

export default function ScallionOilNoodlesPage() {
  const name = 'Scallion Oil Noodles';
  const nameZh = '葱油拌面';
  const city = 'Shanghai';
  const description = `Simple iconic dish — noodles in caramelized scallion oil. Best versions have deep-brown almost burnt scallions. Shanghai comfort food at its finest.

Scallion oil noodles (cong you ban mian) are deceptively simple: wheat noodles tossed in scallion oil with soy sauce and sometimes a splash of vinegar. But the magic lies in the scallion oil — scallions fried slowly in oil until they turn deep brown, almost charred, releasing their sweet, caramelized flavor into the oil.

This was originally a working-class dish, cheap and filling for long shifts. Today, it\'s a symbol of Shanghai\'s humble culinary roots. The best places make their scallion oil fresh each morning, frying the scallions just until they reach the perfect shade of brown. Overdone and they\'ll be bitter; underdone and they\'ll be raw and watery.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥15-30"
      bestTime="Lunch and dinner (11 AM–9 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/scallion-oil-1/800/500", alt: "Shanghai scallion oil noodles with caramelized scallions" },
        { src: "https://picsum.photos/seed/scallion-oil-2/800/500", alt: "Golden brown fried scallions on wheat noodles" },
        { src: "https://picsum.photos/seed/scallion-oil-3/800/500", alt: "Simple Shanghai comfort bowl of cong you ban mian" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Shanghai", description: "The best restaurants and street food in Shanghai.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Xiaolongbao", description: "Shanghai's legendary soup dumplings — bite carefully.", href: "/destinations/shanghai/where-to-eat/xiaolongbao" },
        { title: "Shengjianbao", description: "Pan-fried pork buns — crispy bottom, juicy inside.", href: "/destinations/shanghai/where-to-eat/shengjianbao" },
        { title: "Local Experiences in Shanghai", description: "Discover Shanghai beyond the skyline with local tours.", href: "/destinations/shanghai/local-experiences" },
      ]}
    />
  );
}
