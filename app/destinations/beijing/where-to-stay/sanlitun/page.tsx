import { Metadata } from 'next';
import NeighborhoodPage from '@/components/NeighborhoodPage';

export const metadata: Metadata = {
  title: 'Sanlitun (三里屯) Beijing | Nightlife, Bars & Expat Hub Hotels',
  description:
    'Stay in Beijing international nightlife district with craft cocktails and expat-friendly amenities. Perfect for nightlife lovers and expats.',
  openGraph: {
    title: 'Sanlitun (三里屯) Beijing | Nightlife, Bars & Expat Hub Hotels',
    description:
      'Stay in Beijing international nightlife district with craft cocktails and expat-friendly amenities. Perfect for nightlife lovers and expats.',
    images: [
      {
        url: 'https://www.trailofchina.com/api/og?title=Sanlitun&description=Nightlife+and+expat+hub',
        width: 1200,
        height: 630,
        alt: 'Sanlitun Beijing',
      },
    ],
  },
};

export default function SanlitunPage() {
  return (
    <NeighborhoodPage
      name="Sanlitun"
      nameZh="三里屯"
      city="Beijing"
      description="Sanlitun is Beijing's international nightlife and shopping district. Craft cocktail bars, burger joints, Korean BBQ, and the famous Sanlitun Soho complex. The embassy area means plenty of expat-friendly services. Not for sightseeing - for living well after dark."
      vibe="Modern, international, and Beijing's nightlife capital"
      bestFor="Nightlife lovers and expats who want craft cocktails, international dining, and late nights"
      priceRange="¥350-2000/night"
      nearestSubway="Tuanjiehu, Line 10 / Dongdaqiao, Line 6"
      tips={[
        { type: 'tip', text: 'Best nightlife in Beijing - bars open until 2-4 AM' },
        { type: 'tip', text: 'Taikoo Li mall for upscale shopping and dining' },
        { type: 'tip', text: "Avoid weekends if you don't like crowds - it gets very busy" },
        { type: 'tip', text: 'Jing A Taproom for craft beer lovers' },
        { type: 'tip', text: '10 min taxi to Forbidden City for early morning visits' },
      ] as const}
      relatedLinks={[
        { title: 'Beijing Where to Eat', href: '/destinations/beijing/where-to-eat' },
        { title: 'Beijing Nightlife', href: '/destinations/beijing/things-to-do/nightlife' },
        { title: 'Beijing Guide', href: '/destinations/beijing/guide' },
        { title: 'Beijing Local Tips', href: '/destinations/beijing/local-tips' },
        { title: 'Where to Stay in Beijing', href: '/destinations/beijing/where-to-stay' },
      ]}
      relatedArticles={[
        { title: 'Where to Stay in Beijing', description: 'Compare all neighborhoods and find the best area for your trip.', href: '/destinations/beijing/where-to-stay' },
        { title: 'Haidian', description: 'Academic, leafy, and quieter than central Beijing — near universities.', href: '/destinations/beijing/where-to-stay/haidian' },
        { title: 'What to Do in Beijing', description: 'Must-see attractions and hidden gems in Beijing.', href: '/destinations/beijing/what-to-do' },
        { title: 'Local Experiences in Beijing', description: 'Hutong breakfast walks, temple rituals, calligraphy, and street food tours.', href: '/destinations/beijing/local-experiences' },
      ]}
      images={[
        { src: "https://picsum.photos/seed/sanlitun-1/800/500", alt: "Sanlitun Soho modern architecture at night in Beijing" },
        { src: "https://picsum.photos/seed/sanlitun-2/800/500", alt: "Taikoo Li shopping and dining district in Beijing" },
        { src: "https://picsum.photos/seed/sanlitun-3/800/500", alt: "Bustling nightlife scene in Beijing's Sanlitun district" },
      ]}
    />
  );
}
