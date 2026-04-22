import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Red Braised Pork (红烧肉) in Shanghai | Best Restaurants & Recipe History',
  description: 'Slow-braised pork belly in soy sauce, rock sugar, Shaoxing wine. Shanghai comfort food, Mao Zedong\'s favorite.',
  openGraph: {
    title: 'Red Braised Pork (红烧肉) in Shanghai',
    description: 'Slow-braised pork belly in soy sauce, rock sugar, Shaoxing wine',
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Jesse Restaurant',
    location: '湖南路 (Hunan Road)',
    price: '¥40-60',
  },
  {
    name: 'Shanghai Old House',
    location: '南京西路 (Nanjing West Road)',
    price: '¥50-70',
  },
  {
    name: 'Family-Style Restaurants',
    location: 'Citywide',
    price: '¥30-50 per serving',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'The fat should melt, not be chewy — that\'s how you know it\'s good',
  },
  {
    type: 'tip',
    text: 'Always serve with rice — the pork fat soaks into the rice and becomes delicious',
  },
  {
    type: 'tip',
    text: 'Best eaten hot — this is not a dish that reheats well',
  },
  {
    type: 'where',
    text: 'Red braised pork is Shanghai\'s ultimate comfort food — a staple in every family kitchen',
  },
  {
    type: 'where',
    text: 'Mao Zedong famously loved this dish — it\'s said he requested it weekly at the Great Hall of the People',
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
    title: 'Scallion Oil Noodles',
    href: '/destinations/shanghai/where-to-eat/scallion-oil-noodles',
  },
] as const;

export default function RedBraisedPorkPage() {
  const name = 'Red Braised Pork';
  const nameZh = '红烧肉';
  const city = 'Shanghai';
  const description = `Slow-braised pork belly in soy sauce, rock sugar, Shaoxing wine. Shanghai comfort food, Mao Zedong's favorite.

Hong shao rou (red braised pork) is Shanghai's ultimate comfort food — tender cubes of pork belly braised for hours in a dark, sweet-savory sauce until the fat melts in your mouth and the meat falls apart. The "red" comes from the dark soy sauce and the caramelized sugar that gives the dish its rich color and flavor.

The technique is simple but requires patience: cut the pork belly into cubes, sear them, then braise slowly in a mixture of soy sauce, rock sugar, Shaoxing wine, ginger, and sometimes star anise or scallions. The long, slow cooking breaks down the collagen in the pork, transforming tough meat into something ethereally tender.

This dish is a point of pride for Shanghai chefs — everyone claims their family's recipe is the best. Some make it sweeter, some more savory, some add rice wine while others don't. But all agree on one thing: the fat should melt, not be chewy. That's how you know it's been braised long enough.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥30-70 per serving"
      bestTime="Lunch and dinner (11 AM–9 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
    />
  );
}
