import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import { makeMetadata } from '@/lib/metadata'

export const metadata: Metadata = makeMetadata({
  title: 'Beijing Travel Guide | Trail of China',
  description: 'Complete guide to Beijing: Forbidden City, Great Wall, hutongs, and more in China\'s historic capital.',

  path: '/destinations/beijing',
});

const sections = [
  {
    category: 'Guide Section',
    title: '📍 What to Do',
    preview:
      'Beijing\'s headline experiences are the Great Wall, the Forbidden City, and the Temple of Heaven, each showing a different layer of imperial history. Start early for major landmarks, then use the afternoon for hutong walks and slower neighborhood stops.',
    tags: ['Great Wall', 'Forbidden City', 'Temple of Heaven', 'Hutongs'],
    href: '/destinations/beijing/what-to-do',
  },
  {
    category: 'Guide Section',
    title: '🍜 Where to Eat',
    preview:
      'Come hungry for Peking duck, hand-pulled noodles, and snacks hidden in hutong side streets. Mixing established duck restaurants with smaller neighborhood kitchens gives you both classic dishes and local everyday flavor.',
    tags: ['Peking Duck', 'Hutong Food', 'Noodle Shops', 'Street Snacks'],
    href: '/destinations/beijing/where-to-eat',
  },
  {
    category: 'Guide Section',
    title: '🏨 Where to Stay',
    preview:
      'Hutong courtyard stays offer character and walkable lanes close to old Beijing atmosphere. The CBD and Sanlitun side are better for modern hotels, shopping, and easy business-style convenience.',
    tags: ['Hutong Courtyards', 'CBD Hotels', 'Sanlitun', 'Transport Access'],
    href: '/destinations/beijing/where-to-stay',
  },
  {
    category: 'Guide Section',
    title: '💡 Local Tips',
    preview:
      'Early starts are essential for major sights because ticket checks and security lines can build quickly by mid-morning.',
    tags: ['Early Starts', 'Ticket Checks', 'Route Planning', 'Local Tips'],
    href: '/destinations/beijing/local-tips',
  },
];

export default function BeijingPage() {
  const travelGuideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: 'Beijing Travel Guide',
    description: metadata.description,
    url: 'https://trailofchina.com/destinations/beijing',
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }}
        />
        <div className="relative">
          <ChineseWatermark character="北京" />
          <h1 className="text-5xl font-bold mb-6 text-[#1a3a4a]">Beijing</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is China&apos;s political and cultural heart. Ancient palaces, imperial gardens,
            and the world&apos;s greatest wall coexist with modern architecture. It&apos;s a city where
            3,000 years of history feels alive in every hutong alley.
          </p>
        </section>

        <section aria-labelledby="beijing-guide-sections">
          <h2 id="beijing-guide-sections" className="text-2xl font-semibold mb-4 text-[#1a3a4a]">Explore Beijing</h2>
          {sections.map((section, index) => (
            <Link key={section.href} href={section.href} className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}`}>
              <article className="py-8 px-6 -mx-6 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-3">{section.title}</h3>
              <p className="text-base md:text-lg text-[#4a5568] leading-relaxed mt-3">{section.preview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f1ea] text-sm text-[#1a3a4a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#af5d32]">
                Read guide →</span>
            </article>
            </Link>
          ))}
        </section>

        <section aria-labelledby="beijing-quick-tips" className="mb-8">
          <h2 id="beijing-quick-tips" className="text-2xl font-semibold mb-4 text-[#1a3a4a]">Quick Tips</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Beijing</h3>
            <ul className="text-amber-900 space-y-2">
              <li>• Best time: Spring (April-May) or Fall (September-October)</li>
              <li>• Subway is best way to get around</li>
              <li>• Book Forbidden City tickets 7 days in advance</li>
              <li>• Great Wall: Mutianyu less crowded than Badaling</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">✈️ Getting Here</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Airports</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>✈️ <strong>Beijing Capital International Airport (PEK)</strong> — 30km NE, Airport Express ¥25, 30min to city</li>
                <li>✈️ <strong>Beijing Daxing International Airport (PKX)</strong> — 46km south, high-speed rail ¥35, 20min to city</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Train Stations</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>🚄 <strong>Beijing South Station</strong> — High-speed trains to Shanghai, Xi'an</li>
                <li>🚄 <strong>Beijing West Station</strong> — Trains to Chengdu, Chongqing</li>
              </ul>
            </div>
            <p className="text-[#64748b]">
              For inter-city routes, see our <Link href="/china-basics/how-to-get-around/city-to-city" className="text-[#af5d32] font-semibold underline">City-to-City Transport Guide</Link>.
            </p>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Beijing', description: 'Top attractions from the Forbidden City to the Great Wall.', href: '/destinations/beijing/what-to-do'},
          {title: 'Where to Eat in Beijing', description: 'Peking duck, jianbing, and street food favorites.', href: '/destinations/beijing/where-to-eat'},
          {title: 'Where to Stay in Beijing', description: 'Best neighborhoods for every budget and style.', href: '/destinations/beijing/where-to-stay'},
          {title: 'Beijing Local Tips', description: 'Insider advice for getting around like a local.', href: '/destinations/beijing/local-tips'},
        ]} />
      </main>
    </div>
  );
}
