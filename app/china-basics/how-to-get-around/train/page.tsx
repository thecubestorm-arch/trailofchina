import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'High-Speed Trains in China | Trail of China',
  description:
    'Complete guide to booking and riding China\'s high-speed rail network. G-trains, D-trains, seat classes, booking, and station tips.',
};

export default function TrainPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'Train'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">High-Speed Trains</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China's high-speed rail is the world's largest network, connecting virtually every 
            major city. Trains reach 350 km/h (217 mph), making them faster than flying for many routes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Train Types Explained</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚄 G-Trains (Gaotie)</h3>
              <p className="text-gray-700">Fastest trains - up to 350 km/h. Premium comfort, most expensive.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚅 D-Trains (Dongche)</h3>
              <p className="text-gray-700">High-speed - up to 250 km/h. Good balance of speed and price.</p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🚃 C/K/T/Z Trains</h3>
              <p className="text-gray-700">Regular/sleeper trains. Slower but much cheaper. Good for overnight trips.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Book Tickets</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Download 12306 app</strong> - Official railway app (Chinese only)
            </li>
            <li>
              <strong>Use Trip.com</strong> - English option for foreigners, small fee
            </li>
            <li>
              <strong>Buy at station</strong> - Bring passport, queues can be long
            </li>
            <li>
              <strong>Book 30 days in advance</strong> - Popular routes sell out
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Seat Classes</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Business (商务座):</strong> Lie-flat seats, premium service - ¥1,000+</li>
            <li><strong>First Class (一等座):</strong> 2+2 seating, spacious - 1.5x base price</li>
            <li><strong>Second Class (二等座):</strong> 2+3 seating, standard - base price</li>
          </ul>
          <p className="text-[#64748b] mt-4 italic">Sleeper trains: Soft sleeper (4 beds), Hard sleeper (6 beds)</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">At the Station</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Arrive 30 minutes early (45 min for big stations)</li>
            <li>Security check required - like airports</li>
            <li>Platform gates close 5 minutes before departure</li>
            <li>Keep ticket until arrival (checked on exit)</li>
            <li>Food carts and hot water available on all trains</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Download offline maps before departure (tunnels block signal)</li>
            <li>• Bring snacks - station food is expensive</li>
            <li>• Second class is perfectly comfortable for most trips</li>
            <li>• Shanghai-Beijing: 4.5 hours by G-train vs 2.5 hour flight + airport time</li>
            <li>• Bullet trains are often MORE reliable than flights</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Watch Out For</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Booking through unofficial apps cancels your seat</li>
            <li>• Train stations are HUGE - allow extra time to find your platform</li>
          </ul>
        </div>
              <RelatedArticles articles={[{title:'12306 Train Booking',description:'Book train tickets like a local.',href:'/china-basics/how-to-get-around/12306'},{title:'How to Get Around',description:'All transportation options in China.',href:'/china-basics/how-to-get-around'}]} />
      </main>
    </div>
  );
}
