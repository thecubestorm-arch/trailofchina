import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Chongqing Xiaomian (小面) | Best Noodle Stalls, Sauce Guide & Prices',
  description: 'The humble bowl that fuels Chongqing. Fresh wheat noodles tossed in chili oil, Sichuan pepper, garlic, scallions, and a dozen other seasonings. Every street corner has a xiaomian stall and everyone has their favorite. Cheap, fast, and more addictive than any fine dining.',
  openGraph: {
    title: 'Chongqing Xiaomian (小面) | Best Noodle Stalls, Sauce Guide & Prices',
    description: 'The humble bowl that fuels Chongqing. Fresh wheat noodles tossed in chili oil, Sichuan pepper, garlic, and a dozen other seasonings.',
  },
};

const whereToTry = [
  { name: 'Street stalls (小面摊)', location: 'Every neighborhood', price: '¥8-12' },
  { name: 'Huaqian Xiaomian (花千小面)', location: 'Jiefangbei area', price: '¥12-18' },
] as const;

const tips = [
  { type: 'tip' as const, text: 'The sauce ratio is everything' },
  { type: 'tip' as const, text: '¥8-12 is normal — ¥20+ is overpriced' },
  { type: 'tip' as const, text: 'Breakfast food — eat before 10 AM' },
  { type: 'tip' as const, text: 'Add a fried egg (煎蛋) for ¥2' },
  { type: 'tip' as const, text: "It's supposed to be spicy — don't ask for mild" },
] as const;

const relatedLinks = [
  { title: 'Chongqing Hotpot', href: '/destinations/chongqing/where-to-eat/chongqing-hotpot' },
  { title: 'Chongqing Where to Eat', href: '/destinations/chongqing/where-to-eat' },
] as const;

export default function XiaomianPage() {
  return (
    <FoodDetailPage
      breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Chongqing', href: '/destinations/chongqing' },
    { label: 'Where to Eat', href: '/destinations/chongqing/where-to-eat' },
  ]}
    name="Chongqing Xiaomian"
      nameZh="小面"
      city="Chongqing"
      description="The humble bowl that fuels Chongqing. Fresh wheat noodles tossed in chili oil, Sichuan pepper, garlic, scallions, and a dozen other seasonings. Every street corner has a xiaomian stall and everyone has their favorite. Cheap, fast, and more addictive than any fine dining."
      priceRange="¥8-20 per bowl"
      bestTime="Breakfast or lunch"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/xiaomian-1/800/500", alt: "Chongqing xiaomian noodles tossed in spicy chili oil" },
        { src: "https://picsum.photos/seed/xiaomian-2/800/500", alt: "Street stall bowl of xiaomian with garlic and scallions" },
        { src: "https://picsum.photos/seed/xiaomian-3/800/500", alt: "Fresh wheat noodles drenched in Sichuan pepper sauce" },
      ]}
  />
  );
}
