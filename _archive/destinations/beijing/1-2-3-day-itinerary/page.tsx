import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = makeMetadata({
  title: '1-2-3 Day Beijing Itineraries — What to See With Limited Time',
  description: 'Detailed 1, 2, and 3-day Beijing itineraries with timing, transport, and booking tips. Forbidden City, Great Wall, Temple of Heaven, hutongs, Summer Palace, and 798 Art District.',
  keywords: ['Beijing 1 day itinerary', 'Beijing 2 day itinerary', 'Beijing 3 day itinerary', 'Beijing short trip', 'Beijing weekend'],
  path: '/destinations/beijing/1-2-3-day-itinerary',
})

const faqs = [
  {
    question: 'Can I see the Great Wall on a 1-day Beijing trip?',
    answer: 'No — Mutianyu Great Wall is a full-day excursion (90 min each way + 3-4 hours on the wall). With one day, focus on the Forbidden City, Tiananmen Square, and hutong dinner. Save the Wall for a 2+ day trip.',
  },
  {
    question: 'What is the best 3-day Beijing itinerary?',
    answer: 'Day 1: Forbidden City + Tiananmen + hutongs. Day 2: Mutianyu Great Wall + Temple of Heaven. Day 3: Summer Palace + 798 Art District or Lama Temple. This covers all major sights at a manageable pace.',
  },
  {
    question: 'How do I get to Mutianyu Great Wall from Beijing?',
    answer: 'Book a Mutianyu shuttle bus (¥80 round trip from Swissôtel near Dongzhimen) or use DiDi (¥200-300 one way, 90 minutes). Do not take the public bus 916 — it drops you in Huairou and you still need a taxi to the wall.',
  },
]

const relatedArticles = [
  { title: 'How Many Days in Beijing?', description: 'Not sure how long to stay? Start here.', href: '/destinations/beijing/how-many-days' },
  { title: 'Common Mistakes in Beijing', description: '7 errors tourists make — and fixes.', href: '/destinations/beijing/common-mistakes' },
  { title: 'Beijing Transport Guide', description: 'Metro, DiDi, taxi, and airport explained.', href: '/destinations/beijing/transport-guide' },
  { title: 'Great Wall Guide', description: 'Mutianyu vs Badaling vs other sections.', href: '/destinations/beijing/what-to-do/great-wall' },
]

export default function BeijingItineraryPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Beijing', path: '/destinations/beijing' },
    { name: '1-2-3 Day Itinerary', path: '/destinations/beijing/1-2-3-day-itinerary' },
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
              { label: '1-2-3 Day Itinerary' },
            ]} />
          </div>

          <header className="mb-8 relative">
            <ChineseWatermark character="行" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
              1, 2, and 3-Day Beijing Itineraries
            </h1>
            <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
              <span className="text-2xl">行程</span>
              <span className="text-lg">• Destinations • Beijing</span>
            </div>
            <AuthorByline />
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
            <span className="font-medium">1 day = imperial core</span>
            <span className="text-[var(--muted)]">·</span>
            <span>2 days = + Great Wall</span>
            <span className="text-[var(--muted)]">·</span>
            <span>3 days = + Summer Palace</span>
          </div>

          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
            Short on time? Here is exactly what to see, when to go, and how to get between each sight — no fluff.
          </p>

          <div className="mb-10">
            <img src="https://picsum.photos/seed/beijing-itinerary/1600/900" alt="Forbidden City courtyard at golden hour, Beijing" className="h-64 w-full rounded-lg object-cover md:h-96" />
          </div>

          {/* 1-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">1 Day — The Imperial Core</h2>
            <p className="text-[var(--muted)] mb-4">One day means the Forbidden City and the neighborhoods around it. Skip the Great Wall — it is a full-day trip on its own.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>8:00 AM — Tiananmen Square (天安门广场).</strong> Walk the square before the Forbidden City opens. Free. Passport required for entry. 30 minutes.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>8:30 AM — Forbidden City (故宫).</strong> Enter through the Meridian Gate. Walk the central axis: Three Great Halls → Inner Court → Imperial Garden. Exit at the north gate. ¥60. 3–4 hours. Tickets must be booked 7 days in advance.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>12:30 PM — Jingshan Park (景山公园).</strong> Directly north of the Forbidden City exit. Climb 5 minutes to the hilltop pavilion for the best panorama of the palace complex. ¥2. 30 minutes.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>1:30 PM — Lunch in a hutong.</strong> Walk west into the hutongs around Nanluoguxiang (南锣鼓巷). Find a local restaurant with no English menu — zhajiangmian (炸酱面) for ¥25 or jianbing (煎饼) for ¥8. 1 hour.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>3:00 PM — Drum and Bell Towers (钟鼓楼).</strong> Walk north through the hutongs to Gulou East Street. Climb the Drum Tower for another city view. ¥20. 45 minutes.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>5:00 PM — Houhai Lakes (什刹海).</strong> Walk around the lakes. Cafés, bars, and an easy old-Beijing evening. Dinner at a lakeside restaurant — try lamb skewers (羊肉串) on Guijie (簋街). Free to wander.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> All sights are walkable from each other (15–20 min between stops). Take Metro Line 1 to Tiananmen East (天安门东) in the morning.
            </div>
          </section>

          {/* 2-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">2 Days — + Great Wall</h2>
            <p className="text-[var(--muted)] mb-4">Day 1 is the same as above. Day 2 adds the Great Wall and Temple of Heaven.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Day 1:</strong> Same as the 1-day itinerary above.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>7:00 AM — Depart for Mutianyu Great Wall (慕田峪长城).</strong> DiDi or shuttle bus from Swissôtel (Dongzhimen). 90-minute drive. Arrive by 8:30 AM to beat tour groups. ¥40 entrance + ¥120 cable car/toboggan combo.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>8:30 AM–12:30 PM — Great Wall.</strong> Walk east from the cable car station toward Zhengbeilou for the best views and fewest people. 3–4 hours on the wall. Toboggan down is fun and fast (2 minutes).</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>2:00 PM — Return to city.</strong> 90 minutes back. Rest at your hotel for 30 minutes.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>3:30 PM — Temple of Heaven (天坛).</strong> Metro Line 5 to Tiantan East Gate. Walk the park grounds — see the Hall of Prayer for Good Harvests (祈年殿), Echo Wall (回音壁), and the Circular Mound Altar (圜丘). ¥15 (park only) or ¥34 (all access). 1.5–2 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>6:00 PM — Peking Duck dinner (北京烤鸭).</strong> Siji Minfu (四季民福) near the Forbidden City or Quanjude (全聚德) on Qianmen Street. ¥150–250 per person. Book ahead.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> DiDi to Mutianyu (¥200–300 one way) or shuttle bus (¥80 round trip from Dongzhimen). Temple of Heaven: Metro Line 5.
            </div>
          </section>

          {/* 3-Day Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">3 Days — + Summer Palace &amp; 798</h2>
            <p className="text-[var(--muted)] mb-4">Days 1 and 2 are the same as above. Day 3 adds the Summer Palace and contemporary art.</p>
            <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
              <li className="leading-relaxed">
                <p><strong>Days 1–2:</strong> Same as the 2-day itinerary above.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>8:30 AM — Summer Palace (颐和园).</strong> Metro Line 4 to Beigongmen (北宫门). Enter through the North Gate. Walk the Long Corridor (长廊, 728m of painted beams), climb Longevity Hill (万寿山), then relax by Kunming Lake (昆明湖). ¥30 (peak) or ¥20 (off-peak). 3+ hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>12:30 PM — Lunch near Summer Palace.</strong> Walk east to the Wudaokou (五道口) area for cheap Korean and Chinese food. ¥30–60. 1 hour.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>2:00 PM — 798 Art District (798艺术区).</strong> Metro Line 14 to Jiangtai (将台), then 10-minute walk or DiDi. Former factory district turned gallery hub. UCCA Center for Contemporary Art is the anchor. Free to wander, some galleries ¥60–120. 2–3 hours.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>5:30 PM — Lama Temple (雍和宫).</strong> Metro Line 5 to Yonghegong (雍和宫). Tibetan Buddhist temple with a 26m carved sandalwood Maitreya Buddha. ¥25. 45 minutes. The temple closes at 5:30 PM (4:30 PM in winter) — go here first if you are running late.</p>
              </li>
              <li className="leading-relaxed">
                <p><strong>Evening — Gulou (鼓楼) area.</strong> Walk from Lama Temple south through Wudaoying Hutong (五道营胡同) — cafés and craft shops. Dinner at a local restaurant. Explore the bar scene around Nanluoguxiang or Houhai.</p>
              </li>
            </ol>
            <div className="mt-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3 text-[var(--foreground)]">
              <strong>Transport:</strong> Summer Palace: Metro Line 4. 798: Metro Line 14 + short walk. Lama Temple: Metro Line 2 or 5. All connected by metro — no need for DiDi on day 3.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
              <p>Forbidden City tickets go on sale exactly 7 days before your visit at midnight Beijing time. Set an alarm.</p>
              <p>Mutianyu shuttle buses fill by 9 AM. Book the night before or leave by 7 AM.</p>
              <p>Summer Palace needs 3+ hours. Do not squeeze it into a 2-day trip — you will just see the entrance.</p>
              <p>Eat lunch at 11:30 or after 1:30. Chinese restaurants are packed between noon and 1 PM.</p>
              <p>Carry your passport everywhere. You need it for the Forbidden City, Tiananmen Square, and train tickets.</p>
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