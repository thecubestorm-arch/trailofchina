import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Shunde Cuisine (顺德菜) — UNESCO City of Gastronomy', description: 'Shunde is a UNESCO City of Gastronomy — and it\'s a suburb of Guangzhou. The best food district in the food capital of China.', openGraph: { title: 'Shunde Cuisine (顺德菜) — UNESCO City of Gastronomy', description: 'UNESCO City of Gastronomy — the best food district in the food capital.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/shunde-cuisine', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shunde Cuisine Guangzhou - Trail of China' }] }, alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/shunde-cuisine' } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Eat', path: '/destinations/guangzhou/where-to-eat' }, { name: 'Shunde Cuisine', path: '/destinations/guangzhou/where-to-eat/shunde-cuisine' }]);

export default function ShundeCuisinePage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Shunde Cuisine" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Eat', href: '/destinations/guangzhou/where-to-eat' }]} nameZh="顺德菜" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-shunde-1/800/600', alt: 'Shunde cuisine spread of dishes' }, { src: 'https://picsum.photos/seed/guangzhou-shunde-2/800/600', alt: 'Shunde water milk dessert double-skin milk' }, { src: 'https://picsum.photos/seed/guangzhou-shunde-3/800/600', alt: 'Traditional Shunde restaurant interior' }]}
      hook="Shunde is a UNESCO City of Gastronomy — and it's a suburb of Guangzhou. The best food district in the food capital of China."
      quickInfo={{ price: '¥100–200/person', hours: '11:00–21:00', bestTime: 'Lunch or dinner', metro: 'Guangzhou South → Shunde (30 min)' }}
      whyYouLoveIt={`Here's the thing about Shunde: it's a district of Foshan that's 30 minutes from Guangzhou by metro, and UNESCO literally named it a City of Gastronomy. Not a city with good food — a City of Gastronomy. The only one in China.

The Shunde philosophy is simple: use the best ingredients and don't mess them up. Fish is steamed whole with ginger and scallion. Pork is slow-braised until it melts. Milk is turned into double-skin milk pudding (双皮奶), a dessert so silky it's like eating clouds. Shunde chefs are the most respected in Cantonese cuisine — Hong Kong's top restaurants recruit from here.

You can eat Shunde food in Guangzhou proper, but making the 30-minute trip to Shunde itself is worth it. The restaurants are bigger, the ingredients are fresher, and the prices are lower.`}
      description={`Shunde cuisine (顺德菜) comes from the Shunde district of Foshan, designated a UNESCO Creative City of Gastronomy in 2014. The cuisine emphasizes fresh ingredients, minimal seasoning, and techniques that let natural flavors shine. Signature dishes include steamed fish, roast goose, water milk desserts, and the famous double-skin milk pudding (双皮奶).`}
      hours="11:00–21:00" price="¥100–200 per person in Shunde, ¥150–250 in Guangzhou" nearestSubway="Guangzhou South Station, then metro to Shunde" bestTime="Weekend lunch for the full experience"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2200%2C22.7800%2C113.2700%2C22.8300&layer=mapnik&marker=22.8050%2C113.2425"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'Roast Goose', description: 'The dish that defines the city.', href: '/destinations/guangzhou/where-to-eat/roast-goose' }, { title: 'Foshan Day Trip', description: 'Shunde is in Foshan — make a day of it.', href: '/destinations/guangzhou/day-trips/foshan' }]}
      tips={[{ type: 'tip', text: 'Take the metro from Guangzhou South Station to Shunde — 30 minutes, ¥10. It\'s easier than you think.' }, { type: 'tip', text: 'Must-try: steamed fish (清蒸鱼), roast goose (烧鹅), and double-skin milk pudding (双皮奶).' }, { type: 'tip', text: 'Shunde food in Guangzhou restaurants is good but 30% more expensive. Go to Shunde itself for the real experience.' }]}
      practicalDetails={{ gettingThere: 'Take Metro Line 2 or 7 to Guangzhou South Station, then transfer to the Shunde intercity rail (30 min, ¥10). Alternatively, DiDi from central Guangzhou costs ¥80–120.', whatToSkip: 'Skip the fancy hotel restaurants in Shunde — the best food is in unassuming neighborhood restaurants with plastic stools and paper menus.' }}
    />
  </>);
}