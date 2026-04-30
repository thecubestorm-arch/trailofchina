import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: "7-Day China Route: Beijing, Xi'an, Shanghai | Trail of China",
  description: 'A practical one-week China itinerary with day-by-day plan, transport times, and realistic trip costs.',
}

const relatedArticles = [
  {
    title: '10-Day Extended China Route',
    description: 'Add Chengdu pandas and Yangshuo karst to the classic circuit.',
    href: '/plan-your-trip/preplanned-trips/10-day-route',
  },
  {
    title: '14-Day Grand China Tour',
    description: 'The ultimate 2-week China itinerary covering all highlights at a comfortable pace.',
    href: '/plan-your-trip/preplanned-trips/14-day-route',
  },
  {
    title: 'Budget Guide',
    description: 'How much to budget for your China trip, with cost breakdowns by city.',
    href: '/plan-your-trip/budget',
  },
  {
    title: 'Best Time to Visit',
    description: 'When to go to China based on weather, crowds, and seasonal events.',
    href: '/plan-your-trip/best-time-to-visit',
  },
]

export default function SevenDayRoutePage() {
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
              { label: 'Preplanned Trips', href: '/plan-your-trip/preplanned-trips' },
              { label: '7-Day Route' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="日" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            7-Day Route: Beijing - Xi&apos;an - Shanghai
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">七日</span>
            <span className="text-lg">• Plan Your Trip • Preplanned Trips</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Fast-paced</span>
          <span className="text-[var(--muted)]">·</span>
          <span>2 major train legs</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Typical total: Y5,750-11,500</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          This is the classic first-China sprint: imperial capital, ancient heartland, then the modern coast.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-7-day-route/1600/900"
            alt="7-day China itinerary overview"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Trip Overview</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              This route covers China&apos;s essential first-timer highlights in one week: imperial history in Beijing,
              ancient walls and terracotta warriors in Xi&apos;an, then modern skyline and food scenes in Shanghai.
            </p>
            <p>
              <strong>Trip style:</strong> Fast-paced but manageable. Best for travelers comfortable with early starts
              and two major intercity transfers.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Day-by-Day Itinerary</h2>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">Day 1 - Arrive in Beijing</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Check in near Dongcheng or Wangfujing, light walk around hutongs, early dinner, reset for jet lag.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 2 - Forbidden City + Jingshan + Wangfujing
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Start at Tiananmen/Forbidden City in the morning; sunset city view from Jingshan Park.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 3 - Great Wall (Mutianyu) + Overnight Train Prep
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Half-day or full-day wall trip. Return to city, collect luggage, head to Beijing West station.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 4 - Xi&apos;an City Walls + Muslim Quarter
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Morning high-speed train arrival. Afternoon bike/walk on city wall, evening food crawl.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 5 - Terracotta Warriors + Train to Shanghai
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Early tour to warriors, then high-speed train to Shanghai in the evening.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 6 - The Bund + Yu Garden + French Concession
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Historic Shanghai and skyline day. Night river walk on the Bund.</p>
          </div>

          <h3 className="mt-8 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)] mb-3">
            Day 7 - Museum / Shopping / Departure
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Flexible final day. Keep 4-5 hours buffer before your international departure.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Transport Details</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Beijing - Xi&apos;an:</strong> G-train, ~4.5-6 hours, usually Y515-Y825 depending on class.
            </p>
            <p>
              <strong>Xi&apos;an - Shanghai:</strong> G-train, ~6-7 hours, typically Y670-Y1,050.
            </p>
            <p>
              <strong>City transit:</strong> Metro cards and Alipay/WeChat Pay make local transport easiest.
            </p>
            <p>
              <strong>Airport transfers:</strong> Budget Y40-Y120 per transfer depending on city and time.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Estimated Costs (per person, 7 days)
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Accommodation:</strong> Y2,100-4,900 (mid-range hotels)
            </p>
            <p>
              <strong>Intercity transport:</strong> Y1,200-1,900
            </p>
            <p>
              <strong>Food:</strong> Y1,050-2,100
            </p>
            <p>
              <strong>Attractions and tours:</strong> Y900-1,700
            </p>
            <p>
              <strong>Local transport + incidentals:</strong> Y500-900
            </p>
            <p>
              <strong>Typical total:</strong> Y5,750-11,500 (about $790-$1,580)
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Book Forbidden City tickets as soon as your dates are fixed.</p>
            <p>For this tight route, stay near major metro hubs in each city.</p>
            <p>Avoid same-day long wall trip + long train transfer if you are jet-lagged.</p>
            <p>Keep at least one flexible half-day for weather or delays.</p>
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
          icon="🧭"
          title="Want a Slower China Loop?"
          description="Step up to the 10-day or 14-day routes if you want more breathing room and extra scenery."
          buttonText="See Longer Routes →"
          buttonHref="/plan-your-trip/preplanned-trips"
          variant="secondary"
        />
      </main>
    </div>
  )
}
