import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Leshan Giant Buddha (乐山大佛) — The World\'s Largest Stone Buddha',
  description:
    'A 71-meter Buddha carved into a cliff face, with toes taller than most people — Leshan is the largest stone Buddha in the world, and the river cruise view will make your jaw drop.',
  keywords: [
    'Leshan Giant Buddha',
    'Leshan day trip from Chengdu',
    '乐山大佛',
    'Leshan river cruise',
    'largest stone Buddha',
    'how to get to Leshan from Chengdu',
    'Leshan tickets',
  ],
  openGraph: {
    title: 'Leshan Giant Buddha (乐山大佛) — The World\'s Largest Stone Buddha',
    description:
      'A 71-meter Buddha carved into a cliff face, with toes taller than most people. Complete guide to getting there, river cruise vs walking, and ticket prices.',
    url: 'https://www.trailofchina.com/destinations/chengdu/day-trips/leshan-giant-buddha',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Leshan Giant Buddha — The World\'s Largest Stone Buddha - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/chengdu/day-trips/leshan-giant-buddha',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to the Leshan Giant Buddha from Chengdu?',
    answer:
      'Take a high-speed train from Chengdu East Station to Leshan Station (about 1 hour, ¥50–65). From Leshan Station, a taxi or DiDi takes 15 minutes to the scenic area. Alternatively, buses depart from Chengdu Xinnanmen Bus Station every 30 minutes; the ride takes about 3 hours (¥45). The train is faster and more comfortable.',
  },
  {
    question: 'Should I take the river cruise or walk to see the Buddha?',
    answer:
      'Do both if you can. The river cruise (¥70, 30 minutes) gives you the only full-frontal view of the entire 71-meter Buddha — the perspective that makes you understand the scale. Then walk the scenic area to see the details up close, including the staircase carved into the cliff alongside the Buddha. If you only have time for one, take the cruise.',
  },
  {
    question: 'How long do I need at Leshan Giant Buddha?',
    answer:
      'Plan 4–5 hours total if you do both the river cruise and the walking tour (including the steep staircase). The scenic area walk takes 2–3 hours. With train travel time, count on a full day trip from Chengdu. If you want to combine Leshan with Mount Emei, stay overnight in Leshan and head to Emei the next morning.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Chengdu', path: '/destinations/chengdu' },
  { name: 'Day Trips', path: '/destinations/chengdu/day-trips' },
  { name: 'Leshan Giant Buddha', path: '/destinations/chengdu/day-trips/leshan-giant-buddha' },
]);

const searchQuery = encodeURIComponent('Leshan Giant Buddha tour from Chengdu');

export default function LeshanGiantBuddhaPage() {
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
        name="Leshan Giant Buddha"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Chengdu', href: '/destinations/chengdu' },
          { label: 'Day Trips', href: '/destinations/chengdu/day-trips' },
        ]}
        nameZh="乐山大佛"
        city="Chengdu"
        images={[
          { src: 'https://picsum.photos/seed/leshan-buddha-river/800/600', alt: 'Leshan Giant Buddha seen from the river cruise boat' },
          { src: 'https://picsum.photos/seed/leshan-buddha-face/800/600', alt: 'Close-up of the Leshan Buddha face carved into the cliff' },
          { src: 'https://picsum.photos/seed/leshan-buddha-toes/800/600', alt: 'Visitors standing next to the Buddha toes showing massive scale' },
          { src: 'https://picsum.photos/seed/leshan-buddha-stairs/800/600', alt: 'Steep red sandstone staircase alongside the Leshan Buddha' },
          { src: 'https://picsum.photos/seed/leshan-buddha-temple/800/600', alt: 'Lingyun Temple above the Leshan Giant Buddha' },
        ]}
        hook="A 71-meter Buddha carved into a cliff face, with toes taller than most people — Leshan is the largest stone Buddha in the world, and the river cruise view will make your jaw drop."
        quickInfo={{
          price: '¥80 (scenic area), ¥70 extra for river cruise',
          hours: '7:30–18:30 (summer), 8:00–17:30 (winter)',
          bestTime: 'Weekday mornings Apr–Jun, Sep–Nov',
          metro: '1h high-speed train + 15 min taxi',
        }}
        whyYouLoveIt={`Most visitors to Leshan walk down the staircase alongside the Buddha, crane their neck up from the base, take a photo, and leave. That's fine, but it misses the point. The Leshan Buddha was designed to be seen from the water — that's why it faces the confluence of the Min and Dadu rivers, calm and impassive, watching the water that has tried to erode it for 1,300 years.

Take the river cruise first. Thirty minutes on the water, and when the boat turns the bend, the entire Buddha appears — head in the clouds, shoulders forming a cliff, toes dipping into the river. This is the view that makes people go quiet. The scale doesn't register from the stairs. From the river, you see that this is not a statue built onto a mountain — this IS the mountain, carved down to reveal the Buddha within.

Then walk the scenic area. The staircase alongside the Buddha is narrow, steep, and often crowded, but it lets you see the craftsmanship: the drainage system built into the hair curls, the fingers wider than a person is tall, the weathered stone face that has stared at floods, wars, and tourists since the Tang dynasty. The Lingyun Temple at the top is worth a quiet moment before you descend.`}
        description={`The Leshan Giant Buddha (乐山大佛) is a 71-meter-tall stone statue of Maitreya carved into a cliff at the confluence of the Min and Dadu rivers in Leshan, Sichuan. Begun in 713 AD during the Tang dynasty by a monk named Hai Tong, it took 90 years to complete. The Buddha was originally intended to calm the treacherous river currents that had long plagued boat traffic — and according to local legend, the massive amount of stone removed and deposited in the river actually did change the water flow.

The statue is the largest stone Buddha in the world and a UNESCO World Heritage Site (listed together with Mount Emei). Each of the Buddha's ears is 7 meters long, its fingers are 8.3 meters, and its toes are 1.5 meters — taller than most people standing upright. A sophisticated drainage system hidden within the hair curls and behind the ears prevents water from pooling and eroding the stone, a piece of engineering that has kept the statue standing for over a millennium.

The scenic area includes the Buddha, Lingyun Temple above it, and walking paths through forested cliffs. The river cruise runs year-round and departs from Wuyou Pier, about 1 km from the main entrance.`}
        hours="7:30–18:30 (Apr–Oct), 8:00–17:30 (Nov–Mar)"
        price="¥80 (scenic area), ¥70 (river cruise), ¥70 (Lingyun Temple, optional)"
        nearestSubway="1h high-speed train from Chengdu East to Leshan, then 15 min taxi"
        bestTime="April–June and September–November, weekday mornings before 9 AM"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=103.7622%2C29.5344%2C103.7822%2C29.5544&layer=mapnik&marker=29.5444%2C103.7722"
        address="No. 2435, Leshan Avenue, Shizhong District, Leshan City"
        addressZh="四川省乐山市市中区嘉定路2435号"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Giant Panda Base', description: "Chengdu's most famous residents — arrive early, stay for the red pandas.", href: '/destinations/chengdu/what-to-do/giant-panda-base' },
          { title: 'Mount Qingcheng Day Trip', description: 'Birthplace of Taoism — misty forests and hidden temples an hour from Chengdu.', href: '/destinations/chengdu/day-trips/mount-qingcheng' },
          { title: 'Dujiangyan Panda Valley', description: 'Fewer crowds, more natural enclosures, and a volunteer program inches from the pandas.', href: '/destinations/chengdu/day-trips/dujiangyan-panda-valley' },
          { title: 'Chengdu Day Trips', description: 'All the best day trips from Chengdu in one guide.', href: '/destinations/chengdu/day-trips' },
          { title: 'Chengdu Local Tips', description: 'Practical insider tips for navigating Chengdu.', href: '/destinations/chengdu/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By high-speed train (recommended): Trains depart from Chengdu East Railway Station (成都东站) to Leshan Station (乐山站) roughly every 30 minutes. The journey takes about 1 hour and costs ¥50–65. From Leshan Station, take a DiDi or taxi to the Leshan Giant Buddha scenic area (about 15 minutes, ¥15–20). Buy train tickets on the 12306 app in advance, especially on weekends and holidays.

By bus: Chengdu Xinnanmen Bus Station (成都新南门车站) runs buses to Leshan every 30 minutes from 7:00 AM. The journey takes about 3 hours (¥45). Buses arrive at Leshan Bus Station, from which it's a 10-minute taxi ride to the scenic area. The bus is slower but runs frequently and requires no advance booking.

By private driver or tour: DiDi from central Chengdu costs ¥200–300 one way and takes about 2 hours on the expressway. Organized day tours from Chengdu hotels run ¥350–500 including transport and tickets — convenient but on someone else's schedule.`,
          whatToSkip: `Skip the weekend if you can. Saturdays and Sundays bring massive domestic tour groups, and the narrow staircase alongside the Buddha becomes a slow-moving queue. Weekday mornings before 9 AM are the sweet spot.

Skip the "convenient" lunch spots near the entrance — overpriced and mediocre. Walk 10 minutes into Leshan's old town for proper Sichuan food at local prices. Leshan is famous across Sichuan for its sweet duck (甜皮鸭), bobo chicken (钵钵鸡), and tofu brain (豆腐脑) — you didn't come all this way to eat tourist noodles.

If you're short on time, skip the Lingyun Temple (unless you enjoy Buddhist temples) and focus on the river cruise plus the Buddha staircase. The temple is pleasant but not essential, and the real spectacle is the Buddha itself.`,
          photographyTips: `The river cruise shot is the one you came for. As the boat approaches from upstream, the Buddha reveals itself gradually — first the head above the tree line, then the shoulders, then the full figure. Start shooting early because the boat doesn't linger long at the best angle. A 24–70mm lens covers the full Buddha from the water.

For the up-close perspective, shoot from the base of the Buddha looking up. The toes are the most photographed detail — position a person next to them to show the absurd scale. The drainage channels in the hair curls are also worth a close-up; they're a 1,300-year-old engineering solution that most visitors walk past.

Morning light hits the Buddha face directly. Afternoon puts the cliff face in shadow. If you want both good light and small crowds, aim for a weekday morning in October — clear skies, golden light, and thin crowds.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                See the Largest Stone Buddha from the Water
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a Leshan day trip from Chengdu with high-speed train tickets, river cruise, and an English-speaking guide who knows the best viewpoints.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Leshan Giant Buddha Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Round-trip train tickets</span>
                <span>✓ River cruise included</span>
                <span>✓ Skip the weekend crowds</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}