import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Baodu (爆肚) in Beijing | Tripe Hotpot, Sauce & Where to Try',
  description: 'Quick-blanched beef or sheep tripe, sliced thin, dipped in sesame sauce. Sounds intimidating, tastes incredible when done right — crisp and clean, not chewy.',
  openGraph: {
    title: 'Baodu (爆肚) in Beijing',
    description: 'Quick-blanched beef or sheep tripe, sliced thin, dipped in sesame sauce. Sounds intimidating, tastes incredible when done right — crisp and clean, not chewy.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Baodu Feng (爆肚冯)',
    location: 'Qianmen',
    price: '¥40-50',
  },
  {
    name: 'Baodu Man (爆肚满)',
    location: 'Niujie',
    price: '¥30-40',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'The tripe should be crisp and snap when you bite — if it\'s chewy it\'s overcooked',
  },
  {
    type: 'tip',
    text: 'Dip in sesame sauce (麻酱) — essential not optional',
  },
  {
    type: 'tip',
    text: 'Order 百叶 (thin) and 散丹 (thick) for variety',
  },
  {
    type: 'tip',
    text: 'Goes with erguotou (二锅头) liquor if you\'re brave',
  },
] as const;

const relatedLinks = [
  {
    title: 'Beijing Where to Eat',
    href: '/destinations/beijing/where-to-eat',
  },
  {
    title: 'Lamb Skewers',
    href: '/destinations/beijing/where-to-eat/lamb-skewers',
  },
  {
    title: 'Zhajiangmian',
    href: '/destinations/beijing/where-to-eat/zhajiangmian',
  },
  {
    title: 'Beijing Local Tips',
    href: '/destinations/beijing/local-tips',
  },
] as const;

export default function BaoduPage() {
  const name = 'Baodu';
  const nameZh = '爆肚';
  const city = 'Beijing';
  const description = `Quick-blanched beef or sheep tripe, sliced thin, dipped in sesame sauce. Sounds intimidating, tastes incredible when done right — crisp and clean, not chewy. A century-old Beijing snack that\'s disappeared from most menus but survives in specialist shops.`;

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
      priceRange="¥30-60"
      bestTime="Lunch — traditional Beijing snack"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/baodu-1/800/500", alt: "Quick-blanched tripe slices dipped in sesame sauce" },
        { src: "https://picsum.photos/seed/baodu-2/800/500", alt: "Traditional Beijing baodu served with dipping sauce" },
        { src: "https://picsum.photos/seed/baodu-3/800/500", alt: "Thinly sliced tripe fresh from the hotpot" },
      ]}
  />
  );
}
