import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Payment Apps in China: Why You Need Alipay & WeChat Pay | Trail of China',
  description: 'China is essentially cashless. Learn why Alipay and WeChat Pay are essential — not just for payments, but for transit, food delivery, mini-apps, and more.',
};

export default function PaymentAppsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'China Basics', href: '/china-basics' },
            { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
            { label: 'Payment Apps' },
          ]} />
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-900">Payment Apps in China: Why You Need More Than Cash</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China has gone almost entirely cashless. Street vendors, taxi drivers, convenience stores, 
            even temple donation boxes — they all use QR codes. If you show up with only cash, you'll 
            manage, but you'll stand out and slow yourself down. Setting up Alipay and WeChat Pay before 
            you arrive is one of the most important things you can do for a smooth trip.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Digital Payment Rules China</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>95%+ of transactions</strong> in major cities are mobile payments — cash is accepted but often inconvenient</li>
            <li><strong>No need for small change</strong> — split bills, pay exact amounts, tip delivery drivers, all from your phone</li>
            <li><strong>Subway and buses</strong> accept mobile payment at turnstiles — no ticket machines needed</li>
            <li><strong>Online bookings</strong> (trains, hotels, event tickets) are easier with a verified payment app</li>
            <li><strong>Foreign credit cards work</strong> — both Alipay and WeChat Pay now support Visa, Mastercard, and other international cards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Alipay (支付宝) — More Than Just Payment</h2>
          <p className="text-gray-700 mb-4">
            Alipay is China's most powerful super-app. Yes, it handles payments — but the real magic is in its 
            <strong> mini-apps (小程序)</strong>, which turn Alipay into a gateway for hundreds of services without 
            downloading separate apps:
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>ÖV Transit Tickets</strong> — Buy subway, bus, and train tickets directly in Alipay. Scan QR at turnstiles in many cities</li>
            <li><strong>Meituan Food Delivery</strong> — Order from 100,000+ restaurants via the Meituan mini-app inside Alipay</li>
            <li><strong>Hospital Registration</strong> — Book doctor appointments and pay medical bills (widely used by locals)</li>
            <li><strong>Utility Bills</strong> — Pay electricity, water, gas, and phone bills in one place</li>
            <li><strong>Rental Bikes</strong> — Scan and unlock HelloBike and other shared bikes</li>
            <li><strong>Movie & Event Tickets</strong> — Book cinema, concert, and attraction tickets</li>
            <li><strong>Insurance & Investments</strong> — Alipay has a full financial services platform</li>
          </ul>
          <div className="mt-4">
            <Link 
              href="/china-basics/what-apps-to-use/alipay#payment" 
              className="inline-flex items-center gap-1 text-[#af5d32] font-semibold hover:text-[#8f431c] transition-colors"
            >
              Set up Alipay step by step →
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">WeChat Pay (微信支付) — Social Payments & Mini-Programs</h2>
          <p className="text-gray-700 mb-4">
            WeChat Pay is built into China's most-used messaging app. It handles payments, but its strength 
            is <strong>social payments</strong> and <strong>mini-programs</strong>:
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Red Packets (红包)</strong> — Send money to friends and family in group chats. Huge cultural tradition, especially during Chinese New Year</li>
            <li><strong>Group Bill Splitting</strong> — Split restaurant bills directly in WeChat conversations</li>
            <li><strong>Didi Chuxing</strong> — Book rides through the Didi mini-program without downloading the Didi app</li>
            <li><strong>Hotel & Flight Booking</strong> — Book via Ctrip (Trip.com), Meituan, and other travel mini-programs</li>
            <li><strong>Restaurant Ordering</strong> — Scan QR at your table to view menu, order, and pay — no waiter needed</li>
            <li><strong>Community Services</strong> — Pay residential fees, parking, and neighborhood services</li>
            <li><strong>Charity Donations</strong> — Donate to causes directly through WeChat</li>
          </ul>
          <div className="mt-4">
            <Link 
              href="/china-basics/what-apps-to-use/wechat-pay#payment" 
              className="inline-flex items-center gap-1 text-[#af5d32] font-semibold hover:text-[#8f431c] transition-colors"
            >
              Set up WeChat Pay step by step →
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Which One Should You Get First?</h2>
          <div className="bg-[#f5f1ea] rounded-xl p-6">
            <p className="text-gray-700 mb-4"><strong>Short answer: Get both.</strong> They're free, and some merchants only accept one or the other.</p>
            <p className="text-gray-700 mb-4">If you must choose one first:</p>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Alipay first</strong> if you want more standalone functionality — transit tickets, food delivery, hospital booking all work better inside Alipay</li>
              <li><strong>WeChat Pay first</strong> if you're traveling with Chinese friends or staying with locals — social payments (red packets, splitting bills) are WeChat's superpower</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Some merchants accept only Alipay (most street vendors, some smaller shops) and some only WeChat Pay 
              (certain restaurants, some services). Having both means you're never stuck.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Important Tips</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Set up before you arrive</strong> — You need internet to link your card and verify your identity. Do it at home with reliable Wi-Fi</li>
            <li><strong>Link a foreign Visa or Mastercard</strong> — Both apps now support international cards. A 1-3% foreign transaction fee may apply</li>
            <li><strong>Carry backup cash</strong> — A few ¥100 bills for the rare cash-only situation (some small temples, remote areas)</li>
            <li><strong>Verify your identity</strong> — Both apps may ask for passport verification. Have it ready when setting up</li>
            <li><strong>Keep both apps updated</strong> — China updates payment apps frequently; older versions may not work at some merchants</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Other Useful Payment Apps</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Meituan (美团)</strong> — Not a payment app per se, but essential for food delivery, hotel deals, and group-buying discounts. Payment happens through Alipay or WeChat Pay</li>
            <li><strong>Didi (滴滴出行)</strong> — China's Uber. Pay within the app via Alipay or WeChat Pay. No cash needed</li>
            <li><strong>UnionPay (银联)</strong> — China's domestic card network. Some UnionPay cards work internationally; useful as backup</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
