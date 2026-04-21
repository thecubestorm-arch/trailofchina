import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Xi'an Travel Guide | Trail of China",
  description:
    "Plan a complete Xi'an trip with this city guide covering Terracotta Warriors, food streets, best neighborhoods, and practical local tips for first-time visitors.",
};

export default function XianPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Xi&apos;an</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an was the capital for 13 dynasties and still feels like living history. You can spend the morning with the
            Terracotta Warriors (兵马俑), cycle a complete Ming city wall at sunset, then eat your way through the Muslim Quarter.
            It is one of China&apos;s easiest cities for first-time independent travel.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/xian/what-to-do" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🏺</div>
              <h2 className="text-2xl font-semibold mb-2">What to Do</h2>
              <p className="text-gray-600">Terracotta Warriors, City Wall cycling, pagodas, museums, and night markets.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">See attractions →</span>
            </div>
          </Link>

          <Link href="/destinations/xian/where-to-eat" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🥟</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Eat</h2>
              <p className="text-gray-600">Yangroupaomo, roujiamo, biangbiang noodles, and reliable local restaurants.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Food guide →</span>
            </div>
          </Link>

          <Link href="/destinations/xian/where-to-stay" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🏨</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Stay</h2>
              <p className="text-gray-600">Bell Tower, Muslim Quarter, Yanta, and station-area base options by budget.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Accommodation →</span>
            </div>
          </Link>

          <Link href="/destinations/xian/local-tips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold mb-2">Local Tips</h2>
              <p className="text-gray-600">Bus 306 strategy, timing advice, and common scam warnings before you go.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Insider tips →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Xi&apos;an</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Reach Terracotta Warriors at opening time to avoid major group-tour crowds.</li>
            <li>• The City Wall is a full 14 km loop, so carry water if biking in summer.</li>
            <li>• Muslim Quarter is busiest after dark; go hungry and bring cash for small stalls.</li>
            <li>• Pair this page with the detailed <Link href="/destinations/xian/what-to-do" className="underline">What to Do guide</Link> to plan your route efficiently.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
