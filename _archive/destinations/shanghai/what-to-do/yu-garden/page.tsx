import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Yu Garden Shanghai (豫园) | Complete Visitor Guide',
  description:
    'Everything you need to visit Yu Garden in Shanghai: hours, prices, best times, what to see in the bazaar, and how to avoid crowds.',
  openGraph: {
    title: 'Yu Garden Shanghai (豫园) | Complete Visitor Guide',
    description:
      'Everything you need to visit Yu Garden in Shanghai: hours, prices, best times, what to see in the bazaar, and how to avoid crowds.',
    url: 'https://www.trailofchina.com/destinations/shanghai/what-to-do/yu-garden',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Yu Garden Shanghai (豫园) | Complete Visitor Guide - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Yu Garden Shanghai guided tour');

export default function YuGardenPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Arrive before 9 AM on a weekday for the most peaceful experience — tour groups typically arrive after 10 AM',
    },
    {
      type: 'tip' as const,
      text: 'Explore the side streets of the bazaar, not just the main lane — better prices and more authentic snacks',
    },
    {
      type: 'tip' as const,
      text: 'Try xiaolongbao at nearby Jia Jia Tang Bao after your visit — it\'s a 5-minute walk north on Huanghe Road',
    },
    {
      type: 'tip' as const,
      text: 'The garden is compact — budget 1-1.5 hours for the garden itself, another hour for the surrounding bazaar',
    },
    {
      type: 'tip' as const,
      text: 'Bring cash — many bazaar stalls don\'t accept international cards, though Alipay and WeChat Pay work',
    },
  ];

  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'The Dragon Wall (龙墙) — the garden\'s most iconic photo with its undulating ceramic dragons',
    },
    {
      type: 'photo' as const,
      text: 'The Exquisite Jade Rock (玉玲珑) — a 3-meter porous Taihu stone, the garden\'s centerpiece',
    },
    {
      type: 'photo' as const,
      text: 'The zigzag bridge over the lotus pond — classic composition with the Huxinting Teahouse in the background',
    },
    {
      type: 'photo' as const,
      text: 'Overlooking the bazaar rooftops from the garden\'s elevated pavilions — great contrast of old and new Shanghai',
    },
  ];

  return (
    <AttractionPage
      name="Yu Garden"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Shanghai', href: '/destinations/shanghai' },
        { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
      ]}
      nameZh="豫园"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/yu-garden-ponds/800/600', alt: 'Yu Garden koi ponds and pavilions' },
        { src: 'https://picsum.photos/seed/yu-garden-pagoda/800/600', alt: 'Ming Dynasty pagoda at Yu Garden' },
        { src: 'https://picsum.photos/seed/yu-garden-bridge/800/600', alt: 'Zigzag bridge over lotus pond at Yu Garden' },
        { src: 'https://picsum.photos/seed/yu-garden-dragon-wall/800/600', alt: 'Dragon Wall with ceramic dragons at Yu Garden' },
        { src: 'https://picsum.photos/seed/yu-garden-tea-house/800/600', alt: 'Huxinting Teahouse at Yu Garden' },
      ]}
      hook="A 400-year-old garden where Ming Dynasty pagodas hover above koi ponds — come early to have it almost to yourself."
      quickInfo={{
        price: '¥40',
        hours: '8:30–17:00',
        bestTime: 'Morning (fewer crowds)',
        metro: 'Yuyuan Garden (Line 10)',
      }}
      whyYouLoveIt={`Stepping into Yu Garden is one of the strangest contrasts you'll feel in Shanghai. One minute you're surrounded by neon signs and shopping malls, and the next you're standing in a 400-year-old Ming Dynasty garden, watching koi glide under a zigzag bridge while the modern city hums just beyond the walls. It's surreal — and it's why locals still come here after decades of living in the city.

The garden itself is small — only about 2 hectares — but every corner is dense with detail. The Dragon Wall winds through the grounds with undulating ceramic dragons, each scale hand-painted. The zigzag bridge forces you to slow down (a deliberate design choice — evil spirits can't turn corners, apparently). And the Exquisite Jade Rock, a porous 3-meter stone, is genuinely impressive up close — water poured over it flows through every hole at once.

My favorite move: visit the Huxinting Teahouse after walking the garden. It's perched in the middle of the lotus pond, reached by that same zigzag bridge, and serves traditional Chinese tea with a view of the garden you just explored. On a quiet weekday morning, with the garden almost empty, it feels like you've stumbled onto a secret — even though it's been here since 1559.`}
      description={`Yu Garden (豫园), meaning "Garden of Happiness," is a 400-year-old classical Chinese garden in the heart of Shanghai's Old City. Built in 1559 during the Ming Dynasty by Pan Yunduan as a private retreat for his aging father, the garden survived wars, occupations, and the Cultural Revolution to become one of Shanghai's most beloved landmarks.

The garden spans about 2 hectares and features the essential elements of classical Chinese landscape design: rockeries carved from Taihu stones, carp-filled ponds, zigzag bridges, and intricately carved wooden pavilions. The Exquisite Jade Rock (玉玲珑), a porous 3-meter stone with 72 holes, is the garden's most famous feature — water poured over it flows through every hole simultaneously.

Surrounding the garden is the Yuyuan Bazaar, a bustling marketplace of souvenir shops, snack stalls, and traditional crafts. The bazaar's architecture mimics Ming and Qing dynasty styles, creating an atmospheric (if touristy) contrast to the serene garden within. The Huxinting Teahouse, reached via a zigzag bridge, sits in the middle of the lotus pond and offers traditional tea service with a view.`}
      hours="8:30-17:00 (last entry 16:45, closed Mondays)"
      price="¥40 (April-October), ¥30 (November-March)"
      nearestSubway="Yuyuan Garden Station, Line 10"
      bestTime="Early morning weekdays (8:30-9:30 AM) before tour groups arrive"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4830%2C31.2259%2C121.4930%2C31.2319&layer=mapnik&marker=31.2289%2C121.4880"
      address="137 Anren Street, Huangpu District"
      addressZh="上海市黄浦区安仁街137号"
      relatedLinks={[]}
      relatedArticles={[
        { title: "The Bund", description: "Shanghai's iconic waterfront district with colonial architecture and stunning views of Pudong.", href: "/destinations/shanghai/what-to-do/bund" },
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest, offering panoramic city views.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets and historic architecture.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Bund Area", description: "Explore the historic waterfront district and its colonial-era buildings.", href: "/destinations/shanghai/where-to-stay/bund-area" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "Shanghai Guide", description: "Complete guide to planning your Shanghai trip.", href: "/destinations/shanghai" },
      ]}
      tips={[...tips, ...photoSpots]}
      practicalDetails={{
        gettingThere: `Take Metro Line 10 to Yuyuan Garden Station. Use Exit 3 and walk south — you'll reach the garden entrance in about 5 minutes. The entrance is tucked behind the touristy bazaar, so you'll walk through a gauntlet of souvenir shops first. Don't let that fool you — the garden itself is genuinely serene once you're inside.

If you're coming from the Bund, it's a pleasant 15-minute walk west along Renmin Road. You'll pass through the Old City area, which gives you a feel for pre-skyscraper Shanghai before you hit the garden gates.`,
        whatToSkip: `The Yuyuan Bazaar directly outside the garden is a tourist trap. Yes, it's atmospheric with its Ming-style architecture, but the prices are inflated and the "traditional crafts" are mostly mass-produced. Walk through it for the visuals, but don't buy souvenirs here — you'll find the same items for half the price in less touristy neighborhoods.

Avoid the garden on weekends and Chinese national holidays if at all possible. It transforms from a peaceful retreat into a shoulder-to-shoulder crowd experience. Monday is also a bad choice — the garden is closed. Tuesday and Wednesday mornings are your best bet for having the place almost to yourself.`,
        photographyTips: `The best light is early morning, when the sun hits the ponds and creates mirror-like reflections of the pagodas and pavilions. The Dragon Wall is the money shot — stand on the bridge for a straight-on view with the wall curving through the frame. The zigzag bridge over the lotus pond is classic, but shoot it from the far side for the Huxinting Teahouse in the background.

Inside the garden, use the elevated pavilions for shots looking down over the bazaar rooftops — the contrast of ancient garden and modern city beyond is uniquely Shanghai. For the Jade Rock, get close and shoot it from a low angle to emphasize its height and the water flowing through the holes.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Quick Yu Garden Snapshot?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Understand the symbolism behind every pavilion. Book a guided visit that includes the teahouse experience and hidden lanes of the Old City.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Guided Visit →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Garden symbolism explained</span>
              <span>✓ Teahouse experience included</span>
              <span>✓ Old City lanes explored</span>
            </div>
          </div>
        </section>
      }
    />
  );
}