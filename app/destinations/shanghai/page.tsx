import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide | Trail of China',
  description: 'Complete guide to Shanghai: where to eat, stay, and what to do in China\'s most modern city.',
};

const sections = [
  {
    category: 'Guide Section',
    title: '📍 What to Do',
    preview:
      "Start at the Bund for classic skyline views, then cross to Pudong for Shanghai Tower and the city\'s futuristic side. Add Yu Garden and nearby lanes for a slower look at old Shanghai before finishing with a riverfront walk after dark.",
    tags: ['Bund', 'Yu Garden', 'Pudong Skyscrapers', 'Night Views'],
    href: '/destinations/shanghai/what-to-do',
  },
  {
    category: 'Guide Section',
    title: '🍜 Where to Eat',
    preview:
      'Shanghai is the place to chase xiaolongbao, crispy scallion pancakes, and late-night street snacks between neighborhoods. Mix iconic dumpling houses with small local spots for the best balance of famous bites and everyday food.',
    tags: ['Xiaolongbao', 'Street Food', 'Local Diners', 'Food Streets'],
    href: '/destinations/shanghai/where-to-eat',
  },
  {
    category: 'Guide Section',
    title: '🏨 Where to Stay',
    preview:
      'The French Concession is ideal for leafy streets, cafes, and a relaxed base with strong metro access. The Bund area suits first-time visitors who want landmark views and easy connections to major attractions.',
    tags: ['French Concession', 'Bund Area', 'Metro Access', 'Hotel Picks'],
    href: '/destinations/shanghai/where-to-stay',
  },
  {
    category: 'Guide Section',
    title: '💡 Local Tips',
    preview:
      'Watch for common tea-house and fake-ticket scams in busy tourist zones, especially near major landmarks. For weather and crowds, aim for March to May or September to November, and plan popular sights early in the day.',
    tags: ['Scam Awareness', 'Best Seasons', 'Crowd Timing', 'Practical Advice'],
    href: '/destinations/shanghai/local-tips',
  },
];

export default function ShanghaiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Shanghai</h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is where China&apos;s past and future collide. Historic European architecture lines the Bund while the
            Pudong skyline showcases China&apos;s ambition. It&apos;s a city of world-class dining, vibrant nightlife, and
            endless exploration.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <article key={section.href} className={index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}>
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
              <Link href={section.href} className="inline-flex items-center gap-1 text-[#af5d32] font-semibold mt-4 hover:underline">
                Read guide →
              </Link>
            </article>
          ))}
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Shanghai</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best time to visit: March-May or September-November</li>
            <li>• Metro is the easiest way to get around</li>
            <li>• The Bund is spectacular at night</li>
            <li>• Download a VPN before you arrive</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
