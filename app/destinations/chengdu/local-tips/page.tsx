import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Chengdu Local Tips | Trail of China',
  description:
    'Practical Chengdu insider tips: panda timing, transport, weather planning, opera bookings, and what to skip.',
};

export default function ChengduLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Chengdu Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu rewards travelers who slow down. Use these local strategies to avoid crowds,
            move around efficiently, and spend your time on the experiences that matter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Essential Local Advice</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🐼 Giant Panda Base Timing</h3>
              <p className="text-gray-700 mb-3">
                Arrive at opening time for active pandas. Most pandas nap once the day warms up,
                and crowd density rises sharply by mid-morning.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Go at: 8:00 AM (crowds build by around 10:00 AM)</p>
              <p className="text-sm text-[#64748b]">💰 Budget: extra for shuttle carts inside the base</p>
              <p className="text-sm text-[#64748b]">📍 Access: combine metro + bus/taxi depending on your hotel</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🫖 Chengdu Pace Is Slow</h3>
              <p className="text-gray-700 mb-3">
                Don&apos;t over-schedule. Tea houses, park walks, and long meals are part of the city&apos;s culture.
                Plan fewer sights per day than you would in Shanghai or Beijing.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Rhythm: leave buffer time every afternoon</p>
              <p className="text-sm text-[#64748b]">💰 Budget: tea house sessions can be low-cost and long</p>
              <p className="text-sm text-[#64748b]">📍 Best spots: People&apos;s Park, riverside neighborhoods</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">💆 Massage Culture and Blind Masseurs</h3>
              <p className="text-gray-700 mb-3">
                Massage is mainstream in Chengdu, and many respected clinics employ blind masseurs
                with strong reputations for therapeutic treatment.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Typical session: 60-90 minutes</p>
              <p className="text-sm text-[#64748b]">💰 Typical cost: ¥80-260 depending on venue</p>
              <p className="text-sm text-[#64748b]">📍 Tip: ask hotel staff for trusted local clinics</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">🚕 DiDi vs Taxi + Weather + Night Shows</h3>
              <p className="text-gray-700 mb-3">
                DiDi is usually simpler than street taxis for non-Chinese speakers. Rain can slow traffic,
                so build buffer time and pre-book Sichuan Opera seats in high season.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Book opera: at least 1 day ahead, 2-3 days on weekends</p>
              <p className="text-sm text-[#64748b]">💰 Ride cost: DiDi often comparable to metered taxis</p>
              <p className="text-sm text-[#64748b]">📍 Compare: Jinli is lively-touristy, Kuanzhai is polished-historic</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <div className="bg-emerald-50 rounded-lg p-4">
            <ul className="text-gray-700 space-y-2">
              <li>• Early mornings in local parks show dance groups, calligraphy water writing, and tai chi.</li>
              <li>• Smaller opera houses can feel more intimate than the best-known venues.</li>
              <li>• Rainy-day tea houses are often the most atmospheric part of a Chengdu trip.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Start panda day very early, then keep the rest of the day light.</li>
              <li>• Carry a compact umbrella from spring through summer.</li>
              <li>• Save Jinli for atmosphere and snacks, Kuanzhai for architecture and cafés.</li>
              <li>• If taxis refuse short rides in rain, switch to DiDi immediately.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Things to Watch Out For</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Paying premium rates for late-morning panda entry when most pandas are inactive.</li>
              <li>• Unofficial drivers near attractions quoting fixed prices well above DiDi.</li>
              <li>• Last-minute opera tickets from street sellers with unclear seat locations.</li>
            </ul>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Chengdu', description: 'Pandas, teahouses, and opera nights.', href: '/destinations/chengdu/what-to-do'},
          {title: 'VPN & Internet', description: 'Stay connected with a VPN setup guide.', href: '/china-basics/what-apps-to-use/vpn'},
          {title: 'eSIM Setup', description: 'Get data instantly with a travel eSIM.', href: '/china-basics/how-to-get-internet/esim'},
        ]} />
      </main>
    </div>
  );
}
