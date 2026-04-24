import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ChinaMap from "@/components/ChinaMap"

export const metadata: Metadata = {
  title: "Destinations | Trail of China",
  description:
    "Explore the best destinations in China. Detailed guides for Shanghai, Beijing, Xi'an, Chengdu, Chongqing and more cities.",
  alternates: {
    canonical: '/destinations',
  },
}

const sections = [
  {
    category: "Destination",
    icon: "🏛️",
    title: "Beijing",
    preview:
      "The ancient capital with 3,000 years of history. Home to the Great Wall, Forbidden City, and some of the best street food on the planet.",
    tags: ["📍 What to do", "🍜 Where to eat", "🏨 Where to stay", "💡 Local tips"],
    href: "/destinations/beijing",
    imageSrc: "/images/beijing/great-wall.jpg",
    imageAlt: "The Great Wall near Beijing",
  },
  {
    category: "Destination",
    icon: "🏙️",
    title: "Shanghai",
    preview:
      "China's futuristic financial hub where colonial-era architecture meets glittering skyscrapers. Walk the Bund, explore hidden alleyways, and eat your way through the city's incredible food scene.",
    tags: ["📍 What to do", "🍜 Where to eat", "🏨 Where to stay", "💡 Local tips"],
    href: "/destinations/shanghai",
    imageSrc: "/images/shanghai/bund-skyline.jpg",
    imageAlt: "Shanghai skyline at night",
  },
  {
    category: "Destination",
    icon: "⚔️",
    title: "Xi'an",
    preview:
      "The gateway to the Silk Road and the legendary Terracotta Warriors. Walk the ancient city wall, explore Muslim Quarter street food, and discover a city where history lives.",
    tags: ["📍 What to do", "🍜 Where to eat", "🏨 Where to stay", "💡 Local tips"],
    href: "/destinations/xian",
    imageSrc: "/images/xian/terracotta-warriors.jpg",
    imageAlt: "Terracotta Warriors in Xi'an",
  },
  {
    category: "Destination",
    icon: "🐼",
    title: "Chengdu",
    preview:
      "Home of the giant pandas, fiery Sichuan hotpot, and the most relaxed vibe of any Chinese megacity. Spend days in teahouses, nights in spice markets.",
    tags: ["📍 What to do", "🍜 Where to eat", "🏨 Where to stay", "💡 Local tips"],
    href: "/destinations/chengdu",
    imageSrc: "/images/chengdu/pandas.jpg",
    imageAlt: "Giant pandas in Chengdu",
  },
  {
    category: "Destination",
    icon: "🌶️",
    title: "Chongqing",
    preview:
      "The mountain city built on cliffs above the Yangtze River. Famous for the hottest hotpot in China, vertical streets, and a cyberpunk skyline.",
    tags: ["📍 What to do", "🍜 Where to eat", "🏨 Where to stay", "💡 Local tips"],
    href: "/destinations/chongqing",
    imageSrc: "/images/chongqing/skyline-night.jpg",
    imageAlt: "Chongqing skyline at night",
  },
]

export default function DestinationsHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-[#1a3a4a] md:text-6xl">
            Destinations
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#64748b] md:mx-0">
            China is vast and diverse, from ultra-modern megacities to ancient
            historical sites. Each destination offers a unique glimpse into
            different facets of Chinese culture, history, and daily life.
          </p>
        </div>

        {/* Interactive Map */}
        <section className="mt-10 md:mt-14">
          <ChinaMap />
        </section>

        {/* Browse by City */}
        <section className="mt-16 md:mt-20">
          <h2 className="mb-8 text-2xl font-bold text-[#1a3a4a] md:text-3xl">
            Browse by City
          </h2>

          <div className="space-y-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="block overflow-hidden rounded-xl border border-[#ebe4d8] bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <article className="grid md:grid-cols-[280px_1fr]">
                  <div className="overflow-hidden">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      width={560}
                      height={360}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">
                      {section.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#1a3a4a] md:text-2xl">
                      {section.icon} {section.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a5568] md:text-base">
                      {section.preview}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {section.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f1ea] px-3 py-1 text-xs text-[#1a3a4a] md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] md:text-base">
                      Explore →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <div className="mt-12 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
          <h3 className="mb-1 font-semibold text-amber-800">💡 More Coming Soon</h3>
          <p className="text-amber-900">
            Guilin (Karst mountains), Hong Kong, Shenzhen, and more destinations.
          </p>
        </div>
      </main>
    </div>
  )
}
