import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Shenzhen → Guangzhou → Hong Kong: South China Triangle (7-10 Days)',
  description:
    'The food + tech + international route through South China. Day-by-day guide for Shenzhen, Guangzhou, and Hong Kong — with border crossing tips, budget estimates, and what to skip.',
  path: '/plan-your-trip/shenzhen-guangzhou-hongkong',
  keywords: [
    'Shenzhen Guangzhou Hong Kong itinerary',
    'South China travel route',
    'dim sum capital Guangzhou',
    'Hong Kong travel from China',
    'Shenzhen tech district travel',
    'South China triangle trip',
  ],
})

const faqs = [
  {
    question: 'Do I need a separate visa for Hong Kong?',
    answer: 'Most Western passport holders get visa-free entry to Hong Kong for 7-180 days depending on nationality. But your China visa won\'t cover Hong Kong — when you cross back into mainland China, you need a multiple-entry visa or you use a separate entry. Plan your visa strategy before the trip.',
  },
  {
    question: 'Which border crossing is fastest between Shenzhen and Hong Kong?',
    answer: 'Futian (Lok Ma Chau) is the fastest — walk across the bridge in 15-30 min. Luohu is also popular but more crowded. West Kowloon lets you clear both immigration checks before boarding the high-speed train. Avoid Luohu during peak hours.',
  },
  {
    question: 'Will my eSIM work in both China and Hong Kong?',
    answer: 'Most travel eSIMs cover one or the other, not both. Airalo and Holafly have Asia regional plans that include both. Alternatively, get a China eSIM + a separate Hong Kong SIM at 7-Eleven (they sell tourist SIMs for ~HKD 80).',
  },
  {
    question: 'How much cash should I carry?',
    answer: 'Mainland China uses RMB (¥), Hong Kong uses HKD. Carry both — many Shenzhen shops near the border accept HKD, but once you\'re deeper in Guangzhou, it\'s RMB only. Alipay and WeChat Pay work everywhere in mainland China; Hong Kong uses Octopus card + cash.',
  },
]

const relatedArticles = [
  {
    title: "Beijing → Xi'an → Shanghai: Classic China Route",
    description: 'The #1 first-timer route covering imperial history, ancient civilization, and modern China.',
    href: '/plan-your-trip/beijing-shanghai-xian',
  },
  {
    title: 'Chengdu → Chongqing: Sichuan Spice Route',
    description: 'The food lover\'s route through China\'s spiciest cities.',
    href: '/plan-your-trip/chengdu-chongqing',
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

export default function ShenzhenGuangzhouHongKongPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Plan Your Trip', path: '/plan-your-trip' },
    { name: 'Shenzhen → Guangzhou → Hong Kong', path: '/plan-your-trip/shenzhen-guangzhou-hongkong' },
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
                { label: 'Shenzhen → Guangzhou → Hong Kong' },
              ]}
            />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="粤" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Shenzhen → Guangzhou → Hong Kong
            </h1>
            <p className="text-2xl sm:text-3xl font-serif text-[var(--primary)] mb-2 relative z-10">
              The South China Triangle
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">粤港</span>
              <span className="text-lg">• 7-10 Days • Plan Your Trip</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Moderate pace</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Short trains + border crossing</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Typical total: ¥8,000-15,000 + HKD</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Three cities, three identities: tech capital, food capital, international gateway.
            South China runs different — faster, hotter, louder, and way more delicious.
          </p>

          <div className="mb-10">
            <img
              src="https://picsum.photos/seed/shenzhen-guangzhou-hk-route/1600/900"
              alt="South China Triangle route through Shenzhen, Guangzhou, and Hong Kong"
              className="h-64 w-full rounded-lg object-cover md:h-96"
            />
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Route Works</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                South China is where modern China flexes hardest. Shenzhen went from fishing village to tech
                capital in 40 years — it&apos;s the hardware hub of the world. Guangzhou is the undisputed food
                capital of China (yes, that&apos;s a contested title, but dim sum alone clinches it). Hong Kong
                is Hong Kong — British-Chinese, East-meets-West, one of the most vertical cities on Earth.
              </p>
              <p>
                The distances are absurdly short. Shenzhen to Guangzhou: 30 min bullet train. Shenzhen to
                Hong Kong: walk across a bridge. This is the most efficient route in China.
              </p>
              <p>
                <strong>Route:</strong> Shenzhen (3 days) → Guangzhou (3-4 days) → Hong Kong (2-3 days)
              </p>
              <p>
                <strong>Best for:</strong> Food lovers, tech nerds, and travelers who want China + a completely different vibe in Hong Kong.
              </p>
            </div>
          </section>

          {/* Day-by-day */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

            {/* Shenzhen */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 1-3: Shenzhen</h3>
              <p className="text-[var(--muted)] text-sm mb-4">China&apos;s Silicon Valley — futuristic, fast, and weird</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 1 — Arrive + Huaqiangbei:</strong> Fly into Shenzhen Bao&apos;an (or arrive by high-speed rail from elsewhere in China). Check in near Futian or Luohu. Head straight to Huaqiangbei — the electronics market that inspired a thousand startup stories. Eight blocks of nothing but phones, drones, LEDs, and cables.</p>
                <p><strong>Day 2 — Dafen Oil Painting Village + OCT Loft:</strong> Morning: Dafen — the village that produces 60% of the world&apos;s oil paintings. Watch painters copy masterworks, commission your own. Afternoon: OCT Loft — converted factory art district with cafes, galleries, and bookshops. Evening: walk Lianhuashan Park for city views.</p>
                <p><strong>Day 3 — Day trip to Hong Kong or explore:</strong> If your visa covers it, cross at Futian for a taste of Hong Kong (15 min walk). If not: Windows of the World theme park (bizarre and fun), or just wander Shekou district for the expat food scene.</p>
              </div>
            </div>

            {/* Guangzhou */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 4-7: Guangzhou</h3>
              <p className="text-[var(--muted)] text-sm mb-4">The food capital — dim sum, roast goose, and rice rolls</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 4 — Canton Tower + Shamian Island:</strong> High-speed train from Shenzhen (30 min). Check in near Tianhe or Yuexiu. Walk Shamian Island — tree-lined colonial streets, perfect for golden hour photos. Evening: Canton Tower (the skinny one that lights up) and Zhujiang New Town light show.</p>
                <p><strong>Day 5 — Dim sum + old Guangzhou:</strong> This is the whole reason you&apos;re here. Start at one of the classic dim sum halls — Panxi Restaurant or Guangzhou Restaurant. Shrimp har gow, char siu bao, rice noodle rolls. Afternoon: Chen Clan Ancestral Hall (incredible wood and ivory carvings), then Beijing Road for shopping.</p>
                <p><strong>Day 6 — Day trip to Foshan:</strong> 30 min by metro. Foshan is the martial arts capital of China — Wong Fei-hung&apos;s hometown. Visit the Ancestral Temple (with lion dance performances), Lingnan Tiandi for lunch, and the ceramics district. Back by evening.</p>
                <p><strong>Day 7 — Markets + departure prep:</strong> Morning: Qingping Market (herbs, dried seafood, everything). Afternoon: explore Xiaozhou Village (artsy water town within the city) or just eat your way through Shangxiajiu Pedestrian Street. Pack for Hong Kong.</p>
              </div>
            </div>

            {/* Hong Kong */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 8-10: Hong Kong</h3>
              <p className="text-[var(--muted)] text-sm mb-4">East meets West — Victoria Peak, Star Ferry, and the best skyline on Earth</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 8 — Victoria Peak + Star Ferry:</strong> Cross the border (Futian is fastest, 15 min). Take the MTR to Central. Ride the Peak Tram up Victoria Peak for the iconic skyline view. Descend, take the Star Ferry across the harbor (HKD 5 — best value tourist attraction on the planet). Walk the Tsim Sha Tsui promenade at night.</p>
                <p><strong>Day 9 — Street food + neighborhoods:</strong> Morning: dim sum at a local spot (not the tourist places). Walk through Mong Kok — the densest neighborhood on Earth. Explore Causeway Bay for shopping, then hike Dragon&apos;s Back if you want nature (2h, stunning coastal views). Evening: Temple Street Night Market in Jordan.</p>
                <p><strong>Day 10 — Departure:</strong> Last egg tarts at Tai Cheong Bakery. Airport Express from Hong Kong Station (24 min to HKG). Or continue your trip in mainland China.</p>
              </div>
            </div>
          </section>

          {/* Transport */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Getting Between Cities</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>Shenzhen → Guangzhou:</strong> High-speed train, 30 min, ¥75-100. Departs every 10-15 min from Shenzhen North or Futian. The easiest intercity transfer in China.
              </p>
              <p>
                <strong>Shenzhen → Hong Kong:</strong> Walk across at Futian (Lok Ma Chau) — 15-30 min including immigration. Or take the high-speed rail from Shenzhen North to West Kowloon (15 min, ¥75) with co-located immigration.
              </p>
              <p>
                <strong>Guangzhou → Hong Kong:</strong> High-speed train, 1h, ¥215. Direct from Guangzhou South to West Kowloon with through-train immigration.
              </p>
              <p>
                <strong>⚠️ Border note:</strong> You cross an international border. Your China visa entry counts expire when you leave for Hong Kong. Make sure you have a multiple-entry China visa if you plan to re-enter, or do Shenzhen → Hong Kong as your final leg.
              </p>
            </div>
          </section>

          {/* Budget */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
              Estimated Budget (10 Days, per person)
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Mainland China (Shenzhen + Guangzhou, 7 days):</strong></p>
              <p>Accommodation: ¥2,100-4,200 (¥300-600/night)</p>
              <p>Intercity transport: ¥200-400 (Shenzhen-Guangzhou trains)</p>
              <p>Food: ¥1,050-2,100 (¥150-300/day — South China is cheap to eat well)</p>
              <p>Attractions + local transport: ¥700-1,200</p>
              <p><strong>Hong Kong (3 days):</strong></p>
              <p>Accommodation: HKD 1,500-3,000 (HKD 500-1,000/night — Hong Kong is expensive)</p>
              <p>Food: HKD 600-1,200 (HKD 200-400/day — street food and cha chaan teng are affordable)</p>
              <p>Transport + attractions: HKD 300-600</p>
              <p><strong>Typical total: ¥8,000-15,000 + HKD 2,400-4,800 (about $1,350-2,700 total)</strong></p>
            </div>
          </section>

          {/* Best time */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Best Time to Go</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>October-March:</strong> The sweet spot. Low humidity, comfortable temps (18-25°C). November-February is best — cool, dry, and clear.
              </p>
              <p>
                <strong>April-May:</strong> Getting hot. Okay, but humidity starts climbing. Plum rain season hits May-June.
              </p>
              <p>
                <strong>Avoid:</strong> June-September (typhoons, 35°C+ heat, 90% humidity — miserable for walking). Also avoid Chinese New Year (variable, January-February) when everything shuts down.
              </p>
            </div>
          </section>

          {/* What to skip */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Skip</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Window of the World</strong> in Shenzhen — unless you find miniature Eiffel Towers hilarious. It&apos;s kitschy and takes a full day. OCT Loft is a better use of your time.</p>
              <p><strong>Tourist dim sum restaurants</strong> near Canton Tower — overpriced and mediocre. Walk 10 minutes to residential neighborhoods for the real thing.</p>
              <p><strong>Victoria Peak tourist traps</strong> — the viewing platform at the top charges HKD 60. Walk 5 minutes to Lions View Point Pavilion — free, equally good view.</p>
              <p><strong>Avenue of Stars</strong> in Tsim Sha Tsui — it&apos;s fine for 15 min but not a destination. The promenade is better at night without stopping at every statue.</p>
            </blockquote>
          </section>

          {/* Pro tips */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Get an eSIM that works in both China and Hong Kong.</strong> Airalo&apos;s Asia plans cover both. Most China-only eSIMs stop working the moment you cross the border.</p>
              <p><strong>Download a VPN before arriving in mainland China.</strong> Hong Kong doesn&apos;t need one, but you&apos;ll want it for Shenzhen and Guangzhou.</p>
              <p><strong>Octopus card is essential in Hong Kong.</strong> Buy one at any MTR station — it works on trains, buses, ferries, convenience stores, and even some restaurants. Deposit is refundable.</p>
              <p><strong>Guangzhou&apos;s dim sum culture starts early.</strong> Arrive at a restaurant by 8am on weekends for the full experience — noisy, crowded, carts of bamboo steamers. Weekday mornings are calmer.</p>
              <p><strong>Border crossing at Futian is fastest.</strong> Luohu has more lanes but more people. West Kowloon is smooth but only works if you&apos;re taking the high-speed train. Avoid crossing during rush hours (7-9am, 5-7pm).</p>
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
            icon="🍜"
            title="Want the Classic Route Instead?"
            description="If you want imperial history and ancient civilization over tech and dim sum, the Beijing-Xi'an-Shanghai route is the one."
            buttonText="See Classic China Route →"
            buttonHref="/plan-your-trip/beijing-shanghai-xian"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}