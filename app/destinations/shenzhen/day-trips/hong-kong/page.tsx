import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hong Kong Day Trip from Shenzhen (香港) — Walk Across the Border',
  description: 'You\'re 15 minutes from Hong Kong — walk across the border at Futian, take the MTR to Central, and you\'re in a different country by lunch. Victoria Peak, dim sum, and the Star Ferry in one day.',
  keywords: ['Hong Kong day trip from Shenzhen', 'Futian checkpoint', 'Shenzhen to Hong Kong', 'Victoria Peak day trip'],
  openGraph: {
    title: 'Hong Kong Day Trip from Shenzhen (香港)',
    description: '15 minutes from Shenzhen to Hong Kong — walk across the border and you\'re in a different country.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/day-trips/hong-kong',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Hong Kong Day Trip from Shenzhen - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/shenzhen/day-trips/hong-kong' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How do I cross from Shenzhen to Hong Kong?', answer: 'Walk across the Futian checkpoint (福田口岸) — it\'s a 15-minute walk including immigration on both sides. Take the MTR East Rail Line from Lok Ma Chau station directly to Central. Total time: ~60 minutes including immigration.' },
  { question: 'Do I need a visa for Hong Kong from Shenzhen?', answer: 'Most Western nationals get visa-free entry to Hong Kong for 7–180 days. But you need a valid Chinese visa or visa-free entry to re-enter Shenzhen. Check your specific nationality\'s requirements.' },
  { question: 'What should I do in Hong Kong for one day?', answer: 'Take the MTR to Central, ride the Peak Tram to Victoria Peak, explore Central/Sheung Wan, eat dim sum in Causeway Bay, walk the Avenue of Stars at Tsim Sha Tsui, and take the Star Ferry across Victoria Harbour at sunset.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Day Trips', path: '/destinations/shenzhen/day-trips' },
  { name: 'Hong Kong', path: '/destinations/shenzhen/day-trips/hong-kong' },
]);

export default function HongKongDayTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Hong Kong Day Trip"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Day Trips', href: '/destinations/shenzhen/day-trips' },
        ]}
        nameZh="香港"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-hk-trip-1/800/600', alt: 'Victoria Harbour skyline from Hong Kong side' },
          { src: 'https://picsum.photos/seed/shenzhen-hk-trip-2/800/600', alt: 'Peak Tram ascending to Victoria Peak' },
          { src: 'https://picsum.photos/seed/shenzhen-hk-trip-3/800/600', alt: 'Star Ferry crossing Victoria Harbour' },
          { src: 'https://picsum.photos/seed/shenzhen-hk-trip-4/800/600', alt: 'Futian border crossing bridge' },
          { src: 'https://picsum.photos/seed/shenzhen-hk-trip-5/800/600', alt: 'Causeway Bay shopping streets' },
        ]}
        hook="You're 15 minutes from Hong Kong — walk across the border at Futian, take the MTR to Central, and you're in a different country by lunch."
        quickInfo={{ price: '¥100–200 + HK$', hours: '6:30 AM–10:30 PM', bestTime: 'Weekday mornings', metro: 'Futian Checkpoint (Lines 4/10)' }}
        whyYouLoveIt={`Walking from Shenzhen to Hong Kong is one of those travel moments that makes you stop and think. One minute you're in mainland China, the next you're in a completely different system — different currency, different internet, different language on the signs, different vibe entirely. The contrast is jarring and thrilling.

The MTR from Lok Ma Chau takes you directly to Central in 40 minutes. From there, the Peak Tram, Star Ferry, dim sum in Causeway Bay, and the Avenue of Stars are all accessible. You can do Victoria Peak, a proper dim sum lunch, and the harbour at sunset — all in a single day, and be back in Shenzhen by 9 PM.`}
        description={`Hong Kong (香港) is accessible from Shenzhen via two land border crossings: Futian Checkpoint and Luohu Port. Futian is faster and less crowded. Both require your passport and a valid Chinese visa for re-entry.

The MTR East Rail Line connects the Hong Kong side directly to Central, making it possible to do a full day trip without any advance planning — just walk across and buy an Octopus card at the station.`}
        hours="Border: 6:30 AM–10:30 PM (Futian), 6:30 AM–12:00 AM (Luohu)"
        price="MTR ~HK$50 one-way + attractions"
        nearestSubway="Futian Checkpoint Station, Lines 4/10"
        bestTime="Weekday mornings to avoid border queues"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.1500%2C22.2700%2C114.1900%2C22.3200&layer=mapnik&marker=22.2953%2C114.1722"
        relatedLinks={[]}
        relatedArticles={[
          { title: "What to Do in Shenzhen", description: "Top attractions when you return.", href: "/destinations/shenzhen/what-to-do" },
          { title: "Guangzhou Day Trip", description: "The other direction — history and dim sum.", href: "/destinations/shenzhen/day-trips/guangzhou" },
          { title: "Shenzhen Local Tips", description: "Border crossing details and metro advice.", href: "/destinations/shenzhen/local-tips" },
          { title: "Where to Stay in Shenzhen", description: "Luohu is best for Hong Kong trips.", href: "/destinations/shenzhen/where-to-stay" },
        ]}
        tips={[
          { type: 'tip', text: 'Use Futian checkpoint — it\'s faster than Luohu. Arrive before 8 AM to avoid queues.' },
          { type: 'tip', text: 'Buy an Octopus card at the MTR station — it works on all transport and at convenience stores.' },
          { type: 'tip', text: 'You need a valid Chinese visa to re-enter Shenzhen. Most visa-free entries allow re-entry.' },
          { type: 'tip', text: 'Hong Kong uses HK$, not RMB. ATMs are everywhere. Octopus card can be loaded with HK$.' },
          { type: 'photo', text: 'The Star Ferry at sunset is the single best photo op — Victoria Harbour lit up with the skyline behind it.' },
        ]}
        practicalDetails={{
          gettingThere: `Walk across Futian Checkpoint (福田口岸) — follow signs from Futian Checkpoint metro station (Lines 4/10). After immigration on both sides, you enter Hong Kong's Lok Ma Chau station. Buy an Octopus card (HK$200 with HK$50 deposit) and take the East Rail Line south.

Going back: Reverse the process. The last MTR trains run until about 10:30 PM. If you miss the border, you're stuck in Hong Kong for the night — Luohu stays open until midnight as a backup.`,
          whatToSkip: `Skip the tourist-trap Peak Tram combo ticket — just buy the tram return (HK$64) and skip the "Sky Terrace" add-on (HK$60 extra for a view you can get free from the Lion's Pavilion next door).

Avoid the Tsim Sha Tsui Harbour City mall — it's expensive and identical to any luxury mall anywhere. The street markets in Mong Kok are more interesting.

Skip Ocean Park and Disneyland unless you have kids — they eat up a full day that's better spent exploring the city.`,
          photographyTips: `Victoria Peak offers the classic Hong Kong skyline shot. Go just before sunset when the light is golden and the city starts to illuminate. The Star Ferry crossing at dusk is the second-best — the harbour lights reflecting on the water.

For a less cliché shot, walk from Central to Sheung Wan through the Mid-Levels escalators — the mix of old and new architecture is uniquely Hong Kong.`,
        }}
      />
    </>
  );
}