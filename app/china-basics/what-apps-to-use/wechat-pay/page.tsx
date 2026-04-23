import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'WeChat Pay in China: The Ultimate Foreigner\'s Guide',
  description:
    'How to set up WeChat Pay as a tourist in China. Link international credit cards, send hongbao, scan QR codes, and pay like 1.3 billion locals.',
}

export default function WeChatPayPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'What Apps to Use',href:'/china-basics/what-apps-to-use'},{label:'WeChat Pay'}]} />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">What Apps to Use</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          WeChat Pay in China: The Ultimate Foreigner's Guide
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          WeChat Pay is built into China's most essential app — WeChat. With over 1.3 billion users, it's how China pays 
          for everything from street snacks to utility bills. The good news: foreigners can now link international cards directly.
        </p>
      </section>

      {/* Payment Setup Section with Anchor */}
      <section id="payment" className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Payment Setup</h2>
        <div className="card-base">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Why you need this</h3>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• WeChat is China's everything app — messaging, social media, payments, ride-hailing, and mini-programs all in one.</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Some merchants and services only accept WeChat Pay, not Alipay, especially in smaller cities.</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• WeChat Pay lets you send and receive money from Chinese friends, split bills, and send hongbao (red envelopes).</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Mini-programs inside WeChat handle hotel bookings, food delivery, museum tickets, and more — most require WeChat Pay.</li>
          </ul>
        </div>
        <div className="mt-8 card-base">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Step-by-step setup guide</h3>
          <ol className="mt-5 space-y-4">
            <li key="download" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 1</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Download WeChat and create an account</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Download WeChat from your app store and register with your phone number. You will need at least one contact 
                on WeChat to verify your account — ask a friend or use the "shake" feature to find nearby users.
              </p>
            </li>
            <li key="wallet" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 2</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Activate WeChat Wallet</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Open WeChat → Me → Services → Wallet → Add Bank Card. Select "International Card" and enter your Visa or Mastercard. 
                Name on card must exactly match your passport name.
              </p>
            </li>
            <li key="verify" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 3</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Verify your identity</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                WeChat requires identity verification for foreign users. Go to Me → Settings → Account Security → Identity Verification. 
                Upload your passport photo page. Processing takes 1-3 days but can be faster.
              </p>
            </li>
            <li key="payment-pin" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 4</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Set a payment PIN and enable biometrics</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Create a 6-digit payment PIN. Enable Face ID or fingerprint for faster payments — you will use this dozens of times per day in China.
              </p>
            </li>
            <li key="practice" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 5</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Practice scanning and being scanned</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Two payment modes: "Scan" (you scan merchant QR code) and "Money" (merchant scans your QR code). 
                Try both at a convenience store. Most transactions under ¥1,000 work immediately.
              </p>
            </li>
            <li key="redpackets" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step 6</p>
              <h4 className="mt-1 text-lg font-extrabold text-slate-900">Red Packets (红包) basics</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                Red packets (hongbao) are a cultural tradition — sending small amounts of money in group chats or during holidays. 
                WeChat Pay makes it easy to send and receive hongbao, which is a great way to connect with Chinese friends.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Mini-Programs Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Mini-Programs — Services Inside WeChat</h2>
        <p className="text-lg text-slate-700 mb-6">
          WeChat's mini-programs (小程序) are tiny apps that run inside WeChat without downloading:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-base rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Didi Chuxing</h3>
            <p className="text-slate-700">Book rides through the Didi mini-program. No need to download the Didi app — everything works inside WeChat.</p>
          </div>
          <div className="card-base rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ctrip (Trip.com)</h3>
            <p className="text-slate-700">Book hotels, flights, and train tickets via the Ctrip mini-program. Use your WeChat Pay balance for instant checkout.</p>
          </div>
          <div className="card-base rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Restaurant Ordering</h3>
            <p className="text-slate-700">At many restaurants, scan the QR at your table to view the menu, order food, and pay — no waiter needed.</p>
          </div>
          <div className="card-base rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Community Services</h3>
            <p className="text-slate-700">Pay residential fees, parking, and neighborhood services. Many apartment complexes use WeChat Pay for all billing.</p>
          </div>
        </div>
      </section>

      {/* Social Payments Section */}
      <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Social Payments — The WeChat Way</h2>
        <div className="card-base rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Splitting Bills</h3>
          <p className="text-slate-700 mb-4">
            The "AA Pay" feature lets you split restaurant bills directly in WeChat conversations. After a meal, the group leader 
            creates an AA payment, selects items, and everyone pays their share instantly. No cash, no change, no math.
          </p>
        </div>
        <div className="card-base rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Red Packets in Group Chats</h3>
          <p className="text-slate-700 mb-4">
            Red packets (红包) are huge in Chinese culture, especially during holidays like Chinese New Year. In group chats, 
            someone sends a red packet with money inside — others "grab" it by tapping. It's fun, social, and a great way 
            to connect with Chinese friends. As a foreigner, sending small red packets shows goodwill and earns you points!
          </p>
        </div>
      </section>

      {/* Pro Tips Section */}
      <div className="container-px mx-auto max-w-4xl py-12 md:py-16 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Pro Tips</h2>
        <ul className="mt-3 space-y-2">
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• WeChat Pay has a "Tour Pass" feature for tourists that lets you preload funds — useful if direct card payments are declined.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• The hongbao (red envelope) feature is fun and cultural — send small amounts to Chinese friends for good luck during holidays.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Screenshot your WeChat Pay QR code before going to areas with poor signal. Merchants can scan it even without active internet on your end.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• WeChat mini-programs are incredibly powerful — you can order DiDi rides, book hotels, buy train tickets, and order food delivery all without leaving WeChat.</li>
          <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Group payment feature ("AA Pay") lets you split bills with friends — very useful when traveling in a group.</li>
        </ul>
      </div>


      <div className="container-px mx-auto max-w-4xl py-12 md:py-16">
      <RelatedArticles articles={[{title:'Alipay Guide',description:'Set up Alipay as your backup payment method.',href:'/china-basics/what-apps-to-use/alipay'},{title:'Payment Apps Overview',description:'Why you need both payment apps in China.',href:'/china-basics/what-apps-to-use/payment'},{title:'Didi Guide',description:'Pay for rides with WeChat Pay via Didi.',href:'/china-basics/what-apps-to-use/didi'}]} />
      </div>
</div>
  )
}
