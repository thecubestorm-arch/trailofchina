import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';

export const metadata: Metadata = {
  title: 'What to Do in Chengdu | Pandas, Teahouses, and Culture',
  description:
    'Best things to do in Chengdu, from the Giant Panda Base and Wenshu Temple to Sichuan Opera and Kuanzhai Alley.',
};

export default function ChengduWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-gray-900">What to Do in Chengdu</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu combines iconic landmarks with everyday local culture. Plan one early panda morning,
            one slow tea afternoon, and one evening for old streets and Sichuan Opera (变脸). If you are
            organizing your full city plan, pair this page with our{' '}
            <Link href="/destinations/chengdu/where-to-stay" className="underline text-[var(--accent)]">
              Where to Stay guide
            </Link>{' '}
            to reduce commute time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>

          <div className="space-y-4">
            <Link href="/destinations/chengdu/what-to-do/panda-base" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">1. Chengdu Research Base of Giant Panda (成都大熊猫繁育研究基地)</h3>
              <p className="text-gray-700 mb-2">
                Chengdu&apos;s signature attraction. Arrive right at opening to watch pandas eating bamboo and
                moving around before the heat sets in.
              </p>
              <p className="text-sm text-gray-600">🕐 Go at 8:00 AM | 💰 Ticketed entry | 📍 North of central Chengdu</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/what-to-do/jinli-ancient-street" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">2. Jinli Ancient Street (锦里古街)</h3>
              <p className="text-gray-700 mb-2">
                Lantern-lit street near Wuhou Shrine with snacks, craft stalls, and classic Chengdu photo spots.
                Busy but atmospheric after sunset.
              </p>
              <p className="text-sm text-gray-600">🕐 Late afternoon to evening | 💰 Free entry | 📍 Wuhou District</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/what-to-do/wenshu-monastery" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">3. Wenshu Monastery (文殊院)</h3>
              <p className="text-gray-700 mb-2">
                A calm Buddhist temple complex with incense courtyards, shaded walkways, and vegetarian options
                nearby. Great contrast to downtown crowds.
              </p>
              <p className="text-sm text-gray-600">🕐 Morning is quietest | 💰 Free or donation | 📍 Qingyang area</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/what-to-do/peoples-park-teahouse" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">4. People&apos;s Park Teahouse (人民公园)</h3>
              <p className="text-gray-700 mb-2">
                Sit in a bamboo chair, drink jasmine tea, and watch mahjong life unfold around you.
                This is the city&apos;s relaxed rhythm in one place.
              </p>
              <p className="text-sm text-gray-600">🕐 Midday to late afternoon | 💰 Tea from low to mid range | 📍 Central Chengdu</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/what-to-do/sichuan-opera" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">5. Sichuan Opera Face-Changing (川剧变脸)</h3>
              <p className="text-gray-700 mb-2">
                Fast costume and mask transformations, percussion, and traditional stagecraft.
                Book a performance night for one of Chengdu&apos;s strongest cultural experiences.
              </p>
              <p className="text-sm text-gray-600">🕐 Evening shows | 💰 Ticketed by seat level | 📍 Shufeng Yayun and other theaters</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/what-to-do/kuanzhai-alley" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">6. Kuanzhai Alley (宽窄巷子)</h3>
              <p className="text-gray-700 mb-2">
                Restored Qing-era lanes with cafes, courtyards, and souvenir shops. Popular and polished,
                best visited on weekdays or early.
              </p>
              <p className="text-sm text-gray-600">🕐 Early morning or after dinner | 💰 Free entry | 📍 Qingyang District</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Huanhuaxi Park (浣花溪公园):</strong> Quiet green walks away from tourist clusters.</li>
            <li><strong>Wenshu side-lane teahouses:</strong> Less polished than People&apos;s Park, often more local.</li>
            <li><strong>Sichuan Museum (四川博物院):</strong> Useful context before temple and old-town visits.</li>
            <li><strong>Anshun Bridge at night (安顺廊桥):</strong> River reflections and easy evening strolls.</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Keep panda morning separate from late-night opera plans.</li>
            <li>• Carry cashless payments and ID for quick ticket checks.</li>
            <li>• Add food stops from our{' '}<Link href="/destinations/chengdu/where-to-eat" className="underline">Where to Eat guide</Link> near each attraction cluster.</li>
            <li>• Weekday itineraries feel significantly calmer in Jinli and Kuanzhai.</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-12">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Late panda arrival: after 10:30 AM most pandas are inactive or sleeping.</li>
            <li>• Aggressive souvenir pricing in old streets: compare before buying.</li>
            <li>• Unofficial "fast-entry" offers outside attractions.</li>
          </ul>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Chengdu Trip"
            description="See our curated 7-day itinerary with everything timed and mapped out."
            buttonText="See Chengdu itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
      </main>
    </div>
  );
}
