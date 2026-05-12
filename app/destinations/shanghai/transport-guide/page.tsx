import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shanghai Transport Guide — Metro, Maglev, DiDi, Airport',
  description: 'How to get around Shanghai: metro (19 lines, ¥3-10), Maglev from Pudong Airport (¥50, 8 min), DiDi, taxis, bus, Hongqiao station, and bike sharing. Everything you need to navigate Shanghai.',
  keywords: ['Shanghai transport', 'Shanghai metro', 'Shanghai Maglev', 'Shanghai DiDi', 'Shanghai taxi', 'Pudong Airport transport', 'Shanghai Hongqiao'],
  path: '/destinations/shanghai/transport-guide',
})

const faqs = [
  {
    question: 'How do I get from Pudong Airport to central Shanghai?',
    answer: 'The Maglev (磁浮) is fastest: ¥50, 8 minutes to Longyang Road station, then transfer to Metro Line 2. Total time: ~25 minutes to the Bund area. Alternatively, DiDi costs ¥120–180 (45 min). The airport bus costs ¥20–30 but takes 60–90 minutes depending on traffic.',
  },
  {
    question: 'How do I pay for the Shanghai metro?',
    answer: 'Scan Alipay or WeChat Pay at the turnstile QR reader. Open Alipay, search "Shanghai Metro" (上海地铁), and generate a QR code. No transport card or paper ticket needed. Fares: ¥3–10 depending on distance.',
  },
  {
    question: 'Is DiDi available in Shanghai?',
    answer: 'Yes — DiDi works throughout Shanghai. Access it inside Alipay or WeChat with an English interface. Most rides cost ¥15–60 within the city. It is cheaper than street taxis, shows the price upfront, and tracks the route.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Shanghai?', description: '3-4 day guide with day-by-day breakdowns.', href: '/destinations/shanghai/how-many-days' },
  { title: 'Common Mistakes in Shanghai', description: '6 errors tourists make — and how to avoid them.', href: '/destinations/shanghai/common-mistakes' },
  { title: '1-2-3 Day Itineraries', description: 'Hour-by-hour plans with transport tips.', href: '/destinations/shanghai/1-2-3-day-itinerary' },
  { title: 'Shanghai for First-Timers', description: 'Everything first-time visitors need to know.', href: '/destinations/shanghai/for-first-timers' },
]

export default function ShanghaiTransportPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Shanghai', path: '/destinations/shanghai' },
    { name: 'Transport Guide', path: '/destinations/shanghai/transport-guide' },
  ])
  const faqJsonLd = faqPageSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen" style={{ background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff' }}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Destinations', href: '/destinations' },
              { label: 'Shanghai', href: '/destinations/shanghai' },
              { label: 'Transport Guide' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="车" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              How to Get Around Shanghai
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">交通</span>
              <span className="text-lg">• Destinations • Shanghai</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Metro + Maglev</span>
            <span className="text-[var(--muted)]">·</span>
            <span>¥3–10 per ride</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Maglev 431 km/h</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Shanghai has China&apos;s best urban transport. Metro covers everywhere, the Maglev from the airport is a thrill ride, and DiDi handles the rest. Here is how to use all of it.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/shanghai-transport-metro/1600/900" alt="Shanghai metro station with modern signage" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          {/* Metro */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Metro (地铁) — Best for Everything</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Shanghai&apos;s metro has <strong>19 lines</strong> and 500+ stations. Fares: <strong>¥3–10</strong> depending on distance. Trains run every 2–6 minutes from roughly 5:30 AM to 11 PM.
              </p>
              <ul>
                <li><strong>Payment:</strong> Scan Alipay or WeChat Pay QR code at turnstiles. Open Alipay → search &quot;Shanghai Metro&quot; (上海地铁) → generate QR code. No transport card needed.</li>
                <li><strong>English support:</strong> Full bilingual signage — station names, maps, platform announcements in English and Chinese.</li>
                <li><strong>Security:</strong> Bag X-ray at every station. 10–30 seconds.</li>
                <li><strong>Peak hours:</strong> 7:30–9:30 AM and 5:30–7:30 PM. Lines 1, 2, 8, and 9 get the most crowded.</li>
                <li><strong>Key lines:</strong> Line 2 (east-west, connects both airports and the Bund), Line 10 (French Concession), Line 17 (Zhujiajiao water town).</li>
                <li><strong>Navigation:</strong> Amap (高德地图) or Apple Maps. Google Maps is inaccurate in China.</li>
              </ul>
            </div>
          </section>

          {/* Maglev */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Maglev (磁浮) — Pudong Airport Express</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                The Shanghai Maglev is the world&apos;s fastest commercial train. It hits <strong>431 km/h</strong> and covers the 30 km from Pudong Airport to Longyang Road (龙阳路) in <strong>8 minutes</strong>.
              </p>
              <ul>
                <li><strong>Fare:</strong> ¥50 one way (¥40 if you show a same-day flight ticket).</li>
                <li><strong>Hours:</strong> 7:01 AM – 9:30 PM from Pudong, 6:45 AM – 9:30 PM from Longyang Road. Every 15–20 minutes.</li>
                <li><strong>Transfer:</strong> At Longyang Road, transfer to Metro Line 2 or 7 for central Shanghai (3–4 stops to the Bund area, ¥3–4).</li>
                <li><strong>Speed:</strong> Maximum 431 km/h during the day. After 9 PM it slows to 301 km/h. Still fast.</li>
                <li><strong>Luggage:</strong> Plenty of luggage space at each end of the car. No size limits.</li>
                <li><strong>When not to use it:</strong> If your hotel is near Hongqiao — it is faster to take the airport bus or DiDi directly.</li>
              </ul>
            </div>
          </section>

          {/* DiDi */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">DiDi (滴滴) — Like Uber</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                DiDi works throughout Shanghai. Access it inside <strong>Alipay</strong> or <strong>WeChat</strong> — both have English interfaces. Most city rides cost <strong>¥15–60</strong>.
              </p>
              <ul>
                <li><strong>How to use:</strong> Open Alipay → DiDi → enter pickup and destination in English → driver sees it in Chinese. Price shown upfront.</li>
                <li><strong>Payment:</strong> Charged to your Alipay/WeChat linked card. No cash needed.</li>
                <li><strong>Wait times:</strong> Usually 3–8 minutes. Longer during rush hour or rain.</li>
                <li><strong>Advantages over taxis:</strong> No language barrier, fixed price, GPS-tracked, driver ratings.</li>
              </ul>
            </div>
          </section>

          {/* Taxi */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Taxi (出租车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Shanghai taxis are metered. <strong>¥14 base fare</strong> (first 3 km), then ¥2.5/km. Most rides within the city center cost ¥25–50. More English-speaking drivers than Beijing, but still not common.
              </p>
              <ul>
                <li><strong>Tip:</strong> The turquoise Dazhong (大众) taxis are the most reliable. Avoid drivers who quote a flat price — insist on the meter or use DiDi.</li>
                <li><strong>Receipt (发票):</strong> Always ask for a fapiao — it has the license plate in case you leave something behind.</li>
              </ul>
            </div>
          </section>

          {/* Bus */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Bus (公交车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Shanghai buses cost <strong>¥2 per ride</strong> with Alipay/WeChat. Useful for areas not on the metro, but routes are Chinese-only and stops are not announced in English.
              </p>
              <ul>
                <li><strong>When to use bus:</strong> If your destination is between metro lines or for scenic routes along the Bund.</li>
                <li><strong>Recommendation:</strong> Metro + DiDi covers 95% of tourist needs. Buses are for adventurous travelers who can read basic Chinese.</li>
              </ul>
            </div>
          </section>

          {/* Airports */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Airports &amp; Train Stations</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Shanghai Pudong International Airport (PVG, 浦东机场)</strong></p>
              <ul>
                <li>Most international flights. 30–45 minutes to city center.</li>
                <li><strong>Maglev:</strong> ¥50, 8 min to Longyang Road + Metro Line 2. Total ~25 min to Bund area.</li>
                <li><strong>DiDi:</strong> ¥120–180, 45 min depending on traffic.</li>
                <li><strong>Airport bus:</strong> ¥20–30, 60–90 min. Multiple routes.</li>
              </ul>
              <p className="mt-4"><strong>Shanghai Hongqiao International Airport (SHA, 虹桥机场)</strong></p>
              <ul>
                <li>Domestic and some regional flights. Also the bullet train station (虹桥站).</li>
                <li><strong>Metro:</strong> Line 2 or 10 to Hongqiao Railway Station (虹桥火车站). Direct connection — no transfer needed. ¥5–7, 40–50 min.</li>
                <li><strong>DiDi:</strong> ¥60–100, 30 min to city center.</li>
              </ul>
              <p className="mt-4"><strong>Hongqiao Railway Station (虹桥火车站)</strong></p>
              <ul>
                <li>Bullet trains to Beijing (4.5h), Suzhou (30 min), Hangzhou (1h), and most eastern China cities.</li>
                <li>Already on Metro Lines 2 and 10. Very convenient.</li>
                <li>Buy tickets on the 12306 app (English available) or at station counters. Book 1–2 days ahead for popular routes.</li>
              </ul>
            </div>
          </section>

          {/* Bike Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Bike Sharing (共享单车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Meituan yellow bikes (美团) and Hello blue bikes (哈啰) are everywhere in Shanghai. <strong>¥1.5 per 15 minutes</strong>. Great for short hops along the Bund, through the French Concession, or between metro stations.
              </p>
              <ul>
                <li><strong>How to use:</strong> Scan the QR code on the bike with Alipay or Meituan app. Lock opens automatically.</li>
                <li><strong>Best routes:</strong> French Concession streets, Bund waterfront, Suzhou Creek path. Avoid major roads.</li>
                <li><strong>Parking:</strong> Leave in designated zones (marked on app). Random parking risks a ¥5 fine.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Screenshot your metro QR code before going underground — signal can be weak at some stations.</p>
              <p>The Maglev is worth the experience even if you are not arriving at Pudong. Take a round trip from Longyang Road just for the speed.</p>
              <p>Hongqiao Station is massive — arrive 45 minutes before your bullet train to find the right gate.</p>
              <p>The ¥2 public ferry (轮渡) across the Huangpu River is the best-value transport in Shanghai. Sightseeing tunnel = ¥50 for neon. Ferry = ¥2 for actual views.</p>
              <p>DiDi surge pricing during rain can double prices. Metro is always the same fare.</p>
            </blockquote>
          </section>

          <section className="mb-10 border-t border-[#ebe4d8]">
            <div className="pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
              <div className="divide-y divide-[#ebe4d8]">
                {relatedArticles.map((article) => (
                  <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">{article.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <ContextualCTA
            icon="📋"
            title="Navigating China"
            description="Download our free China Cheat Sheet for quick-reference phrases, etiquette, and arrival essentials."
            buttonText="Get the Cheat Sheet →"
            buttonHref="#cheat-sheet"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}