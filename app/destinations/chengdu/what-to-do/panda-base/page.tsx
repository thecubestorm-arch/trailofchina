import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Chengdu Panda Base (成都大熊猫繁育研究基地) - Giant Panda Sanctuary',
  description:
    'World-famous giant panda sanctuary where you can see pandas up close. Best time to visit is morning hours when they\'re most active.',
  openGraph: {
    title: 'Chengdu Panda Base (成都大熊猫繁育研究研究基地) - Giant Panda Sanctuary',
    description:
      'World-famous giant panda sanctuary where you can see pandas up close. Best time to visit is morning hours when they\'re most active.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/panda-base',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent('Chengdu panda base tour');

export default function PandaBasePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Visit in the morning (8:30-10:30 AM) when pandas are most active — they sleep through the afternoon heat',
    },
    {
      type: 'tip',
      text: 'Allow 3-4 hours — there are 6 major enclosures spread across the large park',
    },
    {
      type: 'tip',
      text: 'The 2nd Panda Village houses the youngest pandas and the most active animals',
    },
    {
      type: 'tip',
      text: 'There are two red pandas — smaller and less obvious, near the entrance area',
    },
    {
      type: 'tip',
      text: 'Bring binoculars for better viewing — pandas can be high in trees or hidden in foliage',
    },
    {
      type: 'tip',
      text: 'The pandas sleep 10-16 hours daily, so managing expectations is important — you might see one eating or one sleeping',
    },
    {
      type: 'tip',
      text: 'Visitor Center has educational exhibits about panda conservation and the challenges of breeding',
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'The 2nd Panda Village at 9:00 AM — the most likely to see active pandas playing',
    },
    {
      type: 'photo',
      text: 'Panda Hospital area — occasionally you can see rehabilitation pandas (check for announcements)'
    },
    {
      type: 'photo',
      text: 'The entrance area red pandas — small and quick, look for them in the tree branches',
    },
    {
      type: 'photo',
      text: 'Sunset at the observation towers — quieter and golden lighting',
    },
  ] as const

  return (
    <AttractionPage
      name="Panda Base"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chengdu', href: '/destinations/chengdu' },
      { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
    ]}
      nameZh="成都大熊猫繁育研究基地"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/panda-feeding/800/500', alt: 'Giant pandas eating bamboo during morning feeding' },
        { src: 'https://picsum.photos/seed/panda-nursery/800/500', alt: 'Baby pandas in the nursery enclosure' },
        { src: 'https://picsum.photos/seed/panda-bamboo/800/500', alt: 'Pandas surrounded by bamboo forest' },
        { src: 'https://picsum.photos/seed/panda-red-panda/800/500', alt: 'Red pandas climbing in trees near the entrance' },
        { src: 'https://picsum.photos/seed/panda-forest/800/500', alt: 'Bamboo forest walking path at Panda Base' },
      ]}
      hook="See giant pandas up close — morning feeding at 9 AM is when they're most active."
      quickInfo={{
        price: '¥55',
        hours: '7:30–18:00',
        bestTime: 'Morning (9 AM feeding)',
        metro: 'Panda Metro Line',
      }}
      whyYouLoveIt={`The panda nursery is where the magic happens — watching a 100-gram newborn being hand-fed by keepers is something you'll never forget. Most visitors walk past the nursery too quickly, but linger here and you'll see the youngest pandas in their incubators and playpens, an experience that makes the entire trip worth it.

Don't miss the red panda section near the entrance — they're smaller, more active, and far less crowded than the giant pandas. These fiery little climbers move through the trees like squirrels and are much more likely to interact with visitors. The bamboo forest walking paths between enclosures are also surprisingly beautiful and almost empty after 10 AM when the tour buses leave.`}
      practicalDetails={{
        gettingThere: 'Panda Metro direct line, 30min',
        whatToSkip: 'Afternoon — pandas sleep',
        photographyTips: 'Morning feeding, no flash',
      }}
      description={`Chengdu Panda Base (成都大熊猫繁育研究基地) is the world\'s most famous giant panda sanctuary, housing over 200 pandas at any given time. Opened in 1987, it was founded to rescue and breed giant pandas, which are critically endangered.

The base covers 600 acres of bamboo forests and mountains, with multiple village areas containing pandas of different ages. Visitors can see newborns in the nursery, adolescents in the adolescents' home, and adults in various enclosures. The pandas sleep 10-16 hours daily and spend 12-16 hours eating — bamboo is their only food source.

Pandas have a special wrist bone that acts like a thumb, allowing them to grip bamboo stalks. They\'re not true bears but a unique branch of the bear family that split off 40 million years ago. Despite their size (up to 150 kg), they\'s excellent climbers and swimmers.

The base is also home to red pandas (smaller, squirrel-like relatives) and other endangered species. Conservation efforts include breeding programs that have increased the wild population from fewer than 1,000 in the 1970s to over 1,800 today.`}
      hours="7:30-18:00 (last entry 17:00)"
      price="¥55 (including entry + bus shuttle)"
      nearestSubway="Panda Avenue Station, Line 3"
      bestTime="Morning hours (8:30-10:30 AM) when pandas are most active"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.1279%2C30.7402%2C104.1379%2C30.7462&layer=mapnik&marker=30.7432%2C104.1329"
      address="1375 Panda Base Road, Chenghua District"
      addressZh="成都市成华区熊猫基地路1375号"
        
      relatedLinks={[]}
      relatedArticles={[
        { title: "Jinli Ancient Street", description: "Historic street with traditional Sichuan architecture and snacks.", href: "/destinations/chengdu/what-to-do/jinli-ancient-street" },
        { title: "Sichuan Hotpot", description: "Chengdu's most famous culinary experience - spicy and numbing.", href: "/destinations/chengdu/where-to-eat/sichuan-hotpot" },
        { title: "Chengdu Local Tips", description: "Essential tips for visiting Chengdu and avoiding common pitfalls.", href: "/destinations/chengdu/local-tips" },
        { title: "Chengdu Food Guide", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Stay in Chengdu", description: "Find the best neighborhoods and accommodations in Chengdu.", href: "/destinations/chengdu/where-to-stay" },
        { title: "Jinsha Site Museum", description: "Explore Jinsha Site Museum, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/jinsha-site" },
        { title: "Wuhou Temple", description: "Explore Wuhou Temple, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/wuhou-temple" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than Just Panda Photos?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              See the pandas the right way. Book a guided tour that includes red panda viewing, behind-the-scenes breeding center access, and volunteer program options.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Panda Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Red panda viewing included</span>
              <span>✓ Breeding center access</span>
              <span>✓ Volunteer program options</span>
            </div>
          </div>
        </section>
      }
    />
  );
}