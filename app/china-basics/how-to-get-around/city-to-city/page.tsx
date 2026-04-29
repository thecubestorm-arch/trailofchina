import type { Metadata } from 'next'
import ContextualCTA from '@/components/ContextualCTA'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Getting Between Cities in China | Trail of China',
  description:
    "High-speed train routes, flight comparisons, and booking tips for traveling between Beijing, Shanghai, Xi'an, Chengdu, and Chongqing.",
}

const tocItems = [
  { id: 'why-high-speed-rail-wins', title: 'Why High-Speed Rail Wins' },
  { id: 'top-routes-for-tourists', title: 'Top Routes for Tourists' },
  { id: 'pro-tips', title: 'Pro Tips' },
  { id: 'watch-out-for', title: 'Watch Out For' },
]

const quickInfoPills = [
  'Best for routes under 5 hours',
  'Book 15 days ahead',
  'Trip.com is easiest for foreigners',
]

export default function CityToCityPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚄"
        heroImage={{ src: 'https://picsum.photos/seed/china-city-to-city-rail/800/400', alt: 'High-speed rail travel between Chinese cities' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'City-to-City' },
        ]}
        category="How to Get Around"
        title="Getting Between Cities"
        intro="China's high-speed rail network is the world's largest and most efficient way to travel between cities. Here are the most popular routes for tourists, with times, prices, and booking tips."
        whyYouNeedThis={[
          "China's intercity transport system can save huge amounts of time if you choose the right mode for each route.",
          'High-speed rail is often faster door-to-door than flying once airport transfers and security are included.',
          'Popular tourist corridors have frequent service, but tickets can still sell out quickly around weekends and holidays.',
          'Knowing which routes are best by train versus plane helps you avoid expensive and unnecessary travel friction.',
        ]}
        relatedArticles={[
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
        ]}
        tocItems={tocItems}
      >
        <>
          <div className="flex flex-wrap gap-3">
            {quickInfoPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {pill}
              </span>
            ))}
          </div>

          <div>
            <h2 id="why-high-speed-rail-wins" className="text-2xl font-extrabold text-slate-900">
              Why High-Speed Rail Wins
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>🚄 High-speed trains are faster than flying for routes under 5 hours (including airport time)</li>
              <li>💺 Second class is comfortable — first class isn&apos;t worth the upgrade for most routes</li>
              <li>📱 Book on Trip.com in English with foreign credit cards</li>
              <li>🏛️ Train stations are central — airports are 30-60 minutes outside the city</li>
            </ul>
          </div>

          <div>
            <h2 id="top-routes-for-tourists" className="text-2xl font-extrabold text-slate-900">
              Top Routes for Tourists
            </h2>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Beijing ↔ Shanghai</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 4.5 hours, ¥550-1,750 (second class to business)</li>
                  <li>G-trains depart every 15-30 minutes</li>
                  <li><strong>Flight:</strong> 2 hours, ¥400-1,200 — but add 2+ hours for airports</li>
                  <li><strong>Winner:</strong> Train for convenience, flight only if continuing south</li>
                </ul>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Beijing ↔ Xi&apos;an</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 4.5-6 hours, ¥515-1,650</li>
                  <li><strong>Flight:</strong> 2 hours, ¥300-800</li>
                  <li><strong>Winner:</strong> Train (direct to city center, scenic views)</li>
                </ul>
              </div>

              <div className="rounded-lg bg-amber-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Shanghai ↔ Hangzhou</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 1 hour, ¥70-220</li>
                  <li>Every 5-10 minutes during the day</li>
                  <li><strong>Winner:</strong> Always train — faster than flying even counting airport time</li>
                </ul>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Chengdu ↔ Chongqing</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 1.5 hours, ¥150-460</li>
                  <li>Frequent departures, multiple station pairs</li>
                  <li><strong>Winner:</strong> Always train</li>
                </ul>
              </div>

              <div className="rounded-lg bg-teal-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Xi&apos;an ↔ Chengdu</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 3.5-4 hours, ¥263-790</li>
                  <li>Scenic mountain route</li>
                  <li><strong>Flight:</strong> 1.5 hours, ¥300-700</li>
                  <li><strong>Winner:</strong> Either works — train for scenery, flight for speed</li>
                </ul>
              </div>

              <div className="rounded-lg bg-red-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">🚄 Beijing ↔ Chengdu</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  <li><strong>High-speed train:</strong> 7.5 hours, ¥560-1,780</li>
                  <li><strong>Flight:</strong> 2.5 hours, ¥400-1,200</li>
                  <li><strong>Winner:</strong> Flight (train too long unless you want the scenery)</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="pro-tips" className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-extrabold text-amber-900">Pro Tips</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-amber-950 md:text-base">
              <li>Book train tickets 15 days ahead — they sell out fast, especially weekends and holidays</li>
              <li>G-trains (G字头) are the fastest, D-trains (D字头) are slower but cheaper</li>
              <li>Trip.com is the easiest way for foreigners to book — English interface, foreign cards accepted</li>
              <li>Always arrive at the station 30-45 minutes early — security checks take time</li>
              <li>Chinese train stations are HUGE — check your departure hall (候车厅) number on the screens</li>
            </ul>
          </div>

          <div id="watch-out-for" className="rounded-2xl border border-[#ebe4d8] bg-[#faf8f4] p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Watch Out For</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>Beijing has multiple train stations — check which one your train departs from</li>
              <li>Shanghai Hongqiao Station is for trains, not the airport (though they&apos;re connected)</li>
            </ul>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🚄"
          title="Book Trains Easily with Trip.com"
          description="The easiest way for foreigners to book China trains in English with foreign cards."
          buttonText="Book on Trip.com →"
          buttonHref="/china-basics/what-apps-to-use/trip-com"
          variant="secondary"
        />
      </div>
    </div>
  )
}
