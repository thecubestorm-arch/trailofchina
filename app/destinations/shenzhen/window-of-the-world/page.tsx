import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Window of the World (世界之窗) — Miniature World Landmarks',
  description: 'A theme park with 130 miniature world landmarks — a 1/3 scale Eiffel Tower, Taj Mahal, and Grand Canyon. Some find it cheesy, some love it. Undeniably unique.',
  keywords: ['Window of the World', 'Shenzhen theme park', 'miniature landmarks', '世界之窗'],
  openGraph: {
    title: 'Window of the World (世界之窗) — Miniature World Landmarks',
    description: '130 miniature world landmarks in one park — the Eiffel Tower at 1/3 scale and more.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/window-of-the-world',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Window of the World - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'Is Window of the World worth visiting?', answer: 'It depends on your taste. If you enjoy quirky, slightly kitschy experiences, it\'s a fun half-day. If you\'re looking for authentic culture, skip it and go to OCT Loft or Dafen instead.' },
  { question: 'How much does Window of the World cost?', answer: '¥220 for adults, ¥110 for children under 1.4m. Book online through WeChat for potential discounts.' },
  { question: 'How long should I spend at Window of the World?', answer: 'Allow 3–4 hours to see the main landmarks. A full day if you want to see everything and watch the evening shows.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'Window of the World', path: '/destinations/shenzhen/what-to-do/window-of-the-world' },
]);

export default function WindowOfTheWorldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Window of the World"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="世界之窗"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-window-1/800/600', alt: 'Miniature Eiffel Tower at Window of the World' },
          { src: 'https://picsum.photos/seed/shenzhen-window-2/800/600', alt: 'Miniature Taj Mahal replica' },
          { src: 'https://picsum.photos/seed/shenzhen-window-3/800/600', alt: 'Pyramids and Sphinx replicas' },
          { src: 'https://picsum.photos/seed/shenzhen-window-4/800/600', alt: 'Evening light show at Window of the World' },
          { src: 'https://picsum.photos/seed/shenzhen-window-5/800/600', alt: 'Panoramic view of miniature landmarks' },
        ]}
        hook="A 1/3 scale Eiffel Tower, miniature Taj Mahal, and 130 more world landmarks in one park — some find it cheesy, some love it. Undeniably unique."
        quickInfo={{ price: '¥220', hours: '9:00–22:30', bestTime: 'Afternoon + evening show', metro: 'Window of the World (Lines 1/2)' }}
        whyYouLoveIt={`Let's be honest: Window of the World is a bit ridiculous. It's a 48-hectare park filled with 130 miniature replicas of world landmarks — a 108-meter Eiffel Tower, a 1:1 Sphinx, and a Grand Canyon you can walk through in five minutes. But that's exactly what makes it memorable.

The 1/3 scale Eiffel Tower is the park's crown jewel and actually impressive up close — you can take an elevator to the observation deck. The miniature Taj Mahal is oddly detailed. And watching Chinese tourists pose in front of a fake Mount Rushmore while eating ice cream is a cultural experience in itself.

Come in the late afternoon to see the landmarks in golden hour light, then stay for the evening shows — dance performances, laser shows, and fireworks that somehow make the whole thing even more surreal. Is it authentic? No. Is it fun? Absolutely.`}
        description={`Window of the World (世界之窗) is a 48-hectare theme park in Nanshan District, Shenzhen, featuring 130 miniature replicas of famous world landmarks. Opened in 1994, it was one of Shenzhen's first tourist attractions and remains one of its most visited.

The park divides the world into regions — Europe, Asia, Africa, the Americas, and Oceania — each with scaled-down versions of iconic buildings and natural wonders. The 108-meter Eiffel Tower (1/3 scale) is the tallest structure and includes an observation deck. Other highlights include the Taj Mahal, Pyramids of Giza, Angkor Wat, and Niagara Falls.

Evening entertainment includes cultural dance performances, a laser show, and seasonal fireworks. The park is popular with Chinese families and domestic tourists who may never visit the real landmarks, making it a uniquely Chinese experience.`}
        hours="9:00–22:30 daily"
        price="¥220 adults, ¥110 children"
        nearestSubway="Window of the World Station, Lines 1/2"
        bestTime="Afternoon (14:00–18:00) + evening shows"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0250%2C22.5250%2C114.0450%2C22.5400&layer=mapnik&marker=22.5342%2C114.0342"
        address="Overseas Chinese Town, Nanshan District"
        addressZh="深圳市南山区华侨城"
        relatedLinks={[]}
        relatedArticles={[
          { title: "OCT Loft", description: "Shenzhen's real art district, 10 minutes away.", href: "/destinations/shenzhen/what-to-do/oct-loft" },
          { title: "Ping An Finance Centre", description: "The real Shenzhen skyline from 599m.", href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre" },
          { title: "Where to Eat in Shenzhen", description: "Food near Nanshan.", href: "/destinations/shenzhen/where-to-eat" },
          { title: "Shenzhen Local Tips", description: "More things to do nearby.", href: "/destinations/shenzhen/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Book online through WeChat for ¥10–20 off. Walk-up tickets are full price.' },
          { type: 'tip', text: 'The evening shows (starting around 19:30) are actually good — stay for them.' },
          { type: 'tip', text: 'Wear comfortable shoes. The park is huge and you\'ll walk 10,000+ steps.' },
          { type: 'photo', text: 'The miniature Eiffel Tower lit up at night is genuinely photogenic. Golden hour works for both the miniatures and the real Shenzhen skyline beyond.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 1 or 2 directly to Window of the World Station (世界之窗站). Exit H leads to the park entrance. From Futian, it\'s about 20 minutes by metro.',
          whatToSkip: 'Skip the paid add-on experiences inside the park — the mini-train, 4D cinema, and indoor snow area are overpriced for what they offer. The outdoor landmarks and evening shows are the main attraction and included in your ticket.',
          photographyTips: 'The best shots come from getting low and using the miniatures as foreground with the real Shenzhen skyline behind. The 1/3 Eiffel Tower against the actual Ping An Finance Centre creates a surreal contrast. Evening shots with the illuminated miniatures are also excellent.',
        }}
      />
    </>
  );
}