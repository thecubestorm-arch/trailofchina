import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Shared Bikes in China | Trail of China',
  description: 'Guide to using shared bicycles in Chinese cities. Mobike, HelloBike, and tips.',
};

export default function BicyclePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'Bicycle'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Shared Bicycles</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shared bikes are everywhere in Chinese cities. They're cheap, convenient for short trips, 
            and a fun way to explore neighborhoods at your own pace.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Major Bike Brands</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Meituan (美团):</strong> Yellow bikes, most common, app required</li>
            <li><strong>HelloBike (哈啰):</strong> Blue bikes, Alipay integration</li>
            <li><strong>DiDi Bike:</strong> Green bikes, DiDi app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Download bike app or use within Alipay/WeChat</li>
            <li>Scan QR code on bike to unlock</li>
            <li>Ride to destination</li>
            <li>Park in designated area and lock manually</li>
            <li>Payment automatic from linked account</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Usually ¥1.5-2 for 30 minutes</li>
            <li>Monthly passes available (¥10-20)</li>
            <li>Deposit usually required (refundable)</li>
            <li>Overage fees for long rides</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Check bike condition before unlocking (tires, brakes)</li>
            <li>• Use bikes for distances 1-3km</li>
            <li>• Great for exploring hutongs (old neighborhoods)</li>
            <li>• Avoid during rush hour - dangerous traffic</li>
            <li>• Download multiple apps - not all bikes work with one</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Safety First</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Traffic is chaotic - ride defensively</li>
            <li>• Stay in bike lanes where available</li>
            <li>• No helmets provided - ride carefully</li>
            <li>• Watch for cars turning right on red</li>
            <li>• Don't ride on sidewalks (technically illegal)</li>
          </ul>
        </div>
              <RelatedArticles articles={[{title:'Metro & Subway',description:'City subway systems across China.',href:'/china-basics/how-to-get-around/metro-subway'},{title:'How to Get Around',description:'All transportation options in China.',href:'/china-basics/how-to-get-around'}]} />
      </main>
    </div>
  );
}
