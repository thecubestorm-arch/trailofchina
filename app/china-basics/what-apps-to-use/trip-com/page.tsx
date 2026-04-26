import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Trip.com Guide for China Travelers',
  description:
    'Complete guide to Trip.com for China travel: book high-speed train tickets, hotels, domestic flights, attraction tickets, eSIMs, and airport transfers — all in English with foreign card support.',
  openGraph: {
    title: 'Trip.com — Your All-in-One China Travel App',
    description:
      'Book trains, flights, hotels, eSIMs, attraction tickets, and airport transfers — all in English, with foreign card support.',
    type: 'article',
  },
}

const capabilities = [
  { icon: '🚄', label: 'High-Speed Trains' },
  { icon: '🏨', label: 'Hotels' },
  { icon: '✈️', label: 'Flights' },
  { icon: '🎫', label: 'Attraction Tickets' },
  { icon: '📱', label: 'eSIM' },
  { icon: '🚕', label: 'Airport Transfers' },
]

const overviewCards = [
  {
    icon: '🚄',
    title: 'High-Speed Trains',
    description: `Book any route in China with an English interface — from Beijing to Xi'an in 4.5 hours at 350 km/h.`,
  },
  {
    icon: '🏨',
    title: 'Hotels & Accommodation',
    description: 'From international chains to boutique stays, with free cancellation and verified guest reviews.',
  },
  {
    icon: '✈️',
    title: 'Flights',
    description: `Domestic and international flights across 40+ airlines, often cheaper than you'd expect.`,
  },
  {
    icon: '🎫',
    title: 'Attraction Tickets',
    description: 'Skip-the-line entry to the Forbidden City, Great Wall, Terracotta Warriors, and hundreds more.',
  },
  {
    icon: '📱',
    title: 'eSIM',
    description: `Buy a travel eSIM right in the app — scan the QR code and you're online the moment you land.`,
  },
  {
    icon: '🚕',
    title: 'Airport Transfers',
    description: 'Pre-book a driver who meets you at arrivals — no negotiating with taxi queues at midnight.',
  },
]

const trainSteps = [
  'Open the app and tap "Trains" on the home screen.',
  'Enter your departure city, destination, and travel date. You can search in English — "Beijing" works just as well as "北京".',
  'Browse available trains by departure time, duration, and price. Tap a train to see all seat classes and availability.',
  'Select your seat class and passenger details. Make sure the passport number matches your actual passport exactly — this is checked at the station gate.',
  'Pay with your foreign credit card. You\'ll receive an e-ticket with a QR code in the app and via email.',
]

const hotelSteps = [
  'Tap "Hotels" and enter your destination city, check-in and check-out dates, and number of guests.',
  'Use filters to narrow by price range, star rating, free cancellation, breakfast, and distance from landmarks or metro stations.',
  'Compare properties by reading English-language reviews from international travelers — these are far more relevant than Chinese-only reviews on other platforms.',
  'Select your room type and confirm. Most bookings charge at check-in or upon arrival; some require prepayment.',
]

const flightSteps = [
  'Tap "Flights" and enter your departure and arrival cities, dates, and number of passengers.',
  'Browse results sorted by price, duration, or departure time. Use the flexible date toggle to compare nearby days.',
  'Select your flight and fare class. Pay attention to baggage allowances — especially on budget carriers.',
  'Enter passenger details matching your passport exactly, then pay with your foreign credit card.',
  'Your e-ticket is issued instantly. Check in online 24–48 hours before departure or at the airport counter with your passport.',
]

const attractionSteps = [
  'Tap "Attractions" and search for the site by name in English.',
  'Check available dates and time slots. Some attractions require a specific entry time.',
  'Select ticket type (standard, skip-the-line, with guide, etc.) and quantity.',
  'Pay with your foreign card. The e-ticket QR code appears in your "Orders" section immediately.',
]

const esimSteps = [
  'Open Trip.com and tap "eSIM" on the home screen or find it under "More Services."',
  'Choose your destination (China) and select a data plan based on your trip length and expected usage.',
  'Purchase with your foreign credit card. A QR code is generated immediately.',
  'Go to your phone\'s Settings → Cellular → Add eSIM (iOS) or Settings → Network & Internet → SIMs → Add eSIM (Android) and scan the QR code.',
  'Enable the new eSIM as your data line. You\'re online — no physical SIM required.',
]

const transferSteps = [
  'Tap "Car & Transport" in the app and select "Airport Transfer."',
  'Enter your arrival airport, flight number (so the driver tracks delays), destination address, and date/time.',
  'Choose vehicle type — shared shuttle, private sedan, or premium car. See the price upfront.',
  'Enter your name (as it appears on your booking) and contact details. The driver will hold a sign with your name at arrivals.',
  'Pay with your foreign card. You\'ll receive driver details and contact info before your trip.',
]

const proTips = [
  'Book train tickets as early as possible — sales open 15 days before departure and popular routes (Beijing–Shanghai, Chengdu–Chongqing) sell out within hours, especially during Chinese New Year and National Day holidays.',
  'Use the English interface instead of switching to Chinese — it handles passport-based bookings correctly and avoids the input traps that catch foreigners on 12306.',
  'Download your e-tickets and booking confirmations for offline access before you travel — station Wi-Fi is unreliable and you may not have data the moment you arrive in China.',
  'Always add your passport details under "My Info" before booking — train tickets in China are tied to your passport number, and mismatched info means you can\'t board.',
  'Check cancellation policies before you commit — many hotels offer free cancellation up to 24 hours before check-in, but train tickets have strict refund windows (8+ days before departure for a full refund on Trip.com).',
  'Compare Trip.com train prices with 12306 if you\'re price-sensitive — Trip.com adds a small service fee (¥10–30 per ticket), but the English interface and foreign card support are usually worth it.',
  'Use the flexible date view for flights — domestic flights within China can vary wildly in price depending on the day; shifting by one day can save ¥200–500.',
  'Buy attraction tickets at least 3–5 days in advance — the Forbidden City, National Museum, and other top sites cap daily entries and sell out, particularly on weekends and holidays.',
  'Set your currency to your home currency in the app settings — Trip.com shows prices in CNY by default, but you can display in USD, EUR, GBP, or 20+ other currencies. You\'ll still be charged in CNY, but it helps with budgeting.',
  'Screenshot your booking confirmation QR codes — even with offline access, a screenshot in your camera roll is the fastest way to pull it up at the gate when you\'re rushed.',
]

const faqs = [
  {
    question: 'Can I use foreign credit cards on Trip.com?',
    answer:
      'Yes. Trip.com is one of the few booking platforms in China that accepts Visa, Mastercard, American Express, and other international credit cards. You don\'t need a Chinese bank account, Alipay, or WeChat Pay to book trains, hotels, flights, or attraction tickets. This is the primary reason Trip.com is the go-to app for foreign travelers — 12306 and most Chinese booking platforms require a Chinese payment method.',
  },
  {
    question: 'Do I need a Chinese phone number to use Trip.com?',
    answer:
      'No. You can sign up with your international phone number or email address. The app sends verification codes to either. However, if you want to receive SMS confirmations for train bookings (some stations still send these), having a Chinese number helps — but it\'s not required. Your e-tickets live in the app and don\'t depend on SMS.',
  },
  {
    question: 'What if I need to cancel or change a booking?',
    answer:
      'Cancellation policies vary by booking type. Hotels: many offer free cancellation up to 24–48 hours before check-in. Trains: full refund if cancelled 8+ days before departure; partial refund 48 hours–8 days; no refund within 48 hours (these are China Railway rules, not Trip.com\'s). Flights: depends on the fare class — flexible fares allow changes, budget fares may not. Attraction tickets: generally non-refundable once purchased. Always check the specific cancellation terms before confirming your booking.',
  },
  {
    question: 'Is Trip.com safe and legitimate?',
    answer:
      'Yes. Trip.com (formerly Ctrip) is China\'s largest online travel agency, publicly listed on NASDAQ and the Hong Kong Stock Exchange. It\'s a Fortune Global 500 company. The app is used by hundreds of millions of travelers. For foreigners, it\'s actually safer than using smaller Chinese booking sites because it has proper English support, transparent pricing, and international-standard customer service. If something goes wrong, their English-language support line actually picks up.',
  },
  {
    question: 'Does Trip.com work without a VPN in China?',
    answer:
      'Yes. Trip.com is a Chinese app — it works perfectly without a VPN. You can search, book, and access your tickets while in China without any special network configuration. Unlike Google, WhatsApp, or Instagram, Trip.com\'s servers are in China and are not blocked by the Great Firewall.',
  },
  {
    question: 'How does Trip.com compare to 12306 for train tickets?',
    answer:
      'Trip.com pulls live inventory from 12306 (China\'s official railway system) and presents it in English. The main trade-off is a small service fee (¥10–30 per ticket) versus using 12306 directly. However, 12306\'s interface is entirely in Chinese, requires a Chinese phone number for full functionality, and only accepts Chinese payment methods (or UnionPay cards). For most foreign travelers, Trip.com\'s markup is a small price to pay for an app that actually works in English and takes foreign cards.',
  },
]

export default function TripComPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🎫"
        heroImage={{ src: 'https://picsum.photos/seed/trip-com-china/800/400', alt: 'Trip.com travel app for China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
          { label: 'Trip.com' },
        ]}
        category="What Apps to Use"
        title="Trip.com — Your All-in-One China Travel App"
        intro="Book trains, flights, hotels, eSIMs, attraction tickets, and airport transfers — all in English, with foreign card support."
        whyYouNeedThis={[
          'Trip.com is the only major Chinese booking platform with full English support and foreign credit card acceptance',
          'Book high-speed train tickets without battling the Chinese-only 12306 website',
          'Pay with Visa, Mastercard, or Amex — no Chinese bank account, Alipay, or WeChat Pay needed',
          'Works without a VPN — servers are in China, so it\'s never blocked by the Great Firewall',
          'One app for everything: trains, hotels, flights, attraction tickets, eSIMs, and airport transfers',
        ]}
        proTips={proTips}
        related={[
          { label: 'Travel Basics', href: '/china-basics/how-to-get-around' },
          { label: 'VPN', href: '/china-basics/what-apps-to-use/vpn' },
          { label: 'eSIM', href: '/china-basics/how-to-get-internet/esim' },
          { label: 'Alipay', href: '/china-basics/what-apps-to-use/alipay' },
        ]}
        relatedArticles={[
          {
            title: 'Payment Apps Guide',
            description: 'Alipay, WeChat Pay, and how to pay in cashless China.',
            href: '/china-basics/what-apps-to-use/payment',
          },
          {
            title: 'VPN Guide',
            description: 'Which VPNs work in China and how to set them up.',
            href: '/china-basics/what-apps-to-use/vpn',
          },
          {
            title: 'Internet Setup',
            description: 'Get connected from the moment you land.',
            href: '/china-basics/how-to-get-internet/esim',
          },
          {
            title: 'Didi Guide',
            description: "China's ride-hailing app explained for foreigners.",
            href: '/china-basics/what-apps-to-use/didi',
          },
        ]}
      >
        <>
          {/* Quick stat bar */}
          <div className="mt-4">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {capabilities.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg bg-white shadow-sm border border-slate-200"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <span className="text-xs font-medium text-slate-700 text-center leading-tight">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overview cards */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">What Trip.com Can Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {overviewCards.map((card) => (
                <div
                  key={card.title}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Speed Trains */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">🚄 High-Speed Trains</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              This is the number one reason foreign travelers download Trip.com. China's high-speed rail network is the largest in the world — over 40,000 km of track connecting every major city at speeds up to 350 km/h. A trip from Beijing to Shanghai takes just 4 hours and 18 minutes. From Shanghai to Hangzhou? 45 minutes. The trains are clean, punctual, and infinitely more convenient than flying for most inter-city routes under 1,000 km.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              The problem? The official booking system — 12306 — is entirely in Chinese, requires a Chinese phone number for full access, and only accepts Chinese payment methods. Trip.com solves all of this. It pulls live inventory from 12306, displays it in English, and lets you pay with Visa, Mastercard, or Amex. You get the same seats, the same trains, the same prices (plus a small service fee), without the headache.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Prices vary by route and seat class. Second class on the Beijing–Shanghai route runs about ¥553, first class about ¥933, and business class about ¥1,748. Shorter routes like Shanghai–Hangzhou start at around ¥73 for second class. Trip.com adds a service fee of roughly ¥10–30 per ticket, depending on the route.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Book</h3>
            <ol className="space-y-3 mb-6">
              {trainSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> At the station, you don't need a paper ticket. Just scan the QR code from the Trip.com app at the turnstile along with your passport. Arrive 30–40 minutes early for major stations — they're huge and security lines can be long.
              </p>
            </div>
          </div>

          {/* Hotels */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">🏨 Hotels &amp; Accommodation</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Trip.com is China's answer to Booking.com — and in many ways, it's better for the China market. It lists over 1.4 million properties worldwide, with particularly deep coverage in China: international chains (Marriott, Hilton, Hyatt), local boutique hotels, serviced apartments, and budget hostels. If a hotel exists in China, it's probably on Trip.com.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              The key advantage for foreigners: verified reviews in English, transparent pricing in your chosen currency, and the ability to pay with foreign cards. Many properties offer "Book Now, Pay Later" or free cancellation up to 24 hours before check-in — crucial when your travel plans are still flexible. Filters let you narrow by breakfast included, proximity to metro stations, guest ratings, and more.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pricing is competitive with Booking.com and often slightly cheaper for Chinese properties, since Trip.com has direct relationships with domestic hotels. Expect to pay ¥200–500/night for a solid 3–4 star hotel in a major city, and ¥500–1,200 for international chains in prime locations.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Book</h3>
            <ol className="space-y-3 mb-6">
              {hotelSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> Many Chinese hotels require foreign guests to register at the local police station within 24 hours of check-in. Most hotels handle this automatically — just make sure you have your passport with you at check-in. Budget hotels in smaller cities sometimes don't know the process; ask the front desk to help.
              </p>
            </div>
          </div>

          {/* Flights */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">✈️ Flights</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Domestic flights within China are surprisingly affordable. A two-hour flight from Beijing to Chengdu can cost as little as ¥300–800 (US$40–110) if you book in advance. Trip.com searches across 40+ airlines — domestic carriers like China Eastern, Air China, China Southern, and Hainan Airlines, plus international carriers for routes in and out of China.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              The flexible date view is your friend here. Flight prices in China fluctuate significantly depending on the day of the week, time of day, and how far in advance you book. Shifting your departure by even one day can save ¥200–500. Trip.com shows a price calendar so you can spot the cheapest days at a glance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Foreign credit cards are accepted for flight bookings. E-tickets are issued immediately — no need to print anything. Just show your passport at the check-in counter. One thing to watch: budget domestic flights sometimes include only carry-on luggage, so check your baggage allowance before you pack.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Book</h3>
            <ol className="space-y-3 mb-6">
              {flightSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> For routes under 5 hours, high-speed trains are usually faster door-to-door when you factor in airport transit time, security lines, and boarding. Save flights for long routes (e.g., Beijing to Kunming, Shanghai to Urumqi) where the train would take 10+ hours.
              </p>
            </div>
          </div>

          {/* Attraction Tickets */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">🎫 Attraction Tickets</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Many of China's top attractions — the Forbidden City, National Museum of China, Terracotta Warriors, and sections of the Great Wall — cap daily visitor numbers and require advance booking. Showing up without a ticket often means being turned away. Trip.com lets you buy e-tickets in advance with an English interface, bypassing the Chinese-language official booking sites.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              Tickets are delivered as QR codes in the app — you scan them at the entrance, no printing required. Some attractions also offer skip-the-line access or combo packages (e.g., Forbidden City + Temple of Heaven). Trip.com occasionally runs discounts on popular attractions, so prices can be equal to or even lower than buying at the gate.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              During peak periods — Chinese New Year (January/February), Labor Day (May 1), National Day (October 1), and summer holidays — tickets to marquee attractions sell out days in advance. Book early.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Book</h3>
            <ol className="space-y-3 mb-6">
              {attractionSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> Some attractions require you to book 3–5 days in advance minimum. The Forbidden City releases tickets 7 days ahead and they often sell out within hours. Set a reminder to book the moment the window opens if you're visiting during peak season.
              </p>
            </div>
          </div>

          {/* eSIM */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">📱 eSIM</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Trip.com recently added eSIM purchasing to its app — a game-changer for travelers who want to be online the moment they land. Plans start around $5 for a few GB over 7 days and go up to $15–25 for larger data packages over 15–30 days. Coverage uses China Unicom's network, which offers solid 4G/5G speeds in major cities and decent coverage along high-speed rail routes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              The setup is remarkably simple: buy the eSIM in the app, receive a QR code, scan it in your phone's Settings &gt; Cellular &gt; Add eSIM, and you're connected. No hunting for a physical SIM card at the airport kiosk, no language barrier at a China Mobile store. This is especially valuable if you arrive late at night when airport shops are closed.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              One caveat: Trip.com's eSIMs are regular data plans, not VPN-included solutions. If you need access to Google, WhatsApp, Instagram, or other blocked services, you'll still need a separate VPN. Some competing eSIM providers (like Airalo or Holafly) offer China plans that include VPN routing — compare options before committing.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Set Up</h3>
            <ol className="space-y-3 mb-6">
              {esimSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> Buy and set up your eSIM before you land — you can install it while still on Wi-Fi at your departure airport. It won't activate until your phone connects to a Chinese cell tower, so there's no risk of early activation charges.
              </p>
            </div>
          </div>

          {/* Airport Transfers */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">🚕 Airport Transfers &amp; Car Rental</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Arriving in China after a long flight, jet-lagged and without data, is not the time to figure out local transit. Trip.com's airport transfer service lets you pre-book a private driver who meets you at arrivals with a name sign — no app-hailing, no language negotiation, no uncertainty. It's especially useful for late-night arrivals, travelers with heavy luggage, or anyone arriving at a mega-airport like Beijing Daxing or Shanghai Pudong where navigating public transit takes local knowledge.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              Options range from shared shuttles (cheapest, ¥50–100) to private sedans (¥150–400) to luxury vehicles. Prices are shown upfront in your chosen currency — no haggling, no surprise surge pricing. Drivers are vetted by Trip.com, and you can contact customer service in English if anything goes wrong.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Car rental is also available for confident drivers, though self-driving in China requires a Chinese driver's license or an International Driving Permit (IDP) — and even with an IDP, some provinces don't recognize it. For most travelers, hiring a car with a driver is the practical choice.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Book</h3>
            <ol className="space-y-3 mb-6">
              {transferSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-china-red text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>Quick tip:</strong> Include your flight number when booking — the driver will monitor your flight and adjust pickup time if you're delayed. Without it, some services consider you a no-show after 60–90 minutes of waiting.
              </p>
            </div>
          </div>

          {/* Price Comparison */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Is the Markup Worth It?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Trip.com adds a small service fee to some bookings. Here's how it compares to booking directly — and why most foreign travelers consider the markup money well spent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-3">🚄 Train Tickets</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">12306 (official)</span>
                    <span className="font-medium text-slate-800">¥553 (Beijing→Shanghai, 2nd class)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Trip.com</span>
                    <span className="font-medium text-slate-800">¥553 + ¥10–30 service fee</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-600">Markup</span>
                    <span className="font-medium text-china-red">~2–5% (¥10–30)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">12306 requires Chinese payment method and Chinese phone number. Trip.com accepts foreign cards + English interface.</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-3">🏨 Hotels</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Booking.com</span>
                    <span className="font-medium text-slate-800">Varies — often similar pricing</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Trip.com</span>
                    <span className="font-medium text-slate-800">Often cheaper for Chinese hotels</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-600">Edge</span>
                    <span className="font-medium text-china-red">Trip.com (deeper local inventory)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Trip.com has direct relationships with Chinese hotels that Booking.com may not. Both accept foreign cards.</p>
              </div>
            </div>

            <div className="border-l-4 border-china-red bg-slate-50 p-4 rounded-r-lg">
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>The verdict:</strong> Yes, the markup is worth it. For trains, you're paying ¥10–30 for the ability to book in English with a foreign card — a trivial amount compared to the cost of your trip. For hotels, Trip.com is often cheaper than Booking.com for Chinese properties anyway. The convenience, English support, and integrated experience across trains + hotels + flights + tickets in a single app is genuinely valuable.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl bg-white border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-bold text-slate-900 hover:text-china-red transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="ml-2 text-china-red transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Get the App CTA */}
          <div className="mt-10 text-center">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Get Trip.com</h2>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Download the app before your trip and set up your account — you'll be booking trains and hotels before you even land.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://apps.apple.com/app/trip-com-hotels-flights-trains/id547546574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  🍎 App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ctrip.view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  ▶️ Google Play
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4">Available on App Store and Google Play</p>
            </div>
          </div>
        </>
      </GuideArticlePage>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="🔒"
          title="Access Blocked Apps in China"
          description="Trip.com works without a VPN, but Google, WhatsApp, and Instagram don't. Install a VPN before you land."
          buttonText="VPN Guide →"
          buttonHref="/china-basics/what-apps-to-use/vpn"
          variant="secondary"
        />
      </div>
    </div>
  )
}
