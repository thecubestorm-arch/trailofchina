import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Yangtze River Cable Car (长江索道) Chongqing | Ride, Views & Tickets',
  description: "Chongqing's most iconic experience — a cable car gliding over the Yangtze River between the Yuzhong peninsula and Nan'an district. The 4-minute ride gives you panoramic views of the mountain city skyline, the river, and the chaotic beauty of Chongqing's vertical urban landscape.",
  openGraph: {
    title: 'Yangtze River Cable Car (长江索道) Chongqing | Ride, Views & Tickets',
    description: "Chongqing's most iconic experience — a cable car gliding over the Yangtze River with panoramic views of the mountain city skyline.",
  },
};

const tips = [
  { type: 'tip' as const, text: 'Buy tickets online (WeChat mini-program) — lines are long' },
  { type: 'tip' as const, text: 'Go at sunset for the best photos' },
  { type: 'tip' as const, text: 'The north station (Yuzhong) is the main tourist entry' },
  { type: 'tip' as const, text: "Don't sit — stand by the window for photos" },
  { type: 'tip' as const, text: 'Combine with Hongya Cave visit' },
  { type: 'photo' as const, text: 'Skyline view from cable car' },
  { type: 'photo' as const, text: 'Yangtze River below' },
  { type: 'photo' as const, text: 'Cable car crossing at sunset' },
  { type: 'photo' as const, text: 'Both station platforms' },
] as const;

const relatedLinks = [] as const;

export default function YangtzeCableCarPage() {
  return (
    <AttractionPage
      name="Yangtze River Cable Car"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="长江索道"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/yangtze-cable-car-1/800/500', alt: 'Yangtze River Cable Car crossing the river in Chongqing' },
        { src: 'https://picsum.photos/seed/yangtze-cable-car-2/800/500', alt: 'Cable car station with Chongqing mountain city skyline' },
        { src: 'https://picsum.photos/seed/yangtze-cable-car-3/800/500', alt: 'Aerial view from Yangtze Cable Car at sunset' },
      ]}
      description="Chongqing's most iconic experience — a cable car gliding over the Yangtze River between the Yuzhong peninsula and Nan'an district. The 4-minute ride gives you panoramic views of the mountain city skyline, the river, and the chaotic beauty of Chongqing's vertical urban landscape."
      hours="7:00-22:00"
      price="¥20 one-way, ¥30 round-trip"
      nearestSubway="Xiaoshizi, Line 1"
      bestTime="Sunset (6:00-7:30 PM) for golden hour skyline"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5794%2C29.5550%2C106.5894%2C29.5610&layer=mapnik&marker=29.5580%2C106.5844"
      address="Xinhua Road, Yuzhong District"
      addressZh="重庆市渝中区新华路"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Hongya Cave", description: "Explore Hongya Cave, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Ciqikou", description: "Explore Ciqikou, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
    />
  );
}
