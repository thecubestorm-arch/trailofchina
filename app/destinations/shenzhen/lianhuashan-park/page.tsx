import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lianhuashan Park (莲花山公园) — Best Free Skyline View in Shenzhen',
  description: 'Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen — the city he put on the map. Morning tai chi, kite flying, and panoramic Futian views.',
  keywords: ['Lianhuashan Park', 'Lotus Hill Park', 'Shenzhen skyline', 'Deng Xiaoping statue', 'free views Shenzhen'],
  openGraph: {
    title: 'Lianhuashan Park (莲花山公园) — Best Free Skyline View in Shenzhen',
    description: 'Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/lianhuashan-park',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Lianhuashan Park - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'How long does it take to climb Lianhuashan Park?', answer: 'About 20–30 minutes at a leisurely pace. The path is paved and well-maintained. There are rest stops along the way.' },
  { question: 'Is Lianhuashan Park free?', answer: 'Yes, completely free. No entry fee, no ticket required. Open 6:00 AM to 10:30 PM.' },
  { question: 'What can you see from the top?', answer: 'Panoramic views of Futian CBD, the Civic Center, Ping An Finance Centre, and on clear days, the hills of Hong Kong\'s New Territories.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'Lianhuashan Park', path: '/destinations/shenzhen/what-to-do/lianhuashan-park' },
]);

export default function LianhuashanParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Lianhuashan Park"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="莲花山公园"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-lianhuashan-1/800/600', alt: 'View from Lianhuashan Park over Futian skyline' },
          { src: 'https://picsum.photos/seed/shenzhen-lianhuashan-2/800/600', alt: 'Bronze Deng Xiaoping statue at hilltop' },
          { src: 'https://picsum.photos/seed/shenzhen-lianhuashan-3/800/600', alt: 'Morning tai chi in Lianhuashan Park' },
          { src: 'https://picsum.photos/seed/shenzhen-lianhuashan-4/800/600', alt: 'Kite flying at Lianhuashan Park' },
          { src: 'https://picsum.photos/seed/shenzhen-lianhuashan-5/800/600', alt: 'Sunset panorama from Lianhuashan hilltop' },
        ]}
        hook="Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen — the city he put on the map."
        quickInfo={{ price: 'Free', hours: '6:00–22:30', bestTime: 'Sunset', metro: 'Lianhua West (Lines 2/9)' }}
        whyYouLoveIt={`Lianhuashan Park is the kind of place that makes you stop and think. At the summit stands a 6-meter bronze statue of Deng Xiaoping striding forward — the man who turned Shenzhen from a fishing village into a megacity of 17 million. The view from his feet is the entire Futian skyline spreading south toward Hong Kong, and it's completely free.

The climb takes 20–30 minutes on a paved path through subtropical greenery. Locals use the park for morning tai chi, evening kite flying, and weekend picnics. Come at sunset and you'll see the city lights flicker on one by one across the Civic Center axis — it's the single best free experience in Shenzhen.

The park is also a useful landmark. If you get lost in Futian, just look for the hill with the statue — it's visible from most of central Shenzhen and gives you a sense of direction.`}
        description={`Lianhuashan Park (莲花山公园, Lotus Hill Park) is a 150-hectare urban park in Futian District, Shenzhen. The park's summit rises 106 meters above the city, crowned by a bronze statue of Deng Xiaoping that has become one of Shenzhen's most iconic landmarks.

The statue, erected in 2000, depicts Deng striding forward — symbolizing his role in transforming Shenzhen from a small border town into China's first Special Economic Zone in 1980. From the summit plaza, visitors get panoramic views of the Futian CBD, Civic Center, and the green axis running from the hill south to the Shenzhen Bay.

The park features paved walking paths, exercise equipment, a kite-flying square, a lotus lake, and extensive subtropical vegetation. It's one of Shenzhen's most popular public spaces, drawing thousands of residents daily for exercise, recreation, and sightseeing.`}
        hours="6:00–22:30 daily"
        price="Free"
        nearestSubway="Lianhua West Station, Lines 2/9"
        bestTime="Sunset (18:00–19:00 in summer) for golden-hour city views"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0450%2C22.5400%2C114.0650%2C22.5600&layer=mapnik&marker=22.5528%2C114.0550"
        address="Hongli Road, Futian District"
        addressZh="深圳市福田区红荔路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Ping An Finance Centre", description: "The building you see from the hilltop — go up it too.", href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre" },
          { title: "OCT Loft", description: "Shenzhen's art district in Nanshan.", href: "/destinations/shenzhen/what-to-do/oct-loft" },
          { title: "Where to Stay in Shenzhen", description: "Futian is the best base for Lianhuashan.", href: "/destinations/shenzhen/where-to-stay" },
          { title: "Shenzhen Local Tips", description: "More free things to do.", href: "/destinations/shenzhen/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Come at sunset — the city lights turning on one by one is the best free show in Shenzhen.' },
          { type: 'tip', text: 'Morning (6–8 AM) is for tai chi and exercise — the park fills with locals doing group workouts.' },
          { type: 'photo', text: 'The view south toward Civic Center is the money shot. Wide-angle lens recommended for the full skyline.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 2 or 9 to Lianhua West Station (莲花西站), Exit C. Walk 5 minutes north to the park entrance. From Futian checkpoint, it\'s a 15-minute walk.',
          whatToSkip: 'Skip the small museum inside the park — it\'s mostly propaganda exhibits. The statue and view are the real attraction. The lotus lake is nice but not worth a special detour.',
          photographyTips: 'Sunset is the golden hour — literally. The Futian skyline faces south, so the sun sets behind you, painting the buildings in warm light. Bring a wide-angle lens for the full panorama, or a telephoto for detail shots of individual towers.',
        }}
      />
    </>
  );
}