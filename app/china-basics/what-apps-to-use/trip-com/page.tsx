import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import ChineseWatermark from '@/components/ChineseWatermark'
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

const capabilities = ['High-Speed Trains', 'Hotels', 'Flights', 'Attraction Tickets', 'eSIM', 'Airport Transfers']

const trainSteps = [
  'Open the app and tap Trains on the home screen.',
  'Enter your departure city, destination, and travel date. You can search in English, and Beijing works just as well as 北京.',
  'Browse available trains by departure time, duration, and price. Tap a train to see all seat classes and availability.',
  'Select your seat class and passenger details. Make sure the passport number matches your actual passport exactly.',
  'Pay with your foreign credit card. You will receive an e-ticket with a QR code in the app and via email.',
]

const hotelSteps = [
  'Tap Hotels and enter your destination city, check-in and check-out dates, and number of guests.',
  'Use filters to narrow by price range, star rating, free cancellation, breakfast, and distance from landmarks or metro stations.',
  'Compare properties by reading English-language reviews from international travelers.',
  'Select your room type and confirm. Most bookings charge at check-in or upon arrival, while some require prepayment.',
]

const flightSteps = [
  'Tap Flights and enter your departure and arrival cities, dates, and number of passengers.',
  'Browse results sorted by price, duration, or departure time. Use the flexible date toggle to compare nearby days.',
  'Select your flight and fare class, then check the baggage allowance carefully.',
  'Enter passenger details matching your passport exactly, then pay with your foreign credit card.',
  'Your e-ticket is issued instantly. Check in online 24 to 48 hours before departure or at the airport counter with your passport.',
]

const attractionSteps = [
  'Tap Attractions and search for the site by name in English.',
  'Check available dates and time slots. Some attractions require a specific entry time.',
  'Select ticket type and quantity.',
  'Pay with your foreign card. The e-ticket QR code appears in your Orders section immediately.',
]

const esimSteps = [
  'Open Trip.com and tap eSIM on the home screen or find it under More Services.',
  'Choose China as the destination and select a data plan that matches your trip length and expected usage.',
  'Purchase with your foreign credit card. A QR code is generated immediately.',
  'Go to your phone settings and add the eSIM by scanning the QR code.',
  'Enable the new eSIM as your data line and you are online without a physical SIM.',
]

const transferSteps = [
  'Tap Car and Transport in the app and select Airport Transfer.',
  'Enter your arrival airport, flight number, destination address, and date and time.',
  'Choose vehicle type and review the upfront price.',
  'Enter your name and contact details. The driver will hold a sign with your name at arrivals.',
  'Pay with your foreign card and wait for the driver details to appear before your trip.',
]

const proTips = [
  'Book train tickets as early as possible. Sales open 15 days before departure and popular routes can sell out quickly.',
  'Use the English interface instead of switching to Chinese. It handles passport-based bookings correctly and avoids the common input traps.',
  'Download your e-tickets and booking confirmations for offline access before you travel.',
  'Always add your passport details under My Info before booking.',
  'Check cancellation policies before you commit. Refund rules vary a lot between hotels, trains, flights, and attraction tickets.',
  'Compare Trip.com train prices with 12306 if you are very price-sensitive. The usual fee is around ¥10-30 per ticket.',
  'Use the flexible date view for flights. Shifting by one day can save ¥200-500.',
  'Buy attraction tickets three to five days in advance for the most popular sites.',
  'Set your currency display to your home currency if that helps with budgeting.',
  'Screenshot your booking QR codes so they are easy to reach under pressure.',
]

const faqs = [
  {
    question: 'Can I use foreign credit cards on Trip.com?',
    answer:
      "Yes. Trip.com is one of the few major China travel platforms that accepts Visa, Mastercard, American Express, and other international cards, which is a big reason it is the default choice for foreign travelers.",
  },
  {
    question: 'Do I need a Chinese phone number to use Trip.com?',
    answer:
      'No. You can sign up with an international phone number or an email address. A Chinese number can help with some SMS workflows, but it is not required for normal use.',
  },
  {
    question: 'What if I need to cancel or change a booking?',
    answer:
      'Policies depend on the booking type. Hotels often allow free cancellation up to 24 or 48 hours before check-in, while trains, flights, and attractions each follow their own refund and change rules.',
  },
  {
    question: 'Is Trip.com safe and legitimate?',
    answer:
      'Yes. Trip.com, formerly Ctrip, is China’s largest online travel agency and a mainstream platform used by huge numbers of travelers. For foreigners, its English support and card acceptance make it safer to rely on than smaller local sites.',
  },
  {
    question: 'Does Trip.com work without a VPN in China?',
    answer:
      'Yes. Trip.com is a Chinese app and works normally inside China without a VPN.',
  },
  {
    question: 'How does Trip.com compare to 12306 for train tickets?',
    answer:
      'Trip.com pulls live inventory from 12306 and presents it in English. The tradeoff is a small service fee in exchange for foreign card support and a much friendlier booking flow.',
  },
]

const relatedArticles = [
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
]

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal pl-6 space-y-4 text-[var(--foreground)]">
      {steps.map((step) => (
        <li key={step} className="leading-relaxed">
          {step}
        </li>
      ))}
    </ol>
  )
}

export default function TripComPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}
    >
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'China Basics', href: '/china-basics' },
              { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
              { label: 'Trip.com' },
            ]}
          />
        </div>

        <header className="mb-8 relative">
          <ChineseWatermark character="程" />
          <h1 className="relative z-10 mb-3 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--foreground)]">
            Trip.com — Your All-in-One China Travel App
          </h1>
          <div className="relative z-10 mt-3 flex items-center gap-2 text-[var(--muted)]">
            <span className="text-2xl">携程</span>
            <span className="text-lg">• China Basics • What Apps to Use</span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm sm:text-base text-[var(--foreground)]">
          {capabilities.map((capability, index) => (
            <span key={capability} className="contents">
              {index > 0 && <span className="text-[var(--muted)]">·</span>}
              <span className={index === 0 ? 'font-medium' : ''}>{capability}</span>
            </span>
          ))}
        </div>

        <p className="mb-10 max-w-4xl text-lg sm:text-xl leading-relaxed italic text-[var(--muted)]">
          Book trains, flights, hotels, eSIMs, attraction tickets, and airport transfers in English, with foreign card
          support and no VPN requirement.
        </p>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/trip-com-china/1600/900"
            alt="Trip.com travel app for China"
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Why You Need This</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Trip.com is the rare China travel platform that combines English support, foreign card acceptance, and a broad
              booking surface in one place. That alone makes it unusually useful for foreign travelers.
            </p>
            <p>
              It handles high-speed train tickets without forcing you into the Chinese-only 12306 interface, and it works
              inside China without a VPN because the service itself is not blocked.
            </p>
            <p>
              More importantly, it keeps trains, hotels, flights, attractions, eSIMs, and transfers under one account, which
              lowers the number of things you need to keep mentally synchronized during a multi-city trip.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">What Trip.com Can Do</h2>

          <h3 className="mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">High-speed trains</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              This is the main reason many foreign travelers download Trip.com. China&apos;s high-speed rail network connects major
              cities quickly and efficiently, but the official booking flow can be rough for non-Chinese users. Trip.com wraps
              the same inventory in a workable interface.
            </p>
            <p>
              Prices vary by route and class. On Beijing to Shanghai, second class is around ¥553, first class around ¥933,
              and business class around ¥1,748. Shorter routes such as Shanghai to Hangzhou can start near ¥73, with an added
              service fee of roughly ¥10-30.
            </p>
          </div>
          <StepList steps={trainSteps} />
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            At the station, you usually do not need a paper ticket. Bring your passport and leave extra time because major
            stations are large and security lines can be slow.
          </blockquote>

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/trip-trains/1600/900"
              alt="Trip.com high-speed train booking"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
          </div>

          <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">
            Hotels and accommodation
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Trip.com works like a China-native Booking.com with deeper domestic coverage. It is strong for international
              chains, local boutique properties, and flexible cancellation options that matter when plans are still moving.
            </p>
            <p>
              In many cities you can expect roughly ¥200-500 per night for a solid mid-range hotel, while international chains
              in prime locations often land around ¥500-1,200.
            </p>
          </div>
          <StepList steps={hotelSteps} />
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Bring your passport to check-in. Foreign guest registration is routine at good hotels, but small properties can be
            less smooth about it.
          </blockquote>

          <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Flights</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Domestic flights can be surprisingly affordable, sometimes as low as ¥300-800 for common two-hour routes when
              booked in advance. Flexible-date search is especially valuable because prices can swing sharply day to day.
            </p>
            <p>
              Foreign cards are accepted, e-tickets are issued immediately, and the main thing to watch is baggage allowance,
              especially on budget fares.
            </p>
          </div>
          <StepList steps={flightSteps} />
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            For routes under about five hours by rail, high-speed trains are often faster door to door once airport friction is
            included.
          </blockquote>

          <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">Attraction tickets</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Many top attractions cap daily entries and require advance booking. Trip.com gives you an English path to those
              tickets and delivers them as QR codes in the app.
            </p>
            <p>
              This matters most during holidays and weekends, when places such as the Forbidden City or the National Museum can
              sell out well before the day of visit.
            </p>
          </div>
          <StepList steps={attractionSteps} />
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Some major attractions need bookings several days in advance. Do not assume you can just show up and buy on site.
          </blockquote>

          <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">eSIM</h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Trip.com now sells eSIMs directly in-app, which is convenient if you want to land already connected. Plans often
              start around $5 for smaller bundles and rise to roughly $15-25 for heavier use.
            </p>
            <p>
              The main caveat is that these are regular data products, not built-in VPN solutions. If you need blocked Western
              apps, you still need a separate VPN plan.
            </p>
          </div>
          <StepList steps={esimSteps} />

          <div className="mt-6">
            <img
              src="https://picsum.photos/seed/trip-esim/800/1200"
              alt="Trip.com eSIM purchase flow"
              className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">Replace with app screenshot</p>
          </div>

          <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">
            Airport transfers and car rental
          </h3>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Pre-booked airport transfer is useful after a long flight, especially when you arrive late, have heavy luggage,
              or do not want your first China task to be decoding a taxi queue.
            </p>
            <p>
              Shared shuttles can be around ¥50-100, private sedans around ¥150-400, and the price is shown upfront. For most
              visitors, that predictability is worth more than squeezing out the absolute lowest fare.
            </p>
          </div>
          <StepList steps={transferSteps} />
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            Always include your flight number so the driver can track delays. Without that, some services will treat you as a
            no-show too quickly.
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Is the Markup Worth It?</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              For trains, the markup is usually small: roughly ¥10-30 over 12306 on top of the base fare. On a Beijing to
              Shanghai second-class ticket at around ¥553, that is a modest premium for an English interface and foreign card
              support.
            </p>
            <p>
              For hotels, Trip.com is often competitive with or better than global platforms because of its domestic inventory.
              In other words, the fee question is most relevant for rail, and even there the practical value is high for most
              travelers.
            </p>
          </div>

          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            The verdict is yes. If you are a foreign traveler, the convenience and reduced failure risk usually justify the
            small extra cost.
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="mb-2 text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]">{faq.question}</h3>
                <div className="prose prose-lg max-w-none text-[var(--foreground)]">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            {proTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Get Trip.com</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p>
              Download the app before your trip and set up your account early. It is much easier to solve passport, payment,
              and login issues while you still have familiar internet access and time to troubleshoot.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/app/trip-com-hotels-flights-trains/id547546574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--foreground)] transition-opacity hover:opacity-80"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ctrip.view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--foreground)] transition-opacity hover:opacity-80"
            >
              Google Play
            </a>
          </div>
        </section>

        <section className="border-t border-[#ebe4d8] pt-8">
          <h2 className="mb-4 text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)]">Related Articles</h2>
          <div className="divide-y divide-[#ebe4d8]">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block py-4 transition-opacity hover:opacity-80">
                <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">{article.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="mx-auto mt-8 max-w-6xl px-4">
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
