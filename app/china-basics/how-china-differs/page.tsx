import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'How China Differs | Trail of China',
  description: 'Understanding censorship, cultural differences, safety standards, and passport rules in China.',
}

const sections = [
  {
    category: 'China Basics',
    icon: '🛂',
    title: 'Visa Guide',
    preview:
      'Complete China visa walkthrough: visa-free transit (144-hour), tourist visa (L visa) requirements, application forms, and supporting documents. Learn which cities offer visa-free transit and how to plan your entry accordingly.',
    tags: ['📝 Application', '🛂 144-Hour Transit', '📄 Documents', '✅ Approval Tips'],
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    category: 'China Basics',
    icon: '🚫',
    title: 'Censorship',
    preview:
      'China\'s internet environment is structured differently, with many familiar services limited or unavailable. Plan your access before departure so maps, communication tools, and cloud documents remain usable during your trip. Understanding these restrictions early prevents daily friction once you arrive.',
    tags: ['🌐 Great Firewall', '🔐 Access Planning', '📲 App Availability', '🧭 Trip Readiness'],
    href: '/china-basics/how-china-differs/censorship',
  },
  {
    category: 'China Basics',
    icon: '🙏',
    title: 'Cultural Differences',
    preview:
      'Everyday etiquette in China can feel different around communication style, dining customs, and public behavior. Learning a few practical norms helps you avoid awkward moments and earn warmer responses. Small adjustments in tone and timing make interactions much smoother.',
    tags: ['🤝 Etiquette', '🍽️ Dining Norms', '🗣️ Communication Style', '🌏 Social Context'],
    href: '/china-basics/how-china-differs/cultural-differences',
  },
  {
    category: 'China Basics',
    icon: '🔒',
    title: 'Safety',
    preview:
      'China is generally convenient for travelers, but practical risk management still matters in crowded transport hubs and tourist zones. Use common anti-scam habits, protect payment accounts, and keep digital copies of key documents. Basic routines keep your trip predictable and low-stress.',
    tags: ['🛡️ Personal Safety', '💳 Payment Security', '📄 Document Backups', '⚠️ Scam Awareness'],
    href: '/china-basics/how-china-differs/security-standards',
  },
  {
    category: 'China Basics',
    icon: '🛂',
    title: 'Passport Rules',
    preview:
      'Passport checks and registration expectations are stricter than many first-time visitors expect. Hotels, transport bookings, and some attractions require your original passport details to match exactly. Keeping your documents organized helps you move through checkpoints without delays.',
    tags: ['🏨 Hotel Registration', '🚉 ID Checks', '🧾 Booking Match', '📌 Compliance'],
    href: '/china-basics/how-china-differs/passport-rules',
  },
]

export default function HowChinaDiffersHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'How China Differs' }]} />
          <ChineseWatermark character="文化" />
          <h1 className="mb-6 text-4xl font-bold text-gray-900">How China Differs</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            China operates differently from Western countries in several key ways. Understanding these differences
            helps you avoid surprises and travel confidently.
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
            <li>• Always carry your passport (photocopies not accepted)</li>
            <li>• Download a VPN before arrival</li>
            <li>• Learn basic Mandarin phrases - it goes a long way</li>
            <li>• Be patient with language barriers</li>
          </ul>
        </div>

        <div className="border-l-4 border-[var(--accent)] bg-[var(--accent-soft)] p-4">
          <h3 className="mb-2 font-semibold text-[var(--accent-strong)]">⚠️ Important</h3>
          <p className="text-[var(--foreground)]">
            Chinese laws are strictly enforced. What might be minor elsewhere can have serious consequences here. When
            in doubt, err on the side of caution.
          </p>
        </div>
      </main>
    </div>
  )
}
