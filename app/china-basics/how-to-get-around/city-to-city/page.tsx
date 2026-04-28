import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import ContextualCTA from '@/components/ContextualCTA';

export const metadata: Metadata = {
  title: 'Getting Between Cities in China | Trail of China',
  description:
    "High-speed train routes, flight comparisons, and booking tips for traveling between Beijing, Shanghai, Xi'an, Chengdu, and Chongqing.",
};

export default function CityToCityPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚄"
        heroImage={{ src: 'https://picsum.photos/seed/china-high-speed-train/800/400', alt: 'Getting Between Cities in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'City-to-City' },
        ]}
        category="How to Get Around"
        title="Getting Between Cities"
        intro="China's high-speed rail network is the world's largest and most efficient way to travel between cities. Here are the most popular routes for tourists, with times, prices, and booking tips."
        hook="High-speed trains are faster than flying for routes under 5 hours (including airport time). Book on Trip.com in English with foreign credit cards."
        proTips={[
          'Book train tickets 15 days ahead — they sell out fast, especially weekends and holidays',
          'G-trains (G字头) are the fastest, D-trains (D字头) are slower but cheaper',
          'Trip.com is the easiest way for foreigners to book — English interface, foreign cards accepted',
          'Always arrive at the station 30-45 minutes early — security checks take time',
          'Chinese train stations are HUGE — check your departure hall (候车厅) number on the screens',
        ]}
        related={[
          { label: 'Trip.com', href: '/china-basics/what-apps-to-use/trip-com' },
          { label: '12306 Train Booking', href: '/china-basics/how-to-get-around/12306' },
          { label: 'High-Speed Trains', href: '/china-basics/how-to-get-around/train' },
        ]}
        relatedArticles={[
          { title: 'Trip.com Booking', description: 'Book hotels, trains, and flights in English with foreign cards.', href: '/plan-your-trip/booking/trip' },
          { title: '12306 Train Booking', description: 'Book train tickets like a local.', href: '/china-basics/how-to-get-around/12306' },
          { title: 'High-Speed Trains', description: 'Complete guide to G-trains, D-trains, seat classes, and station tips.', href: '/china-basics/how-to-get-around/train' },
          { title: 'Preplanned Trips', description: 'Ready-made itineraries with city-to-city routes included.', href: '/plan-your-trip/preplanned-trips' },
        ]}
        tocItems={[
          { id: 'why-high-speed', title: 'Why High-Speed Rail Wins' },
          { id: 'top-routes', title: 'Top Routes for Tourists' },
          { id: 'watch-out', title: 'Watch Out For' },
        ]}
      >
        {/* Why High-Speed Rail Wins */}
        <div id="why-high-speed" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Why High-Speed Rail Wins</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">🚄 High-speed trains are faster than flying for routes under 5 hours (including airport time)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">💺 Second class is comfortable — first class isn't worth the upgrade for most routes</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">📱 Book on Trip.com in English with foreign credit cards</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">🏛️ Train stations are central — airports are 30-60 minutes outside the city</li>
          </ul>
        </div>

        {/* Top Routes */}
        <div id="top-routes" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Top Routes for Tourists</h2>
          <div className="mt-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Shanghai</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 4.5 hours, ¥550-1,750 (second class to business)</li>
                <li>G-trains depart every 15-30 minutes</li>
                <li><strong>Flight:</strong> 2 hours, ¥400-1,200 — but add 2+ hours for airports</li>
                <li><strong>Winner:</strong> Train for convenience, flight only if continuing south</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Xi'an</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 4.5-6 hours, ¥515-1,650</li>
                <li><strong>Flight:</strong> 2 hours, ¥300-800</li>
                <li><strong>Winner:</strong> Train (direct to city center, scenic views)</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Shanghai ↔ Hangzhou</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 1 hour, ¥70-220</li>
                <li>Every 5-10 minutes during the day</li>
                <li><strong>Winner:</strong> Always train — faster than flying even counting airport time</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Chengdu ↔ Chongqing</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 1.5 hours, ¥150-460</li>
                <li>Frequent departures, multiple station pairs</li>
                <li><strong>Winner:</strong> Always train</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Xi'an ↔ Chengdu</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 3.5-4 hours, ¥263-790</li>
                <li>Scenic mountain route</li>
                <li><strong>Flight:</strong> 1.5 hours, ¥300-700</li>
                <li><strong>Winner:</strong> Either works — train for scenery, flight for speed</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Chengdu</h3>
              <ul className="text-slate-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 7.5 hours, ¥560-1,780</li>
                <li><strong>Flight:</strong> 2.5 hours, ¥400-1,200</li>
                <li><strong>Winner:</strong> Flight (train too long unless you want the scenery)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Watch Out */}
        <div id="watch-out" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Watch Out For</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Beijing has multiple train stations — check which one your train departs from</li>
            <li className="text-sm leading-relaxed md:text-base">• Shanghai Hongqiao Station is for trains, not the airport (though they're connected)</li>
          </ul>
        </div>
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
  );
}