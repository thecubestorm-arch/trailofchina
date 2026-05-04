import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Getting Between Cities in China | Trail of China',
  description:
    "High-speed train routes, flight comparisons, and booking tips for traveling between Beijing, Shanghai, Xi'an, Chengdu, and Chongqing.",

  path: '/china-basics/how-to-get-around/city-to-city',
})

const relatedArticles = [
  {
    title: 'Trip.com Booking',
    description: 'Book hotels, trains, and flights in English with foreign cards.',
    href: '/plan-your-trip/booking/trip',
  },
  {
    title: '12306 Train Booking',
    description: 'Book train tickets like a local.',
    href: '/china-basics/how-to-get-around/12306',
  },
  {
    title: 'High-Speed Trains',
    description: 'Complete guide to G-trains, D-trains, seat classes, and station tips.',
    href: '/china-basics/how-to-get-around/train',
  },
  {
    title: 'Preplanned Trips',
    description: 'Ready-made itineraries with city-to-city routes included.',
    href: '/plan-your-trip/preplanned-trips',
  },
]

export default function CityToCityPage() {
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
              { label: 'City-to-City' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="城" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Getting Between Cities
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">城际</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Best for routes under 5 hours</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Book 15 days ahead</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Trip.com is easiest for foreigners</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          China&apos;s intercity transport is good enough that the wrong decision usually comes from overestimating flights and
          underestimating how efficient high-speed rail is once you include the entire trip, not just the scheduled travel time.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-city-to-city-rail/1600/900"
            alt="High-speed rail travel between Chinese cities"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China&apos;s intercity network can save huge amounts of time if you choose the right mode for each route. High-speed
              rail is often faster door-to-door than flying once airport transfers and security are counted honestly.
            </p>
            <p>
              Popular tourist corridors run frequently, but tickets still sell out around weekends and holidays, so knowing when
              the train wins and when the plane actually makes sense prevents avoidable friction.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why High-Speed Rail Wins</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              High-speed trains are usually the right call for routes under five hours. Second class is comfortable enough that
              first class is not worth the upgrade for most travelers, and stations are typically far more central than airports.
            </p>
            <p>
              Trip.com is the easiest way for foreigners to book in English with foreign credit cards, but the core advantage is
              the network itself rather than the app: frequent departures and city-center arrival points change the equation.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-route-board/1600/900"
              alt="Intercity route board in China"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Top Routes for Tourists</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Beijing ↔ Shanghai</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The high-speed train takes about 4.5 hours and roughly ¥550 to ¥1,750 from second class to business class, with
              G-trains departing every 15 to 30 minutes. Flights take about 2 hours and can run from ¥400 to ¥1,200, but once
              you add airport time, the train usually wins for convenience.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Beijing ↔ Xi&apos;an</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              High-speed rail takes about 4.5 to 6 hours and roughly ¥515 to ¥1,650. Flights take about 2 hours and often run
              from ¥300 to ¥800, but the train is usually the better tourist choice because it goes directly city-center to
              city-center and gives you a more relaxed trip.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Shanghai ↔ Hangzhou</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The high-speed train takes about 1 hour and roughly ¥70 to ¥220, with departures every 5 to 10 minutes during
              the day. This is a train route every time. Flying is not a serious competitor.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Chengdu ↔ Chongqing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The train takes about 1.5 hours and roughly ¥150 to ¥460 with frequent departures across several station pairs.
              This is another route where the train is the clear answer.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Xi&apos;an ↔ Chengdu</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              High-speed rail takes about 3.5 to 4 hours and roughly ¥263 to ¥790, while flights take about 1.5 hours and can
              cost around ¥300 to ¥700. Either works here: choose the train for scenery and simplicity, or the flight if every
              hour matters.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Beijing ↔ Chengdu</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              The train takes about 7.5 hours and roughly ¥560 to ¥1,780, while flights take about 2.5 hours and can cost
              around ¥400 to ¥1,200. This is one of the routes where flying usually makes more sense unless you specifically
              want the long rail journey.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Book train tickets 15 days ahead because they sell out fast, especially on weekends and holidays.</p>
            <p>G-trains are the fastest, while D-trains are slower but sometimes cheaper.</p>
            <p>Always arrive at the station 30 to 45 minutes early because security checks take time.</p>
            <p>Chinese train stations are huge, so check the departure hall number on the boards.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Watch Out For</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Beijing has multiple major train stations, so verify the exact departure station carefully.</p>
            <p>Shanghai Hongqiao Station is for trains, not the airport itself, even though the two are connected.</p>
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
          title="Book Trains Easily with Trip.com"
          description="The easiest way for foreigners to book China trains in English with foreign cards."
          buttonText="Book on Trip.com →"
          buttonHref="/china-basics/what-apps-to-use/trip-com"
          variant="secondary"
        />
      </main>
    </div>
  )
}
