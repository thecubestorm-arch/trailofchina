import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';

export const metadata: Metadata = {
  title: 'Metro & Subway in China | Trail of China',
  description:
    'Complete guide to using the metro and subway systems in Chinese cities. Shanghai, Beijing, Guangzhou, and more. Payment, etiquette, and tips.',
};

export default function MetroPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🚇"
        heroImage={{ src: 'https://picsum.photos/seed/china-metro-subway/800/400', alt: 'Metro & Subway in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
          { label: 'Metro & Subway' },
        ]}
        category="How to Get Around"
        title="Metro & Subway"
        intro="China's metro systems are modern, efficient, and often the best way to navigate major cities. Shanghai and Beijing have some of the world's longest networks, with stations near every major attraction."
        quickInfo="Shanghai: 20+ lines · Beijing: covers all major sites · Alipay/WeChat QR accepted · English signage standard"
        proTips={[
          'Download city metro apps for offline maps',
          'Avoid rush hour (7-9am, 5-7pm) — extremely crowded',
          'Last trains around 22:00-23:00 depending on line',
          'English signage is standard in major cities',
          'Station announcements in Chinese and English',
          'Free metro maps available at tourist info centers',
        ]}
        related={[
          { label: 'Alipay Guide', href: '/china-basics/what-apps-to-use/alipay' },
          { label: 'How to Get Around', href: '/china-basics/how-to-get-around' },
        ]}
        relatedArticles={[
          { title: 'Alipay Guide', description: 'Pay for metro rides with Alipay.', href: '/china-basics/what-apps-to-use/alipay' },
          { title: 'How to Get Around', description: 'All transportation options in China.', href: '/china-basics/how-to-get-around' },
        ]}
        tocItems={[
          { id: 'major-metro-systems', title: 'Major Metro Systems' },
          { id: 'how-to-pay', title: 'How to Pay' },
          { id: 'metro-etiquette', title: 'Metro Etiquette' },
          { id: 'things-to-know', title: 'Things to Know' },
        ]}
      >
        {/* Major Metro Systems */}
        <div id="major-metro-systems" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Major Metro Systems</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Shanghai:</strong> World's longest network, 20+ lines</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Beijing:</strong> Second longest, covers all major sites</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Guangzhou:</strong> Extensive network including Foshan</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Shenzhen:</strong> Modern, easy to navigate</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Xi'an, Chengdu, Hangzhou:</strong> Growing networks</li>
          </ul>
        </div>

        {/* How to Pay */}
        <div id="how-to-pay" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">How to Pay</h2>
          <ol className="mt-4 space-y-2 list-decimal pl-5">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Metro Card:</strong> Rechargeable card, slight discount</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Alipay/WeChat QR:</strong> Scan at gates, most convenient</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Single tickets:</strong> Buy at machines (Chinese interface mostly)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base"><strong>Phone NFC:</strong> Apple Pay/Google Pay work in some cities</li>
          </ol>
        </div>

        {/* Metro Etiquette */}
        <div id="metro-etiquette" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Metro Etiquette</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Stand right, walk left on escalators</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Let passengers exit before entering</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Priority seating for elderly, pregnant, disabled</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• No eating or drinking on trains</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Security check required at every station (like airports)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Baggage x-ray for all bags</li>
          </ul>
        </div>

        {/* Things to Know */}
        <div id="things-to-know" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Things to Know</h3>
          <ul className="text-red-800 space-y-2">
            <li className="text-sm leading-relaxed md:text-base">• Some stations have LONG walks between lines (10+ minutes)</li>
            <li className="text-sm leading-relaxed md:text-base">• Stations can have multiple exits — wrong exit = big detour</li>
            <li className="text-sm leading-relaxed md:text-base">• Check exit numbers on maps before you arrive</li>
            <li className="text-sm leading-relaxed md:text-base">• Air conditioning is strong — bring a layer</li>
          </ul>
        </div>
      </GuideArticlePage>
    </div>
  );
}