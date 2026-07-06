import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Beijing Road (北京路) — 2,000-Year-Old Shopping Street',
  description: "Beijing Road is a 2,000-year-old shopping street with glass-covered ancient road visible beneath your feet — shop where Romans walked the Silk Road.",
  keywords: ['Beijing Road Guangzhou', '北京路', 'Guangzhou shopping', 'ancient road Guangzhou'],
  openGraph: {
    title: 'Beijing Road (北京路) — 2,000-Year-Old Shopping Street',
    description: 'Shop where ancient traders walked — glass panels reveal 2,000 years of road beneath your feet.',
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/beijing-road',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Beijing Road Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/beijing-road' },
};

const faqJsonLd = faqPageSchema([
  { question: 'What can I see under the glass at Beijing Road?', answer: 'Glass panels in the pavement reveal layers of ancient road dating back to the Tang, Song, Yuan, Ming, and Qing dynasties — over 2,000 years of road surface visible beneath your feet.' },
  { question: 'Is Beijing Road good for shopping?', answer: 'Yes — it\'s one of Guangzhou\'s main shopping streets with department stores, fashion chains, and local boutiques. But avoid the tourist-trap dim sum restaurants here.' },
  { question: 'How do I get to Beijing Road?', answer: 'Take Metro Line 6 to Beijing Road Station (北京路站) or Line 1/2 to Gongyuanqian Station (公园前站).' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Beijing Road', path: '/destinations/guangzhou/what-to-do/beijing-road' },
]);

export default function BeijingRoadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Beijing Road"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="北京路"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-beijing-road-1/800/600', alt: 'Beijing Road shopping street with glass panels showing ancient road' },
          { src: 'https://picsum.photos/seed/guangzhou-beijing-road-2/800/600', alt: 'Ancient road layers visible under glass' },
          { src: 'https://picsum.photos/seed/guangzhou-beijing-road-3/800/600', alt: 'Beijing Road at night with neon signs' },
          { src: 'https://picsum.photos/seed/guangzhou-beijing-road-4/800/600', alt: 'Pedestrian shopping area on Beijing Road' },
          { src: 'https://picsum.photos/seed/guangzhou-beijing-road-5/800/600', alt: 'Historical marker showing dynasties of road layers' },
        ]}
        hook="A 2,000-year-old shopping street — with glass panels in the floor revealing the ancient road beneath your feet."
        quickInfo={{ price: 'Free', hours: '10:00–22:00 (shops)', bestTime: 'Evening (6–9 PM)', metro: 'Beijing Road (Line 6)' }}
        whyYouLoveIt={`Beijing Road is the only shopping street in the world where you can literally walk over 2,000 years of history. Glass panels set into the pavement reveal layers of ancient road — Tang dynasty stones, Song dynasty paving, Ming dynasty repairs — each layer visible beneath the modern surface.

Above ground, it's Guangzhou's busiest pedestrian shopping street. Below ground, it's an archaeological site. The contrast is pure Guangzhou — a city that's been trading for two millennia and shows no sign of stopping.

The shopping itself is decent — department stores, fashion chains, and Cantonese snack shops. But the real reason to come is to look down. Those glass panels are the most visceral reminder that Guangzhou is one of the oldest continuously inhabited cities in the world.`}
        description={`Beijing Road (北京路) is a 1.5 km pedestrian shopping street in Yuexiu District. Archaeological excavations in 2002 revealed 11 layers of ancient road surface dating from the Tang (618–907) through Qing (1644–1912) dynasties. The most significant layers are preserved under glass panels in the street for visitors to see.

The street has been a commercial center for over 2,000 years, making it one of the longest continuously operating shopping streets on Earth. Today it's a modern pedestrian mall with department stores, restaurants, and entertainment venues.`}
        hours="Always open (pedestrian street); shops 10:00–22:00"
        price="Free"
        nearestSubway="Beijing Road Station (Line 6) or Gongyuanqian (Lines 1/2)"
        bestTime="Evenings (6–9 PM) when the street is liveliest"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2500%2C23.1100%2C113.2800%2C23.1400&layer=mapnik&marker=23.1264%2C113.2636"
        address="Beijing Road, Yuexiu District"
        addressZh="广州市越秀区北京路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Shamian Island", description: "Colonial architecture nearby.", href: "/destinations/guangzhou/what-to-do/shamian-island" },
          { title: "Dim Sum in Guangzhou", description: "The original, not the Beijing Road version.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
          { title: "Yuexiu Park", description: "Guangzhou's green lung.", href: "/destinations/guangzhou/what-to-do/yuexiu-park" },
        ]}
        tips={[
          { type: 'tip', text: 'Look down — the glass panels near the center of the street show the ancient road layers. Informational plaques mark each dynasty.' },
          { type: 'tip', text: 'Avoid the dim sum restaurants on Beijing Road — they\'re tourist traps. Real dim sum is in neighborhood restaurants, not shopping malls.' },
          { type: 'photo', text: 'The glass panels with ancient road are the unique shot. Shoot straight down to capture the layers with informational plaques in frame.' },
          { type: 'tip', text: 'Come after 6 PM when the street lights up and the food stalls come out.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 6 to Beijing Road Station (北京路站) or Line 1/2 to Gongyuanqian Station (公园前站). The pedestrian area starts directly outside.',
          whatToSkip: 'The Beijing Road dim sum restaurants are overpriced and mediocre. Walk 10 minutes into the side streets for the real thing. Also skip the generic fashion chains — you can find those anywhere.',
          photographyTips: 'The glass panels showing ancient road layers are the unique photo. Shoot from directly above with the informational plaques in frame. At night, the neon signs create a vibrant street scene.',
        }}
      />
    </>
  );
}