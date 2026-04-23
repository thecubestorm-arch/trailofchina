import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Eling Park (鹅岭公园) Chongqing | Best Panoramic City Views',
  description: "The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint. A quiet park with pavilions, a century-old mansion, and a two-story observation tower. From the top you see the Yangtze and Jialing rivers converging, the mountain skyline, and the vertical cityscape that makes Chongqing unique.",
  openGraph: {
    title: 'Eling Park (鹅岭公园) Chongqing | Best Panoramic City Views',
    description: "The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint with a two-story observation tower.",
  },
};

const tips = [
  { type: 'tip' as const, text: 'Climb the tower (¥5) for the best 360° view' },
  { type: 'tip' as const, text: 'Go at night when the city lights up' },
  { type: 'tip' as const, text: 'The park is quiet' },
  { type: 'tip' as const, text: 'Combine with nearby Testbed 2 art district' },
  { type: 'tip' as const, text: 'Walk down through old residential areas' },
  { type: 'photo' as const, text: '360° view from tower' },
  { type: 'photo' as const, text: 'Sunset over two rivers' },
  { type: 'photo' as const, text: 'Illuminated skyline at night' },
  { type: 'photo' as const, text: 'Park pavilions' },
] as const;

const relatedLinks = [] as const;

export default function ElingParkPage() {
  return (
    <AttractionPage
      name="Eling Park"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="鹅岭公园"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/eling-park-1/800/500', alt: 'Eling Park observation tower panoramic view of Chongqing' },
        { src: 'https://picsum.photos/seed/eling-park-2/800/500', alt: 'Sunset over Yangtze and Jialing rivers from Eling Park' },
        { src: 'https://picsum.photos/seed/eling-park-3/800/500', alt: 'Traditional pavilion at Eling Park in Chongqing' },
      ]}
      description="The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint. A quiet park with pavilions, a century-old mansion, and a two-story observation tower. From the top you see the Yangtze and Jialing rivers converging, the mountain skyline, and the vertical cityscape that makes Chongqing unique."
      hours="6:00-22:00"
      price="Free entry (tower ¥5)"
      nearestSubway="Eling, Line 1"
      bestTime="Sunset or night for illuminated skyline"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5268%2C29.5494%2C106.5368%2C29.5554&layer=mapnik&marker=29.5524%2C106.5318"
      address="Eling Main Street, Yuzhong District"
      addressZh="重庆市渝中区鹅岭正街"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Yangtze River Cable Car", description: "Explore Yangtze River Cable Car, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Hongya Cave", description: "Explore Hongya Cave, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
    />
  );
}
