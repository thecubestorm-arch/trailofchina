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
  title: 'Dan Dan Noodles (担担面) in Chengdu | Best Bowls & Street History',
  description: 'Thin wheat noodles in a small bowl, topped with chili oil, Sichuan pepper, preserved vegetables (ya cai), and minced pork. Named after the shoulder poles (dan dan) street vendors used.',
  openGraph: {
    title: 'Dan Dan Noodles (担担面) in Chengdu | Best Bowls & Street History',
    description: 'Thin wheat noodles in a small bowl that packs more flavor than dishes 5x the price.',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Dan Dan Noodles (担担面) in Chengdu | Best Bowls & Street History - Trail of China' }],
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
      images={[
        { src: "https://picsum.photos/seed/dan-dan-noodles-1/800/500", alt: "Chengdu dan dan noodles topped with chili oil and ya cai" },
        { src: "https://picsum.photos/seed/dan-dan-noodles-2/800/500", alt: "Small bowl of spicy dan dan mian with minced pork" },
        { src: "https://picsum.photos/seed/dan-dan-noodles-3/800/500", alt: "Traditional street vendor dan dan noodles with Sichuan pepper" },
      ]}
        relatedArticles={[
        { title: "Where to Eat in Chengdu", description: "The best restaurants and street food in Chengdu.", href: "/destinations/chengdu/where-to-eat" },
        { title: "Mapo Tofu", description: "Silken tofu in fiery chili oil — invented here in 1862.", href: "/destinations/chengdu/where-to-eat/mapo-tofu" },
        { title: "Sichuan Hotpot", description: "A bubbling cauldron of chili oil and Sichuan pepper.", href: "/destinations/chengdu/where-to-eat/sichuan-hotpot" },
        { title: "Local Experiences in Chengdu", description: "Pandas, tea houses, and beyond — explore Chengdu like a local.", href: "/destinations/chengdu/local-experiences" },
      ]}
    />
  );
}
