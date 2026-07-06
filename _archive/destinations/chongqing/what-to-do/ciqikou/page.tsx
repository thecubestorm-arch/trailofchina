import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Ciqikou Ancient Town (磁器口) Chongqing | Snacks, Crafts & Old Streets',
  description: "A 1,000-year-old trading town now converted into Chongqing's busiest tourist street. Narrow stone alleys lined with snack stalls, tea houses, and craft shops. Overwhelmingly crowded on weekends but genuinely atmospheric.",
  openGraph: {
    title: 'Ciqikou Ancient Town (磁器口) Chongqing | Snacks, Crafts & Old Streets',
    description: "A 1,000-year-old trading town now converted into Chongqing's busiest tourist street with narrow stone alleys, snack stalls, and tea houses.",
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Ciqikou Ancient Town (磁器口) Chongqing | Snacks, Crafts & Old Streets - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Ciqikou Ancient Town Chongqing');

const tips = [
  { type: 'tip' as const, text: 'Go on a weekday — weekends are unbearably packed' },
  { type: 'tip' as const, text: 'Explore the back alleys behind the main street' },
  { type: 'tip' as const, text: 'Try chen mahua (陈麻花)' },
  { type: 'tip' as const, text: 'Tea houses on the second floor are quieter' },
  { type: 'tip' as const, text: '15 minutes by subway from city center' },
] as const;

const relatedLinks = [] as const;

export default function CiqikouPage() {
  return (
    <AttractionPage
      name="Ciqikou Ancient Town"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="磁器口"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/ciqikou-street/800/600', alt: 'Ancient cobblestone street in Ciqikou with traditional architecture' },
        { src: 'https://picsum.photos/seed/ciqikou-snacks/800/600', alt: 'Chen Mahua fried dough twists and local snacks at Ciqikou' },
        { src: 'https://picsum.photos/seed/ciqikou-river/800/600', alt: 'River views from Ciqikou overlooking the Jialing' },
        { src: 'https://picsum.photos/seed/ciqikou-alley/800/600', alt: 'Narrow back alley maze in Ciqikou Ancient Town' },
        { src: 'https://picsum.photos/seed/ciqikou-lanterns/800/600', alt: 'Red lanterns hanging over Ciqikou streets at dusk' },
      ]}
      hook="A 1,000-year-old porcelain town turned into Chongqing's snack street — come for the Chen Mahua (fried dough twists) and stay for the river views."
      quickInfo={{
        price: 'Free',
        hours: 'Always open (shops 9:00–22:00)',
        bestTime: 'Morning before crowds',
        metro: 'Ciqikou (Line 1)',
      }}
      whyYouLoveIt={`Ciqikou is what happens when a 1,000-year-old porcelain trading town gets discovered by food bloggers. The main street is unapologetically touristy — every third shop sells the same Chen Mahua fried dough twists, and the crowds on weekends will make you question your life choices. But come early on a weekday morning, duck into the back alleys where the tour groups don't go, and you'll find the old town that still exists underneath the commercial layer.

The real reason to come is the food. Chen Mahua — those twisted, fried dough sticks — are made fresh in front of you, still warm when they hand them over. There's a dozen flavors (sesame, seaweed, spicy, sweet) and the best vendor is the one with the longest line — locals know. Beyond that, the snack stalls sell stinky tofu, rice cakes, sugar-coated haws, and small pottery items that reference the town's porcelain-making past. Grab a bag of Mahua, walk down to the river, and eat it while watching the Jialing flow by.

The back alleys are the secret. Behind the main commercial drag, a maze of narrow lanes climbs uphill, lined with actual old houses, quiet courtyards, and tiny teahouses where old men play mahjong and ignore you completely. These alleys haven't been renovated for tourists — the cobblestones are worn smooth, the walls are crumbling, and it feels like you've stumbled into a different century. That's the Ciqikou worth finding.`}
      description="A 1,000-year-old trading town now converted into Chongqing's busiest tourist street. Narrow stone alleys lined with snack stalls, tea houses, and craft shops. Overwhelmingly crowded on weekends but genuinely atmospheric."
      hours="Open all day, best 9:00-18:00"
      price="Free entry"
      nearestSubway="Ciqikou, Line 1"
      bestTime="Weekday morning (9:00-11:00 AM)"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.4416%2C29.5803%2C106.4516%2C29.5863&layer=mapnik&marker=29.5833%2C106.4466"
      address="Ciqikou, Shapingba District"
      addressZh="重庆市沙坪坝区磁器口"
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Hongya Cave", description: "Chongqing's iconic 11-story stilted building complex overlooking the river.", href: "/destinations/chongqing/what-to-do/hongya-cave" },
        { title: "Chongqing Hotpot", description: "Chongqing's signature dish - spicy, oily, and unforgettable.", href: "/destinations/chongqing/where-to-eat/chongqing-hotpot" },
        { title: "Yangtze River Cable Car", description: "Aerial ride over the Yangtze River with stunning city views.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
      ]}
      practicalDetails={{
        gettingThere: `Take Metro Line 1 to Ciqikou Station. It's about 15 minutes from the city center. Use the exit marked for Ciqikou (磁器口) and follow the crowd — you literally cannot miss the entrance gate. The walk from the metro to the old town takes about 5 minutes through a modern shopping area, then you pass under the traditional archway and you're in.

If you're staying in the Yuzhong peninsula (the main tourist area), Line 1 is direct and runs frequently. The first trains start around 6:30 AM, so you can easily get here before the crowds if you're an early riser. Taxis and Didi are also cheap in Chongqing — expect ¥15–25 from most central hotels.`,
        whatToSkip: `Weekends. Full stop. Ciqikou on a Saturday or Sunday is a shoulder-to-shoulder human traffic jam that makes the snack stalls impossible to reach and the photo opportunities nonexistent. If you have any flexibility at all, come on a Tuesday, Wednesday, or Thursday morning. The difference is night and day.

The main street shops are also skippable — they sell the same mass-produced souvenirs you'll find at every tourist spot in China. The "handicrafts" are mostly imported, and the tea houses on the main drag charge 3x what the ones in the back alleys do. Don't buy pottery here expecting authenticity; the real porcelain tradition is long gone, replaced by tourist-grade trinkets.`,
        photographyTips: `The morning light on the cobblestones is genuinely beautiful — come at 8 AM before the shops fully open, and you'll have the main street almost to yourself. The low sun casts long shadows between the old wooden buildings, and the stone alley glistens. This is the Ciqikou you see in the travel magazines, not the crowded midday version.

For river views, walk to the end of the main street and turn toward the Jialing. There's a riverside path that runs along the water's edge — it's quieter than the town center and gives you framed views of the old buildings against the river and hills behind. At golden hour, the light hits the traditional rooftops from the side and they glow.

The back alleys are photogenic in a different way — crumbling walls, overgrown courtyards, laundry hanging between buildings. It's more documentary than postcard, but it's the real Ciqikou. Shoot these in the late afternoon when the alleys are in shadow and the warm light from the main street spills in.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want the Hidden Ciqikou Experience?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private food and walking tour with a local guide who knows the back alleys, the best Chen Mahua vendor, and the quiet teahouses tourists never find.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Food Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Back alley routes</span>
              <span>✓ Best snack vendors included</span>
              <span>✓ Local English-speaking guide</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
