import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import ToursCTA from '@/components/ToursCTA'

export const metadata: Metadata = {
  title: "What to Do in Xi’an | Terracotta Warriors, City Wall & Historic Highlights",
  description:
    "Plan your Xi’an itinerary with Terracotta Warriors pits, City Wall biking, Muslim Quarter, Bell and Drum Towers, Big Wild Goose Pagoda, and Shaanxi History Museum tips.",
};

export default function XianWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Xi\'an', href: '/destinations/xian' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-[#1a3a4a]">What to Do in Xi’an</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xi’an (西安) is where imperial history and living street culture meet. This page focuses on the
            highest-value stops for first-time visitors, plus practical timing and route advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>
          <div className="space-y-4">
            <Link href="/destinations/xian/what-to-do/terracotta-warriors" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">1. Terracotta Warriors (兵马俑): Pits 1, 2, 3</h3>
              <p className="text-gray-700 mb-2">
                Pit 1 delivers the dramatic first impression with the largest formation. Pit 3 is smaller but
                historically important as a command center, while Pit 2 shows diverse troop types and unfinished
                excavation details that explain the archaeological process.
              </p>
              <p className="text-sm text-[#64748b]">🕐 8:30-17:00, arrive near opening | 💰 ~¥120 | 📍 Lintong District</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/what-to-do/city-wall" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">2. Xi’an City Wall (西安城墙) Bike Loop</h3>
              <p className="text-gray-700 mb-2">
                The complete wall circuit is about 14 km. Riding at golden hour gives excellent skyline views and
                a clear sense of the old-city layout. Enter from South Gate (永宁门) for easy transport access.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Late afternoon to sunset | 💰 Wall + bike rental fee | 📍 South Gate area</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/what-to-do/muslim-quarter" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">3. Muslim Quarter (回民街) + Great Mosque</h3>
              <p className="text-gray-700 mb-2">
                Come for the evening energy, grilled skewers, and local snacks, then step into side lanes for calmer
                food stalls and old storefronts. Pair this with the nearby Great Mosque (西安清真大寺).
              </p>
              <p className="text-sm text-[#64748b]">🕐 17:00-21:00 best atmosphere | 💰 Free to walk, food extra | 📍 Near Drum Tower</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/what-to-do/bell-drum-tower" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">4. Bell Tower (钟楼) &amp; Drum Tower (鼓楼)</h3>
              <p className="text-gray-700 mb-2">
                These Ming-era landmarks anchor central Xi’an. Climb both if possible to compare views and
                understand how historic city planning radiates from this core intersection.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Morning or blue hour | 💰 Combo tickets available | 📍 City center</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/xian/what-to-do/big-wild-goose-pagoda" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">5. Big Wild Goose Pagoda (大雁塔)</h3>
              <p className="text-gray-700 mb-2">
                A major Buddhist site linked to Tang-era monk Xuanzang (玄奘). The surrounding plaza and evening
                fountain area are especially lively, with families and local dance groups.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Late day into evening | 💰 Grounds free, pagoda climb ticketed | 📍 Yanta District</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <div className="block border rounded-xl p-6 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-2 text-[#1a3a4a]">6. Shaanxi History Museum (陕西历史博物馆)</h3>
              <p className="text-gray-700 mb-2">
                One of China's strongest museum collections, especially for Zhou, Qin, Han, and Tang artifacts.
                Reserve in advance and budget at least two focused hours.
              </p>
              <p className="text-sm text-[#64748b]">🕐 Morning slots are smoother | 💰 Timed entry, special exhibits extra | 📍 Near Dayanta</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Shuyuanmen (书院门):</strong> Calligraphy shops and traditional seal carving near the wall.</li>
            <li><strong>Small Wild Goose Pagoda (小雁塔):</strong> Quieter alternative to Dayanta with park setting.</li>
            <li><strong>Yongxingfang (永兴坊):</strong> Curated Shaanxi snack street with cleaner seating than peak 回民街 lanes.</li>
            <li><strong>Ancient City Wall morning walk:</strong> Enter right after opening for fewer cyclists.</li>
          </ul>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1a3a4a]">Want something more authentic?</h2>
          <p className="text-gray-700 mb-3">
            Experience Xi’an like a local — sunrise walks on the city wall, Muslim Quarter deep dives, hand-pulled noodle classes, and shadow puppet workshops.
          </p>
          <Link href="/destinations/xian/local-experiences" className="inline-block text-[#af5d32] font-medium hover:underline">
            Local Experiences in Xi’an →
          </Link>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Xi’an Trip"
            description="See our curated 7-day itinerary with everything timed and mapped out."
            buttonText="See Xi’an itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Xi'an" />
        <RelatedArticles articles={[
          {title: 'Terracotta Warriors', description: 'The must-see army of 8,000 clay soldiers.', href: '/destinations/xian/what-to-do/terracotta-warriors'},
          {title: 'Xi’an City Wall', description: 'Bike or walk along the best-preserved city wall in China.', href: '/destinations/xian/what-to-do/city-wall'},
          {title: 'Where to Eat in Xi’an', description: 'Roujiamo, biangbiang noodles, and more.', href: '/destinations/xian/where-to-eat'},
          {title: 'Xi’an Local Tips', description: 'City Wall bike rentals and market tips.', href: '/destinations/xian/local-tips'},
        ]} />
      </main>
    </div>
  );
}
