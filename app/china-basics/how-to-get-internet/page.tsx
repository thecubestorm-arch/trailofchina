import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Internet in China | Trail of China',
  description:
    'Complete guide to getting internet in China: eSIM vs physical SIM cards, best providers, setup instructions, and pricing.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '📱',
    title: 'eSIM',
    preview:
      'An eSIM is the fastest way to get online because you can buy, install, and test it before departure. You land with data already active for maps, translation, ride-hailing, and payments. It is ideal for short trips when you want zero airport setup friction.',
    tags: ['⚡ Fast Setup', '🛬 Arrival Ready', '🧭 Navigation', '🧳 Short Trips'],
    href: '/china-basics/how-to-get-internet/esim',
  },
  {
    category: 'China Basics',
    icon: '📡',
    title: 'Physical SIM',
    preview:
      'Physical SIMs usually offer larger data allowances and can be more cost-effective for longer stays. Buy from official carrier counters and bring your passport for registration. This option works well if you need high data volume and local plan flexibility.',
    tags: ['📶 More Data', '💵 Better Value', '🛂 Passport ID', '🏪 Official Counters'],
    href: '/china-basics/how-to-get-internet/physical-sim',
  },
]

export default function InternetHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">How to Get Internet in China</h1>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Staying connected in China is crucial for navigation, translation, and payments. Choose the setup that
            fits your trip length and comfort level.
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
                Read full guide →</span>
            </article>
            </Link>
          ))}
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
