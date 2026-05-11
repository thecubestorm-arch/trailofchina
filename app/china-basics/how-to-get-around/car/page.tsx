import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Car Rental in China',
  description: 'Guide to renting a car in China. Requirements, rental companies, and driving tips.',

  path: '/china-basics/how-to-get-around/car',
})

const relatedArticles = [
  {
    title: 'Didi Ride-Hailing',
    description: 'Skip self-driving and let Didi handle it.',
    href: '/china-basics/how-to-get-around/didi',
  },
  {
    title: 'How to Get Around',
    description: 'All transportation options in China.',
    href: '/china-basics/how-to-get-around',
  },
]

export default function CarPage() {
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
              { label: 'Car' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="驾" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Car Rental
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">自驾</span>
            <span className="text-lg">• China Basics • How to Get Around</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Economy car ¥200 to ¥400 per day</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Insurance ¥50 to ¥100 per day</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Best for remote areas</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Renting a car gives maximum flexibility, but China is one of the places where the practical barriers matter enough
          that most visitors should question the idea before committing.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-car-rental/1600/900"
            alt="Car rental and driving in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              A rental car gives you maximum flexibility when public transport does not reach your destination cleanly, and it
              can make sense for remote rural areas, scenic routes, and small villages.
            </p>
            <p>
              Families and groups sometimes find private transport more convenient than coordinating multiple trains, buses, and
              taxis, but the legal and practical hurdles in China are significant enough that this is rarely the easiest option.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Requirements</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>A valid foreign license plus an official translation.</li>
            <li>Or a Chinese driver&apos;s license, which is difficult for short-term travelers to obtain.</li>
            <li>A passport for registration.</li>
            <li>A credit card for the deposit.</li>
            <li>Minimum age requirements, often somewhere from 21 to 25 depending on the company.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Rental Companies</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              International chains like <strong>Avis</strong>, <strong>Hertz</strong>, and <strong>Enterprise</strong> are the
              obvious starting point, especially at airports.
            </p>
            <p>
              Local players like <strong>eHi (一嗨租车)</strong> and <strong>Shouqi (首汽租车)</strong> are often more relevant on the
              ground, and Alipay also exposes some rental options through its own ecosystem.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/china-highway-driving/1600/900"
              alt="Driving on a Chinese highway"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>

          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Driving in China</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>You drive on the right side.</li>
            <li>Traffic can be aggressive, so expect the unexpected.</li>
            <li>GPS navigation is essential, with Baidu Maps often being the practical choice.</li>
            <li>Speed cameras are everywhere.</li>
            <li>Parking in cities can be frustrating.</li>
            <li>Highways are generally excellent and well marked.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Costs</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>Economy car: roughly ¥200 to ¥400 per day.</li>
            <li>Insurance: roughly ¥50 to ¥100 per day and highly recommended.</li>
            <li>Toll roads: around ¥0.5 to ¥1 per kilometer on highways.</li>
            <li>Gas: broadly similar to US or European prices.</li>
            <li>Parking: about ¥10 to ¥50 per day in cities.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">When to Rent</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Rent a car for rural areas such as parts of Guilin, Yunnan, or other scenic regions where public transport is patchy.</p>
            <p>It can also make sense for families or for itineraries that involve multiple small villages.</p>
            <p>Avoid it if you are staying mainly in big cities because the tradeoff is rarely worth it.</p>
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Consider Carefully</h2>
          <blockquote className="space-y-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            <p>Traffic accidents are common, and local driving style can feel chaotic if you are not used to it.</p>
            <p>Road signs are still often Chinese-first, and some cities have traffic restrictions tied to license plate rules.</p>
            <p>For many travelers, hiring a driver for roughly ¥500 to ¥800 per day is the better compromise.</p>
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
          icon="🚕"
          title="Prefer Not to Drive Yourself?"
          description="For most travelers, Didi is cheaper, simpler, and far less stressful than renting a car in China."
          buttonText="See the Didi Guide →"
          buttonHref="/china-basics/how-to-get-around/didi"
          variant="secondary"
        />
      </main>
    </div>
  )
}
