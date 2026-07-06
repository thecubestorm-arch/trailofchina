import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Local Experiences in Beijing',
  description:
    'Authentic local experiences in Beijing: hutong breakfast walks, temple morning rituals, calligraphy classes, street food tours, and hidden gems with locals.',
  openGraph: {
    title: 'Beijing Local Experiences - Trail of China',
    description: 'Authentic local experiences in Beijing.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Beijing Local Experiences - Trail of China' }],
  },
};

const categories = [
  {
    icon: '🏮',
    title: 'Culture & Heritage',
    experiences: [
      {
        title: 'Hutong Breakfast Walk',
        description: 'Start the day like a Beijinger with jianbing and doujiang at a hidden hutong market.',
        duration: '1.5 hours',
        priceRange: '¥50–100',
      },
      {
        title: 'Temple Morning Rituals',
        description: 'Join locals for incense-burning and chanting at a neighborhood temple.',
        duration: '1 hour',
        priceRange: 'Free',
      },
      {
        title: 'Courtyard Calligraphy Class',
        description: 'Learn basic Chinese calligraphy in a traditional siheyuan courtyard.',
        duration: '2 hours',
        priceRange: '¥150–200',
      },
    ],
  },
  {
    icon: '🍜',
    title: 'Food & Night Markets',
    experiences: [
      {
        title: 'Night Market Street Food Tour',
        description: 'Explore Wangfujing and Guijie with a local foodie who knows the best stalls.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
      {
        title: 'Dumpling Making Workshop',
        description: 'Learn to make jiaozi from scratch with a Beijing grandmother.',
        duration: '2 hours',
        priceRange: '¥120–180',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Art & Neighborhoods',
    experiences: [
      {
        title: '798 Gallery Walk with an Artist',
        description: 'Beyond the tourist path — discover working studios and underground galleries.',
        duration: '2.5 hours',
        priceRange: '¥150–200',
      },
      {
        title: 'Old Beijing Photography Walk',
        description: 'Capture vanishing hutong life with a local photographer.',
        duration: '2 hours',
        priceRange: '¥120–180',
      },
    ],
  },
  {
    icon: '🌅',
    title: 'Off the Beaten Path',
    experiences: [
      {
        title: 'Panjiayuan Antique Market Adventure',
        description: 'Navigate China\'s biggest antique market with a collector who knows real from fake.',
        duration: '3 hours',
        priceRange: '¥100–150',
      },
      {
        title: 'Underground City Tour',
        description: 'Explore Beijing\'s Cold War-era nuclear bunker network.',
        duration: '1.5 hours',
        priceRange: '¥80–120',
      },
    ],
  },
];

export default function BeijingLocalExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'Local Experiences' },
          ]} />
        </div>

        <div className="relative mb-6">
          <ChineseWatermark character="京" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Local Experiences in Beijing</h1>
          <p className="text-sm text-[var(--muted)] mt-1 font-serif">北京的本地体验 · 感受真正的北京</p>
        </div>

        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is a city of contrasts — imperial monuments alongside courtyard neighborhoods
            where locals still live much as they have for centuries. These experiences take you past
            the tourist checklist and into the rhythms of daily life.
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
            <Link href="/destinations/beijing/what-to-do" className="underline text-[var(--accent)]">
              What to Do in Beijing
            </Link>{' '}
            for the must-see sights and hidden gems.
          </p>
        </div>

        <RelatedArticles articles={[
          { title: 'Beijing Travel Guide', description: 'Everything you need to know about visiting Beijing, from top sights to local tips.', href: '/destinations/beijing' },
          { title: 'What to Do in Beijing', description: 'Must-see attractions and hidden gems in Beijing.', href: '/destinations/beijing/what-to-do' },
          { title: 'What Apps to Use in China', description: 'Essential apps to download before your trip to China.', href: '/china-basics/what-apps-to-use' },
          { title: 'Best Time to Visit China', description: 'When to go to China based on weather, crowds, and seasonal events.', href: '/china-basics/best-time-to-visit' },
        ]} />
      </main>
    </div>
  );
}
