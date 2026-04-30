import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Metro & Subway in China | Trail of China',
  description:
    'Complete guide to using the metro and subway systems in Chinese cities. Shanghai, Beijing, Guangzhou, and more. Payment, etiquette, and tips.',
}

const relatedArticles = [
  {
    title: 'Alipay Guide',
    description: 'Pay for metro rides with Alipay.',
    href: '/china-basics/what-apps-to-use/alipay',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function MetroPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
              { label: 'Metro & Subway' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="地" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Metro &amp; Subway
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">地铁</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Best for major cities</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Security check at every station</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Last trains around 22:00 to 23:00</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          In most big Chinese cities, the metro is the default answer. It is fast, modern, bilingual enough for travelers,
          and usually the least stressful way to cross dense urban areas.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-metro-subway/1600/900"
            alt="Metro and subway travel in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China&apos;s metro systems are modern, efficient, and often the best way to navigate major cities. Shanghai and
              Beijing alone have some of the world&apos;s longest networks, and stations are usually close to the attractions
              travelers actually want.
            </p>
            <p>
              In practice, metro travel removes the road-traffic uncertainty that can make taxis and ride-hailing slower than
              they first appear on a map.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Major Metro Systems</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              <strong>Shanghai</strong> has the world&apos;s longest metro network with more than 20 lines, while
              <strong> Beijing</strong> covers virtually every major site a first-time visitor is likely to see.
            </p>
            <p>
              <strong>Guangzhou</strong> connects deeply into the surrounding region, including Foshan, and
              <strong> Shenzhen</strong> is modern and generally easy to navigate. Cities like Xi&apos;an, Chengdu, and Hangzhou
              continue expanding quickly.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-metro-qr/800/1200"
              alt="Metro QR code payment in China"
              className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">How to Pay</h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            <li>Use a rechargeable metro card if you want a dedicated transit option and, in some cities, a small discount.</li>
            <li>Use Alipay or WeChat QR codes for the most convenient gate access in many major cities.</li>
            <li>Buy single tickets from machines if you need to, though the interface is often more Chinese-heavy.</li>
            <li>Try phone NFC where supported, but do not assume Apple Pay or Google Pay will work everywhere.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Metro Etiquette</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Stand right and walk left on escalators where local flow follows that pattern.</li>
            <li>Let passengers exit before entering.</li>
            <li>Leave priority seats for elderly, pregnant, or disabled riders.</li>
            <li>Do not eat or drink on trains.</li>
            <li>Expect baggage x-ray and a security check at every station.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Things to Know</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Some transfers involve very long walks, sometimes ten minutes or more between lines.</p>
            <p>Stations often have multiple exits, and taking the wrong one can create a major detour at street level.</p>
            <p>Check exit numbers before arrival, and bring a layer because air conditioning can be strong.</p>
            <p>Avoid rush hour from roughly 7 to 9 AM and 5 to 7 PM if you can.</p>
            <p>English signage and announcements are standard in major cities, and free maps are often available at tourist info centers.</p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--primary)]">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 transition-colors hover:bg-[#faf8f4]">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="💳"
          title="Set Up Mobile Payment First"
          description="Metro gates in many cities work best with Alipay or WeChat QR codes, so payment setup makes subway travel much smoother."
          buttonText="Alipay Setup Guide →"
          buttonHref="/china-basics/what-apps-to-use/alipay"
          variant="secondary"
        />
      </main>
    </div>
  )
}
