import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'People\'s Park Teahouse Chengdu | The Most Chengdu Experience',
  description:
    'The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks. Hundreds of bamboo chairs under ginkgo trees, ear-cleaning services, mahjong tables, and ¥15 tea refills. This single experience defines what makes Chengdu different from every other Chinese city.',
  openGraph: {
    title: 'People\'s Park Teahouse Chengdu | The Most Chengdu Experience',
    description:
      'The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks.',
    url: 'https://www.trailofchina.com/destinations/chengdu/what-to-do/peoples-park-teahouse',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: "People's Park Teahouse - Trail of China" }],
  },
};

const searchQuery = encodeURIComponent('Chengdu teahouse culture tour');

export default function PeoplesParkTeahousePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Sit anywhere — a tea master will come to you with their long-stream kettle',
    },
    {
      type: 'tip',
      text: 'Ear cleaning (采耳) is a Chengdu specialty — try it for ¥20-30, it\'s surprisingly relaxing',
    },
    {
      type: 'tip',
      text: 'Ginkgo trees turn gold in November — best time for autumn photography',
    },
    {
      type: 'tip',
      text: 'Try the bamboo chair area not the indoor section — more authentic Chengdu atmosphere',
    },
    {
      type: 'tip',
      text: 'Arrive before 2 PM on weekends — tables fill up quickly',
    },
  ] as const;

  const photoSpots = [
    {
      type: 'photo',
      text: 'Hundreds of bamboo chairs from above — the iconic view that defines Chengdu\'s tea culture',
    },
    {
      type: 'photo',
      text: 'Ear-cleaning service — capture the traditional practice in action',
    },
    {
      type: 'photo',
      text: 'Ginkgo trees in autumn — golden leaves falling on bamboo chairs',
    },
    {
      type: 'photo',
      text: 'Tea master pouring long-stream water — the teacup held high, water flowing from Kung Fu height',
    },
  ] as const;

  const relatedLinks = [] as const;

  return (
    <AttractionPage
      name="People's Park Teahouse"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="人民公园茶馆"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/peoples-park-tea/800/500', alt: 'Gaiwan tea being poured under banyan trees at People\'s Park' },
        { src: 'https://picsum.photos/seed/peoples-park-ear/800/500', alt: 'Traditional ear-cleaning service in the teahouse' },
        { src: 'https://picsum.photos/seed/peoples-park-bamboo/800/500', alt: 'Bamboo chairs arranged under ginkgo trees' },
        { src: 'https://picsum.photos/seed/peoples-park-banyan/800/500', alt: 'Massive banyan tree canopy over the teahouse' },
        { src: 'https://picsum.photos/seed/peoples-park-chess/800/500', alt: 'Locals playing chess and mahjong at bamboo tables' },
      ]}
      hook="The most Chengdu experience — sit under a banyan tree, drink gaiwan tea, watch ear-cleaning specialists."
      quickInfo={{
        price: 'Free (tea from ¥15)',
        hours: '6:00–22:00',
        bestTime: 'Afternoon (2–5 PM)',
        metro: 'People\'s Park (Line 2)',
      }}
      whyYouLoveIt={`This is where Chengdu's famous "slow living" becomes tangible — hundreds of bamboo chairs spread under massive banyan trees, each occupied by someone doing absolutely nothing productive. The ear-cleaning specialists wander between tables with their toolbox of metal picks and brushes, offering a 20-minute experience that sounds terrifying but is genuinely relaxing once you surrender to it.

The tea itself is almost incidental — ¥15 gets you a gaiwan and a thermos of hot water that the staff refill all afternoon. What you're really paying for is permission to sit still in a city that never stops moving. Watch an old man teach his grandson chess, listen to retirees debate politics at the next table, and understand why Chengdu consistently ranks as China's happiest city.`}
      practicalDetails={{
        gettingThere: 'Line 2',
        whatToSkip: 'Matchmaking corner',
        photographyTips: 'Ear cleaners, tea pouring, bamboo chairs',
      }}
      description={`The Heming Teahouse in People\'s Park is where Chengdu\'s slow-living culture peaks. Hundreds of bamboo chairs under ginkgo trees, ear-cleaning services, mahjong tables, and ¥15 tea refills. This single experience defines what makes Chengdu different from every other Chinese city.`}
      hours="7:00-22:00"
      price="¥15-25 for tea + seat"
      nearestSubway="People\'s Park, Line 2"
      bestTime="Afternoon (1:00-5:00 PM)"
      tips={[...tips, ...photoSpots]}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0498%2C30.6567%2C104.0598%2C30.6627&layer=mapnik&marker=30.6597%2C104.0548"
      address="6 Shaanxi Street, Qingyang District"
      addressZh="成都市青羊区少城路6号"
        
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Wenshu Monastery", description: "Explore Wenshu Monastery, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/wenshu-monastery" },
        { title: "Jinli", description: "Explore Jinli, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
        { title: "Chengdu Guide", description: "Complete guide to planning your Chengdu trip.", href: "/destinations/chengdu" },
      ]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want to Really Experience Chengdu's Teahouse Culture?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Do more than sip tea. Book a cultural experience that includes a proper tea ceremony, a visit to the matchmaker corner, and the legendary ear-cleaning ritual.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Cultural Experience →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Traditional tea ceremony</span>
              <span>✓ Matchmaker corner visit</span>
              <span>✓ Ear-cleaning ritual included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}