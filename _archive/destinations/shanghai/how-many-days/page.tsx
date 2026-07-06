import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'How Many Days in Shanghai? 3-4 Day Guide',
  description: 'How many days do you need in Shanghai? 3 days for highlights, 4 for a comfortable pace with a day trip. Day-by-day breakdown with what you miss if you rush.',
  keywords: ['how many days in Shanghai', 'Shanghai itinerary length', 'Shanghai trip duration', 'how long to stay in Shanghai'],
  path: '/destinations/shanghai/how-many-days',
})

const faqs = [
  {
    question: 'Is 2 days enough for Shanghai?',
    answer: 'Two days is too rushed. You can see the Bund, Yu Garden, and Nanjing Road, but you will miss the French Concession, Tianzifang, and any day trips. Shanghai deserves at least 3 days.',
  },
  {
    question: 'What is the ideal number of days in Shanghai?',
    answer: 'Three days covers the highlights at a comfortable pace. Four days adds a day trip to Suzhou, Hangzhou, or Zhujiajiao water town. Five days is only needed if you want multiple day trips.',
  },
  {
    question: 'Can I do a day trip from Shanghai?',
    answer: 'Yes — Suzhou (30 min by bullet train), Hangzhou (1 hour by bullet train), and Zhujiajiao water town (1 hour by Metro Line 17) are all easy day trips from Shanghai.',
  },
]

const relatedArticles = [
  { title: '1-2-3 Day Itineraries', description: 'Hour-by-hour plans for short Shanghai trips.', href: '/destinations/shanghai/1-2-3-day-itinerary' },
  { title: 'Common Mistakes in Shanghai', description: '6 errors tourists make — and how to avoid them.', href: '/destinations/shanghai/common-mistakes' },
  { title: 'Shanghai for First-Timers', description: 'Everything you need to know before your first visit.', href: '/destinations/shanghai/for-first-timers' },
  { title: 'Shanghai Transport Guide', description: 'Metro, Maglev, DiDi, and airport connections.', href: '/destinations/shanghai/transport-guide' },
]

export default function ShanghaiHowManyDaysPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Shanghai', path: '/destinations/shanghai' },
    { name: 'How Many Days', path: '/destinations/shanghai/how-many-days' },
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
              { label: 'How Many Days' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="天" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              How Many Days Do You Need in Shanghai?
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">天数</span>
              <span className="text-lg">• Destinations • Shanghai</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">3 days = highlights</span>
            <span className="text-[var(--muted)]">·</span>
            <span>4 days = with day trip</span>
            <span className="text-[var(--muted)]">·</span>
            <span>2 days = too rushed</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Shanghai is more compact than Beijing, but it still needs three days. Two means rushing through the highlights. Four means you can add a water town or a bullet-train day trip.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/shanghai-how-many-days/1600/900" alt="The Bund skyline at dusk, Shanghai" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">The Short Answer</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>3–4 days.</strong> Three days covers the Bund, Yu Garden, French Concession, and Shanghai Tower. Four days adds a day trip — Suzhou (苏州) for classical gardens, Hangzhou (杭州) for West Lake, or Zhujiajiao (朱家角) for a water town closer to home.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">3 Days — Highlights</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Day 1: The Classics.</strong> Bund (外滩) at dawn for empty walkways. Yu Garden (豫园) before 10 AM to beat crowds. Xiaolongbao lunch near Yu Garden. French Concession (法租界) in the afternoon — tree-lined streets, cafés, boutiques. Bund again at night when the skyline lights up. Free.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 2: Local Shanghai.</strong> Tianzifang (田子坊) alleys in the morning — galleries, craft shops. Jing&apos;an Temple (静安寺) and neighborhood. Afternoon: Shanghai Tower (上海中心大厦) observation deck (¥180). Evening: Xintiandi (新天地) dinner in restored shikumen houses.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 3: Culture &amp; Departure.</strong> Jade Buddha Temple (玉佛寺) in the morning. Walk through the Former French Concession again at a slower pace — stop at a coffee shop. Afternoon: People&apos;s Square (人民广场) and Shanghai Museum (free, 2 hours). Fly out.</p>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">4 Days — With a Day Trip</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed"><p><strong>Days 1–3:</strong> Same as the 3-day itinerary above.</p></li>
              <li className="leading-relaxed">
                <p><strong>Day 4: Day trip.</strong> Three great options:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Suzhou (苏州)</strong> — 30 min bullet train (¥40). Classical gardens (Humble Administrator&apos;s Garden), silk museum, Tongli water town. Full day.</li>
                  <li><strong>Hangzhou (杭州)</strong> — 1 hour bullet train (¥73). West Lake cycling, Lingyin Temple, Longjing tea village. Full day.</li>
                  <li><strong>Zhujiajiao (朱家角)</strong> — Metro Line 17 to the end (¥6, 1 hour). 1,700-year-old water town, 36 stone bridges, best zongzi (粽子) in Shanghai. Half day — back by 3 PM.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What You Miss With Only 2 Days</h2>
            <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)]">
              <li><strong>French Concession</strong> — Shanghai&apos;s most charming neighborhood, needs a full afternoon</li>
              <li><strong>Tianzifang</strong> — the artsy soul of Shanghai</li>
              <li><strong>Shanghai Tower</strong> — world&apos;s second-tallest building, ¥180 observation deck</li>
              <li><strong>Jade Buddha Temple</strong> — peaceful, beautiful, free of crowds</li>
              <li><strong>Any day trips</strong> — Suzhou, Hangzhou, Zhujiajiao all off the table</li>
              <li><strong>The Bund at night</strong> — you might squeeze it in, but you will be exhausted</li>
            </ul>
            <p className="mt-4 text-[var(--muted)]">Two days forces you into the &quot;Bund-Yu Garden-Nanjing Road&quot; circuit. It is the Shanghai equivalent of seeing only Times Square in New York.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Shanghai is more walkable than Beijing. The Bund, Yu Garden, and Nanjing Road are all within a 15-minute walk.</p>
              <p>The Bund is free and best seen twice — once at dawn, once at night. The night skyline is the reason most people come to Shanghai.</p>
              <p>Zhujiajiao is the easiest day trip — no bullet train needed, just Metro Line 17 to the end.</p>
              <p>June–July is plum rain season (梅雨季). Muggy, rainy, and clothes never dry. Pack accordingly.</p>
              <p>If combining Shanghai and Beijing: 4.5-hour bullet train (¥553 second class) is faster and more reliable than flying once you factor in airport time.</p>
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
            title="Plan Your Shanghai Trip"
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