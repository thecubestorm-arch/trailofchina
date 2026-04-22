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

const relatedLinks = [
  { title: 'Hongya Cave', href: '/destinations/chongqing/what-to-do/hongya-cave' },
  { title: 'Ciqikou', href: '/destinations/chongqing/what-to-do/ciqikou' },
  { title: 'Chongqing Where to Eat', href: '/destinations/chongqing/where-to-eat' },
  { title: 'Chongqing Guide', href: '/destinations/chongqing' },
] as const;

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
      description="Chongqing's most iconic experience — a cable car gliding over the Yangtze River between the Yuzhong peninsula and Nan'an district. The 4-minute ride gives you panoramic views of the mountain city skyline, the river, and the chaotic beauty of Chongqing's vertical urban landscape."
      hours="7:00-22:00"
      price="¥20 one-way, ¥30 round-trip"
      nearestSubway="Xiaoshizi, Line 1"
      bestTime="Sunset (6:00-7:30 PM) for golden hour skyline"
      tips={tips}
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.678!2d106.5833!3d29.5569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36f8e3f0e8e8e8e9%3A0x1234567890abcdef!2sYangtze%20River%20Cableway!5e0!3m2!1sen!2scn!4v1234567890"
      relatedLinks={relatedLinks}
    />
  );
}
