import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Things to Do, Where to Eat, Where to Stay | Trail of China',
  description:
    "Colonial elegance meets tomorrow's skyline. Discover top things to do, where to eat, where to stay, and local tips for Shanghai, China.",
};

// ─── Data ─────────────────────────────────────────────────────────

const quickInfoPills = [
  { icon: '🛜', label: 'Internet:', text: 'VPN required' },
  { icon: '💰', label: '', text: 'Cashless society' },
  { icon: '🚇', label: '', text: 'Excellent metro' },
  { icon: '🌡️', label: 'Best:', text: 'Mar–May, Sep–Nov' },
];

const navTabs = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'things-to-do', label: 'Things to Do', href: '/destinations/shanghai/what-to-do' },
  { id: 'where-to-eat', label: 'Where to Eat', href: '/destinations/shanghai/where-to-eat' },
  { id: 'where-to-stay', label: 'Where to Stay', href: '/destinations/shanghai/where-to-stay' },
  { id: 'local-tips', label: 'Local Tips', href: '/destinations/shanghai/local-tips' },
];

const attractions = [
  {
    name: 'The Bund',
    hook: "Shanghai's most iconic waterfront promenade with skyline views.",
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
    hook: "The world's second-tallest building with a jaw-dropping observation deck.",
    tag: '¥180',
    imageSeed: 'shanghai-tower',
    href: '/destinations/shanghai/what-to-do/shanghai-tower',
  },
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
    sub: "Shanghai's iconic soup dumplings",
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

function SectionHeader({
  title,
  href,
  hrefLabel = 'See all →',
}: {
  title: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-4 md:mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a]">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap"
        >
          {hrefLabel}
        </Link>
      )}
    </div>
  );
}

function PhotoCard({
  href,
  imageSeed,
  title,
  subtitle,
  tag,
  alt,
}: {
  href: string;
  imageSeed: string;
  title: string;
  subtitle: string;
  tag?: string;
  alt: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/600/400`}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">
              {title}
            </h3>
            {tag && (
              <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-[#f5f1ea] text-[#1a3a4a] whitespace-nowrap flex-shrink-0">
                {tag}
              </span>
            )}
          </div>
          <p className="text-sm text-[#64748b] line-clamp-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function EmojiCard({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl overflow-hidden border border-[#ebe4d8] shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-[3/2] bg-[#f5f1ea] flex items-center justify-center text-5xl">
          {icon}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors mb-1">
            {title}
          </h3>
          <p className="text-sm text-[#64748b] line-clamp-2">{subtitle}</p>
        </div>
      </div>
    </Link>
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
            <p className="text-white/80 text-sm md:text-base font-medium mb-1">
              上海, China
            </p>
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
      <nav className="sticky top-0 z-50 bg-white border-b border-[#ebe4d8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {navTabs.map((tab) => {
              const isAnchor = tab.href.startsWith('#');
              const isActive = tab.id === 'overview';
              const className = `px-3 md:px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-[#af5d32] text-[#1a3a4a]'
                  : 'border-transparent text-[#64748b] hover:border-[#af5d32] hover:text-[#1a3a4a]'
              }`;
              return isAnchor ? (
                <a key={tab.id} href={tab.href} className={className}>
                  {tab.label}
                </a>
              ) : (
                <Link key={tab.id} href={tab.href} className={className}>
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-16 md:space-y-20">
        {/* ── Things to Do ── */}
        <section id="things-to-do">
          <SectionHeader
            title="Top Things to Do"
            href="/destinations/shanghai/what-to-do"
          />

          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {attractions.map((attr) => (
              <div key={attr.name} className="w-[260px] md:w-[300px] flex-shrink-0">
                <PhotoCard
                  href={attr.href}
                  imageSeed={attr.imageSeed}
                  title={attr.name}
                  subtitle={attr.hook}
                  tag={attr.tag}
                  alt={attr.name}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Where to Eat ── */}
        <section id="where-to-eat">
          <SectionHeader
            title="Where to Eat"
            href="/destinations/shanghai/where-to-eat"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foodCards.map((food) => (
              <PhotoCard
                key={food.name}
                href={food.href}
                imageSeed={food.imageSeed}
                title={food.name}
                subtitle={food.sub}
                tag={food.tag}
                alt={food.name}
              />
            ))}
          </div>
        </section>

        {/* ── Where to Stay ── */}
        <section id="where-to-stay">
          <SectionHeader
            title="Where to Stay"
            href="/destinations/shanghai/where-to-stay"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods.map((n) => (
              <PhotoCard
                key={n.name}
                href={n.href}
                imageSeed={n.imageSeed}
                title={n.name}
                subtitle={n.vibe}
                alt={n.name}
              />
            ))}
          </div>
        </section>

        {/* ── Know Before You Go ── */}
        <section>
          <SectionHeader title="Know Before You Go" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowBeforeCards.map((card) => (
              <EmojiCard
                key={card.title}
                href={card.href}
                icon={card.icon}
                title={card.title}
                subtitle={card.text}
              />
            ))}
          </div>
        </section>

        {/* ── Local Tips ── */}
        <section id="local-tips">
          <SectionHeader
            title="Local Tips"
            href="/destinations/shanghai/local-tips"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {localTips.map((tip) => (
              <EmojiCard
                key={tip.title}
                href="/destinations/shanghai/local-tips"
                icon="💡"
                title={tip.title}
                subtitle={tip.text}
              />
            ))}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="bg-[#af5d32] rounded-2xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Plan Your Shanghai Trip
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">
            Get a ready-made itinerary or build your own with our travel planner.
            Everything you need for a smooth trip to Shanghai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plan-your-trip/preplanned-trips"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#af5d32] font-semibold rounded-xl hover:bg-[#f5f1ea] transition-colors text-sm"
            >
              Browse Pre-Planned Trips
            </Link>
            <Link
              href="/plan-your-trip/travel-planner"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Open Travel Planner
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
