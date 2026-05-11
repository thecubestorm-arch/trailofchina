import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Zhajiangmian (炸酱面) in Beijing | Best Noodle Shops & Authentic Recipe',
  description: 'Thick hand-pulled noodles topped with a dark fermented soybean paste fried with pork, served with a colorful array of fresh toppings — cucumber, bean sprouts, edamame, radish.',
  openGraph: {
    title: 'Zhajiangmian (炸酱面) in Beijing',
    description: 'Thick hand-pulled noodles topped with a dark fermented soybean paste fried with pork, served with a colorful array of fresh toppings — cucumber, bean sprouts, edamame, radish.',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Zhajiangmian (炸酱面) in Beijing | Best Noodle Shops & Authentic Recipe - Trail of China' }],
  },
};

const whereToTry = [
  {
    name: 'Old Beijing Noodle King (老北京炸酱面大王)',
    location: 'Multiple',
    price: '¥20-30',
  },
  {
    name: 'Haiwanju (海碗居)',
    location: 'Xidan',
    price: '¥25-35',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Mix all the toppings and sauce thoroughly before eating',
  },
  {
    type: 'tip',
    text: 'The sauce should coat every strand',
  },
  {
    type: 'tip',
    text: 'Cucumber adds freshness — don\'t skip it',
  },
  {
    type: 'tip',
    text: 'Eat within 5 minutes or noodles get soggy',
  },
] as const;

const relatedLinks = [
  {
    title: 'Beijing Where to Eat',
    href: '/destinations/beijing/where-to-eat',
  },
  {
    title: 'Peking Duck',
    href: '/destinations/beijing/where-to-eat/peking-duck',
  },
  {
    title: 'Lamb Skewers',
    href: '/destinations/beijing/where-to-eat/lamb-skewers',
  },
  {
    title: 'Beijing Guide',
    href: '/destinations/beijing',
  },
] as const;

export default function ZhajiangmianPage() {
  const name = 'Zhajiangmian';
  const nameZh = '炸酱面';
  const city = 'Beijing';
  const description = `Thick hand-pulled noodles topped with a dark fermented soybean paste fried with pork, served with a colorful array of fresh toppings — cucumber, bean sprouts, edamame, radish. Mix it all together. This is Beijing\'s everyday noodle dish.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥15-40"
      bestTime="Lunch (Beijing comfort food staple)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/zhajiangmian-1/800/500", alt: "Beijing zhajiangmian noodles with dark soybean paste and fresh toppings" },
        { src: "https://picsum.photos/seed/zhajiangmian-2/800/500", alt: "Hand-pulled noodles topped with zhajiang sauce and cucumber" },
        { src: "https://picsum.photos/seed/zhajiangmian-3/800/500", alt: "Colorful zhajiangmian bowl with edamame and bean sprouts" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Beijing", description: "The best restaurants and street food in Beijing.", href: "/destinations/beijing/where-to-eat" },
        { title: "Peking Duck", description: "Beijing's most famous dish — crispy, lacquered perfection.", href: "/destinations/beijing/where-to-eat/peking-duck" },
        { title: "Jianbing", description: "Chinese breakfast crepe — crispy, savory, perfect.", href: "/destinations/beijing/where-to-eat/jianbing" },
        { title: "Local Experiences in Beijing", description: "Go beyond the monuments with authentic local tours.", href: "/destinations/beijing/local-experiences" },
      ]}
    />
  );
}
