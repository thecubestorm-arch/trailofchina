import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beijing Travel Guide | Trail of China',
  description: 'Complete guide to Beijing: Forbidden City, Great Wall, hutongs, and more in China\'s historic capital.',
};

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
      'Be cautious around unofficial guides and overpriced tourist traps near top monuments and shopping streets. Early starts are essential for major sights because ticket checks and security lines can build quickly by mid-morning.',
    tags: ['Tourist Traps', 'Early Starts', 'Ticket Checks', 'Route Planning'],
    href: '/destinations/beijing/local-tips',
  },
];

export default function BeijingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Beijing</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing is China&apos;s political and cultural heart. Ancient palaces, imperial gardens,
            and the world&apos;s greatest wall coexist with modern architecture. It&apos;s a city where
            3,000 years of history feels alive in every hutong alley.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <Link key={section.href} href={section.href} className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}`}>
              <article className="py-8 px-6 -mx-6 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f2933] mt-3">{section.title}</h2>
              <p className="text-base md:text-lg text-[#4a5568] leading-relaxed mt-3">{section.preview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f1ea] text-sm text-[#1f2933]"
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

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Beijing</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best time: Spring (April-May) or Fall (September-October)</li>
            <li>• Subway is best way to get around</li>
            <li>• Book Forbidden City tickets 7 days in advance</li>
            <li>• Great Wall: Mutianyu less crowded than Badaling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
