import Link from 'next/link';
import { Metadata } from 'next';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Xi'an Local Tips | Transport and Smart Visiting Advice",
  description:
    "Local Xi'an travel tips covering Bus 306 for Terracotta Warriors, early starts, haggling etiquette, and city wall bike rental advice.",
};

export default function XianLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Xi&apos;an Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an is straightforward once you know timing and common sales tactics. These tips help
            you avoid crowd bottlenecks and make the most of your visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Terracotta Warriors Logistics</h2>
          <div className="border rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">Bus 306 (Tourist Line) from Xi&apos;an Railway Station</h3>
            <p className="text-gray-700">
              Public transport is usually the best value. The 306 line is the standard budget route
              used by independent travelers heading to the Terracotta Warriors site.
            </p>
            <p className="text-sm text-[#64748b] mt-3">🕐 Leave early: target first departures around opening hours</p>
            <p className="text-sm text-[#64748b]">💰 Cost: Much cheaper than private car hires</p>
            <p className="text-sm text-[#64748b]">📍 Start point: Xi&apos;an Railway Station transport area</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Go EARLY</h3>
            <p className="text-gray-700">
              Arriving early avoids the biggest tour-group wave, improves museum-floor visibility,
              and makes photos easier in Pit 1.
            </p>
            <p className="text-sm text-[#64748b] mt-3">🕐 Target arrival: right at opening if possible</p>
            <p className="text-sm text-[#64748b]">💰 Benefit: Better value from your ticket with fewer delays</p>
            <p className="text-sm text-[#64748b]">📍 Priority route: Enter, then head straight to main viewing areas</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Street-Smart City Advice</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">City Wall Bike Rental</h3>
              <p className="text-gray-700">
                Riding the wall is one of Xi&apos;an&apos;s best experiences. Check bike condition first and
                avoid midday heat in summer.
              </p>
              <p className="text-sm text-[#64748b] mt-3">🕐 Best time: Morning or late afternoon</p>
              <p className="text-sm text-[#64748b]">💰 Cost: Rental plus small deposit depending on operator</p>
              <p className="text-sm text-[#64748b]">📍 Entry gates: South Gate is the easiest starting point</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Haggling Basics</h3>
              <p className="text-gray-700">
                Bargaining is expected in souvenir markets, not in restaurants or chain stores.
                Stay polite, set your max price first, and walk away if needed.
              </p>
              <p className="text-sm text-[#64748b] mt-3">🕐 Best moment: Late day when sellers are more flexible</p>
              <p className="text-sm text-[#64748b]">💰 Rule of thumb: Start below first quote and meet in the middle</p>
              <p className="text-sm text-[#64748b]">📍 Where: Tourist souvenir lanes and market stalls</p>
            </div>
          </div>
        </section>

        <div className="bg-emerald-50 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-emerald-900 mb-2">Hidden Gems</h3>
          <ul className="text-emerald-900 space-y-2">
            <li>• Quieter city wall segments if you enter from less-trafficked gates</li>
            <li>• Early morning parks with local dance and tai chi groups</li>
            <li>• Smaller museum rooms often skipped by large tour groups</li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Keep your hotel name in Chinese on your phone for taxi rides</li>
            <li>• Carry tissues and water for long attraction queues</li>
            <li>• Pair Terracotta Warriors with fewer downtown sights that same day</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-10">
          <h3 className="font-semibold text-gray-800 mb-2">Things to Watch Out For</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Fake jade sold near major attractions as "museum quality"</li>
            <li>• Tea ceremony invitations that end with inflated bills</li>
            <li>• Unofficial tours with forced shopping stops and inflated pricing</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'What to Do in Xi&apos;an', description: 'Terracotta Warriors, City Wall, and Muslim Quarter.', href: '/destinations/xian/what-to-do'},
          {title: 'VPN & Internet', description: 'Stay connected with a VPN setup guide.', href: '/china-basics/what-apps-to-use/vpn'},
          {title: 'eSIM Setup', description: 'Get data instantly with a travel eSIM.', href: '/china-basics/how-to-get-internet/esim'},
        ]} />
      </main>
    </div>
  );
}
