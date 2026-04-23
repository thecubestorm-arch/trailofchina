import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Beijing | Best Neighborhoods, Hotels & Hutong Courtyards',
  description:
    'Best areas to stay in Beijing: hutong courtyards in Dongcheng, Wangfujing convenience, Sanlitun nightlife, Haidian university vibe. Budget to luxury hotel picks.',
};

export default function BeijingWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Where to Stay in Beijing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is massive — where you stay determines how much time you spend in traffic.
            Pick a neighborhood near the sights you care about most, and always check metro proximity.
            The hutong courtyard hotels in Dongcheng offer atmosphere; Sanlitun gives you nightlife and
            international food; Wangfujing puts you walking distance from the Forbidden City.
            See our{' '}
            <Link href="/destinations/beijing/what-to-do" className="underline text-[var(--accent)]">
              What to Do
            </Link>{' '}
            guide to plan your daily routes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>

          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏛️ Dongcheng — Hutong Area (东城)</h3>
              <p className="text-gray-700 mb-2">
                The heart of old Beijing. Traditional courtyard hotels (四合院) inside hutong alleys,
                walking distance to the Forbidden City, Tiananmen, and Temple of Heaven.
                The most atmospheric place to stay, but streets are narrow and rooms can be small.
              </p>
              <p className="text-sm text-gray-600">💰 ¥300-2000/night | 🚇 Metro: Dongdan, Dengshikou (Line 1) | 🎯 Best for: First-time visitors, culture lovers</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🛍️ Wangfujing (王府井)</h3>
              <p className="text-gray-700 mb-2">
                Beijing&apos;s main shopping street, 10 minutes walk from the Forbidden City.
                Large hotels, international restaurants, and easy transport links.
                Convenient but commercial — feels more like a business district than old Beijing.
              </p>
              <p className="text-sm text-gray-600">💰 ¥400-2500/night | 🚇 Metro: Wangfujing (Line 1) | 🎯 Best for: Convenience, families</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🌙 Sanlitun (三里屯)</h3>
              <p className="text-gray-700 mb-2">
                Beijing&apos;s nightlife and embassy district. Craft cocktail bars, international restaurants,
                and the famous Sanlitun Soho complex. Great for evenings, but a 30-min subway ride
                to the Forbidden City. The area around Taikoo Li is clean and modern.
              </p>
              <p className="text-sm text-gray-600">💰 ¥400-3000/night | 🚇 Metro: Tuanjiehu (Line 10) | 🎯 Best for: Nightlife, younger travelers</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🎓 Haidian (海淀)</h3>
              <p className="text-gray-700 mb-2">
                University district with Peking University and Tsinghua. Budget-friendly food,
                bookshops, and the Summer Palace nearby. Far from the city center but authentic
                and affordable. Good if you have a second week to explore the western sights.
              </p>
              <p className="text-sm text-gray-600">💰 ¥200-800/night | 🚇 Metro: Peking University East Gate (Line 4) | 🎯 Best for: Budget, return visitors</p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 CBD / Guomao (国贸)</h3>
              <p className="text-gray-700 mb-2">
                Modern business district with glass towers and international hotels. The CCTV
                Headquarters building is here. Great if you&apos;re on a business trip or want Western-style
                comfort. Far from hutong culture but closest to Beijing&apos;s contemporary face.
              </p>
              <p className="text-sm text-gray-600">💰 ¥600-3500/night | 🚇 Metro: Guomao (Line 1/10) | 🎯 Best for: Business travelers, luxury</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">💰 Budget (Under ¥300)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Peking Youth Hostel</strong> — Inside a hutong near the Drum Tower. ¥80-150/bed or ¥200-280/double</li>
                <li><strong>Leo Courtyard Hostel</strong> — Hutong courtyard with rooftop terrace. ¥100-180/bed</li>
                <li><strong>Beijing Saga International Youth Hostel</strong> — Near Qianmen, clean and social. ¥60-120/bed</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🏨 Mid-Range (¥300-800)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Orchid Hotel (红墙花园酒店)</strong> — Restored hutong courtyard boutique. ¥500-700/night. Book early — only 10 rooms</li>
                <li><strong>Shichahai Shadow Art Performance Hotel</strong> — Traditional courtyard with shadow puppet performances. ¥400-600</li>
                <li><strong>Courtyard 7 (七号院)</strong> — Minimalist courtyard hotel near Nanluoguxiang. ¥450-650</li>
                <li><strong>Novotel Beijing Xin Qiao</strong> — Reliable chain near Qianmen. ¥400-550</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Luxury (¥800+)</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li><strong>Aman Summer Palace (颐和安缦)</strong> — Ultra-luxury adjacent to the Summer Palace. ¥3500+/night</li>
                <li><strong>The Opposite House (瑜舍)</strong> — Design hotel in Sanlitun by Kengo Kuma. ¥1200-2000</li>
                <li><strong>Rosewood Beijing</strong> — Art-filled rooms in the CBD. ¥1500-2500</li>
                <li><strong>Beijing Waldorf Astoria</strong> — Heritage-style on Wangfujing. ¥1200-1800</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Metro proximity is everything</strong> — Beijing traffic makes 5km take 45 minutes. Stay within 500m of a Line 1 or 2 station</li>
            <li>• <strong>Hutong courtyard hotels</strong> book out weeks in advance — reserve early, especially the Orchid</li>
            <li>• <strong>Check for construction</strong> — Beijing is always building. Ask the hotel if there&apos;s a site nearby</li>
            <li>• <strong>Heating in winter</strong> — Beijing runs public heating Nov 15-Mar 15. Budget courtyard hotels can be drafty; pack warm sleepwear</li>
            <li>• <strong>Avoid hotels right next to Tiananmen</strong> — heavy security checkpoints make coming and going slow</li>
            <li>• <strong>WeChat Pay / Alipay</strong> at hotel check-in — some smaller places don&apos;t take foreign credit cards</li>
          </ul>
        </div>
        <RelatedArticles articles={[
          {title: 'Wangfujing', description: 'Central shopping district — walk to the Forbidden City.', href: '/destinations/beijing/where-to-stay/wangfujing'},
          {title: 'Dongcheng Hutong', description: 'Stay in a traditional courtyard — authentic Beijing.', href: '/destinations/beijing/where-to-stay/dongcheng-hutong'},
          {title: 'What to Do in Beijing', description: 'Top attractions and must-see sights.', href: '/destinations/beijing/what-to-do'},
          {title: 'How to Get Around', description: 'Trains, metros, and DiDi explained.', href: '/china-basics/how-to-get-around'},
        ]} />
      </main>
    </div>
  );
}