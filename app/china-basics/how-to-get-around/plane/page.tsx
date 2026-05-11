import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Domestic Flights in China',
  description:
    'Guide to booking and flying domestic flights in China. Airlines, airports, booking tips, and what to expect at security checks.',

  path: '/china-basics/how-to-get-around/plane',
})

const relatedArticles = [
  {
    title: 'Train Travel',
    description: 'Often faster and more convenient than flights.',
    href: '/china-basics/how-to-get-around/train',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function PlanePage() {
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
              { label: 'China Basics', href: '/china-basics' },
              { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
              { label: 'Plane' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="机" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Domestic Flights
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">飞机</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Best for long distances</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Arrive 2 hours early</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Delays are common</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          For remote destinations like Tibet and Xinjiang, or for very long domestic routes, flights can still make more sense
          than rail, especially when the train journey becomes an all-day commitment.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-domestic-flights/1600/900"
            alt="Domestic flights in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China&apos;s airline network is extensive, and domestic flights are often the best option for very long distances or
              remote western regions where rail either takes too long or does not serve the route cleanly.
            </p>
            <p>
              Flights can also be cheaper than high-speed trains, but that only tells part of the story. Airport transfers,
              earlier arrival requirements, and routine delays can erase the headline time savings on shorter routes.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Major Airlines</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Air China</strong> is the flag carrier with a broad network and generally reliable service.
            </p>
            <p>
              <strong>China Eastern</strong> is strong out of Shanghai and often prices competitively, while
              <strong> China Southern</strong> is especially useful for southern routes and has the country&apos;s largest fleet.
            </p>
            <p>
              <strong>Hainan Airlines</strong> is often treated as the premium domestic option, and <strong>Spring Airlines</strong>{' '}
              is the low-cost carrier for travelers who care more about price than frills.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-airport-departures/1600/900"
              alt="Airport departure board in China"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Book</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            <li>Use Trip.com if you want an English interface and the least friction as a foreign traveler.</li>
            <li>Use Ctrip if you can manage the Chinese app and want access to the local pricing experience.</li>
            <li>Check airline websites directly because some carriers are cheapest when you book without an intermediary.</li>
            <li>Use a travel agent for more complex itineraries or routes that combine special permits and regional logistics.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">At the Airport</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Arrive 2 hours early for domestic flights.</li>
            <li>Security is strict and can feel close to an international departure process.</li>
            <li>Power banks must be carried on rather than checked.</li>
            <li>Keep your passport handy because multiple ID checks are common.</li>
            <li>Download the airline app for updates because delays are common.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Book two to three weeks ahead for the best prices.</p>
            <p>Tuesday and Wednesday departures are often cheaper.</p>
            <p>For routes under four hours by bullet train, compare rail carefully before assuming the plane is better.</p>
            <p>Airline loyalty programs can make sense if you expect lounge time because delays are part of the equation.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Common Issues</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Weather delays are common in winter fog and summer storms.</p>
            <p>Chinese airlines do not always announce delays clearly in English.</p>
            <p>Airport food is overpriced, so eat before you go when possible.</p>
            <p>Some smaller airports are far from city centers, which can erase the convenience advantage.</p>
            <p>For Beijing to Shanghai specifically, the flight is only really worth it if you live far from train stations.</p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--primary)]">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 transition-colors hover:bg-[#faf8f4]">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="🚄"
          title="Compare Flights With Trains"
          description="For many routes, high-speed rail is more convenient once you factor in airport transfers, security, and delays."
          buttonText="Train Travel Guide →"
          buttonHref="/china-basics/how-to-get-around/train"
          variant="secondary"
        />
      </main>
    </div>
  )
}
