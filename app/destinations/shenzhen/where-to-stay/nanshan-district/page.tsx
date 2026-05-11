import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Nanshan District (南山) — Where to Stay in Shenzhen', description: 'Stay in Nanshan for the tech district, OCT Loft art galleries, Sea World dining, and a more relaxed neighborhood feel.', openGraph: { title: 'Nanshan District — Where to Stay in Shenzhen', description: 'Tech district with OCT Loft and Sea World.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-stay/nanshan-district', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Nanshan District - Trail of China' }] } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Stay', path: '/destinations/shenzhen/where-to-stay' }, { name: 'Nanshan District', path: '/destinations/shenzhen/where-to-stay/nanshan-district' }]);

export default function NanshanDistrictPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Nanshan District" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Stay', href: '/destinations/shenzhen/where-to-stay' }]} nameZh="南山区" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-nanshan-1/800/600', alt: 'Nanshan district with Sea World area' }, { src: 'https://picsum.photos/seed/shenzhen-nanshan-2/800/600', alt: 'OCT Loft art district in Nanshan' }, { src: 'https://picsum.photos/seed/shenzhen-nanshan-3/800/600', alt: 'Houhai waterfront in Nanshan' }]}
      hook="Tech district · OCT Loft · Sea World — for art lovers, café crawlers, and anyone who prefers neighborhoods over skyscrapers."
      quickInfo={{ price: '¥400–2000/night', hours: 'N/A', bestTime: 'Year-round', metro: 'Houhai / Window of the World (Lines 2/11)' }}
      whyYouLoveIt={`Nanshan is where Shenzhen's tech workers actually live — and it shows. The district has more personality than Futian: OCT Loft's art galleries, Sea World's restaurant scene, Shekou's expat bars, and a waterfront promenade that feels like a real neighborhood. It's slightly further from the center but more livable.`}
      description={`Nanshan District (南山区) is Shenzhen's tech and creative hub, home to Tencent's headquarters, OCT Loft art district, Sea World dining area, and the Shekou expat neighborhood. It's the best choice for travelers who want neighborhood character over CBD convenience.`}
      hours="N/A" price="¥400–2000 per night" nearestSubway="Houhai / Window of the World / Qiaocheng East" bestTime="Year-round" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.9100%2C22.5200%2C113.9500%2C22.5450&layer=mapnik&marker=22.5336%2C113.9300"
      relatedLinks={[]} relatedArticles={[{ title: 'OCT Loft', description: 'Shenzhen\'s art district.', href: '/destinations/shenzhen/what-to-do/oct-loft' }, { title: 'Window of the World', description: 'Theme park in Nanshan.', href: '/destinations/shenzhen/what-to-do/window-of-the-world' }, { title: 'Where to Eat in Shenzhen', description: 'Best restaurants.', href: '/destinations/shenzhen/where-to-eat' }]}
      tips={[{ type: 'tip', text: 'OCT Loft is walkable from Qiaocheng East metro — the best art district in Shenzhen.' }, { type: 'tip', text: 'Sea World (Shekou) has the city\'s best international dining scene — Italian, Japanese, Mexican, you name it.' }]}
      practicalDetails={{ gettingThere: 'From Futian, take Line 11 west to Houhai (20 min). From the airport, Line 11 goes directly to Nanshan stations.' }}
    />
  </>);
}