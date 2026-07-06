import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Shanghai French Concession | Walking Guide, Cafes & Hidden Streets',
  description:
    'Explore Shanghai\'s French Concession: tree-lined streets, Art Deco architecture, best cafes, boutiques, and hidden lane houses.',
  openGraph: {
    title: 'Shanghai French Concession | Walking Guide, Cafes & Hidden Streets',
    description:
      'Explore Shanghai\'s French Concession: tree-lined streets, Art Deco architecture, best cafes, boutiques, and hidden lane houses.',
    url: 'https://www.trailofchina.com/destinations/shanghai/what-to-do/french-concession',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shanghai French Concession | Walking Guide, Cafes & Hidden Streets - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('French Concession Shanghai walking tour');

export default function FrenchConcessionPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Best on weekday afternoons — weekends bring crowds to popular cafes and Wukang Road',
    },
    {
      type: 'tip' as const,
      text: 'Wear comfortable walking shoes — the area is best explored on foot, and distances between hidden gems add up',
    },
    {
      type: 'tip' as const,
      text: 'Explore the lane houses (弄堂) off main streets — push through gateways to discover courtyard gardens and local life',
    },
    {
      type: 'tip' as const,
      text: 'Tianzifang (田子坊) is the artsy alleyway complex — go for galleries and cafes, but expect tourist prices',
    },
    {
      type: 'tip' as const,
      text: 'Wukang Road (武康路) is the most photogenic street — Art Deco villas, plane tree canopy, and the iconic Wukang Mansion',
    },
    {
      type: 'tip' as const,
      text: 'Stop at a courtyard cafe for a slow coffee — the area is about atmosphere, not rushing between sights',
    },
  ];

  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'Wukang Mansion (武康大楼) from the street corner — Shanghai\'s most photographed Art Deco building',
    },
    {
      type: 'photo' as const,
      text: 'Plane tree canopy on Fuxing Road (复兴路) — dappled light through the leaves, especially in autumn',
    },
    {
      type: 'photo' as const,
      text: 'Tianzifang narrow alleyways — colorful balconies, hanging laundry, and potted plants framing the shot',
    },
    {
      type: 'photo' as const,
      text: 'Lane house courtyards — peek through iron gates for glimpses of 1930s Shanghai life',
    },
  ];

  return (
    <AttractionPage
      name="French Concession"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Shanghai', href: '/destinations/shanghai' },
        { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
      ]}
      nameZh="法租界"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/french-concession-streets/800/600', alt: 'French Concession plane tree-lined street in Shanghai' },
        { src: 'https://picsum.photos/seed/french-concession-cafe/800/600', alt: 'Courtyard cafe in the French Concession' },
        { src: 'https://picsum.photos/seed/french-concession-architecture/800/600', alt: 'Art Deco villa on Wukang Road' },
        { src: 'https://picsum.photos/seed/french-concession-alley/800/600', alt: 'Hidden alleyway in the French Concession' },
        { src: 'https://picsum.photos/seed/french-concession-night/800/600', alt: 'French Concession at night' },
      ]}
      hook="Shanghai's most livable neighborhood — tree-lined streets, hidden bars, and the best coffee in China."
      quickInfo={{
        price: 'Free to wander',
        hours: 'Always open',
        bestTime: 'Late afternoon for café hopping',
        metro: 'South Shaanxi Rd (Line 1/10/12)',
      }}
      whyYouLoveIt={`The French Concession is the part of Shanghai where you forget you're in a city of 25 million people. Walk down Fuxing Road under a canopy of plane trees, duck into a lane house courtyard, and suddenly the skyscrapers of Pudong feel like they're on another planet. This was the foreign concession that Shanghai never demolished — and it's the best neighborhood in the city.

What makes it special isn't any single attraction; it's the cumulative effect of hundreds of small details. The Art Deco villas on Wukang Road, their balconies rusting in a way that looks intentional. The hidden speakeasies behind unmarked doors — some of the best cocktail bars in Asia are in this neighborhood, and you'd never find them without knowing where to look. The café culture, which is genuinely excellent — Shanghai's coffee scene rivals Melbourne's, and most of the best shops are right here.

I've spent entire afternoons here with no itinerary: coffee on Yongkang Road, a walk down Hunan Road past 1930s villas, dinner at a hole-in-the-wall noodle shop that hasn't changed in 30 years. That's the French Concession. It's not a checklist — it's a vibe.`}
      description={`The French Concession (法租界) is Shanghai's most atmospheric neighborhood — a leafy enclave of plane tree-lined streets, 1930s Art Deco villas, and hidden lane houses that feels worlds apart from the city's hyper-modern skyline.

Established in 1849 as a French colonial settlement, the concession grew into Shanghai's most elegant district. Today, the colonial architecture remains, repurposed as trendy cafes, cocktail bars, boutique hotels, and designer shops. The area roughly spans from Huaihai Road (淮海路) in the north to Zhaojiabang Road in the south, and from Ruijin Road (瑞金路) in the east to Xingfu Road (幸福路) in the west.

Key streets to explore include Wukang Road (武康路) with its iconic Wukang Mansion, Fuxing Road (复兴路) for its canopy of plane trees, and Hunan Road (湖南路) for quiet villa-lined blocks. Tianzifang (田子坊), in the northeastern corner, is a maze of narrow alleys filled with galleries, craft shops, and cafes built into converted lane houses.

The French Concession is less a single attraction and more an experience — plan 2-3 hours to wander without a strict itinerary. Stop for coffee, browse a bookshop, and let the neighborhood's slow rhythm pull you in.`}
      hours="Always open (outdoor neighborhood — cafes and shops typically 10:00-22:00)"
      price="Free (outdoor area — individual venues vary)"
      nearestSubway="South Shaanxi Road Station, Lines 1/10/12"
      bestTime="Weekday afternoons for fewer crowds; autumn for golden plane tree leaves"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4599%2C31.2089%2C121.4699%2C31.2149&layer=mapnik&marker=31.2119%2C121.4649"
      address="Fuxing Middle Road, Huangpu District"
      addressZh="上海市黄浦区复兴中路"
      relatedLinks={[]}
      relatedArticles={[
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "The Bund", description: "Shanghai's iconic waterfront with colonial architecture.", href: "/destinations/shanghai/what-to-do/bund" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "Shanghai Guide", description: "Complete guide to planning your Shanghai trip.", href: "/destinations/shanghai" },
      ]}
      tips={[...tips, ...photoSpots]}
      practicalDetails={{
        gettingThere: `The French Concession is served by multiple metro stations. South Shaanxi Road (Lines 1/10/12) puts you at the northern edge near Huaihai Road. For the southern villa areas, use Changshu Road (Line 1/7) or Shanghai Library (Line 10). For Tianzifang, use Dapuqiao (Line 9).

The best way to arrive is by metro to South Shaanxi Road and then just walk. The entire neighborhood is flat and pedestrian-friendly — you'll cover more ground and see more hidden details on foot than by taxi. Start at the Wukang Mansion and work your way south or east.`,
        whatToSkip: `The main shopping streets — Huaihai Road and parts of Wukang Road — have been overtaken by overpriced boutiques and chain stores. They're fine for a quick walk-through, but the real French Concession is in the side streets and lane houses. Push through the iron gates and explore the quieter blocks.

Tianzifang, while charming, is also touristy and overpriced. Go once for the atmosphere, but don't make it your whole afternoon. The real gems are the hidden cafes and bars on the surrounding streets — places with no signs and no English menus that you'd never find without local knowledge.`,
        photographyTips: `Golden hour on the plane tree streets is unbeatable — Fuxing Road and Wukang Road are the classics, but Hunan Road is quieter and just as photogenic. The dappled light through the leaves creates natural patterns that work beautifully in photos. The Wukang Mansion from the street corner is Shanghai's most photographed Art Deco building for a reason — shoot it just after sunrise or just before sunset for the best light.

For something different, shoot the hidden alleyways and lane house courtyards. Push through the iron gates on side streets and you'll find 1930s architecture, hanging laundry, potted plants on balconies — the real texture of the neighborhood. The narrow lanes of Tianzifang are colorful but crowded; go early morning for clean shots without tourists.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Standard French Concession Walk?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Skip the obvious streets. Book a private walking tour through hidden lane houses, Art Deco villas, and local food stops that most visitors never find.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Walking Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Hidden lane houses & courtyards</span>
              <span>✓ Art Deco architecture focus</span>
              <span>✓ Local food stops included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}