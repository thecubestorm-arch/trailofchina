import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dazu Rock Carvings (大足石刻) — China’s Most Underrated UNESCO Site | Day Trip from Chongqing',
  description:
    '50,000 stone carvings spanning 600 years, barely visited by foreign tourists. The 31-meter Reclining Buddha alone justifies the trip. Complete guide to Baoding Hill, Beishan, transport, and tickets.',
  keywords: [
    'Dazu Rock Carvings',
    'Dazu day trip from Chongqing',
    'Baoding Hill',
    'Beishan Dazu',
    'Dazu UNESCO',
    'Reclining Buddha Dazu',
    '大足石刻',
    'Chongqing day trip',
  ],
  openGraph: {
    title: 'Dazu Rock Carvings (大足石刻) — China’s Most Underrated UNESCO Site',
    description:
      '50,000 stone carvings spanning 600 years, barely visited by foreign tourists. The 31-meter Reclining Buddha alone justifies the trip.',
    url: 'https://www.trailofchina.com/destinations/chongqing/day-trips/dazu-rock-carvings',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Dazu Rock Carvings — China’s Most Underrated UNESCO Site - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/chongqing/day-trips/dazu-rock-carvings',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Dazu Rock Carvings from Chongqing?',
    answer:
      'Take a high-speed train from Chongqing West to Dazu South (1.5 hours, ¥30–50), then bus 204 or a DiDi to Baoding Hill (30 min). Alternatively, take a direct bus from Chongqing Caiyuanba Bus Station to Dazu (2 hours, ¥60–80), then local bus or taxi to the site. A private driver for the full day costs ¥500–700.',
  },
  {
    question: 'Should I visit Baoding Hill or Beishan — or both?',
    answer:
      'Baoding Hill is the must-see. It has the most spectacular carvings — the Reclining Buddha, the wheel of life, and the cowherd scene are all here. Plan 2–3 hours. Beishan (North Hill) is smaller, finer, and more intimate — worth it if you love Buddhist art (1 hour). If you have a full day, do both: Baoding in the morning, Beishan in the afternoon.',
  },
  {
    question: 'Is a guide worth it at Dazu?',
    answer:
      'Yes. The carvings are dense with Buddhist, Confucian, and Taoist symbolism that is almost impossible to decode on your own. Certified English-speaking guides wait at the Baoding entrance for about ¥100–150. Without one, you will see beautiful stone but miss the stories. A guide turns a confusing wall of figures into a vivid narrative spanning 600 years of Chinese religious thought.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Chongqing', path: '/destinations/chongqing' },
  { name: 'Day Trips', path: '/destinations/chongqing/day-trips' },
  { name: 'Dazu Rock Carvings', path: '/destinations/chongqing/day-trips/dazu-rock-carvings' },
]);

const searchQuery = encodeURIComponent('Dazu Rock Carvings private tour from Chongqing');

export default function DazuRockCarvingsPage() {
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
        name="Dazu Rock Carvings"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Chongqing', href: '/destinations/chongqing' },
          { label: 'Day Trips', href: '/destinations/chongqing/day-trips' },
        ]}
        nameZh="大足石刻"
        city="Chongqing"
        images={[
          { src: 'https://picsum.photos/seed/dazu-reclining-buddha/800/600', alt: 'The 31-meter Reclining Buddha at Baoding Hill, Dazu Rock Carvings' },
          { src: 'https://picsum.photos/seed/dazu-wheel-of-life/800/600', alt: 'Wheel of Life relief carved into the cliff face at Dazu' },
          { src: 'https://picsum.photos/seed/dazu-cowherd/800/600', alt: 'The famous cowherd pastoral scene at Dazu Baoding Hill' },
          { src: 'https://picsum.photos/seed/dazu-cliff-carvings/800/600', alt: 'Thousands of Buddhist figures carved into the sandstone cliffs at Dazu' },
          { src: 'https://picsum.photos/seed/dazu-beishan/800/600', alt: 'Finer Song dynasty carvings at Beishan, Dazu North Hill' },
        ]}
        hook="Dazu has 50,000 stone carvings spanning 600 years — but almost no foreign tourists visit. The 31-meter Reclining Buddha alone justifies the trip."
        quickInfo={{
          price: '¥115 Baoding / ¥140 combo',
          hours: '8:30–18:00 (summer), 8:30–17:30 (winter)',
          bestTime: 'Weekday mornings, avoid Oct holiday',
          metro: '1.5h train + 30 min bus',
        }}
        whyYouLoveIt={`Most travelers have never heard of Dazu. That is baffling, because this UNESCO World Heritage Site holds 50,000 stone carvings created over six centuries — from the Tang dynasty through the Song — and it receives a fraction of the foreign visitors that crowd Longmen or Yungang.

The reason is simple: Dazu is two hours from Chongqing, and Chongqing isn't on most first-time itineraries. But if you're here, you have no excuse.

Baoding Hill is the star. Walk through the U-shaped gorge and every surface is carved — Buddhas, bodhisattvas, demons, everyday life scenes, all flowing across the rock face in narrative sequences. The Reclining Buddha, 31 meters of serene stone lying on its side, is one of those sights that photographs cannot convey. The scale hits you in person — the feet alone are taller than you.

The real surprise is how approachable it is. Unlike cave temples at Yungang or Mogao, these are open-air reliefs you walk alongside at eye level. You can see the tool marks. The cowherd pastoral scene — where a farmer leads his ox through a landscape carved into the cliff — is so alive it could be a graphic novel panel. Buddhist hell scenes show sinners being dragged into boiling cauldrons with the energy of a horror movie.

Beishan (North Hill) is the quieter sibling. Fewer visitors, finer detail, more intimate. The Song dynasty carvings here are some of the most elegant Buddhist sculpture in all of China. If you love art, go. If you're short on time, Baoding alone is worth the trip.`}
        description={`The Dazu Rock Carvings (大足石刻) are a series of Chinese religious sculptures and carvings located in Dazu District, about 120 km west of central Chongqing. Created between the 7th and 13th centuries, they were inscribed as a UNESCO World Heritage Site in 1999.

The carvings are spread across 75 protected sites, but two are accessible to visitors: Baoding Hill (宝顶山) and Beishan (北山). Baoding is the primary site, featuring massive narrative reliefs carved into a horseshoe-shaped gorge by the monk Zhao Zhifeng between 1174 and 1252. Beishan has earlier, finer carvings dating from the late Tang and Song dynasties.

A combo ticket (¥140) covers both sites. Baoding alone costs ¥115 and is the essential visit — plan 2–3 hours. Beishan costs ¥70 and takes about 1 hour. The sites are 15 km apart; a taxi between them costs ¥20–30.`}
        hours="8:30–18:00 (Mar–Oct), 8:30–17:30 (Nov–Feb)"
        price="¥115 (Baoding Hill) / ¥70 (Beishan) / ¥140 (combo ticket)"
        nearestSubway="1.5h high-speed train from Chongqing West to Dazu South, then 30 min bus"
        bestTime="March–May and September–November, weekday mornings before tour groups arrive"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=105.7028%2C29.6964%2C105.7428%2C29.7164&layer=mapnik&marker=29.7064%2C105.7228"
        address="Baoding Hill, Dazu District, Chongqing"
        addressZh="重庆市大足区宝顶山"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Chongqing Guide', description: 'Everything you need for Chongqing — hotpot, monorail, cliffside nights.', href: '/destinations/chongqing' },
          { title: 'Wulong Karst', description: 'Three natural bridges where a river vanished underground.', href: '/destinations/chongqing/day-trips/wulong-karst' },
          { title: 'Hongyadong', description: 'The iconic cliffside complex that defines Chongqing at night.', href: '/destinations/chongqing/what-to-do/hongyadong' },
          { title: 'Ciqikou Old Town', description: '1,000-year-old porcelain town with snacks and crafts.', href: '/destinations/chongqing/what-to-do/ciqikou' },
          { title: 'Chongqing Local Tips', description: 'Mountain city survival guide — stairs, 3D navigation, hotpot rules.', href: '/destinations/chongqing/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By high-speed train (recommended): From Chongqing West Station (重庆西站), take a train to Dazu South (大足南). Journey time is about 1.5 hours, tickets ¥30–50. Trains run roughly every hour from 7 AM to 8 PM. From Dazu South Station, take bus 204 or a DiDi (about ¥30) to Baoding Hill — 30 minutes. Book train tickets on 12306 or Trip.com in advance, especially on weekends.

By bus: Direct buses leave from Chongqing Caiyuanba Bus Station (菜园坝汽车站) to Dazu town every 30 minutes from 6:30 AM. Journey takes about 2 hours, costs ¥60–80. From Dazu bus station, take bus 205 or a taxi to Baoding Hill (20 min, ¥15–25).

By private driver: ¥500–700 for a full day including waiting time. Most Chongqing hotels can arrange this. The drive takes about 2 hours each way via the G85 expressway. A driver is worthwhile if you want to visit both Baoding and Beishan in one day without managing local transport between them.`,
          whatToSkip: `Skip the tourist shops lining the path from the Baoding entrance to the carvings. They sell the usual jade, tea, and "antique" coins — all overpriced. The carved-wood souvenirs are mass-produced in factories, not local handicrafts.

Don't bother with the electric cart from the entrance to the gorge. It saves maybe 5 minutes of walking on a flat, paved path. Save your money for a guide instead — that actually enhances the experience.

If you're short on time, skip Beishan. Baoding is the essential visit and has all the "wow" moments. Beishan is for art lovers who want finer Song dynasty detail — beautiful, but not the reason most people come to Dazu.`,
          photographyTips: `The Reclining Buddha is the shot, and it's tricky. At 31 meters, you cannot fit the whole thing in frame from the viewing path. Use a wide-angle lens (16–24mm) and position yourself near the feet, shooting toward the head. Morning light comes from the east and illuminates the face first — arrive at opening for the best conditions.

The wheel of life relief is the second must-photograph carving. It's about 3 meters wide and captures beautifully at 35–50mm. The detail in the karma scenes is extraordinary — zoom in tight on individual figures for dramatic close-ups.

Avoid midday in summer. The gorge at Baoding provides shade, but the path from the entrance is fully exposed. Overcast days are actually ideal — the soft light brings out detail in the carvings without harsh shadows. The sandstone colors are richer when they're not washed out by direct sun.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Decode 600 Years of Stone Stories
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Dazu tour with an English-speaking guide who can explain every relief, every demon, every Buddhist parable — plus hotel pickup in Chongqing.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Dazu Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ English-speaking guide</span>
                <span>✓ Hotel pickup in Chongqing</span>
                <span>✓ Baoding + Beishan combo</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}