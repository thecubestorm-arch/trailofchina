import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Futian District (福田) — Where to Stay in Shenzhen', description: 'Stay in Futian for central convenience, Coco Park nightlife, and the best metro connections. Budget hostels to luxury hotels.', openGraph: { title: 'Futian District — Where to Stay in Shenzhen', description: 'Central business district with best metro connections and nightlife.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-stay/futian-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Futian District - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Stay', path: '/destinations/shenzhen/where-to-stay' }, { name: 'Futian District', path: '/destinations/shenzhen/where-to-stay/futian-district' }]);

export default function FutianDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Futian District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Stay', href: '/destinations/shenzhen/where-to-stay' }]} nameZh="福田区" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-futian-1/800/600', alt: 'Futian CBD skyline at night' }, { src: 'https://picsum.photos/seed/shenzhen-futian-2/800/600', alt: 'Coco Park shopping area' }, { src: 'https://picsum.photos/seed/shenzhen-futian-3/800/600', alt: 'Futian metro station area' }]}
      hook="Central business · Coco Park nightlife · Best metro connections — the most convenient base for first-time visitors."
      quickInfo={{ price: '¥300–1500/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Civic Center / Shopping Park (Line 1)' }}
      whyYouLoveIt={`Futian is Shenzhen's center of gravity — the CBD, the government buildings, the best metro connections, and Coco Park's nightlife are all here. If you only have 2-3 days, staying in Futian puts you within 15 minutes of everything on the metro. The Ping An Finance Centre, Lianhuashan Park, and Huaqiangbei are all walking distance or one metro stop away.`}
      description={`Futian District (福田区) is Shenzhen's central business and government district. It's home to the Civic Center, Ping An Finance Centre, Coco Park shopping and nightlife area, and the city's best-connected metro hub. Most first-time visitors should base themselves here.`}
      hours="N/A" price="¥300–1500 per night" nearestSubway="Civic Center / Shopping Park / Coco Park" bestTime="Year-round" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0400%2C22.5200%2C114.0700%2C22.5450&layer=mapnik&marker=22.5333%2C114.0550"
      relatedLinks={[]} relatedArticles={[{ title: 'Ping An Finance Centre', description: '599m observation deck in Futian.', href: '/destinations/shenzhen/what-to-do/ping-an-finance-centre' }, { title: 'Huaqiangbei', description: 'Electronics market, 10 minutes away.', href: '/destinations/shenzhen/what-to-do/huaqiangbei' }, { title: 'Where to Eat in Shenzhen', description: 'Best restaurants near Futian.', href: '/destinations/shenzhen/where-to-eat' }]}
      tips={[{ type: 'tip', text: 'Stay near Civic Center metro for the best connections — Lines 2, 3, 4, and 11 all converge here.' }, { type: 'tip', text: 'Coco Park is Futian\'s nightlife hub — restaurants, bars, and shopping all in one complex.' }, { type: 'tip', text: 'Futian Checkpoint is a 10-minute walk from Civic Center — the fastest Hong Kong border crossing.' }]}
      practicalDetails={{ gettingThere: 'From Shenzhen Bao\'an Airport, take Line 11 directly to Futian Station (50 min, ¥7). From Shenzhen North, take Line 4 to Civic Center (15 min, ¥4). From Luohu border crossing, take Line 1 west to Civic Center (15 min, ¥3).' }}
    />
  </>);
}