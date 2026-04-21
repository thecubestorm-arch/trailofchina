import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Stay in Chengdu | Trail of China',
  description:
    'Best Chengdu neighborhoods for first-timers, culture seekers, and budget travelers with price and metro details.',
};

export default function ChengduWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Chengdu</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is easy to navigate, but your neighborhood changes the entire vibe of your trip.
            Stay central for convenience, near temples for quiet evenings, or in the Tibetan Quarter for
            local character and lower prices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Areas for Visitors</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🏙️ Jinjiang / Chunxi Road (Best for First-Timers)</h3>
              <p className="text-gray-700 mb-3">
                Chengdu&apos;s most practical base: malls, food streets, and easy transport in every
                direction. Perfect if you want to see major sights without complicated transfers.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for: 2-5 day city trips</p>
              <p className="text-sm text-gray-600">💰 Typical stay: ¥350-1200/night</p>
              <p className="text-sm text-gray-600">📍 Metro: Chunxi Road, Taisheng South Road, Tianfu Square nearby</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🏛️ Wuhou District (Temple Area, Quieter)</h3>
              <p className="text-gray-700 mb-3">
                Around Wuhou Shrine and Jinli, this area feels older and calmer than central shopping
                zones. Good for evening walks and travelers who prefer atmosphere over nightlife.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for: history-focused itineraries</p>
              <p className="text-sm text-gray-600">💰 Typical stay: ¥280-900/night</p>
              <p className="text-sm text-gray-600">📍 Metro: Gaoshengqiao, Huaxiba, Wuhouci/Jinli area access</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🧿 Tibetan Quarter (Unique Culture, Budget-Friendly)</h3>
              <p className="text-gray-700 mb-3">
                A very different side of Chengdu with Tibetan eateries, prayer flags, and small guesthouses.
                Great for culture and value, though less polished than mainstream hotel districts.
              </p>
              <p className="text-sm text-gray-600">🕐 Best for: repeat visitors and budget travelers</p>
              <p className="text-sm text-gray-600">💰 Typical stay: ¥120-450/night</p>
              <p className="text-sm text-gray-600">📍 Metro: Near Wenshu Monastery / north-central transfer routes</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <div className="bg-emerald-50 rounded-lg p-4">
            <ul className="text-gray-700 space-y-2">
              <li>• Small courtyard boutique hotels in old lanes often include tea tastings.</li>
              <li>• Family-run inns near Wenshu Monastery can be quieter than big chains downtown.</li>
              <li>• Some Tibetan Quarter stays include rooftop laundry and communal kitchens.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Prioritize a hotel within 8-10 minutes of a metro station.</li>
              <li>• Ask if rooms are non-smoking; older mid-range hotels can still permit smoking.</li>
              <li>• During holidays, central Chengdu prices jump fast, so book early.</li>
              <li>• If you plan multiple panda visits, choose north-side transport convenience.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-red-800 mb-2">⚠️ Tourist Traps</h3>
            <ul className="text-red-900 space-y-2">
              <li>• Hotels listed as “near pandas” may still require 45+ minutes transit.</li>
              <li>• Ultra-cheap rooms around nightlife streets can be very noisy after midnight.</li>
              <li>• Some listings advertise metro proximity but mean bus-distance, not walking-distance.</li>
            </ul>
          </div>
        </section>

        <Link href="/destinations/chengdu" className="text-amber-700 hover:text-amber-800 hover:underline">
          ← Back to Chengdu Guide
        </Link>
      </main>
    </div>
  );
}
