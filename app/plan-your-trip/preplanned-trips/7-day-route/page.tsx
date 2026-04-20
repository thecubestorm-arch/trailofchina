import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7-Day China Itinerary | Trail of China',
  description: 'Perfect one-week China itinerary: Beijing, Xi\'an, and Shanghai. Day-by-day guide with transport and hotels.',
};

export default function SevenDayRoutePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">7-Day Classic China Route</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The perfect introduction to China. This route covers the three must-see cities: 
            Beijing's imperial history, Xi'an's ancient warriors, and Shanghai's modern energy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Route Overview</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Beijing → Xi'an → Shanghai</p>
            <p className="text-gray-600 mt-2">Duration: 7 days | Best for: First-time visitors</p>
            <p className="text-gray-600">Estimated budget: $800-1500 per person (excluding flights)</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Day-by-Day Breakdown</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg">Days 1-3: Beijing</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>Day 1: Arrive, Forbidden City, Tiananmen Square</li>
                <li>Day 2: Great Wall (Mutianyu), Summer Palace</li>
                <li>Day 3: Temple of Heaven, Hutongs, evening train to Xi'an</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg">Days 4-5: Xi'an</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>Day 4: Terracotta Warriors, City Wall bike ride</li>
                <li>Day 5: Muslim Quarter, Big Wild Goose Pagoda, evening flight to Shanghai</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg">Days 6-7: Shanghai</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>Day 6: The Bund, Yu Garden, French Concession</li>
                <li>Day 7: Shanghai Tower, shopping, departure</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book Forbidden City tickets 7 days in advance</li>
            <li>• High-speed train Beijing-Xi'an: 4.5 hours</li>
            <li>• Flight Xi'an-Shanghai: 2 hours</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
