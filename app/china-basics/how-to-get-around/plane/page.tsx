import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domestic Flights in China | Trail of China',
  description:
    'Guide to booking and flying domestic flights in China. Airlines, airports, booking tips, and what to expect at security checks.',
};

export default function PlanePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Domestic Flights</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            For long distances or remote destinations like Tibet and Xinjiang, domestic flights 
            are often the best option. China's airline network is extensive and flights are 
            frequently cheaper than high-speed trains.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Major Airlines</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Air China:</strong> Flag carrier, extensive network, good service</li>
            <li><strong>China Eastern:</strong> Based in Shanghai, competitive prices</li>
            <li><strong>China Southern:</strong> Largest fleet, good for southern routes</li>
            <li><strong>Hainan Airlines:</strong> Premium service, often rated best in China</li>
            <li><strong>Spring Airlines:</strong> Budget option, basic but cheap</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Book</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Trip.com:</strong> English interface, foreigner-friendly</li>
            <li><strong>Ctrip:</strong> Chinese app with better prices (need Chinese skills)</li>
            <li><strong>Airline websites:</strong> Direct booking often cheapest</li>
            <li><strong>Travel agents:</strong> For complex itineraries</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">At the Airport</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Arrive 2 hours early for domestic flights</li>
            <li>Security is strict - similar to international</li>
            <li>Power banks must be carried on, not checked</li>
            <li>Keep passport handy for multiple checks</li>
            <li>Delays are common - download airline app for updates</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book 2-3 weeks ahead for best prices</li>
            <li>• Tuesday/Wednesday flights are usually cheaper</li>
            <li>• Consider bullet trains for routes under 4 hours</li>
            <li>• Join airline loyalty programs for lounge access</li>
            <li>• Shanghai-Beijing flight is only worth it if you live far from train stations</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Common Issues</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Weather delays in winter (smog/fog) and summer (storms)</li>
            <li>• Chinese airlines rarely announce delays in English</li>
            <li>• Airport food is overpriced - eat before you go</li>
            <li>• Some smaller airports are far from city centers</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
