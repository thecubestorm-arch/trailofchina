import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beijing Travel Guide | Trail of China',
  description: 'Complete guide to Beijing: Forbidden City, Great Wall, hutongs, and more in China\'s historic capital.',
};

export default function BeijingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Beijing</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is China's political and cultural heart. Ancient palaces, imperial gardens, 
            and the world's greatest wall coexist with modern architecture. It's a city where 
            3,000 years of history feels alive in every hutong alley.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/destinations/beijing/what-to-do" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏛️</div>
              <h2 className="text-2xl font-semibold mb-2">What to Do</h2>
              <p className="text-gray-600">Forbidden City, Great Wall, Temple of Heaven, and hutongs.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">See attractions →</span>
            </div>
          </Link>

          <Link href="/destinations/beijing/where-to-eat" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🦆</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Eat</h2>
              <p className="text-gray-600">Peking duck, hutong restaurants, night markets.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Food guide →</span>
            </div>
          </Link>

          <Link href="/destinations/beijing/where-to-stay" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏨</div>
              <h2 className="text-2xl font-semibold mb-2">Where to Stay</h2>
              <p className="text-gray-600">Hutong hotels, Wangfujing, Sanlitun areas.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Hotels →</span>
            </div>
          </Link>

          <Link href="/destinations/beijing/local-tips" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold mb-2">Local Tips</h2>
              <p className="text-gray-600">Scams, etiquette, and insider advice.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Insider tips →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Beijing</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best time: Spring (April-May) or Fall (September-October)</li>
            <li>• Subway is best way to get around</li>
            <li>• Book Forbidden City tickets 7 days in advance</li>
            <li>• Great Wall: Mutianyu less crowded than Badaling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
