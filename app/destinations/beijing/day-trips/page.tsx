import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Best Day Trips from Beijing | Great Wall, Chengde, Ming Tombs & More',
  description:
    'Escape Beijing for a day: Mutianyu Great Wall, Chengde Mountain Resort, Ming Tombs, and Gubei Water Town. Transport guides, ticket prices, and insider tips.',
  openGraph: {
    title: 'Best Day Trips from Beijing - Trail of China',
    description: 'Escape Beijing for a day: Great Wall, Chengde, Ming Tombs, and Gubei Water Town.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Beijing - Trail of China' }],
  },
};

export default function BeijingDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Beijing</h1>
          <Link href="/destinations/beijing" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Beijing
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing&apos;s best experiences aren&apos;t all inside the city. Within two hours, you can walk the Great Wall
            with barely anyone else there, explore an entire imperial summer capital, descend into an emperor&apos;s
            underground tomb, or walk the wall at night under floodlights. Here are the day trips worth the journey.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/beijing/day-trips/mutianyu-great-wall" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Mutianyu Great Wall (慕田峪长城)</h3>
              <p className="text-gray-700 mb-2">
                The wall you&apos;ve seen in photos — fully restored, forested mountains, cable car access, and a toboggan
                slide back down. A fraction of Badaling&apos;s crowds. Walk east toward watchtower 20 for the best
                views and solitude.
              </p>
              <p className="text-sm text-[#64748b]">🕐 7:30–17:30 | 💰 ¥40 + ¥100–140 cable car | 🚐 90 min from Beijing | Best for: First-timers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/day-trips/chengde" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Chengde Mountain Resort (承德避暑山庄)</h3>
              <p className="text-gray-700 mb-2">
                The Qing dynasty&apos;s summer capital — 5.6 km² of imperial gardens, lakes, and a &quot;Little Potala Palace&quot;
                with Tibetan murals. Two hours by bullet train. Almost no foreign tourists visit. Seriously underrated.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:30 | 💰 ¥130 resort + ¥80 temple | 🚄 1h by bullet train | Best for: History lovers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/day-trips/ming-tombs" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Ming Tombs (明十三陵)</h3>
              <p className="text-gray-700 mb-2">
                Walk the Sacred Way between 600-year-old stone guardian statues, then descend 27 metres into Dingling&apos;s
                underground burial palace. Combine with Mutianyu Great Wall for a full imperial-themed day.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:30 | 💰 ¥35–65 per tomb | 🚐 40 min from Beijing | Best for: Half-day + Great Wall combo</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/day-trips/gubei-water-town" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">4. Gubei Water Town & Simatai Great Wall (古北水镇)</h3>
              <p className="text-gray-700 mb-2">
                Recreated canal village with lantern-lit streets and craft workshops — but the real reason to come
                is Simatai, the only Great Wall section you can walk at night under floodlights. Unforgettable.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Town 9:00–22:00, Night wall Jun–Oct | 💰 ¥140 town + ¥40–200 wall | 🚐 2h from Beijing | Best for: Night experience</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Combining Day Trips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Ming Tombs + Mutianyu:</strong> The classic full-day combo. Sacred Way and Dingling in the morning, Great Wall in the afternoon. Allow 8 hours total with a driver.</li>
            <li><strong>Chengde overnight:</strong> Take the 7 AM bullet train, spend the full day at the Mountain Resort and temples, stay one night, return the next morning. More relaxed than a day trip.</li>
            <li><strong>Gubei + Simatai night:</strong> Arrive at Gubei by 3 PM, explore the water town at dusk, dinner, then the Simatai night walk. Return on the 9 PM bus. Perfect for summer weekends.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Beijing Trip"
            description="See our curated 7-day itinerary with everything timed and mapped out."
            buttonText="See Beijing itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Beijing" />
        <RelatedArticles articles={[
          { title: 'Great Wall Guide', description: 'Overview of all Great Wall sections near Beijing.', href: '/destinations/beijing/what-to-do/great-wall' },
          { title: 'What to Do in Beijing', description: 'All of Beijing\'s top attractions and hidden gems.', href: '/destinations/beijing/what-to-do' },
          { title: 'Where to Eat in Beijing', description: 'Peking duck, jianbing, and the best street food.', href: '/destinations/beijing/where-to-eat' },
          { title: 'Beijing Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/beijing/local-tips' },
        ]} />
      </main>
    </div>
  );
}