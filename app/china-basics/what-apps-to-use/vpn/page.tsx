import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
import ContextualCTA from '@/components/ContextualCTA'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'VPN Guide for China Travel',
  description:
    'The best VPNs that actually work in China, plus setup tips and backup plans for when the Great Firewall blocks your connection.',

  path: '/china-basics/what-apps-to-use/vpn',
})

const vpnProviders = [
  {
    name: 'ExpressVPN',
    price: '$6.67-$12.95/month',
    description:
      'The most reliable option for China. ExpressVPN has dedicated teams monitoring the Great Firewall and pushing updates within hours when blocks happen. Speeds are fast enough for video calls and streaming. It works on iOS, Android, Windows, macOS, and even routers.',
  },
  {
    name: 'NordVPN',
    price: '$3.79-$12.99/month',
    description:
      'A solid alternative with obfuscated servers specifically designed to hide VPN traffic from deep-packet inspection. NordVPN is slightly cheaper than ExpressVPN and offers a huge server network. Turn on obfuscated servers in the settings before you connect from China.',
  },
  {
    name: 'Surfshark',
    price: '$2.19-$15.45/month',
    description:
      'The best budget pick. Surfshark allows unlimited devices on one account, so you can share it with your travel partner. It uses Camouflage Mode to mask VPN traffic. Speeds are decent, though slightly less consistent than ExpressVPN during peak blocking periods.',
  },
  {
    name: 'Astrill',
    price: '$10.00-$30.00/month',
    description:
      'Expensive, but when nothing else works, Astrill usually still connects. It is the go-to VPN for expats living in China long-term. The StealthVPN and OpenWeb protocols are specifically built to evade the Great Firewall. If you are traveling during a politically sensitive period or other VPNs are down, Astrill is your backup plan.',
  },
]

const setupSteps = [
  'Download the VPN before you fly. Once you are in China, VPN websites are blocked, so you will not be able to sign up or download the installer.',
  'Install it on every device you plan to use, including your phone, laptop, and tablet.',
  'Log in and test the connection while you still have uncensored internet. Make sure you can connect to a server, browse a blocked site like Google, and get decent speeds.',
  'Screenshot your login credentials and any support contact info, then save them somewhere accessible offline.',
  'Write down the server locations that worked best. Japan, Singapore, and Hong Kong are usually the fastest from mainland China.',
]

const relatedArticles = [
  {
    title: 'How to Get Internet in China',
    description: 'eSIM, physical SIM, and Wi-Fi options for staying connected.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    title: 'Censorship in China',
    description: 'What is blocked and how to prepare for the Great Firewall.',
    href: '/china-basics/how-china-differs/censorship',
  },
  {
    title: 'Airalo eSIM Guide',
    description: 'Set up data before you land with an Airalo eSIM.',
    href: '/china-basics/how-to-get-internet/airalo-esim',
  },
]

export default function VpnGuidePage() {
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
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'VPN' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="网" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            VPN Guide for China
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">翻墙</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          <span className="font-medium">Free plans available</span>
          <span className="text-[var(--muted)]">·</span>
          <span>iOS + Android + Desktop</span>
          <span className="text-[var(--muted)]">·</span>
          <span>Must download before arrival</span>
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          You need a VPN in China. The internet is censored, and Google, WhatsApp, Instagram, and YouTube are all blocked.
          Download and install before you land, because you cannot access VPN websites from inside China.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/vpn-china-travel/1600/900"
            alt="Using VPN in China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              China blocks most of the internet you use every day. Google, Gmail, Google Maps, YouTube, Instagram,
              WhatsApp, Facebook, Twitter, and even Wikipedia are inaccessible without a VPN. Travelers often realize this
              only after landing, when the apps they rely on suddenly stop working.
            </p>
            <p>
              It is not just social media. If you use Google Maps for navigation, you will be lost without a VPN. Your
              WhatsApp messages to family back home will not go through. Work emails on Gmail will not sync. Looking up a
              restaurant review or finding a saved place can turn into a dead end.
            </p>
            <p>
              The catch is that not every VPN works in China. The Great Firewall actively detects and blocks VPN traffic, and
              cheap or free VPNs are usually the first to fail. You need a provider that treats China as a serious support
              case rather than an afterthought.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Best VPNs for China</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              These four VPNs have the best track record for working inside China. Prices and reliability change over time,
              so treat these as the short list to start with and test before departure.
            </p>
          </div>

          {vpnProviders.map((vpn) => (
            <div key={vpn.name} className="mt-8">
              <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">{vpn.name}</h3>
              <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                <p>
                  <strong>Price:</strong> {vpn.price}
                </p>
                <p>{vpn.description}</p>
              </div>
            </div>
          ))}

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            VPN reliability in China changes constantly. Having a backup VPN installed is smart, especially during holidays
            or politically sensitive periods.
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">
            How to Set Up Your VPN Before You Travel
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
            {setupSteps.map((step, index) => (
              <li key={step} className="leading-relaxed">
                <p>{step}</p>
                {index === 1 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/vpn-install-devices/800/1200"
                      alt="VPN installed on multiple devices"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-3">
                    <img
                      src="https://picsum.photos/seed/vpn-test-connection/800/1200"
                      alt="Testing VPN connection before travel"
                      className="mx-auto w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">
            Alternatives If You Cannot Get a VPN Working
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Another option is roaming with your home SIM card. If your carrier offers international roaming in China, your
              traffic routes through your home network and bypasses the Great Firewall entirely. The downside is cost:
              roaming data is expensive, and speeds can be slow.
            </p>
            <p>
              It works well as an emergency backup to check email or send a WhatsApp message, but it is not the best setup
              for daily browsing, navigation, or streaming. Use it as the fallback plan, not the plan.
            </p>
          </div>
        </section>

        <section className="border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
          <div className="divide-y divide-[#ebe4d8]">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="🔒"
          title="Don't Wait Until You Land"
          description="Install your VPN before entering China — the download sites are blocked otherwise."
          buttonText="See VPN Recommendations →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="secondary"
        />
      </div>
    </div>
  )
}
