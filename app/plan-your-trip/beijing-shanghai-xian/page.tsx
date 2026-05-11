import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: "Beijing → Xi'an → Shanghai: The Classic China Route (10-12 Days)",
  description:
    "The #1 first-timer route through China. Day-by-day guide for Beijing, Xi'an, and Shanghai — with transport tips, budget estimates, and what to skip.",
  path: '/plan-your-trip/beijing-shanghai-xian',
  keywords: [
    'China first timer itinerary',
    'Beijing Xi\'an Shanghai route',
    'classic China travel route',
    '10 day China itinerary',
    'Beijing to Shanghai travel',
    'Terracotta Warriors trip',
  ],
})

const faqs = [
  {
    question: 'How many days do I need for Beijing → Xi\'an → Shanghai?',
    answer: '10-12 days is ideal. You can squeeze it into 7 days, but you\'ll be rushing. 10 days gives you enough time in each city without feeling like you\'re always packing bags.',
  },
  {
    question: 'Should I take the train or fly between cities?',
    answer: 'Beijing to Xi\'an: take the high-speed train (4.5h) — it\'s scenic and comfortable. Xi\'an to Shanghai: flight (2.5h) saves time; the train takes 6+ hours. A night train from Beijing to Xi\'an can save a hotel night.',
  },
  {
    question: 'Is this route good for first-time China visitors?',
    answer: 'Yes, this is the most popular first-timer route for good reason. You see imperial history (Beijing), ancient civilization (Xi\'an), and modern China (Shanghai) — the full story in three cities.',
  },
  {
    question: 'What should I skip if I\'m short on time?',
    answer: 'Skip the Summer Palace in Beijing if rushed, avoid Badaling Great Wall (go to Mutianyu instead), and skip overpriced Huangpu River cruises in Shanghai. None of those are essential.',
  },
]

const relatedArticles = [
  {
    title: '7-Day China Route',
    description: 'The compressed version of this route for travelers with limited time.',
    href: '/plan-your-trip/preplanned-trips/7-day-route',
  },
  {
    title: '10-Day Extended China Route',
    description: 'Add Chengdu pandas and Yangshuo karst to the classic circuit.',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
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

export default function BeijingShanghaiXianPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Plan Your Trip', path: '/plan-your-trip' },
    { name: "Beijing → Xi'an → Shanghai", path: '/plan-your-trip/beijing-shanghai-xian' },
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
                { label: "Beijing → Xi'an → Shanghai" },
              ]}
            />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="京" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Beijing → Xi&apos;an → Shanghai
            </h1>
            <p className="text-2xl sm:text-3xl font-serif text-[var(--primary)] mb-2 relative z-10">
              The Classic China Route
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">经典</span>
              <span className="text-lg">• 10-12 Days • Plan Your Trip</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Moderate pace</span>
            <span className="text-[var(--muted)]">·</span>
            <span>High-speed trains + 1 flight</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Typical total: ¥8,000-15,000</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Three cities, three eras, one complete story: imperial grandeur, ancient civilization, and the China of tomorrow.
            This is the route that made millions of travelers fall in love with China.
          </p>

          <div className="mb-10">
            <img
              src="https://picsum.photos/seed/beijing-xian-shanghai-route/1600/900"
              alt="Classic China route from Beijing through Xi'an to Shanghai"
              className="h-64 w-full rounded-lg object-cover md:h-96"
            />
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Route Works</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                If you only go to China once, this is the route. Beijing gives you the imperial story — Forbidden City,
                Great Wall, Temple of Heaven. Xi&apos;an is where Chinese civilization began — the Terracotta Warriors,
                a intact city wall you can bike on, and a Muslim Quarter that stays alive until 2am. Shanghai is modern
                China at its most impressive — the Bund skyline, French Concession cafes, and a food scene that rivals anywhere.
              </p>
              <p>
                <strong>Route:</strong> Beijing (4 days) → Xi&apos;an (2 days) → Shanghai (3-4 days)
              </p>
              <p>
                <strong>Best for:</strong> First-time visitors who want the essential highlights without rushing.
              </p>
              <p>
                <strong>Minimum:</strong> 7 days (fast-paced). <strong>Ideal:</strong> 10-12 days (comfortable).
              </p>
            </div>
          </section>

          {/* Day-by-day */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

            {/* Beijing */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 1-4: Beijing</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Imperial capital — palaces, walls, and hutong alleys</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 1 — Arrive &amp; reset:</strong> Check in near Wangfujing or Dongcheng. Wander the hutongs around Nanluoguxiang. Light dinner, fight the jet lag.</p>
                <p><strong>Day 2 — Forbidden City + Jingshan:</strong> Start at Tiananmen by 8:30am, walk north through the Forbidden City (book tickets online in advance — they sell out). Exit at the north gate, climb Jingshan Park for the classic palace-roof panorama. Evening: Wangfujing or Guijie for dinner.</p>
                <p><strong>Day 3 — Great Wall (Mutianyu):</strong> Full-day trip to Mutianyu (skip Badaling — it&apos;s crowded and touristy). Bus or driver, 90 min each way. Cable car up, toboggan down. Back in Beijing by late afternoon. Rest or explore Sanlitun.</p>
                <p><strong>Day 4 — Temple of Heaven + hutongs:</strong> Morning at Temple of Heaven (go early to see locals doing tai chi). Afternoon: cycle hutongs with a local guide or explore the Drum and Bell Towers. Evening train to Xi&apos;an (or fly next morning).</p>
              </div>
            </div>

            {/* Xi'an */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 5-6: Xi&apos;an</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Ancient capital — warriors, walls, and street food</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 5 — Terracotta Warriors:</strong> Get there early (8am opening). Bus 306 from the railway station or book a driver. Spend 3-4 hours. Afternoon: Muslim Quarter for lamb roujiamo and biangbiang noodles. Evening: walk or cycle the City Wall at sunset.</p>
                <p><strong>Day 6 — Xi&apos;an morning → Shanghai:</strong> Quick morning visit to the Shaanxi History Museum (free but get there early for tickets). Fly to Shanghai in the afternoon (2.5h) or take the high-speed train (6h — book in advance).</p>
              </div>
            </div>

            {/* Shanghai */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 7-10: Shanghai</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Modern China — skyline, food, and colonial charm</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 7 — The Bund + Yu Garden:</strong> Walk the Bund at dawn (fewer crowds, great light). Explore Yu Garden and City God Temple area for lunch. Afternoon: French Concession — stroll Xintiandi, Tianzifang arts quarter.</p>
                <p><strong>Day 8 — Shanghai Museum + local life:</strong> Shanghai Museum (free, excellent bronze and calligraphy collections). Afternoon: explore Jing&apos;an Temple area, or hit a local wet market. Evening: upscale dinner on the Bund or street food at Shouning Road.</p>
                <p><strong>Day 9 — Suzhou day trip (optional):</strong> 30 min by high-speed train. Humble Administrator&apos;s Garden, Pingjiang Road, and silk markets. Back by evening. Or skip Suzhou and spend the day exploring more of Shanghai — Xuhui riverside, Power Station of Art.</p>
                <p><strong>Day 10 — Departure:</strong> Last-minute shopping on Nanjing Road. Keep 4-5 hours buffer before your international flight out of PVG.</p>
              </div>
            </div>
          </section>

          {/* Transport */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Getting Between Cities</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>Beijing → Xi&apos;an:</strong> High-speed train (G-train), 4.5-6h, ¥515-825 depending on class. Departs Beijing West, arrives Xi&apos;an North. Book on Trip.com 2-3 weeks ahead. A night train (Z-train) saves a hotel night — leaves ~9pm, arrives ~8am.
              </p>
              <p>
                <strong>Xi&apos;an → Shanghai:</strong> Flight is fastest (2.5h, ¥600-1,200). High-speed train takes 6-7h (¥670-1,050) — scenic but eats a day. If budget &gt; time, train; if time &gt; budget, fly.
              </p>
              <p>
                <strong>Within cities:</strong> All three cities have excellent metro. Load Alipay or WeChat Pay for QR-code transit. Taxis are cheap but drivers rarely speak English — have your destination written in Chinese.
              </p>
            </div>
          </section>

          {/* Budget */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
              Estimated Budget (10 Days, per person)
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Accommodation:</strong> ¥3,000-6,000 (mid-range hotels, ¥300-600/night)</p>
              <p><strong>Intercity transport:</strong> ¥1,200-2,000 (trains + 1 flight)</p>
              <p><strong>Food:</strong> ¥1,500-3,000 (¥150-300/day, street food to mid-range)</p>
              <p><strong>Attractions:</strong> ¥800-1,500 (Forbidden City, Terracotta Warriors, Great Wall, etc.)</p>
              <p><strong>Local transport + incidentals:</strong> ¥500-1,000</p>
              <p><strong>Typical total: ¥8,000-15,000 (about $1,100-2,100)</strong></p>
            </div>
          </section>

          {/* Best time */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Best Time to Go</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>April-May (spring):</strong> Comfortable temperatures, cherry blossoms in Xi&apos;an, clear skies in Beijing. Peak season — book ahead.
              </p>
              <p>
                <strong>September-November (autumn):</strong> The sweet spot. Cool weather, fall colors, fewer summer crowds. October Golden Week (1st-7th) is an exception — avoid it.
              </p>
              <p>
                <strong>Avoid:</strong> July-August (hot, humid, packed), January-February (cold + Chinese New Year chaos), and October 1-7 (Golden Week).
              </p>
            </div>
          </section>

          {/* What to skip */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Skip</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Badaling Great Wall</strong> — overcrowded and commercialized. Mutianyu is better in every way: fewer people, better preserved, and the toboggan ride down is fun.</p>
              <p><strong>Summer Palace</strong> — if you&apos;re short on time, skip it. It&apos;s beautiful but takes a half-day and doesn&apos;t add much if you&apos;ve already seen the Forbidden City and Temple of Heaven.</p>
              <p><strong>Huangpu River cruises</strong> in Shanghai — overpriced and underwhelming. Walk the Bund at night instead. Free, better views, same skyline.</p>
              <p><strong>Nanjing Road shopping</strong> — a tourist trap. If you want shopping, go to Tianzifang or the French Concession boutiques.</p>
            </blockquote>
          </section>

          {/* Pro tips */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Book Terracotta Warriors and Forbidden City tickets online in advance — they sell out daily, especially in peak season.</p>
              <p>Download Alipay and WeChat before arriving — you need them for almost everything (transit, food, tickets, even street vendors).</p>
              <p>The night train Beijing → Xi&apos;an saves a hotel night and travel time. Z19 or Z53 depart around 9pm, arrive 8am.</p>
              <p>If you have 12 days instead of 10, add a day in Beijing (Summer Palace + 798 Art District) and a day in Shanghai (Suzhou or more neighborhood exploring).</p>
              <p>VPN: download and set up ExpressVPN or similar before you arrive. Most western sites are blocked in China.</p>
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
            icon="🧭"
            title="Want More China Routes?"
            description="Explore our Golden Triangle, Sichuan Spice, and South China routes for different perspectives."
            buttonText="Browse All Routes →"
            buttonHref="/plan-your-trip"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}