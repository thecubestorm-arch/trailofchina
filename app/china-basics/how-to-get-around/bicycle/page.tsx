import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Shared Bikes in China | Trail of China',
  description: 'Guide to using shared bicycles in Chinese cities. Mobike, HelloBike, and tips.',
};

export default function BicyclePage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚲"
        heroImage={{ src: 'https://picsum.photos/seed/china-shared-bikes/800/400', alt: 'Shared Bicycles in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Bicycle' },
        ]}
        category="How to Get Around"
        title="Shared Bicycles"
        intro="Shared bikes are everywhere in Chinese cities. They're cheap, convenient for short trips, and a fun way to explore neighborhoods at your own pace."
        setupSteps={[
          { title: 'Download or open app', description: 'Download bike app or use within Alipay/WeChat' },
          { title: 'Scan QR code', description: 'Scan QR code on bike to unlock' },
          { title: 'Ride to destination', description: 'Enjoy your ride through the city' },
          { title: 'Park and lock', description: 'Park in designated area and lock manually' },
          { title: 'Payment', description: 'Payment automatic from linked account' },
        ]}
        proTips={[
          'Check bike condition before unlocking (tires, brakes)',
          'Use bikes for distances 1-3km',
          'Great for exploring hutongs (old neighborhoods)',
          'Avoid during rush hour — dangerous traffic',
          'Download multiple apps — not all bikes work with one',
        ]}
        related={[
          { label: 'Metro & Subway', href: '/china-basics/how-to-get-around/metro-subway' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: 'Metro & Subway', description: 'City subway systems across China.', href: '/china-basics/how-to-get-around/metro-subway' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'major-brands', title: 'Major Bike Brands' },
          { id: 'how-to-use', title: 'How to Use' },
          { id: 'pricing', title: 'Pricing' },
          { id: 'safety', title: 'Safety First' },
        ]}
      >
        {/* Major Bike Brands */}
        <div id="major-brands" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Major Bike Brands</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Meituan (美团):</strong> Yellow bikes, most common, app required</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>HelloBike (哈啰):</strong> Blue bikes, Alipay integration</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>DiDi Bike:</strong> Green bikes, DiDi app</li>
          </ul>
        </div>

        {/* Pricing */}
        <div id="pricing" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Pricing</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Usually ¥1.5-2 for 30 minutes</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Monthly passes available (¥10-20)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Deposit usually required (refundable)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Overage fees for long rides</li>
          </ul>
        </div>

        {/* Safety */}
        <div id="safety" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Safety First</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Traffic is chaotic — ride defensively</li>
            <li className="text-sm leading-relaxed md:text-base">• Stay in bike lanes where available</li>
            <li className="text-sm leading-relaxed md:text-base">• No helmets provided — ride carefully</li>
            <li className="text-sm leading-relaxed md:text-base">• Watch for cars turning right on red</li>
            <li className="text-sm leading-relaxed md:text-base">• Don't ride on sidewalks (technically illegal)</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}