import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Shamian Island (沙面岛) — Guangzhou\'s Colonial Time Capsule',
  description: "Shamian Island is Guangzhou's time capsule — 150-year-old European buildings under banyan trees, walking distance from the chaos of the city.",
  keywords: ['Shamian Island', '沙面岛', 'Guangzhou colonial architecture', 'Shamian European buildings'],
  openGraph: {
    title: 'Shamian Island (沙面岛) — Guangzhou\'s Colonial Time Capsule',
    description: "150-year-old European buildings under banyan trees — Guangzhou's most peaceful escape.",
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/shamian-island',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shamian Island Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/shamian-island' },
};

const faqJsonLd = faqPageSchema([
  { question: 'Is Shamian Island free to visit?', answer: 'Yes, completely free. It\'s a public neighborhood — you just walk in. No tickets, no gates.' },
  { question: 'How do I get to Shamian Island?', answer: 'Take Metro Line 1 to Huangsha Station (黄沙站), Exit D, then walk across the bridge. Or Line 6 to Cultural Park Station (文化公园站).' },
  { question: 'How long should I spend on Shamian Island?', answer: '1.5–2 hours is enough for a leisurely walk through the island. Photography enthusiasts should budget 3 hours.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Shamian Island', path: '/destinations/guangzhou/what-to-do/shamian-island' },
]);

export default function ShamianIslandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Shamian Island"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="沙面岛"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-shamian-1/800/600', alt: 'Shamian Island tree-lined colonial boulevard' },
          { src: 'https://picsum.photos/seed/guangzhou-shamian-2/800/600', alt: 'European colonial buildings on Shamian Island' },
          { src: 'https://picsum.photos/seed/guangzhou-shamian-3/800/600', alt: 'Banyan trees shading Shamian Island paths' },
          { src: 'https://picsum.photos/seed/guangzhou-shamian-4/800/600', alt: 'Historic French consulate building on Shamian' },
          { src: 'https://picsum.photos/seed/guangzhou-shamian-5/800/600', alt: 'Couples taking wedding photos on Shamian Island' },
        ]}
        hook="Shamian Island is Guangzhou's time capsule — 150-year-old European buildings under banyan trees, walking distance from the chaos of the city."
        quickInfo={{ price: 'Free', hours: 'Always open', bestTime: 'Morning (7–10 AM)', metro: 'Huangsha (Line 1)' }}
        whyYouLoveIt={`Shamian Island is the kind of place that makes you forget you're in China. You cross a bridge from the roaring traffic of Huangsha and suddenly you're on a quiet island with 150-year-old French and British colonial buildings, enormous banyan trees, and bougainvillea climbing every wall. It's Guangzhou at its most gentle.

The island was a foreign concession from 1859 to 1949, and the architecture has been beautifully preserved. Wide tree-lined avenues, wrought-iron balconies, and pastel-colored facades — it feels more like a quiet Mediterranean town than a Chinese metropolis. Wedding photographers love it; you'll see couples in traditional Chinese wedding attire posing in front of Victorian buildings, which is its own kind of beautiful contrast.`}
        description={`Shamian Island (沙面岛) is a 0.3 km² island in the Pearl River that served as the British and French concession from 1859 to 1946. The colonial buildings have been preserved and restored, creating Guangzhou's most atmospheric walking area. The entire island is pedestrian-friendly — no through traffic, just tree-lined boulevards and historic buildings.

The island has over 150 European-style buildings including the former French Consulate, British Consulate, and various trading houses. Many have been converted into cafés, boutiques, and small museums. It's a favorite spot for wedding photography and morning walks.`}
        hours="Always open (outdoor neighborhood)"
        price="Free"
        nearestSubway="Huangsha Station (Line 1) or Cultural Park Station (Line 6)"
        bestTime="Early morning (7–10 AM) for peaceful walks and the best light"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2250%2C23.0950%2C113.2500%2C23.1200&layer=mapnik&marker=23.1075%2C113.2389"
        address="Shamian Island, Liwan District"
        addressZh="广州市荔湾区沙面岛"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Sacred Heart Cathedral", description: "Gothic granite cathedral nearby.", href: "/destinations/guangzhou/what-to-do/sacred-heart-cathedral" },
          { title: "Dim Sum in Guangzhou", description: "The city that invented it.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
          { title: "Beijing Road", description: "2,000-year-old shopping street.", href: "/destinations/guangzhou/what-to-do/beijing-road" },
          { title: "Guangzhou Local Tips", description: "Cantonese phrases and dim sum etiquette.", href: "/destinations/guangzhou/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Go early morning (7–10 AM) for the best light and fewest crowds. Locals do tai chi along the riverfront.' },
          { type: 'photo', text: 'The banyan trees create beautiful dappled light. The south side overlooking the Pearl River is the most photogenic.' },
          { type: 'tip', text: 'The island is small — 1.5 hours is enough. Pair it with Sacred Heart Cathedral (10 min walk).' },
          { type: 'tip', text: 'There are several good cafés in restored colonial buildings. The Rose Garden café is a local favorite.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 1 to Huangsha Station (黄沙站), Exit D. Walk across the bridge to the island — it\'s a 3-minute walk. From Line 6, get off at Cultural Park Station (文化公园站). DiDi from Tianhe costs ¥20–30.',
          whatToSkip: 'Skip the tourist-oriented souvenir shops — they sell generic Chinese crafts at inflated prices. The real value of Shamian is the architecture and atmosphere, which is free.',
          photographyTips: 'The south riverfront promenade gives the best overview shots. For detail shots, focus on the wrought-iron balconies, banyan root patterns, and doorways. Morning light is golden through the trees.',
        }}
      />
    </>
  );
}