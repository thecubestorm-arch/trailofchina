import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Chengdu → Chongqing: The Sichuan Spice Route (5-7 Days)',
  description:
    'The food lover\'s route through China\'s spiciest cities. Day-by-day guide for Chengdu and Chongqing — pandas, hotpot, mountains, and the most affordable cities in China.',
  path: '/plan-your-trip/chengdu-chongqing',
  keywords: [
    'Chengdu Chongqing itinerary',
    'Sichuan spice route China',
    'Chengdu pandas travel',
    'Chongqing hotpot guide',
    'Sichuan food tour',
    'best food cities China',
  ],
})

const faqs = [
  {
    question: 'How spicy is the food really?',
    answer: 'Very. Chengdu hotpot is moderately spicy (by local standards — still very spicy for most foreigners). Chongqing hotpot is another level entirely — numbing peppercorns plus chili oil that turns the broth dark red. Ask for 微辣 (wei la, mild spice) or 菌汤锅 (jun tang guo, mushroom broth) if you\'re not ready.',
  },
  {
    question: 'Can I volunteer with the pandas in Chengdu?',
    answer: 'Yes, but book 2-4 weeks ahead. The Dujiangyan Panda Base offers a volunteer program (cleaning enclosures, preparing bamboo) for ¥700-800/day. The Chengdu Research Base doesn\'t offer volunteering — you can only observe. The volunteer program fills up fast, especially in summer.',
  },
  {
    question: 'Is Chongqing worth visiting if I\'m short on time?',
    answer: 'Yes, but it\'s very different from Chengdu. Chongqing is vertical, intense, and confusing — a cyberpunk city built on mountains. If you only have 5 days total, do 3 in Chengdu and 2 in Chongqing. If you can stretch to 7, do 4 and 3.',
  },
  {
    question: 'How do I get between Chengdu and Chongqing?',
    answer: 'High-speed train, 1-1.5 hours, ¥150-260 depending on class. Trains run every 15-30 minutes. It\'s one of the easiest intercity transfers in China. Book on Trip.com or 12306.cn.',
  },
]

const relatedArticles = [
  {
    title: "Beijing → Xi'an → Shanghai: Classic China Route",
    description: 'The #1 first-timer route covering imperial history, ancient civilization, and modern China.',
    href: '/plan-your-trip/beijing-shanghai-xian',
  },
  {
    title: 'Shenzhen → Guangzhou → Hong Kong: South China Triangle',
    description: 'The food + tech + international route through China\'s south.',
    href: '/plan-your-trip/shenzhen-guangzhou-hongkong',
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
]

export default function ChengduChongqingPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Plan Your Trip', path: '/plan-your-trip' },
    { name: 'Chengdu → Chongqing', path: '/plan-your-trip/chengdu-chongqing' },
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
                { label: 'Chengdu → Chongqing' },
              ]}
            />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="辣" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              Chengdu → Chongqing
            </h1>
            <p className="text-2xl sm:text-3xl font-serif text-[var(--primary)] mb-2 relative z-10">
              The Sichuan Spice Route
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">蜀渝</span>
              <span className="text-lg">• 5-7 Days • Plan Your Trip</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">Relaxed pace</span>
            <span className="text-[var(--muted)]">·</span>
            <span>1 short train ride</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Typical total: ¥5,000-10,000</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Two cities, one cuisine family, completely different vibes. Chengdu is slow, green, and tea-scented.
            Chongqing is a vertical cyberpunk fever dream. The food is legendary in both.
          </p>

          <div className="mb-10">
            <img
              src="https://picsum.photos/seed/chengdu-chongqing-spice-route/1600/900"
              alt="Sichuan Spice Route from Chengdu to Chongqing"
              className="h-64 w-full rounded-lg object-cover md:h-96"
            />
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Why This Route Works</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                This is the route for people who travel to eat. Sichuan cuisine is one of China&apos;s Eight Great Traditions,
                and it&apos;s the one that gets people obsessed. Chengdu is the refined older sibling — mapo tofu, tea culture,
                bamboo parks, and pandas. Chongqing is the wild one — hotpot that turns the broth black-red, a city built on
                cliffs where the 8th floor is ground level on one side, and monorails pass through apartment buildings.
              </p>
              <p>
                Both cities are among the most affordable in China. ¥50 gets you an excellent meal. ¥200-300 a night
                gets you a solid hotel. And they&apos;re connected by a 1-hour bullet train.
              </p>
              <p>
                <strong>Route:</strong> Chengdu (3-4 days) → Chongqing (2-3 days)
              </p>
              <p>
                <strong>Best for:</strong> Food lovers, culture seekers, and travelers on a budget.
              </p>
              <p>
                <strong>Ideal duration:</strong> 7 days (5 minimum).
              </p>
            </div>
          </section>

          {/* Day-by-day */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

            {/* Chengdu */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 1-4: Chengdu</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Slow living, tea houses, and a panda obsession</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 1 — Arrive + Jinli + Kuanzhai Alley:</strong> Check in near Chunxi Road or near Wuhou Shrine. Walk Jinli Ancient Street (touristy but atmospheric, especially at night with lanterns). Dinner at Kuanzhai (Wide and Narrow) Alley — three parallel streets of restaurants and bars. Try sweet water noodles (甜水面) and rabbit heads (兔头) if you&apos;re adventurous.</p>
                <p><strong>Day 2 — Panda Base + People&apos;s Park:</strong> Get to the Chengdu Research Base of Giant Panda Breeding by 7:30am (they&apos;re active until 10am, then nap in the heat). Spend 3-4 hours. Afternoon: People&apos;s Park — get tea at Heming Teahouse (¥15, sit for hours), watch locals playing mahjong and ear cleaning. This is the real Chengdu.</p>
                <p><strong>Day 3 — Leshan day trip OR Dujiangyan:</strong> Leshan (1.5h by train): the Giant Buddha carved into a cliff face — 71 meters tall, worth the trip. Dujiangyan (1h by train): ancient irrigation system + panda volunteer program. Pick one, not both — they&apos;re in opposite directions.</p>
                <p><strong>Day 4 — Hotpot + departure prep:</strong> Lunch: your first proper Chengdu hotpot. Order 微辣 (wei la, mild) if you&apos;re not used to it. Afternoon: Wenshu Monastery — working Buddhist temple with a tea house, vegetarian restaurant, and a neighborhood of craft shops around it. Evening: high-speed train to Chongqing (1-1.5h, ¥150-260).</p>
              </div>
            </div>

            {/* Chongqing */}
            <div className="mb-8 p-6 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-1">Days 5-7: Chongqing</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Cyberpunk mountain city — spicy, vertical, and unforgettable</p>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Day 5 — Hongya Cave + Jiefangbei:</strong> Check in near Jiefangbei (downtown). Walk to Hongya Cave — the stilt-house complex that looks like Spirited Away. It&apos;s touristy but the nighttime view is iconic. Explore the layered streets — what looks like ground floor is actually the 4th floor on the other side. Dinner: Chongqing hotpot (麻辣, the real thing — numbing and fiery).</p>
                <p><strong>Day 6 — Liziba Monorail + Ciqikou:</strong> Morning: Liziba Station — where the monorail passes through a residential building (yes, really). Ride Line 2 for the experience. Afternoon: Ciqikou Ancient Town — porcelain-making history, street food (麻花 fried dough twists, 陈麻花), and river views. Evening: take the Yangtze River Cableway across the river at sunset.</p>
                <p><strong>Day 7 — Day trip (Wulong or Dazu) OR departure:</strong> <strong>Wulong Karst</strong> (2.5h bus): Three Natural Bridges — the karst landscape from Transformers: Age of Extinction. Stunning. <strong>Dazu Rock Carvings</strong> (1.5h bus): UNESCO-listed Buddhist grottoes, 50,000+ statues carved into cliffs. Pick one if you have the day. Otherwise, explore more of Chongqing&apos;s hilly neighborhoods and depart.</p>
              </div>
            </div>

            {/* Optional extensions */}
            <div className="mb-8 p-6 rounded-xl bg-[#fdf8f3] border border-[var(--line)]">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">If You Have More Time</h3>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p><strong>Add a day in Chengdu:</strong> Sichuan Opera (face-changing performance, ¥150-300), Sichuan Museum (free, excellent Sichuan history), or just spend an afternoon tea-drinking in a park. Chengdu rewards slow travelers.</p>
                <p><strong>Add a day in Chongqing:</strong> Eling Park for skyline views, Testbed 2 arts district (former weapons factory turned creative hub), or the Three Gorges Museum.</p>
              </div>
            </div>
          </section>

          {/* Transport */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Getting Between Cities</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>Chengdu → Chongqing:</strong> High-speed train, 1-1.5 hours, ¥150-260. Trains run every 15-30 min from Chengdu East Station. This is the easiest intercity transfer in western China.
              </p>
              <p>
                <strong>Within Chengdu:</strong> Metro is clean, cheap (¥2-8), and covers most tourist areas. Didi (Chinese Uber) is ¥10-30 for most trips.
              </p>
              <p>
                <strong>Within Chongqing:</strong> The metro is your best friend — driving in Chongqing is chaos (the GPS literally cannot figure out which level of road you&apos;re on). Metro + walking + the cableway covers everything you need.
              </p>
            </div>
          </section>

          {/* Budget */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
              Estimated Budget (7 Days, per person)
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p><strong>Accommodation:</strong> ¥1,400-2,800 (¥200-400/night — both cities are very affordable)</p>
              <p><strong>Intercity transport:</strong> ¥150-260 (one train ride)</p>
              <p><strong>Food:</strong> ¥700-1,400 (¥100-200/day — street food and local restaurants are incredibly cheap)</p>
              <p><strong>Attractions:</strong> ¥500-1,000 (panda base, Leshan Buddha, hotpot experiences)</p>
              <p><strong>Local transport + incidentals:</strong> ¥250-500</p>
              <p><strong>Typical total: ¥5,000-10,000 (about $700-1,400)</strong></p>
              <p className="text-[var(--muted)] italic">This is the most affordable route in China. You can eat like royalty for ¥50-80 a meal.</p>
            </div>
          </section>

          {/* Best time */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Best Time to Go</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>March-June (spring):</strong> Comfortable in both cities. Pandas are active, gardens are green, and hotpot season hasn&apos;t ended (it never really ends in Sichuan).
              </p>
              <p>
                <strong>September-November (autumn):</strong> The sweet spot. Cool, dry, and the golden foliage around Leshan and Dazu is beautiful. October is popular with domestic tourists but manageable.
              </p>
              <p>
                <strong>Avoid:</strong> July-August (both cities are saunas — 35°C+ with 80%+ humidity), and Chinese New Year (late January/early February — everything shuts).
              </p>
            </div>
          </section>

          {/* What to skip */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What to Skip</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Chunxi Road shopping</strong> in Chengdu — it&apos;s just a regular shopping street. You didn&apos;t fly to Sichuan for Zara. Walk through it if you&apos;re nearby, don&apos;t make it a destination.</p>
              <p><strong>Chongqing Zoo</strong> — skip it. The pandas at the Chengdu base are better, and the zoo is depressing compared to other things you could be doing.</p>
              <p><strong>Overpriced hotpot in tourist areas</strong> — ask a local or check Dianping (Chinese Yelp) for neighborhood hotpot. The ¥70/person places in residential areas are better than the ¥200/person places on Jinli.</p>
              <p><strong>Yangtze River cruise</strong> (3-5 days) — if you&apos;re on this route, you don&apos;t have time for it. The day-cruise portion is fine but skip the multi-day unless it&apos;s your whole trip.</p>
            </blockquote>
          </section>

          {/* Pro tips */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p><strong>Chongqing hotpot is spicier than Chengdu&apos;s.</strong> In Chongqing, the default is pure beef tallow with mountains of chili. In Chengdu, they use more peppercorn and less chili. If you&apos;re new to spicy food, start in Chengdu and work your way up.</p>
              <p><strong>Book panda volunteer programs 2-4 weeks ahead.</strong> The Dujiangyan program (¥700-800/day) lets you clean enclosures and prepare bamboo. It books up fast, especially in summer.</p>
              <p><strong>Pack comfortable shoes for Chongqing.</strong> The city is built on mountains — you will walk uphill, downhill, and on stairs you didn&apos;t know existed. Heels are a physical hazard.</p>
              <p><strong>Use Dianping (大众点评) for food.</strong> It&apos;s the Chinese Yelp. Search any restaurant to see real reviews, photos, and prices. No English, but the star ratings and photos are universal.</p>
              <p><strong>Both cities are night owl cities.</strong> Hotpot starts at 9pm, street food stays open until 2am, and Jinli is best after dark. Don&apos;t plan early mornings every day — you&apos;ll be out late.</p>
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
            icon="🌶️"
            title="Want to Add More Cities?"
            description="Combine this route with the Classic China Route for a full 2-week China experience."
            buttonText="See Classic China Route →"
            buttonHref="/plan-your-trip/beijing-shanghai-xian"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}