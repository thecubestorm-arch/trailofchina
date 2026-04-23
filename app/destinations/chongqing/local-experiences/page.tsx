import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Local Experiences in Chongqing | Trail of China',
  description:
    'Authentic local experiences in Chongqing: old town walks, Yangtze river stories, hotpot boot camps, mountain city photography, and ferry crossings.',
};

const categories = [
  {
    icon: '🏮',
    title: 'Culture & Heritage',
    experiences: [
      {
        title: 'Old Town Walk: Ciqikou Beyond Souvenirs',
        description: 'The real Ciqikou — hidden workshops and family-run teahouses behind the tourist street.',
        duration: '2 hours',
        priceRange: '¥50–80',
      },
      {
        title: 'Yangtze River Stories',
        description: 'A boatman shares the history of Chongqing\'s river culture from the cable car.',
        duration: '1.5 hours',
        priceRange: '¥40–60',
      },
    ],
  },
  {
    icon: '🍜',
    title: 'Food & Night Markets',
    experiences: [
      {
        title: 'Chongqing Hotpot Boot Camp',
        description: 'Learn why Chongqing hotpot is different from Sichuan. Eat at 3 different levels of spice.',
        duration: '2.5 hours',
        priceRange: '¥100–150',
      },
      {
        title: 'Night Market Crawl',
        description: 'Hit 3 night markets with a local foodie. Stinky tofu, spicy skewers, and more.',
        duration: '2 hours',
        priceRange: '¥80–120',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Art & Neighborhoods',
    experiences: [
      {
        title: 'Mountain City Photography',
        description: 'Chongqing\'s 3D geography makes for incredible photos. Local photographer shows the best angles.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
      {
        title: 'Eling Park Sunset Gathering',
        description: 'Watch the sunset over the Yangtze with locals playing chess and drinking tea.',
        duration: '1 hour',
        priceRange: 'Free',
      },
    ],
  },
  {
    icon: '🌅',
    title: 'Off the Beaten Path',
    experiences: [
      {
        title: 'Ferry Crossing Experience',
        description: 'The ¥2 Yangtze ferry is being replaced by bridges. Ride it before it\'s gone.',
        duration: '30 min',
        priceRange: '¥2',
      },
      {
        title: 'Dazu Rock Carvings Day Trip',
        description: 'UNESCO site with a guide who explains the 1000-year-old Buddhist art.',
        duration: 'Full day',
        priceRange: '¥300–500',
      },
    ],
  },
];

export default function ChongqingLocalExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chongqing', href: '/destinations/chongqing' },
            { label: 'Local Experiences' },
          ]} />
        </div>

        <div className="relative mb-6">
          <ChineseWatermark character="渝" />
          <h1 className="text-4xl font-bold text-gray-900">Local Experiences in Chongqing</h1>
          <p className="text-sm text-[var(--muted)] mt-1 font-serif">重庆的本地体验 · 感受真正的重庆</p>
        </div>

        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing is a vertical city built on rivers and hills — layers of streets, old town lanes,
            and neon-lit cliffs. These experiences take you into the real texture of a place that feels
            like nowhere else in China.
          </p>
        </section>

        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.title}>
              <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="border border-[#ebe4d8] rounded-xl p-5 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#af5d32]">
                      {cat.title}
                    </span>
                    <h3 className="text-lg font-serif font-bold mt-1 text-[var(--foreground)]">
                      {exp.title}
                    </h3>
                    <p className="text-[var(--muted)] mt-2 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-[var(--muted)]">
                      <span>⏱ {exp.duration}</span>
                      <span>💰 {exp.priceRange}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-[#ebe4d8] pt-8">
          <p className="text-gray-700">
            Looking for the main attractions? See{' '}
            <Link href="/destinations/chongqing/what-to-do" className="underline text-[var(--accent)]">
              What to Do in Chongqing
            </Link>{' '}
            for the must-see sights and hidden gems.
          </p>
        </div>

        <RelatedArticles articles={[
          { title: 'Chongqing Travel Guide', description: 'Everything you need to know about visiting Chongqing, the mountain city.', href: '/destinations/chongqing' },
          { title: 'What to Do in Chongqing', description: 'Must-see attractions and hidden gems in Chongqing.', href: '/destinations/chongqing/what-to-do' },
          { title: 'What Apps to Use in China', description: 'Essential apps to download before your trip to China.', href: '/china-basics/what-apps-to-use' },
          { title: 'City-to-City Transport', description: 'How to travel between Chinese cities by train, bus, and plane.', href: '/china-basics/how-to-get-around/city-to-city' },
        ]} />
      </main>
    </div>
  );
}
