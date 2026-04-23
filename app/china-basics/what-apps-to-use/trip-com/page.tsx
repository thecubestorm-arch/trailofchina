import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'

export const metadata: Metadata = {
  title: 'Trip.com Guide for China Travelers',
  description:
    'Complete guide to Trip.com for China travel: book high-speed train tickets, hotels, domestic flights, attraction tickets, eSIMs, and airport transfers — all in English with foreign card support.',
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'China Basics', href: '/china-basics' },
  { label: 'What Apps to Use', href: '/china-basics/what-apps-to-use' },
  { label: 'Trip.com' },
]

const whyYouNeedThis = [
  '🚄 Book high-speed train tickets with an English interface — no need to wrestle with 12306 in Chinese',
  '🏨 Reserve hotels and serviced apartments across China, with free cancellation on many properties',
  '✈️ Search and book domestic and international flights at competitive prices',
  '🎫 Skip the line with pre-booked attraction tickets for the Forbidden City, Great Wall, and more',
  '📱 Purchase a travel eSIM directly through the app and stay connected from the moment you land',
  '🚕 Book airport transfers and car rentals so your arrival is smooth, even if you don\'t speak Chinese',
]

const setupSteps = [
  {
    title: 'Download & Create Account',
    description:
      'Get the Trip.com app from the App Store or Google Play. Sign up with your email or phone number — you can use an international number. The app supports English, Japanese, Korean, and 20+ other languages. Verify your account and add your passport details under "My Info" so bookings go smoothly.',
  },
  {
    title: 'Book Train Tickets',
    description:
      'Tap "Trains" on the home screen and enter your departure city, destination, and travel date. Trip.com pulls live data from China\'s 12306 system but presents it in a clean English interface. You\'ll see all seat classes (second class, first class, business class) with prices in your chosen currency. Foreign credit cards are accepted. After booking, you\'ll receive an e-ticket — show the QR code at the station gate with your passport.',
  },
  {
    title: 'Book Hotels & Apartments',
    description:
      'Search hotels by city, date, and budget. Filters let you narrow by free cancellation, breakfast included, proximity to metro stations, and guest ratings. Trip.com lists both international chains (Marriott, Hilton) and local boutique hotels. Many properties offer "Book Now, Pay Later" or free cancellation up to 24 hours before check-in. Read reviews from international travelers — they\'re more relevant than Chinese-only reviews.',
  },
  {
    title: 'Book Flights',
    description:
      'Trip.com searches both domestic Chinese airlines (China Eastern, Air China, China Southern) and international carriers. Domestic flights within China are often surprisingly cheap (¥300–800 for a 2-hour flight). You can compare prices across dates with the flexible date view. Foreign credit cards are accepted, and e-tickets are issued immediately. Check luggage allowances — budget domestic flights sometimes include only carry-on.',
  },
  {
    title: 'Buy Attraction Tickets',
    description:
      'Under "Attractions," search for sites like the Forbidden City, Great Wall (Mutianyu, Badaling), Terracotta Warriors, and more. Buying in advance is strongly recommended — many top sites cap daily visitor numbers and sell out, especially during holidays. Trip.com offers QR-code e-tickets you scan at the entrance. Some attractions include English-speaking guide add-ons.',
  },
  {
    title: 'Get an eSIM',
    description:
      'Trip.com now sells travel eSIMs for China and other destinations. Look under "eSIM" in the app. Plans start around $5–15 depending on data volume and duration. Activation is instant — you receive a QR code, scan it in your phone settings, and you\'re online. This is particularly useful if you don\'t want to hunt for a physical SIM card at the airport. Coverage uses China Unicom\'s network with decent 4G/5G speeds in cities.',
  },
  {
    title: 'Book Airport Transfers & Car Rental',
    description:
      'Under "Car & Transport," book private airport transfers (meet-and-greet with a driver holding your name), shared shuttles, or self-drive car rentals. Airport transfers are especially useful if you arrive late at night or at an unfamiliar airport — no need to figure out local transit with luggage. Prices are shown upfront in your currency, and drivers are vetted by Trip.com.',
  },
]

const proTips = [
  '🚄 Book train tickets as early as possible — China\'s high-speed trains open sales 15 days before departure and popular routes sell out fast, especially around Chinese New Year and National Day.',
  '🔍 Use the English interface instead of switching to Chinese — it\'s designed for foreigners and handles passport-based bookings correctly.',
  '💰 Compare Trip.com prices with the official 12306 app for trains and airline websites for flights — Trip.com sometimes adds a small markup, but the convenience of English support and foreign card payment is usually worth it.',
  '📱 Download your e-tickets and booking confirmations for offline access — station Wi-Fi can be spotty and you may not have data immediately upon arrival.',
  '🔄 Check cancellation policies before booking — many hotels offer free cancellation, but train tickets have strict refund windows (typically 8 days+ before departure for full refund on Trip.com).',
]


const related = [
  { label: '12306 Train Booking', href: '/china-basics/how-to-get-around/12306' },
  { label: 'Alipay', href: '/china-basics/what-apps-to-use/alipay' },
  { label: 'WeChat Pay', href: '/china-basics/what-apps-to-use/wechat-pay' },
  { label: 'eSIM Setup', href: '/china-basics/how-to-get-internet/esim' },
  { label: 'Didi', href: '/china-basics/what-apps-to-use/didi' },
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
    description: 'China\'s ride-hailing app explained for foreigners.',
    href: '/china-basics/what-apps-to-use/didi',
  },
]

export default function TripComPage() {
  return (
    <GuideArticlePage
      breadcrumbs={breadcrumbs}
      category="China Basics"
      title="Trip.com"
      intro="Trip.com is the single most useful booking platform for China travelers. Think of it as Booking.com, Trainline, and Viator rolled into one — with full English support and foreign credit card acceptance. Whether you need a high-speed train ticket from Beijing to Xi\'an, a hotel near the Bund in Shanghai, or skip-the-line entry to the Forbidden City, Trip.com handles it all without requiring a Chinese bank account or WeChat Pay."
      whyYouNeedThis={whyYouNeedThis}
      setupSteps={setupSteps}
      proTips={proTips}
      related={related}
      relatedArticles={relatedArticles}
    />
  )
}