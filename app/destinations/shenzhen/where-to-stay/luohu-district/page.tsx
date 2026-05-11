import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Luohu District (罗湖) — Where to Stay in Shenzhen', description: 'Stay in Luohu for Hong Kong border crossing access, budget hotels, and Dongmen night market. The cheapest base in Shenzhen.', openGraph: { title: 'Luohu District — Where to Stay in Shenzhen', description: 'Border crossing access and budget options.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-stay/luohu-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Luohu District - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Stay', path: '/destinations/shenzhen/where-to-stay' }, { name: 'Luohu District', path: '/destinations/shenzhen/where-to-stay/luohu-district' }]);

export default function LuohuDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Luohu District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Stay', href: '/destinations/shenzhen/where-to-stay' }]} nameZh="罗湖区" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-luohu-1/800/600', alt: 'Luohu border crossing area' }, { src: 'https://picsum.photos/seed/shenzhen-luohu-2/800/600', alt: 'Dongmen night market in Luohu' }, { src: 'https://picsum.photos/seed/shenzhen-luohu-3/800/600', alt: 'Luohu commercial district' }]}
      hook="Hong Kong border crossing · Budget options · Dongmen night market — the cheapest base and the fastest route to Hong Kong."
      quickInfo={{ price: '¥150–600/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Laojie / Luohu (Lines 1/3)' }}
      whyYouLoveIt={`Luohu isn't pretty — it's old Shenzhen, the part that was here before the tech boom. But that's exactly why some travelers love it. The Dongmen night market is here, the Hong Kong border crossing is a 5-minute walk from the metro, and hotels cost half what they do in Futian. If you're day-tripping to Hong Kong or traveling on a budget, Luohu is the smart choice.`}
      description={`Luohu District (罗湖区) is Shenzhen's oldest commercial district, home to the Luohu border crossing to Hong Kong, the Dongmen night market, and the city's cheapest hotels. It's not as polished as Futian or as trendy as Nanshan, but it's practical, affordable, and authentic.`}
      hours="N/A" price="¥150–600 per night" nearestSubway="Laojie / Luohu Station" bestTime="Year-round" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.1000%2C22.5350%2C114.1300%2C22.5600&layer=mapnik&marker=22.5492%2C114.1197"
      relatedLinks={[]} relatedArticles={[{ title: 'Hong Kong Day Trip', description: 'Walk across the border from Luohu.', href: '/destinations/shenzhen/day-trips/hong-kong' }, { title: 'Street Food at Dongmen', description: 'Luohu\'s best night market.', href: '/destinations/shenzhen/where-to-eat/street-food-dongmen' }, { title: 'Shenzhen Local Tips', description: 'Border crossing details.', href: '/destinations/shenzhen/local-tips' }]}
      tips={[{ type: 'tip', text: 'Luohu border crossing opens at 6:30 AM — arrive early to avoid queues.' }, { type: 'tip', text: 'Budget hotels here are ¥100–300/night. Check reviews carefully — quality varies.' }, { type: 'tip', text: 'Dongmen night market is walking distance from any Luohu hotel.' }]}
      practicalDetails={{ gettingThere: 'From Shenzhen Airport, take Line 11 to Futian, then Line 1 east to Laojie or Luohu (total 60 min, ¥8). The Luohu border crossing is directly above Luohu metro station.' }}
    />
  </>);
}