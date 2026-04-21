import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chongqing Travel Guide | Trail of China',
  description:
    'Complete guide to Chongqing: top attractions, spicy food, best neighborhoods, and practical local tips for China\'s 3D mountain megacity.',
};

export default function ChongqingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Chongqing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing is China&apos;s dramatic 3D mountain city: rivers slicing between steep
            districts, towers rising from misty hills, and a skyline that looks futuristic at
            every angle. It is also the hotpot capital of China, famous for fiery broths,
            neon-lit nights, and dense urban energy wrapped in persistent fog.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Chongqing Trip</h2>
          <p className="text-gray-700 leading-relaxed">
            Use this guide to break your trip into four practical parts: attractions,
            food, accommodation, and local know-how. The city is stunning but logistically
            different from flatter destinations, so planning by neighborhood and elevation
            will save you hours.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/chongqing/what-to-do" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-semibold mb-2">What to Do</h2>
              <p className="text-gray-600">
                Hongyadong, cable cars, old town lanes, museum history, and skyline viewpoints.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">
                See attractions →
              </span>
            </div>
          </Link>

          <Link href="/destinations/chongqing/where-to-eat" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🍜</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Eat</h2>
              <p className="text-gray-600">
                Chongqing hotpot, xiaomian breakfasts, grilled fish, and Bayi Road snacks.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Food guide →</span>
            </div>
          </Link>

          <Link href="/destinations/chongqing/where-to-stay" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏨</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Stay</h2>
              <p className="text-gray-600">
                Jiefangbei convenience, Nanbin Road views, and Hongyadong atmosphere.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">
                Accommodation →
              </span>
            </div>
          </Link>

          <Link href="/destinations/chongqing/local-tips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold mb-2">Local Tips</h2>
              <p className="text-gray-600">
                3D navigation strategies, transport tricks, and spice survival advice.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Insider tips →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Chongqing</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• The city is vertical: add extra time for stairs, elevators, and slopes</li>
            <li>• Night is prime time for Hongyadong and skyline photography</li>
            <li>• Fog is common year-round, especially from late autumn to spring</li>
            <li>• Even “mild” hotpot can be intense if you are not used to málà heat</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
