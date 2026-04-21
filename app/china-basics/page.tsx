import type { Metadata } from 'next'
import { FeatureCard } from '@/components/FeatureCard'

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
  },
  {
    title: 'How to Get Internet',
    description: 'Set up eSIM or SIM options so you stay connected from arrival',
    icon: '🌐',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'How China Differs',
    description: 'Understand key cultural and practical differences before you go',
    icon: '🧭',
    href: '/china-basics/how-china-differs',
  },
  {
    title: 'How to Get Around',
    description: 'Trains, metros, taxis, and ride apps explained simply',
    icon: '🚄',
    href: '/china-basics/how-to-get-around',
  },
]

export default function ChinaBasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">China Basics</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Everything first-time visitors need to know before departure, from essential apps and internet setup to local transport and daily travel norms.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <FeatureCard key={card.href} {...card} />
          ))}
        </div>
      </main>
    </div>
  )
}
