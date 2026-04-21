import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Destinations | Trail of China',
  description: 'Explore the best destinations in China. Detailed guides for Shanghai, Beijing, and more cities.',
}

const sections = [
  {
    category: 'Destination',
    icon: '🏙️',
    title: 'Shanghai',
    preview:
      "China's futuristic financial hub where colonial-era architecture meets glittering skyscrapers. Walk the Bund, explore hidden alleyways, and eat your way through the city's incredible food scene.",
    tags: ['📍 What to do', '🍜 Where to eat', '🏨 Where to stay', '💡 Local tips'],
    href: '/destinations/shanghai',
    imageSrc: '/images/shanghai/bund-skyline.jpg',
    imageAlt: 'Shanghai skyline at night',
  },
  {
    category: 'Destination',
    icon: '🏛️',
    title: 'Beijing',
    preview:
      'The ancient capital with 3,000 years of history. Home to the Great Wall, Forbidden City, and some of the best street food on the planet.',
    tags: ['📍 What to do', '🍜 Where to eat', '🏨 Where to stay', '💡 Local tips'],
    href: '/destinations/beijing',
    imageSrc: '/images/beijing/great-wall.jpg',
    imageAlt: 'The Great Wall near Beijing',
  },
  {
    category: 'Destination',
    icon: '⚔️',
    title: "Xi'an",
    preview:
      'The gateway to the Silk Road and the legendary Terracotta Warriors. Walk the ancient city wall, explore Muslim Quarter street food, and discover a city where history lives.',
    tags: ['📍 What to do', '🍜 Where to eat', '🏨 Where to stay', '💡 Local tips'],
    href: '/destinations/xian',
    imageSrc: '/images/xian/terracotta-warriors.jpg',
    imageAlt: "Terracotta Warriors in Xi'an",
  },
  {
    category: 'Destination',
    icon: '🐼',
    title: 'Chengdu',
    preview:
      'Home of the giant pandas, fiery Sichuan hotpot, and the most relaxed vibe of any Chinese megacity. Spend days in teahouses, nights in spice markets.',
    tags: ['📍 What to do', '🍜 Where to eat', '🏨 Where to stay', '💡 Local tips'],
    href: '/destinations/chengdu',
    imageSrc: '/images/chengdu/pandas.jpg',
    imageAlt: 'Giant pandas in Chengdu',
  },
  {
    category: 'Destination',
    icon: '🌶️',
    title: 'Chongqing',
    preview:
      'The mountain city built on cliffs above the Yangtze River. Famous for the hottest hotpot in China, vertical streets, and a cyberpunk skyline.',
    tags: ['📍 What to do', '🍜 Where to eat', '🏨 Where to stay', '💡 Local tips'],
    href: '/destinations/chongqing',
    imageSrc: '/images/chongqing/skyline-night.jpg',
    imageAlt: 'Chongqing skyline at night',
  },
]

export default function DestinationsHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Destinations</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            China is vast and diverse, from ultra-modern megacities to ancient historical sites. Each destination
            offers a unique glimpse into different facets of Chinese culture, history, and daily life.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <article
              key={section.href}
              className={`py-8 md:py-10 ${index < sections.length - 1 ? 'border-b border-[#ebe4d8]' : ''}`}
            >
              <div className="grid gap-5 md:grid-cols-[280px_1fr] md:items-start">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    width={560}
                    height={360}
                    className="h-52 w-full object-cover md:h-full"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
                  <h2 className="mt-3 text-2xl font-bold text-[#1f2933] md:text-3xl">
                    {section.icon} {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#4a5568] md:text-lg">{section.preview}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[#1f2933]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={section.href} className="mt-4 inline-flex items-center gap-1 font-semibold text-[#af5d32] hover:underline">
                    Explore →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="border-l-4 border-amber-400 bg-amber-50 p-4">
          <h3 className="mb-2 font-semibold text-amber-800">💡 More Coming Soon</h3>
          <p className="text-amber-900">Guilin (Karst mountains), Hong Kong, Shenzhen, and more destinations.</p>
        </div>
      </main>
    </div>
  )
}
