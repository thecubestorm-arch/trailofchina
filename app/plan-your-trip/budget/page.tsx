import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'China Budget Guide — Cost of Travel in China  | Trail of China',
  description:
    'Complete China travel budget guide: daily costs, accommodation, food, transport, attractions, and money-saving tips for every travel style.',
  openGraph: {
    title: 'China Budget Guide — What Everything Actually Costs',
    description:
      'Budget traveler to luxury explorer: real prices for hotels, food, trains, attractions, and more.',
    type: 'article',
  },

  path: '/plan-your-trip/budget',
})

const relatedArticles = [
  {
    title: 'Best Time to Visit China',
    description: 'Month-by-month climate guide and the ideal seasons for every region.',
    href: '/plan-your-trip/best-time-to-visit',
  },
  {
    title: 'Preplanned Trips',
    description: "Ready-made 7, 10, and 14-day itineraries covering China's highlights.",
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    title: 'Trip.com Guide',
    description: 'Book trains, hotels, flights, and attraction tickets - all in English.',
    href: '/china-basics/what-apps-to-use/trip-com',
  },
]

export default function BudgetGuidePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plan Your Trip', href: '/plan-your-trip' },
              { label: 'Budget Guide' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="预" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Budget Guide - Cost of Travel in China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">预算</span>
            <span className="text-lg">• Plan Your Trip</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Budget: ¥200-300/day</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Mid-range: ¥500-800/day</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Luxury: ¥1500+/day</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China can feel remarkably affordable or comfortably premium depending on how you move, sleep, and eat.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-budget/1600/900"
            alt="Budget travel in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">At a Glance</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Daily budget: ¥200-300 (budget), ¥500-800 (mid-range), ¥1500+ (luxury).
            </p>
            <p>
              Budget hotels: ¥80-150/night, Mid-range: ¥300-600, Luxury: ¥800-2000+.
            </p>
            <p>
              Street food: ¥5-15/meal, Restaurant: ¥30-80, High-end: ¥150-500+.
            </p>
            <p>
              High-speed train: ¥50-600 depending on distance, Flights: ¥200-1000.
            </p>
            <p>
              Attractions: ¥20-60 typical entry, ¥100-200 for major sites.
            </p>
            <p>eSIM: $5-15, VPN: $3-12/month.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Budget Categories</h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Accommodation</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Hostels ¥50-80/night, budget hotels ¥100-200, mid-range ¥300-600, luxury ¥800+. Prices are highest in
              Beijing and Shanghai; Chengdu, Chongqing, and Xi&apos;an offer better value. Book through Trip.com or Ctrip
              for English support and foreign-card payments.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Food &amp; Drink</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Street food ¥5-15/meal (noodles, baozi, jianbing), local restaurants ¥20-50, mid-range dining ¥50-100,
              beer ¥5-15, coffee ¥15-30. Avoid restaurants directly next to major tourist attractions - walk two
              blocks and pay half the price for better food.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Transportation</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Metro ¥3-7/ride, bus ¥1-2, Didi (Chinese Uber) ¥10-30 for short trips. High-speed trains are the best
              value for intercity travel - ¥50-600 depending on distance and class. Domestic flights ¥200-1000; book
              2+ weeks ahead for deals.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Attractions &amp; Activities</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Most temples and parks: ¥20-60. Forbidden City: ¥60. Great Wall (Mutianyu/Badaling): ¥40-65. Terracotta
              Warriors: ¥120. Many museums are free with passport. Book tickets online through Trip.com - often
              cheaper than at the gate and you skip the queue.
            </p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">City Cost Comparison</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Beijing and Shanghai are the most expensive cities - expect to pay 30-50% more for hotels and dining.
              Chengdu and Chongqing are the most affordable major cities with excellent food scenes. Xi&apos;an sits in
              the middle: great value with world-class attractions.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>China is cheaper than Japan or Korea but pricier than Southeast Asia - budget accordingly.</p>
            <p>
              Alipay and WeChat Pay are accepted everywhere - you will rarely need cash. Set up mobile payments before
              you arrive.
            </p>
            <p>
              High-speed trains are the best value for intercity travel - comfortable, punctual, and often faster than
              flying when you factor in airport time.
            </p>
            <p>
              Attraction tickets booked online through Trip.com are often cheaper than at the gate and let you skip the
              ticket line.
            </p>
            <p>
              Avoid tourist restaurants near major attractions - walk two blocks for half-price food that locals
              actually eat.
            </p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
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
          icon="🚄"
          title="Book on Trip.com for the Best Prices"
          description="Compare hotels, trains, and flights - all in English with foreign cards accepted."
          buttonText="Book on Trip.com →"
          buttonHref="/china-basics/what-apps-to-use/trip-com"
          variant="secondary"
        />
      </main>
    </div>
  )
}
