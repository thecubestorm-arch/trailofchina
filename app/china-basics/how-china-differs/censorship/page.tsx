import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import ContextualCTA from '@/components/ContextualCTA';

export const metadata: Metadata = {
  title: 'Censorship & The Great Firewall | Trail of China',
  description:
    'Understanding the Great Firewall of China: blocked websites, VPNs, and how to stay connected. Google, WhatsApp, Instagram blocked in China.',
};

export default function CensorshipPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🛡️"
        heroImage={{ src: 'https://picsum.photos/seed/great-firewall-china/800/400', alt: 'Great Firewall of China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Censorship' },
        ]}
        category="How China Differs"
        title="Censorship & The Great Firewall"
        intro={`China operates the world's most sophisticated internet censorship system, commonly known as the "Great Firewall." Understanding what this means for you as a traveler is essential.`}
        proTips={[
          'Install multiple VPNs as backup (they occasionally get blocked)',
          'Screenshot important info before you go',
          'Use offline maps as backup',
          'Consider getting a Hong Kong SIM card (less restrictions)',
        ]}
        related={[
          { label: 'VPN Guide', href: '/china-basics/what-apps-to-use/vpn' },
          { label: 'How to Get Internet', href: '/china-basics/how-to-get-internet' },
        ]}
        relatedArticles={[
          { title: 'VPN Guide', description: 'Set up a VPN before you arrive in China.', href: '/china-basics/what-apps-to-use/vpn' },
          { title: 'How to Get Internet', description: 'eSIM and SIM options for staying connected.', href: '/china-basics/how-to-get-internet' },
        ]}
        tocItems={[
          { id: 'blocked-websites', title: 'Blocked Websites & Apps' },
          { id: 'what-works', title: 'What DOES Work' },
          { id: 'how-to-bypass', title: 'How to Bypass (VPN)' },
          { id: 'legal-notice', title: 'Legal Notice' },
        ]}
      >
        {/* Blocked Websites & Apps */}
        <div id="blocked-websites" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Blocked Websites & Apps</h2>
          <p className="text-slate-700 mt-4 mb-6">These popular services do NOT work in China without a <a href="/china-basics/what-apps-to-use/vpn" className="text-china-red underline hover:text-red-700">VPN</a>:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">Google</p>
              <p className="text-sm text-slate-500">Search, Maps, Gmail</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">Meta</p>
              <p className="text-sm text-slate-500">Facebook, Instagram, WhatsApp</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">X/Twitter</p>
              <p className="text-sm text-slate-500">Social media</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">YouTube</p>
              <p className="text-sm text-slate-500">Video streaming</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">Netflix</p>
              <p className="text-sm text-slate-500">Streaming</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">ChatGPT</p>
              <p className="text-sm text-slate-500">AI assistant</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">Dropbox</p>
              <p className="text-sm text-slate-500">Cloud storage</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-slate-900">BBC/CNN</p>
              <p className="text-sm text-slate-500">News sites</p>
            </div>
          </div>
        </div>

        {/* What DOES Work */}
        <div id="what-works" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">What DOES Work</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>WeChat</strong> — China's everything app (messaging, payments, services)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Baidu Maps</strong> — Navigation and local search</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Bilibili</strong> — Chinese YouTube equivalent</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Douyin</strong> — Chinese TikTok</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Weibo</strong> — Chinese Twitter</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Alipay / WeChat Pay</strong> — Mobile payments</li>
          </ul>
        </div>

        {/* How to Bypass (VPN) */}
        <div id="how-to-bypass" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Bypass (VPN)</h2>
          <p className="text-slate-700 mt-4 mb-4">A <a href="/china-basics/what-apps-to-use/vpn" className="text-china-red underline hover:text-red-700">VPN</a> is essential for accessing blocked services. See our <a href="/china-basics/what-apps-to-use/vpn" className="text-china-red underline hover:text-red-700">VPN guide</a> for setup instructions and recommended providers:</p>
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Recommended VPNs for China:</h3>
            <ul className="text-slate-700 space-y-2">
              <li className="text-sm leading-relaxed md:text-base">• <strong>ExpressVPN</strong> — Most reliable, works consistently</li>
              <li className="text-sm leading-relaxed md:text-base">• <strong>NordVPN</strong> — Good speeds, easy to use</li>
              <li className="text-sm leading-relaxed md:text-base">• <strong>Astrill</strong> — Popular among expats</li>
            </ul>
            <p className="text-sm text-slate-500 mt-4 italic">Important: <a href="/china-basics/what-apps-to-use/vpn" className="text-china-red underline hover:text-red-700">Download and set up your VPN</a> BEFORE arriving in China.</p>
          </div>
        </div>

        {/* Legal Notice */}
        <div id="legal-notice" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Legal Notice</h3>
          <p className="text-sm leading-relaxed text-red-800 md:text-base">
            While many travelers use VPNs, they exist in a legal gray area in China. 
            Personal use is generally tolerated, but selling VPN services is illegal. 
            Never discuss VPN usage openly in public or with officials.
          </p>
        </div>
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
  );
}