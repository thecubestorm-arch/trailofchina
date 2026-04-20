import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Eat in Shanghai | Trail of China',
  description: 'Best restaurants, street food, and local eats in Shanghai. Xiaolongbao, shengjianbao, and fine dining.',
};

export default function ShanghaiWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Shanghai</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai's food scene blends traditional Shanghainese cuisine with influences from 
            across China and the world. From soup dumplings to Michelin-starred restaurants, 
            here's where to eat.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Foods</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Xiaolongbao (小笼包) - Soup Dumplings</h3>
              <p className="text-gray-700">Steamed dumplings filled with pork and hot soup. The signature Shanghai dish.</p>
              <p className="text-sm text-gray-600 mt-2">📍 Best at: Din Tai Fung, Jia Jia Tang Bao, or Yu Garden area</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Shengjianbao (生煎包) - Pan-Fried Buns</h3>
              <p className="text-gray-700">Crispy bottom, fluffy top, filled with pork and soup. Breakfast favorite.</p>
              <p className="text-sm text-gray-600 mt-2">📍 Best at: Yang's Fry Dumpling, Xiaoyang Shengjian</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Hairy Crab (大闸蟹)</h3>
              <p className="text-gray-700">Seasonal delicacy (Oct-Nov) from nearby Yangcheng Lake. Expensive but worth it.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2">
                <li>Jia Jia Tang Bao - Legendary soup dumplings</li>
                <li>Yang's Fry Dumpling - Best shengjianbao</li>
                <li>Street food at Yunnan Road</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50-200)</h3>
              <ul className="text-gray-700 mt-2">
                <li>Din Tai Fung - Consistent quality xiaolongbao</li>
                <li>Lost Heaven - Yunnan cuisine with great atmosphere</li>
                <li>The Commune Social - Creative Chinese tapas</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Fine Dining (¥200+)</h3>
              <ul className="text-gray-700 mt-2">
                <li>Ultraviolet by Paul Pairet - Multi-sensory Michelin 3-star</li>
                <li>T'ang Court - Cantonese fine dining</li>
                <li>Mr & Mrs Bund - French fusion with Bund views</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Make reservations for popular restaurants (especially weekends)</li>
            <li>• Download Dianping app (Chinese Yelp) for reviews</li>
            <li>• Learn to eat xiaolongbao: bite top, slurp soup, eat rest</li>
            <li>• Breakfast street food is safe and delicious</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ What to Avoid</h3>
          <ul className="text-red-900 space-y-2">
            <li>• Tourist trap restaurants on the Bund (overpriced, mediocre)</li>
            <li>• "Tea ceremony" invitations (scam)</li>
            <li>• Menus without prices</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
