import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'
import AuthorByline from '@/components/AuthorByline';

export const metadata: Metadata = makeMetadata({
  title: 'Safety & Security in China',
  description:
    'Safety tips and how to stay secure while traveling in China. General safety, digital security, and emergency contacts.',

  path: '/china-basics/how-china-differs/security-standards',
})

const relatedArticles = [
  {
    title: 'Passport Rules',
    description: 'Entry and registration requirements.',
    href: '/china-basics/how-china-differs/passport-rules',
  },
  {
    title: 'Cultural Differences',
    description: 'What surprises Western visitors most.',
    href: '/china-basics/how-china-differs/cultural-differences',
  },
  {
    title: 'How China Differs',
    description: 'The broader context behind travel norms in China.',
    href: '/china-basics/how-china-differs',
  },
]

export default function SecurityStandardsPage() {
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
              { label: 'Security Standards' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="安" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Safety &amp; Security in China
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">安全</span>
            <span className="text-lg">• China Basics • How China Differs</span>
          </div>
        <AuthorByline />
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Violent crime is rare</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Police: 110</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Medical: 120</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China is usually easier on the nerves than first-time visitors expect, but the practical risks are still worth understanding.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-security-standards/1600/900"
            alt="Safety and security in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">General Safety</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China is generally very safe for travelers, and violent crime against tourists is rare. Walking at night is
              usually fine in major cities, and police presence is heavy and visible.
            </p>
            <p>
              The real risks are more ordinary: pickpockets in transport hubs, careless handling of valuables, and
              confusion in unfamiliar systems. Basic preparation makes it easier to navigate confidently and avoid
              preventable problems.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Protecting Your Belongings
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Keep your phone and wallet in front pockets, and use crossbody bags rather than backpacks in dense crowds.
              Be extra vigilant at train stations and tourist sites. Do not leave bags unattended, even briefly for photos,
              and use hotel safes for passports and extra cash when practical.
            </p>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/china-travel-safety/1600/900"
              alt="Traveler in a busy Chinese transport hub"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Digital Security</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Digital security matters more in China because travelers rely so heavily on phones, QR codes, payments, and
              public networks. Use a VPN on all devices, avoid public WiFi for banking, enable two-factor authentication,
              and keep apps updated.
            </p>
            <p>
              Be cautious with random QR codes in public spaces. Most are harmless, but scanning unfamiliar codes without
              context is the Chinese equivalent of clicking an unknown link.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Emergency Contacts</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>Key numbers to remember are police at 110, medical services at 120, fire at 119, and the tourist hotline at 12301.</p>
            <p>
              It is also smart to learn your hotel&apos;s name and address in Chinese and keep digital copies of your passport
              and visa available if your phone is still accessible.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Register with your embassy if that service is available for your nationality.</p>
            <p>Keep digital copies of your passport and visa separate from your physical documents.</p>
            <p>Trust your instincts and leave any situation that feels off, even if nothing specific has happened yet.</p>
            <p>Most locals are genuinely helpful, so ask for assistance early rather than waiting until a problem escalates.</p>
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
          icon="🛂"
          title="Know the Rules Before You Go"
          description="Safety is easier when your documents and registration are handled correctly from day one."
          buttonText="See Passport Rules →"
          buttonHref="/china-basics/how-china-differs/passport-rules"
          variant="secondary"
        />
      </main>
    </div>
  )
}
