import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Chongqing Hotpot (重庆火锅) | The Real Thing — Beef Tallow, Mala & Night Vibes',
  description: 'The original and the best. Unlike Sichuan hotpot, Chongqing hotpot uses beef tallow (牛油) as the base, making it richer, more fragrant, and more intense. Nine grids (九宫格) instead of split pots — the brave eat pure spicy. This is the dish that defines Chongqing.',
  openGraph: {
    title: 'Chongqing Hotpot (重庆火锅) | The Real Thing — Beef Tallow, Mala & Night Vibes',
    description: 'The original and the best. Chongqing hotpot uses beef tallow (牛油) as the base, making it richer, more fragrant, and more intense.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Chongqing Hotpot (重庆火锅) | The Real Thing — Beef Tallow, Mala & Night Vibes - Trail of China' }],
  },
};

const whereToTry = [
  { name: 'Xiaolongkan (小龙坎)', location: 'Multiple', price: '¥80-120/person' },
  { name: 'Shu Daxia (蜀大侠)', location: 'Multiple', price: '¥70-100/person' },
  { name: 'Yanyuan Hotpot (烟缘火锅)', location: 'Nanbin Road', price: '¥90-150/person' },
] as const;

const tips = [
  { type: 'tip' as const, text: 'Beef tallow base is the key difference from Sichuan style' },
  { type: 'tip' as const, text: 'Nine-grid pot (九宫格) means no mild side' },
  { type: 'tip' as const, text: 'Dip in sesame oil + garlic ONLY' },
  { type: 'tip' as const, text: 'Hairy tripe (毛肚) is the #1 order' },
  { type: 'tip' as const, text: 'Plan 2+ hours' },
  { type: 'tip' as const, text: "Don't schedule anything after — you'll smell like hotpot" },
] as const;

const relatedLinks = [
  { title: 'Xiaomian', href: '/destinations/chongqing/where-to-eat/xiaomian' },
  { title: 'Chongqing Where to Eat', href: '/destinations/chongqing/where-to-eat' },
  { title: 'Sichuan Hotpot (Chengdu)', href: '/destinations/chengdu/where-to-eat/sichuan-hotpot' },
] as const;

export default function ChongqingHotpotPage() {
  return (
    <FoodDetailPage
      name="Chongqing Hotpot"
      nameZh="重庆火锅"
      city="Chongqing"
      description="The original and the best. Unlike Sichuan hotpot, Chongqing hotpot uses beef tallow (牛油) as the base, making it richer, more fragrant, and more intense. Nine grids (九宫格) instead of split pots — the brave eat pure spicy. This is the dish that defines Chongqing."
      priceRange="¥70-180 per person"
      bestTime="Dinner — Chongqing hotpot is a nighttime ritual"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Hongya Cave", description: "Chongqing's iconic 11-story stilted building complex overlooking the river.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Ciqikou Ancient Town", description: "Historic port town with cobblestone streets and traditional architecture.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Xiaomian", description: "Chongqing's iconic noodles - spicy and savory.", href: "/destinations/chongqing/where-to-eat/xiaomian" },
      ]}
      images={[
        { src: "https://picsum.photos/seed/chongqing-hotpot-1/800/500", alt: "Chongqing hotpot with rich beef tallow base" },
        { src: "https://picsum.photos/seed/chongqing-hotpot-2/800/500", alt: "Nine-grid hotpot bubbling with chili oil" },
        { src: "https://picsum.photos/seed/chongqing-hotpot-3/800/500", alt: "Sizzling hotpot with fresh tripe and duck intestine" },
      ]}
    />
  );
}
