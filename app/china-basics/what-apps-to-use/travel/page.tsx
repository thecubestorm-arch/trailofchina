import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Travel Apps: Trip.com and DiDi',
  description:
    'How to use Trip.com and DiDi for flights, trains, hotels, and local rides across China with fewer booking mistakes.',
}

const setupSteps = [
  {
    title: 'Create and verify your Trip.com account',
    description:
      'Add passport details in profile settings so rail and flight bookings can be issued correctly without last-minute edits.',
  },
  {
    title: 'Install DiDi and link payment options',
    description:
      'Set your default payment method in DiDi and test location permissions for accurate pickup detection.',
  },
  {
    title: 'Practice one mock booking flow',
    description:
      'Before travel, simulate a train booking and cancel before payment so you understand seat class and station filtering.',
  },
  {
    title: 'Set notification preferences',
    description:
      'Enable push alerts for boarding changes, gate updates, and driver arrival timing to avoid missed windows.',
  },
]

const relatedArticles = [
  {
    title: 'How to Get Around',
    description: 'Transportation overview: trains, planes, taxis, and more.',
    href: '/china-basics/how-to-get-around',
  },
  {
    title: '12306 Train Booking',
    description: 'Book China train tickets directly like a local.',
    href: '/china-basics/how-to-get-around/12306',
  },
]

export default function TravelAppsPage() {
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
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'Travel Booking' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="行" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Travel Apps: Trip.com and DiDi
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">出行</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Trip.com + Didi</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Bookings + local rides</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Useful for multi-city trips</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Trip.com and Didi cover two different parts of the same problem. One organizes the intercity backbone of your trip;
          the other handles the last-mile reality once you reach each city.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/travel-apps-china/1600/900"
            alt="Travel apps in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              A centralized booking history matters when you are moving between multiple cities and plans shift. Trip.com
              keeps your trains, flights, and hotels in one place, which lowers the chance of simple but expensive booking
              mistakes.
            </p>
            <p>
              Didi reduces language friction for pickup and drop-off details, which matters most at airports, train stations,
              and large commercial districts where a vague address is not enough.
            </p>
            <p>
              Both apps also simplify receipts, e-tickets, and confirmation trails, which helps if you need to re-check a
              booking, file reimbursement, or prove what was reserved.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Step-by-Step Setup</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="leading-relaxed">
                <p>
                  <strong>{step.title}.</strong> {step.description}
                </p>
                {index === 0 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/travel-trip-account/800/1200"
                      alt="Trip.com account profile setup"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/travel-didi-app/800/1200"
                      alt="Didi location and payment setup"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                    <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Role Split</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Trip.com</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Use Trip.com for flights, trains, and hotels. It is the app that keeps the shape of your itinerary coherent and
              reduces the need to bounce between separate booking systems.
            </p>
          </div>

          <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Didi</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Use Didi for city movement, especially airport arrivals, station exits, and rides to hotels. It solves the
              exact-address problem better than ad hoc taxis when you do not speak fluent Chinese.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            For airport pickups, trust the exact terminal-level pickup pin shown in Didi. Large Chinese airports punish vague
            meeting plans.
          </blockquote>
        </section>

        <section className="border-t border-[#ebe4d8] pt-8">
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
      </main>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="🌐"
          title="Need Internet in China?"
          description="Get an eSIM before you go and stay connected the moment you land."
          buttonText="Get an eSIM →"
          buttonHref="/china-basics/how-to-get-internet/airalo-esim"
          variant="secondary"
        />
      </div>
    </div>
  )
}
