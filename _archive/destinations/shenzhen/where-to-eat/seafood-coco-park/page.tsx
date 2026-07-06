import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Seafood at Coco Park — Fresh Fish Cooked to Order', description: 'Fresh seafood streets near Coco Park in Shenzhen where you pick your fish and they cook it. Cantonese steamed fish and more.', keywords: ['seafood Shenzhen', 'Coco Park seafood', 'Shenzhen fish market'], openGraph: { title: 'Seafood at Coco Park — Fresh Fish Cooked to Order', description: 'Pick your fish from tanks and they cook it on the spot.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-eat/seafood-coco-park', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Seafood at Coco Park - Trail of China' }] } };

const faqJsonLd = faqPageSchema([{ question: 'How does Coco Park seafood work?', answer: 'You pick your live fish from tanks, choose your cooking method (steamed with ginger and spring onion is classic Cantonese), and they cook it while you wait. Pay by weight.' }, { question: 'Is Coco Park seafood expensive?', answer: '¥100–200 per person depending on what you order. Steamed fish is ¥60–120 depending on the species. Ask for prices per jin (500g) before ordering.' }]);
const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Eat', path: '/destinations/shenzhen/where-to-eat' }, { name: 'Seafood at Coco Park', path: '/destinations/shenzhen/where-to-eat/seafood-coco-park' }]);

export default function SeafoodCocoParkPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Seafood at Coco Park" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Eat', href: '/destinations/shenzhen/where-to-eat' }]} nameZh="海鲜" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-seafood-1/800/600', alt: 'Fresh seafood tanks at Coco Park' }, { src: 'https://picsum.photos/seed/shenzhen-seafood-2/800/600', alt: 'Cantonese steamed fish' }, { src: 'https://picsum.photos/seed/shenzhen-seafood-3/800/600', alt: 'Seafood restaurant in Coco Park area' }]}
      hook="Pick your fish from tanks and they cook it on the spot — Cantonese steamed fish is the move."
      quickInfo={{ price: '¥100–200/person', hours: '11:00–22:00', bestTime: 'Evening (18:00–20:00)', metro: 'Shopping Park (Line 1)' }}
      whyYouLoveIt={`Coco Park's seafood restaurants follow the classic Cantonese formula: tanks of live fish, shellfish, and crustaceans line the entrance. You point at what you want, they weigh it, you choose the cooking method, and 15 minutes later it arrives at your table. The steamed garoupa with ginger and spring onion is the canonical order — simple, fresh, and impossible to mess up. The atmosphere is lively, the fish is genuinely fresh, and the whole experience feels like authentic Shenzhen dining.`}
      description={`The area around Coco Park in Futian has several streets lined with Cantonese seafood restaurants. Each restaurant has tanks of live seafood at the entrance — garoupa, sea bass, crab, lobster, clams, and seasonal catches. You select your fish, they weigh it and quote a price per jin (500g), then prepare it according to your preference.`}
      hours="11:00–22:00" price="¥100–200 per person" nearestSubway="Shopping Park Station, Line 1" bestTime="Evening (18:00–20:00)" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0400%2C22.5200%2C114.0600%2C22.5400&layer=mapnik&marker=22.5308%2C114.0481"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum', description: 'Shenzhen\'s Cantonese breakfast tradition.', href: '/destinations/shenzhen/where-to-eat/dim-sum' }, { title: 'What to Do in Shenzhen', description: 'Top attractions.', href: '/destinations/shenzhen/what-to-do' }]}
      tips={[{ type: 'tip', text: 'Always ask the price per jin (500g) before ordering. Some places charge by the fish, which can be unpredictable.' }, { type: 'tip', text: 'Steamed with ginger and spring onion is the classic Cantonese preparation — let the fish speak for itself.' }]}
      practicalDetails={{ gettingThere: 'Metro Line 1 to Shopping Park Station. Exit through Coco Park mall and walk to the restaurant streets on the east side.' }} />
  </>);
}