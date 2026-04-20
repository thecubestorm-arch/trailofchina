import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Trail of China',
  description: 'Complete guide to Shanghai: where to eat, stay, and what to do in China\'s most modern city.',
};

export default function ShanghaiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Shanghai</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is where China's past and future collide. Historic European architecture 
            lines the Bund while the Pudong skyline showcases China's ambition. It's a city 
            of world-class dining, vibrant nightlife, and endless exploration.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/shanghai/what-to-do" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-semibold mb-2">What to Do</h2>
              <p className="text-gray-600">The Bund, Yu Garden, French Concession, and more.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">See attractions →</span>
            </div>
          </Link>

          <Link href="/destinations/shanghai/where-to-eat" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🍜</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Eat</h2>
              <p className="text-gray-600">From street food to Michelin stars, dumplings to fine dining.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">Food guide →</span>
            </div>
          </Link>

          <Link href="/destinations/shanghai/where-to-stay" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏨</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Stay</h2>
              <p className="text-gray-600">Best neighborhoods and hotels for every budget.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">Accommodation →</span>
            </div>
          </Link>

          <Link href="/destinations/shanghai/local-tips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold mb-2">Local Tips</h2>
              <p className="text-gray-600">Scams to avoid and insider secrets from locals.</p>
              <span className="text-red-600 font-medium mt-4 inline-block">Insider tips →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Shanghai</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best time to visit: March-May or September-November</li>
            <li>• Metro is the easiest way to get around</li>
            <li>• The Bund is spectacular at night</li>
            <li>• Download a VPN before you arrive</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
