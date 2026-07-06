import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Where to Stay in Guangzhou | Tianhe, Yuexiu & Haizhu Districts',
  description: 'Best areas to stay in Guangzhou: Tianhe for modern convenience, Yuexiu for old Guangzhou charm, Haizhu for Canton Tower views. Budget hostels to luxury hotels.',
  openGraph: {
    title: 'Where to Stay in Guangzhou - Trail of China',
    description: 'Best neighborhoods and hotels in Guangzhou.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Where to Stay in Guangzhou - Trail of China' }],
  },
};

export default function GuangzhouWhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Guangzhou', href: '/destinations/guangzhou' },
            { label: 'Where to Stay' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Where to Stay in Guangzhou</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Guangzhou&apos;s three main districts offer very different experiences. Tianhe is the modern CBD with the 
            best metro connections. Yuexiu is old Guangzhou with street food and character. Haizhu has the best 
            skyline views across the Pearl River. Pair this with our{' '}
            <Link href="/destinations/guangzhou/what-to-do" className="underline text-[var(--accent)]">
              What to Do
            </Link>{' '}
            guide to minimize commute time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 Tianhe District (天河区)</h3>
              <p className="text-gray-700 mb-2">
                Modern CBD with Canton Tower views, shopping malls, and the best metro connections. The most 
                convenient base for first-time visitors. Zhujiang New Town has the best restaurants and nightlife.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥300–1500/night | 🚇 Metro: Tiyu Xilu, Zhujiang New Town | 🎯 Best for: First-timers, business travelers</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🏮 Yuexiu District (越秀区)</h3>
              <p className="text-gray-700 mb-2">
                Old Guangzhou — Beijing Road, Shamian Island nearby, the best street food, and ¥15 wonton noodle 
                shops on every corner. More character, less cost.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥150–600/night | 🚇 Metro: Gongyuanqian, Beijing Road | 🎯 Best for: Budget travelers, food lovers</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🌉 Haizhu District (海珠区)</h3>
              <p className="text-gray-700 mb-2">
                Across the Pearl River with Canton Tower and the best skyline views. More local, less touristy, 
                and excellent riverfront walks.
              </p>
              <p className="text-sm text-[#64748b]">💰 ¥250–800/night | 🚇 Metro: Canton Tower, Kecun | 🎯 Best for: Skyline views, local experience</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Recommendations</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">💰 Budget (Under ¥300)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Yuexiu guesthouses</strong> — Basic but clean, near Beijing Road. ¥100–250/night</li>
                <li><strong>Liwan old town hostels</strong> — Walking distance to Shamian Island. ¥80–150/bed, ¥200–300/double</li>
                <li><strong>Haizhu business hotels</strong> — Canton Tower area, decent value. ¥200–300</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">🏨 Mid-Range (¥300–800)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>Tianhe business hotels</strong> — Modern, great location. ¥400–600/night</li>
                <li><strong>Yuexiu boutique hotels</strong> — Character buildings, local feel. ¥350–550</li>
                <li><strong>Haizhu river-view hotels</strong> — Canton Tower views from your window. ¥400–700</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold">⭐ Luxury (¥800+)</h3>
              <ul className="text-gray-700 mt-2">
                <li><strong>The Ritz-Carlton (Tianhe)</strong> — Five-star with Pearl River views. ¥1200–2000/night</li>
                <li><strong>Four Seasons (Tianhe)</strong> — IFC tower, city\'s highest hotel. ¥1500–2500</li>
                <li><strong>Banyan Tree (Haizhu)</strong> — Riverfront luxury near Canton Tower. ¥1000–1800</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>Tianhe is best for first-timers</strong> — central, connected, modern</li>
            <li>• <strong>Yuexiu is best for food lovers</strong> — street food on every corner, Beijing Road, Shamian</li>
            <li>• <strong>Haizhu is best for skyline views</strong> — book a river-facing room for Canton Tower at night</li>
            <li>• <strong>Metro proximity matters</strong> — Lines 1, 2, and 3 connect all key areas</li>
            <li>• <strong>Guangzhou East Station is in Tianhe</strong> — convenient for bullet trains to Shenzhen and Hong Kong</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Tianhe District', description: 'Modern CBD with best connections.', href: '/destinations/guangzhou/where-to-stay/tianhe-district'},
          {title: 'What to Do in Guangzhou', description: 'Top attractions.', href: '/destinations/guangzhou/what-to-do'},
          {title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum'},
          {title: 'Guangzhou Local Tips', description: 'Metro, dim sum etiquette, and more.', href: '/destinations/guangzhou/local-tips'},
        ]} />
      </main>
    </div>
  );
}