import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'High-Speed Trains in China | Trail of China',
  description:
    "Complete guide to booking and riding China's high-speed rail network. G-trains, D-trains, seat classes, booking, and station tips.",

  path: '/china-basics/how-to-get-around/train',
})

const bookingSteps = [
  'Download 12306 app. It is the official railway app, though the experience can still feel clunky for visitors.',
  'Use Trip.com if you want an English option for foreigners and are willing to pay a small booking fee.',
  'Buy at the station with your passport if needed, but queues can be long and popular departures may already be gone.',
  'Book 30 days in advance on busy routes because the most convenient departures do sell out.',
]

const relatedArticles = [
  {
    title: '12306 Train Booking',
    description: 'Book train tickets like a local.',
    href: '/china-basics/how-to-get-around/12306',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function TrainPage() {
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
              { label: 'Train' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="车" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            High-Speed Trains
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">高铁</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Best for intercity travel</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Book up to 30 days ahead</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Platforms close 5 minutes before departure</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          China&apos;s high-speed rail is the world&apos;s largest network, connecting virtually every major city at speeds up to
          350 km/h, and for many routes it beats flying once airport time is included.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-high-speed-train/1600/900"
            alt="High-speed train travel in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China&apos;s high-speed rail is the world&apos;s largest network, and it connects virtually every major city in a way
              that feels built for travelers who want efficiency rather than airport friction.
            </p>
            <p>
              Trains reach 350 km/h, stations are usually closer to city centers than airports, and boarding is far more
              predictable once you understand the system. For many common tourist routes, the train is simply the fastest
              door-to-door option.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Train Types Explained</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">G-Trains (Gaotie)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>These are the fastest trains, reaching up to 350 km/h. They offer premium comfort and the highest fares.</p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">D-Trains (Dongche)</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>These run up to 250 km/h and usually strike the best balance between speed and price for most travelers.</p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">C, K, T, and Z Trains</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              These are regular or sleeper trains. They are slower but much cheaper, and they can make sense for overnight
              routes where saving on a hotel matters more than speed.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Book Tickets</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {bookingSteps.map((step) => (
              <li key={step} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-train-station/1600/900"
              alt="China train station departure hall"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Seat Classes</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Business (商务座):</strong> lie-flat style seats, premium service, and prices that often start above
              ¥1,000 on major routes.
            </p>
            <p>
              <strong>First Class (一等座):</strong> a roomier 2+2 layout with more space, usually around 1.5 times the base
              fare.
            </p>
            <p>
              <strong>Second Class (二等座):</strong> the standard 2+3 layout and the default choice for most travelers because
              it is comfortable and cost-effective.
            </p>
            <p>
              On sleeper services, expect <strong>soft sleeper</strong> compartments with four beds or <strong>hard sleeper</strong>{' '}
              compartments with six beds.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">At the Station</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Arrive 30 minutes early, or 45 minutes early for very large stations.</li>
            <li>Security screening is required and feels similar to an airport check.</li>
            <li>Platform gates close 5 minutes before departure, so do not cut timing too fine.</li>
            <li>Keep your ticket details available until arrival because checks can happen again on exit.</li>
            <li>Food carts and hot water are available on all trains, which helps on longer rides.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Download offline maps before departure because tunnels often block signal.</p>
            <p>Bring snacks because station food is expensive.</p>
            <p>Second class is perfectly comfortable for most trips.</p>
            <p>Beijing to Shanghai takes about 4.5 hours by G-train versus a 2.5 hour flight plus airport transfers.</p>
            <p>Bullet trains are often more reliable than flights.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Watch Out For</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Booking through unofficial apps can cause ticketing problems or cancellations.</p>
            <p>Train stations are huge, so allow extra time to find the correct hall and platform gate.</p>
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
          icon="🎫"
          title="Book Trains the Easy Way"
          description="If the official 12306 process feels heavy, start with the simpler foreigner-friendly booking options before you travel."
          buttonText="12306 Booking Guide →"
          buttonHref="/china-basics/how-to-get-around/12306"
          variant="secondary"
        />
      </main>
    </div>
  )
}
