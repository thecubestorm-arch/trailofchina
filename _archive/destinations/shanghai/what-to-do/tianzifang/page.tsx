import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Tianzifang (田子坊) - Shanghai\'s Creative Alleyways',
  description:
    'Explore Tianzifang, Shanghai\'s maze of narrow alleys filled with artists\' studios, indie boutiques, and hidden cafés in restored Shikumen townhouses. Free to visit.',
  openGraph: {
    title: 'Tianzifang (田子坊) - Shanghai\'s Creative Alleyways',
    description:
      'Explore Tianzifang, Shanghai\'s maze of narrow alleys filled with artists\' studios, indie boutiques, and hidden cafés in restored Shikumen townhouses. Free to visit.',
    url: 'https://www.trailofchina.com/destinations/shanghai/what-to-do/tianzifang',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Tianzifang Art District - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Tianzifang Shanghai');

export default function TianzifangPage() {
  return (
    <AttractionPage
      name="Tianzifang"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Shanghai', href: '/destinations/shanghai' },
        { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
      ]}
      nameZh="田子坊"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/tianzifang-alley/800/600', alt: 'Narrow alley in Tianzifang' },
        { src: 'https://picsum.photos/seed/tianzifang-art/800/600', alt: 'Art studio in Tianzifang' },
        { src: 'https://picsum.photos/seed/tianzifang-cafe/800/600', alt: 'Hidden café in Tianzifang' },
        { src: 'https://picsum.photos/seed/tianzifang-shikumen/800/600', alt: 'Restored Shikumen townhouses' },
      ]}
      hook="Tianzifang is Shanghai's creative soul — a maze of narrow alleys where artists' studios, indie boutiques, and hidden cafés fill restored Shikumen townhouses. Skip the tourist-trap sections and explore the upper floors where the real workshops hide."
      quickInfo={{
        price: 'Free',
        hours: 'Shops 10am–10pm',
        bestTime: 'Weekday mornings',
        metro: 'Dapuqiao (Line 9)',
      }}
      whyYouLoveIt={`What makes Tianzifang special isn't the ground-floor souvenir shops — it's what's upstairs. Climb any unmarked staircase and you'll find ceramic studios, silk weavers, calligraphy artists, and jewelry makers who've been here since the complex was an abandoned factory block in the 1990s. The real Tianzifang is vertical, not horizontal.

The area was originally built in the 1930s as shikumen lane houses — a distinctive Shanghai architectural style blending Western townhouses with traditional Chinese courtyard layouts. By the late 1990s, the neighborhood had decayed into a crumbling residential block. Then local artist Chen Yifei moved his studio here, and a slow transformation began. Galleries, cafés, and workshops followed, filling the narrow lanes with creative energy.

Today it's a mix of genuine artist studios, hip cafés, and yes — some tourist-oriented souvenir stalls. The key is knowing which alleys to explore. The main thoroughfare is crowded and commercial, but the side lanes and upper floors still harbor the creative community that made Tianzifang famous.`}
      description={`Tianzifang (田子坊) is a neighborhood of narrow alleyways in Shanghai's former French Concession, known for its creative atmosphere, art studios, boutiques, cafés, and bars. The area occupies a converted residential block of shikumen — traditional Shanghai lane houses with stone-gate entrances that blend Chinese and Western architectural elements.

Located in the Xuhui District near Dapuqiao Station, the complex covers several city blocks and contains hundreds of small businesses spread across multiple interconnected lanes. The buildings date from the 1930s and retain much of their original character, with weathered brick walls, exposed wiring, and narrow staircases that feel unchanged since the neighborhood's industrial past.

The area gained prominence in the late 1990s when artist Chen Yifei established a studio here, drawing other creatives to the cheap, atmospheric spaces. What began as an informal artists' colony evolved into one of Shanghai's most visited cultural destinations, attracting both locals and international tourists.

While commercialization has diluted some of the original creative energy — particularly on the ground floors of the main lanes — the upper floors and side alleys still maintain an active community of working artists and designers. The contrast between the polished tourist-facing shops and the gritty creative workshops above them is part of what makes Tianzifang interesting.`}
      hours="Shops generally 10am–10pm; individual studios may close earlier (often by 6pm)"
      price="Free to enter and wander; individual workshops or galleries may charge for activities"
      nearestSubway="Dapuqiao Station, Line 9, Exit 1"
      bestTime="Weekday mornings for fewer crowds; some studios are more active mid-week"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4610%2C31.2080%2C121.4710%2C31.2140&layer=mapnik&marker=31.2110%2C121.4660"
      address="Lane 210 Taikang Road, Xuhui District"
      addressZh="上海市徐汇区泰康路210弄"
      relatedLinks={[]}
      relatedArticles={[
        { title: "The Bund", description: "Shanghai's iconic waterfront promenade with colonial-era buildings and the Pudong skyline.", href: "/destinations/shanghai/what-to-do/bund" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
      ]}
      tips={[]}
      practicalDetails={{
        gettingThere: `Take Metro Line 9 to Dapuqiao Station and use Exit 1. Walk south along Sinan Road for about 5 minutes, then turn right onto Taikang Road. The main entrance to Tianzifang is at Lane 210 Taikang Road — look for the arched stone gate.

The entrance is easy to miss if you're not looking for it. There's no large sign; just a narrow opening between buildings that leads into the lane network. Once inside, the lanes branch in multiple directions, so it's easy to wander. Don't worry about getting lost — the whole complex is only a few blocks, and dead ends are rare.`,
        whatToSkip: `The ground-floor shops on the main lane sell the same mass-produced souvenirs you'll find across Shanghai — Mao memorabilia, "I ❤️ Shanghai" t-shirts, and generic trinkets. They're fine for a quick look but not where the real character is.

Skip the overpriced cafés on the main thoroughfare that cater primarily to tourists. The coffee is usually mediocre and the prices are double what you'll pay two blocks away. Instead, look for the smaller cafés on the upper floors or in the side lanes — they're less polished but more authentic and cheaper.

Weekends (especially Saturday afternoons) bring heavy crowds that make the narrow lanes nearly impassable. If you must visit on a weekend, go early (before 10am) or late (after 7pm) when tour groups have left.`,
        photographyTips: `The best shots are in the side lanes, not the main thoroughfare. Look for the weathered brick walls, overhead laundry lines, and the contrast between old architecture and modern creative signage. Morning light filters down the narrow lanes in a way that creates interesting shadows.

The upper floors offer views down into the lanes that you can't get from ground level. Don't hesitate to climb the staircases — many are open to visitors and lead to studio spaces with balcony views.

For people shots, the narrow lanes create natural frames. The mix of elderly residents, creative workers, and tourists makes for interesting street photography, though be respectful and ask before photographing inside studios.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than the Standard Tianzifang Stroll?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover hidden artist studios and local creative workshops with a guided neighborhood tour.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Neighborhood Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Small group sizes</span>
              <span>✓ Local English-speaking guide</span>
              <span>✓ Hidden studios included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
