import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Taxis in China | Trail of China',
  description: 'How to take traditional taxis in China. Tips for hailing, payment, and getting around.',
}

export default function TaxiPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚕"
        heroImage={{ src: 'https://picsum.photos/seed/china-traditional-taxi/800/400', alt: 'Traditional taxis in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Taxi' },
        ]}
        category="How to Get Around"
        title="Traditional Taxis"
        intro="While DiDi (ride-hailing) is more convenient, traditional taxis are still plentiful and useful to know about, especially when your phone battery is low or you need a taxi immediately."
        whyYouNeedThis={[
          'Traditional taxis are still plentiful',
          'They are useful when your phone battery is low',
          'They are useful when you need a taxi immediately',
          'They are a practical backup when DiDi is less convenient',
        ]}
        proTips={[
          'Have your destination written in Chinese',
          'Get a hotel business card to show drivers',
          'Use Baidu Maps to follow the route',
          'Rush hour (7-9am, 5-7pm) is hard to find taxis',
          'Flag down taxis on streets going your direction',
        ]}
        quickInfo="Useful backup to DiDi · Cash always accepted · No tipping required"
        tocItems={[
          { id: 'types-of-taxis', title: 'Types of Taxis' },
          { id: 'how-to-hail-a-taxi', title: 'How to Hail a Taxi' },
          { id: 'payment-and-tipping', title: 'Payment & Tipping' },
          { id: 'tips', title: 'Tips' },
        ]}
        relatedArticles={[
          {
            title: 'Didi Ride-Hailing',
            description: "China's Uber — book rides from your phone.",
            href: '/china-basics/how-to-get-around/didi',
          },
          {
            title: 'How to Get Around',
            description: 'All transportation options in China.',
            href: '/china-basics/how-to-get-around',
          },
        ]}
      >
        <section id="types-of-taxis" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Types of Taxis</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Standard taxis:</strong> Most common, different colors per city</li>
            <li><strong>Electric taxis:</strong> Growing number, quieter, often newer</li>
            <li><strong>Luxury taxis:</strong> Black with gold stripe, higher rates</li>
            <li><strong>Minivans:</strong> For groups or lots of luggage</li>
          </ul>
        </section>

        <section id="how-to-hail-a-taxi" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Hail a Taxi</h2>
          <ol className="list-decimal space-y-3 pl-6 text-slate-700">
            <li><strong>Hotel stands:</strong> Most reliable, drivers registered</li>
            <li><strong>Street hailing:</strong> Wave at empty taxis (red light on dashboard)</li>
            <li><strong>Taxi stands:</strong> At airports, train stations, major attractions</li>
            <li><strong>Show destination:</strong> Have address in Chinese characters ready</li>
          </ol>
        </section>

        <section id="payment-and-tipping" className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Payment &amp; Tipping</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Cash always accepted</li>
            <li>WeChat Pay/Alipay increasingly common</li>
            <li>Credit cards rarely accepted</li>
            <li><strong>No tipping required</strong> - not part of Chinese culture</li>
            <li>Round up to nearest yuan if you want to be nice</li>
          </ul>
        </section>

        <section id="tips" className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-6">
          <h2 className="text-2xl font-extrabold text-[var(--accent-strong)]">Tips</h2>
          <ul className="mt-4 space-y-2 text-[var(--foreground)]">
            <li>• Insist on meter use - &quot;Dǎ biǎo&quot; (打表)</li>
            <li>• Flag down taxis on streets going your direction</li>
          </ul>
        </section>
      </GuideArticlePage>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <ContextualCTA
          icon="📱"
          title="Use DiDi When You Can"
          description="Traditional taxis are useful backup, but DiDi is usually easier for pickup, destination entry, and payment."
          buttonText="DiDi Guide →"
          buttonHref="/china-basics/how-to-get-around/didi"
          variant="secondary"
        />
      </div>
    </div>
  )
}
