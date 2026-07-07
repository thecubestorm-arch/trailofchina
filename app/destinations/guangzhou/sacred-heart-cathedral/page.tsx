import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sacred Heart Cathedral (石室圣心大教堂) — Guangzhou\'s Notre-Dame',
  description: "Sacred Heart Cathedral is Guangzhou's Gothic masterpiece — built entirely from granite in 1863, it's the largest Gothic cathedral in China and Southeast Asia.",
  keywords: ['Sacred Heart Cathedral Guangzhou', '石室圣心大教堂', 'Guangzhou cathedral', 'Gothic church China'],
  openGraph: {
    title: 'Sacred Heart Cathedral (石室圣心大教堂) — Guangzhou\'s Notre-Dame',
    description: 'A Gothic cathedral built entirely from granite in 1863 — Guangzhou\'s Notre-Dame.',
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/sacred-heart-cathedral',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Sacred Heart Cathedral Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/sacred-heart-cathedral' },
};

const faqJsonLd = faqPageSchema([
  { question: 'Is Sacred Heart Cathedral free to visit?', answer: 'Yes, entry is free. Donations are welcome but not required.' },
  { question: 'What are the opening hours?', answer: 'Open 8:00–17:30 Tuesday–Saturday, 7:00–17:30 Sunday. Closed Monday. Mass is held Sunday mornings.' },
  { question: 'How do I get to Sacred Heart Cathedral?', answer: 'Take Metro Line 6 to Yide Road Station (一德路站), Exit A. Walk 5 minutes south. Or Line 1 to Huangsha and walk across to Shamian Island first.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Sacred Heart Cathedral', path: '/destinations/guangzhou/what-to-do/sacred-heart-cathedral' },
]);

export default function SacredHeartCathedralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Sacred Heart Cathedral"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="石室圣心大教堂"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-cathedral-1/800/600', alt: 'Sacred Heart Cathedral Gothic granite facade' },
          { src: 'https://picsum.photos/seed/guangzhou-cathedral-2/800/600', alt: 'Twin spires of Sacred Heart Cathedral' },
          { src: 'https://picsum.photos/seed/guangzhou-cathedral-3/800/600', alt: 'Interior stained glass windows' },
          { src: 'https://picsum.photos/seed/guangzhou-cathedral-4/800/600', alt: 'Cathedral plaza and surrounding area' },
          { src: 'https://picsum.photos/seed/guangzhou-cathedral-5/800/600', alt: 'Granite detail on cathedral exterior' },
        ]}
        hook="Guangzhou's Notre-Dame — a Gothic cathedral built entirely from granite in 1863, the largest in China and Southeast Asia."
        quickInfo={{ price: 'Free', hours: '8:00–17:30 (closed Mon)', bestTime: 'Morning (8–10 AM)', metro: 'Yide Road (Line 6)' }}
        whyYouLoveIt={`Nothing in Guangzhou is more surprising than the Sacred Heart Cathedral. You're walking through a dense Chinese neighborhood of dried seafood shops and wholesale markets, you turn a corner, and suddenly there's a full Gothic cathedral with twin spires reaching 58 meters into the sky. Built entirely from granite in 1863, it's the largest Gothic cathedral in China and Southeast Asia.

The interior is equally striking — stained glass windows, ribbed vaults, and a nave that would look at home in Paris. The contrast between the European architecture and the Chinese neighborhood surrounding it is what makes it unforgettable.

It's a 10-minute walk from Shamian Island, so pair the two for a perfect morning of colonial architecture.`}
        description={`The Sacred Heart Cathedral (石室圣心大教堂), also known as the Stone Chamber, is a Gothic Revival Catholic cathedral built between 1863 and 1888. Constructed entirely from granite, it's the largest Gothic cathedral in China and Southeast Asia. The twin spires reach 58 meters, and the cathedral can seat over 1,400 people.

The cathedral was designed by French architects and built by Chinese craftsmen, creating a fascinating fusion of European Gothic architecture with subtle Chinese elements. It survived the Cultural Revolution and was fully restored in 2006. Mass is still held every Sunday morning.`}
        hours="8:00–17:30 Tuesday–Saturday, 7:00–17:30 Sunday (closed Monday)"
        price="Free"
        nearestSubway="Yide Road Station (Line 6), Exit A"
        bestTime="Morning (8–10 AM) for fewer crowds and best light"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2350%2C23.0950%2C113.2650%2C23.1250&layer=mapnik&marker=23.1117%2C113.2508"
        address="Yide Road, Yuexiu District"
        addressZh="广州市越秀区一德路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Shamian Island", description: "10-minute walk from the cathedral.", href: "/destinations/guangzhou/what-to-do/shamian-island" },
          { title: "Beijing Road", description: "2,000-year-old shopping street nearby.", href: "/destinations/guangzhou/what-to-do/beijing-road" },
          { title: "Dim Sum in Guangzhou", description: "The city that invented it.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
        ]}
        tips={[
          { type: 'tip', text: 'Closed on Mondays. Sunday morning mass is at 7:00 and 9:00 AM — visitors are welcome but be respectful.' },
          { type: 'tip', text: 'Dress modestly — shoulders and knees should be covered. No shorts or tank tops.' },
          { type: 'photo', text: 'The best exterior shot is from the plaza in front, with both spires visible. Morning light is best.' },
          { type: 'tip', text: 'Pair with Shamian Island — it\'s a 10-minute walk. A perfect colonial architecture morning.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 6 to Yide Road Station (一德路站), Exit A. Walk 5 minutes south. From Shamian Island, it\'s a 10-minute walk east.',
          whatToSkip: 'Skip the dried seafood markets around the cathedral unless you want to see local wholesale trading — they\'re authentic but not tourist-oriented.',
          photographyTips: 'The twin spires against a blue sky is the classic shot. Inside, the stained glass windows create beautiful colored light patterns in the morning. The contrast between Gothic architecture and the surrounding Chinese neighborhood makes for unique photos.',
        }}
      />
    </>
  );
}