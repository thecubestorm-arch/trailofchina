import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Shanghai Local Tips | Scams, WeChat Pay, Subway & Insider Secrets',
  description:
    'Insider tips for Shanghai: tea ceremony scam, art student scam, WeChat Pay setup, subway survival, nightlife safety, and money-saving hacks.',
};

export default function ShanghaiLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Shanghai Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is one of China&apos;s safest cities, but tourist scams are common near the Bund, Nanjing Road,
            and Yu Garden. Learn the patterns, set up WeChat Pay before you arrive, and you&apos;ll navigate
            the city like a local. For food-specific advice, see our{' '}
            <Link href="/destinations/shanghai/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Scams to Avoid</h2>

          <div className="space-y-4">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🍵 Tea Ceremony Scam</h3>
              <p className="text-[var(--foreground)]">
                Friendly locals approach tourists near People&apos;s Square or Nanjing Road, claiming to practice English.
                They invite you to a &quot;traditional tea ceremony&quot; at a nearby tea house. The bill arrives at ¥500-2000
                for tea that costs ¥30. Sometimes they claim it&apos;s a &quot;cultural exchange.&quot;
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Never follow strangers to tea houses. If someone approaches you speaking English on the street, politely decline and walk away.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🎨 Art Student / Gallery Scam</h3>
              <p className="text-[var(--foreground)]">
                &quot;Art students&quot; near the Bund or French Concession invite you to see their exhibition.
                You&apos;re taken to a small gallery and pressured to buy mass-produced paintings at ¥500-3000.
                The &quot;students&quot; work on commission.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Decline any art gallery invitation from people approaching you on the street. Legitimate galleries don&apos;t recruit visitors this way.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🚕 Fake Taxi Scam</h3>
              <p className="text-[var(--foreground)]">
                Unofficial drivers at Pudong Airport and Hongqiao Station approach you inside the terminal
                offering rides. They charge 3-5x the meter rate, or claim a &quot;flat fee&quot; of ¥400 for a ¥100 ride.
                Some have rigged meters.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Use the official taxi queue outside (follow the signs). Better: book DiDi — it shows the price upfront and routes are tracked.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">📿 Monk / Temple Donation Scam</h3>
              <p className="text-[var(--foreground)]">
                Fake monks near Jing&apos;an Temple or Yu Garden hand you a &quot;blessed&quot; bracelet or amulet,
                then aggressively demand a &quot;donation&quot; of ¥100-500. Real Buddhist monks don&apos;t do this.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Don&apos;t accept anything handed to you. Walk past without making eye contact.</p>
            </div>
          </div>
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
            <li><strong>Watch your drink</strong> — drink spiking is rare but has been reported in Sanlitun-style bars targeting solo travelers</li>
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
            <li>• The free Bund Sightseeing Tunnel is a tourist trap — take the ¥2 ferry instead for real river views</li>
            <li>• Zhujiajiao water town is 45 min by subway (Line 17) — free entry on weekdays, ¥80 weekends</li>
            <li>• Carrefour and Hema (盒马) in the basement of malls sell cheap prepared meals — great for quick lunches</li>
            <li>• Carry toilet paper — most public restrooms don&apos;t provide any (even in malls)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}