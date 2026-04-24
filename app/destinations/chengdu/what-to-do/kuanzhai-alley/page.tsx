import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Kuanzhai Alley (宽窄巷子) Chengdu | Three Alleys, Three Vibes',
  description:
    'Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques, Well Alley (Jing) for local snacks and wall art. Chengdu\'s answer to Beijing\'s hutong but more polished. Packed but pretty.',
  openGraph: {
    title: 'Kuanzhai Alley (宽窄巷子) Chengdu | Three Alleys, Three Vibes',
    description:
      'Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/kuanzhai-alley',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent('Kuanzhai Alley Chengdu tour');

export default function KuanzhaiAlleyPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Each alley has a different vibe — walk all three to get the full experience',
    },
    {
      type: 'tip',
      text: 'Skip the overpriced restaurants — snack street is where you\'ll find better value',
    },
    {
      type: 'tip',
      text: 'Wide Alley tea houses are best for atmosphere — try authentic Chengdu tea culture',
    },
    {
      type: 'tip',
      text: 'Come early morning (before 10 AM) for photos without crowds',
    },
    {
      type: 'tip',
      text: 'Brick art on Well Alley walls is Instagrammable — don\'t miss this hidden gem',
    },
  ] as const;

  const relatedLinks = [] as const;

  return (
    <AttractionPage
      name="Kuanzhai Alley"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="宽窄巷子"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/kuanzhai-wide/800/500', alt: 'Wide Alley traditional Qing-dynasty architecture' },
        { src: 'https://picsum.photos/seed/kuanzhai-narrow/800/500', alt: 'Narrow Alley with boutique shops and bars' },
        { src: 'https://picsum.photos/seed/kuanzhai-teahouse/800/500', alt: 'Traditional teahouse on Wide Alley' },
        { src: 'https://picsum.photos/seed/kuanzhai-lanterns/800/500', alt: 'Evening lanterns illuminating Kuanzhai Alley' },
        { src: 'https://picsum.photos/seed/kuanzhai-snacks/800/500', alt: 'Sichuan street snacks at Well Alley' },
      ]}
      hook="Three alleys — Wide, Narrow, Well — restored into Chengdu's most charming neighborhood."
      quickInfo={{
        price: 'Free',
        hours: 'Always open',
        bestTime: 'Evening for lanterns',
        metro: 'Kuanzhai Alley (Line 4)',
      }}
      whyYouLoveIt={`Wide Alley is where Chengdu's teahouse culture lives in its most polished form — sip gaiwan tea under a bamboo canopy while watching locals play mahjong for hours. The atmosphere here feels preserved rather than manufactured, with courtyard houses converted into tea gardens that still serve the same brews they did a century ago.

Well Alley is the hidden gem most visitors miss — the brick art walls here are genuinely beautiful, and the snack stalls serve better Sichuan street food than the tourist traps on Jinli. Come at dusk when the lanterns turn on and the day-trippers leave; the alley becomes a glowing corridor of red light that feels like walking through old Chengdu.`}
      practicalDetails={{
        gettingThere: 'Line 4',
        whatToSkip: 'Overpriced souvenir shops',
        photographyTips: 'Evening lanterns, tea ceremonies',
      }}
      description={`Three parallel Qing-dynasty alleys — Wide Alley (Kuan) for tea and culture, Narrow Alley (Zhai) for bars and boutiques, Well Alley (Jing) for local snacks and wall art. Chengdu's answer to Beijing's hutong but more polished. Packed but pretty.`}
      hours="Open all day, best 10:00-22:00"
      price="Free entry"
      nearestSubway="Kuanzhai Alley, Line 4"
      bestTime="Morning for quiet, evening for atmosphere"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0393%2C30.6647%2C104.0493%2C30.6707&layer=mapnik&marker=30.6677%2C104.0443"
      address="8 Kuan Alley, Qingyang District"
      addressZh="成都市青羊区宽巷子8号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Jinli", description: "Explore Jinli, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Wenshu Monastery", description: "Explore Wenshu Monastery, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/wenshu-monastery" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
        { title: "Chengdu Guide", description: "Complete guide to planning your Chengdu trip.", href: "/destinations/chengdu" },
      ]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want to See Beyond the Renovated Alley?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Look deeper than the storefronts. Book a guided walk through courtyard culture, traditional teahouses, and the local art scene that most visitors miss.
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
              <span>✓ Courtyard culture explained</span>
              <span>✓ Traditional teahouse visits</span>
              <span>✓ Local art scene access</span>
            </div>
          </div>
        </section>
      }
    />
  );
}