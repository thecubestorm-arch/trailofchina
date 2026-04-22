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

const relatedLinks = [
  { title: 'Yangtze Cable Car', href: '/destinations/chongqing/what-to-do/yangtze-cable-car' },
  { title: 'Three Gorges Museum', href: '/destinations/chongqing/what-to-do/three-gorges-museum' },
  { title: 'Chongqing Guide', href: '/destinations/chongqing' },
] as const;

export default function LizibaMonorailPage() {
  return (
    <AttractionPage
      name="Liziba Monorail Station"
      nameZh="李子坝"
      city="Chongqing"
      description="Chongqing's viral internet sensation — a monorail train passing straight through a residential apartment building. The train enters on floor 6 and exits on floor 7 while residents live on the other floors. It went viral in 2018 and now has its own viewing platform."
      hours="Viewing platform: all day, trains: 6:30-22:30"
      price="Free to watch, ¥2-7 to ride"
      nearestSubway="Liziba, Line 2"
      bestTime="Any time (frequent trains)"
      tips={tips}
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.789!2d106.5345!3d29.5534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36f8e3f0e8e8e8e9%3A0x1234567890abcdef!2sLiziba%20Station!5e0!3m2!1sen!2scn!4v1234567890"
      relatedLinks={relatedLinks}
    />
  );
}
