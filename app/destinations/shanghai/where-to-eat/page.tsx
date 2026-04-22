import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Where to Eat in Shanghai | Xiaolongbao, Street Food & Fine Dining',
  description: 'Best places to eat in Shanghai: xiaolongbao at Jia Jia Tang Bao, shengjianbao at Xiaoyang Shengjian, hairy crab season, and Michelin-starred restaurants.',
};

export default function ShanghaiWhereToEatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Eat in Shanghai</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai&apos;s food scene blends traditional Shanghainese cuisine with influences from
            across China and the world. From soup dumplings to Michelin-starred restaurants,
            here&apos;s where to eat. For tips on avoiding overpriced tourist restaurants, see our{' '}
            <Link href="/destinations/shanghai/local-tips" className="underline text-[var(--accent)]">
              Local Tips
            </Link> page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-Try Foods</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Xiaolongbao (小笼包) — Soup Dumplings</h3>
              <p className="text-gray-700 mb-2">Steamed dumplings filled with pork and hot soup. The signature Shanghai dish.
                Bite the top, slurp the soup, then eat the rest — never bite the whole thing at once.</p>
              <p className="text-sm text-gray-600">📍 Jia Jia Tang Bao (黄浦区黄河路), Din Tai Fung (multiple locations), Fu Chun (静安区)</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Shengjianbao (生煎包) — Pan-Fried Buns</h3>
              <p className="text-gray-700 mb-2">Crispy bottom, fluffy top, filled with pork and soup. Breakfast favorite.
                The soup inside is scorching hot — poke a hole first to let steam escape.</p>
              <p className="text-sm text-gray-600">📍 Xiaoyang Shengjian (小杨生煎, multiple branches), Yang&apos;s Fry Dumpling (吴江路)</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Hairy Crab (大闸蟹)</h3>
              <p className="text-gray-700 mb-2">Seasonal delicacy (Oct-Nov) from nearby Yangcheng Lake. The roe is the prize —
                rich, creamy, and intensely savory. Best at specialist crab restaurants during peak season.</p>
              <p className="text-sm text-gray-600">📍 Season: Oct-Nov | 💰 ¥80-300 per crab depending on size</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Scallion Oil Noodles (葱油拌面)</h3>
              <p className="text-gray-700 mb-2">Simple but iconic: noodles tossed in caramelized scallion oil and soy sauce.
                The best versions have deep-brown scallions almost burnt into the oil.</p>
              <p className="text-sm text-gray-600">📍 Any old Shanghainese restaurant | 💰 ¥15-25</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Red Braised Pork (红烧肉)</h3>
              <p className="text-gray-700 mb-2">Slow-braised pork belly in soy sauce, rock sugar, and Shaoxing wine. Meltingly
                tender and sweet — Shanghai&apos;s comfort food. Every family has a recipe.</p>
              <p className="text-sm text-gray-600">📍 Jesse Restaurant (杰西餐厅, French Concession) | 💰 ¥40-60</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">🍜 Budget (Under ¥50)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Jia Jia Tang Bao</strong> (黄河路90号) — Legendary pork xiaolongbao, ¥12 for 6</li>
                <li><strong>Xiaoyang Shengjian</strong> (multiple branches) — The go-to shengjianbao chain, ¥10 for 4</li>
                <li><strong>Yunnan Road Food Street</strong> (云南南路) — Scallion oil noodles, scallion pancakes, tofu dessert</li>
                <li><strong>Breakfast carts near subway exits</strong> — Jianbing, soy milk, youtiao. ¥5-15</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🍽️ Mid-Range (¥50-200)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Din Tai Fung</strong> (环贸iapm商场, 徐汇区) — Consistent xiaolongbao, always a queue. ¥80-120/person</li>
                <li><strong>Lost Heaven</strong> (外滩22号) — Yunnan cuisine with Bund views. ¥100-150/person</li>
                <li><strong>Jesse Restaurant</strong> (湖南路, French Concession) — Shanghainese home cooking. ¥60-90/person</li>
                <li><strong>Chun</strong> (巨鹿路) — Modern Shanghainese in a 1930s villa. ¥120-180/person</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Fine Dining (¥200+)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Ultraviolet by Paul Pairet</strong> — 10-seat multi-sensory Michelin 3-star. ¥6000+/person. Book months ahead</li>
                <li><strong>T&apos;ang Court</strong> (朗廷酒店, 黄浦区) — Cantonese fine dining, Michelin 3-star. ¥500-800/person</li>
                <li><strong>Mr &amp; Mrs Bund</strong> (外滩18号) — French fusion with Bund views. ¥400-600/person</li>
                <li><strong>8 ½ Otto e Mezzo Bombana</strong> — Italian fine dining, Michelin 2-star. ¥500+/person</li>
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

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ What to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• <strong>Bund restaurants with &quot;view surcharges&quot;</strong> — You pay ¥200 for ¥50 food quality. Walk one block inland for the same cuisine at half price</li>
            <li>• <strong>Tea ceremony scam</strong> — Friendly strangers invite you to a &quot;tea tasting.&quot; Bill arrives at ¥500-2000. See our <Link href="/destinations/shanghai/local-tips" className="underline">Local Tips</Link></li>
            <li>• <strong>Menus without prices</strong> — If there&apos;s no price listed, it&apos;s likely a tourist trap. Walk away</li>
            <li>• <strong>Nanjing Road tourist restaurants</strong> — Overpriced and bland. Locals eat on side streets, not the main drag</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
