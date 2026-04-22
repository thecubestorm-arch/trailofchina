import { Metadata } from 'next';
import ContextualCTA from '@/components/ContextualCTA';

export const metadata: Metadata = {
  title: 'Censorship & The Great Firewall | Trail of China',
  description: 'Understanding the Great Firewall of China: blocked websites, VPNs, and how to stay connected.',
};

export default function CensorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Censorship & The Great Firewall</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China operates the world's most sophisticated internet censorship system, commonly known as the "Great Firewall." 
            Understanding what this means for you as a traveler is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Blocked Websites & Apps</h2>
          <p className="text-gray-700 mb-4">These popular services do NOT work in China without a <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN</a>:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">Google</p>
              <p className="text-sm text-gray-600">Search, Maps, Gmail</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">Meta</p>
              <p className="text-sm text-gray-600">Facebook, Instagram, WhatsApp</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">X/Twitter</p>
              <p className="text-sm text-gray-600">Social media</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">YouTube</p>
              <p className="text-sm text-gray-600">Video streaming</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">Netflix</p>
              <p className="text-sm text-gray-600">Streaming</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">ChatGPT</p>
              <p className="text-sm text-gray-600">AI assistant</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">Dropbox</p>
              <p className="text-sm text-gray-600">Cloud storage</p>
            </div>
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 text-center">
              <p className="font-semibold">BBC/CNN</p>
              <p className="text-sm text-gray-600">News sites</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What DOES Work</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>WeChat</strong> - China's everything app (messaging, payments, services)</li>
            <li><strong>Baidu Maps</strong> - Navigation and local search</li>
            <li><strong>Bilibili</strong> - Chinese YouTube equivalent</li>
            <li><strong>Douyin</strong> - Chinese TikTok</li>
            <li><strong>Weibo</strong> - Chinese Twitter</li>
            <li><strong>Alipay / WeChat Pay</strong> - Mobile payments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Bypass (VPN)</h2>
          <p className="text-gray-700 mb-4">A <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN</a> is essential for accessing blocked services. See our <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">VPN guide</a> for setup instructions and recommended providers:</p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Recommended VPNs for China:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>ExpressVPN</strong> - Most reliable, works consistently</li>
              <li>• <strong>NordVPN</strong> - Good speeds, easy to use</li>
              <li>• <strong>Astrill</strong> - Popular among expats</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">Important: <a href="/china-basics/what-apps-to-use/vpn" className="text-[#af5d32] underline hover:text-[#8f431c]">Download and set up your VPN</a> BEFORE arriving in China.</p>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Install multiple VPNs as backup (they occasionally get blocked)</li>
            <li>• Screenshot important info before you go</li>
            <li>• Use offline maps as backup</li>
            <li>• Consider getting a Hong Kong SIM card (less restrictions)</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Legal Notice</h3>
          <p className="text-[var(--foreground)]">
            While many travelers use VPNs, they exist in a legal gray area in China. 
            Personal use is generally tolerated, but selling VPN services is illegal. 
            Never discuss VPN usage openly in public or with officials.
          </p>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🔒"
            title="Bypass the Great Firewall"
            description="Google, WhatsApp, Instagram — all blocked in China. A VPN keeps you connected."
            buttonText="Get a VPN for China →"
            buttonHref="/china-basics/what-apps-to-use/vpn"
            variant="primary"
          />
        </div>
      </main>
    </div>
  );
}
