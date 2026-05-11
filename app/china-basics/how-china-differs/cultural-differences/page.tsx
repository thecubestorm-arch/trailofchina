import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Cultural Differences in China',
  description:
    'Essential etiquette, customs, and social norms for travelers in China. Dining, greetings, gift giving, and public behavior explained.',

  path: '/china-basics/how-china-differs/cultural-differences',
})

const relatedArticles = [
  {
    title: 'Censorship in China',
    description: 'What to expect from the Great Firewall.',
    href: '/china-basics/how-china-differs/censorship',
  },
  {
    title: 'How China Differs',
    description: 'Overview of key differences for travelers.',
    href: '/china-basics/how-china-differs',
  },
  {
    title: 'Before You Go',
    description: 'Core prep steps before your first trip to China.',
    href: '/china-basics/before-you-go',
  },
]

export default function CulturalDifferencesPage() {
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
              { label: 'How China Differs', href: '/china-basics/how-china-differs' },
              { label: 'Cultural Differences' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="文" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Cultural Differences in China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">文化</span>
            <span className="text-lg">• China Basics • How China Differs</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Dining etiquette matters</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Tipping uncommon</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Curiosity about foreigners is normal</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China feels most welcoming when you can read the social signals that locals take for granted.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-cultural-differences/1600/900"
            alt="Cultural differences in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Why Cultural Context Helps
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China has unique cultural norms that differ significantly from Western countries. Understanding these will
              help you show respect and avoid unintentional offense, especially when you do not speak much Chinese.
            </p>
            <p>
              Dining, greetings, and gift-giving norms can be very different from Western expectations. Some behaviors that
              feel ordinary at home can come across poorly in China, while other things that may seem abrupt or unusual are
              often completely normal in context.
            </p>
            <p>
              Understanding common public behavior patterns helps you interpret situations more accurately and react
              calmly.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Greetings &amp; Interactions
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Light handshakes are acceptable, while bowing is not a common expectation in everyday modern China. Business
              cards should be received with both hands, glanced at respectfully, and put away carefully rather than stuffed
              into a pocket immediately.
            </p>
            <p>
              Personal space is often tighter than in many Western countries, especially in queues, transit stations, and
              busy markets. Moderate eye contact is fine, but prolonged staring at someone during conversation can feel rude.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Dining Etiquette</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Never stick chopsticks upright in a bowl of rice, because it resembles funeral incense. When someone pours
              tea for you, tapping the table twice with two fingers is a common way to say thanks in some regions.
            </p>
            <p>
              Most dishes are shared, so take modest portions and let the table rotate. Leaving a little food can suggest
              you are satisfied, while completely emptying every plate may imply the host did not provide enough. Fighting
              over the bill is often treated as polite theater, and splitting the bill is less common than in the West.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/china-dining-etiquette/1600/900"
              alt="Chinese dining table"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Gift Giving</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Gifts should be given and received with both hands. Avoid clocks, white flowers, and sharp objects, since
              they carry associations with death, funerals, or severed relationships. The number four is also avoided
              because it sounds like the word for death in Chinese.
            </p>
            <p>
              Color carries meaning too. Red reads as lucky and celebratory, while white is heavily associated with funerals.
              If you are bringing something small from home, choose something thoughtful rather than expensive.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Public Behavior</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Some public habits can surprise first-time visitors. Smoking remains common, queue jumping does happen, and
              foreigners may attract curious looks or direct questions about age, salary, or relationship status. In most
              cases, that curiosity is not meant as hostility.
            </p>
            <p>
              Ask before photographing people, stay firm but polite in busy lines, and do not assume Western tipping norms
              apply. In many places, tipping is not expected and may even be refused.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Learn a few basic phrases like &quot;Ni hao,&quot; &quot;Xie xie,&quot; and &quot;Bu yao.&quot;</p>
            <p>A calm smile often carries you through awkward moments better than perfect language.</p>
            <p>Do not be offended by direct personal questions that would feel intrusive elsewhere.</p>
            <p>If you are unsure, watch what locals do first and copy the rhythm of the room.</p>
          </blockquote>
        </section>

        <section className="mb-10 border-t border-[#ebe4d8]">
          <div className="pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Related Articles</h2>
            <div className="divide-y divide-[#ebe4d8]">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block py-4 hover:bg-[#faf8f4] transition-colors">
                  <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContextualCTA
          icon="📋"
          title="Download Our Free China Cheat Sheet"
          description="Quick reference for phrases, etiquette, and essentials — save it to your phone before you go."
          buttonText="Get the Cheat Sheet →"
          buttonHref="#cheat-sheet"
          variant="secondary"
        />
      </main>
    </div>
  )
}
