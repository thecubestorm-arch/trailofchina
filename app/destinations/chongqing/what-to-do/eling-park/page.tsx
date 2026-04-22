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

const relatedLinks = [
  { title: 'Yangtze Cable Car', href: '/destinations/chongqing/what-to-do/yangtze-cable-car' },
  { title: 'Hongya Cave', href: '/destinations/chongqing/what-to-do/hongya-cave' },
  { title: 'Chongqing Guide', href: '/destinations/chongqing' },
] as const;

export default function ElingParkPage() {
  return (
    <AttractionPage
      name="Eling Park"
      nameZh="鹅岭公园"
      city="Chongqing"
      description="The highest point on the Yuzhong peninsula and Chongqing's best free viewpoint. A quiet park with pavilions, a century-old mansion, and a two-story observation tower. From the top you see the Yangtze and Jialing rivers converging, the mountain skyline, and the vertical cityscape that makes Chongqing unique."
      hours="6:00-22:00"
      price="Free entry (tower ¥5)"
      nearestSubway="Eling, Line 1"
      bestTime="Sunset or night for illuminated skyline"
      tips={tips}
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.321!2d106.5123!3d29.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36f8e3f0e8e8e8e9%3A0x1234567890abcdef!2sEling%20Park!5e0!3m2!1sen!2scn!4v1234567890"
      relatedLinks={relatedLinks}
    />
  );
}
