import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: '798 Art District Beijing | Galleries, Cafes & Contemporary Art',
  description:
    'Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.',
  openGraph: {
    title: '798 Art District Beijing | Galleries, Cafes & Contemporary Art',
    description:
      'Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/798-art-district',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent('798 Art District tour Beijing');

export default function ArtDistrict798Page() {
  const tips = [
    {
      type: 'tip',
      text: 'Go on weekends only — most galleries are closed on weekdays',
    },
    {
      type: 'tip',
      text: 'UCCA is the anchor gallery — don\'t miss it',
    },
    {
      type: 'tip',
      text: '798 is huge — plan 2-3 hours to explore properly',
    },
    {
      type: 'tip',
      text: 'Many cafes double as galleries — seat yourself and enjoy',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Factory pipes and Bauhaus architecture — the iconic industrial aesthetic of 798',
    },
    {
      type: 'photo',
      text: 'UCCA interior — the modern art space in converted warehouse',
    },
    {
      type: 'photo',
      text: 'Outdoor sculptures — the district is an open-air art gallery',
    },
    {
      type: 'photo',
      text: 'Mao-era slogans on walls — the historical contrast to contemporary art',
    },
  ] as const

  return (
    <AttractionPage
      name="798 Art District"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="798艺术区"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/798-art-factory/800/600', alt: '798 Art District former factory building' },
        { src: 'https://picsum.photos/seed/798-art-sculpture/800/600', alt: 'Large outdoor sculpture in 798 Art District' },
        { src: 'https://picsum.photos/seed/798-art-gallery/800/600', alt: 'Contemporary art gallery in converted warehouse' },
        { src: 'https://picsum.photos/seed/798-art-street/800/600', alt: 'Art-filled street in 798 Art District' },
        { src: 'https://picsum.photos/seed/798-art-cafe/800/600', alt: 'Warehouse cafe in 798 Art District' },
      ]}
      hook="Former munitions factories turned into galleries and cafés — Beijing's most Instagrammable neighborhood."
      quickInfo={{
        price: 'Free',
        hours: '10:00–18:00',
        bestTime: 'Weekday afternoons',
        metro: 'Jiangtai (Line 14)',
      }}
      whyYouLoveIt={`798 is where Beijing's contradictions become photogenic. These were munitions factories built by East German engineers in the 1950s — Bauhaus brick buildings, exposed steel beams, factory pipes painted in industrial yellow — and now they house some of China's most provocative contemporary art. The contrast is the whole point. Mao-era slogans still visible on factory walls share space with massive sculptures that wouldn't look out of place in Tate Modern.

UCCA is the anchor — a converted warehouse with cathedral ceilings that hosts rotating exhibitions from Ai Weiwei to emerging Chinese artists. But the real joy of 798 is wandering without a map. Turn a corner and find a gallery showing video installations in a former boiler room. Another corner, a cafe built into a loading bay with original factory markings still on the walls. The place rewards aimlessness.

The warehouse cafes are an experience in themselves. You sit under steel trusses at tables made from reclaimed factory doors, drinking coffee while surrounded by whatever exhibition the owner has hung on the walls. It sounds pretentious because it is, but it's also genuinely pleasant — the scale of the industrial architecture makes everything feel cinematic.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 14 to Jiangtai Station. Use Exit C and walk east for about 10 minutes along Jiuxianqiao Road. The entrance is marked by the original factory gate and a massive outdoor sculpture — you can't miss it.

Alternatively, take bus 403 or 593 to Dashanzi Road and walk south into the district. Taxis and Didi know "798" without needing the address.`,
        whatToSkip: `Avoid weekends if you can. Saturdays and Sundays turn 798 into a selfie pilgrimage — crowds queue for the same painted walls, and the galleries get packed. Weekday afternoons are dramatically quieter, with many of the same exhibitions open and far more space to actually look at the art.

The overpriced boutiques selling "designer" trinkets near the main entrance are mostly forgettable. The real shopping is in the smaller studios deeper in the district, where artists sell their own work at more reasonable prices.`,
        photographyTips: `The factory-plus-art contrast is the visual signature of 798. Shoot the massive industrial pipes and chimneys with contemporary sculptures in the foreground — the clash of eras makes for strong compositions. The Bauhaus brick buildings with their geometric windows look best in afternoon light when shadows emphasize the industrial geometry.

The giant sculptures scattered throughout the district are designed to be photographed, but try finding unusual angles rather than the obvious front-on shots. Many pieces look completely different from the sides or rear, and the surrounding factory architecture adds context you lose in a tight crop.`,
      }}
      description={`Beijing\'s contemporary art scene in a vast 1950s East German factory complex. Galleries, studios, design shops, cafes in converted warehouses. UCCA Center for Contemporary Art is the anchor. Best on weekends.`}
      hours="10:00-18:00 (most galleries, weekdays many closed)"
      price="Free entry, some exhibitions ¥50-80"
      nearestSubway="Jiangtai, Line 14"
      bestTime="Weekend afternoons"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.4855%2C39.9798%2C116.4955%2C39.9858&layer=mapnik&marker=39.9828%2C116.4905"
      address="4 Jiuxianqiao Road, Chaoyang District"
      addressZh="北京市朝阳区酒仙桥路4号"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Lama Temple", description: "Explore Lama Temple, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/lama-temple" },
        { title: "Hutong Tours", description: "Explore Hutong Tours, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/hutong" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Guide", description: "Complete guide to planning your Beijing trip.", href: "/destinations/beijing" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want to Really Understand 798's Art Scene?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Go beyond the selfies. Book a gallery tour with insider access to artist studios, meetups with local creators, and hidden exhibitions.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Gallery Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Gallery insider access</span>
              <span>✓ Artist meetups</span>
              <span>✓ Hidden studios & exhibitions</span>
            </div>
          </div>
        </section>
      }
    />
  );
}