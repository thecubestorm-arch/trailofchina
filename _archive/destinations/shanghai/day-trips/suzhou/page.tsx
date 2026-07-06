import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Suzhou (苏州) — Classical Gardens and Water Towns Day Trip from Shanghai',
  description:
    '30 minutes from Shanghai by bullet train, Suzhou transports you 1,000 years back — Ming dynasty gardens, silk workshops, and canal-side Tongli water town. Complete guide with tickets, transport, and what to skip.',
  keywords: [
    'Suzhou day trip from Shanghai',
    'Suzhou gardens',
    'Humble Administrator Garden',
    'Tongli water town',
    'Suzhou from Shanghai train',
    'Lion Grove Garden',
    'Master of the Nets Garden',
  ],
  openGraph: {
    title: 'Suzhou (苏州) — Classical Gardens and Water Towns Day Trip from Shanghai',
    description:
      '30 minutes from Shanghai by bullet train — Ming dynasty gardens, silk workshops, and canals that make Venice look busy.',
    url: 'https://www.trailofchina.com/destinations/shanghai/day-trips/suzhou',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Suzhou Classical Gardens and Water Towns — Day Trip from Shanghai - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/shanghai/day-trips/suzhou',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get from Shanghai to Suzhou by train?',
    answer:
      'Take a high-speed train from Shanghai Hongqiao Railway Station to Suzhou Station. The trip takes 25–30 minutes and costs ¥35–55 for a second-class seat. Trains run every 10–15 minutes from 6 AM to 10 PM. Book tickets on Trip.com or the 12306 app — don\'t just show up, as trains sell out on weekends.',
  },
  {
    question: 'Which Suzhou garden should I visit if I only have time for one?',
    answer:
      'The Humble Administrator\'s Garden (拙政园) is the largest and most famous, but it\'s also the most crowded. If you want a quieter, equally beautiful experience, visit the Lion Grove Garden (狮子林) — its rockery labyrinth is unlike anything else. For a small, exquisite garden with zero crowds, go to the Master of the Nets Garden (网师园), especially for the night tours.',
  },
  {
    question: 'Can I visit both Suzhou gardens and Tongli water town in one day?',
    answer:
      'Yes, but it\'s tight. Visit the Humble Administrator\'s Garden at opening (7:30 AM), then take a taxi or DiDi to Tongli (20 minutes, ~¥40). Spend 2–3 hours in Tongli, have lunch there, and catch a late-afternoon train back to Shanghai. Skip this if you\'re traveling with young kids or in summer heat — either do gardens or Tongli, not both.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Shanghai', path: '/destinations/shanghai' },
  { name: 'Day Trips', path: '/destinations/shanghai/day-trips' },
  { name: 'Suzhou', path: '/destinations/shanghai/day-trips/suzhou' },
]);

const searchQuery = encodeURIComponent('Suzhou private day tour from Shanghai');

export default function SuzhouPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AuthorByline date="May 2025" />
      <AttractionPage
        name="Suzhou"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Shanghai', href: '/destinations/shanghai' },
          { label: 'Day Trips', href: '/destinations/shanghai/day-trips' },
        ]}
        nameZh="苏州"
        city="Shanghai"
        images={[
          { src: 'https://picsum.photos/seed/suzhou-humble-garden/800/600', alt: 'Humble Administrator\'s Garden with pavilions reflected in still water, Suzhou' },
          { src: 'https://picsum.photos/seed/suzhou-lion-grove/800/600', alt: 'Lion Grove Garden rockery labyrinth with zigzag bridges, Suzhou' },
          { src: 'https://picsum.photos/seed/suzhou-tongli-canal/800/600', alt: 'Tongli water town canal with stone bridges and traditional houses' },
          { src: 'https://picsum.photos/seed/suzhou-silk-weaving/800/600', alt: 'Traditional silk loom in a Suzhou silk workshop' },
          { src: 'https://picsum.photos/seed/suzhou-night-garden/800/600', alt: 'Master of the Nets Garden illuminated during night tour, Suzhou' },
        ]}
        hook="Suzhou is 30 minutes from Shanghai but 1,000 years away — Ming dynasty gardens, silk workshops, and canals that make Venice look busy."
        quickInfo={{
          price: '¥40–70 per garden',
          hours: 'Gardens 7:30–17:30, Tongli all day',
          bestTime: 'Mar–May, Sep–Nov, weekday mornings',
          metro: '30 min bullet train from Hongqiao',
        }}
        whyYouLoveIt={`Most people treat Suzhou as a half-day stop — train in, see one garden, train out. That's a mistake. Suzhou has been China's garden city for a thousand years, and the best of its UNESCO-listed gardens are worth a full, slow day. The Humble Administrator's Garden is the biggest and most famous, but the Lion Grove Garden is the one you'll remember — its rockery is a labyrinth of Taihu limestone caves and tunnels that you literally climb through. Kids love it; adults get lost in it. That alone is worth the train ticket.

If you can squeeze in Tongli water town (20 minutes by taxi from Suzhou), do it. Tongli is what people imagine when they think "Chinese water town" — stone bridges over narrow canals, whitewashed houses with black tile roofs, old women washing vegetables in the river. It's smaller and more authentic than Zhouzhuang, and the fried rice at the bridge-side restaurants is the real deal.

The night tours at Master of the Nets Garden run mid-March through mid-November, and they're genuinely magical. A handful of visitors walk through the garden by lantern light while traditional musicians play in the pavilions. It's the most intimate garden experience in Suzhou — and almost no foreign tourists know about it.`}
        description={`Suzhou (苏州) sits 100 km northwest of Shanghai, a 25–30 minute ride on the G-series bullet trains from Shanghai Hongqiao. Often called "the Venice of the East," it's been a center of Chinese culture, silk production, and garden design since the Song dynasty (960–1279 AD). Nine of its classical gardens are UNESCO World Heritage Sites.

The three gardens worth your time: the Humble Administrator's Garden (拙政园, ¥70), the largest and most famous, with ponds, pavilions, and bonsai-style landscapes spanning 5.2 hectares; the Lion Grove Garden (狮子林, ¥40), a smaller garden built around a massive rockery labyrinth of Taihu limestone — the most interactive garden you'll ever visit; and the Master of the Nets Garden (网师园, ¥30 daytime, ¥80 night tours), a compact jewel-box garden that's the best example of small-space Chinese garden design.

Beyond gardens, Suzhou's old town has working silk workshops where you can watch the entire process from cocoon to fabric, Pingjiang Road — a 2 km canal-side lane of tea houses and craft shops that feels unchanged from a century ago, and easy access to Tongli (同里), a 1,000-year-old water town 20 minutes away by taxi.

Plan a full day. Trains from Shanghai Hongqiao run every 10–15 minutes from 6 AM, last return around 10:30 PM. Book tickets in advance on Trip.com or the 12306 app, especially on weekends.`}
        hours="Gardens 7:30–17:30 (night tours mid-Mar to mid-Nov, 19:30–21:30 at Master of the Nets)"
        price="Humble Administrator's Garden ¥70, Lion Grove ¥40, Master of the Nets ¥30 (night tour ¥80), Tongli old town ¥100 (includes entry to sites inside)"
        nearestSubway="30 min bullet train from Shanghai Hongqiao Station, trains every 10–15 min"
        bestTime="March–May and September–November, weekday mornings before 10 AM"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=120.6094%2C31.3049%2C120.6494%2C31.3449&layer=mapnik&marker=31.3249%2C120.6294"
        address="Gusu District, Suzhou, Jiangsu Province"
        addressZh="江苏省苏州市姑苏区"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'The Bund', description: "Shanghai's iconic waterfront promenade.", href: '/destinations/shanghai/what-to-do/bund' },
          { title: 'Yu Garden', description: 'A 400-year-old classical garden in Shanghai.', href: '/destinations/shanghai/what-to-do/yu-garden' },
          { title: 'Hangzhou Day Trip', description: 'West Lake and tea country — another great day trip.', href: '/destinations/shanghai/day-trips/hangzhou' },
          { title: 'Zhujiajiao Water Town', description: "Shanghai's own water town — metro accessible.", href: '/destinations/shanghai/day-trips/zhujiajiao' },
          { title: 'Shanghai Local Tips', description: 'Practical tips for navigating Shanghai.', href: '/destinations/shanghai/local-tips' },
          { title: 'Where to Eat in Shanghai', description: "Shanghai's best dishes and where to find them.", href: '/destinations/shanghai/where-to-eat' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `From Shanghai Hongqiao Railway Station, take any G-series high-speed train to Suzhou Station (苏州站). The journey takes 25–30 minutes and costs ¥35 (second class) to ¥55 (first class). Trains depart every 10–15 minutes from roughly 6 AM to 10 PM. You cannot just show up — buy tickets in advance on Trip.com or the 12306 app (中国铁路12306), especially on weekends when seats sell out.

Important: Make sure you're booking a train to Suzhou Station (苏州站), NOT Suzhou North (苏州北站). Suzhou Station is in the city center, walking distance from the Humble Administrator's Garden. Suzhou North is 20 minutes outside the city by taxi.

For the return trip, the last G-series train from Suzhou to Shanghai Hongqiao typically departs around 10:30 PM. Check the schedule on the day — times shift seasonally. If you miss it, regular trains run later but take 60–90 minutes.

To reach Tongli from Suzhou: Take a DiDi from Suzhou Station (about ¥40, 20 minutes) or bus 91 from the South Gate of the Humble Administrator's Garden (50 minutes, ¥5).`,
          whatToSkip: `Zhouzhuang water town — it's the most famous water town near Shanghai but also the most commercialized, with ¥100+ entry, wall-to-wall tour groups, and souvenir shops that have replaced every original business. Tongli is smaller, more authentic, and easier to reach from Suzhou. If you're choosing between the two, Tongli wins every time.

The Suzhou Museum is architecturally stunning (designed by I.M. Pei), and the building itself is worth seeing, but the collection is modest. If you're short on time, skip it and spend those hours in the gardens instead.

Skip the "garden tour" packages that bus you through four gardens in four hours. You'll spend more time on the bus than in any single garden. Pick one or two gardens, go at opening time, and actually enjoy them.`,
          photographyTips: `The Humble Administrator's Garden is at its best in the first 90 minutes after opening (7:30 AM). By 9:30 AM, tour groups arrive in waves and the garden fills fast. The reflections in the central pond at dawn are the iconic Suzhou shot — arrive early, find a spot on the western pavilion, and wait for the light.

In the Lion Grove Garden, climb into the rockery and shoot downward through the gaps in the limestone. The zigzag paths and tunnels create natural frames. A wide-angle lens (16–24mm) captures the chaos of the rock formations best.

For Tongli, the best shots are from the bridges — Retise Bridge (退思桥) at the town entrance gives you a classic canal-with-houses composition. Late afternoon light warms the whitewashed walls beautifully. If you're there at dusk, the lanterns along the canal start glowing and the scene becomes something out of a woodblock print.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Explore Suzhou with a Local Guide
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Suzhou day trip from Shanghai with hotel pickup, an English-speaking guide, and flexible timing so you can linger in the gardens and explore Tongli at your own pace.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Suzhou Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Hotel pickup in Shanghai</span>
                <span>✓ Train tickets included</span>
                <span>✓ Garden + Tongli combo available</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}