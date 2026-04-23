import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Peking Duck (北京烤鸭) in Beijing | Best Restaurants & History',
  description: 'Beijing\'s most famous dish. Crispy lacquered skin, tender meat, thin pancakes, hoisin sauce, cucumber and scallion. A whole duck is carved tableside.',
  openGraph: {
    title: 'Peking Duck (北京烤鸭) in Beijing',
    description: 'Beijing\'s most famous dish. Crispy lacquered skin, tender meat, thin pancakes, hoisin sauce, cucumber and scallion.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Siji Minfu (四季民福)',
    location: 'Multiple locations',
    price: '¥150-200/person',
  },
  {
    name: 'Da Dong (大董)',
    location: 'Dongcheng',
    price: '¥200-300/person',
  },
  {
    name: 'Quanjude (全聚德)',
    location: 'Qianmen flagship',
    price: '¥180-250/person',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Siji Minfu has the best skin-to-meat ratio',
  },
  {
    type: 'tip',
    text: 'Avoid tourist-trap Quanjude branches (Qianmen is ok)',
  },
  {
    type: 'tip',
    text: 'Book ahead — 1-2 hours wait at popular spots',
  },
  {
    type: 'tip',
    text: 'The duck skin dipped in sugar is a Beijing tradition',
  },
  {
    type: 'tip',
    text: 'Leftover duck bones become soup',
  },
] as const;

const relatedLinks = [
  {
    title: 'Beijing Where to Eat',
    href: '/destinations/beijing/where-to-eat',
  },
  {
    title: 'Jianbing',
    href: '/destinations/beijing/where-to-eat/jianbing',
  },
  {
    title: 'Zhajiangmian',
    href: '/destinations/beijing/where-to-eat/zhajiangmian',
  },
  {
    title: 'Beijing Guide',
    href: '/destinations/beijing',
  },
] as const;

export default function PekingDuckPage() {
  const name = 'Peking Duck';
  const nameZh = '北京烤鸭';
  const city = 'Beijing';
  const description = `Beijing's most famous dish. Crispy lacquered skin, tender meat, thin pancakes, hoisin sauce, cucumber and scallion. A whole duck is carved tableside. Quanjude is the historic name but Siji Minfu and Da Dong are where foodies go.`;

  return (
    <FoodDetailPage
      breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Beijing', href: '/destinations/beijing' },
    { label: 'Where to Eat', href: '/destinations/beijing/where-to-eat' },
  ]}
    name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥80-300 per person"
      bestTime="Lunch or dinner — always available"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/peking-duck-1/800/500", alt: "Peking duck with crispy skin served in Beijing restaurant" },
        { src: "https://picsum.photos/seed/peking-duck-2/800/500", alt: "Whole roasted Peking duck being carved tableside" },
        { src: "https://picsum.photos/seed/peking-duck-3/800/500", alt: "Peking duck wrapped in thin pancake with hoisin sauce" },
      ]}
  />
  );
}
