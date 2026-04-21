import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get Around in China | Trail of China',
  description: 'Complete guide to transportation in China: trains, planes, taxis, metro, DiDi, buses, bikes, and car rentals.',
};

export default function HowToGetAroundHub() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">How to Get Around</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China has one of the world's best transportation networks. From bullet trains 
            that reach 350 km/h to ubiquitous ride-hailing apps, getting around is efficient 
            and surprisingly affordable.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/china-basics/how-to-get-around/train" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚄</div>
              <h2 className="text-2xl font-semibold mb-2">High-Speed Train</h2>
              <p className="text-gray-600">Fast, comfortable, and the best way to travel between cities.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/plane" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✈️</div>
              <h2 className="text-2xl font-semibold mb-2">Domestic Flights</h2>
              <p className="text-gray-600">Best for long distances and remote destinations.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/taxi" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚕</div>
              <h2 className="text-2xl font-semibold mb-2">Traditional Taxis</h2>
              <p className="text-gray-600">Still reliable, though apps are more convenient.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/metro-subway" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚇</div>
              <h2 className="text-2xl font-semibold mb-2">Metro & Subway</h2>
              <p className="text-gray-600">Fast, cheap, and avoids traffic in major cities.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/didi" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-2xl font-semibold mb-2">DiDi Ride-Hailing</h2>
              <p className="text-gray-600">China's Uber - essential app for getting around.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/bus" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚌</div>
              <h2 className="text-2xl font-semibold mb-2">Public Buses</h2>
              <p className="text-gray-600">Cheapest option, but can be confusing for tourists.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/bicycle" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚲</div>
              <h2 className="text-2xl font-semibold mb-2">Shared Bicycles</h2>
              <p className="text-gray-600">Cheap and fun for short trips in cities.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>

          <Link href="/china-basics/how-to-get-around/car" className="block">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🚗</div>
              <h2 className="text-2xl font-semibold mb-2">Car Rental</h2>
              <p className="text-gray-600">For remote areas and maximum flexibility.</p>
              <span className="text-[var(--accent)] font-medium mt-4 inline-block">Learn more →</span>
            </div>
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Recommendation</h3>
          <p className="text-amber-900">
            <strong>For city-to-city:</strong> High-speed train (G-trains)<br/>
            <strong>For within cities:</strong> Metro + DiDi combo<br/>
            <strong>For long distances:</strong> Domestic flights<br/>
            <strong>For budget travel:</strong> Overnight trains and buses
          </p>
        </div>
      </main>
    </div>
  );
}
