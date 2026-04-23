import type { Metadata } from 'next'
import Link from 'next/link'
import ChineseWatermark from '@/components/ChineseWatermark'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Before You Go to China | Visa, Safety & Packing | Trail of China',
  description:
    'Everything to check before your China trip: visa requirements, safety tips, and what to pack. Get ready before you fly.',
}

type Section = {
  category: string
  icon: string
  title: string
  preview: string
  tags: string[]
  href: string
}

const sections: Section[] = [
  {
    category: 'Before You Go',
    icon: '🛂',
    title: 'Visa Guide',
    preview:
      'Everything you need to know about China visas, from tourist visas to visa-free entry. Check if you need a visa, which type to apply for, and how far in advance to start.',
    tags: ['🛂 Visa Types', '⏱️ Processing Time', '📋 Requirements', '🆓 Visa-Free Entry'],
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    category: 'Before You Go',
    icon: '🛡️',
    title: 'Is China Safe?',
    preview:
      "China is one of the safest countries for tourists. Low violent crime, safe streets at night, and rare harassment. Here's what to know about common concerns, food safety, and emergency numbers.",
    tags: ['🛡️ Safety', '👩 Women Travelers', '🍜 Food Safety', '📞 Emergency Numbers'],
    href: '/china-basics/before-you-go/is-china-safe',
  },
  {
    category: 'Before You Go',
    icon: '🧳',
    title: 'Packing List',
    preview:
      'What to pack for China — from adapters to toilet paper. A practical checklist of essentials, nice-to-haves, and things to leave at home.',
    tags: ['🧳 Essentials', '🔌 Adapters', '🧻 Toiletries', '💳 Money'],
    href: '/china-basics/before-you-go/packing-list',
  },
]

export default function BeforeYouGoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'Before You Go' }]} />
          <ChineseWatermark character="准备" />
          <h1 className="mb-6 text-4xl font-bold text-gray-900">Before You Go</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Get the paperwork, safety basics, and packing sorted before departure.
            These are the things every first-timer needs to check — visa, safety, and what to bring.
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
                  Read full guide →
                </span>
              </article>
            </Link>
          ))}
        </section>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-black text-slate-900">Pre-Trip Checklist</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
            Check your visa status → read the safety guide → pack using the checklist. Doing all three
            before you fly removes 90% of arrival stress.
          </p>
        </div>

        <RelatedArticles articles={[
          { title: 'Visa Guide', description: 'Everything about China visas and visa-free entry.', href: '/china-basics/how-china-differs/visa-guide' },
          { title: 'Is China Safe?', description: 'Safety tips and what to expect as a tourist.', href: '/china-basics/before-you-go/is-china-safe' },
          { title: 'Packing List', description: 'What to pack and what to leave at home.', href: '/china-basics/before-you-go/packing-list' },
          { title: 'Passport Rules', description: 'Entry requirements and passport validity.', href: '/china-basics/how-china-differs/passport-rules' },
        ]} />
      </main>
    </div>
  )
}
