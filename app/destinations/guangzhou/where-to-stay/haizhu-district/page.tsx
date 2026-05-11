import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Haizhu District (海珠区) — Where to Stay in Guangzhou', description: 'Stay in Haizhu for Canton Tower views, the arts district, and a more local experience across the Pearl River.', openGraph: { title: 'Haizhu District — Where to Stay in Guangzhou', description: 'Across the Pearl River with Canton Tower views.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-stay/haizhu-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Haizhu District Guangzhou - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Stay', path: '/destinations/guangzhou/where-to-stay' }, { name: 'Haizhu District', path: '/destinations/guangzhou/where-to-stay/haizhu-district' }]);

export default function HaizhuDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Haizhu District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Stay', href: '/destinations/guangzhou/where-to-stay' }]} nameZh="海珠区" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-haizhu-1/800/600', alt: 'Haizhu District view with Canton Tower' }, { src: 'https://picsum.photos/seed/guangzhou-haizhu-2/800/600', alt: 'Pearl River waterfront in Haizhu' }, { src: 'https://picsum.photos/seed/guangzhou-haizhu-3/800/600', alt: 'Haixinsha Island and arts district' }]}
      hook="Across the Pearl River · Canton Tower · Arts district — a more local experience with the best skyline views."
      quickInfo={{ price: '¥250–800/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Canton Tower / Kecun' }}
      whyYouLoveIt={`Haizhu is where Guangzhou's skyline looks best — from across the Pearl River. You can see Canton Tower from your hotel window, walk along the riverfront promenade, and access the arts district. It's less touristy than Tianhe, more local, and has the best nighttime skyline views in the city.`}
      description={`Haizhu District (海珠区) sits on the south bank of the Pearl River, directly across from Tianhe. It's home to Canton Tower, the Haixinsha arts island, and some of the best skyline viewpoints in Guangzhou. Hotels here are mid-range with excellent river views.`}
      hours="N/A" price="¥250–800 per night" nearestSubway="Canton Tower / Kecun / Changgang" bestTime="Year-round"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2900%2C23.0800%2C113.3500%2C23.1200&layer=mapnik&marker=23.0981%2C113.3208"
      relatedLinks={[]} relatedArticles={[{ title: 'Canton Tower', description: 'Walk outside at 488 meters.', href: '/destinations/guangzhou/what-to-do/canton-tower' }, { title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'What to Do in Guangzhou', description: 'Top attractions.', href: '/destinations/guangzhou/what-to-do' }]}
      tips={[{ type: 'tip', text: 'Hotels near Canton Tower station have the best skyline views. Book a river-facing room.' }, { type: 'tip', text: 'The riverfront promenade from Canton Tower to Haixinsha is the best nighttime walk in Guangzhou.' }, { type: 'tip', text: 'Haizhu is more local and less touristy than Tianhe. You\'ll find better street food here.' }]}
      practicalDetails={{ gettingThere: 'Take Line 3 or APM to Canton Tower Station. From Guangzhou Airport, take Line 3 directly (50 min, ¥12). From Guangzhou South, transfer at Kecun.' }}
    />
  </>);
}