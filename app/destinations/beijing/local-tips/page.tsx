import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Beijing Local Tips | Transport, Food & Insider Secrets',
  description:
    'Insider tips for Beijing: transport hacks, money-saving strategies, cultural etiquette, and things to watch out for.',
};

export default function BeijingLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Beijing Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is a massive city that rewards preparation. Carry small bills, use apps instead of street touts,
            and you&apos;ll navigate it like a local. Pair this with our{' '}
            <Link href="/destinations/beijing/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide for the best food experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Money-Saving Tips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Beijing subway: ¥3-9 per ride. A day pass isn&apos;t sold — just use Alipay/WeChat Pay at gates</li>
            <li>Most museums are free but require advance reservation on their WeChat mini-program</li>
            <li>Temple of Heaven, Summer Palace, and Forbidden City have discounted off-peak tickets (Nov-Mar)</li>
            <li>Breakfast on the street: jianbing (¥8) + soy milk (¥3) beats any hotel buffet</li>
            <li>Hutong restaurants: ¥30-50 for a full meal. Look for places with no English menu</li>
            <li>DiDi is cheaper than taxis and shows the price upfront — no meter disputes</li>
            <li>Free performances at Changpu River Park (菖蒲河公园) on weekend mornings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subway Survival</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Peak hours to avoid:</strong> 7:30-9:30 AM and 5:30-7:30 PM — lines 1, 2, 10, and 13 get packed</li>
            <li><strong>Security check:</strong> Every station has bag X-ray. Takes 10-30 seconds but plan for it</li>
            <li><strong>Payment:</strong> Scan Alipay or WeChat Pay at turnstiles — no need to buy a transport card</li>
            <li><strong>Navigate:</strong> Use Apple Maps or Baidu Maps (Google Maps is inaccurate in China)</li>
            <li><strong>Line 1</strong> runs east-west through Tiananmen, Wangfujing, and the CBD</li>
            <li><strong>Line 2</strong> loops the old city wall — connects to most major sights</li>
            <li>Stations close around 11 PM — last trains vary, check the app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cultural Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tipping:</strong> Not expected. Leaving money on the table causes confusion, not gratitude</li>
            <li><strong>Bargaining:</strong> Expected at markets (Silk Street, Panjiayuan). Start at 30% of asking price. NOT in restaurants or taxis</li>
            <li><strong>Chopsticks:</strong> Never stick them upright in rice (resembles funeral incense). Use the rest provided</li>
            <li><strong>Queuing:</strong> Improving but still chaotic. Don&apos;t be shy — stand your ground at subway doors</li>
            <li><strong>Photos:</strong> Locals may stare or take photos of you, especially outside tourist zones. A smile goes a long way</li>
            <li><strong>Spitting:</strong> Still common among older men. It&apos;s not aggressive, just a habit. Ignore it</li>
            <li><strong>Loud is normal:</strong> Restaurant conversations are loud. Don&apos;t take it personally</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Forbidden City tickets sell out fast — book on their WeChat mini-program at midnight 7 days before</li>
            <li>• Great Wall at Mutianyu has fewer crowds than Badaling and a fun toboggan ride down</li>
            <li>• Enter the Forbidden City from the north (Gate of Divine Prowess) to walk the route in reverse with fewer crowds</li>
            <li>• Panjiayuan Antique Market (潘家园) opens at 4:30 AM on weekends — the best finds disappear by 8 AM</li>
            <li>• The Old Summer Palace (圆明园) is less visited and more atmospheric than the Summer Palace</li>
            <li>• Download offline maps in Baidu Maps before heading out — Google Maps is wrong about many Beijing addresses</li>
            <li>• Carry toilet paper — most public restrooms don&apos;t provide any</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Things to Watch Out For</h2>
          <p className="text-gray-700 mb-4">Beijing is generally safe, but a few situations are worth knowing about. These are not common, but awareness helps:</p>
          <ul className="text-gray-700 list-disc pl-5 space-y-3">
            <li><strong>Tea ceremony invitations</strong> — Occasionally, friendly &quot;students&quot; near Wangfujing or Qianmen invite tourists to a tea house that ends with an inflated ¥500-2000 bill. Politely decline invitations from strangers on the street.</li>
            <li><strong>Art gallery visits</strong> — &quot;Art students&quot; near 798 or Sanlitun may invite you to an exhibition, then pressure you to buy overpriced paintings. Legitimate galleries don&apos;t recruit visitors this way.</li>
            <li><strong>Unofficial taxis at airports/stations</strong> — Drivers inside terminals may charge far above the meter rate. Use the official taxi queue outside, or book DiDi for upfront pricing.</li>
            <li><strong>Great Wall bus touts at Deshengmen</strong> — People may claim bus 877 is &quot;canceled&quot; and redirect you to a ¥100-150 minibus. The real bus 877 costs ¥12 — walk past the touts.</li>
            <li><strong>Massage parlor flyers</strong> — Flyers near hotels may lead to ¥100 foot massages that turn into ¥1000+ bills. Only visit well-reviewed chains like Liangzi or Bodhi.</li>
          </ul>
        </section>
        <RelatedArticles articles={[
          {title: 'What to Do in Beijing', description: 'Top attractions and must-see sights.', href: '/destinations/beijing/what-to-do'},
          {title: 'VPN & Internet', description: 'Stay connected with a VPN setup guide.', href: '/china-basics/what-apps-to-use/vpn'},
          {title: 'eSIM Setup', description: 'Get data instantly with a travel eSIM.', href: '/china-basics/how-to-get-internet/esim'},
        ]} />
      </main>
    </div>
  );
}