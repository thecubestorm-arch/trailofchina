import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Three Gorges Museum (三峡博物馆) Chongqing | History, Culture & Free Entry',
  description: "Chongqing's best museum and one of China's finest. Four floors covering the Three Gorges Dam project, Ba culture, Chongqing's WWII history as China's wartime capital, and a stunning collection of ancient bronzes and ceramics. Free entry, air-conditioned.",
  openGraph: {
    title: 'Three Gorges Museum (三峡博物馆) Chongqing | History, Culture & Free Entry',
    description: "Chongqing's best museum with four floors covering the Three Gorges Dam project, Ba culture, WWII history, and ancient bronzes.",
  },
};

const tips = [
  { type: 'tip' as const, text: 'Free entry but bring your passport' },
  { type: 'tip' as const, text: 'The Three Gorges floor is the highlight' },
  { type: 'tip' as const, text: '2-3 hours minimum' },
  { type: 'tip' as const, text: 'The WWII section is fascinating' },
  { type: 'tip' as const, text: 'Combine with People\'s Assembly Hall across the street' },
] as const;

const relatedLinks = [] as const;

export default function ThreeGorgesMuseumPage() {
  return (
    <AttractionPage
      name="Three Gorges Museum"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="三峡博物馆"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/three-gorges-museum-1/800/500', alt: 'Three Gorges Museum exterior in Chongqing' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-2/800/500', alt: 'Ancient bronze exhibit at Three Gorges Museum' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-3/800/500', alt: 'Three Gorges Dam model at Chongqing museum' },
      ]}
      description="Chongqing's best museum and one of China's finest. Four floors covering the Three Gorges Dam project, Ba culture, Chongqing's WWII history as China's wartime capital, and a stunning collection of ancient bronzes and ceramics. Free entry, air-conditioned."
      hours="9:00-17:00 (closed Mondays)"
      price="Free (ID required)"
      nearestSubway="Niujiaotuo, Line 2"
      bestTime="Weekday afternoon, or rainy days"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5416%2C29.5619%2C106.5516%2C29.5679&layer=mapnik&marker=29.5649%2C106.5466"
      address="236 Renmin Road, Yuzhong District"
      addressZh="重庆市渝中区人民路236号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Ciqikou", description: "Explore Ciqikou, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
      ]}
    />
  );
}
