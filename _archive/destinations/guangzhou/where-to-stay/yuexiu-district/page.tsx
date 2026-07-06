import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Yuexiu District (越秀区) — Where to Stay in Guangzhou', description: 'Stay in Yuexiu for old Guangzhou charm, Beijing Road, Shamian Island nearby, and budget-friendly options.', openGraph: { title: 'Yuexiu District — Where to Stay in Guangzhou', description: 'Old Guangzhou, Beijing Road, Shamian nearby.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-stay/yuexiu-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Yuexiu District Guangzhou - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Stay', path: '/destinations/guangzhou/where-to-stay' }, { name: 'Yuexiu District', path: '/destinations/guangzhou/where-to-stay/yuexiu-district' }]);

export default function YuexiuDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Yuexiu District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Stay', href: '/destinations/guangzhou/where-to-stay' }]} nameZh="越秀区" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-yuexiu-1/800/600', alt: 'Old Guangzhou street scene in Yuexiu' }, { src: 'https://picsum.photos/seed/guangzhou-yuexiu-2/800/600', alt: 'Beijing Road pedestrian shopping street' }, { src: 'https://picsum.photos/seed/guangzhou-yuexiu-3/800/600', alt: 'Traditional neighborhood in Yuexiu District' }]}
      hook="Old Guangzhou · Beijing Road · Shamian nearby — the authentic neighborhood feel at budget prices."
      quickInfo={{ price: '¥150–600/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Gongyuanqian / Beijing Road' }}
      whyYouLoveIt={`Yuexiu is old Guangzhou — the neighborhood feel, the street food, the morning markets, the ¥15 wonton noodle shops. Beijing Road, Yuexiu Park, and the Chen Clan Ancestral Hall are all here. Shamian Island is a 10-minute walk. It's not as modern as Tianhe, but it has more character and costs half as much.`}
      description={`Yuexiu District (越秀区) is the historic heart of Guangzhou. It contains Beijing Road, Yuexiu Park, the Sacred Heart Cathedral, and is walking distance from Shamian Island. Budget and mid-range hotels dominate, and the street food is the best in the city.`}
      hours="N/A" price="¥150–600 per night" nearestSubway="Gongyuanqian / Beijing Road / Yuexiu Park" bestTime="Year-round"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2300%2C23.1100%2C113.2800%2C23.1500&layer=mapnik&marker=23.1297%2C113.2667"
      relatedLinks={[]} relatedArticles={[{ title: 'Beijing Road', description: '2,000-year-old shopping street.', href: '/destinations/guangzhou/what-to-do/beijing-road' }, { title: 'Dim Sum in Guangzhou', description: 'The best food in China.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'Shamian Island', description: '10 minutes away.', href: '/destinations/guangzhou/what-to-do/shamian-island' }]}
      tips={[{ type: 'tip', text: 'Stay near Gongyuanqian metro station — Lines 1 and 2 intersect here, connecting you to everything.' }, { type: 'tip', text: 'Yuexiu has the best street food in Guangzhou. Wonton noodle shops and cheung fun stalls on every corner.' }, { type: 'tip', text: 'Shamian Island and the Sacred Heart Cathedral are both within walking distance.' }]}
      practicalDetails={{ gettingThere: 'From Guangzhou Baiyun Airport, take Line 2 to Gongyuanqian (50 min, ¥9). From Guangzhou South, take Line 2 directly (35 min, ¥7).' }}
    />
  </>);
}