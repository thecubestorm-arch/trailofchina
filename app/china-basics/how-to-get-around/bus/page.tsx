import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Buses in China | Trail of China',
  description:
    'Guide to using public buses in China. Routes, payment with Alipay/WeChat, bus etiquette, and when buses are the best option.',
};

export default function BusPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Public Buses</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Buses are the cheapest way to get around but can be confusing for tourists. 
            They're best used when you know the route or have a local to guide you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Pay</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Transport card:</strong> Tap when boarding</li>
            <li><strong>Alipay/WeChat:</strong> QR code scan</li>
            <li><strong>Cash:</strong> Exact change only (coins or small bills)</li>
            <li><strong>Price:</strong> Usually ¥2-4 per ride</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Finding Routes</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Baidu Maps shows bus routes with real-time info</li>
            <li>Bus stop signs show routes in Chinese</li>
            <li>Major stops have English announcements</li>
            <li>Apps like "Bus" or "Moovit" help with planning</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bus Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Board through front door, exit through back</li>
            <li>Give up seat for elderly, pregnant, disabled</li>
            <li>No smoking or eating</li>
            <li>Keep voice down</li>
            <li>Can get extremely crowded during rush hour</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 When to Use Buses</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Airport express buses are reliable and cheap</li>
            <li>• Tourist shuttle buses to major attractions</li>
            <li>• When metro doesn't reach your destination</li>
            <li>• For scenic routes (some cities have tour buses)</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Challenges</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Routes and stops are mostly in Chinese only</li>
            <li>• Traffic can make buses slow</li>
            <li>• Crowded during rush hour</li>
            <li>• Last buses often end early (20:00-22:00)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
