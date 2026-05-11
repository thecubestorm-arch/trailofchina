import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wulong Karst (武隆喀斯特) — Three Natural Bridges | Day Trip from Chongqing',
  description:
    'Three limestone bridges so massive they swallowed an entire river — where Transformers filmed. Complete guide to Wulong Three Natural Bridges, Fairy Mountain, transport, tickets, and practical tips.',
  keywords: [
    'Wulong Karst',
    'Three Natural Bridges Chongqing',
    'Wulong Tiankeng',
    'Fairy Mountain Wulong',
    '武隆喀斯特',
    'Chongqing day trip',
    'Wulong from Chongqing',
    'Transformers filming location China',
  ],
  openGraph: {
    title: 'Wulong Karst (武隆喀斯特) — Three Natural Bridges | Day Trip from Chongqing',
    description:
      'Three limestone bridges so massive they swallowed an entire river — where Transformers filmed, where a river vanished underground.',
    url: 'https://www.trailofchina.com/destinations/chongqing/day-trips/wulong-karst',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Wulong Karst Three Natural Bridges — Day Trip from Chongqing - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/chongqing/day-trips/wulong-karst',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Wulong Three Natural Bridges from Chongqing?',
    answer:
      'Take a train from Chongqing North Railway Station to Wulong Station (2.5 hours, ¥50–80). From Wulong Station, take the dedicated tourist bus (30 min, ¥10) or a DiDi (¥30–40) to the Three Natural Bridges scenic area. The train is faster and more comfortable than the bus option (3 hours from Chongqing). Book train tickets on 12306 or Trip.com in advance.',
  },
  {
    question: 'Can I visit Three Natural Bridges and Fairy Mountain in one day?',
    answer:
      'Yes, and it is the recommended approach. Start early: take the first train from Chongqing (around 7 AM), arrive at Wulong by 9:30, and head straight to Three Natural Bridges (2–3 hours). After lunch, take a taxi or bus to Fairy Mountain (30 min from Wulong town, 1 hour from the bridges). Spend 1–2 hours on the alpine meadow, then catch a late-afternoon train back. The combo makes a satisfying full day.',
  },
  {
    question: 'Is the glass elevator at Wulong worth it?',
    answer:
      'The ¥50 glass elevator takes you from the visitor center down into the gorge, saving about 15 minutes of stairs. It is optional — you can walk down for free. The views from inside the elevator are limited (it is glass but enclosed), so it is more about convenience than experience. Save your money if you are comfortable with stairs, or take it on the way down if your legs are tired from walking the gorge.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Chongqing', path: '/destinations/chongqing' },
  { name: 'Day Trips', path: '/destinations/chongqing/day-trips' },
  { name: 'Wulong Karst', path: '/destinations/chongqing/day-trips/wulong-karst' },
]);

const searchQuery = encodeURIComponent('Wulong Karst Three Natural Bridges tour from Chongqing');

export default function WulongKarstPage() {
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
        name="Wulong Karst"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Chongqing', href: '/destinations/chongqing' },
          { label: 'Day Trips', href: '/destinations/chongqing/day-trips' },
        ]}
        nameZh="武隆喀斯特"
        city="Chongqing"
        images={[
          { src: 'https://picsum.photos/seed/wulong-tiankeng-bridge/800/600', alt: 'Tiankeng Bridge spanning the gorge at Wulong Three Natural Bridges' },
          { src: 'https://picsum.photos/seed/wulong-gorge-path/800/600', alt: 'Walking path through the limestone gorge beneath the natural bridges' },
          { src: 'https://picsum.photos/seed/wulong-waterfall/800/600', alt: 'Waterfall cascading inside the Wulong karst gorge' },
          { src: 'https://picsum.photos/seed/wulong-fairy-mountain/800/600', alt: 'Alpine meadow and rolling hills at Fairy Mountain, Wulong' },
          { src: 'https://picsum.photos/seed/wulong-cliff-amphitheater/800/600', alt: 'Massive limestone amphitheater at Wulong Three Natural Bridges' },
        ]}
        hook="Three limestone bridges so massive they swallowed an entire river — Wulong is where Transformers filmed, where a river vanished underground, and where you'll walk through caverns wider than cathedrals."
        quickInfo={{
          price: '¥125 (Three Bridges) / ¥60 (Fairy Mountain)',
          hours: '8:00–17:00 (summer), 8:30–16:30 (winter)',
          bestTime: 'Apr–Jun, Sep–Nov mornings',
          metro: '2.5h train from Chongqing North',
        }}
        whyYouLoveIt={`The first thing that hits you at Wulong is the silence. You descend into a gorge and the world above disappears — replaced by sheer limestone walls, dripping water, and the kind of stillness that makes you lower your voice without thinking.

Then you look up. Three natural stone bridges span the sky above you, each wider than a cathedral nave. The largest, Tiankeng Bridge, has a 235-meter span. That is not a typo. An entire river carved these arches over millennia, then vanished underground through sinkholes, leaving behind a gorge so deep and wide that Michael Bay filmed Transformers: Age of Extinction here and Curse of the Golden Flower before that.

The walk through the gorge takes 2–3 hours along a well-maintained boardwalk. You pass under each bridge — Tianlong (Heavenly Dragon), Qinglong (Azure Dragon), and Heilong (Black Dragon) — and through caves where waterfalls pour through openings in the rock ceiling. The scale is disorienting. You keep thinking you have reached the biggest chamber, then the path curves and it gets bigger.

Fairy Mountain (仙女山) is the bonus. At 1,800 meters elevation, it is a rolling alpine meadow with horses and cool air — a genuine escape from Chongqing's summer furnace. In August, when Chongqing hits 40°C, Fairy Mountain is a pleasant 22°C. Combine the two for a full day that covers both geological drama and pastoral calm.`}
        description={`Wulong Karst (武隆喀斯特) is a UNESCO World Heritage Site located in Wulong District, about 180 km southeast of central Chongqing. The Three Natural Bridges (天生三桥) are the main attraction — three massive limestone bridges spanning a deep gorge, formed when an underground river collapsed the cave roof above it.

The site became internationally known as a filming location for Curse of the Golden Flower (2006) and Transformers: Age of Extinction (2014). It is part of the larger South China Karst UNESCO designation, recognized for its exceptional examples of karst landforms.

The Three Bridges scenic area costs ¥125 for entry. Fairy Mountain (仙女山), a separate park 30 minutes away, costs ¥60. A combined visit makes for a full and satisfying day trip from Chongqing. The Houping Giant Doline (天坑), a third karst feature, costs ¥80 and is worth it only for geology enthusiasts — most visitors skip it.`
        }
        hours="8:00–17:00 (Apr–Oct), 8:30–16:30 (Nov–Mar)"
        price="¥125 (Three Natural Bridges) / ¥60 (Fairy Mountain) / ¥80 (Houping Doline)"
        nearestSubway="2.5h train from Chongqing North to Wulong, then 30 min bus"
        bestTime="April–June and September–November. Arrive before 10 AM to beat tour groups."
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=107.7383%2C29.3044%2C107.7783%2C29.3444&layer=mapnik&marker=29.3244%2C107.7583"
        address="Three Natural Bridges, Wulong District, Chongqing"
        addressZh="重庆市武隆区天生三桥"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Chongqing Guide', description: 'Everything you need for Chongqing — hotpot, monorail, cliffside nights.', href: '/destinations/chongqing' },
          { title: 'Dazu Rock Carvings', description: '50,000 stone carvings spanning 600 years — China\'s most underrated UNESCO site.', href: '/destinations/chongqing/day-trips/dazu-rock-carvings' },
          { title: 'Hongyadong', description: 'The iconic cliffside complex that defines Chongqing at night.', href: '/destinations/chongqing/what-to-do/hongyadong' },
          { title: 'Three Gorges Museum', description: 'China\'s best museum outside Beijing — free, and worth 2 hours.', href: '/destinations/chongqing/what-to-do/three-gorges-museum' },
          { title: 'Chongqing Local Tips', description: 'Mountain city survival guide — stairs, 3D navigation, hotpot rules.', href: '/destinations/chongqing/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By train (recommended): From Chongqing North Railway Station (重庆北站), take a train to Wulong Station (武隆站). Journey time is 2–2.5 hours depending on the service, tickets ¥50–80. Trains run from roughly 7 AM to 7 PM. From Wulong Station, take the dedicated tourist bus (30 min, ¥10) or a DiDi (¥30–40) directly to the Three Natural Bridges visitor center.

By bus: Direct buses from Chongqing Long-Distance Bus Station (四公里枢纽站) to Wulong take about 3 hours, ¥80–100. Less comfortable and slower than the train. Only worth it if train tickets are sold out.

By private driver: ¥600–900 for a full day including waiting time. Takes about 2.5 hours each way via the G65 expressway. Good option if you want to visit both Three Bridges and Fairy Mountain without worrying about train schedules. Most Chongqing hotels can arrange this.`,
          whatToSkip: `Skip the Houping Giant Doline unless you are a geology enthusiast. It is impressive from a karst-science perspective — a massive sinkhole — but it does not have the visual drama of the Three Bridges or the pastoral charm of Fairy Mountain. Most day-trippers are better off spending that extra hour at Fairy Mountain instead.

The tourist village at the Three Bridges exit is aggressively commercial. You have to walk through it to leave. Restaurants here serve mediocre food at elevated prices — eat in Wulong town before heading back, or pack snacks from Chongqing.

Skip the souvenir photo stations inside the gorge. They charge ¥20–30 for a printed photo in front of a green screen that composites you into the landscape. Your own phone photos will be better.`,
          photographyTips: `The gorge photography challenge is light. The bridges are tall enough that direct sunlight only penetrates briefly around midday, and the rest of the time the gorge is in soft shadow. This is actually ideal — the diffused light brings out detail in the limestone walls without harsh contrast.

For the iconic shot looking up through Tianlong Bridge, use a wide-angle lens (14–24mm) and position yourself directly below the arch. The best time is late morning (10–11 AM) when a sliver of sun lights the bridge opening.

Waterfalls inside the gorge are best captured with a slow shutter (1/4 to 1 second) to create that silky water effect. Bring a small travel tripod or brace against the rock walls — the boardwalk railings work in a pinch.

At Fairy Mountain, the rolling meadows with horses are best photographed in the late afternoon golden hour. The light hits the grass at a low angle and turns the whole plateau golden.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Walk Through Caverns Wider Than Cathedrals
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Wulong tour with transport from Chongqing, a local guide, and flexible timing so you can explore the gorge at your own pace.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Wulong Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Hotel pickup in Chongqing</span>
                <span>✓ Local English-speaking guide</span>
                <span>✓ Three Bridges + Fairy Mountain</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}