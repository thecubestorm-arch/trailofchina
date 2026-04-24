import { Metadata } from 'next';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: '7-Day China Route: Beijing, Xi\'an, Shanghai | Trail of China',
  description: 'A practical one-week China itinerary with day-by-day plan, transport times, and realistic trip costs.',
};

export default function SevenDayRoutePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">7-Day Route: Beijing → Xi&apos;an → Shanghai</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This route covers China&apos;s essential first-timer highlights in one week: imperial history in Beijing,
            ancient walls and terracotta warriors in Xi&apos;an, then modern skyline and food scenes in Shanghai.
          </p>
          <p className="text-gray-700">
            <strong>Trip style:</strong> Fast-paced but manageable. Best for travelers comfortable with early starts and
            two major intercity transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Day-by-Day Itinerary</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 1 - Arrive in Beijing</h3>
              <p>Check in near Dongcheng or Wangfujing, light walk around hutongs, early dinner, reset for jet lag.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 2 - Forbidden City + Jingshan + Wangfujing</h3>
              <p>Start at Tiananmen/Forbidden City in the morning; sunset city view from Jingshan Park.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 3 - Great Wall (Mutianyu) + Overnight Train Prep</h3>
              <p>Half-day or full-day wall trip. Return to city, collect luggage, head to Beijing West station.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 4 - Xi&apos;an City Walls + Muslim Quarter</h3>
              <p>Morning high-speed train arrival. Afternoon bike/walk on city wall, evening food crawl.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 5 - Terracotta Warriors + Train to Shanghai</h3>
              <p>Early tour to warriors, then high-speed train to Shanghai in the evening.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 6 - The Bund + Yu Garden + French Concession</h3>
              <p>Historic Shanghai and skyline day. Night river walk on the Bund.</p>
            </div>
            <div className="bg-[#f5f1ea] rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Day 7 - Museum / Shopping / Departure</h3>
              <p>Flexible final day. Keep 4-5 hours buffer before your international departure.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Transport Details</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Beijing → Xi&apos;an:</strong> G-train, ~4.5-6 hours, usually ¥515-¥825 depending on class.</li>
            <li><strong>Xi&apos;an → Shanghai:</strong> G-train, ~6-7 hours, typically ¥670-¥1,050.</li>
            <li><strong>City transit:</strong> Metro cards and Alipay/WeChat Pay make local transport easiest.</li>
            <li><strong>Airport transfers:</strong> Budget ¥40-¥120 per transfer depending on city and time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Estimated Costs (per person, 7 days)</h2>
          <div className="bg-[#f5f1ea] rounded-lg p-6">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Accommodation:</strong> ¥2,100-¥4,900 (mid-range hotels)</li>
              <li><strong>Intercity transport:</strong> ¥1,200-¥1,900</li>
              <li><strong>Food:</strong> ¥1,050-¥2,100</li>
              <li><strong>Attractions and tours:</strong> ¥900-¥1,700</li>
              <li><strong>Local transport + incidentals:</strong> ¥500-¥900</li>
            </ul>
            <p className="mt-4 font-semibold text-[#1a3a4a]">Typical total: ¥5,750-¥11,500 (about $790-$1,580)</p>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book Forbidden City tickets as soon as your dates are fixed.</li>
            <li>• For this tight route, stay near major metro hubs in each city.</li>
            <li>• Avoid same-day long wall trip + long train transfer if you are jet-lagged.</li>
            <li>• Keep at least one flexible half-day for weather or delays.</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          { title: '10-Day Extended China Route', description: 'Add Chengdu pandas and Yangshuo karst to the classic circuit.', href: '/plan-your-trip/preplanned-trips/10-day-route' },
          { title: '14-Day Grand China Tour', description: 'The ultimate 2-week China itinerary covering all highlights at a comfortable pace.', href: '/plan-your-trip/preplanned-trips/14-day-route' },
          { title: 'Budget Guide', description: 'How much to budget for your China trip, with cost breakdowns by city.', href: '/plan-your-trip/budget-guide' },
          { title: 'Best Time to Visit', description: 'When to go to China based on weather, crowds, and seasonal events.', href: '/china-basics/best-time-to-visit' },
        ]} />
      </main>
    </div>
  );
}
