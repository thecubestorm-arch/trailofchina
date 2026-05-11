import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import TravelPlannerForm from './TravelPlannerForm'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'Travel Planner',
  description: 'Build your custom China itinerary. Select cities, duration, interests, and budget.',

  path: '/plan-your-trip/travel-planner',
})

export default function TravelPlannerPage() {
  const breadcrumbJsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Travel Planner", path: "/plan-your-trip/travel-planner" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
            <span className="text-lg">Plan Your Trip</span>
          </div>
        <AuthorByline />
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
              have, what kind of experiences matter most, and how you want to budget the trip. Share your preferences
              below and we will turn them into a tailored route.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <TravelPlannerForm />
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
    </>
  )
}
