import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: "Liangpi: Xi'an's Refreshing Cold Noodle Dish You'll Crave",
  description: "Liangpi — cold wheat noodles with chili oil, vinegar, and cucumber. Xi'an's perfect summer dish. Where to find the best and how to eat it like a local.",
  openGraph: {
    title: "Liangpi: Xi'an's Refreshing Cold Noodle Dish You'll Crave",
    description: "Liangpi — cold wheat noodles with chili oil, vinegar, and cucumber. Xi'an's perfect summer dish",
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Ding Jia Liangpi (定家凉皮)',
    location: '西羊市 (Xiyangshi, Muslim Quarter)',
    price: '¥8-12 per bowl',
  },
  {
    name: 'Wei Jia Liangpi (魏家凉皮)',
    location: '多家连锁店 (Multiple chain locations)',
    price: '¥10-15 per bowl',
  },
  {
    name: 'Street Vendors Near Muslim Quarter',
    location: '回民街周边 (Around Muslim Quarter)',
    price: '¥6-10 per bowl',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Best enjoyed in summer when the cold noodles are most refreshing',
  },
  {
    type: 'tip',
    text: 'Adjust the spice level by requesting less or more chili oil — it can be intense',
  },
  {
    type: 'tip',
    text: "Often sold alongside roujiamo — order both for the perfect Xi'an street food combo",
  },
  {
    type: 'where',
    text: 'Look for vendors with large stacks of steamed noodles ready to be cut',
  },
  {
    type: 'where',
    text: 'Muslim Quarter vendors make liangpi fresh daily using traditional wheat starch methods',
  },
  {
    type: 'where',
    text: 'Small family-run shops often have better flavor than touristy spots',
  },
] as const;

const relatedLinks = [
  {
    title: "Xi'an Food Guide",
    href: '/destinations/xian/where-to-eat',
  },
  {
    title: 'Yangroupaomo (羊肉泡馍)',
    href: '/destinations/xian/where-to-eat/yangroupaomo',
  },
  {
    title: 'Roujiamo (肉夹馍)',
    href: '/destinations/xian/where-to-eat/roujiamo',
  },
  {
    title: 'Biangbiang Noodles',
    href: '/destinations/xian/where-to-eat/biangbiang-noodles',
  },
] as const;

export default function LiangpiPage() {
  const name = 'Liangpi';
  const nameZh = '凉皮';
  const city = "Xi'an";
  const description = `Liangpi (凉皮) is Xi'an's answer to the perfect summer dish — cold, chewy wheat noodles dressed with chili oil, black vinegar, garlic, and crisp cucumber. Despite its name meaning "cold skin," this dish has nothing to do with actual skin; the name refers to the thin, translucent sheets of wheat starch that are steamed, cooled, and cut into noodle strips.

The preparation of liangpi is an art form. Wheat flour is mixed with water and kneaded until the gluten separates from the starch. The starchy water is then spread thin on trays and steamed, creating delicate, almost transparent sheets. These are cooled in cold water, which gives them their signature chewy texture, then sliced into wide ribbons. The result is a noodle that's simultaneously soft and springy, with a subtle wheat flavor that serves as the perfect canvas for bold seasonings.

What makes liangpi truly special is the sauce. Each vendor has their own secret blend, but the base always includes fragrant chili oil (often homemade with dozens of spices), aged black vinegar from Zhenjiang, minced garlic, salt, and sometimes a touch of sesame paste. Fresh bean sprouts and julienned cucumber add crunch and freshness. Some versions include "mianjin" (面筋), cubes of fried gluten that soak up the sauce like sponges.

How to eat liangpi like a local: Mix everything thoroughly before your first bite — the sauce settles at the bottom. Don't be shy about asking for extra chili oil if you can handle heat; it's the soul of the dish. Liangpi is often paired with roujiamo for a complete meal, and many Xi'an residents enjoy it year-round, not just in summer. The dish is served cold or at room temperature, making it refreshing even on hot days. You'll find liangpi vendors throughout Xi'an, from upscale restaurants to tiny street carts, and it remains one of the city's most beloved and affordable snacks.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥6-15 per bowl"
      bestTime="Lunch and dinner, especially in summer (11 AM–9 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/liangpi-1/800/500", alt: "Refreshing cold liangpi noodles with chili oil and vinegar" },
        { src: "https://picsum.photos/seed/liangpi-2/800/500", alt: "Xi'an summer staple liangpi with cucumber and bean sprouts" },
        { src: "https://picsum.photos/seed/liangpi-3/800/500", alt: "Chewy wheat starch noodles dressed in fragrant sauce" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Xi'an", description: "The best restaurants and street food in Xi'an.", href: "/destinations/xian/where-to-eat" },
        { title: "Biangbiang Noodles", description: "Wide, belt-like hand-pulled noodles drenched in chili oil.", href: "/destinations/xian/where-to-eat/biangbiang-noodles" },
        { title: "Roujiamo", description: "The original Chinese burger — braised pork in crispy flatbread.", href: "/destinations/xian/where-to-eat/roujiamo" },
        { title: "Local Experiences in Xi'an", description: "Terracotta Warriors, Muslim Quarter, and ancient city walls.", href: "/destinations/xian/local-experiences" },
      ]}
    />
  );
}
