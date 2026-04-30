import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Travel Planner | Trail of China',
  description: 'Build your custom China itinerary. Select cities, duration, interests, and budget.',
}

const cities = ['Beijing', 'Shanghai', "Xi'an", 'Chengdu', 'Guilin/Yangshuo', 'Hong Kong']
const durations = ['7 days', '10 days', '14 days', '21+ days']
const interests = [
  'History & Culture',
  'Food & Dining',
  'Nature & Scenery',
  'Modern Cities',
  'Adventure',
  'Relaxation',
]
const budgets = ['Budget', 'Mid-range', 'Luxury']

export default function TravelPlannerPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plan Your Trip', href: '/plan-your-trip' },
              { label: 'Travel Planner' },
            ]}
          />
        </div>

        <header className="mb-10 relative">
          <ChineseWatermark character="旅" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Travel Planner
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">旅行计划</span>
            <span className="text-lg">• Plan Your Trip</span>
          </div>
        </header>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          Sketch the shape of your China trip first, then refine the rhythm city by city.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Build Your Ideal Route
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              This planner helps you think through the essentials of a China itinerary: where you want to go, how long you
              have, what kind of experiences matter most, and how you want to budget the trip. It is still a demo, but the
              form below reflects the structure the full itinerary builder will use.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <form className="space-y-8 rounded-xl border border-[var(--line)] bg-white/60 p-6 md:p-8 backdrop-blur-sm">
            <div>
              <label className="block text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-4">
                Which cities do you want to visit?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cities.map((city) => (
                  <label
                    key={city}
                    className="flex items-center gap-3 border border-[var(--line)] rounded-lg p-3 hover:bg-[var(--surface)] cursor-pointer text-[var(--foreground)] min-h-[52px] transition-colors"
                  >
                    <input type="checkbox" name="cities" value={city} className="h-4 w-4 accent-[var(--primary)]" />
                    <span>{city}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="duration"
                className="block text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-4"
              >
                Trip duration
              </label>
              <select
                id="duration"
                name="duration"
                defaultValue=""
                className="w-full md:w-1/2 border border-[var(--line)] rounded-lg p-3 bg-transparent text-[var(--foreground)]"
              >
                <option value="" disabled>
                  Select a trip length
                </option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-4">
                What are you most interested in?
              </label>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="border border-[var(--line)] rounded-full px-4 py-2 text-[var(--foreground)] hover:bg-[var(--surface)] cursor-pointer min-h-[44px] inline-flex items-center transition-colors"
                  >
                    <input type="checkbox" name="interests" value={interest} className="sr-only" />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-4">
                Budget level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {budgets.map((budget) => (
                  <label
                    key={budget}
                    className="flex items-center gap-3 border border-[var(--line)] rounded-lg p-3 hover:bg-[var(--surface)] cursor-pointer text-[var(--foreground)] min-h-[52px] transition-colors"
                  >
                    <input type="radio" name="budget" value={budget} className="h-4 w-4 accent-[var(--primary)]" />
                    <span>{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled
                title="Coming soon: itinerary generation is not live yet."
                aria-disabled="true"
                className="bg-[var(--primary)] text-white rounded-full px-8 py-3 font-semibold opacity-60 cursor-not-allowed"
              >
                Generate My Itinerary
              </button>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Demo mode only. For now, explore{' '}
                <Link href="/plan-your-trip/preplanned-trips" className="underline decoration-[var(--primary)] underline-offset-2">
                  preplanned trips
                </Link>
                .
              </p>
            </div>
          </form>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">A Practical Tip</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Start by choosing no more than two or three anchor cities, then build the rest of the trip around transfer time,
            not just bucket-list stops. China looks compact on a map, but travel days add up quickly.
          </blockquote>
        </section>

        <ContextualCTA
          icon="🧭"
          title="Not Sure Where to Start?"
          description="Browse ready-made routes to see how a balanced China itinerary can come together."
          buttonText="Browse Preplanned Trips →"
          buttonHref="/plan-your-trip/preplanned-trips"
          variant="primary"
        />
      </main>
    </div>
  )
}
