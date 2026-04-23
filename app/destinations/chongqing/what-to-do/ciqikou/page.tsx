import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Ciqikou Ancient Town (磁器口) Chongqing | Snacks, Crafts & Old Streets',
  description: "A 1,000-year-old trading town now converted into Chongqing's busiest tourist street. Narrow stone alleys lined with snack stalls, tea houses, and craft shops. Overwhelmingly crowded on weekends but genuinely atmospheric.",
  openGraph: {
    title: 'Ciqikou Ancient Town (磁器口) Chongqing | Snacks, Crafts & Old Streets',
    description: "A 1,000-year-old trading town now converted into Chongqing's busiest tourist street with narrow stone alleys, snack stalls, and tea houses.",
  },
};

const tips = [
  { type: 'tip' as const, text: 'Go on a weekday — weekends are unbearably packed' },
  { type: 'tip' as const, text: 'Explore the back alleys behind the main street' },
  { type: 'tip' as const, text: 'Try chen mahua (陈麻花)' },
  { type: 'tip' as const, text: 'Tea houses on the second floor are quieter' },
  { type: 'tip' as const, text: '15 minutes by subway from city center' },
] as const;

const relatedLinks = [] as const;

export default function CiqikouPage() {
  return (
    <AttractionPage
      name="Ciqikou Ancient Town"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="磁器口"
      city="Chongqing"
      description="A 1,000-year-old trading town now converted into Chongqing's busiest tourist street. Narrow stone alleys lined with snack stalls, tea houses, and craft shops. Overwhelmingly crowded on weekends but genuinely atmospheric."
      hours="Open all day, best 9:00-18:00"
      price="Free entry"
      nearestSubway="Ciqikou, Line 1"
      bestTime="Weekday morning (9:00-11:00 AM)"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.445%2C29.577%2C106.455%2C29.583&layer=mapnik&marker=29.58%2C106.45"
      address="Ciqikou, Shapingba District"
      addressZh="重庆市沙坪坝区磁器口"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Hongya Cave", description: "Chongqing's iconic 11-story stilted building complex overlooking the river.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Chongqing Hotpot", description: "Chongqing's signature dish - spicy, oily, and unforgettable.", href: "/destinations/chongqing/where-to-eat/chongqing-hotpot" },
        { title: "Yangtze River Cable Car", description: "Aerial ride over the Yangtze River with stunning city views.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
    />
  );
}
