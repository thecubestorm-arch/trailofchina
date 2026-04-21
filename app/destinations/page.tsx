import { Metadata } from 'next'
import { RelatedArticleCard } from '@/components/RelatedArticleCard'

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
    category: 'Destination',
  },
  {
    title: 'Beijing',
    description: 'Ancient capital with the Great Wall and Forbidden City.',
    icon: '🏛️',
    href: '/destinations/beijing',
    category: 'Destination',
  },
  {
    title: "Xi'an",
    description: 'Home of the Terracotta Warriors and ancient city wall.',
    icon: '⚔️',
    href: '/destinations/xian',
    category: 'Destination',
  },
  {
    title: 'Chengdu',
    description: 'Giant pandas, teahouses, and the spiciest food.',
    icon: '🐼',
    href: '/destinations/chengdu',
    category: 'Destination',
  },
  {
    title: 'Chongqing',
    description: 'Mountain city famous for hotpot and river views.',
    icon: '🌶️',
    href: '/destinations/chongqing',
    category: 'Destination',
  },
]

export default function DestinationsHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Destinations</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            China is vast and diverse, from ultra-modern megacities to ancient historical sites. Each destination offers a unique glimpse into different facets of Chinese culture, history, and daily life.
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

        <div className="border-l-4 border-amber-400 bg-amber-50 p-4">
          <h3 className="mb-2 font-semibold text-amber-800">💡 More Coming Soon</h3>
          <p className="text-amber-900">
            Guilin (Karst mountains), Hong Kong, Shenzhen, and more destinations.
          </p>
        </div>
      </main>
    </div>
  )
}
