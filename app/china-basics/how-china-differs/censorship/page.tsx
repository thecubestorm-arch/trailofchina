import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Censorship & The Great Firewall | Trail of China',
  description:
    'Understanding the Great Firewall of China: blocked websites, VPNs, and how to stay connected. Google, WhatsApp, Instagram blocked in China.',
}

const tocItems = [
  { id: 'blocked-websites-apps', title: 'Blocked Websites & Apps' },
  { id: 'what-does-work', title: 'What Does Work' },
  { id: 'how-to-bypass', title: 'How to Bypass (VPN)' },
  { id: 'legal-notice', title: 'Legal Notice' },
]

export default function CensorshipPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🔥"
        heroImage={{ src: 'https://picsum.photos/seed/china-great-firewall/800/400', alt: 'The Great Firewall of China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Censorship' },
        ]}
        category="How China Differs"
        title="Censorship & The Great Firewall"
        intro="China operates the world's most sophisticated internet censorship system, commonly known as the &quot;Great Firewall.&quot; Understanding what this means for you as a traveler is essential."
        whyYouNeedThis={[
          'Many popular Western websites and apps do not work in China unless you prepare in advance.',
          'If you rely on Google, WhatsApp, Instagram, or Gmail, you need a backup plan before arrival.',
          'Knowing which local apps still work helps you stay connected even without Western services.',
          'VPN setup has to happen before you enter China, because the download sites are often blocked inside the country.',
        ]}
        quickInfo="Google blocked · WhatsApp blocked · VPN setup before arrival"
        tocItems={tocItems}
        related={[
          { label: 'VPN', href: '/china-basics/what-apps-to-use/vpn' },
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
          { label: 'Communication', href: '/china-basics/what-apps-to-use/communication' },
        ]}
        relatedArticles={[
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
        ]}
      >
        <>
          <div>
            <h2 id="blocked-websites-apps" className="text-2xl font-extrabold text-slate-900">Blocked Websites &amp; Apps</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              These popular services do NOT work in China without a <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN</a>:
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">Google</p>
                <p className="text-sm text-[#64748b]">Search, Maps, Gmail</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">Meta</p>
                <p className="text-sm text-[#64748b]">Facebook, Instagram, WhatsApp</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">X/Twitter</p>
                <p className="text-sm text-[#64748b]">Social media</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">YouTube</p>
                <p className="text-sm text-[#64748b]">Video streaming</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">Netflix</p>
                <p className="text-sm text-[#64748b]">Streaming</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">ChatGPT</p>
                <p className="text-sm text-[#64748b]">AI assistant</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">Dropbox</p>
                <p className="text-sm text-[#64748b]">Cloud storage</p>
              </div>
              <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
                <p className="font-semibold">BBC/CNN</p>
                <p className="text-sm text-[#64748b]">News sites</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 id="what-does-work" className="text-2xl font-extrabold text-slate-900">What DOES Work</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>WeChat</strong> - China&apos;s everything app (messaging, payments, services)</li>
              <li><strong>Baidu Maps</strong> - Navigation and local search</li>
              <li><strong>Bilibili</strong> - Chinese YouTube equivalent</li>
              <li><strong>Douyin</strong> - Chinese TikTok</li>
              <li><strong>Weibo</strong> - Chinese Twitter</li>
              <li><strong>Alipay / WeChat Pay</strong> - Mobile payments</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 id="how-to-bypass" className="text-2xl font-extrabold text-slate-900">How to Bypass (VPN)</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              A <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN</a> is essential for accessing blocked services. See our <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN guide</a> for setup instructions and recommended providers:
            </p>

            <div className="mt-6 rounded-lg bg-[#f5f1ea] p-6">
              <h3 className="font-semibold mb-2">Recommended VPNs for China:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>ExpressVPN</strong> - Most reliable, works consistently</li>
                <li>• <strong>NordVPN</strong> - Good speeds, easy to use</li>
                <li>• <strong>Astrill</strong> - Popular among expats</li>
              </ul>
              <p className="text-sm text-[#64748b] mt-4 italic">Important: <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">Download and set up your VPN</a> BEFORE arriving in China.</p>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-slate-900">Pro Tips</h2>
              <ul className="mt-3 space-y-2">
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Install multiple VPNs as backup (they occasionally get blocked)</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Screenshot important info before you go</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Use offline maps as backup</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Consider getting a Hong Kong SIM card (less restrictions)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 id="legal-notice" className="text-2xl font-extrabold text-slate-900">Legal Notice</h2>
            <div className="mt-4 bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
              <p className="text-[var(--foreground)]">
                While many travelers use VPNs, they exist in a legal gray area in China.
                Personal use is generally tolerated, but selling VPN services is illegal.
                Never discuss VPN usage openly in public or with officials.
              </p>
            </div>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🔒"
          title="Bypass the Great Firewall"
          description="Google, WhatsApp, Instagram — all blocked in China. A VPN keeps you connected."
          buttonText="Get a VPN for China →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="primary"
        />
      </div>
    </div>
  )
}
