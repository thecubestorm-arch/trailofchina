import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import ToursCTA from '@/components/ToursCTA'

export const metadata: Metadata = {
  title: 'What to Do in Shenzhen',
  description: 'Top attractions in Shenzhen: Huaqiangbei, Ping An Finance Centre, Dafen Oil Painting Village, OCT Loft, and more.',
  openGraph: {
    title: 'What to Do in Shenzhen - Trail of China',
    description: 'Huaqiangbei, Dafen village, and top Shenzhen attractions.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'What to Do in Shenzhen - Trail of China' }],
  },
};

export default function ShenzhenWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shenzhen', href: '/destinations/shenzhen' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">What to Do in Shenzhen</h1>
        </div>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shenzhen isn&apos;t about ancient temples — it&apos;s about the future being built right now. 
            The world&apos;s largest electronics market, a village that produces 60% of all oil paintings, 
            China&apos;s second-tallest building, and an art district in a former factory. Here are the 
            things worth your time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>
          
          <div className="space-y-4">
            <Link href="/destinations/shenzhen/what-to-do/huaqiangbei" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Huaqiangbei (华强北) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                The world&apos;s largest electronics market — a 1 km stretch of multistory malls selling every component, 
                gadget, and drone imaginable. If it has a circuit board, Huaqiangbei sells it.
              </p>
              <p className="text-sm text-[#64748b]">🕐 10:00–21:00 | 💰 Free to browse | 📍 Metro: Huaqiang Road (Line 1/2/3/7)</p>
            </Link>

            <Link href="/destinations/shenzhen/what-to-do/ping-an-finance-centre" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Ping An Finance Centre (平安金融中心) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                China&apos;s second-tallest building at 599 meters. The observation deck on the 116th floor gives you 
                360° views across Shenzhen and into Hong Kong on clear days.
              </p>
              <p className="text-sm text-[#64748b]">🕐 10:00–21:00 | 💰 ¥200 | 📍 Metro: Shopping Park (Line 1)</p>
            </Link>

            <Link href="/destinations/shenzhen/what-to-do/dafen-oil-painting-village" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Dafen Oil Painting Village (大芬油画村) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A village that produces 5 million oil paintings a year — many sold on Amazon as &quot;hand-painted originals.&quot; 
                Walk through narrow alleys where artists copy Van Gogh and paint original work side by side.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Always open | 💰 Free | 📍 Metro: Dafen (Line 3)</p>
            </Link>

            <Link href="/destinations/shenzhen/what-to-do/oct-loft" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">4. OCT Loft (华侨城创意文化园) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Shenzhen&apos;s art district — a former factory complex turned creative hub with galleries, design shops, 
                craft coffee, and street art. The closest thing Shenzhen has to 798 Art District in Beijing.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Always open | 💰 Free | 📍 Metro: Qiaocheng East (Line 1)</p>
            </Link>

            <Link href="/destinations/shenzhen/what-to-do/lianhuashan-park" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">5. Lianhuashan Park (莲花山公园) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                Climb to the bronze Deng Xiaoping statue for the best free skyline view in Shenzhen — 
                the city he put on the map. The park itself is a locals&apos; favorite for morning tai chi and kite flying.
              </p>
              <p className="text-sm text-[#64748b]">🕐 6:00–22:30 | 💰 Free | 📍 Metro: Lianhua West (Line 2/9)</p>
            </Link>

            <Link href="/destinations/shenzhen/what-to-do/window-of-the-world" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">6. Window of the World (世界之窗) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-2">
                A theme park with 130 miniature world landmarks — a 1/3 scale Eiffel Tower, Taj Mahal, 
                and Grand Canyon. Some find it cheesy, some love it. It&apos;s undeniably unique.
              </p>
              <p className="text-sm text-[#64748b]">🕐 9:00–22:30 | 💰 ¥220 | 📍 Metro: Window of the World (Line 1/2)</p>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Want something more authentic?</h2>
          <p className="text-gray-700 mb-3">
            Explore Shenzhen with locals — electronics tours, art workshops in Dafen, and food crawls through hidden 
            neighborhoods that tourists never find.
          </p>
          <Link href="/destinations/shenzhen/local-tips" className="inline-block text-[#af5d32] font-medium hover:underline">
            Local Tips for Shenzhen →
          </Link>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Shenzhen Trip"
            description="Our step-by-step itinerary takes the guesswork out of your first visit."
            buttonText="See Shenzhen itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Shenzhen" />
        <RelatedArticles articles={[
          {title: 'Huaqiangbei', description: 'The world\'s largest electronics market.', href: '/destinations/shenzhen/what-to-do/huaqiangbei'},
          {title: 'Dafen Oil Painting Village', description: 'Where 60% of the world\'s oil paintings are made.', href: '/destinations/shenzhen/what-to-do/dafen-oil-painting-village'},
          {title: 'Where to Eat in Shenzhen', description: 'Dim sum, Hakka food, and street markets.', href: '/destinations/shenzhen/where-to-eat'},
          {title: 'Shenzhen Local Tips', description: 'Border crossings, metro hacks, and more.', href: '/destinations/shenzhen/local-tips'},
        ]} />
      </main>
    </div>
  );
}