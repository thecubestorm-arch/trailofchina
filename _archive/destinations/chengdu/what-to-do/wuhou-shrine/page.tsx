import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Wuhou Shrine (武侯祠) | Chengdu Three Kingdoms Temple Guide',
  description:
    'Visit Chengdu’s Wuhou Shrine for Three Kingdoms history, cypress courtyards, and one of the city’s most important cultural sites.',
  openGraph: {
    title: 'Wuhou Shrine - Trail of China',
    description: 'Three Kingdoms temple and cultural landmark in Chengdu.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Wuhou Shrine - Trail of China' }],
  },
};

export default function WuhouShrinePage() {
  return (
    <AttractionPage
      name="Wuhou Shrine"
      nameZh="武侯祠"
      city="Chengdu"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
      ]}
      images={[
        { src: 'https://picsum.photos/seed/chengdu-wuhou-shrine-1/800/500', alt: 'Red walls and cypress courtyards at Wuhou Shrine in Chengdu' },
        { src: 'https://picsum.photos/seed/chengdu-wuhou-shrine-2/800/500', alt: 'Historic halls inside Wuhou Shrine' },
        { src: 'https://picsum.photos/seed/chengdu-wuhou-shrine-3/800/500', alt: 'Stone paths and lanterns around Wuhou Shrine' },
      ]}
      hook="Chengdu's key Three Kingdoms site, combining temple halls, carved memorials, and shaded cypress walks."
      quickInfo={{
        price: '¥50',
        hours: '8:00-18:30',
        bestTime: 'Morning or late afternoon',
        metro: 'Gaoshengqiao (Line 3) or Wuhou Shrine (Line 10)',
      }}
      whyYouLoveIt="Even if you are not a hardcore Romance of the Three Kingdoms reader, the site works because it feels coherent: red walls, old cypress trees, inscribed steles, and a strong sense of historical continuity right inside the city. Pair it with Jinli next door and you get one serious cultural stop plus an easy evening stroll without extra transit friction."
      practicalDetails={{
        gettingThere: 'Easy from central Chengdu by Line 3 or a short DiDi ride',
        whatToSkip: 'Midday weekends if you dislike dense group tours',
        photographyTips: 'Use side courtyards and red walls for the cleanest compositions',
      }}
      description="Wuhou Shrine is Chengdu's most important Three Kingdoms-era memorial site, dedicated primarily to Zhuge Liang and the Shu Han state. The current complex blends temple halls, gardens, memorial tablets, and some of the city's most atmospheric red-wall corridors. It is one of the best places in Chengdu to connect the city with the historical imagination many Chinese travelers bring with them."
      hours="8:00-18:30"
      price="¥50"
      nearestSubway="Gaoshengqiao (Line 3)"
      bestTime="Morning or late afternoon for softer light and lighter crowds"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.043%2C30.643%2C104.051%2C30.649&layer=mapnik&marker=30.646%2C104.047"
      address="231 Wuhouci Street, Wuhou District"
      addressZh="武侯区武侯祠大街231号"
      relatedLinks={[]}
      relatedArticles={[
        { title: 'Jinli Ancient Street', description: 'Lantern-lit old street directly beside Wuhou Shrine.', href: '/destinations/chengdu/what-to-do/jinli' },
        { title: 'Du Fu Thatched Cottage', description: 'Another high-value cultural stop for a slower Chengdu day.', href: '/destinations/chengdu/what-to-do/dufu-cottage' },
        { title: 'Where to Stay in Chengdu', description: 'Compare Chunxi, Jinli, and Kuanzhai bases.', href: '/destinations/chengdu/where-to-stay' },
      ]}
      tips={[
        { type: 'tip', text: 'Pair it with Jinli right after for an easy culture-plus-snacks route.' },
        { type: 'tip', text: 'Give yourself at least 90 minutes if you want to read the memorial halls properly.' },
        { type: 'photo', text: 'The red-wall corridors and cypress-lined side paths are the best photo spots.' },
      ]}
    />
  );
}
