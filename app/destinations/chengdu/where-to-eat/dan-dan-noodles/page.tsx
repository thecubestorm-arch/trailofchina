import { Metadata } from 'next';
import Link from 'next/link';
import FoodDetailPage from '@/components/FoodDetailPage';

type Restaurant = {
  name: string;
  location: string;
  price: string;
};

type Tip = {
  type: 'tip' | 'scam' | 'where';
  text: string;
};

export const metadata: Metadata = {
  title: 'Dan Dan Noodles (担担面) in Chengdu | Best Bowls & Street History',
  description: 'Thin wheat noodles in a small bowl, topped with chili oil, Sichuan pepper, preserved vegetables (ya cai), and minced pork. Named after the shoulder poles (dan dan) street vendors used.',
  openGraph: {
    title: 'Dan Dan Noodles (担担面) in Chengdu | Best Bowls & Street History',
    description: 'Thin wheat noodles in a small bowl that packs more flavor than dishes 5x the price.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Street vendors and small noodle shops',
    location: 'Citywide',
    price: '¥10-15',
  },
  {
    name: 'Chen Mapo Tofu restaurant',
    location: 'Qingyang District',
    price: '¥20-25',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Authentic version is dry (no soup) — just sauce and noodles in a small bowl',
  },
  {
    type: 'tip',
    text: 'A proper bowl is small — order two if you\'re hungry',
  },
  {
    type: 'tip',
    text: 'Ya cai (芽菜) is the secret ingredient — preserved mustard greens that add umami',
  },
  {
    type: 'tip',
    text: 'The chili oil should coat every noodle — that\'s how you know it\'s good',
  },
  {
    type: 'tip',
    text: 'Don\'t add extra broth — it dilutes the flavor and ruins the balance',
  },
] as const;

const relatedLinks = [
  {
    title: 'Sichuan Hotpot',
    href: '/destinations/chengdu/where-to-eat/sichuan-hotpot',
  },
  {
    title: 'Zhajiangmian (Beijing)',
    href: '/destinations/beijing/where-to-eat/zhajiangmian',
  },
  {
    title: 'Chengdu Where to Eat',
    href: '/destinations/chengdu/where-to-eat',
  },
] as const;

export default function DanDanNoodlesPage() {
  const name = 'Dan Dan Noodles';
  const nameZh = '担担面';
  const city = 'Chengdu';
  const description = `Thin wheat noodles in a small bowl, topped with chili oil, Sichuan pepper, preserved vegetables (ya cai), and minced pork. Named after the shoulder poles (dan dan) street vendors used. A small bowl that packs more flavor than dishes 5x the price.

Dan Dan Noodles originated in the 1840s, carried by street vendors on shoulder poles (dan dan) — one side held the ingredients and cooking pots, the other side held the serving bowls and seating. The dish was so popular that it spread across China and became known worldwide, though the authentic Chengdu version remains unmatched.

What makes Chengdu dan dan mian special is the balance of flavors — the chili oil should be red but not too spicy, the Sichuan pepper should provide numbing, the ya cai should add umami, and the pork should be fragrant but not overwhelming. It\'s a perfect symphony of flavors in a small bowl.`;

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
      priceRange="¥10-30"
      bestTime="Lunch or quick snack any time"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
  />
  );
}
