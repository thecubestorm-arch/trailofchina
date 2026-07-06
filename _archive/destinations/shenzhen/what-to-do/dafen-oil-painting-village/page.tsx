import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dafen Oil Painting Village (大芬油画村) — 60% of the World\'s Oil Paintings',
  description: 'Dafen produces more oil paintings than anywhere on Earth — 5 million a year, many sold on Amazon as hand-painted originals. Walk through alleys where artists copy Van Gogh and paint original work side by side.',
  keywords: ['Dafen Oil Painting Village', 'Shenzhen art village', 'Dafen village', 'oil painting village China'],
  openGraph: {
    title: 'Dafen Oil Painting Village (大芬油画村) — 60% of the World\'s Oil Paintings',
    description: 'A village that produces 5 million oil paintings a year — walk through alleys where artists copy masterworks.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/dafen-oil-painting-village',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Dafen Oil Painting Village - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'Can I buy paintings at Dafen?', answer: 'Yes! Prices range from ¥30 for small prints to ¥500+ for large originals. Bargain politely — starting at 50% of asking is reasonable for originals.' },
  { question: 'How do I get to Dafen Oil Painting Village?', answer: 'Take Metro Line 3 to Dafen Station (大芬站), Exit A1. Walk 2 minutes south to the village entrance.' },
  { question: 'Is Dafen worth visiting if I don\'t want to buy art?', answer: 'Absolutely. Watching the artists work is fascinating — rows of painters doing masterful copies in minutes. It\'s a unique look at how Shenzhen\'s manufacturing culture extends even to art.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'Dafen Oil Painting Village', path: '/destinations/shenzhen/what-to-do/dafen-oil-painting-village' },
]);

export default function DafenOilPaintingVillagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Dafen Oil Painting Village"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="大芬油画村"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-dafen-1/800/600', alt: 'Oil paintings lining the alleys of Dafen village' },
          { src: 'https://picsum.photos/seed/shenzhen-dafen-2/800/600', alt: 'Artist at work in Dafen Oil Painting Village' },
          { src: 'https://picsum.photos/seed/shenzhen-dafen-3/800/600', alt: 'Rows of canvases in Dafen workshop' },
          { src: 'https://picsum.photos/seed/shenzhen-dafen-4/800/600', alt: 'Colorful Dafen village street scene' },
          { src: 'https://picsum.photos/seed/shenzhen-dafen-5/800/600', alt: 'Painting galleries in Dafen Oil Painting Village' },
        ]}
        hook="Dafen produces more oil paintings than anywhere on Earth — 5 million a year, many sold on Amazon as 'hand-painted originals.'"
        quickInfo={{ price: 'Free', hours: 'Always open', bestTime: 'Morning (9:00–12:00)', metro: 'Dafen (Line 3)' }}
        whyYouLoveIt={`Dafen is the strangest intersection of art and manufacturing you'll ever see. In the 1990s, a Hong Kong businessman set up a workshop here to mass-produce oil painting copies. Within a decade, thousands of artists had followed, and now this small neighborhood produces an estimated 5 million paintings a year — roughly 60% of the world's oil paintings.

Walk through the narrow alleys and you'll see painters working at astonishing speed — a Van Gogh copy in 30 minutes, a Monet in an hour. Some stalls have racks of identical sunset paintings, others display genuine original work by local artists. The juxtaposition is what makes Dafen fascinating: it's both an art factory and a genuine creative community.

You don't need to buy anything. Watching the artists work is the experience. Bring a camera, walk slowly, and appreciate the bizarre beauty of a village that turned painting into an assembly line — and then, inevitably, started producing original art too.`}
        description={`Dafen Oil Painting Village (大芬油画村) is a neighborhood in Longgang District, Shenzhen, that produces an estimated 60% of the world's oil paintings. What started in 1989 as a single workshop copying Western masterworks has grown into a village of over 8,000 artists producing 5 million paintings annually.

The village occupies several blocks of narrow streets and alleys, lined with galleries, workshops, and supply stores. Painters work in open stalls, often producing copies of famous paintings — Van Gogh's Starry Night, Monet's Water Lilies, and Da Vinci's Mona Lisa are the most popular subjects. Many also produce original work, and the village has increasingly attracted serious artists who use the cheap studio space and community.

The paintings produced here are sold globally — on Amazon, eBay, and in furniture stores worldwide, often marketed as "hand-painted originals." The village has become a tourist attraction in its own right, offering a uniquely Shenzhen blend of manufacturing efficiency and artistic skill.`}
        hours="Always open (stalls: 9:00–21:00)"
        price="Free to visit"
        nearestSubway="Dafen Station, Line 3"
        bestTime="Morning (9:00–12:00) when artists are working and crowds are thin"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0900%2C22.5800%2C114.1100%2C22.5950&layer=mapnik&marker=22.5878%2C114.0994"
        address="Dafen Village, Longgang District"
        addressZh="深圳市龙岗区大芬村"
        relatedLinks={[]}
        relatedArticles={[
          { title: "OCT Loft", description: "Shenzhen's other art district — galleries in a converted factory.", href: "/destinations/shenzhen/what-to-do/oct-loft" },
          { title: "Huaqiangbei", description: "Another side of Shenzhen manufacturing — electronics.", href: "/destinations/shenzhen/what-to-do/huaqiangbei" },
          { title: "Where to Eat in Shenzhen", description: "Dim sum, Hakka food, and more.", href: "/destinations/shenzhen/where-to-eat" },
          { title: "Shenzhen Local Tips", description: "Practical advice for your visit.", href: "/destinations/shenzhen/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Bargain for original paintings — start at 50% of asking price. Copies are already cheap at ¥30–100.' },
          { type: 'tip', text: 'Shipping paintings home is easy — most shops offer international shipping for ¥50–200 depending on size.' },
          { type: 'photo', text: 'The best photos are of artists at work. Ask permission first — most are happy to pose for a quick shot.' },
          { type: 'tip', text: 'Come in the morning (9–12) when artists are actively painting. Afternoons are slower.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 3 to Dafen Station (大芬站), Exit A1. Walk 2 minutes south on Dafen Oil Painting Street to the village entrance. The journey from Futian takes about 30 minutes.',
          whatToSkip: 'Skip the first few stalls near the entrance — they\'re the most tourist-priced. Walk deeper into the alleys for better quality and lower prices. The "Dafen Art Museum" at the entrance is small and skippable unless you have a specific interest in the village\'s history.',
          photographyTips: 'The narrow alleys create beautiful light shafts in the morning. Artists working at easels with paint-stained hands make the best subjects. Ask before shooting close-ups of their work — a smile and gesture usually gets a nod.',
        }}
      />
    </>
  );
}