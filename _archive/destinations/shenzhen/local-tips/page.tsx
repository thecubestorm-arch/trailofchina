import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Shenzhen Local Tips | Hong Kong Border, Metro, eSIM & Shopping',
  description: 'Insider tips for Shenzhen: Hong Kong border crossings, metro survival, eSIM setup, Huaqiangbei bargaining, and typhoon season advice.',
  openGraph: {
    title: 'Shenzhen Local Tips - Trail of China',
    description: 'Hong Kong border, metro, and insider secrets for Shenzhen.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shenzhen Local Tips - Trail of China' }],
  },
};

export default function ShenzhenLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shenzhen', href: '/destinations/shenzhen' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Shenzhen Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shenzhen is China&apos;s most international mainland city — built from nothing in 40 years, it&apos;s easier to navigate
            than most Chinese cities. Set up Alipay before you arrive, learn the metro, and you&apos;ll be fine. For food-specific advice, see our{' '}
            <Link href="/destinations/shenzhen/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hong Kong Border Crossings</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Futian Checkpoint (福田口岸)</strong> — The fastest crossing. Walk across the bridge to Hong Kong&apos;s Lok Ma Chau station. Takes 15 minutes including immigration. Open 6:30 AM–10:30 PM</li>
            <li><strong>Luohu Port (罗湖口岸)</strong> — The busiest crossing. Walk across to Hong Kong&apos;s Lo Wu station. More crowded but open longer. Open 6:30 AM–12:00 AM</li>
            <li><strong>Both crossings</strong> require your passport. No visa needed for most Western nationals entering Hong Kong from Shenzhen. Re-entering China requires a valid Chinese visa or visa-free entry</li>
            <li><strong>Best time to cross:</strong> Before 8 AM or after 8 PM. Midday queues can be 30–60 minutes</li>
            <li><strong>Pro tip:</strong> Take the MTR East Rail Line from the Hong Kong side — it goes straight to Central in 40 minutes for ~HK$50</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Metro vs DiDi</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Metro is king</strong> — 16 lines covering most of the city. ¥2–14 per ride. Scan Alipay/WeChat at gates</li>
            <li><strong>DiDi for late night</strong> — Metro stops around 23:00. After that, DiDi is your only option</li>
            <li><strong>DiDi English version</strong> — Works in English. Estimated fare shown before booking</li>
            <li><strong>Rush hour:</strong> 7:30–9:30 AM and 5:30–7:30 PM. Lines 1 and 4 are the most crowded</li>
            <li><strong>Line 11</strong> is your airport express — Shenzhen Bao&apos;an to Futian in 50 minutes, ¥7</li>
            <li><strong>Security check at every station</strong> — X-ray bags, takes 10–30 seconds</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">eSIM & Internet</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Airalo eSIM works in Shenzhen</strong> — Download before landing. No VPN needed for Airalo&apos;s China eSIM</li>
            <li><strong>Shenzhen has China&apos;s fastest 5G</strong> — as a tech hub, coverage is excellent throughout the city</li>
            <li><strong>VPN:</strong> If using a regular SIM, you need a VPN. Download ExpressVPN or Astrill before arriving in China</li>
            <li><strong>Free WiFi</strong> is common in malls, cafés, and hotels — but requires SMS verification (use your eSIM number)</li>
            <li><strong>Alipay and WeChat</strong> both work without VPN. Set them up before you arrive</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shopping Tips (Huaqiangbei)</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Bargain hard</strong> — Initial prices for tourists are often 2–3x what locals pay. Start at 40% and work up</li>
            <li><strong>Avoid counterfeit branded goods</strong> — Fake iPhones, AirPods, and luxury brands will be confiscated at customs</li>
            <li><strong>Test all electronics</strong> before paying. Most stalls will let you plug in and verify items work</li>
            <li><strong>Upper floors are cheaper</strong> — Ground floor stalls have highest rents and highest prices. Go upstairs for better deals</li>
            <li><strong>Alipay is king</strong> — Cash is accepted but inconvenient. Foreign cards linked to Alipay work at most stalls</li>
            <li><strong>Shipping:</strong> Most stalls offer international shipping. ¥50–200 depending on size. Ask for the tracking number</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Weather & Typhoon Season</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Best time:</strong> October–March. Cool, dry, and pleasant. 18–25°C</li>
            <li><strong>Summer (June–September):</strong> 33°C+ with 80% humidity. Air conditioning is everywhere but the walk between buildings is brutal</li>
            <li><strong>Typhoon season (July–September):</strong> 2–3 typhoons per year. Flights cancel, metro pauses, and offices close. Check weather before day trips</li>
            <li><strong>Spring (March–May):</strong> Humidity rises quickly. April–May are the rainiest months</li>
            <li><strong>Winter (December–February):</strong> 10–20°C. No central heating in most buildings — pack layers</li>
            <li><strong>Air quality:</strong> Better than Beijing and Shanghai, but still check AQI. Good days are genuinely clear</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cultural Notes</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tipping:</strong> Not expected anywhere. Leaving money on the table causes confusion</li>
            <li><strong>English:</strong> Better than most Chinese cities, especially in Futian and Nanshan. DiDi has an English interface</li>
            <li><strong>Smoking:</strong> Officially banned indoors in public places, but enforcement is inconsistent</li>
            <li><strong>Queuing:</strong> Better than most Chinese cities but metro doors are still competitive. Stand firm</li>
            <li><strong>Spitting:</strong> Less common than in northern cities but you&apos;ll still see it</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• The Futian checkpoint is faster than Luohu for Hong Kong crossings — always use Futian if possible</li>
            <li>• Line 11 has first-class cars (商务车厢) for ¥14 extra — worth it for the airport run with luggage</li>
            <li>• Many Huaqiangbei stalls close on Chinese New Year (January/February) — plan accordingly</li>
            <li>• The Ping An Finance Centre observation deck is least crowded before 10 AM on weekdays</li>
            <li>• Carry toilet paper — public restrooms in malls and stations usually don&apos;t provide any</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Huaqiangbei', description: 'The world\'s largest electronics market.', href: '/destinations/shenzhen/what-to-do/huaqiangbei'},
          {title: 'Hong Kong Day Trip', description: 'Cross the border for a day in Hong Kong.', href: '/destinations/shenzhen/day-trips/hong-kong'},
          {title: 'What to Do in Shenzhen', description: 'Top attractions and experiences.', href: '/destinations/shenzhen/what-to-do'},
          {title: 'Where to Stay', description: 'Best neighborhoods for every budget.', href: '/destinations/shenzhen/where-to-stay'},
        ]} />
      </main>
    </div>
  );
}