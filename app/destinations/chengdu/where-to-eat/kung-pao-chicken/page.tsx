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
  title: 'Kung Pao Chicken (宫保鸡丁) in Chengdu | Authentic Recipe & Best Restaurants',
  description: 'Diced chicken stir-fried with peanuts, dried chili, and Sichuan pepper in a sweet-sour sauce. The Western version is sweet and gloppy; the real thing is dry, complex, and the peanuts are the star.',
  openGraph: {
    title: 'Kung Pao Chicken (宫保鸡丁) in Chengdu | Authentic Recipe & Best Restaurants',
    description: 'The Western version is sweet and gloppy; the real thing is dry, complex, and the peanuts are the star.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Any 川菜 restaurant in Chengdu',
    location: 'Citywide',
    price: '¥30-50',
  },
  {
    name: 'Chen Mapo Tofu',
    location: 'Qingyang District',
    price: '¥40-50',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Authentic version is NOT sweet — if it\'s sweet, it\'s westernized',
  },
  {
    type: 'tip',
    text: 'Peanuts should be crispy not soft — that\'s the mark of good preparation',
  },
  {
    type: 'tip',
    text: 'Dried chilies add aroma not just heat — they\'s should be fragrant',
  },
  {
    type: 'tip',
    text: 'The sauce should lightly glaze not drown — it\'s a coating, not a sauce pool',
  },
  {
    type: 'tip',
    text: 'Order with mapo tofu for the perfect Sichuan duo — balance the numbing-spicy',
  },
] as const;

const relatedLinks = [
  {
    title: 'Mapo Tofu',
    href: '/destinations/chengdu/where-to-eat/mapo-tofu',
  },
  {
    title: 'Dan Dan Noodles',
    href: '/destinations/chengdu/where-to-eat/dan-dan-noodles',
  },
  {
    title: 'Chengdu Where to Eat',
    href: '/destinations/chengdu/where-to-eat',
  },
  {
    title: 'Chengdu Guide',
    href: '/destinations/chengdu',
  },
] as const;

export default function KungPaoChickenPage() {
  const name = 'Kung Pao Chicken';
  const nameZh = '宫保鸡丁';
  const city = 'Chengdu';
  const description = `Diced chicken stir-fried with peanuts, dried chili, and Sichuan pepper in a sweet-sour sauce. The Western version is sweet and gloppy; the real thing is dry, complex, and the peanuts are the star. Named after a Qing dynasty governor.

Kung Pao Chicken (Gong Bao Ji Ding) is named after Ding Baozhen, a Qing dynasty governor of Sichuan who was also titled "Gongbao" (Capitol Guardian). Legend says he loved this dish so much that it became named after his title. The dish was originally made with duck breast, then rabbit meat, before settling on chicken.

What makes authentic Chengdu kung pao chicken special is the dry stir-fry technique — the sauce should lightly coat the chicken, not drown it. The peanuts should be crispy, the chicken tender, and the balance of ma (numbing) and la (spicy) should be perfect. It\'s not just a dish — it\'s a statement about Chengdu\'s culinary philosophy.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥30-60 per dish"
      bestTime="Lunch or dinner"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
    />
  );
}
