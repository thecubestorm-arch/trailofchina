import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Physical SIM Cards in China | Trail of China',
  description: 'Complete guide to buying physical SIM cards at Chinese airports. Best carriers, pricing, requirements, and setup.',
};

export default function PhysicalSimPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Internet',href:'/china-basics/how-to-get-internet'},{label:'Physical SIM'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Physical SIM Cards in China</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Physical SIM cards offer the best value and fastest speeds in China. 
            You can buy them at any major airport from official carrier stores.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Where to Buy</h2>
          <p className="text-gray-700 mb-4">All major Chinese airports have official carrier stores:</p>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Beijing (PEK/PKX):</strong> International arrivals hall</li>
            <li><strong>Shanghai (PVG/SHA):</strong> Terminal 1 & 2 arrival areas</li>
            <li><strong>Guangzhou (CAN):</strong> Terminal 2, after customs</li>
          </ul>
          <p className="text-gray-600 mt-4 italic">Look for official stores: 中国移动 (China Mobile), 中国联通 (China Unicom), or 中国电信 (China Telecom)</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Carriers Compared</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">China Mobile</h3>
              <p className="text-sm text-gray-600">Best coverage, slightly pricier</p>
              <p className="text-green-600 font-medium mt-2">¥100-150/month</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">China Unicom</h3>
              <p className="text-sm text-gray-600">Best for foreigners, good value</p>
              <p className="text-green-600 font-medium mt-2">¥80-120/month</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">China Telecom</h3>
              <p className="text-sm text-gray-600">Good coverage, competitive prices</p>
              <p className="text-green-600 font-medium mt-2">¥80-130/month</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What You Need</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Passport:</strong> Required for registration (mandatory by law)</li>
            <li><strong>Unlocked phone:</strong> Must accept foreign SIMs</li>
            <li><strong>Cash or card:</strong> WeChat Pay, Alipay, or cash accepted</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Find official carrier store after customs</li>
            <li>Show passport and say "SIM card" + point to plan</li>
            <li>Staff will install and activate it for you</li>
            <li>Test internet before leaving the store</li>
            <li>Keep receipt for any issues</li>
          </ol>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• China Unicom is most foreigner-friendly</li>
            <li>• Ask for "tourism SIM" (旅游卡) for short stays</li>
            <li>• Keep your home SIM in your luggage (not phone)</li>
            <li>• Download offline maps before swapping SIMs</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Scam Alert</h3>
          <p className="text-[var(--foreground)]">Never buy from individuals approaching you at the airport. Only buy from official carrier stores with proper signage. Scammers sell used or fake cards.</p>
        </div>
              <RelatedArticles articles={[{title:'eSIM Guide',description:'Compare eSIM options for easier setup.',href:'/china-basics/how-to-get-internet/esim'},{title:'How to Get Internet',description:'All connectivity options for China travelers.',href:'/china-basics/how-to-get-internet'}]} />
      </main>
    </div>
  );
}
