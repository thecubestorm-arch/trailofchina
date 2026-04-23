import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Tanghulu (糖葫芦) in Beijing | Candied Hawthorn Sticks & Where to Buy',
  description: 'Skewered hawthorn berries dipped in hard sugar glaze — crackly, sweet, tart. The iconic Beijing street snack, bright red on a stick.',
  openGraph: {
    title: 'Tanghulu (糖葫芦) in Beijing',
    description: 'Skewered hawthorn berries dipped in hard sugar glaze — crackly, sweet, tart. The iconic Beijing street snack, bright red on a stick.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Street vendors everywhere',
    location: 'Citywide',
    price: '¥5-10',
  },
  {
    name: 'Wangfujing Snack Street',
    location: 'Dongcheng',
    price: '¥10-15',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Traditional hawthorn (山楂) is best — skip strawberry versions',
  },
  {
    type: 'tip',
    text: 'Eat immediately — the sugar softens fast',
  },
  {
    type: 'tip',
    text: 'Winter is peak tanghulu season',
  },
  {
    type: 'tip',
    text: 'Don\'t store them — the sugar sticks to everything',
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
    title: 'Beijing Local Tips',
    href: '/destinations/beijing/local-tips',
  },
  {
    title: 'Beijing Guide',
    href: '/destinations/beijing',
  },
] as const;

export default function TanghuluPage() {
  const name = 'Tanghulu';
  const nameZh = '糖葫芦';
  const city = 'Beijing';
  const description = `Skewered hawthorn berries dipped in hard sugar glaze — crackly, sweet, tart. The iconic Beijing street snack, bright red on a stick. Traditional is pure hawthorn; modern versions add strawberries, grapes, or kiwi. Best in winter when the sugar sets crisp.`;

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
      priceRange="¥5-15 per stick"
      bestTime="Afternoon snack or street wandering"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/tanghulu-1/800/500", alt: "Bright red candied hawthorn berries on skewers" },
        { src: "https://picsum.photos/seed/tanghulu-2/800/500", alt: "Traditional Beijing tanghulu street snack with sugar glaze" },
        { src: "https://picsum.photos/seed/tanghulu-3/800/500", alt: "Crackly sugar-coated hawthorn fruit on a stick" },
      ]}
  />
  );
}
