import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dim Sum in Shenzhen (早茶) — Cantonese Breakfast Tradition',
  description: 'Shenzhen\'s dim sum scene: har gow, siu mai, char siu bao, and the best Cantonese breakfast restaurants in Futian and Nanshan.',
  keywords: ['dim sum Shenzhen', 'Shenzhen Cantonese food', 'har gow Shenzhen', 'morning tea Shenzhen'],
  openGraph: {
    title: 'Dim Sum in Shenzhen (早茶) — Cantonese Breakfast Tradition',
    description: 'The best dim sum restaurants in Shenzhen — har gow, siu mai, and the Cantonese breakfast tradition.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-eat/dim-sum',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Dim Sum in Shenzhen - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'What time should I go for dim sum in Shenzhen?', answer: 'Arrive before 9 AM on weekends for the freshest dishes and liveliest atmosphere. Weekday lunches are also excellent and less crowded.' },
  { question: 'How much does dim sum cost in Shenzhen?', answer: '¥50–100 per person depending on the restaurant. Street stalls are cheaper (¥20–40), hotel restaurants run ¥150+.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Eat', path: '/destinations/shenzhen/where-to-eat' },
  { name: 'Dim Sum', path: '/destinations/shenzhen/where-to-eat/dim-sum' },
]);

export default function DimSumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Dim Sum"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Eat', href: '/destinations/shenzhen/where-to-eat' },
        ]}
        nameZh="早茶"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-dim-sum-1/800/600', alt: 'Dim sum bamboo steamers with har gow and siu mai' },
          { src: 'https://picsum.photos/seed/shenzhen-dim-sum-2/800/600', alt: 'Char siu bao and egg tarts' },
          { src: 'https://picsum.photos/seed/shenzhen-dim-sum-3/800/600', alt: 'Dim sum restaurant interior in Futian' },
          { src: 'https://picsum.photos/seed/shenzhen-dim-sum-4/800/600', alt: 'Shrimp dumplings close-up' },
          { src: 'https://picsum.photos/seed/shenzhen-dim-sum-5/800/600', alt: 'Chinese tea with dim sum spread' },
        ]}
        hook="Shenzhen's Cantonese breakfast tradition — har gow, siu mai, and char siu bao served with endless pots of tea."
        quickInfo={{ price: '¥50–100/person', hours: '6:30–14:00', bestTime: 'Weekends 8:00–10:00', metro: 'Multiple (Futian/Nanshan)' }}
        whyYouLoveIt={`Dim sum in Shenzhen is more than breakfast — it's a social institution. Cantonese families gather every weekend morning for yum cha (饮茶, "drink tea"), ordering small dishes from rolling carts and catching up over pots of pu'er or chrysanthemum tea.

The must-orders are universal: har gow (shrimp dumplings with translucent wrappers), siu mai (pork and shrimp dumplings), char siu bao (BBQ pork buns), and cheong fun (rice noodle rolls with shrimp or beef). But Shenzhen also has specialties you won't find in Hong Kong — regional Hakka dumplings and Hunan-spiced variations.

Come before 9 AM on weekends for the best atmosphere. The restaurants are noisy, chaotic, and absolutely delightful. Don't be shy about pointing at what you want from the carts.`}
        description={`Dim sum (早茶, literally "morning tea") is the Cantonese tradition of small shared dishes served with tea, typically for breakfast or brunch. In Shenzhen, the dim sum culture reflects its position in Guangdong province — authentic Cantonese technique with influences from across China.

Shenzhen's dim sum restaurants range from hole-in-the-wall spots serving ¥5 dumplings to hotel banquet halls with crystal chandeliers. The best are in Futian and Nanshan districts, where competition keeps quality high and prices reasonable.`}
        hours="6:30–14:00 (best before 11:00)"
        price="¥50–100 per person"
        nearestSubway="Multiple stations in Futian and Nanshan"
        bestTime="Weekend mornings (8:00–10:00) for atmosphere"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0400%2C22.5250%2C114.0700%2C22.5450&layer=mapnik&marker=22.5375%2C114.0583"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Seafood at Coco Park", description: "Fresh fish, cooked to order.", href: "/destinations/shenzhen/where-to-eat/seafood-coco-park" },
          { title: "Hakka Cuisine", description: "Shenzhen's original regional food.", href: "/destinations/shenzhen/where-to-eat/hakka-cuisine" },
          { title: "What to Do in Shenzhen", description: "Top attractions and experiences.", href: "/destinations/shenzhen/what-to-do" },
          { title: "Where to Stay", description: "Best neighborhoods for food lovers.", href: "/destinations/shenzhen/where-to-stay" },
        ]}
        tips={[
          { type: 'tip', text: 'Arrive before 9 AM on weekends for the freshest dishes and the full cart selection.' },
          { type: 'tip', text: 'Must-order: har gow (shrimp dumplings), siu mai (pork dumplings), char siu bao (BBQ pork buns), cheong fun (rice noodle rolls).' },
          { type: 'tip', text: 'Pour tea for others before yourself — it\'s Cantonese etiquette. Tap two fingers on the table to say thanks.' },
        ]}
        practicalDetails={{
          gettingThere: 'Dim sum restaurants are concentrated in Futian (near Civic Center and Coco Park metro stations) and Nanshan (near Houhai). Any central hotel will have 2-3 good options within walking distance.',
          whatToSkip: 'Skip the overpriced hotel dim sum unless you want the luxury experience. Neighborhood restaurants serve the same quality at half the price. Also avoid the pre-made dim sum at mall food courts — it sits under heat lamps.',
        }}
      />
    </>
  );
}