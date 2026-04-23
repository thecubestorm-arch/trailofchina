import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'VPN Guide for China Travel',
  description:
    'The best VPNs that actually work in China, plus setup tips and backup plans for when the Great Firewall blocks your connection.',
}

const vpnProviders = [
  {
    name: 'ExpressVPN',
    initials: 'EX',
    color: 'bg-red-600',
    badge: '⭐ Best for China',
    badgeColor: 'bg-amber-100 text-amber-800',
    platforms: '📱📱💻',
    price: '$6.67–$12.95/month',
    description:
      'The most reliable option for China. ExpressVPN has dedicated teams monitoring the Great Firewall and pushing updates within hours when blocks happen. Speeds are fast enough for video calls and streaming. It works on iOS, Android, Windows, macOS, and even routers.',
  },
  {
    name: 'NordVPN',
    initials: 'NR',
    color: 'bg-blue-600',
    badge: '',
    badgeColor: '',
    platforms: '📱📱💻',
    price: '$3.79–$12.99/month',
    description:
      'A solid alternative with obfuscated servers specifically designed to hide VPN traffic from deep-packet inspection. NordVPN is slightly cheaper than ExpressVPN and offers a huge server network. Turn on "Obfuscated Servers" in the settings before you connect from China.',
  },
  {
    name: 'Surfshark',
    initials: 'SS',
    color: 'bg-teal-500',
    badge: '💰 Budget Pick',
    badgeColor: 'bg-green-100 text-green-800',
    platforms: '📱📱💻',
    price: '$2.19–$15.45/month',
    description:
      'The best budget pick. Surfshark allows unlimited devices on one account, so you can share it with your travel partner. It uses Camouflage Mode to mask VPN traffic. Speeds are decent, though slightly less consistent than ExpressVPN during peak blocking periods.',
  },
  {
    name: 'Astrill',
    initials: 'AS',
    color: 'bg-indigo-600',
    badge: '🛡️ Best Backup',
    badgeColor: 'bg-purple-100 text-purple-800',
    platforms: '📱📱💻',
    price: '$10.00–$30.00/month',
    description:
      'Expensive, but when nothing else works, Astrill usually still connects. It is the go-to VPN for expats living in China long-term. The StealthVPN and OpenWeb protocols are specifically built to evade the Great Firewall. If you are traveling during a politically sensitive period or other VPNs are down, Astrill is your backup plan.',
  },
]

export default function VpnGuidePageTest2() {
  return (
    <div>
      <GuideArticlePage
        icon="/images/icons/expressvpn.svg"
        heroImage={{ src: "https://picsum.photos/seed/vpn-china-travel/800/400", alt: "Using VPN in China" }}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China Basics', href: '/china-basics' }, { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' }, { label: 'VPN' }]}
        category="What Apps to Use"
        title="VPN Guide for China"
        intro="If you are heading to China and rely on Google Maps, WhatsApp, Instagram, or Gmail, you need a VPN. The Great Firewall blocks most Western apps and websites, and once you are inside China, you can not even visit VPN websites to download one. Set it up before you leave."
        hook="You need a VPN in China. The internet is censored — Google, WhatsApp, Instagram, and YouTube are all blocked. Download and install BEFORE you land, because you can not access VPN websites from inside China."
        quickInfo="Free plans available · iOS + Android + Desktop · Must download before arrival"
        relatedArticles={[
          { title: 'How to Get Internet in China', description: 'eSIM, physical SIM, and Wi-Fi options for staying connected.', href: '/china-basics/how-to-get-internet' },
          { title: 'Censorship in China', description: 'What is blocked and how to prepare for the Great Firewall.', href: '/china-basics/how-china-differs/censorship' },
          { title: 'Airalo eSIM Guide', description: 'Set up data before you land with an Airalo eSIM.', href: '/china-basics/how-to-get-internet/airalo-esim' },
        ]}
        related={[
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
          { label: 'eSIM Guide', href: '/china-basics/how-to-get-internet/esim' },
          { label: 'Communication App', href: '/china-basics/what-apps-to-use/communication' },
        ]}
      >
        {
          <>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Why you need a VPN in China</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                China blocks most of the internet you use every day. Google, Gmail, Google Maps, YouTube, Instagram, WhatsApp, Facebook, Twitter, and even Wikipedia are inaccessible without a VPN. I have been to China four times, and every single time I have watched other travelers panic at the airport because nothing on their phone works anymore.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                It is not just social media. If you use Google Maps for navigation, you will be lost without a VPN — literally. Your WhatsApp messages to family back home will not go through. Work emails on Gmail will not sync. You will try to look up a restaurant review and hit a dead wall. A VPN is not a nice-to-have in China; it is the difference between a smooth trip and a frustrating one.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Here is the catch: not every VPN works in China. The Great Firewall actively detects and blocks VPN traffic, and cheap or free VPNs are usually the first to go down. You need a provider that invests in staying ahead of the blocks. I will list the ones that have worked reliably for me and other travelers below.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Best VPNs for China</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                These four VPNs have the best track record for working inside China. Prices and reliability change over time — the Great Firewall evolves constantly — so what works today might need a protocol tweak tomorrow. All four offer money-back guarantees, so you can test risk-free.
              </p>

              <div className="mt-6 space-y-4">
                {vpnProviders.map((vpn) => (
                  <div key={vpn.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${vpn.color} text-sm font-bold text-white`}>
                        {vpn.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-extrabold text-slate-900">{vpn.name}</h3>
                          {vpn.badge && (
                            <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${vpn.badgeColor}`}>
                              {vpn.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                      {vpn.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                      <span className="font-bold text-slate-800">{vpn.price}</span>
                      <span className="flex items-center gap-1">{vpn.platforms}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm italic text-slate-500">
                VPN reliability in China changes constantly. Providers that work today may face blocks tomorrow. That is why having a backup VPN installed is smart.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-900">How to set up your VPN before you travel</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Download your VPN app before you leave home. Once you are in China, VPN websites are blocked — you will not be able to sign up or download the installer. Install the app on every device you plan to use: your phone, your laptop, and your tablet if you have one.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                After installing, log in and test the connection while you still have uncensored internet. Make sure you can connect to a server, browse a blocked site like Google, and get decent speeds. Screenshot the login credentials and any support contact info, and save them somewhere accessible offline. Write down the server locations that worked best — Japan, Singapore, and Hong Kong are usually the fastest from mainland China.
              </p>

            </div>



            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Alternatives if you can not get a VPN working</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Another option is roaming with your home SIM card. If your carrier offers international roaming in China, your traffic routes through your home network and bypasses the Great Firewall entirely. The downside is cost — roaming data is expensive, and speeds can be slow. It is useful as an emergency backup to check email or send a WhatsApp message, but not for everyday browsing.
              </p>
            </div>
          </>
        }
      </GuideArticlePage>

      <div className="max-w-4xl mx-auto px-4 mt-8">
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
