import { Metadata } from 'next';
import Link from 'next/link';
import FoodDetailPage from '@/components/FoodDetailPage';

type Restaurant = {
  name: string;
  location: string;
  price: string;
};

type Tip = {
  type: 'tip' | 'where';
  text: string;
};

export const metadata: Metadata = {
  title: 'Mapo Tofu (麻婆豆腐) in Chengdu | History, Best Restaurants & Recipe',
  description: 'Soft tofu cubes in a fiery sauce of chili oil, ground pork, and Sichuan peppercorns. Invented at Chen Mapo Tofu in 1862. The original restaurant still operates.',
  openGraph: {
    title: 'Mapo Tofu (麻婆豆腐) in Chengdu | History, Best Restaurants & Recipe',
    description: 'Soft tofu cubes in a fiery sauce of chili oil and Sichuan peppercorns.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Chen Mapo Tofu (陈麻婆豆腐)',
    location: 'Qingyang District',
    price: '¥30-40',
  },
  {
    name: 'Any 川菜 restaurant',
    location: 'Citywide',
    price: '¥20-35',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'The original Chen Mapo Tofu is the pilgrimage spot — where it all began in 1862',
  },
  {
    type: 'tip',
    text: 'Authentic version uses beef not pork — the traditional recipe',
  },
  {
    type: 'tip',
    text: 'The tofu should be silken not firm — that\'s the mark of good preparation',
  },
  {
    type: 'tip',
    text: 'Order with rice — it\'s too intense alone, the rice balances the heat',
  },
  {
    type: 'tip',
    text: 'Pair with a mild dish — your palate will thank you',
  },
] as const;

const relatedLinks = [
  {
    title: 'Sichuan Hotpot',
    href: '/destinations/chengdu/where-to-eat/sichuan-hotpot',
  },
  {
    title: 'Kung Pao Chicken',
    href: '/destinations/chengdu/where-to-eat/kung-pao-chicken',
  },
  {
    title: 'Chengdu Where to Eat',
    href: '/destinations/chengdu/where-to-eat',
  },
] as const;

export default function MapoTofuPage() {
  const name = 'Mapo Tofu';
  const nameZh = '麻婆豆腐';
  const city = 'Chengdu';
  const description = `Soft tofu cubes in a fiery sauce of chili oil, ground pork, and Sichuan peppercorns. Invented at Chen Mapo Tofu in 1862. The original restaurant still operates. The dish should be ma (numbing) and la (spicy) in equal measure — if it\'s just hot, it\'s wrong.

Mapo Tofu is named after an old woman with a pockmarked face (mapo = "peak-backed" or "pockmarked old woman") who ran a small noodle shop in Qingyang District during the Qing Dynasty. Her tofu dish became so famous that it outlived her and her shop, becoming one of the most iconic Sichuan dishes worldwide.

What makes mapo tofu special is the balance — too much Sichuan peppercorn and it\'s all numbing; too much chili and it\'s just hot. The perfect mapo tofu has both ma and la in harmony, with the tofu holding its shape yet crumbling beautifully in your mouth.`;

  return (
    <FoodDetailPage
      breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Chengdu', href: '/destinations/chengdu' },
    { label: 'Where to Eat', href: '/destinations/chengdu/where-to-eat' },
  ]}
    name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥20-50 per dish"
      bestTime="Lunch or dinner"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
  />
  );
}
