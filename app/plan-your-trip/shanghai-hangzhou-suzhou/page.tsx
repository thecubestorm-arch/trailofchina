import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shanghai → Suzhou → Hangzhou: The Golden Triangle Route (7-10 Days)',
  description:
    'The easy, comfortable China route. Three cities within one hour of each other — silk, tea, water towns, and eastern China\'s best food. Day-by-day guide.',
  path: '/plan-your-trip/shanghai-hangzhou-suzhou',
  keywords: [
    'Shanghai Suzhou Hangzhou itinerary',
    'Golden Triangle China route',
    'water towns China travel',
    'east China travel route',
    'Suzhou gardens travel guide',
    'Hangzhou West Lake itinerary',
  ],
})

const faqs = [
  {
    question: 'How many days for the Shanghai-Suzhou-Hangzhou route?',
    answer: '7-10 days is the sweet spot. Three days in Shanghai, two in Suzhou, two to three in Hangzhou. You can add a day trip or two (Tongli, Zhujiajiao) if you have 10 days.',
  },
  {
    question: 'Is this route good for first-time China visitors?',
    answer: 'Yes — especially if you want a relaxed pace. All three cities are within an hour of each other by train, food is excellent everywhere, and English is more widely spoken than in most Chinese cities. It\'s the least stressful first-timer route.',
  },
  {
    question: 'Should I visit Zhouzhuang or Tongli water town?',
    answer: 'Go to Tongli. Zhouzhuang is more famous but heavily commercialized and crowded. Tongli is smaller, quieter, and more authentic. Plus it\'s closer to Suzhou — 30 minutes by bus.',
  },
  {
    question: 'Can I bike around West Lake in Hangzhou?',
    answer: 'Absolutely — it\'s the best way to see it. Rent a shared bike (Hellobike via Alipay) or a hotel bike. The full loop is about 15km and takes 2-3 hours with stops. Go early morning for fewer crowds.',
  },
]

const relatedArticles = [
  {
    title: "Beijing → Xi'an → Shanghai: Classic China Route",
    description: 'The #1 first-timer route covering imperial history, ancient civilization, and modern China.',
    href: '/plan-your-trip/beijing-shanghai-xian',
  },
  {
    title: '7-Day China Route',
    description: 'A practical one-week itinerary covering Beijing, Xi\'an, and Shanghai.',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: 'Budget Guide',
    description: 'How much to budget for your China trip, with cost breakdowns by city.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Best Time to Visit China',
    description: 'When to go based on weather, crowds, and seasonal events.',
    href: '/plan-your-trip/best-time-to-visit',
  },
]

export default function ShanghaiHangzhouSuzhouPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Plan Your Trip', path: '/plan-your-trip' },
    { name: 'Shanghai → Suzhou → Hangzhou', path: '/plan-your-trip/shanghai-hangzhou-suzhou' },
  ])
  const faqJsonLd = faqPageSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
        }}
      >
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Plan Your Trip', href: '/plan-your-trip' },
                { label: 'Shanghai → Suzhou → Hangzhou' },
              ]}
            />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="杭" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Shanghai → Suzhou → Hangzhou
            </h1>
            <p className="text-2xl sm:text-3xl font-serif text-[var(--primary)] mb-2 relative z-10">
              The Golden Triangle
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">江南</span>
              <span className="text-lg">• 7-10 Days • Plan Your Trip</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Relaxed pace</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Short train hops (30-60 min)</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Typical total: ¥6,000-12,000</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Three cities within an hour of each other — silk, tea, water towns, and the best food in eastern China.
            The most comfortable way to see China for the first time.
          </p>

          <div className="mb-10">
            <img
              src="https://picsum.photos/seed/shanghai-suzhou-hangzhou-route/1600/900"
              alt="Golden Triangle route through Shanghai, Suzhou, and Hangzhou"
              className="h-64 w-full rounded-lg object-cover md:h-96"
            />
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Route Works</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                This is the China you see in paintings — misty gardens, arched stone bridges, willow-lined canals.
                Shanghai gives you the big-city buzz. Suzhou is the garden capital of China (nine UNESCO sites).
                Hangzhou has West Lake, the most celebrated landscape in Chinese art history. And all three
                are connected by 30-60 minute high-speed trains.
              </p>
              <p>
                <strong>Route:</strong> Shanghai (3 days) → Suzhou (2 days) → Hangzhou (2-3 days) → optional return to Shanghai
              </p>
              <p>
                <strong>Best for:</strong> Travelers who want culture and scenery without the long train rides.
              </p>
              <p>
                <strong>Ideal duration:</strong> 8 days (10 with day trips).
              </p>
            </div>
          </section>

          {/* Day-by-day */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

            {/* Shanghai */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 1-3: Shanghai</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Modern China meets colonial history</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 1 — Arrive + The Bund:</strong> Check in near People&apos;s Square or the French Concession. Walk the Bund at dusk — the skyline lights come on around 6:30pm. Dinner on Yunnan South Road (cheap, authentic, chaotic).</p>
                <p><strong>Day 2 — Yu Garden + French Concession:</strong> Yu Garden by 9am (it gets packed by 11). Explore the zigzag bridge and City God Temple bazaar. Afternoon: French Concession. Walk Fuxing Road, browse Tianzifang alleys, coffee on Anfu Road.</p>
                <p><strong>Day 3 — Shanghai Museum + neighborhoods:</strong> Shanghai Museum (bronze, jade, calligraphy — free). Afternoon: Xintiandi or Jing&apos;an Temple. Evening: train to Suzhou (30 min, every 15 min, ¥40).</p>
              </div>
            </div>

            {/* Suzhou */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 4-5: Suzhou</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Gardens, silk, and canal-side living</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 4 — Gardens + Pingjiang Road:</strong> Humble Administrator&apos;s Garden (拙政园) — book online, go early. It&apos;s the largest and most famous classical garden in Suzhou. Afternoon: walk Pingjiang Road, a canal-lined stone street with tea houses and shops. Dinner: Songhelou restaurant on Taijian Lane (Suzhou-style squirrel fish).</p>
                <p><strong>Day 5 — Tongli water town + silk:</strong> Morning day trip to Tongli (30 min by bus). Smaller, quieter, more real than Zhouzhuang. Back in Suzhou by afternoon: Suzhou Museum (I.M. Pei designed, free), silk market on Guanqian Street. Evening train to Hangzhou (1.5h, ¥80-120).</p>
              </div>
            </div>

            {/* Hangzhou */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 6-8: Hangzhou</h3>
              <p className="text-[var(--muted)] text-sm mb-4">West Lake, tea villages, and temple trails</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 6 — West Lake:</strong> Rent a bike and ride the full loop (15km, 2-3h with stops). Broken Bridge, Three Pools Mirroring the Moon, Leifeng Pagoda. Lunch at a lakeside restaurant. Afternoon: boat to the island in the middle.</p>
                <p><strong>Day 7 — Lingyin Temple + Longjing tea village:</strong> Lingyin Temple (one of China&apos;s oldest Buddhist temples, 4th century). Walk up to Feilai Feng grottoes. Afternoon: Longjing Village — taste fresh dragon well tea with a farmer, walk the terraced hills.</p>
                <p><strong>Day 8 — Departure or extend:</strong> Head back to Shanghai (1h by train) for your flight, or extend: Hefang Street for souvenirs, Xixi Wetland Park, or a day trip to Zhujiajiao water town near Shanghai.</p>
              </div>
            </div>

            {/* Optional extensions */}
            <div className="mb-8 p-6 rounded-xl bg-[#fdf8f3] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Days 9-10: Extensions</h3>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Zhujiajiao water town:</strong> 45 min from Shanghai by bus. Less commercialized than Zhouzhuang, real locals still live here.</p>
                <p><strong>Back to Shanghai for departure:</strong> Most international flights leave from PVG. Keep a half-day buffer. Last-minute shopping on Nanjing Road (convenient, if touristy).</p>
              </div>
            </div>
          </section>

          {/* Transport */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Getting Between Cities</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>Shanghai → Suzhou:</strong> High-speed train, 25-30 min, ¥30-40. Trains run every 10-15 min. Depart Shanghai Station or Hongqiao, arrive Suzhou Station.
              </p>
              <p>
                <strong>Suzhou → Hangzhou:</strong> High-speed train, 1-1.5h, ¥80-120. Multiple departures per hour.
              </p>
              <p>
                <strong>Hangzhou → Shanghai:</strong> High-speed train, 1h, ¥70-90. The easiest return leg of any China route.
              </p>
              <p>
                This is the beauty of the Golden Triangle — no flights, no overnight trains, no long hauls. Pack light and hop between cities like subway stops.
              </p>
            </div>
          </section>

          {/* Budget */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
              Estimated Budget (8 Days, per person)
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Accommodation:</strong> ¥2,400-4,800 (¥300-600/night mid-range)</p>
              <p><strong>Intercity transport:</strong> ¥300-500 (all short train hops — cheap!)</p>
              <p><strong>Food:</strong> ¥1,200-2,400 (¥150-300/day — eastern China eats well and cheap)</p>
              <p><strong>Attractions:</strong> ¥600-1,200 (gardens, temples, museums)</p>
              <p><strong>Local transport + incidentals:</strong> ¥500-1,000</p>
              <p><strong>Typical total: ¥6,000-12,000 (about $830-1,650)</strong></p>
            </div>
          </section>

          {/* Best time */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Best Time to Go</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>March-May (spring):</strong> Plum blossoms in Suzhou, tea harvest in Longjing, comfortable temps. Peak season — book gardens ahead.
              </p>
              <p>
                <strong>September-November (autumn):</strong> Osmanthus season in Hangzhou (the whole city smells like flowers), cool and dry. Late October is magical around West Lake.
              </p>
              <p>
                <strong>Avoid:</strong> June-July (plum rain season — weeks of drizzle), July-August (hot and humid), October 1-7 (Golden Week).
              </p>
            </div>
          </section>

          {/* What to skip */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Skip</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Zhouzhuang water town</strong> — overpriced (¥100 entrance), overcrowded, and feels like a theme park. Tongli is the real deal.</p>
              <p><strong>Lion Grove Garden</strong> in Suzhou — if you&apos;re doing Humble Administrator&apos;s Garden, Lion Grove is redundant. Skip unless you love rock mazes.</p>
              <p><strong>Impression West Lake show</strong> in Hangzhou — expensive and touristy. Spend that evening eating along Shengli River food street instead.</p>
            </blockquote>
          </section>

          {/* Pro tips */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Book Suzhou garden tickets online — the Humble Administrator&apos;s Garden limits daily visitors and turns people away.</p>
              <p>Bike around West Lake. It&apos;s flat, scenic, and you&apos;ll see ten times more than the tourist boats. Hellobike (via Alipay) has stations everywhere.</p>
              <p>Try Suzhou&apos;s breakfast noodles at Tongdexing — pork broth simmered for hours. It opens at 6am and sells out by 9.</p>
              <p>Longjing tea: buy directly from farmers in the village, not from the shops on the main road. Prices are half, quality is better.</p>
            </blockquote>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{faq.question}</h3>
                  <p className="mt-2 text-[var(--muted)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10 border-t border-[#ebe4d8] pt-8">
            <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Routes &amp; Guides</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                  <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                  <p className="mt-1 text-[var(--muted)]">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <ContextualCTA
            icon="🌸"
            title="Want the Full China Experience?"
            description="Add Beijing and Xi'an to this route for the classic 10-12 day first-timer circuit."
            buttonText="See Classic China Route →"
            buttonHref="/plan-your-trip/beijing-shanghai-xian"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}