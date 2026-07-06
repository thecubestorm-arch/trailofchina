import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dim Sum in Guangzhou (早茶/饮茶) — Where It Was Invented',
  description: "Guangzhou INVENTED dim sum. The real thing — har gow, siu mai, char siu bao, and cheung fun in the city where it all started.",
  keywords: ['dim sum Guangzhou', 'Guangzhou morning tea', '早茶', '饮茶', 'har gow Guangzhou', 'Cantonese dim sum'],
  openGraph: {
    title: 'Dim Sum in Guangzhou (早茶/饮茶) — Where It Was Invented',
    description: 'Guangzhou INVENTED dim sum. This is the real thing.',
    url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/dim-sum',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Dim Sum in Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/dim-sum' },
};

const faqJsonLd = faqPageSchema([
  { question: 'What time should I go for dim sum in Guangzhou?', answer: 'Arrive before 8 AM on weekends for the freshest dishes and liveliest atmosphere. Weekday mornings are less crowded. The best restaurants start serving at 6:30 AM.' },
  { question: 'How much does dim sum cost in Guangzhou?', answer: '¥50–120 per person depending on the restaurant. Neighborhood places are ¥30–60, hotel restaurants run ¥150+.' },
  { question: 'What is the tea-tapping etiquette?', answer: 'When someone pours tea for you, tap two fingers (index and middle) lightly on the table near your cup. It means "thank you" without interrupting conversation.' },
  { question: 'What are the must-order dim sum dishes?', answer: 'Har gow (shrimp dumplings), siu mai (pork dumplings), char siu bao (BBQ pork buns), cheung fun (rice noodle rolls), and egg tarts. In Guangzhou, also try chicken feet (凤爪).' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Eat', path: '/destinations/guangzhou/where-to-eat' },
  { name: 'Dim Sum', path: '/destinations/guangzhou/where-to-eat/dim-sum' },
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
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Eat', href: '/destinations/guangzhou/where-to-eat' },
        ]}
        nameZh="早茶/饮茶"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-dim-sum-1/800/600', alt: 'Traditional dim sum bamboo steamers with har gow and siu mai' },
          { src: 'https://picsum.photos/seed/guangzhou-dim-sum-2/800/600', alt: 'Char siu bao and egg tarts' },
          { src: 'https://picsum.photos/seed/guangzhou-dim-sum-3/800/600', alt: 'Guangzhou dim sum restaurant morning scene' },
          { src: 'https://picsum.photos/seed/guangzhou-dim-sum-4/800/600', alt: 'Tea pouring with finger tapping etiquette' },
          { src: 'https://picsum.photos/seed/guangzhou-dim-sum-5/800/600', alt: 'Cheung fun rice noodle rolls with soy sauce' },
        ]}
        hook="Guangzhou INVENTED dim sum. This is the real thing — not the version you get abroad."
        quickInfo={{ price: '¥50–120/person', hours: '6:30–14:00', bestTime: 'Weekends 7:00–9:00', metro: 'Multiple (Yuexiu/Tianhe)' }}
        whyYouLoveIt={`Dim sum in Guangzhou is to dim sum everywhere else what pizza in Naples is to pizza everywhere else — the original, the benchmark, the thing against which all others are measured.

The Cantonese tradition of yum cha (饮茶, "drink tea") started here centuries ago. Families gather on weekend mornings for hours, ordering small dishes from carts or menus, drinking pot after pot of pu'er or chrysanthemum tea, and catching up on life. The must-orders are the classics: har gow (translucent shrimp dumplings), siu mai (open-topped pork dumplings), char siu bao (fluffy BBQ pork buns), and cheung fun (silky rice noodle rolls).

In Guangzhou, you'll also find items that rarely appear abroad: chicken feet (凤爪, feng zhao) braised in black bean sauce, steamed spare ribs with garlic, and rice noodle rolls filled with either shrimp, beef, or pork. Come before 8 AM on weekends for the freshest dishes and the full social experience.`}
        description={`Dim sum (早茶/饮茶, literally "morning tea" or "drink tea") originated in Guangzhou and the Pearl River Delta. The tradition dates back to teahouses along the Silk Road where travelers stopped for tea and small dishes. Over centuries, it evolved into the Cantonese institution of yum cha — a leisurely morning meal of small shared dishes served with endless tea.

Guangzhou's dim sum restaurants range from century-old institutions to modern high-rises. The best are in Yuexiu and Liwan districts, where competition keeps quality at the highest standard in the world.`}
        hours="6:30–14:00 (best before 11:00)"
        price="¥50–120 per person"
        nearestSubway="Multiple stations in Yuexiu, Liwan, and Tianhe"
        bestTime="Weekend mornings (7:00–9:00) for atmosphere and freshness"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2300%2C23.1100%2C113.2700%2C23.1400&layer=mapnik&marker=23.1297%2C113.2400"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Wonton Noodles", description: "Cantonese comfort food perfected.", href: "/destinations/guangzhou/where-to-eat/wonton-noodles" },
          { title: "Roast Goose", description: "The dish that defines Guangzhou.", href: "/destinations/guangzhou/where-to-eat/roast-goose" },
          { title: "Shamian Island", description: "Walk off the dim sum.", href: "/destinations/guangzhou/what-to-do/shamian-island" },
          { title: "Guangzhou Local Tips", description: "Dim sum etiquette and more.", href: "/destinations/guangzhou/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Arrive before 8 AM on weekends for the freshest dishes and the full selection from the carts.' },
          { type: 'tip', text: 'Must-order: har gow, siu mai, char siu bao, cheung fun, and egg tarts. In Guangzhou, also try chicken feet (凤爪).' },
          { type: 'tip', text: 'Tea etiquette: pour tea for others before yourself. When someone pours for you, tap two fingers on the table to say thanks.' },
          { type: 'tip', text: 'Avoid dim sum restaurants on Beijing Road — they\'re tourist traps. Go to neighborhood restaurants in Liwan or Yuexiu.' },
          { type: 'photo', text: 'Dim sum bamboo steamers in morning light make great photos. Ask before photographing other diners.' },
        ]}
        practicalDetails={{
          gettingThere: 'The best dim sum restaurants are in Liwan District (near Shamian Island) and Yuexiu District (near Beijing Road). Take Line 1 to Huangsha or Chen Clan Academy. Tianhe also has excellent options near Tiyu Xilu.',
          whatToSkip: 'Skip the overpriced hotel dim sum restaurants unless you want the luxury experience. Skip Beijing Road dim sum — overpriced and mediocre. The best dim sum is in neighborhood restaurants where locals eat.',
        }}
      />
    </>
  );
}