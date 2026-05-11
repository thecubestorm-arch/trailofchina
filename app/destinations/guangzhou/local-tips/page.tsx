import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Guangzhou Local Tips | Dim Sum Etiquette, Metro Survival & Cantonese Phrases',
  description: 'Insider tips for Guangzhou: dim sum etiquette, Line 3 survival, Cantonese phrases, avoiding tourist traps, and typhoon season advice.',
  openGraph: {
    title: 'Guangzhou Local Tips - Trail of China',
    description: 'Dim sum etiquette, metro survival, and insider secrets for Guangzhou.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Guangzhou Local Tips - Trail of China' }],
  },
};

export default function GuangzhouLocalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Guangzhou', href: '/destinations/guangzhou' },
            { label: 'Local Tips' },
          ]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Guangzhou Local Tips</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Guangzhou is China&apos;s food capital and a city where Cantonese culture still dominates everyday life.
            The metro works well (mostly), Alipay works everywhere, and the food is the best in the country.
            For food-specific advice, see our{' '}
            <Link href="/destinations/guangzhou/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            guide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dim Sum Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tea tapping (叩指礼):</strong> When someone pours tea for you, tap your index and middle fingers lightly on the table near your cup. It means &quot;thank you&quot; without interrupting conversation. Two fingers for equals, one finger for elders pouring</li>
            <li><strong>Pour for others first:</strong> Always pour tea for others before filling your own cup. It&apos;s basic Cantonese courtesy</li>
            <li><strong>Ordering:</strong> In traditional restaurants, pick dishes from rolling carts. In modern places, use the paper menu and stamp the dishes you want</li>
            <li><strong>Tea selection:</strong> Pu&apos;er (普洱) is the default. Chrysanthemum (菊花) is lighter. Tieguanyin (铁观音) is for connoisseurs</li>
            <li><strong>Timing:</strong> Arrive before 8 AM on weekends. By 10 AM, the best items are sold out</li>
            <li><strong>Chicken feet:</strong> Don&apos;t skip them (凤爪, feng zhao). They&apos;re the test of a real dim sum restaurant — braised in black bean sauce, they&apos;re tender and flavorful</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Metro Survival</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Line 3 is the busiest metro line in China:</strong> Literally. Avoid it during rush hour (7:30–9:30 AM, 5:30–7:30 PM). If you must ride it, go to the back of the platform where it&apos;s slightly less packed</li>
            <li><strong>Metro hours:</strong> 6:00–23:00 approximately. Last trains leave terminal stations around 22:30</li>
            <li><strong>Alipay at gates:</strong> Scan your Alipay QR code at the turnstile. No need for a metro card</li>
            <li><strong>Security check:</strong> X-ray bags at every station. Takes 10–30 seconds</li>
            <li><strong>DiDi for late night:</strong> After 23:00, DiDi is your only option. English version works well</li>
            <li><strong>APM line:</strong> The driverless APM connects Canton Tower to Zhujiang New Town. It has a LED light tunnel show between stations</li>
            <li><strong>Airport Line:</strong> Line 3 goes directly to Baiyun Airport. ¥12, 50 minutes from Tiyu Xilu</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cantonese Phrases That Differ from Mandarin</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>你好 (néih hóu)</strong> — Hello. Same meaning as Mandarin&apos;s 你好 but pronounced differently</li>
            <li><strong>唔该 (m4 goi)</strong> — Please / Thank you (for service). The most useful Cantonese phrase. Use it everywhere</li>
            <li><strong>多谢 (do1 ze6)</strong> — Thank you (for gifts). Use 唔该 for services, 多谢 for things</li>
            <li><strong>饮茶 (yam2 cha4)</strong> — Drink tea / Dim sum. What you say when you&apos;re going for dim sum</li>
            <li><strong>埋单 (maai4 daan1)</strong> — The check, please. Same meaning as Mandarin&apos;s 买单 but the Cantonese version</li>
            <li><strong>好食 (hou2 sik6)</strong> — Delicious. You&apos;ll be saying this a lot</li>
            <li><strong>几多钱 (gei2 do1 cin4)</strong> — How much? For markets and street stalls</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Avoiding Tourist Traps</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Dim sum on Beijing Road:</strong> Overpriced and mediocre. Walk 10 minutes into side streets for the real thing</li>
            <li><strong>Hotel restaurants:</strong> Fine for convenience but 2–3x more expensive than neighborhood restaurants of equal quality</li>
            <li><strong>Shamian Island cafés:</strong> Beautiful setting but overpriced coffee and cake. Get your coffee elsewhere</li>
            <li><strong>Best dim sum restaurants:</strong> Look for places where 90% of diners are local Chinese, not tourists. If the menu has English first, you&apos;re paying a premium</li>
            <li><strong>Guangzhou food rule:</strong> If there&apos;s a queue of locals outside a restaurant, eat there. If it&apos;s empty, walk past</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Weather & Typhoon Season</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Best time:</strong> October–December. Cool, dry, pleasant. 18–25°C</li>
            <li><strong>Summer (June–September):</strong> 35°C+ with 85% humidity. Air conditioning everywhere but the walk between buildings is brutal</li>
            <li><strong>Typhoon season (July–September):</strong> 2–3 typhoons per year. Flights cancel, metro pauses, streets flood. Check weather before day trips</li>
            <li><strong>Spring (March–May):</strong> The &quot;returning south&quot; (回南天) — humidity so intense that water condenses on indoor walls and floors</li>
            <li><strong>Winter (December–February):</strong> 10–20°C. No central heating — pack layers. Guangzhou cold is damp and penetrating</li>
            <li><strong>Air quality:</strong> Better than Beijing and Shanghai. Not great by European standards but acceptable most days</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cultural Notes</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Tipping:</strong> Not expected anywhere. Leaving money on the table causes confusion</li>
            <li><strong>Cantonese vs Mandarin:</strong> Locals speak Cantonese at home and with friends. Most also speak Mandarin. English is limited outside hotels and tourist areas</li>
            <li><strong>Business hours:</strong> Restaurants open early (6:00 AM for dim sum) and close late (22:00). Malls open 10:00–22:00</li>
            <li><strong>Smoking:</strong> Officially banned indoors but enforcement is inconsistent in smaller restaurants</li>
            <li><strong>Spitting:</strong> Less common than in northern cities but you&apos;ll still see it</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Insider Secrets</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• <strong>唔该 (m4 goi)</strong> — learn this one Cantonese word and you&apos;ll get better service everywhere</li>
            <li>• <strong>Line 3 at rush hour</strong> is so crowded that staff push people into carriages. Avoid it</li>
            <li>• <strong>The APM line</strong> has an LED tunnel light show between Canton Tower and Haixinsha stations — ride it at night</li>
            <li>• <strong>Guangzhou East Station</strong> is in Tianhe — the fastest way to reach Shenzhen by bullet train</li>
            <li>• <strong>Carry toilet paper</strong> — public restrooms in malls and stations usually don&apos;t provide any</li>
            <li>• <strong>回南天 (returning south weather)</strong> in spring means indoor condensation so heavy it looks like it rained inside</li>
          </ul>
        </div>

        <RelatedArticles articles={[
          {title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum'},
          {title: 'What to Do in Guangzhou', description: 'Top attractions.', href: '/destinations/guangzhou/what-to-do'},
          {title: 'Where to Stay', description: 'Best neighborhoods for every budget.', href: '/destinations/guangzhou/where-to-stay'},
          {title: 'Foshan Day Trip', description: '30 min by metro.', href: '/destinations/guangzhou/day-trips/foshan'},
        ]} />
      </main>
    </div>
  );
}