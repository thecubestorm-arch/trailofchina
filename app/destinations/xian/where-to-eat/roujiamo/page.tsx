import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: "Roujiamo: The Original Chinese Burger That Predates Hamburgers",
  description: "Roujiamo — often called the world's first hamburger — is Xi'an's must-eat street food. Find the best roujiamo stalls and learn what makes it special.",
  openGraph: {
    title: "Roujiamo: The Original Chinese Burger That Predates Hamburgers",
    description: "Roujiamo — often called the world's first hamburger — is Xi'an's must-eat street food",
    type: 'website',
  },
};

const whereToTry = [
  {
    name: 'Qin Yu Roujiamo (秦豫肉夹馍)',
    location: '东木头市 (Dongmutoushi)',
    price: '¥12-15 per burger',
  },
  {
    name: 'Zi Chang Roujiamo (子午路肉夹馍)',
    location: '多家分店 (Multiple locations)',
    price: '¥10-14 per burger',
  },
  {
    name: 'Street Stalls Near Bell Tower',
    location: '钟楼周边 (Around Bell Tower)',
    price: '¥8-12 per burger',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Look for small stalls with long lines — the meat is braised fresh throughout the day',
  },
  {
    type: 'tip',
    text: 'Get the traditional pork version (腊汁肉夹馍) for the most authentic taste',
  },
  {
    type: 'tip',
    text: 'Add chili oil or pickled peppers for an authentic spicy kick',
  },
  {
    type: 'where',
    text: 'Best roujiamo comes from dedicated shops that specialize only in this dish',
  },
  {
    type: 'where',
    text: 'Morning and lunch hours have the freshest meat and crispiest bread',
  },
  {
    type: 'where',
    text: 'Street stalls near university campuses offer great quality at lower prices',
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
    title: 'Liangpi (凉皮)',
    href: '/destinations/xian/where-to-eat/liangpi',
  },
  {
    title: 'Biangbiang Noodles',
    href: '/destinations/xian/where-to-eat/biangbiang-noodles',
  },
] as const;

export default function RoujiamoPage() {
  const name = 'Roujiamo';
  const nameZh = '肉夹馍';
  const city = "Xi'an";
  const description = `Roujiamo (肉夹馍) is often called the world's first hamburger, predating the American version by over 2,000 years. This iconic Xi'an street food consists of tender, braised pork belly stuffed inside a crispy flatbread called "bai jimo" (白吉馍). The name literally means "meat sandwiched in bread," though locals jokingly note it should be called "mo jiarou" (bread containing meat) — the reversed name is simply a linguistic quirk that stuck.

The magic of roujiamo lies in its simplicity and the care taken with each component. The pork belly is slow-braised for hours in a rich master stock containing dozens of spices like star anise, cinnamon, cloves, and Sichuan peppercorns. This broth is often decades old, passed down through generations and replenished daily. The result is meat so tender it melts in your mouth, with layers of fat that have rendered into silkiness.

The bread is equally important. Made from unleavened dough, it's pan-fried until golden and crispy on the outside while remaining soft inside. The baker slices it open like a pita and stuffs it generously with chopped braised meat, often adding a ladle of the cooking broth to moisten everything. Some vendors offer variations with beef, lamb, or even vegetarian options, but pork remains the gold standard.

How to eat roujiamo like a local: Order it hot, straight from the pan. The contrast between the crispy bread exterior and the succulent, piping-hot meat is essential. Don't be shy about asking for extra chili or pickled vegetables — they cut through the richness beautifully. Pair it with a bowl of wonton soup or a cold beer for the complete experience. Many Xi'an residents eat roujiamo for breakfast or as a quick lunch, and you'll often see people enjoying one while walking down the street.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥8-15 per burger"
      bestTime="Breakfast, lunch, and early dinner (7 AM–7 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/roujiamo-1/800/500", alt: "Classic Xi'an roujiamo Chinese burger with braised pork" },
        { src: "https://picsum.photos/seed/roujiamo-2/800/500", alt: "Crispy flatbread stuffed with tender braised pork belly" },
        { src: "https://picsum.photos/seed/roujiamo-3/800/500", alt: "Freshly made roujiamo from Xi'an Muslim Quarter stall" },
      ]}
    />
  );
}
