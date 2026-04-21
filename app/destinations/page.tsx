import { Metadata } from 'next'
import { FeatureCard } from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Destinations | Trail of China',
  description: 'Explore the best destinations in China. Detailed guides for Shanghai, Beijing, and more cities.',
}

const cards = [
  {
    title: 'Shanghai',
    description: "China's futuristic financial hub with colonial charm.",
    icon: '🏙️',
    href: '/destinations/shanghai',
  },
  {
    title: 'Beijing',
    description: 'Ancient capital with the Great Wall and Forbidden City.',
    icon: '🏛️',
    href: '/destinations/beijing',
  },
]

export default function DestinationsHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Destinations</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China is vast and diverse, from ultra-modern megacities to ancient historical sites.
            Each destination offers a unique glimpse into different facets of Chinese culture,
            history, and daily life.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <FeatureCard key={card.href} {...card} />
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Coming Soon</h3>
          <p className="text-amber-900">
            More destinations guides are being added: Xi'an (Terracotta Warriors),
            Chengdu (Pandas), Guilin (Karst mountains), and Hong Kong.
          </p>
        </div>
      </main>
    </div>
  )
}
