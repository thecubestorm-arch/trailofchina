import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'High-Speed Trains in China | Trail of China',
  description:
    "Complete guide to booking and riding China's high-speed rail network. G-trains, D-trains, seat classes, booking, and station tips.",
}

export default function TrainPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚄"
        heroImage={{ src: 'https://picsum.photos/seed/china-high-speed-train/800/400', alt: 'High-speed train travel in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Train' },
        ]}
        category="How to Get Around"
        title="High-Speed Trains"
        intro="China's high-speed rail is the world's largest network, connecting virtually every major city. Trains reach 350 km/h (217 mph), making them faster than flying for many routes."
        whyYouNeedThis={[
          "China's high-speed rail is the world's largest network",
          'It connects virtually every major city',
          'Trains reach 350 km/h (217 mph)',
          'For many routes, trains are faster than flying',
        ]}
        proTips={[
          'Download offline maps before departure (tunnels block signal)',
          'Bring snacks - station food is expensive',
          'Second class is perfectly comfortable for most trips',
          'Shanghai-Beijing: 4.5 hours by G-train vs 2.5 hour flight + airport time',
          'Bullet trains are often MORE reliable than flights',
        ]}
        quickInfo="Best for intercity travel · Book up to 30 days ahead · Platforms close 5 minutes before departure"
        tocItems={[
          { id: 'train-types-explained', title: 'Train Types Explained' },
          { id: 'how-to-book-tickets', title: 'How to Book Tickets' },
          { id: 'seat-classes', title: 'Seat Classes' },
          { id: 'at-the-station', title: 'At the Station' },
          { id: 'watch-out-for', title: 'Watch Out For' },
        ]}
        relatedArticles={[
          {
            title: '12306 Train Booking',
            description: 'Book train tickets like a local.',
            href: '/china-basics/how-to-get-around/12306',
          },
          {
            title: 'How to Get Around',
            description: 'All transportation options in China.',
            href: '/china-basics/how-to-get-around',
          },
        ]}
      >
        <section id="train-types-explained" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Train Types Explained</h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">🚄 G-Trains (Gaotie)</h3>
              <p className="text-slate-700">Fastest trains - up to 350 km/h. Premium comfort, most expensive.</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">🚅 D-Trains (Dongche)</h3>
              <p className="text-slate-700">High-speed - up to 250 km/h. Good balance of speed and price.</p>
            </div>

            <div className="rounded-lg bg-amber-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">🚃 C/K/T/Z Trains</h3>
              <p className="text-slate-700">Regular/sleeper trains. Slower but much cheaper. Good for overnight trips.</p>
            </div>
          </div>
        </section>

        <section id="how-to-book-tickets" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Book Tickets</h2>
          <ol className="list-decimal space-y-3 pl-6 text-slate-700">
            <li><strong>Download 12306 app</strong> - Official railway app (Chinese only)</li>
            <li><strong>Use Trip.com</strong> - English option for foreigners, small fee</li>
            <li><strong>Buy at station</strong> - Bring passport, queues can be long</li>
            <li><strong>Book 30 days in advance</strong> - Popular routes sell out</li>
          </ol>
        </section>

        <section id="seat-classes" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Seat Classes</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Business (商务座):</strong> Lie-flat seats, premium service - ¥1,000+</li>
            <li><strong>First Class (一等座):</strong> 2+2 seating, spacious - 1.5x base price</li>
            <li><strong>Second Class (二等座):</strong> 2+3 seating, standard - base price</li>
          </ul>
          <p className="italic text-[#64748b]">Sleeper trains: Soft sleeper (4 beds), Hard sleeper (6 beds)</p>
        </section>

        <section id="at-the-station" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">At the Station</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Arrive 30 minutes early (45 min for big stations)</li>
            <li>Security check required - like airports</li>
            <li>Platform gates close 5 minutes before departure</li>
            <li>Keep ticket until arrival (checked on exit)</li>
            <li>Food carts and hot water available on all trains</li>
          </ul>
        </section>

        <section id="watch-out-for" className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-6">
          <h2 className="text-2xl font-extrabold text-[var(--accent-strong)]">Watch Out For</h2>
          <ul className="mt-4 space-y-2 text-[var(--foreground)]">
            <li>• Booking through unofficial apps cancels your seat</li>
            <li>• Train stations are HUGE - allow extra time to find your platform</li>
          </ul>
        </section>
      </GuideArticlePage>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="🎫"
          title="Book Trains the Easy Way"
          description="If the official 12306 process feels heavy, start with the simpler foreigner-friendly booking options before you travel."
          buttonText="12306 Booking Guide →"
          buttonHref="/china-basics/how-to-get-around/12306"
          variant="secondary"
        />
      </div>
    </div>
  )
}
