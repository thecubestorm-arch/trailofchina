import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles'

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
      'For weather and crowds, aim for March to May or September to November, and plan popular sights early in the day.',
    tags: ['Best Seasons', 'Crowd Timing', 'Practical Advice', 'Local Tips'],
    href: '/destinations/shanghai/local-tips',
  },
];

export default function ShanghaiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
          <ChineseWatermark character="上海" />
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Shanghai</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shanghai is where China&apos;s past and future collide. Historic European architecture lines the Bund while the
            Pudong skyline showcases China&apos;s ambition. It&apos;s a city of world-class dining, vibrant nightlife, and
            endless exploration.
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

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Shanghai</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Best time to visit: March-May or September-November</li>
            <li>• Metro is the easiest way to get around</li>
            <li>• The Bund is spectacular at night</li>
            <li>• Download a VPN before you arrive</li>
          </ul>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">✈️ Getting Here</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Airports</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>✈️ <strong>Shanghai Pudong International Airport (PVG)</strong> — Maglev ¥50 + Metro, 40min total</li>
                <li>✈️ <strong>Shanghai Hongqiao International Airport (SHA)</strong> — 15km west, Metro Line 2/10, 30min</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Train Stations</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>🚄 <strong>Shanghai Hongqiao Station</strong> — High-speed trains to Beijing, Hangzhou, Nanjing</li>
              </ul>
            </div>
            <p className="text-gray-600">
              For inter-city routes, see our <Link href="/china-basics/how-to-get-around/city-to-city" className="text-[#af5d32] font-semibold underline">City-to-City Transport Guide</Link>.
            </p>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Shanghai', description: 'From the Bund to French Concession.', href: '/destinations/shanghai/what-to-do'},
          {title: 'Where to Eat in Shanghai', description: 'Xiaolongbao, shengjianbao, and more local specialties.', href: '/destinations/shanghai/where-to-eat'},
          {title: 'Where to Stay in Shanghai', description: 'Bund, Jing’an, Xintiandi — pick the right area.', href: '/destinations/shanghai/where-to-stay'},
          {title: 'Shanghai Local Tips', description: 'Metro hacks and local etiquette.', href: '/destinations/shanghai/local-tips'},
        ]} />
      </main>
    </div>
  );
}
