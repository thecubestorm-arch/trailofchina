import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get Internet in China | Trail of China',
  description: 'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',
};

export default function InternetHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">How to Get Internet in China</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Staying connected in China is crucial for navigation, translation, and payments. 
            Here's everything you need to know about getting reliable internet access.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/china-basics/how-to-get-internet/esim" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-2xl font-semibold mb-2">eSIM Cards</h2>
              <p className="text-gray-600">Activate before you arrive. No physical SIM needed. Best for short trips.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-internet/physical-sim" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💳</div>
              <h2 className="text-2xl font-semibold mb-2">Physical SIM Cards</h2>
              <p className="text-gray-600">Buy at the airport. More data for your money. Best for longer stays.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Comparison</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Feature</th>
                  <th className="text-left py-2">eSIM</th>
                  <th className="text-left py-2">Physical SIM</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">Setup</td>
                  <td>Before arrival</td>
                  <td>At airport</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Price (1 week)</td>
                  <td>$15-25</td>
                  <td>$10-15</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Data allowance</td>
                  <td>3-10 GB</td>
                  <td>20-50 GB</td>
                </tr>
                <tr>
                  <td className="py-2">Best for</td>
                  <td>Short trips</td>
                  <td>Long stays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Download a VPN before arriving in China</li>
            <li>• Screenshot important addresses in Chinese</li>
            <li>• Keep your home SIM for emergency calls</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 mb-8">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Scam Alert</h3>
          <p className="text-[var(--foreground)]">Avoid buying SIM cards from unofficial sellers at airports. Always go to official carrier counters (China Mobile, China Unicom, China Telecom).</p>
        </div>
      </main>
    </div>
  );
}
