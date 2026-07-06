import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Local Experiences in Shanghai',
  description:
    'Authentic local experiences in Shanghai: shikumen walks, Art Deco tours, street food adventures, art district visits, and day trips with locals.',
  openGraph: {
    title: 'Shanghai Local Experiences - Trail of China',
    description: 'Authentic local experiences in Shanghai.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shanghai Local Experiences - Trail of China' }],
  },
};

const categories = [
  {
    icon: '🏮',
    title: 'Culture & Heritage',
    experiences: [
      {
        title: 'Shikumen Doorway Walk',
        description: 'Explore vanishing stone-gate neighborhoods with a preservationist.',
        duration: '2 hours',
        priceRange: '¥100–150',
      },
      {
        title: 'Art Deco Architecture Tour',
        description: 'Shanghai has the world\'s second-most Art Deco buildings. See them with an architect.',
        duration: '2.5 hours',
        priceRange: '¥150–200',
      },
    ],
  },
  {
    icon: '🍜',
    title: 'Food & Night Markets',
    experiences: [
      {
        title: 'Shanghai Breakfast Adventure',
        description: 'Xiaolongbao, shengjianbao, and congee at local morning spots.',
        duration: '2 hours',
        priceRange: '¥80–120',
      },
      {
        title: 'French Concession Food Walk',
        description: 'Discover the blend of French and Chinese food culture.',
        duration: '2.5 hours',
        priceRange: '¥150–200',
      },
    ],
  },
  {
    icon: '🎨',
    title: 'Art & Neighborhoods',
    experiences: [
      {
        title: 'M50 Art District with a Curator',
        description: 'Contemporary Chinese art beyond the mainstream galleries.',
        duration: '2 hours',
        priceRange: '¥120–180',
      },
      {
        title: 'Silk Market Bargaining Workshop',
        description: 'Learn the art of Chinese negotiation with a local shopper.',
        duration: '1.5 hours',
        priceRange: '¥50–80',
      },
    ],
  },
  {
    icon: '🌅',
    title: 'Off the Beaten Path',
    experiences: [
      {
        title: 'Lujiazui at Dawn',
        description: 'Watch the city wake up from the Bund\'s quiet side. Photography-focused.',
        duration: '1.5 hours',
        priceRange: 'Free',
      },
      {
        title: 'Water Town Day Trip',
        description: 'Zhujiajiao or Qibao with someone who grew up there.',
        duration: 'Full day',
        priceRange: '¥200–300',
      },
    ],
  },
];

export default function ShanghaiLocalExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'Local Experiences' },
          ]} />
        </div>

        <div className="relative mb-6">
          <ChineseWatermark character="沪" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">Local Experiences in Shanghai</h1>
          <p className="text-sm text-[var(--muted)] mt-1 font-serif">上海的本地体验 · 感受真正的上海</p>
        </div>

        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is a city of layers — colonial architecture, Art Deco grandeur, and neighborhood
            lanes where old and new collide. These experiences connect you with the local side of a
            city that never stops changing.
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
            <Link href="/destinations/shanghai/what-to-do" className="underline text-[var(--accent)]">
              What to Do in Shanghai
            </Link>{' '}
            for the must-see sights and hidden gems.
          </p>
        </div>

        <RelatedArticles articles={[
          { title: 'Shanghai Travel Guide', description: 'Everything you need to know about visiting Shanghai, from top sights to local tips.', href: '/destinations/shanghai' },
          { title: 'What to Do in Shanghai', description: 'Must-see attractions and hidden gems in Shanghai.', href: '/destinations/shanghai/what-to-do' },
          { title: 'How to Get Internet in China', description: 'Staying connected: eSIMs, VPNs, and mobile data options.', href: '/china-basics/how-to-get-internet' },
          { title: 'Budget Guide', description: 'How much to budget for your China trip, with cost breakdowns by city.', href: '/plan-your-trip/budget-guide' },
        ]} />
      </main>
    </div>
  );
}
