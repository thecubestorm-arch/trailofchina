import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Hakka Cuisine in Shenzhen (客家菜) — The Original Local Food', description: 'Before Shenzhen was a tech hub, it was Hakka country. Salt-baked chicken, stuffed tofu, and braised pork belly — hearty, savory Shenzhen originals.', keywords: ['Hakka food Shenzhen', 'salt-baked chicken', 'stuffed tofu', 'Shenzhen local cuisine'], openGraph: { title: 'Hakka Cuisine in Shenzhen (客家菜)', description: 'Shenzhen\'s original regional food — salt-baked chicken and stuffed tofu.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-eat/hakka-cuisine', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Hakka Cuisine - Trail of China' }] } };

const faqJsonLd = faqPageSchema([{ question: 'What is Hakka cuisine?', answer: 'Hakka cuisine is the food of the Hakka people, who originally settled the Shenzhen area. It\'s known for hearty, savory dishes like salt-baked chicken (盐焗鸡), stuffed tofu (酿豆腐), and braised pork belly (梅菜扣肉).' }, { question: 'Where can I find Hakka food in Shenzhen?', answer: 'The best Hakka restaurants are in Longgang District (the traditional Hakka area) and around Luohu. Look for restaurants with 客家 in the name.' }]);
const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Eat', path: '/destinations/shenzhen/where-to-eat' }, { name: 'Hakka Cuisine', path: '/destinations/shenzhen/where-to-eat/hakka-cuisine' }]);

export default function HakkaCuisinePage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Hakka Cuisine" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Eat', href: '/destinations/shenzhen/where-to-eat' }]} nameZh="客家菜" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-hakka-1/800/600', alt: 'Salt-baked chicken Hakka style' }, { src: 'https://picsum.photos/seed/shenzhen-hakka-2/800/600', alt: 'Stuffed tofu Hakka style' }, { src: 'https://picsum.photos/seed/shenzhen-hakka-3/800/600', alt: 'Hakka restaurant interior' }]}
      hook="Before Shenzhen was a tech hub, it was Hakka country — salt-baked chicken, stuffed tofu, and braised pork belly are the city's original comfort food."
      quickInfo={{ price: '¥40–80/person', hours: '11:00–21:00', bestTime: 'Lunch', metro: 'Multiple' }}
      whyYouLoveIt={`Most visitors to Shenzhen eat Cantonese food and miss the city's actual local cuisine. The Hakka people settled this area centuries before Shenzhen became a Special Economic Zone, and their food is the real deal — hearty, salty, and nothing like the delicate Cantonese dim sum you'll find everywhere else.

The three must-orders are salt-baked chicken (盐焗鸡, skin golden and meat tender), stuffed tofu (酿豆腐, tofu pockets filled with minced pork), and braised pork belly with preserved mustard greens (梅菜扣肉, rich and meltingly savory). Pair it with rice and you have a meal that fueled the people who built this city long before the tech workers arrived.`}
      description={`Hakka cuisine (客家菜) is the traditional food of the Hakka people, who have inhabited the Shenzhen area for centuries. Before Shenzhen's transformation into a tech megacity, it was predominantly Hakka territory, and Hakka food remains the city's most authentic local cuisine.`}
      hours="11:00–21:00" price="¥40–80 per person" nearestSubway="Multiple locations" bestTime="Lunch (11:30–13:00)" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0800%2C22.5750%2C114.1200%2C22.5950&layer=mapnik&marker=22.5850%2C114.1000"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum', description: 'The Cantonese side of Shenzhen food.', href: '/destinations/shenzhen/where-to-eat/dim-sum' }, { title: 'Dafen Oil Painting Village', description: 'Another Hakka-area attraction.', href: '/destinations/shenzhen/what-to-do/dafen-oil-painting-village' }]}
      tips={[{ type: 'tip', text: 'Must-order: salt-baked chicken (盐焗鸡), stuffed tofu (酿豆腐), braised pork belly (梅菜扣肉).' }, { type: 'tip', text: 'Look for restaurants with 客家 in the name — that\'s the Hakka character.' }]}
      practicalDetails={{ gettingThere: 'The best Hakka restaurants are in Longgang District (take Line 3 to Dafen or nearby) and around Luohu. Futian has some good options too.' }}
    />
  </>);
}