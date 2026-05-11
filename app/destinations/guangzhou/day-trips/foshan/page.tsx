import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Foshan Day Trip from Guangzhou (佛山) — Wing Chun & Lingnan Culture',
  description: "Foshan is 30 minutes by metro from Guangzhou — the birthplace of wing chun kung fu, Lingnan architecture, and some of the best pottery in China.",
  keywords: ['Foshan day trip', 'Guangzhou to Foshan', 'wing chun birthplace', 'Foshan pottery', '佛山'],
  openGraph: {
    title: 'Foshan Day Trip from Guangzhou (佛山)',
    description: '30 minutes by metro — wing chun, Lingnan architecture, and UNESCO pottery.',
    url: 'https://www.trailofchina.com/destinations/guangzhou/day-trips/foshan',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Foshan Day Trip - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/day-trips/foshan' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How do I get from Guangzhou to Foshan?', answer: 'Take the Guangfo Metro (广佛线) from Xilang Station (Line 1) directly to Foshan. 30 minutes, ¥7. Alternatively, take a DiDi for ¥60–80.' },
  { question: 'Is Foshan worth a day trip?', answer: 'Yes — the Ancestral Temple (with Ip Man and wing chun history), Lingnan Tiandi (restored old town), and Shiwan pottery district make it a worthwhile half-day or full-day trip.' },
  { question: 'What is Foshan famous for?', answer: 'Foshan is the birthplace of wing chun kung fu (Bruce Lee\'s teacher Ip Man was from Foshan), Lingnan architecture, and Shiwan pottery — one of China\'s four famous kiln traditions.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Day Trips', path: '/destinations/guangzhou/day-trips' },
  { name: 'Foshan', path: '/destinations/guangzhou/day-trips/foshan' },
]);

export default function FoshanDayTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Foshan Day Trip"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Day Trips', href: '/destinations/guangzhou/day-trips' },
        ]}
        nameZh="佛山"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-foshan-1/800/600', alt: 'Foshan Ancestral Temple with martial arts display' },
          { src: 'https://picsum.photos/seed/guangzhou-foshan-2/800/600', alt: 'Lingnan Tiandi restored old town' },
          { src: 'https://picsum.photos/seed/guangzhou-foshan-3/800/600', alt: 'Shiwan pottery district workshop' },
          { src: 'https://picsum.photos/seed/guangzhou-foshan-4/800/600', alt: 'Wing chun wooden dummy training' },
          { src: 'https://picsum.photos/seed/guangzhou-foshan-5/800/600', alt: 'Foshan ceramic rooftop figurines' },
        ]}
        hook="Foshan is 30 minutes by metro — the birthplace of wing chun kung fu, Lingnan architecture, and some of the best pottery in China."
        quickInfo={{ price: '¥50–100 + metro ¥7', hours: 'Full day', bestTime: 'Weekday mornings', metro: 'Guangfo Line (from Xilang)' }}
        whyYouLoveIt={`Foshan is what happens when 1,400 years of history, martial arts, and pottery collide with a metro line from Guangzhou. Thirty minutes and ¥7 gets you to the birthplace of wing chun kung fu — the martial art Bruce Lee learned from Ip Man, who was from Foshan.

The Ancestral Temple (祖庙) is the highlight — a 1,000-year-old temple complex with kung fu performances, lion dances, and a museum dedicated to Ip Man and Huang Feihong (both Foshan natives). Lingnan Tiandi is a beautifully restored old town with cafés in ancestral halls. And Shiwan is the pottery district that's been making ceramic roof figurines for Guangzhou's temples since the Ming Dynasty.

It's a half-day trip that gives you a completely different perspective on Lingnan culture — the same culture that defines Guangzhou, but preserved and displayed rather than modernized.`}
        description={`Foshan (佛山) is a city of 7 million people 30 minutes by metro from Guangzhou. It's the birthplace of wing chun kung fu, home to one of China's four famous pottery traditions, and the cultural heart of Lingnan civilization. The Ancestral Temple, Lingnan Tiandi, and Shiwan pottery district are the main attractions.`}
        hours="Full day trip (6–8 hours recommended)"
        price="Metro ¥7 each way + Ancestral Temple ¥20 + food ¥50–100"
        nearestSubway="Xilang Station (Line 1), then Guangfo Metro to Zumiao Station"
        bestTime="Weekday mornings for fewer crowds at the Ancestral Temple"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.0500%2C22.9800%2C113.1500%2C23.0700&layer=mapnik&marker=23.0217%2C113.1219"
        relatedLinks={[]}
        relatedArticles={[
          { title: "What to Do in Guangzhou", description: "Top attractions when you return.", href: "/destinations/guangzhou/what-to-do" },
          { title: "Shenzhen Day Trip", description: "The other direction — China's tech capital.", href: "/destinations/guangzhou/day-trips/shenzhen" },
          { title: "Guangzhou Local Tips", description: "Metro tips and dim sum etiquette.", href: "/destinations/guangzhou/local-tips" },
          { title: "Where to Stay in Guangzhou", description: "Best neighborhoods for every budget.", href: "/destinations/guangzhou/where-to-stay" },
        ]}
        tips={[
          { type: 'tip', text: 'Take the Guangfo Metro from Xilang (Line 1) to Zumiao Station. 30 minutes, ¥7. Don\'t bother with a DiDi — the metro is faster.' },
          { type: 'tip', text: 'Ancestral Temple (祖庙) has kung fu and lion dance performances at 10:00, 14:00, and 15:30. Time your visit around these.' },
          { type: 'tip', text: 'Lingnan Tiandi is next to the Ancestral Temple — walk there after. It\'s a restored old town with cafés and shops in ancestral halls.' },
          { type: 'tip', text: 'Shiwan pottery district is 20 minutes by DiDi from the Ancestral Temple. The pottery figurines are unique to this region.' },
          { type: 'photo', text: 'The Ancestral Temple\'s ceramic roof ridges are spectacular — similar to the Chen Clan Hall but with Foshan\'s own style.' },
        ]}
        practicalDetails={{
          gettingThere: `Take Metro Line 1 to Xilang Station (西朗站), then transfer to the Guangfo Metro (广佛线) to Zumiao Station (祖庙站). The Ancestral Temple is directly outside. Total time: 30 minutes, ¥7 each way.

DiDi from central Guangzhou costs ¥60–80 and takes 30–45 minutes depending on traffic.`,
          whatToSkip: `Skip the Foshan amusement parks and theme parks — they're not the point. The Ancestral Temple, Lingnan Tiandi, and Shiwan pottery district are the real attractions.

Don't try to do Foshan AND Shenzhen in the same day — they're in opposite directions from Guangzhou.`,
          photographyTips: `The Ancestral Temple's ceramic roof ridges are the best photo subject — similar to Chen Clan Ancestral Hall but with Foshan's distinctive style. The lion dance performance (if you time it right) makes for dramatic action shots.

Lingnan Tiandi has excellent restored architecture in golden hour light. The pottery workshops in Shiwan allow photography of craftsmen at work.`,
        }}
      />
    </>
  );
}