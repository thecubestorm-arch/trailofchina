import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles';
import ToursCTA from '@/components/ToursCTA';

export const metadata: Metadata = {
  title: 'Best Day Trips from Xi\'an | Mount Hua, Famen Temple, Huaqing Palace & More',
  description:
    'Escape Xi\'an for a day: Mount Hua\'s plank walk, Famen Temple\'s Buddha relic, and Huaqing Palace\'s Tang dynasty hot springs. Transport guides, ticket prices, and insider tips.',
  openGraph: {
    title: 'Best Day Trips from Xi\'an - Trail of China',
    description: 'Escape Xi\'an for a day: Mount Hua, Famen Temple, Huaqing Palace, and the Terracotta Warriors.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Day Trips from Xi\'an - Trail of China' }],
  },
};

export default function XianDayTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Xi\'an', href: '/destinations/xian' },
            { label: 'Day Trips' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Day Trips from Xi&apos;an</h1>
          <Link href="/destinations/xian" className="inline-flex items-center gap-1 mt-2 text-[#af5d32] hover:underline text-sm">
            ← Back to Xi&apos;an
          </Link>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an&apos;s best day trips range from a mountain with plank walks bolted to sheer cliffs to a temple
            hiding a 1,100-year-old relic of the Buddha. Within two hours of the city, you can stand on
            China&apos;s most dangerous hiking trail, walk through the underground palace where monks hid sacred
            treasures, or soak in hot springs built for a Tang emperor&apos;s favorite concubine. Here are the
            day trips worth leaving the city for.
          </p>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <Link href="/destinations/xian/day-trips/huashan" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Mount Hua (华山)</h3>
              <p className="text-gray-700 mb-2">
                China&apos;s most dangerous mountain. The plank walk on South Peak — narrow boards bolted to a
                vertical cliff — is the headline act, but the real experience is walking between five peaks on
                ridgeline paths carved into the rock. Take the West Peak cable car up, walk to South Peak
                (2,154m), then down to North Peak. Do it on a weekday.
              </p>
              <p className="text-sm text-[#64748b]">🕐 24/7 (cable cars 7:00–19:00) | 💰 ¥160 + ¥140 cable car | 🚄 30 min high-speed train | Best for: Thrill-seekers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/day-trips/famen-temple" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Famen Temple (法门寺)</h3>
              <p className="text-gray-700 mb-2">
                A Buddhist temple with a crypt that was sealed for 1,113 years. In 1987, archaeologists
                opened it and found a finger bone of the Buddha — plus Tang dynasty gold, silver, and silk
                that rewrote what we know about Chinese craftsmanship. The underground palace and museum
                are the highlights. Uncrowded and deeply rewarding.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:30–17:00 | 💰 ¥120 + ¥100 underground palace | 🚌 2h by bus | Best for: History lovers</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/day-trips/huaqing-palace" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Huaqing Palace (华清宫)</h3>
              <p className="text-gray-700 mb-2">
                Where Emperor Xuanzong built hot spring baths for Yang Guifei — and where General Zhang
                Xueliang arrested Chiang Kai-shek in 1936. You can see the actual Tang dynasty bathing pools,
                the bullet holes from the arrest, and (Apr–Oct) one of China&apos;s best outdoor shows.
                Combine with the Terracotta Warriors — they&apos;re 10 minutes apart.
              </p>
              <p className="text-sm text-[#64748b]">🕐 7:30–18:00 | 💰 ¥120 | 🚌 45 min by bus | Best for: Half-day + Terracotta combo</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Combining Day Trips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Huaqing Palace + Terracotta Warriors:</strong> The classic Xi&apos;an combo. They&apos;re 10 minutes apart by bus. Huaqing in the morning, warriors at 11:30 AM, back to the city by 4 PM. Allow 6–7 hours total.</li>
            <li><strong>Famen Temple + Qianling Mausoleum:</strong> Both are west of Xi&apos;an. Famen Temple in the morning, Qianling in the afternoon. You&apos;ll need a private driver for this combo — public transport between them is impractical.</li>
            <li><strong>Huashan as a standalone:</strong> Don&apos;t try to combine Mount Hua with anything else. The full mountain route (West Peak up, North Peak down) takes 5–7 hours of walking. It&apos;s a full day by itself.</li>
            <li><strong>Huaqing + Terracotta + night show:</strong> Terracotta Warriors at opening (8:30 AM), Huaqing Palace afternoon, Song of Everlasting Sorrow at 20:30. Make a full day of it.</li>
          </ul>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Xi'an Trip"
            description="See our curated itineraries with day trips built in."
            buttonText="See Xi'an itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Xi'an" />
        <RelatedArticles articles={[
          { title: 'Terracotta Warriors', description: 'Xi\'an\'s most famous attraction — 8,000 clay soldiers.', href: '/destinations/xian/what-to-do/terracotta-warriors' },
          { title: 'What to Do in Xi\'an', description: 'All of Xi\'an\'s top attractions and hidden gems.', href: '/destinations/xian/what-to-do' },
          { title: 'Where to Eat in Xi\'an', description: 'Roujiamo, biangbiang noodles, and the best street food.', href: '/destinations/xian/where-to-eat' },
          { title: 'Xi\'an Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/xian/local-tips' },
        ]} />
      </main>
    </div>
  );
}