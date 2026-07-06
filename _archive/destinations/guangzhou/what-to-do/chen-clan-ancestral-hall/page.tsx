import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Chen Clan Ancestral Hall (陈家祠) — Lingnan Architecture Masterpiece',
  description: 'The Chen Clan Ancestral Hall is the finest example of Lingnan architecture in China — wood carvings, stone carvings, brick carvings, and ceramic work that took generations to complete.',
  keywords: ['Chen Clan Ancestral Hall', '陈家祠', 'Guangzhou Lingnan architecture', 'Chen Clan Academy'],
  openGraph: {
    title: 'Chen Clan Ancestral Hall (陈家祠) — Lingnan Architecture Masterpiece',
    description: 'The finest Lingnan architecture in China — wood, stone, and ceramic carvings that took generations.',
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Chen Clan Ancestral Hall Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How much does the Chen Clan Ancestral Hall cost?', answer: '¥10. It\'s one of the best values in Guangzhou.' },
  { question: 'How long should I spend at the Chen Clan Ancestral Hall?', answer: '1–1.5 hours is enough. The carvings deserve slow examination but the complex is not huge.' },
  { question: 'How do I get to the Chen Clan Ancestral Hall?', answer: 'Take Metro Line 1 or 8 to Chen Clan Academy Station (陈家祠站). Exit D leads directly to the entrance.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Chen Clan Ancestral Hall', path: '/destinations/guangzhou/what-to-do/chen-clan-ancestral-hall' },
]);

export default function ChenClanAncestralHallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Chen Clan Ancestral Hall"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="陈家祠"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-chen-clan-1/800/600', alt: 'Chen Clan Ancestral Hall ornate roof carvings' },
          { src: 'https://picsum.photos/seed/guangzhou-chen-clan-2/800/600', alt: 'Intricate wood carvings inside the hall' },
          { src: 'https://picsum.photos/seed/guangzhou-chen-clan-3/800/600', alt: 'Ceramic figurines on the roof ridge' },
          { src: 'https://picsum.photos/seed/guangzhou-chen-clan-4/800/600', alt: 'Courtyard with stone carvings' },
          { src: 'https://picsum.photos/seed/guangzhou-chen-clan-5/800/600', alt: 'Detailed brick carving on exterior wall' },
        ]}
        hook="A Lingnan architecture masterpiece with wood and stone carvings so detailed they take your breath away — for ¥10."
        quickInfo={{ price: '¥10', hours: '8:30–17:30', bestTime: 'Weekday mornings', metro: 'Chen Clan Academy (Lines 1/8)' }}
        whyYouLoveIt={`The Chen Clan Ancestral Hall is the best ¥10 you'll spend in China. This 1894 complex was built by 72 Chen family clans as a combination ancestral hall and exam preparation academy. What makes it extraordinary is the craftsmanship — every surface is carved, painted, or tiled.

The roof ridges alone are masterpieces. Ceramic figurines depict scenes from Chinese opera and mythology, each one hand-molded and glazed in vivid colors. The wood carvings inside show similar detail — birds, flowers, and mythical creatures rendered in mahogany and camphor wood. Look up at the beams and you'll find carvings within carvings, stories within stories.

It's also a functioning folk art museum now, with exhibits on Cantonese embroidery, ivory carving, and the other crafts that made Guangzhou famous.`}
        description={`The Chen Clan Ancestral Hall (陈家祠), also called the Chen Clan Academy, is a 1894 complex built by 72 Chen family clans from across Guangdong province. It's the finest surviving example of Lingnan (South China) architecture, featuring wood carvings, stone carvings, brick carvings, ceramic figurines, and ironwork of extraordinary detail.

The hall now houses the Guangdong Folk Art Museum, with exhibits on Cantonese embroidery, ivory carving, porcelain, and other regional crafts. The building itself is the main attraction — the ornamental roof ridges, intricate window screens, and carved beams represent the pinnacle of Lingnan decorative arts.`}
        hours="8:30–17:30 (last entry 17:00)"
        price="¥10"
        nearestSubway="Chen Clan Academy Station, Lines 1/8"
        bestTime="Weekday mornings (9:00–11:00) for fewer crowds"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2000%2C23.1100%2C113.2300%2C23.1400&layer=mapnik&marker=23.1261%2C113.2150"
        address="Zhongshan 7th Road, Liwan District"
        addressZh="广州市荔湾区中山七路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Shamian Island", description: "Colonial architecture a short walk away.", href: "/destinations/guangzhou/what-to-do/shamian-island" },
          { title: "Dim Sum in Guangzhou", description: "The best food in China.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
          { title: "Beijing Road", description: "2,000-year-old shopping street.", href: "/destinations/guangzhou/what-to-do/beijing-road" },
        ]}
        tips={[
          { type: 'tip', text: '¥10 entry — one of the best values in all of China. Budget 1–1.5 hours.' },
          { type: 'tip', text: 'Don\'t miss the roof ridges — the ceramic figurines depicting opera scenes are the highlight.' },
          { type: 'photo', text: 'The main courtyard from the entrance gives the best overview shot. Get there early for unobstructed views.' },
          { type: 'tip', text: 'The folk art museum inside is worth 15 minutes — Cantonese embroidery and ivory carving exhibits.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 1 or 8 to Chen Clan Academy Station (陈家祠站). Exit D leads directly to the entrance. It\'s a 10-minute walk from Shamian Island.',
          whatToSkip: 'The gift shop has overpriced souvenirs. Skip it and spend your time examining the carvings instead — they\'re the real art.',
          photographyTips: 'The ceramic roof ridges are the most photogenic detail. Use a telephoto lens or zoom to capture the figurines. The main courtyard shot from the entrance is the classic composition.',
        }}
      />
    </>
  );
}