import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Beijing Transport Guide — Metro, DiDi, Taxi, Airport',
  description: 'How to get around Beijing: metro (27 lines, ¥3-9), DiDi rides, taxis, bus, airport express, Capital vs Daxing airport, and bike sharing. Everything you need to navigate Beijing.',
  keywords: ['Beijing transport', 'Beijing metro', 'Beijing DiDi', 'Beijing taxi', 'Beijing airport', 'Beijing Capital airport', 'Beijing Daxing airport'],
  path: '/destinations/beijing/transport-guide',
})

const faqs = [
  {
    question: 'How do I pay for the Beijing metro?',
    answer: 'Scan Alipay or WeChat Pay at the turnstile QR reader. No need to buy a transport card or paper ticket. Open Alipay, search "Beijing Subway", and use the QR code at gates. Fares are ¥3–9 depending on distance.',
  },
  {
    question: 'Which airport should I fly into for Beijing?',
    answer: 'Beijing Capital (PEK) is closer to the city center (30–45 min by Airport Express). Daxing (PKX) is farther south (45–60 min by Airport Express) but is a stunning new terminal. Most international flights use PEK. Check which airport your airline uses — they are 70 km apart.',
  },
  {
    question: 'Is DiDi available in Beijing?',
    answer: 'Yes — DiDi works throughout Beijing. Access it inside the Alipay or WeChat app with an English interface. Most rides cost ¥15–50 within the city. It is cheaper than street taxis, shows the price upfront, and tracks the route.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Beijing?', description: '3-5 day guide with day-by-day breakdowns.', href: '/destinations/beijing/how-many-days' },
  { title: 'Common Mistakes in Beijing', description: '7 errors tourists make — and how to avoid them.', href: '/destinations/beijing/common-mistakes' },
  { title: '1-2-3 Day Itineraries', description: 'Hour-by-hour plans with transport tips.', href: '/destinations/beijing/1-2-3-day-itinerary' },
  { title: 'Beijing Local Tips', description: 'Money-saving hacks and insider knowledge.', href: '/destinations/beijing/local-tips' },
]

export default function BeijingTransportPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Beijing', path: '/destinations/beijing' },
    { name: 'Transport Guide', path: '/destinations/beijing/transport-guide' },
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
              { label: 'Beijing', href: '/destinations/beijing' },
              { label: 'Transport Guide' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="车" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              How to Get Around Beijing
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">交通</span>
              <span className="text-lg">• Destinations • Beijing</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Metro = best</span>
            <span className="text-[var(--muted)]">·</span>
            <span>DiDi = backup</span>
            <span className="text-[var(--muted)]">·</span>
            <span>¥3–9 per ride</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Beijing&apos;s metro is fast, cheap, and fully bilingual. For everything else, there is DiDi. Here is how to use both — plus taxis, buses, bikes, and airport connections.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/beijing-transport-metro/1600/900" alt="Beijing metro platform with bilingual signage" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          {/* Metro */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Metro (地铁) — Best for Most Trips</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Beijing&apos;s metro has <strong>27 lines</strong> covering the entire city. Fares: <strong>¥3–9</strong> depending on distance. Trains run every 2–5 minutes from 5 AM to 11 PM (last trains vary by station).
              </p>
              <ul>
                <li><strong>Payment:</strong> Scan Alipay or WeChat Pay QR code at turnstiles. Open Alipay → search &quot;Beijing Subway&quot; (北京地铁) → generate QR code. No transport card needed.</li>
                <li><strong>English support:</strong> Full bilingual signage — station names, maps, and announcements in English and Chinese.</li>
                <li><strong>Security:</strong> Every station has bag X-ray. Takes 10–30 seconds. Plan for it.</li>
                <li><strong>Peak hours to avoid:</strong> 7:30–9:30 AM and 5:30–7:30 PM. Lines 1, 2, 10, and 13 get very crowded.</li>
                <li><strong>Key lines:</strong> Line 1 (east-west through Tiananmen and CBD), Line 2 (loop around old city), Line 4 (to Summer Palace), Line 5 (to Temple of Heaven).</li>
                <li><strong>Navigation:</strong> Use Amap (高德地图) or Apple Maps. Google Maps is inaccurate in China.</li>
              </ul>
            </div>
          </section>

          {/* DiDi */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">DiDi (滴滴) — Like Uber</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                DiDi is China&apos;s ride-hailing giant. Access it inside <strong>Alipay</strong> or <strong>WeChat</strong> — both have English interfaces. Most city rides cost <strong>¥15–50</strong>.
              </p>
              <ul>
                <li><strong>How to use:</strong> Open Alipay → DiDi → enter pickup and destination in English → the driver sees it in Chinese. Price shown upfront.</li>
                <li><strong>Payment:</strong> Charged to your Alipay/WeChat linked card. No cash needed.</li>
                <li><strong>Wait times:</strong> Usually 3–8 minutes. Longer during rush hour or rain.</li>
                <li><strong>Advantages over taxis:</strong> No language barrier, fixed price, GPS-tracked route, driver ratings.</li>
                <li><strong>DiDi Express (快车):</strong> Standard car, cheapest option.</li>
                <li><strong>DiDi Premier (专车):</strong> Nicer car, ¥5–10 more per ride.</li>
              </ul>
            </div>
          </section>

          {/* Taxi */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Taxi (出租车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Beijing taxis are metered. <strong>¥13 base fare</strong> (first 3 km), then ¥2.3/km. Late night (11 PM–5 AM) adds 20%. Most rides within the city center cost ¥30–60.
              </p>
              <ul>
                <li><strong>Problem:</strong> Most drivers do not speak English. Have your destination written in Chinese or use a translation app.</li>
                <li><strong>Ensure meter:</strong> If a driver quotes a flat price instead of turning on the meter, get out and find another taxi or use DiDi.</li>
                <li><strong>Receipts (发票):</strong> Ask for a fapiao — it has the license plate number if you leave something behind.</li>
              </ul>
            </div>
          </section>

          {/* Bus */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Bus (公交车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Beijing buses are cheap (<strong>¥2 per ride</strong> with Alipay/WeChat) but confusing for foreigners. Routes are in Chinese only, stops are not announced in English, and you need to know which direction you are going.
              </p>
              <ul>
                <li><strong>When to use bus:</strong> For areas not covered by metro (rare) or for scenic routes like the scenic route to the Summer Palace.</li>
                <li><strong>Payment:</strong> Scan Alipay/WeChat Pay when boarding.</li>
                <li><strong>Recommendation:</strong> Stick to metro + DiDi. Buses are for locals who know the routes.</li>
              </ul>
            </div>
          </section>

          {/* Airport */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Airports &amp; Airport Express</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Beijing Capital International Airport (PEK, 首都机场)</strong></p>
              <ul>
                <li>Most international flights land here. 30–45 minutes to city center.</li>
                <li><strong>Airport Express (机场快轨):</strong> ¥25, 20 minutes to Dongzhimen (东直门) station. Transfer to Metro Lines 2 or 13. Runs 6:20 AM–11:10 PM.</li>
                <li><strong>DiDi to city:</strong> ¥80–120, 30–45 min depending on traffic.</li>
                <li><strong>Airport bus:</strong> ¥16–30, multiple routes. Slower but cheaper.</li>
              </ul>
              <p className="mt-4"><strong>Beijing Daxing International Airport (PKX, 大兴机场)</strong></p>
              <ul>
                <li>Newer airport, stunning starfish-shaped terminal. 45–60 minutes to city center.</li>
                <li><strong>Daxing Airport Express (大兴机场线):</strong> ¥35, 19 minutes to Caoqiao (草桥) station. Transfer to Metro. Runs 6:00 AM–11:00 PM.</li>
                <li><strong>DiDi to city:</strong> ¥120–180, 45–60 min.</li>
              </ul>
              <p className="mt-4"><strong>⚠️ Important:</strong> PEK and PKX are 70 km apart. If you have a connecting flight from a different airport, allow 2+ hours between them. Always check which airport your airline uses before booking.</p>
            </div>
          </section>

          {/* Bike Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Bike Sharing (共享单车)</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                Yellow Meituan bikes (美团) and blue Hello bikes (哈啰) are everywhere in Beijing. <strong>¥1.5 per 15 minutes</strong>. Great for short hops between hutongs or along the lakes.
              </p>
              <ul>
                <li><strong>How to use:</strong> Scan the QR code on the bike with Alipay or Meituan app. The lock opens automatically.</li>
                <li><strong>Where to ride:</strong> Hutong areas, around Houhai lakes, Olympic Park. Avoid major roads — Beijing traffic is aggressive.</li>
                <li><strong>Parking:</strong> Leave bikes in designated zones (marked on the app). Leaving them anywhere risks a ¥5 fine and blocks sidewalks for locals.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Metro payment is QR-based — screenshot your QR code before going underground where signal is weak.</p>
              <p>DiDi surge pricing is real — during rain or rush hour, prices can double. Metro is always the same price.</p>
              <p>From PEK to the Great Wall at Mutianyu: DiDi is ¥200–300 one way. The shuttle bus (¥80 round trip from Dongzhimen) is much cheaper.</p>
              <p>Always carry your passport — metro security sometimes checks IDs at random.</p>
              <p>Download offline maps in Amap before leaving your hotel — you will lose signal in some metro tunnels.</p>
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