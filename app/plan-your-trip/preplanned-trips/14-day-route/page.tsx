import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '14-Day Grand China Tour | Trail of China',
  description: 'The ultimate 2-week China itinerary covering all highlights: Beijing, Xi\'an, Chengdu, Yangshuo, Shanghai, and more.',
};

export default function FourteenDayRoutePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">14-Day Grand China Tour</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The complete China experience. Two weeks to explore imperial capitals, ancient warriors, 
            pandas, stunning landscapes, and modern megacities at a comfortable pace.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Route Overview</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Beijing → Xi'an → Chengdu → Yangshuo → Shanghai (+ Hangzhou day trip)</p>
            <p className="text-gray-600 mt-2">Duration: 14 days | Best for: Comprehensive experience</p>
            <p className="text-gray-600">Estimated budget: $1800-3000 per person</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Days 1-4: Beijing</h3>
              <p className="text-gray-700 text-sm">Forbidden City, Great Wall, Summer Palace, Temple of Heaven, Hutongs</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Days 5-6: Xi'an</h3>
              <p className="text-gray-700 text-sm">Terracotta Warriors, City Wall, Muslim Quarter, Big Wild Goose Pagoda</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Days 7-8: Chengdu</h3>
              <p className="text-gray-700 text-sm">Panda Base, Jinli Street, People's Park, Sichuan opera</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Days 9-11: Yangshuo</h3>
              <p className="text-gray-700 text-sm">Li River cruise, rock climbing, countryside cycling, Xingping village</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Days 12-13: Shanghai</h3>
              <p className="text-gray-700 text-sm">The Bund, Yu Garden, French Concession, Shanghai Tower</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Day 14: Hangzhou Day Trip + Departure</h3>
              <p className="text-gray-700 text-sm">West Lake, Longjing tea plantations, return to Shanghai for flight</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• This pace allows for relaxation and spontaneity</li>
            <li>• Consider breaking up Shanghai/Hangzhou with an overnight in Suzhou</li>
            <li>• Book all trains and flights in advance for better prices</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
