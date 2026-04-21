import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How China Differs | Trail of China',
  description: 'Understanding censorship, cultural differences, safety standards, and passport rules in China.',
};

export default function HowChinaDiffersHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">How China Differs</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China operates differently from Western countries in several key ways. 
            Understanding these differences will help you navigate smoothly and avoid surprises.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/china-basics/how-china-differs/censorship" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h2 className="text-2xl font-semibold mb-2">Censorship</h2>
              <p className="text-gray-600">The Great Firewall, blocked websites, and what you need to know.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-china-differs/cultural-differences" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl font-semibold mb-2">Cultural Differences</h2>
              <p className="text-gray-600">Etiquette, customs, and social norms to respect.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-china-differs/security-standards" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h2 className="text-2xl font-semibold mb-2">Security Standards</h2>
              <p className="text-gray-600">Safety tips, scams to avoid, and staying secure.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-china-differs/passport-rules" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📋</div>
              <h2 className="text-2xl font-semibold mb-2">Passport Rules</h2>
              <p className="text-gray-600">Hotel registration, police checks, and documentation.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Always carry your passport (photocopies not accepted)</li>
            <li>• Download a VPN before arrival</li>
            <li>• Learn basic Mandarin phrases - it goes a long way</li>
            <li>• Be patient with language barriers</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Important</h3>
          <p className="text-[var(--foreground)]">
            Chinese laws are strictly enforced. What might be minor elsewhere can have serious consequences here. When in doubt, err on the side of caution.
          </p>
        </div>
      </main>
    </div>
  );
}
