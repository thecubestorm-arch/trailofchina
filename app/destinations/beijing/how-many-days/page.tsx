import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: 'How Many Days in Beijing? 3-5 Day Guide',
  description: 'How many days do you need in Beijing? 3 days for highlights, 4 for a comfortable pace, 5 for day trips. Day-by-day breakdown with what you miss if you rush.',
  keywords: ['how many days in Beijing', 'Beijing itinerary length', 'Beijing trip duration', 'how long to stay in Beijing'],
  path: '/destinations/beijing/how-many-days',
})

const faqs = [
  {
    question: 'Is 2 days enough for Beijing?',
    answer: 'Two days is too rushed. You can see the Forbidden City and one Great Wall section, but you will miss the Temple of Heaven, Summer Palace, hutongs, and any day trips. Beijing deserves at least 3 days.',
  },
  {
    question: 'What is the ideal number of days in Beijing?',
    answer: 'Four days is the sweet spot. Three days covers the highlights at a fast pace. Four days lets you add the Summer Palace and explore hutongs properly. Five days includes a day trip to Gubei Water Town or Chengde.',
  },
  {
    question: 'Can I see the Great Wall and Forbidden City in one day?',
    answer: 'Technically yes, but it will be exhausting. The Forbidden City takes 3-4 hours minimum, and Mutianyu Great Wall is a 2-hour round trip plus 3-4 hours on the wall. Better to split them across two days.',
  },
]

const relatedArticles = [
  { title: '1-2-3 Day Itineraries', description: 'Detailed hour-by-hour plans for short trips.', href: '/destinations/beijing/1-2-3-day-itinerary' },
  { title: 'Common Mistakes in Beijing', description: 'What tourists get wrong — and how to avoid it.', href: '/destinations/beijing/common-mistakes' },
  { title: 'Beijing for First-Timers', description: 'Everything you need to know before your first visit.', href: '/destinations/beijing/for-first-timers' },
  { title: 'Beijing Transport Guide', description: 'Metro, DiDi, taxis, and airport connections.', href: '/destinations/beijing/transport-guide' },
]

export default function BeijingHowManyDaysPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Beijing', path: '/destinations/beijing' },
    { name: 'How Many Days', path: '/destinations/beijing/how-many-days' },
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
              { label: 'Beijing', href: '/destinations/beijing' },
              { label: 'How Many Days' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="天" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              How Many Days Do You Need in Beijing?
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">天数</span>
              <span className="text-lg">• Destinations • Beijing</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">3 days = highlights</span>
            <span className="text-[var(--muted)]">·</span>
            <span>4 days = comfortable</span>
            <span className="text-[var(--muted)]">·</span>
            <span>5 days = with day trips</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Beijing is enormous and every sight is a journey apart. Three days covers the essentials. Four is the sweet spot. Five lets you breathe.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/beijing-how-many-days/1600/900" alt="Forbidden City with blue sky, Beijing" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">The Short Answer</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)]">
              <p>
                <strong>3–5 days.</strong> Three days lets you tick off the Forbidden City, Great Wall, and Temple of Heaven. Four days adds the Summer Palace and proper hutong time. Five days includes a day trip — Gubei Water Town (古北水镇) or Chengde (承德). Anything less than three days means choosing between the Wall and the Palace.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">3 Days — Highlights Only</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Day 1: Imperial Core.</strong> Forbidden City (故宫) in the morning — book tickets 7 days ahead, arrive by 8:30 AM. Tiananmen Square (天安门广场) before or after. Walk north to Jingshan Park (景山公园) for the panorama. Evening: dinner in a hutong near Nanluoguxiang (南锣鼓巷).</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 2: The Great Wall.</strong> Mutianyu (慕田峪) — 90 minutes by car. Cable car up, toboggan down. Back in the city by 4 PM. Evening: Temple of Heaven (天坛) at sunset, then Peking duck (北京烤鸭) dinner.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 3: Summer Palace + Hutongs.</strong> Summer Palace (颐和园) in the morning — Kunming Lake, Long Corridor. Afternoon: hutong walk through Dongcheng (东城), maybe the Lama Temple (雍和宫). Fly out that night or next morning.</p>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">4 Days — The Sweet Spot</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Day 1:</strong> Forbidden City + Jingshan Park + Wangfujing (王府井) evening walk.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 2:</strong> Great Wall at Mutianyu. Return mid-afternoon. Relax. Houhai (后海) lake bars in the evening.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 3:</strong> Temple of Heaven in the morning. Summer Palace in the afternoon. Peking duck for dinner.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 4:</strong> Lama Temple + hutongs (Nanluoguxiang, Gulou 东大街) in the morning. 798 Art District (798艺术区) in the afternoon. Fly out.</p>
              </li>
            </ol>
            <p className="mt-4 text-[var(--muted)]">Four days means no 6 AM alarms and no skipping lunch. You can actually enjoy each sight instead of racing through it.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">5 Days — With Day Trips</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed"><p><strong>Days 1–3:</strong> Same as the 3-day itinerary above.</p></li>
              <li className="leading-relaxed">
                <p><strong>Day 4:</strong> Day trip to Gubei Water Town (古北水镇) + Simatai Great Wall (司马台) — the only section you can walk at night. 2 hours each way by bus.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Day 5:</strong> 798 Art District in the morning. Afternoon: shopping at Panjiayuan (潘家园) antique market (weekends only) or exploring hutongs. Fly out.</p>
              </li>
            </ol>
            <p className="mt-4 text-[var(--muted)]">Alternative day trip: Chengde Mountain Resort (承德避暑山庄) — 1 hour by bullet train. Qing dynasty summer capital with a Little Potala Palace.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What You Miss With Only 2 Days</h2>
            <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)]">
              <li><strong>Summer Palace</strong> — one of Beijing&apos;s most beautiful sights, requires a half day</li>
              <li><strong>798 Art District</strong> — the best contemporary art scene in China</li>
              <li><strong>Hutongs</strong> — the real old Beijing, not just a photo stop</li>
              <li><strong>Lama Temple</strong> — stunning Tibetan Buddhist architecture, 26m Maitreya Buddha</li>
              <li><strong>Any day trips</strong> — Chengde, Gubei, Ming Tombs all off the table</li>
              <li><strong>Relaxed meals</strong> — you&apos;ll be eating on the go or skipping proper restaurants</li>
            </ul>
            <p className="mt-4 text-[var(--muted)]">Two days forces you into the &quot;checklist tourist&quot; trap. Beijing rewards slowing down.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Forbidden City tickets sell out fast — book on WeChat mini-program exactly 7 days before your visit at midnight Beijing time.</p>
              <p>Mutianyu is 90 minutes from the city. Badaling is closer but 10× more crowded. Always choose Mutianyu.</p>
              <p>Summer Palace needs 3+ hours. The Long Corridor alone is 728 meters of painted beams.</p>
              <p>October 1–7 is National Day — the entire country travels. Avoid Beijing during Golden Week.</p>
              <p>If you only have 2 days, do Forbidden City + Mutianyu on day 1, and Temple of Heaven + hutongs on day 2. Skip the Summer Palace.</p>
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
            title="Plan Your Beijing Trip"
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