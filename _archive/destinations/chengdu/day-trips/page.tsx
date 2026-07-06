import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Best Day Trips from Chengdu | Leshan Buddha, Mount Qingcheng, Dujiangyan Pandas',
  description:
    'Escape Chengdu for a day: the world\'s largest stone Buddha at Leshan, Taoist temples on Mount Qingcheng, and pandas without the crowds at Dujiangyan. Transport guides, ticket prices, and insider tips.',
  openGraph: {
    title: 'Best Day Trips from Chengdu - Trail of China',
    description: 'Escape Chengdu for a day: Leshan Buddha, Mount Qingcheng, and Dujiangyan pandas.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Chengdu - Trail of China' }],
  },
};

export default function ChengduDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Chengdu</h1>
          <Link href="/destinations/chengdu" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Chengdu
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu&apos;s best experiences aren&apos;t all in the city. Within two hours by train, you can stand at the feet of a
            71-meter Buddha carved into a cliff, hike through the misty forests where Taoism was born, or get within arm&apos;s
            reach of giant pandas in a setting that feels nothing like a zoo. Here are the day trips worth the journey.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/chengdu/day-trips/leshan-giant-buddha" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Leshan Giant Buddha (乐山大佛)</h3>
              <p className="text-gray-700 mb-2">
                A 71-meter Buddha carved into a cliff face, with toes taller than most people. The river cruise view will make your
                jaw drop — this is the largest stone Buddha in the world, and it was designed to be seen from the water. Take the
                cruise first, then climb the stairs to see the craftsmanship up close.
              </p>
              <p className="text-sm text-[#64748b]">🕐 7:30–18:30 | 💰 ¥80 + ¥70 cruise | 🚄 1h by high-speed train | Best for: First-timers, photography</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/day-trips/mount-qingcheng" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Mount Qingcheng (青城山)</h3>
              <p className="text-gray-700 mb-2">
                Where Taoism was born — misty forests, hidden temples, and a tranquility that feels 2,000 years away from
                Chengdu&apos;s spicy chaos. Front Mountain for culture (temples, half day), Back Mountain for hiking (waterfalls,
                full day). The most peaceful place within an hour of the city.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:30 | 💰 ¥80 (Front) / ¥20 (Back) | 🚄 30 min by train | Best for: Nature lovers, hikers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/chengdu/day-trips/dujiangyan-panda-valley" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Dujiangyan Panda Valley (都江堰熊猫谷)</h3>
              <p className="text-gray-700 mb-2">
                Skip the crowded Chengdu panda base — Dujiangyan has fewer tourists, more natural enclosures, and a volunteer
                program that puts you inches from the pandas. Plus, the 2,200-year-old Dujiangyan Irrigation System next door
                is a UNESCO masterpiece that most foreign visitors never see.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:00–17:00 | 💰 ¥58 pandas / ¥80 irrigation | 🚄 30 min by train | Best for: Panda lovers, history buffs</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Combining Day Trips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Dujiangyan Pandas + Irrigation System:</strong> The natural one-day combo. Start with panda feeding at 8 AM, then walk the Irrigation System from 11 AM. Both are in Dujiangyan, 15 minutes apart by taxi. The high-speed train gets you back to Chengdu by 4 PM.</li>
            <li><strong>Mount Qingcheng + Dujiangyan Irrigation System:</strong> Same train line, different stops. Morning at Qingcheng (Front Mountain for a half day), afternoon at the Irrigation System. Ambitious but doable if you start early.</li>
            <li><strong>Leshan overnight:</strong> Take the 7 AM train to Leshan, spend the full day at the Buddha and old town, stay the night, and catch the morning train to Mount Emei the next day. Emeishan deserves its own day — don&apos;t try to squeeze it in.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Chengdu Trip"
            description="See our curated itinerary with panda timing, temple visits, and day trips all mapped out."
            buttonText="See Chengdu itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Chengdu" />
        <RelatedArticles articles={[
          { title: 'Giant Panda Base', description: "Chengdu's most famous residents — arrive early, stay for the red pandas.", href: '/destinations/chengdu/what-to-do/giant-panda-base' },
          { title: 'What to Do in Chengdu', description: 'All of Chengdu\'s top attractions and hidden gems.', href: '/destinations/chengdu/what-to-do' },
          { title: 'Where to Eat in Chengdu', description: 'Hotpot, mapo tofu, and the best Sichuan dishes.', href: '/destinations/chengdu/where-to-eat' },
          { title: 'Chengdu Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/chengdu/local-tips' },
        ]} />
      </main>
    </div>
  );
}