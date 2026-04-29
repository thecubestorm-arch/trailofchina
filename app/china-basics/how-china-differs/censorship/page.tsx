import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Censorship & The Great Firewall | Trail of China',
  description:
    'Understanding the Great Firewall of China: blocked websites, VPNs, and how to stay connected. Google, WhatsApp, Instagram blocked in China.',
}

const blockedServices = [
  'Google services including Search, Maps, and Gmail',
  'Meta services including Facebook, Instagram, and WhatsApp',
  'X/Twitter',
  'YouTube',
  'Netflix',
  'ChatGPT',
  'Dropbox',
  'Some international news sites including BBC and CNN',
]

const workingServices = [
  "WeChat for messaging, payments, and daily services",
  'Baidu Maps for navigation and local search',
  'Bilibili for video content',
  'Douyin as the Chinese version of TikTok',
  'Weibo for social media updates',
  'Alipay and WeChat Pay for mobile payments',
]

const relatedArticles = [
  {
    title: 'VPN Guide',
    description: 'Set up a VPN before you arrive in China.',
    href: '/china-basics/what-apps-to-use/vpn',
  },
  {
    title: 'How to Get Internet',
    description: 'eSIM and SIM options for staying connected.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'Communication Apps',
    description: 'The apps that still keep you connected inside China.',
    href: '/china-basics/what-apps-to-use/communication',
  },
]

export default function CensorshipPage() {
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
              { label: 'Censorship' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="审" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            Censorship &amp; The Great Firewall
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">审查</span>
            <span className="text-lg">• China Basics • How China Differs</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] rounded-lg px-4 py-3">
          <span className="font-medium">Google blocked</span>
          <span className="text-[var(--muted)]">·</span>
          <span>WhatsApp blocked</span>
          <span className="text-[var(--muted)]">·</span>
          <span>VPN setup before arrival</span>
        </div>

        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-4xl mb-10">
          China&apos;s internet works differently, and the travelers who prepare before landing avoid the most frustrating
          surprises.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/china-great-firewall/1600/900"
            alt="The Great Firewall of China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with a China internet access image</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Why This Matters Before You Fly
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China operates the world&apos;s most sophisticated internet censorship system, commonly known as the Great
              Firewall. Many popular Western websites and apps do not work in China unless you prepare in advance, and that
              changes how you message people, look up places, navigate cities, and access travel bookings.
            </p>
            <p>
              If you rely on Google, WhatsApp, Instagram, or Gmail, you need a backup plan before arrival. VPN setup has
              to happen before you enter China, because the download sites are often blocked inside the country.
            </p>
            <p>
              Knowing which local apps still work helps you stay connected even without Western services. For most
              travelers, this is less about politics than basic travel logistics.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            Blocked Websites &amp; Apps
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              These popular services do not work in China without a{' '}
              <Link href="/china-basics/what-apps-to-use/vpn">VPN</Link>.
            </p>
            <ul className="list-disc pl-6">
              {blockedServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">What Does Work</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China has a full parallel app ecosystem, and once you switch over, daily life becomes much easier.
            </p>
            <ul className="list-disc pl-6">
              {workingServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/china-local-apps/1600/900"
              alt="Chinese local apps on a phone"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with local app collage</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
            How to Bypass the Firewall
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              A <Link href="/china-basics/what-apps-to-use/vpn">VPN</Link> is essential for accessing blocked services.
              Providers commonly used by travelers include ExpressVPN, NordVPN, and Astrill.
            </p>
            <p>
              The critical point is timing: download and set up your VPN before arriving in China. Once you are inside the
              country, the app stores, provider websites, and email confirmation links you need may already be inaccessible.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Legal Notice</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              While many travelers use VPNs, they exist in a legal gray area in China. Personal use is generally tolerated,
              but selling VPN services is illegal. Never discuss VPN usage openly in public or with officials.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] mb-4">Pro Tips</h2>
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] space-y-4">
            <p>Install multiple VPNs as backup because providers occasionally get blocked.</p>
            <p>Screenshot important booking details, addresses, and tickets before you go.</p>
            <p>Use offline maps as a second line of defense if connectivity becomes unreliable.</p>
            <p>Consider a Hong Kong SIM card if your route and phone setup make that practical.</p>
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
          icon="🔒"
          title="Bypass the Great Firewall"
          description="Google, WhatsApp, Instagram — all blocked in China. A VPN keeps you connected."
          buttonText="Get a VPN for China →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </main>
    </div>
  )
}
