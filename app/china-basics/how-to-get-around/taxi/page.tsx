import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Taxis in China | Trail of China',
  description: 'How to take traditional taxis in China. Tips for hailing, payment, and getting around.',
};

export default function TaxiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'Taxi'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Traditional Taxis</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            While DiDi (ride-hailing) is more convenient, traditional taxis are still plentiful 
            and useful to know about, especially when your phone battery is low or you need a 
            taxi immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Taxis</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Standard taxis:</strong> Most common, different colors per city</li>
            <li><strong>Electric taxis:</strong> Growing number, quieter, often newer</li>
            <li><strong>Luxury taxis:</strong> Black with gold stripe, higher rates</li>
            <li><strong>Minivans:</strong> For groups or lots of luggage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Hail a Taxi</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Hotel stands:</strong> Most reliable, drivers registered</li>
            <li><strong>Street hailing:</strong> Wave at empty taxis (red light on dashboard)</li>
            <li><strong>Taxi stands:</strong> At airports, train stations, major attractions</li>
            <li><strong>Show destination:</strong> Have address in Chinese characters ready</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment & Tipping</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Cash always accepted</li>
            <li>WeChat Pay/Alipay increasingly common</li>
            <li>Credit cards rarely accepted</li>
            <li><strong>No tipping required</strong> - not part of Chinese culture</li>
            <li>Round up to nearest yuan if you want to be nice</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Have your destination written in Chinese</li>
            <li>• Get a hotel business card to show drivers</li>
            <li>• Use Baidu Maps to follow the route</li>
            <li>• Rush hour (7-9am, 5-7pm) is hard to find taxis</li>
            <li>• Flag down taxis on streets going your direction</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Tips</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Insist on meter use - "Dǎ biǎo" (打表)</li>
            <li>• Flag down taxis on streets going your direction</li>
          </ul>
        </div>
              <RelatedArticles articles={[{title:'Didi Ride-Hailing',description:"China's Uber — book rides from your phone.",href:'/china-basics/how-to-get-around/didi'},{title:'How to Get Around',description:'All transportation options in China.',href:'/china-basics/how-to-get-around'}]} />
      </main>
    </div>
  );
}
