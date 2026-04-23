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
  title: 'Sichuan Hotpot (四川火锅) in Chengdu | Best Restaurants & Spice Guide',
  description: 'The king of Chengdu dining. A bubbling cauldron of chili oil and Sichuan peppercorns, surrounded by raw ingredients you cook yourself. The mala (numbing-spicy) sensation is addictive.',
  openGraph: {
    title: 'Sichuan Hotpot (四川火锅) in Chengdu | Best Restaurants & Spice Guide',
    description: 'The king of Chengdu dining — a bubbling cauldron of chili oil and Sichuan peppercorns.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Xiaolongkan (小龙坎)',
    location: 'Multiple locations',
    price: '¥80-100/person',
  },
  {
    name: 'Shu Daxia (蜀大侠)',
    location: 'Multiple locations',
    price: '¥70-120/person',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Order split pot (鸳鸯锅) if you can\'t handle spice — one side spicy, one side mild',
  },
  {
    type: 'tip',
    text: 'Dip in sesame oil (香油) NOT sesame paste — it\'s the perfect cooling dip',
  },
  {
    type: 'tip',
    text: 'Sichuan peppercorns make your lips numb — that\'s normal and part of the fun',
  },
  {
    type: 'tip',
    text: 'Beef tripe (毛肚) and duck intestine (鸭肠) are the classic hotpot items — don\'t miss',
  },
  {
    type: 'tip',
    text: 'Don\'t wear nice clothes — oil splatters are inevitable',
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
] as const;

export default function SichuanHotpotPage() {
  const name = 'Sichuan Hotpot';
  const nameZh = '四川火锅';
  const city = 'Chengdu';
  const description = `The king of Chengdu dining. A bubbling cauldron of chili oil and Sichuan peppercorns, surrounded by raw ingredients you cook yourself. The mala (numbing-spicy) sensation is addictive. Split pot (yuan yang) lets wimps and warriors eat together.

Hotpot in Chengdu isn\'t just a meal — it\'s a social event. Friends gather around a single pot for hours, cooking ingredients as they chat and laugh. The pot keeps bubbling, the spices keep working their magic, and the night keeps going. This is what makes Chengdu such a special city — where food brings people together for hours, not just minutes.`;

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
      priceRange="¥60-150 per person"
      bestTime="Dinner — hotpot is a social event"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
  />
  );
}
