import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'High-Speed Trains in China | Trail of China',
  description:
    "Complete guide to booking and riding China's high-speed rail network. G-trains, D-trains, seat classes, booking, and station tips.",
};

export default function TrainPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚄"
        heroImage={{ src: 'https://picsum.photos/seed/china-high-speed-train/800/400', alt: 'High-Speed Trains in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Train' },
        ]}
        category="How to Get Around"
        title="High-Speed Trains"
        intro="China's high-speed rail is the world's largest network, connecting virtually every major city. Trains reach 350 km/h (217 mph), making them faster than flying for many routes."
        proTips={[
          'Download offline maps before departure (tunnels block signal)',
          'Bring snacks — station food is expensive',
          'Second class is perfectly comfortable for most trips',
          'Shanghai-Beijing: 4.5 hours by G-train vs 2.5 hour flight + airport time',
          'Bullet trains are often MORE reliable than flights',
        ]}
        related={[
          { label: '12306 Train Booking', href: '/china-basics/how-to-get-around/12306' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: '12306 Train Booking', description: 'Book train tickets like a local.', href: '/china-basics/how-to-get-around/12306' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'train-types', title: 'Train Types Explained' },
          { id: 'how-to-book', title: 'How to Book Tickets' },
          { id: 'seat-classes', title: 'Seat Classes' },
          { id: 'at-the-station', title: 'At the Station' },
          { id: 'watch-out', title: 'Watch Out For' },
        ]}
      >
        {/* Train Types Explained */}
        <div id="train-types" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Train Types Explained</h2>
          <div className="mt-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 G-Trains (Gaotie)</h3>
              <p className="text-slate-700">Fastest trains — up to 350 km/h. Premium comfort, most expensive.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚅 D-Trains (Dongche)</h3>
              <p className="text-slate-700">High-speed — up to 250 km/h. Good balance of speed and price.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚃 C/K/T/Z Trains</h3>
              <p className="text-slate-700">Regular/sleeper trains. Slower but much cheaper. Good for overnight trips.</p>
            </div>
          </div>
        </div>

        {/* How to Book Tickets */}
        <div id="how-to-book" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Book Tickets</h2>
          <ol className="mt-4 space-y-3 list-decimal pl-5">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              <strong>Download 12306 app</strong> — Official railway app (Chinese only)
            </li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              <strong>Use Trip.com</strong> — English option for foreigners, small fee
            </li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              <strong>Buy at station</strong> — Bring passport, queues can be long
            </li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              <strong>Book 30 days in advance</strong> — Popular routes sell out
            </li>
          </ol>
        </div>

        {/* Seat Classes */}
        <div id="seat-classes" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Seat Classes</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              • <strong>Business (商务座):</strong> Lie-flat seats, premium service — ¥1,000+
            </li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              • <strong>First Class (一等座):</strong> 2+2 seating, spacious — 1.5x base price
            </li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">
              • <strong>Second Class (二等座):</strong> 2+3 seating, standard — base price
            </li>
          </ul>
          <p className="text-slate-500 mt-4 italic">
            Sleeper trains: Soft sleeper (4 beds), Hard sleeper (6 beds)
          </p>
        </div>

        {/* At the Station */}
        <div id="at-the-station" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">At the Station</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Arrive 30 minutes early (45 min for big stations)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Security check required — like airports</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Platform gates close 5 minutes before departure</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Keep ticket until arrival (checked on exit)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Food carts and hot water available on all trains</li>
          </ul>
        </div>

        {/* Watch Out For */}
        <div id="watch-out" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Watch Out For</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Booking through unofficial apps cancels your seat</li>
            <li className="text-sm leading-relaxed md:text-base">• Train stations are HUGE — allow extra time to find your platform</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}
