import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Local Experiences in Xi\'an | Trail of China',
  description:
    'Authentic local experiences in Xi\'an: city wall sunrise walks, calligraphy classes, Muslim Quarter deep dives, noodle workshops, and sacred mountain hikes.',
};

const categories = [
  {
    icon: '🏮',
    title: 'Culture & Heritage',
    experiences: [
      {
        title: 'City Wall Sunrise Walk',
        description: 'Walk or cycle the 14km wall at dawn with a local historian.',
        duration: '2 hours',
        priceRange: '¥50–80',
      },
      {
        title: 'Calligraphy at the Forest of Steles',
        description: 'Learn calligraphy where China\'s greatest stone inscriptions live.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
    ],
  },
  {
    icon: '🍜',
    title: 'Food & Night Markets',
    experiences: [
      {
        title: 'Muslim Quarter Deep Dive',
        description: 'Beyond the main tourist street — discover the family-run restaurants locals actually eat at.',
        duration: '2.5 hours',
        priceRange: '¥80–120',
      },
      {
        title: 'Xi\'an Hand-Pulled Noodle Class',
        description: 'Learn biangbiang noodles from a street food master.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Art & Neighborhoods',
    experiences: [
      {
        title: 'Terracotta Warrior Artist Visit',
        description: 'Meet the artisans who still make replicas using 2000-year-old techniques.',
        duration: '2 hours',
        priceRange: '¥120–180',
      },
      {
        title: 'Tang Dynasty Music Performance',
        description: 'Intimate concert of reconstructed Tang court music.',
        duration: '1.5 hours',
        priceRange: '¥100–150',
      },
    ],
  },
  {
    icon: '🌅',
    title: 'Off the Beaten Path',
    experiences: [
      {
        title: 'Hua Mountain Day Trip',
        description: 'One of China\'s Five Sacred Mountains with a local hiking guide.',
        duration: 'Full day',
        priceRange: '¥300–500',
      },
      {
        title: 'Fengxiang Shadow Puppet Workshop',
        description: 'Learn the dying art of Chinese shadow puppetry.',
        duration: '2 hours',
        priceRange: '¥80–120',
      },
    ],
  },
];

export default function XianLocalExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Xi\'an', href: '/destinations/xian' },
            { label: 'Local Experiences' },
          ]} />
        </div>

        <div className="relative mb-6">
          <ChineseWatermark character="西" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Local Experiences in Xi&apos;an</h1>
          <p className="text-sm text-[var(--muted)] mt-1 font-serif">西安的本地体验 · 感受真正的西安</p>
        </div>

        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi&apos;an is where China&apos;s imperial past and living street culture meet. Beyond the terracotta
            warriors and the city wall, the real Xi&apos;an unfolds in teahouse conversations, noodle-pulling
            demonstrations, and alleyways where traditions centuries old are still practiced daily.
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
            <Link href="/destinations/xian/what-to-do" className="underline text-[var(--accent)]">
              What to Do in Xi&apos;an
            </Link>{' '}
            for the must-see sights and hidden gems.
          </p>
        </div>

        <RelatedArticles articles={[
          { title: 'Xi\'an Travel Guide', description: 'Everything you need to know about visiting Xi\'an, from the Terracotta Warriors to the Muslim Quarter.', href: '/destinations/xian' },
          { title: 'What to Do in Xi\'an', description: 'Must-see attractions and hidden gems in Xi\'an.', href: '/destinations/xian/what-to-do' },
          { title: 'China Visa Guide', description: 'Everything you need to know about China visa requirements and application.', href: '/china-basics/visa-guide' },
          { title: 'Best Time to Visit China', description: 'When to go to China based on weather, crowds, and seasonal events.', href: '/china-basics/best-time-to-visit' },
        ]} />
      </main>
    </div>
  );
}
