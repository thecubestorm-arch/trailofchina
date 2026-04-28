import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Taxis in China | Trail of China',
  description: 'How to take traditional taxis in China. Tips for hailing, payment, and getting around.',
};

export default function TaxiPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚖"
        heroImage={{ src: 'https://picsum.photos/seed/china-taxi-street/800/400', alt: 'Traditional Taxis in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Taxi' },
        ]}
        category="How to Get Around"
        title="Traditional Taxis"
        intro="While DiDi (ride-hailing) is more convenient, traditional taxis are still plentiful and useful to know about, especially when your phone battery is low or you need a taxi immediately."
        proTips={[
          'Have your destination written in Chinese',
          'Get a hotel business card to show drivers',
          'Use Baidu Maps to follow the route',
          'Rush hour (7-9am, 5-7pm) is hard to find taxis',
          'Flag down taxis on streets going your direction',
        ]}
        related={[
          { label: 'Didi Ride-Hailing', href: '/china-basics/how-to-get-around/didi' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: 'Didi Ride-Hailing', description: "China's Uber — book rides from your phone.", href: '/china-basics/how-to-get-around/didi' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'types-of-taxis', title: 'Types of Taxis' },
          { id: 'how-to-hail', title: 'How to Hail a Taxi' },
          { id: 'payment-tipping', title: 'Payment & Tipping' },
          { id: 'important-tips', title: 'Important Tips' },
        ]}
      >
        {/* Types of Taxis */}
        <div id="types-of-taxis" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Types of Taxis</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Standard taxis:</strong> Most common, different colors per city</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Electric taxis:</strong> Growing number, quieter, often newer</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Luxury taxis:</strong> Black with gold stripe, higher rates</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Minivans:</strong> For groups or lots of luggage</li>
          </ul>
        </div>

        {/* How to Hail */}
        <div id="how-to-hail" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Hail a Taxi</h2>
          <ol className="mt-4 space-y-2 list-decimal pl-5">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Hotel stands:</strong> Most reliable, drivers registered</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Street hailing:</strong> Wave at empty taxis (red light on dashboard)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Taxi stands:</strong> At airports, train stations, major attractions</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Show destination:</strong> Have address in Chinese characters ready</li>
          </ol>
        </div>

        {/* Payment & Tipping */}
        <div id="payment-tipping" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Payment & Tipping</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Cash always accepted</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• WeChat Pay/Alipay increasingly common</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Credit cards rarely accepted</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>No tipping required</strong> — not part of Chinese culture</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Round up to nearest yuan if you want to be nice</li>
          </ul>
        </div>

        {/* Important Tips */}
        <div id="important-tips" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Important Tips</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Insist on meter use — "Dǎ biǎo" (打表)</li>
            <li className="text-sm leading-relaxed md:text-base">• Flag down taxis on streets going your direction</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}