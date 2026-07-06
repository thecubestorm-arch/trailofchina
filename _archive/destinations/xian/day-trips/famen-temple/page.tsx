import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Famen Temple (法门寺) — Buddha\'s Finger Bone Relic | Day Trip from Xi\'an',
  description:
    'The complete day trip guide to Famen Temple from Xi\'an: underground palace, Tang dynasty treasures, the finger bone relic, and how to combine it with Qianling Mausoleum.',
  keywords: [
    'Famen Temple',
    'Famen Temple Xi\'an',
    'Buddha finger bone relic',
    '法门寺',
    'Famen Temple underground palace',
    'Famen Temple day trip',
    'how to get to Famen Temple',
    'Qianling Mausoleum',
    'Tang dynasty treasures',
  ],
  openGraph: {
    title: 'Famen Temple (法门寺) — Buddha\'s Finger Bone Relic | Day Trip from Xi\'an',
    description:
      'In 1987, archaeologists opened a crypt sealed since 874 AD and found a finger bone of the Buddha — along with Tang dynasty gold and silk that rewrote Chinese art history.',
    url: 'https://www.trailofchina.com/destinations/xian/day-trips/famen-temple',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Famen Temple — Buddha\'s Finger Bone Relic - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/xian/day-trips/famen-temple',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Famen Temple from Xi\'an?',
    answer:
      'The easiest way is the tourist bus from the west side of Xi\'an Railway Station (西安火车站西侧). Buses depart every 30–60 minutes from 8:00 AM, take about 2 hours, and cost ¥25 one way. The last return bus leaves Famen Temple at 15:00–16:00 depending on season. Alternatively, take a high-speed train from Xi\'an North to Yangling Station (杨陵站, 30 min, ¥30), then a DiDi to Famen Temple (30 min, ¥60–80). A private driver from Xi\'an costs ¥500–700 round trip.',
  },
  {
    question: 'Is the underground palace worth seeing?',
    answer:
      'Yes — it\'s the highlight. The underground palace (地宫) is where the actual crypt was discovered in 1987, sealed since 874 AD. You can see the original stone chambers, the niches where the relic was hidden, and reproductions of the Tang dynasty offerings. The real finger bone relic is displayed in the new pagoda above, but the underground palace gives you a visceral sense of the 1,113-year concealment. Allow 30–45 minutes for the underground palace alone.',
  },
  {
    question: 'How much time do I need at Famen Temple?',
    answer:
      'Plan 3–4 hours for the full experience: old pagoda and underground palace (1 hour), new museum with Tang dynasty treasures (1–1.5 hours), new pagoda and relic hall (1 hour), plus time walking between the two complexes (they\'re connected by a 1.2 km corridor called the "Buddhist Avenue"). If you combine with Qianling Mausoleum, it\'s a full day trip from Xi\'an.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Xi\'an', path: '/destinations/xian' },
  { name: 'Day Trips', path: '/destinations/xian/day-trips' },
  { name: 'Famen Temple', path: '/destinations/xian/day-trips/famen-temple' },
]);

const searchQuery = encodeURIComponent('Famen Temple tour from Xi\'an');

export default function FamenTemplePage() {
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
        name="Famen Temple (Day Trip)"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Xi\'an', href: '/destinations/xian' },
          { label: 'Day Trips', href: '/destinations/xian/day-trips' },
        ]}
        nameZh="法门寺"
        city="Xi'an"
        images={[
          { src: 'https://picsum.photos/seed/famen-temple-pagoda/800/600', alt: 'The new Famen Temple pagoda gleaming in sunlight' },
          { src: 'https://picsum.photos/seed/famen-underground-palace/800/600', alt: 'Stone chambers of the underground palace at Famen Temple' },
          { src: 'https://picsum.photos/seed/famen-relic-display/800/600', alt: 'The finger bone relic displayed in the new pagoda' },
          { src: 'https://picsum.photos/seed/famen-tang-gold/800/600', alt: 'Tang dynasty gold and silver artifacts in the museum' },
          { src: 'https://picsum.photos/seed/famen-buddhist-avenue/800/600', alt: 'The Buddhist Avenue corridor connecting old and new complexes' },
        ]}
        hook="In 1987, archaeologists opened a crypt under Famen Temple and found a finger bone of the Buddha, sealed since 874 AD — along with Tang dynasty gold, silver, and silk that rewrote Chinese art history."
        quickInfo={{
          price: '¥120 (temple + museum)',
          hours: '8:30–17:00',
          bestTime: 'Weekday mornings',
          metro: '2h by bus from Xi\'an',
        }}
        whyYouLoveIt={`Famen Temple isn't on most first-time visitors' radar, and that's what makes it special. The Terracotta Warriors get 10 million people a year; Famen Temple gets a fraction of that, and what it holds is arguably more extraordinary. In 1987, during repairs to the Ming-dynasty pagoda, workers broke through to an underground crypt that had been sealed for 1,113 years. Inside: four reliquary caskets nested inside each other like Russian dolls, and in the innermost one, a finger bone of the Buddha.

But the relic is just the headline. The Tang dynasty offerings buried alongside it — gold and silver vessels, silk brocades, glass from the Islamic world, celadon from Yue kilns — constitute one of the finest collections of Tang material culture ever discovered. The museum displays these with proper context and lighting, and you can spend an hour just on the gold and silver alone. There's a silver tea set that would look modern in a 21st-century design store, and a tortoise-shaped incense burner so detailed you can see the scales.

The underground palace itself is atmospheric: dim stone chambers, niches carved into the walls, the actual space where monks hid the relic from persecuting emperors. Walking through it, you feel the weight of those centuries of secrecy. This is the kind of place that makes you stop scrolling and just look.`}
        description={`Famen Temple (法门寺) is a Buddhist temple complex located 120 km west of Xi'an in Fufeng County, Shaanxi Province. Founded during the Eastern Han dynasty (25–220 AD), it's one of the most sacred Buddhist sites in China — housing what's believed to be a finger bone relic of the Buddha (释迦牟尼佛指骨舍利).

The temple's modern significance dates to April 1987, when archaeologists investigating the collapsed Ming-dynasty pagoda discovered an underground palace (地宫) that had been sealed since 874 AD. The crypt contained four nested reliquary caskets, and in the innermost one, a finger bone — one of several that Tang dynasty records described. Alongside it were over 2,000 Tang dynasty treasures: gold and silver ritual vessels, silk textiles, glassware, and ceramics of a quality that changed scholars' understanding of Tang craftsmanship.

The site today has two distinct complexes connected by a 1.2 km corridor called the Buddhist Avenue (佛光大道). The old complex contains the restored Ming-dynasty pagoda and the underground palace. The new complex, completed in 2009, features a massive modern pagoda (合十舍利塔) where the relic is displayed on certain dates, plus a museum housing the Tang dynasty treasures. The contrast between the two is striking — the old complex feels like a working temple, while the new complex feels like a monument to Buddhist heritage.

Allow 3–4 hours for a full visit. The underground palace and museum are the highlights; the new pagoda is impressive in scale but more of a modern architectural statement than a historical one.`}
        hours="8:30–17:00 (last entry 16:00, closed Mondays)"
        price="¥120 (temple + museum combined ticket), underground palace ¥100 additional"
        nearestSubway="2h by tourist bus from Xi'an Railway Station"
        bestTime="Weekday mornings. Avoid weekends and Buddhist festivals when pilgrim crowds are large."
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=107.8766%2C34.4497%2C107.9166%2C34.4897&layer=mapnik&marker=34.4697%2C107.8966"
        address="Famen Town, Fufeng County, Baoji, Shaanxi"
        addressZh="陕西省宝鸡市扶风县法门镇"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Terracotta Warriors', description: 'Xi\'an\'s most famous attraction — 8,000 clay soldiers.', href: '/destinations/xian/what-to-do/terracotta-warriors' },
          { title: 'Big Wild Goose Pagoda', description: 'Tang dynasty pagoda in central Xi\'an.', href: '/destinations/xian/what-to-do/big-wild-goose-pagoda' },
          { title: 'Shaanxi History Museum', description: 'Free museum with Tang dynasty artifacts — pairs well with Famen Temple context.', href: '/destinations/xian/what-to-do/shaanxi-history-museum' },
          { title: 'Xi\'an City Wall', description: 'Bike the best-preserved ancient city wall in China.', href: '/destinations/xian/what-to-do/city-wall' },
          { title: 'Xi\'an Local Tips', description: 'Practical tips for navigating Xi\'an like a local.', href: '/destinations/xian/local-tips' },
          { title: 'Where to Eat in Xi\'an', description: 'Roujiamo, biangbiang noodles, and more.', href: '/destinations/xian/where-to-eat' },
        ]}
        tips={[
          { type: 'tip' as const, text: 'The finger bone relic is only displayed on the 1st and 15th of each lunar month, plus major Buddhist holidays. Check the calendar before you go if seeing the relic matters to you' },
          { type: 'tip' as const, text: 'Start with the underground palace and museum in the old complex — they\'re the real highlight. Then walk the Buddhist Avenue to the new pagoda' },
          { type: 'tip' as const, text: 'The Buddhist Avenue is 1.2 km of exposed walkway. Bring a hat and water in summer — there\'s almost no shade' },
          { type: 'tip' as const, text: 'Combine with Qianling Mausoleum (武则天乾陵) for a full day — they\'re 40 minutes apart by car' },
          { type: 'photo' as const, text: 'The Tang dynasty gold and silver in the museum is beautifully lit — bring a fast lens for low-light shots (f/2.8 or wider)' },
          { type: 'photo' as const, text: 'The Buddhist Avenue leading to the new pagoda makes a dramatic perspective shot — get low and shoot toward the pagoda' },
        ]}
        practicalDetails={{
          gettingThere: `Tourist bus (most common): From the west side of Xi'an Railway Station (西安火车站西侧), buses depart every 30–60 minutes starting at 8:00 AM. The trip takes about 2 hours and costs ¥25 one way. The last bus back from Famen Temple leaves around 15:00–16:00 depending on season. Buy tickets at the station — don't pay anyone who approaches you offering "direct" transport.

High-speed train + DiDi (faster): Take a train from Xi'an North Station (西安北站) to Yangling Station (杨陵站), about 30 minutes, ¥30. From Yangling, DiDi to Famen Temple takes 30 minutes and costs ¥60–80. This cuts total travel time from 4 hours to about 2.5 hours round trip. The catch: you need DiDi/Alipay working, and trains need booking ahead on 12306.

Private driver (most comfortable): ¥500–700 round trip from Xi'an, 90 minutes each way. The driver waits for you. Best if you're combining Famen Temple with Qianling Mausoleum in one day — the driver can take you between both sites. Most Xi'an hotels can arrange this.

Organized tour: Several operators run Famen Temple + Qianling day tours from Xi'an for ¥300–500 per person including transport and guide. The guide quality varies wildly — read reviews before booking.`,
          whatToSkip: `The Buddhist Avenue (佛光大道) is a 1.2 km walk between the old and new complexes. It's an impressive processional way with golden statues, but it's also completely exposed to sun and wind. If you're visiting in summer, walk it quickly and carry water. In winter, the wind can be brutal. The shuttle bus (¥10) is worth it if you're tired after the museum.

The new pagoda (合十舍利塔) is architecturally impressive — a 148-meter structure shaped like hands in prayer — but it's modern (completed 2009) and feels more like a monument than a temple. If you're short on time, spend it in the old complex and museum, which have the actual history. The new pagoda is worth a quick look but don't budget more than 30 minutes.

Skip the commercial zone near the entrance. The "Famen Temple Cultural Scenic Area" includes souvenir shops and overpriced vegetarian restaurants. The food is fine but overpriced — eat a big breakfast in Xi'an or bring snacks.`,
          photographyTips: `The underground palace is dimly lit with warm-toned spotlights. Use a fast lens (f/1.8–2.8) and push ISO to 1600–3200. No flash allowed — it damages the ancient stone. The stone chambers photograph beautifully in the ambient light if your lens is fast enough.

The museum's Tang dynasty gold and silver collection is the real prize. The display cases have good lighting, but you'll be shooting through glass. Use a polarizing filter or shoot at an angle to minimize reflections. A 50mm or 85mm portrait lens gives clean details without distortion.

The Buddhist Avenue makes a dramatic leading-line composition — stand at one end and shoot toward the distant pagoda with the golden statues in the foreground. Early morning or late afternoon light is best, when the low sun catches the gilded surfaces.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                See Tang Dynasty Gold Up Close
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Famen Temple tour with transport from Xi'an — and combine it with Qianling Mausoleum for the full western Shaanxi history day.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Famen Temple Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Transport from Xi'an</span>
                <span>✓ Combine with Qianling</span>
                <span>✓ Expert English guide</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}