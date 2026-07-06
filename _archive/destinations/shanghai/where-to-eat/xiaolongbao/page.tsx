import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Xiaolongbao (小笼包) in Shanghai | Where to Eat Soup Dumplings',
  description: 'Steamed dumplings with pork and hot soup — Shanghai\'s signature dish. History from Nanxiang, how to eat properly, and where to find the best versions.',
  openGraph: {
    title: 'Xiaolongbao (小笼包) in Shanghai',
    description: 'Steamed dumplings with pork and hot soup — Shanghai\'s signature dish',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Xiaolongbao (小笼包) in Shanghai | Where to Eat Soup Dumplings - Trail of China' }],
  },
};

const whereToTry = [
  {
    name: 'Jia Jia Tang Bao',
    location: '黄河路90号 (Huanghe Road 90)',
    price: '¥12/6pc',
  },
  {
    name: 'Din Tai Fung',
    location: 'Multiple locations',
    price: '¥80-120/person',
  },
  {
    name: 'Fu Chun',
    location: '静安区 (Jing\'an District)',
    price: '¥15-25',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Never bite the dumpling whole — always bite the top corner first to let out the hot soup',
  },
  {
    type: 'tip',
    text: 'Order both pork and crab filling — the crab version is seasonal (best Nov-Jan) but worth trying',
  },
  {
    type: 'tip',
    text: 'Morning batches are freshest — visit before 10 AM for optimal soup content',
  },
  {
    type: 'where',
    text: 'Xiaolongbao originated in Nanxiang, a town in Shanghai\'s Jiading District',
  },
  {
    type: 'where',
    text: 'Most restaurants specialize in xiaolongbao — look for signs in Chinese that say 小笼包',
  },
] as const;

const relatedLinks = [
  {
    title: 'Shanghai Food Guide',
    href: '/destinations/shanghai/where-to-eat',
  },
  {
    title: 'Shengjianbao (生煎包)',
    href: '/destinations/shanghai/where-to-eat/shengjianbao',
  },
  {
    title: 'Scallion Oil Noodles',
    href: '/destinations/shanghai/where-to-eat/scallion-oil-noodles',
  },
] as const;

export default function XiaolongbaoPage() {
  const name = 'Xiaolongbao';
  const nameZh = '小笼包';
  const city = 'Shanghai';
  const description = `Steamed dumplings with pork and hot soup — Shanghai's signature dish and one of China's most famous culinary exports. Xiaolongbao (literally "small buns") are delicate pockets of dough filled with seasoned pork and a proprietary broth that turns to soup when steamed.

The dish originated in Nanxiang, a town in Shanghai's Jiading District, during the late Qing Dynasty. What makes xiaolongbao special is the carefully balanced ratio of dough to filling to soup — too much dough and you miss the soup; too little and the dumpling falls apart. The skill lies in creating just enough gelatinized broth that melts during steaming into that signature hot soup.

How to eat xiaolongbao properly: First, use chopsticks to lift the dumpling gently (they're fragile). Second, bite a small corner of the top to let out steam and prevent burning your mouth. Third, sip the hot soup through the hole. Finally, dip in black vinegar with shredded ginger and eat the rest. Never bite it whole — that's how you'll burn your tongue and spill the precious soup.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥12-30 per person"
      bestTime="Breakfast and lunch (7 AM–2 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/xiaolongbao-1/800/500", alt: "Xiaolongbao soup dumplings steaming in bamboo basket" },
        { src: "https://picsum.photos/seed/xiaolongbao-2/800/500", alt: "Delicate xiaolongbao with thin translucent wrapper" },
        { src: "https://picsum.photos/seed/xiaolongbao-3/800/500", alt: "Dipping xiaolongbao in black vinegar with ginger" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Shanghai", description: "The best restaurants and street food in Shanghai.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Shengjianbao", description: "Pan-fried pork buns — crispy bottom, juicy inside.", href: "/destinations/shanghai/where-to-eat/shengjianbao" },
        { title: "Hairy Crab", description: "Yangcheng Lake delicacy — autumn's most prized catch.", href: "/destinations/shanghai/where-to-eat/hairy-crab" },
        { title: "Local Experiences in Shanghai", description: "Discover Shanghai beyond the skyline with local tours.", href: "/destinations/shanghai/local-experiences" },
      ]}
    />
  );
}
