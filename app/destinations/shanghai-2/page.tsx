import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Things to Do, Where to Eat, Where to Stay | Trail of China',
  description:
    'Colonial elegance meets tomorrow\'s skyline. Discover top things to do, where to eat, where to stay, and local tips for Shanghai, China.',
};

// ─── Color Palette (Tailwind classes) ─────────────────────────────
// Terracotta: #af5d32  → text-[#af5d32] / bg-[#af5d32]
// Cream:     #f5f1ea  → bg-[#f5f1ea]
// Dark Teal: #1a3a4a  → text-[#1a3a4a] / bg-[#1a3a4a]
// Slate:     #64748b  → text-[#64748b]
// Border:    #ebe4d8  → border-[#ebe4d8]

// ─── Data ─────────────────────────────────────────────────────────
const quickInfoPills = [
  { icon: '🛜', label: 'Internet:', text: 'VPN required' },
  { icon: '💰', label: '', text: 'Cashless society' },
  { icon: '🚇', label: '', text: 'Excellent metro' },
  { icon: '🌡️', label: 'Best:', text: 'Mar–May, Sep–Nov' },
];

const navTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'things-to-do', label: 'Things to Do' },
  { id: 'where-to-eat', label: 'Where to Eat' },
  { id: 'where-to-stay', label: 'Where to Stay' },
  { id: 'local-tips', label: 'Local Tips' },
];

const topAttractions = [
  {
    name: 'The Bund',
    hook: 'Shanghai\'s most iconic waterfront promenade with skyline views.',
    tag: 'Free',
    imageSeed: 'shanghai-bund',
    href: '/destinations/shanghai/what-to-do/bund',
  },
  {
    name: 'Yu Garden',
    hook: 'A 400-year-old classical garden surrounded by a lively bazaar.',
    tag: '¥40',
    imageSeed: 'shanghai-yugarden',
    href: '/destinations/shanghai/what-to-do/yu-garden',
  },
  {
    name: 'French Concession',
    hook: 'Tree-lined avenues, Art Deco villas, and charming cafés.',
    tag: 'Free',
    imageSeed: 'shanghai-frenchconcession',
    href: '/destinations/shanghai/what-to-do/french-concession',
  },
  {
    name: 'Shanghai Tower',
    hook: 'The world\'s second-tallest building with a jaw-dropping observation deck.',
    tag: '¥180',
    imageSeed: 'shanghai-tower',
    href: '/destinations/shanghai/what-to-do/shanghai-tower',
  },
];

const moreAttractions = [
  {
    name: 'Tianzifang',
    hook: 'Winding alleyways packed with studios, galleries, and craft shops.',
    tag: 'Free',
    imageSeed: 'shanghai-tianzifang',
    href: '/destinations/shanghai/what-to-do',
  },
  {
    name: 'Jade Buddha Temple',
    hook: 'Serene Buddhist temple housing two stunning white jade Buddhas.',
    tag: '¥20',
    imageSeed: 'shanghai-jadebuddha',
    href: '/destinations/shanghai/what-to-do',
  },
];

const foodCards = [
  {
    name: 'Xiaolongbao',
    sub: 'Shanghai\'s iconic soup dumplings',
    tag: 'Street Food · ¥30',
    imageSeed: 'xiaolongbao',
    href: '/destinations/shanghai/where-to-eat/xiaolongbao',
  },
  {
    name: 'Shengjianbao',
    sub: 'Pan-fried buns with a crispy bottom',
    tag: 'Street Food · ¥15',
    imageSeed: 'shengjianbao',
    href: '/destinations/shanghai/where-to-eat/shengjianbao',
  },
  {
    name: 'Hairy Crab',
    sub: 'Autumn delicacy from nearby Yangcheng Lake',
    tag: 'Seasonal · ¥200+',
    imageSeed: 'hairy-crab',
    href: '/destinations/shanghai/where-to-eat/hairy-crab',
  },
  {
    name: 'Scallion Oil Noodles',
    sub: 'Simple, fragrant, and deeply comforting',
    tag: 'Restaurant · ¥25–40',
    imageSeed: 'scallion-noodles',
    href: '/destinations/shanghai/where-to-eat/scallion-oil-noodles',
  },
];

const neighborhoods = [
  {
    name: 'Bund Area',
    vibe: 'Iconic skyline · Historic architecture',
    desc: 'Perfect for first-timers who want postcard views and easy river access.',
    imageSeed: 'shanghai-bund-area',
    href: '/destinations/shanghai/where-to-stay/bund-area',
  },
  {
    name: 'French Concession',
    vibe: 'Cafés & boutiques · Tree-lined streets',
    desc: 'The most walkable neighborhood with strong metro links and charm.',
    imageSeed: 'shanghai-french-concession-stay',
    href: '/destinations/shanghai/where-to-stay/french-concession',
  },
  {
    name: "Jing'an",
    vibe: 'Local life · Metro hub',
    desc: 'A central, down-to-earth base with top transport connections.',
    imageSeed: 'shanghai-jingan',
    href: '/destinations/shanghai/where-to-stay/jingan',
  },
  {
    name: 'Xintiandi',
    vibe: 'Modern luxury · Nightlife',
    desc: 'Sleek dining, high-end hotels, and a polished night-out scene.',
    imageSeed: 'shanghai-xintiandi',
    href: '/destinations/shanghai/where-to-stay/xintiandi',
  },
];

const knowBeforeCards = [
  {
    icon: '🛜',
    title: 'Internet',
    text: 'VPNs required. Download before landing.',
    href: '/china-basics/how-to-get-internet',
  },
  {
    icon: '💳',
    title: 'Payment',
    text: 'Alipay & WeChat Pay dominate. Cash rarely needed.',
    href: '/china-basics/what-apps-to-use/payment',
  },
  {
    icon: '🚇',
    title: 'Transport',
    text: 'Metro is excellent. DiDi for taxis.',
    href: '/china-basics/how-to-get-around',
  },
  {
    icon: '📱',
    title: 'Apps',
    text: 'Download Alipay, DiDi, Amap before you go.',
    href: '/china-basics/what-apps-to-use',
  },
  {
    icon: '🛂',
    title: 'Visa',
    text: 'Most Western nationals: 15–30 day visa-free or e-visa.',
    href: '/china-basics/how-china-differs/visa-guide',
  },
  {
    icon: '🌡️',
    title: 'Weather',
    text: 'Best time: March–May, September–November.',
    href: '/plan-your-trip/best-time-to-visit',
  },
];

const localTips = [
  {
    title: 'Plum Rain Season',
    text: 'June–July brings muggy, rainy weather. Clothes never dry. Pack extra socks and a travel umbrella.',
  },
  {
    title: 'Taxi Pro Tip',
    text: 'Shanghai taxis are cheap, but drivers rarely speak English. Use DiDi with English interface instead.',
  },
  {
    title: 'Bund After Dark',
    text: 'The Bund is free and best at night. Skip the overpriced tourist tunnel — walk or take the metro instead.',
  },
  {
    title: 'Metro & Maps',
    text: 'Metro stops have English signs. Google Maps works with a VPN; Amap is the best local alternative.',
  },
];

// ─── Components ───────────────────────────────────────────────────

function SectionHeader({ title, href, hrefLabel = 'See all →' }: { title: string; href?: string; hrefLabel?: string }) {
  return (
    <div className="flex items-center justify-between mb-4 md:mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a]">{title}</h2>
      {href && (
        <Link href={href} className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap">
          {hrefLabel}
        </Link>
      )}
    </div>
  );
}

function PriceTag({ text }: { text: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-[#f5f1ea] text-[#1a3a4a]">
      {text}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default function ShanghaiTripAdvisorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO ========== */}
      <section id="overview" className="relative w-full">
        {/* Hero Image */}
        <div className="relative h-[380px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/shanghai-skyline/1200/500"
            alt="Shanghai skyline"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/40 to-transparent" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 md:pb-12 max-w-6xl mx-auto w-full">
            <p className="text-white/80 text-sm md:text-base font-medium mb-1">上海, China</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3 tracking-tight">
              Shanghai
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-xl">
              Colonial elegance meets tomorrow&apos;s skyline
            </p>
          </div>
        </div>

        {/* Quick Info Pills */}
        <div className="bg-[#f5f1ea] border-b border-[#ebe4d8]">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {quickInfoPills.map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm text-[#1a3a4a] bg-white border border-[#ebe4d8] rounded-full px-3 py-1.5"
                >
                  <span>{pill.icon}</span>
                  {pill.label && <span className="font-semibold">{pill.label}</span>}
                  <span>{pill.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== STICKY TAB NAV ========== */}
      <nav className="sticky top-0 z-[40] bg-white border-b border-[#ebe4d8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-1 md:gap-2 py-2 min-w-max">
              {navTabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="snap-start px-3 md:px-4 py-2 text-sm font-medium text-[#64748b] hover:text-[#1a3a4a] rounded-md hover:bg-[#f5f1ea] transition-colors whitespace-nowrap"
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">

        {/* ── Things to Do ── */}
        <section id="things-to-do">
          <SectionHeader title="Top Things to Do" href="/destinations/shanghai/what-to-do" />

          {/* Horizontal scroll cards */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {topAttractions.map((attr) => (
              <Link
                key={attr.name}
                href={attr.href}
                className="snap-start flex-shrink-0 w-[280px] md:w-[320px] group"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${attr.imageSeed}/600/340`}
                      alt={attr.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors">
                        {attr.name}
                      </h3>
                      <PriceTag text={attr.tag} />
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed">{attr.hook}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More attractions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {moreAttractions.map((attr) => (
              <Link key={attr.name} href={attr.href} className="group">
                <div className="flex gap-4 bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow p-3">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${attr.imageSeed}/200/200`}
                      alt={attr.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors text-sm">
                        {attr.name}
                      </h3>
                      <PriceTag text={attr.tag} />
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2">{attr.hook}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Where to Eat ── */}
        <section id="where-to-eat">
          <SectionHeader title="Where to Eat" href="/destinations/shanghai/where-to-eat" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {foodCards.map((food) => (
              <Link key={food.name} href={food.href} className="group">
                <div className="bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${food.imageSeed}/600/340`}
                      alt={food.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-0.5">
                      {food.name}
                    </h3>
                    <p className="text-sm text-[#64748b] mb-2">{food.sub}</p>
                    <PriceTag text={food.tag} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Where to Stay ── */}
        <section id="where-to-stay">
          <SectionHeader title="Where to Stay" href="/destinations/shanghai/where-to-stay" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {neighborhoods.map((n) => (
              <Link key={n.name} href={n.href} className="group">
                <div className="bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${n.imageSeed}/600/340`}
                      alt={n.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8">
                      <h3 className="font-bold text-white text-lg">{n.name}</h3>
                      <p className="text-white/90 text-sm">{n.vibe}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#64748b]">{n.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Know Before You Go ── */}
        <section>
          <SectionHeader title="Know Before You Go" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowBeforeCards.map((card) => (
              <Link key={card.title} href={card.href} className="group">
                <div className="bg-[#f5f1ea] rounded-xl p-5 hover:bg-[#ebe4d8] transition-colors border border-[#ebe4d8]">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{card.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#1a3a4a] text-sm mb-1 group-hover:text-[#af5d32] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#64748b] leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Local Tips ── */}
        <section id="local-tips">
          <SectionHeader title="Local Tips" href="/destinations/shanghai/local-tips" />

          <div className="space-y-3">
            {localTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-xl p-4 md:p-5 border border-[#ebe4d8] shadow-sm"
              >
                <h3 className="font-bold text-[#1a3a4a] text-sm mb-1">{tip.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="bg-[#1a3a4a] rounded-2xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Plan Your Shanghai Trip
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">
            Get a ready-made itinerary or build your own with our travel planner. Everything you need for a smooth trip to Shanghai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plan-your-trip/preplanned-trips"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#af5d32] text-white font-semibold rounded-lg hover:bg-[#924a28] transition-colors text-sm"
            >
              Browse Pre-Planned Trips
            </Link>
            <Link
              href="/plan-your-trip/travel-planner"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a3a4a] font-semibold rounded-lg hover:bg-[#f5f1ea] transition-colors text-sm"
            >
              Open Travel Planner
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              href="/china-basics/before-you-go/packing-list"
              className="text-sm text-white/70 hover:text-white underline underline-offset-2 transition-colors"
            >
              Download Packing List
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
