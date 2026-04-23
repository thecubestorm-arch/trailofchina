import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Hairy Crab (大闸蟹) in Shanghai | Season, Prices & Where to Eat',
  description: 'Yangcheng Lake seasonal delicacy (Oct-Nov). The roe is the prize, specialist restaurants, and how to enjoy this Shanghai autumn tradition.',
  openGraph: {
    title: 'Hairy Crab (大闸蟹) in Shanghai',
    description: 'Yangcheng Lake seasonal delicacy (Oct-Nov). The roe is the prize',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Seasonal Crab Restaurants',
    location: 'Various specialist restaurants citywide',
    price: '¥80-300 per crab',
  },
  {
    name: 'Jade Garden',
    location: '中静湖路 (Zhongjing Lake Road)',
    price: '¥200-300 per crab',
  },
  {
    name: 'Shanghai Old House',
    location: '南京西路 (Nanjing West Road)',
    price: '¥150-250 per crab',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Book ahead in peak season (Oct-Nov) — good crab restaurants fill up weeks in advance',
  },
  {
    type: 'tip',
    text: 'The roe is the best part — both orange male roe and white female roe are prized',
  },
  {
    type: 'tip',
    text: 'Pair with Shaoxing wine — the traditional way to cut through the richness',
  },
  {
    type: 'where',
    text: 'True hairy crabs come from Yangcheng Lake or nearby lakes — look for certification',
  },
  {
    type: 'where',
    text: 'Peak season is October through December — outside this range, crabs may be frozen or imported',
  },
] as const;

const relatedLinks = [
  {
    title: 'Shanghai Food Guide',
    href: '/destinations/shanghai/where-to-eat',
  },
  {
    title: 'Xiaolongbao (小笼包)',
    href: '/destinations/shanghai/where-to-eat/xiaolongbao',
  },
  {
    title: 'Red Braised Pork',
    href: '/destinations/shanghai/where-to-eat/red-braised-pork',
  },
] as const;

export default function HairyCrabPage() {
  const name = 'Hairy Crab';
  const nameZh = '大闸蟹';
  const city = 'Shanghai';
  const description = `Yangcheng Lake seasonal delicacy (Oct-Nov), the roe is the prize, and this is when Shanghai comes alive with crab restaurants. Hairy crab (dà zhà xiè) refers to freshwater crabs from the Yangcheng Lake region, recognizable by the dark hairs on their claws.

The crab is a seasonal ritual — men and women alike will line up for hours, and restaurants create special crab menus. In Shanghai, it's typically prepared steamed with ginger and vinegar, served whole with the shell still intact. You eat it by cracking the shell, extracting the delicate meat, and savoring both the flesh and the roe.

Men prefer orange roe (male), while women often prefer white roe (female) — though both are delicious. The crab is best eaten within days of purchase; frozen or out-of-season crabs lack the freshness and texture that make this such a coveted delicacy.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥80-300 per crab"
      bestTime="October–November (peak season)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/hairy-crab-1/800/500", alt: "Hairy crab with roe served during autumn season" },
        { src: "https://picsum.photos/seed/hairy-crab-2/800/500", alt: "Steamed Yangcheng Lake hairy crab with ginger and vinegar" },
        { src: "https://picsum.photos/seed/hairy-crab-3/800/500", alt: "Golden crab roe and fresh meat being prepared" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Shanghai", description: "The best restaurants and street food in Shanghai.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Xiaolongbao", description: "Shanghai's legendary soup dumplings — bite carefully.", href: "/destinations/shanghai/where-to-eat/xiaolongbao" },
        { title: "Red Braised Pork", description: "Melt-in-your-mouth pork belly braised in soy and sugar.", href: "/destinations/shanghai/where-to-eat/red-braised-pork" },
        { title: "Local Experiences in Shanghai", description: "Discover Shanghai beyond the skyline with local tours.", href: "/destinations/shanghai/local-experiences" },
      ]}
    />
  );
}
