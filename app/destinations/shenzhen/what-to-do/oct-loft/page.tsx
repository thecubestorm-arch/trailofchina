import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'OCT Loft (华侨城创意文化园) — Shenzhen\'s Art District',
  description: 'Shenzhen\'s creative hub — a former factory complex turned art district with galleries, design shops, craft coffee, and street art. Free to visit.',
  keywords: ['OCT Loft', 'Shenzhen art district', 'OCT Creative Culture Park', 'Shenzhen galleries'],
  openGraph: {
    title: 'OCT Loft (华侨城创意文化园) — Shenzhen\'s Art District',
    description: 'A former factory turned creative hub with galleries, cafés, and street art.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/oct-loft',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'OCT Loft - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'How do I get to OCT Loft?', answer: 'Take Metro Line 1 to Qiaocheng East Station (侨城东站), Exit A. Walk 10 minutes west to the OCT Loft entrance.' },
  { question: 'Is OCT Loft free?', answer: 'Yes, entry is free. Some individual galleries may charge for special exhibitions, but most are free.' },
  { question: 'What is there to do at OCT Loft?', answer: 'Browse contemporary art galleries, drink craft coffee, shop at design stores, photograph street art, and explore the converted factory buildings.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'OCT Loft', path: '/destinations/shenzhen/what-to-do/oct-loft' },
]);

export default function OCTLoftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="OCT Loft"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="华侨城创意文化园"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-oct-1/800/600', alt: 'OCT Loft industrial art buildings' },
          { src: 'https://picsum.photos/seed/shenzhen-oct-2/800/600', alt: 'Street art murals at OCT Loft' },
          { src: 'https://picsum.photos/seed/shenzhen-oct-3/800/600', alt: 'Craft coffee shop in converted factory' },
          { src: 'https://picsum.photos/seed/shenzhen-oct-4/800/600', alt: 'OCT Loft gallery interior' },
          { src: 'https://picsum.photos/seed/shenzhen-oct-5/800/600', alt: 'OCT Loft outdoor art installations' },
        ]}
        hook="Shenzhen's art district — former factory turned creative hub with galleries, cafés, and street art. The closest thing to Beijing's 798, but smaller and calmer."
        quickInfo={{ price: 'Free', hours: 'Always open', bestTime: 'Afternoon (14:00–18:00)', metro: 'Qiaocheng East (Line 1)' }}
        whyYouLoveIt={`OCT Loft is what happens when a city with more money than history decides to create an art district. The result is surprisingly good — a cluster of 1980s factory buildings converted into galleries, design studios, independent bookshops, and craft coffee shops.

The space feels genuinely creative rather than corporately curated. There's graffiti on walls that hasn't been cleaned up, studios with doors ajar, and a slow-afternoon vibe that's the polar opposite of Huaqiangbei's intensity. The best approach is to wander without a plan — duck into any open door, browse whatever gallery you find, and stop for coffee when the mood strikes.

Weekends bring flea markets and live music. Weekdays are quieter and better for photography. Come in the late afternoon when the light hits the brick buildings and the craft coffee crowd starts to fill the courtyards.`}
        description={`OCT Loft (华侨城创意文化园, OCT Creative Culture Park) is a creative arts district in Nanshan District, Shenzhen. Originally built as an industrial complex in the 1980s, the factories were converted into cultural spaces starting in 2004, making it one of China's earliest creative industry redevelopment projects.

The 150,000 square meter complex houses contemporary art galleries, design studios, architecture firms, independent bookstores, craft coffee shops, and restaurants. The industrial aesthetic — exposed brick, steel beams, and concrete floors — has been preserved, giving the space an authentic feel despite its corporate origins (OCT Group is a state-owned enterprise).

Major tenants include the OCT Contemporary Art Terminal (OCAT), one of China's leading contemporary art institutions, and numerous smaller galleries showing work by emerging Chinese and international artists. The outdoor spaces feature murals, installations, and weekend markets.`}
        hours="Always open (galleries: 10:00–18:00)"
        price="Free to visit"
        nearestSubway="Qiaocheng East Station, Line 1"
        bestTime="Late afternoon (14:00–18:00) for golden-hour photography and café atmosphere"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.9850%2C22.5300%2C114.0050%2C22.5480&layer=mapnik&marker=22.5392%2C113.9958"
        address="OCT Creative Culture Park, Nanshan District"
        addressZh="深圳市南山区华侨城创意文化园"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Dafen Oil Painting Village", description: "The other side of Shenzhen's art scene — mass production.", href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village" },
          { title: "Window of the World", description: "5 minutes south of OCT Loft — a very different kind of attraction.", href: "/destinations/shenzhen/what-to-do/window-of-the-world" },
          { title: "Where to Eat in Shenzhen", description: "Best food near Nanshan and beyond.", href: "/destinations/shenzhen/where-to-eat" },
          { title: "Shenzhen Local Tips", description: "Practical advice for your visit.", href: "/destinations/shenzhen/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Visit on weekends for flea markets and pop-up events. Weekdays are quieter for gallery browsing.' },
          { type: 'tip', text: 'The coffee scene here is genuine — try GEE Coffee or Kaffeine for some of Shenzhen\'s best.' },
          { type: 'photo', text: 'The murals and industrial architecture make OCT Loft one of Shenzhen\'s most photogenic spots. Late afternoon light is best.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 1 to Qiaocheng East Station (侨城东站), Exit A. Walk 10 minutes west along Enping Road. From Window of the World station, it\'s a 15-minute walk south. DiDi from Futian costs ¥15–20.',
          whatToSkip: 'Skip the OCT Museum if you\'re short on time — the independent galleries are more interesting and free. The gift shops sell the same design items you\'ll find in any Chinese museum shop.',
          photographyTips: 'The industrial brick buildings and murals are the money shots. Late afternoon sun creates dramatic shadows against the steel beams. The courtyards between buildings offer the best compositions.',
        }}
      />
    </>
  );
}