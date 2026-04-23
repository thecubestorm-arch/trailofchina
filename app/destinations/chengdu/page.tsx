import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from '@/components/ChineseWatermark';
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Chengdu Travel Guide | Pandas, Teahouses, and Sichuan Flavor',
  description:
    'Plan your Chengdu trip with neighborhood picks, food highlights, panda timing tips, and practical local advice.',
};

const sections = [
  {
    category: 'Guide Section',
    title: '📍 What to Do',
    preview:
      'Plan around a panda base morning, then slow down with park teahouses and a Jinli Street stroll later in the day. Chengdu works best when you mix a few headline attractions with long, unhurried breaks between them.',
    tags: ['Panda Base', 'Teahouses', 'Jinli Street', 'Sichuan Culture'],
    href: '/destinations/chengdu/what-to-do',
  },
  {
    category: 'Guide Section',
    title: '🍜 Where to Eat',
    preview:
      'Chengdu is built for spice lovers, with hotpot, mapo tofu, and noodle shops filling nearly every district. Alternate heavier meals with snack stops so you can try more regional dishes without burning out your palate.',
    tags: ['Hotpot', 'Mapo Tofu', 'Noodle Shops', 'Sichuan Spice'],
    href: '/destinations/chengdu/where-to-eat',
  },
  {
    category: 'Guide Section',
    title: '🏨 Where to Stay',
    preview:
      'Staying near Chunxi Road gives you strong transport links, late-night food options, and easy access to central attractions. It is a reliable base for first-time visitors who want convenience without sacrificing local atmosphere.',
    tags: ['Chunxi Road', 'Central Hotels', 'Shopping Access', 'Metro Links'],
    href: '/destinations/chengdu/where-to-stay',
  },
  {
    category: 'Guide Section',
    title: '💡 Local Tips',
    preview:
      'If you are not used to málà heat, order mild first and add chili gradually instead of starting full spice. Panda entry slots can sell out quickly, so book tickets as soon as your travel dates are fixed.',
    tags: ['Spice Warning', 'Panda Tickets', 'Booking Timing', 'First-Timer Advice'],
    href: '/destinations/chengdu/local-tips',
  },
];

export default function ChengduPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
          <ChineseWatermark character="成都" />
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Chengdu (成都) Travel Guide</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chengdu is China&apos;s city of giant pandas, bamboo-shaded parks, and long teahouse afternoons.
            The pace is slower than Beijing or Shanghai, but the culture is deep: Sichuan Opera (川剧),
            mahjong tables in every corner, and some of the country&apos;s most unforgettable food.
          </p>
        </section>

        <section>
          {sections.map((section, index) => (
            <Link key={section.href} href={section.href} className={`block cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#fdf8f3] ${index < sections.length - 1 ? 'border-b border-[#ebe4d8] pb-8 mb-8' : ''}`}>
              <article className="py-8 px-6 -mx-6 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">{section.category}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1f2933] mt-3">{section.title}</h3>
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
          <h3 className="font-semibold text-amber-800 mb-2">💡 Quick Tips for Chengdu</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Visit the Giant Panda Base (成都大熊猫繁育研究基地) at 8:00 AM for active pandas.</li>
            <li>• Build spice gradually: order a mild hotpot broth before full málà (麻辣).</li>
            <li>• Leave room for tea culture in People&apos;s Park (人民公园), not just sightseeing.</li>
            <li>• Check our <Link href="/destinations/chengdu/local-tips" className="underline">Local Tips</Link> before using taxis.</li>
          </ul>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">✈️ Getting Here</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Airports</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>✈️ <strong>Chengdu Tianfu International Airport (TFU)</strong> — 50km south, Metro Line 18, 60min</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Train Stations</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>🚄 <strong>Chengdu East Station</strong> — High-speed to Chongqing, Xi'an</li>
              </ul>
            </div>
            <p className="text-gray-600">
              For inter-city routes, see our <Link href="/china-basics/how-to-get-around/city-to-city" className="text-[#af5d32] font-semibold underline">City-to-City Transport Guide</Link>.
            </p>
          </div>
        </section>

        <RelatedArticles articles={[
          {title: 'What to Do in Chengdu', description: 'Pandas, teahouses, and Sichuan opera nights.', href: '/destinations/chengdu/what-to-do'},
          {title: 'Where to Eat in Chengdu', description: 'Mapo tofu, hotpot, and dan dan noodles.', href: '/destinations/chengdu/where-to-eat'},
          {title: 'Where to Stay in Chengdu', description: 'Chunxi Road, Jinli area, and Kuanzhai Alley neighborhoods.', href: '/destinations/chengdu/where-to-stay'},
          {title: 'Chengdu Local Tips', description: 'Chili tolerance, panda timing, and local etiquette.', href: '/destinations/chengdu/local-tips'},
        ]} />
      </main>
    </div>
  );
}
