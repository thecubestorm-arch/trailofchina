import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metro & Subway in China | Trail of China',
  description:
    'Complete guide to using the metro and subway systems in Chinese cities. Shanghai, Beijing, Guangzhou, and more. Payment, etiquette, and tips.',
};

export default function MetroPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Metro & Subway</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China's metro systems are modern, efficient, and often the best way to navigate 
            major cities. Shanghai and Beijing have some of the world's longest networks, 
            with stations near every major attraction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Major Metro Systems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Shanghai:</strong> World's longest network, 20+ lines</li>
            <li><strong>Beijing:</strong> Second longest, covers all major sites</li>
            <li><strong>Guangzhou:</strong> Extensive network including Foshan</li>
            <li><strong>Shenzhen:</strong> Modern, easy to navigate</li>
            <li><strong>Xi'an, Chengdu, Hangzhou:</strong> Growing networks</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Pay</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Metro Card:</strong> Rechargeable card, slight discount</li>
            <li><strong>Alipay/WeChat QR:</strong> Scan at gates, most convenient</li>
            <li><strong>Single tickets:</strong> Buy at machines (Chinese interface mostly)</li>
            <li><strong>Phone NFC:</strong> Apple Pay/Google Pay work in some cities</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Metro Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Stand right, walk left on escalators</li>
            <li>Let passengers exit before entering</li>
            <li>Priority seating for elderly, pregnant, disabled</li>
            <li>No eating or drinking on trains</li>
            <li>Security check required at every station (like airports)</li>
            <li>Baggage x-ray for all bags</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Download city metro apps for offline maps</li>
            <li>• Avoid rush hour (7-9am, 5-7pm) - extremely crowded</li>
            <li>• Last trains around 22:00-23:00 depending on line</li>
            <li>• English signage is standard in major cities</li>
            <li>• Station announcements in Chinese and English</li>
            <li>• Free metro maps available at tourist info centers</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Things to Know</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Some stations have LONG walks between lines (10+ minutes)</li>
            <li>• Stations can have multiple exits - wrong exit = big detour</li>
            <li>• Check exit numbers on maps before you arrive</li>
            <li>• Air conditioning is strong - bring a layer</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
