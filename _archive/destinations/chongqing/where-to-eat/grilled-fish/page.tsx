import { Metadata } from 'next';
import FoodDetailPage from '@/components/FoodDetailPage';

export const metadata: Metadata = {
  title: 'Chongqing Grilled Fish (烤鱼) | Best Restaurants & What to Order',
  description: 'A whole fish grilled over charcoal, then served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin. You eat it like hotpot — ingredients keep cooking at the table. Uniquely Chongqing, surprisingly hard to find elsewhere in China.',
  openGraph: {
    title: 'Chongqing Grilled Fish (烤鱼) | Best Restaurants & What to Order',
    description: 'A whole fish grilled over charcoal, served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Chongqing Grilled Fish (烤鱼) | Best Restaurants & What to Order - Trail of China' }],
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
      breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Chongqing', href: '/destinations/chongqing' },
    { label: 'Where to Eat', href: '/destinations/chongqing/where-to-eat' },
  ]}
    name="Chongqing Grilled Fish"
      nameZh="烤鱼"
      city="Chongqing"
      description="A whole fish grilled over charcoal, then served in a sizzling metal tray with chili oil, Sichuan pepper, lotus root, potatoes, and tofu skin. You eat it like hotpot — ingredients keep cooking at the table. Uniquely Chongqing, surprisingly hard to find elsewhere in China."
      priceRange="¥50-120 per person"
      bestTime="Dinner"
      whereToTry={whereToTry}
      tips={tips}
      relatedLinks={relatedLinks}
      images={[
        { src: "https://picsum.photos/seed/grilled-fish-1/800/500", alt: "Chongqing grilled fish sizzling in metal tray with chili oil" },
        { src: "https://picsum.photos/seed/grilled-fish-2/800/500", alt: "Whole char-grilled fish with lotus root and tofu" },
        { src: "https://picsum.photos/seed/grilled-fish-3/800/500", alt: "Spicy kaoyu served at table with vegetables" },
      ]}
        relatedArticles={[
        { title: "Where to Eat in Chongqing", description: "The best restaurants and street food in Chongqing.", href: "/destinations/chongqing/where-to-eat" },
        { title: "Chongqing Hotpot", description: "Beef tallow base, nine grids, pure mala — the real deal.", href: "/destinations/chongqing/where-to-eat/chongqing-hotpot" },
        { title: "Xiaomian", description: "The humble bowl that fuels Chongqing — spicy wheat noodles.", href: "/destinations/chongqing/where-to-eat/xiaomian" },
        { title: "Local Experiences in Chongqing", description: "Explore the mountain city's hidden corners with local guides.", href: "/destinations/chongqing/local-experiences" },
      ]}
    />
  );
}
