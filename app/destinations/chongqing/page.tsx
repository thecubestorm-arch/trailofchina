import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Chongqing Travel Guide | Trail of China',
  description:
    'Complete guide to Chongqing: top attractions, spicy food, best neighborhoods, and practical local tips for China\'s 3D mountain megacity.',
};

const sections = [
  {
    category: 'Guide Section',
    title: '📍 What to Do',
    preview:
      'Chongqing highlights include Hongyadong at night, old lanes in Ciqikou, and sweeping river views from the Yangtze cable car. This city is visual and vertical, so plan by district and elevation instead of straight-line distance.',
    tags: ['Hongyadong', 'Ciqikou', 'Yangtze Cable Car', 'Night Views'],
    href: '/destinations/chongqing/what-to-do',
  },
  {
    category: 'Guide Section',
    title: '🍜 Where to Eat',
    preview:
      'The food identity here is intense: bubbling Chongqing hotpot, punchy xiaomian breakfasts, and late-night street stalls. Spread spicy meals across the day and keep simple sides on hand to pace the heat.',
    tags: ['Chongqing Hotpot', 'Xiaomian', 'Street Stalls', 'Spice Strategy'],
    href: '/destinations/chongqing/where-to-eat',
  },
  {
    category: 'Guide Section',
    title: '🏨 Where to Stay',
    preview:
      'Jiefangbei is the most practical base for transit, food streets, and quick access to major viewpoints. It works especially well for first-time visitors trying to navigate multiple levels of roads, stations, and pedestrian decks.',
    tags: ['Jiefangbei', 'Central Hotels', 'Transit Access', 'First Visit'],
    href: '/destinations/chongqing/where-to-stay',
  },
  {
    category: 'Guide Section',
    title: '💡 Local Tips',
    preview:
      'Navigation in Chongqing is genuinely 3D, so include floor and exit details whenever you route between places. Do not trust flat maps alone; verify landmarks and elevation to avoid long detours through the wrong level.',
    tags: ['3D Navigation', 'Map Pitfalls', 'Exit Planning', 'Route Checks'],
    href: '/destinations/chongqing/local-tips',
  },
];

export default function ChongqingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
          <ChineseWatermark character="重庆" />
          <h1 className="text-5xl font-bold mb-6 text-[#1a3a4a]">Chongqing</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chongqing is China&apos;s dramatic 3D mountain city: rivers slicing between steep
            districts, towers rising from misty hills, and a skyline that looks futuristic at
            every angle. It is also the hotpot capital of China, famous for fiery broths,
            neon-lit nights, and dense urban energy wrapped in persistent fog.
          </p>
        </section>

        <section>
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

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Chongqing</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• The city is vertical: add extra time for stairs, elevators, and slopes</li>
            <li>• Night is prime time for Hongyadong and skyline photography</li>
            <li>• Fog is common year-round, especially from late autumn to spring</li>
            <li>• Even “mild” hotpot can be intense if you are not used to málà heat</li>
          </ul>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">✈️ Getting Here</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Airports</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>✈️ <strong>Chongqing Jiangbei International Airport (CKG)</strong> — 20km north, Metro Line 3/10, 40min</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Train Stations</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>🚄 <strong>Chongqing North Station</strong> — High-speed to Chengdu</li>
              </ul>
            </div>
            <p className="text-[#64748b]">
              For inter-city routes, see our <Link href="/china-basics/how-to-get-around/city-to-city" className="text-[#af5d32] font-semibold underline">City-to-City Transport Guide</Link>.
            </p>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Chongqing', description: 'Hongya Cave, Liziba monorail, and Yangtze cable car.', href: '/destinations/chongqing/what-to-do'},
          {title: 'Where to Eat in Chongqing', description: 'Chongqing hotpot, xiaomian, and grilled fish.', href: '/destinations/chongqing/where-to-eat'},
          {title: 'Where to Stay in Chongqing', description: 'Jiefangbei, Hongyadong area, and Cuntan.', href: '/destinations/chongqing/where-to-stay'},
          {title: 'Chongqing Local Tips', description: 'Navigating the 3D city like a local.', href: '/destinations/chongqing/local-tips'},
        ]} />
      </main>
    </div>
  );
}
