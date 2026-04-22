import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beijing Local Tips | Scams, Transport Hacks & Insider Secrets',
  description:
    'Insider tips for Beijing: scams to avoid (tea ceremony, art students, fake taxis), money-saving hacks, subway survival, and cultural etiquette.',
};

export default function BeijingLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Beijing Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is generally safe, but tourist-targeted scams are common around major sights.
            Learn the patterns, carry small bills, and use apps instead of street touts.
            Pair this with our{' '}
            <Link href="/destinations/beijing/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide to avoid overpriced restaurants near attractions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Scams to Avoid</h2>

          <div className="space-y-4">
            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🍵 Tea Ceremony Scam</h3>
              <p className="text-[var(--foreground)]">
                Friendly &quot;students&quot; approach you near Wangfujing or Qianmen, claiming to practice English.
                They invite you to a tea house where you&apos;re hit with a ¥500-2000 bill.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Never follow strangers to tea houses or &quot;cultural experiences.&quot;</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🎨 Art Student / Gallery Scam</h3>
              <p className="text-[var(--foreground)]">
                &quot;Art students&quot; invite you to see their exhibition, then pressure you to buy overpriced
                mass-produced paintings. Common near 798 Art District exits and Sanlitun.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Decline any gallery invitation from people approaching you on the street.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🚕 Fake Taxi / Black Cab Scam</h3>
              <p className="text-[var(--foreground)]">
                Unlicensed drivers at Beijing Capital Airport and train stations charge 3-5x normal rates.
                Some have rigged meters or claim &quot;flat rate&quot; fees of ¥300+ for a ¥80 ride.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Use the official taxi queue, insist on the meter, or book DiDi. Never accept rides from people approaching you inside terminals.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">🚌 Great Wall Bus Scam</h3>
              <p className="text-[var(--foreground)]">
                Touts at Deshengmen bus station claim the real 877 bus is &quot;canceled&quot; and redirect you to
                a private minibus charging ¥100-150. The real bus 877 costs ¥12.
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Ignore touts entirely. Walk past them to the official 877 bus. It runs 6:00-12:00 to Badaling.</p>
            </div>

            <div className="bg-[var(--accent-soft)] rounded-lg p-4 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-[var(--accent-strong)]">💆 Massage Scam</h3>
              <p className="text-[var(--foreground)]">
                Someone hands you a massage parlor flyer near your hotel. You go in for a ¥100 foot massage
                and get hit with a ¥1000+ bill for &quot;extra services.&quot;
              </p>
              <p className="text-sm text-[var(--accent-strong)] mt-2"><strong>Avoid:</strong> Only visit well-reviewed massage chains (e.g., Liangzi, Bodhi). Ignore street flyers.</p>
            </div>
          </div>
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
      </main>
    </div>
  );
}