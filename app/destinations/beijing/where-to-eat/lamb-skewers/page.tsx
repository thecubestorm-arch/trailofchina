import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Lamb Skewers (羊肉串) in Beijing | Best Yakitori-Style BBQ & Night Markets',
  description: 'Cumin-dusted lamb chunks grilled over charcoal. The signature spice combo — cumin and chili — is unmistakably northern Chinese. Best eaten standing around a grill with a Yanjing Beer.',
  openGraph: {
    title: 'Lamb Skewers (羊肉串) in Beijing',
    description: 'Cumin-dusted lamb chunks grilled over charcoal. The signature spice combo — cumin and chili — is unmistakably northern Chinese.',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Lamb Skewers (羊肉串) in Beijing | Best Yakitori-Style BBQ & Night Markets - Trail of China' }],
  },
};

const whereToTry = [
  {
    name: 'Guijie (簋街)',
    location: 'Dongzhimen, evening only',
    price: '¥2-5/skewer',
  },
  {
    name: 'Houhai lake area stalls',
    location: 'Xicheng',
    price: '¥3-5/skewer',
  },
] as const;

const tips = [
  {
    type: 'tip',
    text: 'Cumin + chili is the correct spice combo — order 中辣',
  },
  {
    type: 'tip',
    text: 'Yanjing Beer is the proper pairing',
  },
  {
    type: 'tip',
    text: 'Guijie comes alive after 10 PM',
  },
  {
    type: 'tip',
    text: 'Order 10-15 skewers per person minimum',
  },
] as const;

const scams: { type: 'tip'; text: string }[] = [];

const relatedLinks = [
  {
    title: 'Beijing Where to Eat',
    href: '/destinations/beijing/where-to-eat',
  },
  {
    title: 'Baodu',
    href: '/destinations/beijing/where-to-eat/baodu',
  },
  {
    title: 'Jianbing',
    href: '/destinations/beijing/where-to-eat/jianbing',
  },
  {
    title: 'Beijing Nightlife',
    href: '/destinations/beijing/nightlife',
  },
] as const;

export default function LambSkewersPage() {
  const name = 'Lamb Skewers';
  const nameZh = '羊肉串';
  const city = 'Beijing';
  const description = `Cumin-dusted lamb chunks grilled over charcoal. The signature spice combo — cumin and chili — is unmistakably northern Chinese. Best eaten standing around a grill with a Yanjing Beer. Guijie (Ghost Street) is Beijing\'s legendary late-night skewer strip.`;

  return (
    <FoodDetailPage
      name={name}
      nameZh={nameZh}
      city={city}
      description={description}
      priceRange="¥2-5 per skewer"
      bestTime="Evening (after 7 PM) — night market food"
      whereToTry={whereToTry}
      tips={[...tips] as const}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/lamb-skewers-1/800/500", alt: "Cumin-dusted lamb skewers grilling over charcoal in Beijing" },
        { src: "https://picsum.photos/seed/lamb-skewers-2/800/500", alt: "Char-grilled lamb skewers sprinkled with chili and cumin" },
        { src: "https://picsum.photos/seed/lamb-skewers-3/800/500", alt: "Late night lamb skewers at Guijie street market" },
      ]}
          relatedArticles={[
        { title: "Where to Eat in Beijing", description: "The best restaurants and street food in Beijing.", href: "/destinations/beijing/where-to-eat" },
        { title: "Peking Duck", description: "Beijing's most famous dish — crispy, lacquered perfection.", href: "/destinations/beijing/where-to-eat/peking-duck" },
        { title: "Tanghulu", description: "Candied hawthorn on a stick — Beijing's iconic street snack.", href: "/destinations/beijing/where-to-eat/tanghulu" },
        { title: "Local Experiences in Beijing", description: "Go beyond the monuments with authentic local tours.", href: "/destinations/beijing/local-experiences" },
      ]}
    />
  );
}
