import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chengdu Travel Guide | Pandas, Teahouses, and Sichuan Flavor',
  description:
    'Plan your Chengdu trip with neighborhood picks, food highlights, panda timing tips, and practical local advice.',
};

export default function ChengduPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Chengdu (成都) Travel Guide</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is China&apos;s city of giant pandas, bamboo-shaded parks, and long teahouse afternoons.
            The pace is slower than Beijing or Shanghai, but the culture is deep: Sichuan Opera (川剧),
            mahjong tables in every corner, and some of the country&apos;s most unforgettable food.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/chengdu/what-to-do" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-semibold mb-2">What to Do</h2>
              <p className="text-gray-600">
                Pandas at sunrise, temple visits, teahouses, old streets, and Sichuan Opera face-changing.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Explore attractions →</span>
            </div>
          </Link>

          <Link href="/destinations/chengdu/where-to-eat" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🍜</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Eat</h2>
              <p className="text-gray-600">
                Hotpot, mapo tofu, dan dan noodles, and the best neighborhoods for classic Chengdu bites.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Open food guide →</span>
            </div>
          </Link>

          <Link href="/destinations/chengdu/where-to-stay" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">🏨</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Stay</h2>
              <p className="text-gray-600">
                Compare Chunxi Road, Wuhou Temple zone, and the Tibetan Quarter by vibe and convenience.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Pick your area →</span>
            </div>
          </Link>

          <Link href="/destinations/chengdu/local-tips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all h-full">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold mb-2">Local Tips</h2>
              <p className="text-gray-600">
                Panda timing, DiDi strategy, massage etiquette, and practical mistakes first-timers make.
              </p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Read insider tips →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Chengdu</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Visit the Giant Panda Base (成都大熊猫繁育研究基地) at 8:00 AM for active pandas.</li>
            <li>• Build spice gradually: order a mild hotpot broth before full málà (麻辣).</li>
            <li>• Leave room for tea culture in People&apos;s Park (人民公园), not just sightseeing.</li>
            <li>• Check our <Link href="/destinations/chengdu/local-tips" className="underline">Local Tips</Link> before using taxis.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
