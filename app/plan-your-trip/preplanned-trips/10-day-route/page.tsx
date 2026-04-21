import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10-Day China Itinerary | Trail of China',
  description: 'Extended 10-day China route adding Chengdu pandas and Yangshuo karst mountains to the classic Beijing-Xi\'an-Shanghai circuit.',
};

export default function TenDayRoutePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">10-Day Extended China Route</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The classic route plus Chengdu&apos;s pandas and Yangshuo&apos;s stunning karst landscapes. 
            Perfect for those wanting nature and wildlife alongside China&apos;s great cities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Route Overview</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Beijing → Xi&apos;an → Chengdu → Yangshuo → Shanghai</p>
            <p className="text-gray-600 mt-2">Duration: 10 days | Best for: Nature & culture mix</p>
            <p className="text-gray-600">Estimated budget: $1200-2000 per person</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[var(--accent)] pl-4">
              <h3 className="font-semibold text-lg">Days 1-3: Beijing</h3>
              <p className="text-gray-700">Forbidden City, Great Wall, Temple of Heaven</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] pl-4">
              <h3 className="font-semibold text-lg">Days 4-5: Xi&apos;an</h3>
              <p className="text-gray-700">Terracotta Warriors, City Wall, Muslim Quarter</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] pl-4">
              <h3 className="font-semibold text-lg">Days 6-7: Chengdu</h3>
              <p className="text-gray-700">Panda Base, spicy Sichuan food, People&apos;s Park</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] pl-4">
              <h3 className="font-semibold text-lg">Days 8-9: Yangshuo</h3>
              <p className="text-gray-700">Li River cruise, karst peaks, countryside biking</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] pl-4">
              <h3 className="font-semibold text-lg">Day 10: Shanghai</h3>
              <p className="text-gray-700">The Bund, departure</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Panda Base: Arrive early (8am) when pandas are most active</li>
            <li>• Yangshuo: Stay 2 nights minimum to enjoy the scenery</li>
            <li>• Chengdu-Xi&apos;an flight: 1.5 hours vs 13 hours by train</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
