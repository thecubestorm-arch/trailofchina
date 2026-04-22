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

const relatedLinks = [
  { title: 'Ciqikou', href: '/destinations/chongqing/what-to-do/ciqikou' },
  { title: 'Chongqing Guide', href: '/destinations/chongqing' },
  { title: 'Chongqing Where to Eat', href: '/destinations/chongqing/where-to-eat' },
] as const;

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
      description="Chongqing's best museum and one of China's finest. Four floors covering the Three Gorges Dam project, Ba culture, Chongqing's WWII history as China's wartime capital, and a stunning collection of ancient bronzes and ceramics. Free entry, air-conditioned."
      hours="9:00-17:00 (closed Mondays)"
      price="Free (ID required)"
      nearestSubway="Niujiaotuo, Line 2"
      bestTime="Weekday afternoon, or rainy days"
      tips={tips}
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.456!2d106.5234!3d29.5612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36f8e3f0e8e8e8e9%3A0x1234567890abcdef!2sThree%20Gorges%20Museum!5e0!3m2!1sen!2scn!4v1234567890"
      relatedLinks={relatedLinks}
    />
  );
}
