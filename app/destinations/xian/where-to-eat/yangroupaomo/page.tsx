import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: "Yangroupaomo: Xi'an's Iconic Lamb Soup with Broken Bread",
  description: "Try yangroupaomo — Xi'an's signature dish of lamb soup with hand-torn flatbread. Where to eat it, how to order, and why this 2000-year-old dish still rules.",
  openGraph: {
    title: "Yangroupaomo: Xi'an's Iconic Lamb Soup with Broken Bread",
    description: "Try yangroupaomo — Xi'an's signature dish of lamb soup with hand-torn flatbread",
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Tong Sheng Xiang (同盛祥)',
    location: '钟楼附近 (Near Bell Tower)',
    price: '¥35-50/person',
  },
  {
    name: 'Lao Liu Jia (老刘家)',
    location: '回民街侧街 (Muslim Quarter side street)',
    price: '¥25-40/person',
  },
  {
    name: 'Muslim Quarter Family Shops',
    location: '北院门小巷 (Beiyuanmen alleys)',
    price: '¥25-45/bowl',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Tear the bread into small pieces (指甲盖大小) for faster cooking and better soup absorption',
  },
  {
    type: 'tip',
    text: "Break the bread yourself at traditional shops — it's part of the experience",
  },
  {
    type: 'tip',
    text: 'Order breakfast or early lunch when the lamb broth is freshest and most flavorful',
  },
  {
    type: 'where',
    text: 'Best yangroupaomo is found in Muslim Quarter restaurants with generations of history',
  },
  {
    type: 'where',
    text: 'Look for shops with large simmering pots of lamb broth visible from the street',
  },
  {
    type: 'where',
    text: 'Side streets behind the main Muslim Quarter drag have better prices and more locals',
  },
] as const;

const relatedLinks = [
  {
    title: "Xi'an Food Guide",
    href: '/destinations/xian/where-to-eat',
  },
  {
    title: 'Roujiamo (肉夹馍)',
    href: '/destinations/xian/where-to-eat/roujiamo',
  },
  {
    title: 'Liangpi (凉皮)',
    href: '/destinations/xian/where-to-eat/liangpi',
  },
  {
    title: 'Biangbiang Noodles',
    href: '/destinations/xian/where-to-eat/biangbiang-noodles',
  },
] as const;

export default function YangroupaomoPage() {
  const name = 'Yangroupaomo';
  const nameZh = '羊肉泡馍';
  const city = "Xi'an";
  const description = `Yangroupaomo (羊肉泡馍) is Xi'an's signature dish and one of China's most unique culinary experiences. This hearty lamb soup with hand-torn flatbread has been warming bellies in Xi'an for over 2,000 years, dating back to the Western Han Dynasty.

The dish centers around a rich, milky-white lamb broth simmered for hours with bones and aromatic spices. What makes yangroupaomo special is the interactive preparation: you're given a piece of dense, unleavened flatbread (馍) that you tear into tiny pieces — about the size of fingernails — before handing it back to the kitchen. The chef then stir-fries your bread pieces with vermicelli, lamb slices, and wood ear mushrooms before ladling the scalding broth over everything.

The result is a deeply satisfying bowl where the bread absorbs the lamb broth while maintaining some texture. Each restaurant has its own broth recipe, passed down through generations. The Muslim Quarter's Hui community perfected this dish, blending Central Asian lamb traditions with Chinese wheat-based staples.

How to eat yangroupaomo like a local: Take your time breaking the bread — it's meditative and ensures even cooking. Add the provided pickled garlic and chili paste to taste. The broth should be sipped first to appreciate its depth, then enjoy the bread and meat together. Finish with the traditional accompaniment of pickled garlic to cut through the richness.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥25-50 per person"
      bestTime="Breakfast and lunch (7 AM–2 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Terracotta Warriors", description: "2,200-year-old army of China's first emperor, Qin Shi Huang.", href: "/destinations/xian/what-to-do/terracotta-warriors" },
        { title: "City Wall", description: "Best-preserved ancient city wall with a 14 km perimeter.", href: "/destinations/xian/what-to-do/city-wall" },
        { title: "Muslim Quarter", description: "Historic Islamic neighborhood with amazing street food.", href: "/destinations/xian/what-to-do/muslim-quarter" },
      ]}
      images={[
        { src: "https://picsum.photos/seed/yangroupaomo-1/800/500", alt: "Rich lamb broth with hand-torn flatbread in Xi'an" },
        { src: "https://picsum.photos/seed/yangroupaomo-2/800/500", alt: "Traditional yangroupaomo with vermicelli and lamb" },
        { src: "https://picsum.photos/seed/yangroupaomo-3/800/500", alt: "Milky-white lamb soup served in Muslim Quarter" },
      ]}
    />
  );
}
