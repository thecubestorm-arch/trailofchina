import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Tianhe District (天河区) — Where to Stay in Guangzhou', description: 'Stay in Tianhe for modern convenience, Canton Tower views, and the best shopping malls. Mid-range to luxury options.', openGraph: { title: 'Tianhe District — Where to Stay in Guangzhou', description: 'Modern CBD with Canton Tower views and shopping malls.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-stay/tianhe-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Tianhe District Guangzhou - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Stay', path: '/destinations/guangzhou/where-to-stay' }, { name: 'Tianhe District', path: '/destinations/guangzhou/where-to-stay/tianhe-district' }]);

export default function TianheDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Tianhe District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Stay', href: '/destinations/guangzhou/where-to-stay' }]} nameZh="天河区" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-tianhe-1/800/600', alt: 'Tianhe CBD skyline with Canton Tower' }, { src: 'https://picsum.photos/seed/guangzhou-tianhe-2/800/600', alt: 'Tianhe shopping district' }, { src: 'https://picsum.photos/seed/guangzhou-tianhe-3/800/600', alt: 'Zhujiang New Town at night' }]}
      hook="Modern CBD · Canton Tower · Shopping malls — the most convenient base for first-time visitors."
      quickInfo={{ price: '¥300–1500/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Tiyu Xilu / Zhujiang New Town' }}
      whyYouLoveIt={`Tianhe is Guangzhou's modern center — the CBD, the shopping malls, the Canton Tower across the river, and the best metro connections. If you're a first-time visitor, staying in Tianhe puts you within 15 minutes of everything on the metro. The Zhujiang New Town area has the best restaurants, bars, and the Canton Tower riverfront walk.`}
      description={`Tianhe District (天河区) is Guangzhou's central business district. It's home to Zhujiang New Town, the Canton Tower riverfront, Tee Mall shopping center, and the city's best-connected metro hub. Most first-time visitors should base themselves here.`}
      hours="N/A" price="¥300–1500 per night" nearestSubway="Tiyu Xilu / Zhujiang New Town / Guangzhou East" bestTime="Year-round"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.3000%2C23.1200%2C113.3500%2C23.1500&layer=mapnik&marker=23.1361%2C113.3231"
      relatedLinks={[]} relatedArticles={[{ title: 'Canton Tower', description: 'Walk outside at 488 meters.', href: '/destinations/guangzhou/what-to-do/canton-tower' }, { title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'What to Do in Guangzhou', description: 'Top attractions.', href: '/destinations/guangzhou/what-to-do' }]}
      tips={[{ type: 'tip', text: 'Stay near Tiyu Xilu metro station for the best connections — Lines 1, 3, and APM all converge here.' }, { type: 'tip', text: 'Zhujiang New Town has the best restaurants and bars. The riverfront walk to Canton Tower takes 15 minutes.' }, { type: 'tip', text: 'Guangzhou East Station is in Tianhe — convenient for bullet trains to Shenzhen and Hong Kong.' }]}
      practicalDetails={{ gettingThere: 'From Guangzhou Baiyun Airport, take Line 3 to Tiyu Xilu (60 min, ¥12). From Guangzhou South, take Line 2 to Gongyuanqian then Line 1 to Tiyu Xilu (40 min, ¥7).' }}
    />
  </>);
}