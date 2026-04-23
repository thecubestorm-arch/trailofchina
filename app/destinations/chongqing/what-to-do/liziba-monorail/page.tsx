import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Liziba Monorail Station (李子坝) Chongqing | Train Through a Building',
  description: "Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building. The train enters on floor 6 and exits on floor 7 while residents live on the other floors. It went viral in 2018 and now has its own viewing platform.",
  openGraph: {
    title: 'Liziba Monorail Station (李子坝) Chongqing | Train Through a Building',
    description: "Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building.",
  },
};

const tips = [
  { type: 'tip' as const, text: 'The viewing platform is across the street — best photo spot' },
  { type: 'tip' as const, text: 'Trains pass every 3-5 minutes' },
  { type: 'tip' as const, text: 'Ride the train yourself (Line 2)' },
  { type: 'tip' as const, text: 'There\'s a small tourist info center' },
  { type: 'tip' as const, text: 'Combine with Three Gorges Museum' },
  { type: 'photo' as const, text: 'Monorail entering the building from viewing platform' },
  { type: 'photo' as const, text: 'Train inside the building' },
  { type: 'photo' as const, text: 'The building itself' },
] as const;

const relatedLinks = [] as const;

export default function LizibaMonorailPage() {
  return (
    <AttractionPage
      name="Liziba Monorail Station"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="李子坝"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/liziba-monorail-1/800/500', alt: 'Liziba monorail train passing through apartment building' },
        { src: 'https://picsum.photos/seed/liziba-monorail-2/800/500', alt: 'Chongqing monorail entering residential building at Liziba' },
        { src: 'https://picsum.photos/seed/liziba-monorail-3/800/500', alt: 'Liziba Station viewing platform in Chongqing' },
      ]}
      description="Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building. The train enters on floor 6 and exits on floor 7 while residents live on the other floors. It went viral in 2018 and now has its own viewing platform."
      hours="Viewing platform: all day, trains: 6:30-22:30"
      price="Free to watch, ¥2-7 to ride"
      nearestSubway="Liziba, Line 2"
      bestTime="Any time (frequent trains)"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5289%2C29.5527%2C106.5389%2C29.5587&layer=mapnik&marker=29.5557%2C106.5339"
      address="Liziba Station, Yuzhong District"
      addressZh="重庆市渝中区李子坝站"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Yangtze River Cable Car", description: "Explore Yangtze River Cable Car, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Three Gorges Museum", description: "Explore Three Gorges Museum, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/three-gorges-museum" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
    />
  );
}
