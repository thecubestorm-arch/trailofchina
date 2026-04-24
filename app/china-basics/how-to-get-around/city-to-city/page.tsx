import { Metadata } from 'next';
import ContextualCTA from '@/components/ContextualCTA'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Getting Between Cities in China | Trail of China',
  description:
    'High-speed train routes, flight comparisons, and booking tips for traveling between Beijing, Shanghai, Xi\'an, Chengdu, and Chongqing.',
};

export default function CityToCityPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'City-to-City'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Getting Between Cities</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China's high-speed rail network is the world's largest and most efficient way to travel between cities. Here are the most popular routes for tourists, with times, prices, and booking tips.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why High-Speed Rail Wins</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-2">
              <span>🚄</span>
              <span>High-speed trains are faster than flying for routes under 5 hours (including airport time)</span>
            </li>
            <li className="flex gap-2">
              <span>💺</span>
              <span>Second class is comfortable — first class isn't worth the upgrade for most routes</span>
            </li>
            <li className="flex gap-2">
              <span>📱</span>
              <span>Book on Trip.com in English with foreign credit cards</span>
            </li>
            <li className="flex gap-2">
              <span>🏛️</span>
              <span>Train stations are central — airports are 30-60 minutes outside the city</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Routes for Tourists</h2>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Shanghai</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 4.5 hours, ¥550-1,750 (second class to business)</li>
                <li>G-trains depart every 15-30 minutes</li>
                <li><strong>Flight:</strong> 2 hours, ¥400-1,200 — but add 2+ hours for airports</li>
                <li><strong>Winner:</strong> Train for convenience, flight only if continuing south</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Xi'an</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 4.5-6 hours, ¥515-1,650</li>
                <li><strong>Flight:</strong> 2 hours, ¥300-800</li>
                <li><strong>Winner:</strong> Train (direct to city center, scenic views)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Shanghai ↔ Hangzhou</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 1 hour, ¥70-220</li>
                <li>Every 5-10 minutes during the day</li>
                <li><strong>Winner:</strong> Always train — faster than flying even counting airport time</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Chengdu ↔ Chongqing</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 1.5 hours, ¥150-460</li>
                <li>Frequent departures, multiple station pairs</li>
                <li><strong>Winner:</strong> Always train</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Xi'an ↔ Chengdu</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 3.5-4 hours, ¥263-790</li>
                <li>Scenic mountain route</li>
                <li><strong>Flight:</strong> 1.5 hours, ¥300-700</li>
                <li><strong>Winner:</strong> Either works — train for scenery, flight for speed</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 Beijing ↔ Chengdu</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li><strong>High-speed train:</strong> 7.5 hours, ¥560-1,780</li>
                <li><strong>Flight:</strong> 2.5 hours, ¥400-1,200</li>
                <li><strong>Winner:</strong> Flight (train too long unless you want the scenery)</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book train tickets 15 days ahead — they sell out fast, especially weekends and holidays</li>
            <li>• G-trains (G字头) are the fastest, D-trains (D字头) are slower but cheaper</li>
            <li>• Trip.com is the easiest way for foreigners to book — English interface, foreign cards accepted</li>
            <li>• Always arrive at the station 30-45 minutes early — security checks take time</li>
            <li>• Chinese train stations are HUGE — check your departure hall (候车厅) number on the screens</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Watch Out For</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Beijing has multiple train stations — check which one your train departs from</li>
            <li>• Shanghai Hongqiao Station is for trains, not the airport (though they're connected)</li>
          </ul>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🚄"
            title="Book Trains Easily with Trip.com"
            description="The easiest way for foreigners to book China trains in English with foreign cards."
            buttonText="Book on Trip.com →"
            buttonHref="/china-basics/what-apps-to-use/trip-com"
            variant="secondary"
          />
        </div>

        <RelatedArticles articles={[
          {title:'Trip.com Booking',description:'Book hotels, trains, and flights in English with foreign cards.',href:'/plan-your-trip/booking/trip'},
          {title:'12306 Train Booking',description:'Book train tickets like a local.',href:'/china-basics/how-to-get-around/12306'},
          {title:'High-Speed Trains',description:'Complete guide to G-trains, D-trains, seat classes, and station tips.',href:'/china-basics/how-to-get-around/train'},
          {title:'Preplanned Trips',description:'Ready-made itineraries with city-to-city routes included.',href:'/plan-your-trip/preplanned-trips'},
        ]} />
      </main>
    </div>
  );
}
