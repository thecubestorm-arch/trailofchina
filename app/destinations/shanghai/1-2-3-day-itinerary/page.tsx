import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: '1-2-3 Day Shanghai Itineraries — What to See With Limited Time',
  description: 'Detailed 1, 2, and 3-day Shanghai itineraries with timing, transport, and tips. Bund, Yu Garden, French Concession, Tianzifang, Shanghai Tower, and Zhujiajiao day trip.',
  keywords: ['Shanghai 1 day itinerary', 'Shanghai 2 day itinerary', 'Shanghai 3 day itinerary', 'Shanghai short trip', 'Shanghai weekend'],
  path: '/destinations/shanghai/1-2-3-day-itinerary',
})

const faqs = [
  {
    question: 'Can I see the main sights of Shanghai in one day?',
    answer: 'Yes — the Bund, Yu Garden, and Nanjing Road are all within a 15-minute walk of each other. One day covers these classics plus the Bund at night. You will miss the French Concession, Tianzifang, and any day trips.',
  },
  {
    question: 'What is the best 3-day Shanghai itinerary?',
    answer: 'Day 1: Bund + Yu Garden + Nanjing Road + Bund at night. Day 2: French Concession + Tianzifang + Shanghai Tower. Day 3: Zhujiajiao water town (Metro Line 17) or Shanghai Museum + Jade Buddha Temple.',
  },
  {
    question: 'How do I get to Zhujiajiao from Shanghai?',
    answer: 'Take Metro Line 17 to Zhujiajiao station (朱家角站). ¥6, about 1 hour from the city center. No bullet train or bus needed. The water town is a 10-minute walk from the station.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Shanghai?', description: 'Not sure how long to stay? Start here.', href: '/destinations/shanghai/how-many-days' },
  { title: 'Common Mistakes in Shanghai', description: '6 errors tourists make — and fixes.', href: '/destinations/shanghai/common-mistakes' },
  { title: 'Shanghai Transport Guide', description: 'Metro, Maglev, DiDi, and airport explained.', href: '/destinations/shanghai/transport-guide' },
  { title: 'Shanghai for First-Timers', description: 'Everything first-time visitors need to know.', href: '/destinations/shanghai/for-first-timers' },
]

export default function ShanghaiItineraryPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Shanghai', path: '/destinations/shanghai' },
    { name: '1-2-3 Day Itinerary', path: '/destinations/shanghai/1-2-3-day-itinerary' },
  ])
  const faqJsonLd = faqPageSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen" style={{ background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff' }}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Destinations', href: '/destinations' },
              { label: 'Shanghai', href: '/destinations/shanghai' },
              { label: '1-2-3 Day Itinerary' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="行" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              1, 2, and 3-Day Shanghai Itineraries
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">行程</span>
              <span className="text-lg">• Destinations • Shanghai</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">1 day = classics</span>
            <span className="text-[var(--muted)]">·</span>
            <span>2 days = + French Concession</span>
            <span className="text-[var(--muted)]">·</span>
            <span>3 days = + water town</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Shanghai is compact enough that one day covers the headline sights. Two days adds the soul. Three adds a day trip. Here are the exact plans.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/shanghai-itinerary-bund/1600/900" alt="The Bund promenade at golden hour, Shanghai" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          {/* 1-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">1 Day — The Classics</h2>
            <p className="text-[var(--muted)] mb-4">One day means the Bund, Yu Garden, and Nanjing Road — all walkable from each other. Finish with the Bund at night.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>7:30 AM — The Bund (外滩).</strong> Walk the waterfront before the crowds arrive. Cross to Pudong side via the ¥2 public ferry (东昌路渡口). 1–1.5 hours. Free.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>9:00 AM — Yu Garden (豫园).</strong> Classical Chinese garden and bazaar. Go before 10 AM when tour groups arrive. ¥40 entrance (garden only — bazaar is free). 1.5–2 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>11:30 AM — Xiaolongbao lunch.</strong> Walk 5 minutes from Yu Garden to City God Temple area. Jia Jia Tang Bao (佳家汤包) or nearby stalls. ¥30–60. 1 hour.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>1:00 PM — Nanjing Road (南京路).</strong> Shanghai&apos;s famous shopping street. Walk it east to west (20 minutes is enough). Pop into the Shanghai No. 1 Food Store for local snacks. Free.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>2:30 PM — People&apos;s Square (人民广场) + Shanghai Museum.</strong> Walk west on Nanjing Road to People&apos;s Square. The Shanghai Museum has excellent jade, bronze, and calligraphy collections. Free. 1.5–2 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>5:00 PM — Back to hotel, rest.</strong> 1 hour break. Shanghai in summer is exhausting.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>7:00 PM — The Bund at night.</strong> Walk the Bund after dark when Pudong&apos;s skyline lights up. The light show runs until 10 PM. Take the ¥2 ferry across and back for river views. Free.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>8:30 PM — Dinner on the Bund.</strong> M on the Bund (western) or a local restaurant on Fuzhou Road (福州路). ¥100–300 per person.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> All sights are walkable. Take Metro Line 2 or 10 to Nanjing East Road (南京东路) in the morning. No DiDi needed.
            </div>
          </section>

          {/* 2-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">2 Days — + French Concession &amp; Tianzifang</h2>
            <p className="text-[var(--muted)] mb-4">Day 1 is the same as above. Day 2 adds Shanghai&apos;s most charming neighborhoods.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Day 1:</strong> Same as the 1-day itinerary above.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>9:00 AM — French Concession (法租界).</strong> Metro Line 10 or 12 to Shaanxi South Road (陕西南路). Walk Fuxing Road (复兴路), browse Anfu Road (安福路) cafés, explore Sinan Mansions (思南公馆). Free. 2–3 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>12:00 PM — Lunch in the French Concession.</strong> Try a local noodle shop on Jianguo Road (建国路) — scallion oil noodles (葱油拌面) for ¥25. Or a western café if you need a break from Chinese food. ¥25–100. 1 hour.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>1:30 PM — Tianzifang (田子坊).</strong> 10-minute walk from French Concession. Narrow alleys packed with galleries, craft shops, and hidden bars. More authentic than Nanjing Road, less touristy. Free. 1.5–2 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>4:00 PM — Shanghai Tower (上海中心大厦).</strong> Metro Line 2 to Lujiazui (陆家嘴). World&apos;s second-tallest building. Observation deck on 118th floor. ¥180. 1–1.5 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>6:00 PM — Xintiandi (新天地) dinner.</strong> Restored shikumen (石库门) stone-gate houses turned into restaurants and bars. Mix of Chinese and western dining. ¥150–300 per person.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> French Concession and Tianzifang are walkable from each other. Shanghai Tower: Metro Line 2 to Lujiazui. Xintiandi: Metro Line 10 or 13.
            </div>
          </section>

          {/* 3-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">3 Days — + Shanghai Tower &amp; Water Town</h2>
            <p className="text-[var(--muted)] mb-4">Days 1 and 2 are the same as above. Day 3 adds the observation deck (if skipped) or a water town day trip.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Days 1–2:</strong> Same as the 2-day itinerary above.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Option A: Zhujiajiao Water Town (朱家角).</strong> Metro Line 17 to Zhujiajiao station (¥6, 1 hour). 1,700-year-old water town with 36 stone bridges, narrow canals, and the best zongzi (粽子) in Shanghai. ¥30 entrance (old town area). Half day — back by 3 PM.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Option B: Suzhou Day Trip (苏州).</strong> Bullet train from Shanghai Hongqiao (30 min, ¥40). Classical gardens — Humble Administrator&apos;s Garden (拙政园, ¥70), Silk Museum, Tongli water town nearby. Full day.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Option C: Shanghai Tower + Jade Buddha Temple.</strong> If you skipped the Tower on day 2, do it this morning. Then visit Jade Buddha Temple (玉佛寺, ¥20) in the afternoon — peaceful, uncrowded, with two stunning white jade Buddha statues.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> Zhujiajiao: Metro Line 17 (easiest day trip from Shanghai — no bullet train needed). Suzhou: Bullet train from Hongqiao Station. Jade Buddha Temple: Metro Line 13 to Jiangning Road (江宁路).
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>The Bund is best seen twice — dawn and after dark. The night skyline is why most people come to Shanghai.</p>
              <p>Yu Garden gets very crowded after 10 AM. Go early or go after 4 PM when tour groups leave.</p>
              <p>The ¥2 public ferry (轮渡) beats the ¥50 sightseeing tunnel every time. Actual river views, not neon lights.</p>
              <p>Summer in Shanghai (July–August) is brutally hot and humid. Carry water, seek AC, and plan indoor activities midday.</p>
              <p>Xintiandi restaurants are overpriced but the shikumen architecture is free to walk through. Consider eating nearby instead.</p>
            </blockquote>
          </section>

          <section className="mb-10 border-t border-[#ebe4d8]">
            <div className="pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
              <div className="divide-y divide-[#ebe4d8]">
                {relatedArticles.map((article) => (
                  <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">{article.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <ContextualCTA
            icon="📋"
            title="Ready to Plan?"
            description="Download our free China Cheat Sheet for quick-reference phrases, etiquette, and arrival essentials."
            buttonText="Get the Cheat Sheet →"
            buttonHref="#cheat-sheet"
            variant="secondary"
          />
        </main>
      </div>
    </>
  )
}