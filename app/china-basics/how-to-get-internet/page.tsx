import { Metadata } from 'next'
import { RelatedArticleCard } from '@/components/RelatedArticleCard'

export const metadata: Metadata = {
  title: 'How to Get Internet in China | Trail of China',
  description:
    'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',
}

const cards = [
  {
    title: 'eSIM Cards',
    description: 'Activate before arrival with no physical SIM swap. Best for short trips and quick setup.',
    icon: '📱',
    href: '/china-basics/how-to-get-internet/esim',
    category: 'China Basics',
  },
  {
    title: 'Physical SIM Cards',
    description: 'Buy at official carrier counters for larger data plans and better value on longer stays.',
    icon: '💳',
    href: '/china-basics/how-to-get-internet/physical-sim',
    category: 'China Basics',
  },
]

export default function InternetHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">How to Get Internet in China</h1>

        <section className="mb-8">
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Staying connected in China is crucial for navigation, translation, and payments. Here&apos;s everything you
            need to know about getting reliable internet access.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-serif font-semibold text-[#1f2933]">Related Pages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <RelatedArticleCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Quick Comparison</h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Feature</th>
                  <th className="py-2 text-left">eSIM</th>
                  <th className="py-2 text-left">Physical SIM</th>
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

        <div className="mb-8 border-l-4 border-amber-400 bg-amber-50 p-4">
          <h3 className="mb-2 font-semibold text-amber-800">💡 Pro Tips</h3>
          <ul className="space-y-2 text-amber-900">
            <li>• Download a VPN before arriving in China</li>
            <li>• Screenshot important addresses in Chinese</li>
            <li>• Keep your home SIM for emergency calls</li>
          </ul>
        </div>

        <div className="mb-8 border-l-4 border-[var(--accent)] bg-[var(--accent-soft)] p-4">
          <h3 className="mb-2 font-semibold text-[var(--accent-strong)]">⚠️ Scam Alert</h3>
          <p className="text-[var(--foreground)]">
            Avoid buying SIM cards from unofficial sellers at airports. Always go to official carrier counters (China
            Mobile, China Unicom, China Telecom).
          </p>
        </div>
      </main>
    </div>
  )
}
