import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Ping An Finance Centre (平安金融中心) — 599m Observation Deck',
  description: 'China\'s 2nd tallest building at 599m. The observation deck on the 116th floor offers 360° views across Shenzhen and into Hong Kong on clear days.',
  keywords: ['Ping An Finance Centre', 'Shenzhen observation deck', 'Ping An tower', 'Shenzhen skyline'],
  openGraph: {
    title: 'Ping An Finance Centre (平安金融中心) — 599m Observation Deck',
    description: 'China\'s 2nd tallest building — observation deck on the 116th floor.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/ping-an-finance-centre',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Ping An Finance Centre - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  { question: 'How much does the Ping An Finance Centre observation deck cost?', answer: '¥200 for adults. Book online in advance for a small discount. Children under 1.2m are free.' },
  { question: 'Can you see Hong Kong from the observation deck?', answer: "Yes, on clear days you can see deep into Hong Kong's New Territories and even Victoria Harbour. Mornings before 10 AM offer the best visibility." },
  { question: 'How long should I spend at the observation deck?', answer: 'Allow 1–1.5 hours total, including the elevator ride up and back. The elevator itself is an experience — it reaches 10 m/s.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'Ping An Finance Centre', path: '/destinations/shenzhen/what-to-do/ping-an-finance-centre' },
]);

export default function PingAnFinanceCentrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Ping An Finance Centre"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="平安金融中心"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-ping-an-1/800/600', alt: 'Ping An Finance Centre tower against blue sky' },
          { src: 'https://picsum.photos/seed/shenzhen-ping-an-2/800/600', alt: '360 degree observation deck view' },
          { src: 'https://picsum.photos/seed/shenzhen-ping-an-3/800/600', alt: 'Shenzhen skyline from observation deck' },
          { src: 'https://picsum.photos/seed/shenzhen-ping-an-4/800/600', alt: 'High speed elevator interior' },
          { src: 'https://picsum.photos/seed/shenzhen-ping-an-5/800/600', alt: 'Night view from Ping An tower' },
        ]}
        hook="599 meters tall, China's second-tallest building — the observation deck on the 116th floor gives you views into Hong Kong on clear days."
        quickInfo={{ price: '¥200', hours: '10:00–21:00', bestTime: 'Morning for visibility', metro: 'Shopping Park (Line 1)' }}
        whyYouLoveIt={`The Ping An Finance Centre is the building that defines Shenzhen's skyline — a 599-meter glass needle that's the second tallest in China (after Shanghai Tower). The real reason to visit isn't just height — it's context. From the 116th floor, you can see the entire Futian district laid out below you, the mountains of Hong Kong's New Territories to the south, and on very clear days, Victoria Harbour.

The elevator ride alone is worth the trip. It hits 10 m/s — your ears will pop, and the LED ceiling display makes the 55-second ascent feel like a space launch. Once at the top, interactive displays show you what you're looking at in every direction, and glass floor panels let the brave look straight down.

Come before 10 AM for the clearest views. Afternoon haze softens the Hong Kong skyline but creates gorgeous sunset shots. Book online for a ¥20 discount.`}
        description={`The Ping An Finance Centre (平安金融中心) is a 599-meter supertall skyscraper in Futian District, Shenzhen. Designed by architecture firm KPF and completed in 2017, it's the 5th tallest building in the world and the 2nd tallest in China.

The observation deck, called "Free Sky," occupies the 116th floor at 541 meters above ground. It offers 360-degree views across Shenzhen, with visibility extending to Hong Kong on clear days. The deck features interactive touchscreen displays identifying landmarks in every direction, glass floor panels for the daring, and a cafe at the top.

The building's design is inspired by the Chinese character for "peace" (安), with a tapered form that narrows as it rises. The facade uses 1,700 tons of stainless steel, and the building houses offices, a hotel, and a shopping mall at its base.`}
        hours="10:00–21:00 daily (last entry 20:00)"
        price="¥200 adults (book online for discount)"
        nearestSubway="Shopping Park Station, Line 1"
        bestTime="Morning (before 10 AM) for best visibility"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0500%2C22.5250%2C114.0650%2C22.5400&layer=mapnik&marker=22.5322%2C114.0547"
        address="Yitian Road, Futian District"
        addressZh="深圳市福田区益田路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Lianhuashan Park", description: "The best free skyline view of this building.", href: "/destinations/shenzhen/what-to-do/lianhuashan-park" },
          { title: "Huaqiangbei", description: "The world's largest electronics market, 15 minutes away.", href: "/destinations/shenzhen/what-to-do/huaqiangbei" },
          { title: "Where to Eat in Shenzhen", description: "Dim sum and seafood near Futian.", href: "/destinations/shenzhen/where-to-eat" },
          { title: "Hong Kong Day Trip", description: "Cross the border for Victoria Peak views.", href: "/destinations/shenzhen/day-trips/hong-kong" },
        ]}
        tips={[
          { type: 'tip', text: 'Book online in advance for ¥20 off. Walk-up tickets are ¥200, online ¥180.' },
          { type: 'tip', text: 'Come before 10 AM — afternoon haze reduces visibility significantly.' },
          { type: 'photo', text: 'The glass floor panels on the observation deck make dramatic photos. Go early when crowds are thin.' },
        ]}
        practicalDetails={{
          gettingThere: 'Take Metro Line 1 to Shopping Park Station (购物公园). Use Exit J and walk 5 minutes south. From Futian checkpoint, it\'s a 10-minute walk. DiDi from most central hotels costs ¥10–20.',
          whatToSkip: 'Skip the paid "cloud experience" add-ons — the standard observation deck ticket includes everything worth seeing. The interactive displays and glass floors are included in the base price.',
          photographyTips: 'Morning light is best for south-facing views toward Hong Kong. The building\'s taper creates a natural vignette effect through the glass. Bring a wide-angle lens for the 360° views and a telephoto for Hong Kong detail shots.',
        }}
      />
    </>
  );
}