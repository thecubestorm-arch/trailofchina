import type { Metadata } from 'next'
import { RelatedArticleCard } from '@/components/RelatedArticleCard'

export const metadata: Metadata = {
  title: 'China Basics - Everything You Need to Know',
  description:
    'Master the essentials for your first China trip: apps, internet setup, cultural differences, and transport basics in one practical hub.',
}

const cards = [
  {
    title: 'What Apps to Use?',
    description: 'Payment, maps, VPN, and communication apps you need',
    icon: '📱',
    href: '/china-basics/what-apps-to-use',
    category: 'China Basics',
  },
  {
    title: 'How to Get Internet',
    description: 'Set up eSIM or SIM options so you stay connected from arrival',
    icon: '🌐',
    href: '/china-basics/how-to-get-internet',
    category: 'China Basics',
  },
  {
    title: 'How China Differs',
    description: 'Understand key cultural and practical differences before you go',
    icon: '🧭',
    href: '/china-basics/how-china-differs',
    category: 'China Basics',
  },
  {
    title: 'How to Get Around',
    description: 'Trains, metros, taxis, and ride apps explained simply',
    icon: '🚄',
    href: '/china-basics/how-to-get-around',
    category: 'China Basics',
  },
]

export default function ChinaBasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">China Basics</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Everything first-time visitors need to know before departure, from essential apps and internet setup to local transport and daily travel norms.
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
      </main>
    </div>
  )
}
