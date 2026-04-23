import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: "Biangbiang Noodles: Xi'an's Famous Belt Noodles",
  description: "Biangbiang noodles — Xi'an's iconic wide hand-pulled noodles with chili oil. Learn about the world's most complex Chinese character, where to eat them, and why they're unforgettable.",
  openGraph: {
    title: "Biangbiang Noodles: Xi'an's Famous Belt Noodles",
    description: "Biangbiang noodles — Xi'an's iconic wide hand-pulled noodles with chili oil",
    type: 'website',
  },
};

const whereToTry = [
  {
    name: "Biangbiang Noodle House (biangbiang面馆)",
    location: '回民街周边 (Around Muslim Quarter)',
    price: '¥15-25 per bowl',
  },
  {
    name: 'Shaanxi Noodle Restaurant (陕西面馆)',
    location: '南门附近 (Near South Gate)',
    price: '¥15-20 per bowl',
  },
  {
    name: 'Street Stalls in Muslim Quarter',
    location: '北院门 (Beiyuanmen Street)',
    price: '¥12-18 per bowl',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: "Watch the noodle-pulling process — it's mesmerizing and a sign of fresh, authentic biangbiang",
  },
  {
    type: 'tip',
    text: 'The character "biang" has 56 strokes and is considered the most complex Chinese character — look for it on restaurant signs',
  },
  {
    type: 'tip',
    text: "The chili oil can be very intense — ask for mild (微辣) if you're not used to Sichuan-style heat",
  },
  {
    type: 'where',
    text: 'Small family-run restaurants often have the most authentic flavors and freshest noodles',
  },
  {
    type: 'where',
    text: 'Muslim Quarter side streets have hidden gems that locals frequent',
  },
  {
    type: 'where',
    text: 'Avoid tourist trap restaurants on the main drag — walk one street over for better quality and prices',
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
    title: 'Liangpi (凉皮)',
    href: '/destinations/xian/where-to-eat/liangpi',
  },
] as const;

export default function BiangbiangNoodlesPage() {
  const name = 'Biangbiang Noodles';
  const nameZh = 'biangbiang面';
  const city = "Xi'an";
  const description = `Biangbiang noodles (biangbiang面) are arguably Xi'an's most visually dramatic dish — wide, belt-like hand-pulled noodles that can stretch up to a meter long, drenched in fiery red chili oil and topped with garlic, vinegar, and vegetables. The name comes from the sound the dough makes when slapped against the counter during the pulling process: "biang! biang!"

What makes biangbiang noodles truly legendary isn't just their taste — it's also the character used to write "biang." With 56 strokes, it's considered the most complex Chinese character in existence. There's even a popular rhyme that locals use to remember how to write it. You'll see this character everywhere in Xi'an, on restaurant signs, menus, and even T-shirts. Few people can actually write it from memory, which only adds to the mystique.

The noodles themselves are a masterpiece of simplicity. A simple dough of wheat flour, water, and salt is stretched and slapped by hand until it forms a single, wide ribbon — about 3-4 centimeters across and impressively long. The chef tears it along its length to create the signature flat shape, then boils it for just a minute or two until perfectly chewy. The texture is unmatched: thick and bouncy with a slight bite that holds up to the bold sauce.

The sauce is what brings everything together. A generous pour of smoking-hot chili oil — fragrant with Sichuan peppercorns, star anise, and other spices — is poured over the noodles, sizzling as it hits the garlic and scallions below. Add black vinegar for acidity and you have a dish that hits every flavor note: spicy, sour, savory, and umami all at once. Some versions include tomato-egg topping, braised pork, or simple stir-fried vegetables for variety.

How to eat biangbiang noodles like a local: Mix everything thoroughly before eating. The noodles are meant to be slurped — don't be shy. If the heat is too much, ask for less chili oil next time. Pair with a cold drink or a roujiamo for the full Shaanxi experience. This is comfort food at its finest, and every bowl tells the story of Xi'an's incredible culinary heritage.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥12-25 per bowl"
      bestTime="Lunch and dinner (11 AM–9 PM)"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/biangbiang-noodles-1/800/500", alt: "Wide belt-like biangbiang noodles with chili oil" },
        { src: "https://picsum.photos/seed/biangbiang-noodles-2/800/500", alt: "Hand-pulled biangbiang noodles being stretched" },
        { src: "https://picsum.photos/seed/biangbiang-noodles-3/800/500", alt: "Sizzling chili oil poured over Xi'an biangbiang noodles" },
      ]}
    />
  );
}