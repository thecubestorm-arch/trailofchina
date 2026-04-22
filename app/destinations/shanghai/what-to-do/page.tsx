import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'What to Do in Shanghai | Trail of China',
  description: 'Top attractions in Shanghai: The Bund, Yu Garden, French Concession, and hidden gems.',
};

export default function ShanghaiWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'What to Do' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">What to Do in Shanghai</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai offers a perfect blend of history and hyper-modernity. Here are the must-see 
            attractions and experiences that define this incredible city.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>
          
          <div className="space-y-4">
            <Link href="/destinations/shanghai/what-to-do/bund" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">1. The Bund (外滩) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Shanghai&apos;s iconic waterfront promenade lined with colonial-era buildings. 
                Best visited at night when Pudong&apos;s skyline lights up across the river.
              </p>
              <p className="text-sm text-gray-600">🕐 Evening is best | 💰 Free | 📍 Metro: East Nanjing Road</p>
            </Link>

            <Link href="/destinations/shanghai/what-to-do/yu-garden" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">2. Yu Garden (豫园) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A 400-year-old classical Chinese garden with pavilions, rockeries, and ponds. 
                Surrounded by a bustling bazaar perfect for souvenirs.
              </p>
              <p className="text-sm text-gray-600">🕐 8:30-17:00 | 💰 ¥40 | 📍 Old City</p>
            </Link>

            <Link href="/destinations/shanghai/what-to-do/french-concession" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">3. French Concession <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Tree-lined streets with European architecture, boutiques, and cafes. 
                Perfect for a leisurely afternoon walk.
              </p>
              <p className="text-sm text-gray-600">🕐 Anytime | 💰 Free | 📍 Metro: South Shaanxi Road</p>
            </Link>

            <Link href="/destinations/shanghai/what-to-do/shanghai-tower" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">4. Shanghai Tower Observation Deck <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                The world&apos;s second-tallest building with breathtaking 360° views from 546 meters. 
                The elevator reaches 74 km/h.
              </p>
              <p className="text-sm text-gray-600">🕐 8:30-22:00 | 💰 ¥180 | 📍 Lujiazui</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tianzifang:</strong> Artsy alleyways with galleries and cafes</li>
            <li><strong>Propaganda Poster Art Centre:</strong> Cold War-era art collection</li>
            <li><strong>Jade Buddha Temple:</strong> Peaceful temple with priceless statues</li>
            <li><strong>Shanghai Museum:</strong> Free entry, incredible ancient Chinese art</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book Shanghai Tower tickets online to skip lines</li>
            <li>• Visit Yu Garden early morning to avoid crowds</li>
            <li>• Take the ferry across the river (¥2) for cheap skyline views</li>
            <li>• The Bund gets crowded on weekends - visit on weekdays</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tourist Traps to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• &quot;Tea ceremony&quot; invitations from strangers (expensive scam)</li>
            <li>• Overpriced boats on the river - take the ferry instead</li>
            <li>• Fake antiques in Yu Garden bazaar</li>
          </ul>
        </div>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Shanghai Trip"
            description="Our step-by-step itinerary takes the guesswork out of your first visit."
            buttonText="See Shanghai itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
      </main>
    </div>
  );
}