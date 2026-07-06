import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Yuexiu Park (越秀公园) — Guangzhou\'s Green Lung',
  description: "Yuexiu Park is Guangzhou's largest park — home to the Five Rams Statue (city symbol), 600-year-old Zhenhai Tower, and panoramic city views.",
  keywords: ['Yuexiu Park', '越秀公园', 'Five Rams Statue Guangzhou', 'Zhenhai Tower'],
  openGraph: {
    title: 'Yuexiu Park (越秀公园) — Guangzhou\'s Green Lung',
    description: "Home to the Five Rams Statue and 600-year-old Zhenhai Tower — Guangzhou's green lung.",
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/yuexiu-park',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Yuexiu Park Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/yuexiu-park' },
};

const faqJsonLd = faqPageSchema([
  { question: 'Is Yuexiu Park free?', answer: 'Yes, Yuexiu Park is completely free. Zhenhai Tower (Guangzhou Museum) has a ¥10 entrance fee.' },
  { question: 'What is the Five Rams Statue?', answer: 'The Five Rams Statue (五羊石像) is Guangzhou\'s city symbol. Legend says five celestial rams brought rice to the city, ending famine. It\'s the most iconic landmark in Yuexiu Park.' },
  { question: 'How do I get to Yuexiu Park?', answer: 'Take Metro Line 2 to Yuexiu Park Station (越秀公园站). The main entrance is a 2-minute walk from Exit B.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Yuexiu Park', path: '/destinations/guangzhou/what-to-do/yuexiu-park' },
]);

export default function YuexiuParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Yuexiu Park"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="越秀公园"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-yuexiu-1/800/600', alt: 'Five Rams Statue in Yuexiu Park' },
          { src: 'https://picsum.photos/seed/guangzhou-yuexiu-2/800/600', alt: 'Zhenhai Tower panoramic view over Guangzhou' },
          { src: 'https://picsum.photos/seed/guangzhou-yuexiu-3/800/600', alt: 'Lake and gardens in Yuexiu Park' },
          { src: 'https://picsum.photos/seed/guangzhou-yuexiu-4/800/600', alt: 'Morning tai chi in Yuexiu Park' },
          { src: 'https://picsum.photos/seed/guangzhou-yuexiu-5/800/600', alt: 'Historic Ming Dynasty wall remains in park' },
        ]}
        hook="Guangzhou's green lung — home to the Five Rams Statue (the city symbol) and a 600-year-old tower with panoramic views."
        quickInfo={{ price: 'Free (museum ¥10)', hours: '6:00–22:00', bestTime: 'Early morning (7–9 AM)', metro: 'Yuexiu Park (Line 2)' }}
        whyYouLoveIt={`Yuexiu Park is where Guangzhou goes to breathe. At 86 hectares, it's the city's largest green space — and it packs in the Five Rams Statue (Guangzhou's symbol), Zhenhai Tower (600 years old with a panoramic rooftop), a lake, gardens, and a Ming Dynasty city wall.

Come early morning and you'll see a Guangzhou most tourists never experience: old people doing tai chi by the lake, joggers on the hill trails, and families eating breakfast on park benches. The Five Rams Statue is the mandatory photo — legend says five celestial rams brought rice to Guangzhou, which is why the city is nicknamed "Goat City" (羊城).

Climb Zhenhai Tower for the best free view of old Guangzhou. On clear days you can see the Canton Tower in the distance.`}
        description={`Yuexiu Park (越秀公园) is Guangzhou's largest and most historic park, covering 86 hectares in the center of the city. It contains the Five Rams Statue (五羊石像), the city's most iconic landmark; Zhenhai Tower (镇海楼), a 600-year-old Ming Dynasty watchtower now housing the Guangzhou Museum; a Ming Dynasty city wall; and several lakes and gardens.

The park is free and open from 6:00 AM to 10:00 PM. It's the best place in Guangzhou to experience local life — morning exercise groups, families, and elderly residents fill the park at dawn.`}
        hours="6:00–22:00 daily"
        price="Free (Guangzhou Museum in Zhenhai Tower: ¥10)"
        nearestSubway="Yuexiu Park Station, Line 2"
        bestTime="Early morning (7–9 AM) for local atmosphere"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2400%2C23.1250%2C113.2800%2C23.1550&layer=mapnik&marker=23.1414%2C113.2611"
        address="Jiefang North Road, Yuexiu District"
        addressZh="广州市越秀区解放北路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Chen Clan Ancestral Hall", description: "Lingnan architecture masterpiece, 10 min away.", href: "/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall" },
          { title: "Sacred Heart Cathedral", description: "Gothic granite cathedral nearby.", href: "/destinations/guangzhou/what-to-do/sacred-heart-cathedral" },
          { title: "Dim Sum in Guangzhou", description: "The best food in China.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
        ]}
        tips={[
          { type: 'tip', text: 'Go early morning (7–9 AM) to see locals doing tai chi, singing opera, and playing chess.' },
          { type: 'tip', text: 'The Five Rams Statue is at the south entrance. Zhenhai Tower is on the hill — a 10-minute walk up.' },
          { type: 'tip', text: 'Zhenhai Tower (¥10) has the best panoramic view of old Guangzhou. Worth the small fee.' },
          { type: 'photo', text: 'The Five Rams Statue from the front is the iconic shot. Zhenhai Tower at sunset gives great skyline photos.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 2 to Yuexiu Park Station (越秀公园站), Exit B. The main entrance is a 2-minute walk. From Beijing Road, it\'s a 15-minute walk north.',
          whatToSkip: 'Skip the park\'s food stalls — they\'re overpriced. Eat dim sum before you come or after you leave. The Guangzhou Museum in Zhenhai Tower is worth ¥10 but skip it if you\'re short on time.',
          photographyTips: 'The Five Rams Statue is most photogenic in morning light. Zhenhai Tower rooftop gives the best panoramic view of old Guangzhou. The Ming Dynasty wall remnants near the tower are also photogenic.',
        }}
      />
    </>
  );
}