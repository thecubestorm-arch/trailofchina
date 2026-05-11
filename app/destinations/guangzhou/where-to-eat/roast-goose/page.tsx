import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Roast Goose in Guangzhou (烧鹅) — The Dish That Defines the City', description: 'Cantonese roast goose — crispy skin, juicy meat, the dish that makes Guangzhou the food capital of China.', openGraph: { title: 'Roast Goose in Guangzhou (烧鹅)', description: 'Crispy skin, juicy meat — the dish that defines Guangzhou.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/roast-goose', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Roast Goose Guangzhou - Trail of China' }] }, alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/roast-goose' } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Eat', path: '/destinations/guangzhou/where-to-eat' }, { name: 'Roast Goose', path: '/destinations/guangzhou/where-to-eat/roast-goose' }]);

export default function RoastGoosePage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Roast Goose" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Eat', href: '/destinations/guangzhou/where-to-eat' }]} nameZh="烧鹅" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-goose-1/800/600', alt: 'Whole Cantonese roast goose hanging in shop window' }, { src: 'https://picsum.photos/seed/guangzhou-goose-2/800/600', alt: 'Plated roast goose with crispy skin' }, { src: 'https://picsum.photos/seed/guangzhou-goose-3/800/600', alt: 'Roast goose restaurant in Guangzhou' }]}
      hook="Cantonese roast goose — crispy skin, juicy meat, the dish that makes Guangzhou the food capital of China."
      quickInfo={{ price: '¥60–120/person', hours: '11:00–21:00', bestTime: 'Lunch or dinner', metro: 'Multiple (Liwan/Yuexiu)' }}
      whyYouLoveIt={`If dim sum is Guangzhou's breakfast, roast goose (烧鹅) is its dinner. Whole geese, marinated in a secret blend of five-spice, soy, and fermented bean paste, roasted in a wood-fired oven until the skin is impossibly crispy and the meat underneath is juicy and deeply flavored.

The best roast goose restaurants in Guangzhou have been perfecting their recipes for generations. The skin should crack when you bite it, the fat should render into the meat, and the plum sauce on the side should balance the richness. It's the dish that proves Guangzhou is the food capital of China — Peking duck has the fame, but Cantonese roast goose has the flavor.`}
      description={`Cantonese roast goose (烧鹅) is a whole goose marinated in five-spice, soy sauce, and fermented bean paste, then roasted in a wood-fired oven. The skin becomes impossibly crispy while the meat stays juicy. It's served chopped into pieces with plum sauce on the side.

The dish originated in the Pearl River Delta and remains Guangzhou's signature meat dish. The best restaurants roast geese throughout the day, ensuring fresh batches are always available.`}
      hours="11:00–21:00" price="¥60–120 per person" nearestSubway="Multiple stations in Liwan and Yuexiu" bestTime="Lunch (11:30–13:00) or dinner (17:30–19:30)"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2100%2C23.1000%2C113.2400%2C23.1300&layer=mapnik&marker=23.1147%2C113.2250"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum in Guangzhou', description: 'The morning counterpart.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'Shunde Cuisine', description: 'UNESCO City of Gastronomy.', href: '/destinations/guangzhou/where-to-eat/shunde-cuisine' }, { title: 'Yuexiu District', description: 'Where to stay near the food.', href: '/destinations/guangzhou/where-to-stay/yuexiu-district' }]}
      tips={[{ type: 'tip', text: 'Order half a goose (半只鹅) for two people, or a quarter (四分之一) for one. The skin should be crispy, the meat pink.' }, { type: 'tip', text: 'Dip in the plum sauce (酸梅酱) that comes with it — it cuts through the richness.' }, { type: 'tip', text: 'The best roast goose shops hang whole geese in the window. If you see pre-sliced meat on plates, it\'s been sitting too long.' }]}
      practicalDetails={{ gettingThere: 'The best roast goose restaurants are in Liwan District (near Shamian Island) and Yuexiu District. Take Line 1 to Huangsha or Changshoulu.', whatToSkip: 'Skip the roast goose in tourist areas near Beijing Road. The best is in neighborhood restaurants where the geese are roasted on-site.' }}
    />
  </>);
}