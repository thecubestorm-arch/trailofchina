import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ChineseWatermark from '@/components/ChineseWatermark';

export const metadata: Metadata = {
  title: 'Local Experiences in Chengdu | Trail of China',
  description:
    'Authentic local experiences in Chengdu: tea ceremonies, Sichuan opera backstage, hotpot with locals, panda volunteering, and hidden temple hikes.',
};

const categories = [
  {
    icon: '🏮',
    title: 'Culture & Heritage',
    experiences: [
      {
        title: 'Tea Ceremony at People\'s Park',
        description: 'Experience gaiwan tea pouring with a local tea master in the park\'s 100-year-old teahouse.',
        duration: '1.5 hours',
        priceRange: '¥30–50',
      },
      {
        title: 'Sichuan Opera Backstage',
        description: 'Go behind the scenes of face-changing opera. See the costumes, meet the performers.',
        duration: '1.5 hours',
        priceRange: '¥150–200',
      },
    ],
  },
  {
    icon: '🍜',
    title: 'Food & Night Markets',
    experiences: [
      {
        title: 'Spicy Hotpot with a Local',
        description: 'Not the tourist version — the neighborhood hotpot spot where locals go.',
        duration: '2 hours',
        priceRange: '¥80–150',
      },
      {
        title: 'Morning Market Walk',
        description: 'Explore the wet markets, taste street snacks, learn Sichuan ingredients.',
        duration: '2 hours',
        priceRange: '¥50–80',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Art & Neighborhoods',
    experiences: [
      {
        title: 'Kuanzhai Alley Craft Walk',
        description: 'Beyond the tourist shops — find working artisans in the narrow alleys.',
        duration: '2 hours',
        priceRange: '¥80–120',
      },
      {
        title: 'Bamboo Weaving Workshop',
        description: 'Learn traditional Sichuan bamboo craft from a master artisan.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
    ],
  },
  {
    icon: '🌅',
    title: 'Off the Beaten Path',
    experiences: [
      {
        title: 'Panda Volunteer Experience',
        description: 'Help care for pandas at a lesser-known reserve (not the tourist base).',
        duration: 'Half day',
        priceRange: '¥500–800',
      },
      {
        title: 'Mount Qingcheng Day Trip',
        description: 'Daoist mountain hike with a local guide who knows the hidden temples.',
        duration: 'Full day',
        priceRange: '¥200–300',
      },
    ],
  },
];

export default function ChengduLocalExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Chengdu', href: '/destinations/chengdu' },
            { label: 'Local Experiences' },
          ]} />
        </div>

        <div className="relative mb-6">
          <ChineseWatermark character="蓉" />
          <h1 className="text-4xl font-bold text-gray-900">Local Experiences in Chengdu</h1>
          <p className="text-sm text-[var(--muted)] mt-1 font-serif">成都的本地体验 · 感受真正的成都</p>
        </div>

        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is the city of "taking it slow" — a place where tea houses stay full all afternoon,
            hotpot smoke drifts from neighborhood alleys, and the pace of life invites you to settle in.
            These experiences go deeper than the panda base and the tourist lanes.
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
            <Link href="/destinations/chengdu/what-to-do" className="underline text-[var(--accent)]">
              What to Do in Chengdu
            </Link>{' '}
            for the must-see sights and hidden gems.
          </p>
        </div>
      </main>
    </div>
  );
}
