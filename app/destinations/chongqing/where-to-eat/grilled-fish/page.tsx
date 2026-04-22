import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Chongqing Grilled Fish (烤鱼) | Best Restaurants & What to Order',
  description: 'A whole fish grilled over charcoal, then served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin. You eat it like hotpot — ingredients keep cooking at the table. Uniquely Chongqing, surprisingly hard to find elsewhere in China.',
  openGraph: {
    title: 'Chongqing Grilled Fish (烤鱼) | Best Restaurants & What to Order',
    description: 'A whole fish grilled over charcoal, served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin.',
  },
};

const whereToTry = [
  { name: 'Tanyu Grilled Fish (探鱼)', location: 'Multiple locations', price: '¥60-90/person' },
  { name: 'Duxinwei Grilled Fish (独一味)', location: 'Jiangbei area', price: '¥50-80/person' },
] as const;

const tips = [
  { type: 'tip' as const, text: 'Order grass carp (草鱼) or catfish (鲶鱼)' },
  { type: 'tip' as const, text: 'The sauce keeps cooking — don\'t overcook the fish' },
  { type: 'tip' as const, text: 'Add extra vegetables (lotus root, potato)' },
  { type: 'tip' as const, text: 'It\'s a social meal — 2+ people' },
  { type: 'tip' as const, text: 'Pair with beer not tea' },
] as const;

const relatedLinks = [
  { title: 'Chongqing Hotpot', href: '/destinations/chongqing/where-to-eat/chongqing-hotpot' },
  { title: 'Xiaomian', href: '/destinations/chongqing/where-to-eat/xiaomian' },
  { title: 'Chongqing Where to Eat', href: '/destinations/chongqing/where-to-eat' },
] as const;

export default function GrilledFishPage() {
  return (
    <FoodDetailPage
      name="Chongqing Grilled Fish"
      nameZh="烤鱼"
      city="Chongqing"
      description="A whole fish grilled over charcoal, then served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin. You eat it like hotpot — ingredients keep cooking at the table. Uniquely Chongqing, surprisingly hard to find elsewhere in China."
      priceRange="¥50-120 per person"
      bestTime="Dinner"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
    />
  );
}
