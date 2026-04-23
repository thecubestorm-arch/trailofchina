import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Jianbing (煎饼) in Beijing | Best Breakfast Crepes & Where to Find Them',
  description: 'China\'s answer to the crepe — a thin batter cooked on a round griddle, brushed with chili and bean sauce, filled with egg, crispy crackers, lettuce, cilantro.',
  openGraph: {
    title: 'Jianbing (煎饼) in Beijing',
    description: 'China\'s answer to the crepe — a thin batter cooked on a round griddle, brushed with chili and bean sauce, filled with egg, crispy crackers, lettuce, cilantro.',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Street carts near subway stations',
    location: 'Morning only',
    price: '¥8-12',
  },
  {
    name: 'Mr. Bing',
    location: 'Multiple locations',
    price: '¥15-20',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'The best jianbing come from street carts near subway exits in the morning',
  },
  {
    type: 'tip',
    text: 'Add extra crispy cracker (薄脆) for ¥1-2',
  },
  {
    type: 'tip',
    text: 'Spicy level is adjustable — say 微辣 for mild',
  },
  {
    type: 'tip',
    text: 'They disappear by 9:30 AM',
  },
] as const;

const relatedLinks = [
  {
    title: 'Beijing Where to Eat',
    href: '/destinations/beijing/where-to-eat',
  },
  {
    title: 'Zhajiangmian',
    href: '/destinations/beijing/where-to-eat/zhajiangmian',
  },
  {
    title: 'Tanghulu',
    href: '/destinations/beijing/where-to-eat/tanghulu',
  },
  {
    title: 'Beijing Local Tips',
    href: '/destinations/beijing/local-tips',
  },
] as const;

export default function JianbingPage() {
  const name = 'Jianbing';
  const nameZh = '煎饼';
  const city = 'Beijing';
  const description = `China\'s answer to the crepe — a thin batter cooked on a round griddle, brushed with chili and bean sauce, filled with egg, crispy crackers, lettuce, cilantro. Folded and handed to you in 60 seconds. The best ones come from street carts, not restaurants.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥8-15"
      bestTime="Breakfast (6:00-9:00 AM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/jianbing-1/800/500", alt: "Beijing jianbing crepe being cooked on a round griddle" },
        { src: "https://picsum.photos/seed/jianbing-2/800/500", alt: "Crispy jianbing street food with egg and chili sauce" },
        { src: "https://picsum.photos/seed/jianbing-3/800/500", alt: "Chinese savory crepe folded and ready to eat" },
      ]}
    />
  );
}
