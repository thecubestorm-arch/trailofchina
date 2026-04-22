import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What to Do in Xi'an | Terracotta Warriors, City Wall & Historic Highlights",
  description:
    "Plan your Xi'an itinerary with Terracotta Warriors pits, City Wall biking, Muslim Quarter, Bell and Drum Towers, Big Wild Goose Pagoda, and Shaanxi History Museum tips.",
};

export default function XianWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">What to Do in Xi'an</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi'an (西安) is where imperial history and living street culture meet. This page focuses on the
            highest-value stops for first-time visitors, plus practical timing and route advice.
          </p>
        </header>

        <section className="mb-8" aria-labelledby="must-see-attractions">
          <h2 id="must-see-attractions" className="text-2xl font-semibold mb-4 text-gray-900">
            Must-See Attractions
          </h2>
          <div className="space-y-4">
            <Link href="/destinations/xian/what-to-do/terracotta-warriors" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">1. Terracotta Warriors (兵马俑): Pits 1, 2, 3 <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                Pit 1 delivers the dramatic first impression with the largest formation. Pit 3 is smaller but
                historically important as a command center, while Pit 2 shows diverse troop types and unfinished
                excavation details that explain the archaeological process.
              </p>
              <p className="text-sm text-gray-600">🕐 8:30-17:00, arrive near opening | 💰 ~¥120 | 📍 Lintong District</p>
            </Link>

            <Link href="/destinations/xian/what-to-do/city-wall" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">2. Xi'an City Wall (西安城墙) Bike Loop <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                The complete wall circuit is about 14 km. Riding at golden hour gives excellent skyline views and
                a clear sense of the old-city layout. Enter from South Gate (永宁门) for easy transport access.
              </p>
              <p className="text-sm text-gray-600">🕐 Late afternoon to sunset | 💰 Wall + bike rental fee | 📍 South Gate area</p>
            </Link>

            <Link href="/destinations/xian/what-to-do/muslim-quarter" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">3. Muslim Quarter (回民街) + Great Mosque <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                Come for the evening energy, grilled skewers, and local snacks, then step into side lanes for calmer
                food stalls and old storefronts. Pair this with the nearby Great Mosque (西安清真大寺).
              </p>
              <p className="text-sm text-gray-600">🕐 17:00-21:00 best atmosphere | 💰 Free to walk, food extra | 📍 Near Drum Tower</p>
            </Link>

            <Link href="/destinations/xian/what-to-do/bell-drum-tower" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">4. Bell Tower (钟楼) &amp; Drum Tower (鼓楼) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                These Ming-era landmarks anchor central Xi'an. Climb both if possible to compare views and
                understand how historic city planning radiates from this core intersection.
              </p>
              <p className="text-sm text-gray-600">🕐 Morning or blue hour | 💰 Combo tickets available | 📍 City center</p>
            </Link>

            <Link href="/destinations/xian/what-to-do/big-wild-goose-pagoda" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">5. Big Wild Goose Pagoda (大雁塔) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                A major Buddhist site linked to Tang-era monk Xuanzang (玄奘). The surrounding plaza and evening
                fountain area are especially lively, with families and local dance groups.
              </p>
              <p className="text-sm text-gray-600">🕐 Late day into evening | 💰 Grounds free, pagoda climb ticketed | 📍 Yanta District</p>
            </Link>

            <Link href="/destinations/xian/what-to-do/shaanxi-history-museum" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">6. Shaanxi History Museum (陕西历史博物馆) <span className="text-[#af5d32] text-sm font-normal">→ Read more</span></h3>
              <p className="text-gray-700 mb-3">
                One of China&apos;s strongest museum collections, especially for Zhou, Qin, Han, and Tang artifacts.
                Reserve in advance and budget at least two focused hours.
              </p>
              <p className="text-sm text-gray-600">🕐 Morning slots are smoother | 💰 Timed entry, special exhibits extra | 📍 Near Dayanta</p>
            </Link>
          </div>
        </section>

        <section className="mb-8" aria-labelledby="hidden-gems">
          <h2 id="hidden-gems" className="text-2xl font-semibold mb-4 text-gray-900">Hidden Gems</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Shuyuanmen (书院门):</strong> Calligraphy shops and traditional seal carving near the wall.</li>
            <li><strong>Small Wild Goose Pagoda (小雁塔):</strong> Quieter alternative to Dayanta with park setting.</li>
            <li><strong>Yongxingfang (永兴坊):</strong> Curated Shaanxi snack street with cleaner seating than peak 回民街 lanes.</li>
            <li><strong>Ancient City Wall morning walk:</strong> Enter right after opening for fewer cyclists.</li>
          </ul>
        </section>

        <section className="mb-8 bg-amber-50 border-l-4 border-amber-400 p-4" aria-labelledby="pro-tips">
          <h2 id="pro-tips" className="font-semibold text-amber-800 mb-2">Pro Tips</h2>
          <ul className="space-y-2 text-amber-900">
            <li>• Pair Terracotta Warriors with a lighter city-center evening, not another major museum day.</li>
            <li>• Do Bell/Drum Tower and Muslim Quarter together to minimize transit time.</li>
            <li>• If your schedule is tight, prioritize Pit 1 + Pit 3 instead of rushing every hall.</li>
            <li>
              • Use this with <Link href="/destinations/xian/local-tips" className="underline">Local Tips</Link>{' '}
              for bus details and scam avoidance.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4" aria-labelledby="tourist-traps">
          <h2 id="tourist-traps" className="font-semibold text-[var(--accent-strong)] mb-2">Tourist Traps</h2>
          <ul className="space-y-2 text-[var(--foreground)]">
            <li>• Fake Terracotta "factory tours" that are mostly shopping detours.</li>
            <li>• Overpriced souvenir sets sold as "museum certified relics."</li>
            <li>• Unofficial guides at station exits claiming "no queue" tickets.</li>
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="related-pages">
          <h2 id="related-pages" className="text-xl font-semibold mb-3 text-gray-900">Plan the Rest of Your Xi'an Trip</h2>
          <p className="text-gray-700">
            Continue with <Link href="/destinations/xian/where-to-eat" className="underline">Where to Eat</Link> for
            dish-by-dish food planning and <Link href="/destinations/xian/where-to-stay" className="underline">Where to Stay</Link>{' '}
            for choosing Bell Tower, Muslim Quarter, station, or Yanta neighborhoods.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="explore-in-detail">
          <h2 id="explore-in-detail" className="text-xl font-semibold mb-3 text-gray-900">Explore in Detail</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/destinations/xian/what-to-do/city-wall" className="text-[var(--accent)] hover:underline">
              City Wall →
            </Link>
            <Link href="/destinations/xian/what-to-do/muslim-quarter" className="text-[var(--accent)] hover:underline">
              Muslim Quarter →
            </Link>
            <Link href="/destinations/xian/what-to-do/bell-drum-tower" className="text-[var(--accent)] hover:underline">
              Bell Tower &amp; Drum Tower →
            </Link>
            <Link href="/destinations/xian/what-to-do/big-wild-goose-pagoda" className="text-[var(--accent)] hover:underline">
              Big Wild Goose Pagoda →
            </Link>
            <Link href="/destinations/xian/what-to-do/terracotta-warriors" className="text-[var(--accent)] hover:underline">
              Terracotta Warriors →
            </Link>
          </div>
        </section>

        <footer>
          <Link href="/destinations/xian" className="text-[var(--accent)] hover:underline">
            ← Back to Xi'an Guide
          </Link>
        </footer>
      </main>
    </div>
  );
}
