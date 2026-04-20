import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Stay in Shanghai | Trail of China',
  description: 'Best neighborhoods and hotels in Shanghai. The Bund, French Concession, Jing\'an and more.',
};

export default function ShanghaiWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Shanghai</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai offers accommodation for every budget and style. Each neighborhood has a distinct 
            character - choose based on what you want to experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
          
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏛️ The Bund (外滩)</h3>
              <p className="text-gray-700 mb-2">
                Historic waterfront with colonial architecture. Best views, most expensive.
              </p>
              <p className="text-sm text-gray-600">💰 ¥800-3000/night | 🚇 Metro: East Nanjing Road</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🌳 French Concession</h3>
              <p className="text-gray-700 mb-2">
                Tree-lined streets, cafes, boutiques. Peaceful and charming.
              </p>
              <p className="text-sm text-gray-600">💰 ¥400-1500/night | 🚇 Metro: South Shaanxi Road</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 Jing'an</h3>
              <p className="text-gray-700 mb-2">
                Modern business district with great shopping and dining.
              </p>
              <p className="text-sm text-gray-600">💰 ¥300-1000/night | 🚇 Metro: Jing'an Temple</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🛍️ People's Square</h3>
              <p className="text-gray-700 mb-2">
                Central location, budget-friendly, near major attractions.
              </p>
              <p className="text-sm text-gray-600">💰 ¥200-600/night | 🚇 Metro: People's Square</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">💎 Luxury: Peninsula Shanghai</h3>
              <p className="text-gray-700">Art deco elegance on the Bund. ¥2500+/night</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🏨 Boutique: The Sukhothai</h3>
              <p className="text-gray-700">Thai-inspired design in Jing'an. ¥1200/night</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold">💰 Budget: Captain Hostel</h3>
              <p className="text-gray-700">Rooftop Bund views, great location. ¥150/bed</p>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Book early during Canton Fair (April/October)</li>
            <li>• Metro proximity is key - traffic is terrible</li>
            <li>• French Concession best for atmosphere</li>
            <li>• Check for construction nearby (constant in Shanghai)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
