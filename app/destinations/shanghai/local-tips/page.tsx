import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Shanghai Local Tips | WeChat Pay, Subway & Insider Secrets',
  description:
    'Insider tips for Shanghai: WeChat Pay setup, subway survival, nightlife, money-saving hacks, and things to watch out for.',
};

export default function ShanghaiLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Shanghai Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is one of China&apos;s safest and most international cities. Set up WeChat Pay before you arrive,
            learn the subway, and you&apos;ll navigate the city like a local. For food-specific advice, see our{' '}
            <Link href="/destinations/shanghai/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">WeChat Pay & Alipay Setup</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Do this before you arrive.</strong> Foreigners can now link international credit cards to both WeChat Pay and Alipay</li>
            <li><strong>WeChat Pay:</strong> Open WeChat → Me → Services → Wallet → Add Card. Supports Visa/Mastercard</li>
            <li><strong>Alipay:</strong> Open Alipay → Me → Bank Cards → Add. May require a quick identity verification</li>
            <li><strong>Cash is increasingly rare</strong> — 95% of vendors prefer mobile payment. Carry some ¥100 bills as backup</li>
            <li><strong>Foreign cards work</strong> but may have a small transaction fee (1-3%). Still cheaper than ATM withdrawal fees</li>
            <li><strong>Subway gates</strong> accept both WeChat Pay and Alipay — scan the QR code at the turnstile</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subway Survival</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Peak hours to avoid:</strong> 7:30-9:30 AM and 5:30-7:30 PM — Lines 1, 2, 8, and 9 are packed shoulder-to-shoulder</li>
            <li><strong>Security check:</strong> Every station X-rays bags. Takes 10-30 seconds but factor it in</li>
            <li><strong>Payment:</strong> Scan WeChat/Alipay at gates — no paper tickets needed anymore</li>
            <li><strong>Line 2</strong> is your best friend: connects Pudong Airport, Lujiazui, Nanjing Road, People&apos;s Square, and Jing&apos;an</li>
            <li><strong>Line 10</strong> connects Hongqiao Airport/Station to French Concession and Xintiandi</li>
            <li><strong>Last trains:</strong> around 10:30-11:00 PM depending on the line. After that, DiDi or walk</li>
            <li><strong>Navigation:</strong> Apple Maps works for subway routing. Baidu Maps is better for walking directions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Money-Saving Tips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Happy hour at Bund bars (5-7 PM) — ¥50 cocktails with skyline views instead of ¥150+</li>
            <li>Free walking tours (tip-based) run weekends from People&apos;s Square — great for orientation</li>
            <li>Museums are mostly free on certain days (Shanghai Museum always free)</li>
            <li>Breakfast on the street: jianbing + soy milk = ¥8-15, better than hotel buffets</li>
            <li>The Bund ferry (¥2) gives you river views for a fraction of the tourist boat price</li>
            <li>Eat lunch in office-building cafeterias — ¥15-25 for a full meal, open to the public</li>
            <li>Century Park is free before 6 AM (joggers&apos; entrance on the east side)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nightlife & Safety</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Shanghai is very safe at night</strong> — violent crime is extremely rare. Women can walk alone at 2 AM without issue</li>
            <li><strong>Watch your drink</strong> — drink spiking is rare but has been reported in bars targeting solo travelers</li>
            <li><strong>Bar street areas:</strong> Found 158 (Julu Road), Xintiandi, and the Bund for cocktails. Yongkang Road for craft beer</li>
            <li><strong>Last call:</strong> No official closing time, but most bars wind down around 2-3 AM. Clubs go to 5 AM</li>
            <li><strong>Late-night food:</strong> 24-hour congee shops and hotpot chains (Haidilao) for post-drinking meals</li>
            <li><strong>DiDi at night:</strong> Always available. Confirm the license plate before getting in</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Weather & Seasonal Notes</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Plum rain season (梅雨):</strong> Mid-June to early July. Constant drizzle, 80% humidity, clothes never dry. Bring an umbrella every day</li>
            <li><strong>Summer:</strong> July-August is 35°C+ with humidity. Plan indoor activities midday (museums, malls)</li>
            <li><strong>Typhoon season:</strong> August-September. Rare but can shut down the city for a day. Flights cancel, subway pauses</li>
            <li><strong>Winter:</strong> December-February is 0-10°C. No central heating in most buildings — pack layers</li>
            <li><strong>Best months:</strong> October-November and April-May. Clear skies, 15-25°C, minimal rain</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cultural Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tipping:</strong> Not expected anywhere. Leaving money on the table causes confusion</li>
            <li><strong>Bargaining:</strong> Expected at markets (AP Plaza, Qipu Road). Start at 30% of asking. NOT in restaurants, taxis, or malls</li>
            <li><strong>Chopsticks:</strong> Never stick them upright in rice (funeral symbol). Use the chopstick rest</li>
            <li><strong>Queuing:</strong> Shanghai is better than most Chinese cities, but subway doors get competitive. Stand firm</li>
            <li><strong>Loud conversations:</strong> Restaurant noise is normal. Don&apos;t take it personally</li>
            <li><strong>Spitting:</strong> Less common in Shanghai than other cities, but you&apos;ll still see it. Ignore it</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best Bund photos from the riverside promenade on the Pudong side — looking back at the colonial buildings</li>
            <li>• Propaganda Poster Museum (宣传画艺术中心) is hidden in an apartment basement — incredible Cold War collection, ¥20 entry</li>
            <li>• The free Bund Sightseeing Tunnel is not worth it — take the ¥2 ferry instead for real river views</li>
            <li>• Zhujiajiao water town is 45 min by subway (Line 17) — free entry on weekdays, ¥80 weekends</li>
            <li>• Carrefour and Hema (盒马) in the basement of malls sell cheap prepared meals — great for quick lunches</li>
            <li>• Carry toilet paper — most public restrooms don&apos;t provide any (even in malls)</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Things to Watch Out For</h2>
          <p className="text-gray-700 mb-4">Shanghai is generally very safe, but a few situations are worth knowing about. These are not common, but awareness helps:</p>
          <ul className="text-gray-700 list-disc pl-5 space-y-3">
            <li><strong>Tea ceremony invitations</strong> — Occasionally, friendly strangers near People&apos;s Square invite tourists to a &quot;traditional tea ceremony&quot; that ends with an inflated bill (¥500-2000). Politely decline invitations from people approaching you on the street.</li>
            <li><strong>Art gallery visits</strong> — &quot;Art students&quot; near the Bund sometimes invite you to see an exhibition, then pressure you to buy overpriced paintings. Legitimate galleries don&apos;t recruit visitors this way.</li>
            <li><strong>Unofficial taxis at airports</strong> — Drivers inside Pudong or Hongqiao terminals offering rides may charge far above the meter rate. Use the official taxi queue outside, or better yet, book DiDi for upfront pricing.</li>
            <li><strong>Fake monks near temples</strong> — People dressed as monks near Jing&apos;an Temple or Yu Garden may hand you a &quot;blessed&quot; item and demand a donation. Real Buddhist monks don&apos;t do this — just walk past.</li>
          </ul>
        </section>
        <RelatedArticles articles={[
          {title: 'What to Do in Shanghai', description: 'The Bund, Yu Garden, and more.', href: '/destinations/shanghai/what-to-do'},
          {title: 'VPN & Internet', description: 'Stay connected with a VPN setup guide.', href: '/china-basics/what-apps-to-use/vpn'},
          {title: 'eSIM Setup', description: 'Get data instantly with a travel eSIM.', href: '/china-basics/how-to-get-internet/esim'},
        ]} />
      </main>
    </div>
  );
}