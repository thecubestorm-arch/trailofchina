import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'

export const metadata: Metadata = {
  title: 'Plan Your Trip | Trail of China',
  description: 'Plan your China trip with pre-made itineraries and custom travel planning tools.',
}

const sections = [
  {
    category: 'Trip Planning',
    icon: '🗺️',
    title: 'Preplanned Trips',
    preview:
      "Don't want to plan from scratch? Choose a ready-made route for 7, 10, or 14 days covering China's highlights with daily itineraries.",
    tags: ['7️⃣ 7 Days', '🔟 10 Days', '1️⃣4️⃣ 14 Days'],
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    category: 'Trip Planning',
    icon: '✍️',
    title: 'Travel Planner',
    preview:
      "Build your own itinerary. Pick your cities, set your pace, and we'll help you create the perfect China trip.",
    tags: ['🏙️ Cities', '⏱️ Duration', '🎯 Interests'],
    href: '/plan-your-trip/travel-planner',
  },
]

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative">
          <ChineseWatermark character="计划" />
          <h1 className="mb-6 text-4xl font-bold text-gray-900">Plan Your Trip</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Ready to visit China? Choose a preplanned route or customize your own itinerary to build a practical trip.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8]' : ''}`}
            >
              <article className="py-8 px-6 -mx-6 md:py-10">
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
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#af5d32]">
                  Explore →
                </span>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
