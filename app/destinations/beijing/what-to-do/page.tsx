import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do in Beijing | Trail of China',
  description: 'Top attractions in Beijing: Forbidden City, Great Wall, Temple of Heaven, hutongs, and more.',
};

export default function BeijingWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">What to Do in Beijing</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing's attractions span millennia of Chinese history. From imperial palaces to ancient 
            temples, here are the must-see sights and experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. The Forbidden City (故宫)</h3>
              <p className="text-gray-700 mb-2">
                The world's largest palace complex, home to 24 emperors over 500 years. 
                Marvel at imperial architecture and vast courtyards.
              </p>
              <p className="text-sm text-gray-600">🕐 8:30-17:00 (closed Mondays) | 💰 ¥60 (Apr-Oct), ¥40 (Nov-Mar) | 📍 Metro: Tiananmen East</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Great Wall of China</h3>
              <p className="text-gray-700 mb-2">
                Ancient defensive wall stretching thousands of kilometers. Multiple sections 
                accessible from Beijing.
              </p>
              <p className="text-sm text-gray-600">🕐 7:30-17:30 | 💰 ¥40-60 | 📍 1-2 hours from city center</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Temple of Heaven (天坛)</h3>
              <p className="text-gray-700 mb-2">
                Where emperors prayed for good harvests. Stunning circular Hall of Prayer for 
                Good Harvests is Beijing's most photographed building.
              </p>
              <p className="text-sm text-gray-600">🕐 6:00-22:00 (park), 8:00-17:30 (halls) | 💰 Park ¥15, All ¥34 | 📍 Metro: Tiantan Dongmen</p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Summer Palace (颐和园)</h3>
              <p className="text-gray-700 mb-2">
                Imperial retreat with lakes, gardens, and pavilions. Beautiful Kunming Lake and 
                Longevity Hill.
              </p>
              <p className="text-sm text-gray-600">🕐 6:00-18:00 | 💰 ¥30 (park), ¥60 (all) | 📍 Metro: Beigongmen</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Great Wall Sections Compared</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold">Mutianyu (慕田峪)</h3>
              <p className="text-gray-700">Less crowded, beautiful scenery, cable car available</p>
              <p className="text-sm text-gray-600 mt-2">✅ Best for: Most visitors</p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">Badaling (八达岭)</h3>
              <p className="text-gray-700">Most famous, most crowded, fully restored</p>
              <p className="text-sm text-gray-600 mt-2">⚠️ Avoid crowds, go early morning</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book Forbidden City tickets 7 days in advance online</li>
            <li>• Go to Great Wall EARLY (before 8am) to beat crowds</li>
            <li>• Hire guide at Forbidden City (¥200) for context</li>
            <li>• Visit Temple of Heaven at sunrise for locals doing tai chi</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Avoid These Mistakes</h3>
          <ul className="text-red-900 space-y-2">
            <li>• Don't visit Forbidden City without pre-booked tickets</li>
            <li>• Skip Wangfujing Snack Street - overpriced tourist trap</li>
            <li>• Don't take black taxis from tourist sites</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
