import { Metadata } from 'next';
import Link from 'next/link';
import ContextualCTA from '@/components/ContextualCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LanternWatermark from '@/components/LanternWatermark';
import RelatedArticles from '@/components/RelatedArticles'
import ToursCTA from '@/components/ToursCTA'

export const metadata: Metadata = {
  title: 'What to Do in Beijing | Forbidden City, Great Wall & Hidden Gems',
  description:
    'Best things to do in Beijing: Forbidden City, Great Wall sections, Temple of Heaven, hutong tours, 798 Art District, and insider picks.',
};

export default function BeijingWhatToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Beijing', href: '/destinations/beijing' },
            { label: 'What to Do' },
          ]} />
        </div>
        <div className="relative mb-6">
          <LanternWatermark className="-top-4 -right-8" />
          <h1 className="text-4xl font-bold text-gray-900">What to Do in Beijing</h1>
        </div>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beijing&apos;s attractions span 3,000 years of Chinese history. Imperial palaces, the world&apos;s greatest wall,
            and hutong alleys where time stopped decades ago. Start early for headline sights, then slow down
            in the neighborhoods. For food and accommodation, see our{' '}
            <Link href="/destinations/beijing/where-to-eat" className="underline text-[var(--accent)]">
              Where to Eat
            </Link>{' '}
            and{' '}
            <Link href="/destinations/beijing/where-to-stay" className="underline text-[var(--accent)]">
              Where to Stay
            </Link>{' '}
            guides.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Must-See Attractions</h2>
          
          <div className="space-y-4">
            <Link href="/destinations/beijing/what-to-do/forbidden-city" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">1. The Forbidden City (故宫)</h3>
              <p className="text-gray-700 mb-2">
                The world&apos;s largest palace complex — 980 buildings, 8,700 rooms, home to 24 emperors over 500 years.
                Allow 3-4 hours minimum. Enter from the Meridian Gate (south), exit through the Gate of Divine Prowess (north)
                directly into Jingshan Park for a rooftop panorama of the entire complex.
              </p>
              <p className="text-sm text-gray-600">🕐 8:30-17:00 (closed Mondays) | 💰 ¥60 (Apr-Oct), ¥40 (Nov-Mar) | 📍 Metro: Tiananmen East (Line 1)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/great-wall" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">2. Great Wall of China (长城)</h3>
              <p className="text-gray-700 mb-2">
                Multiple sections within reach of Beijing, each with a different character. See the comparison below
                to pick the right one for your trip. All sections are 1-2.5 hours from the city center.
              </p>
              <p className="text-sm text-gray-600">🕐 7:30-17:30 (varies by section) | 💰 ¥40-65 | 📍 Bus or car from city center</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/temple-of-heaven" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">3. Temple of Heaven (天坛)</h3>
              <p className="text-gray-700 mb-2">
                Where Ming and Qing emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests
                is Beijing&apos;s most iconic silhouette. Come at 6 AM to watch locals doing tai chi, sword dancing,
                and choir singing in the park — the real Beijing, not just the monuments.
              </p>
              <p className="text-sm text-gray-600">🕐 6:00-22:00 (park), 8:00-17:30 (halls) | 💰 Park ¥15, All-access ¥34 | 📍 Metro: Tiantan Dongmen (Line 5)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/summer-palace" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">4. Summer Palace (颐和园)</h3>
              <p className="text-gray-700 mb-2">
                Imperial retreat with Kunming Lake, Longevity Hill, and the famous Long Corridor (728 meters of painted
                beams). The Marble Boat is the symbol of Empress Dowager Cixi&apos;s extravagance. Rent a rowboat on the lake
                in summer for a different perspective.
              </p>
              <p className="text-sm text-gray-600">🕐 6:00-18:00 (Nov-Mar to 17:00) | 💰 ¥30 (park), ¥60 (all-inclusive) | 📍 Metro: Beigongmen (Line 4)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/798-art-district" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">5. 798 Art District (798艺术区)</h3>
              <p className="text-gray-700 mb-2">
                Beijing&apos;s contemporary art scene lives in a vast 1950s East German factory complex. Galleries, studios,
                design shops, and cafes fill converted warehouses with soaring ceilings. UCCA Center for Contemporary Art
                is the anchor. Come on a weekend afternoon when everything is open; weekdays many galleries are closed.
              </p>
              <p className="text-sm text-gray-600">🕐 10:00-18:00 (most galleries) | 💰 Free entry, some exhibitions ¥50-80 | 📍 Dashanzi area, 🚇 Metro: Jiangtai (Line 14)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/lama-temple" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">6. Lama Temple (雍和宫)</h3>
              <p className="text-gray-700 mb-2">
                The largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, and thick incense smoke.
                The 18-meter Maitreya Buddha carved from a single sandalwood tree is the centerpiece.
                Visit early morning when monks chant — far more atmospheric than the afternoon crowds.
              </p>
              <p className="text-sm text-gray-600">🕐 9:00-16:30 | 💰 ¥25 | 📍 Metro: Yonghegong (Lines 2/5)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/hutong" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">7. Bell and Drum Towers (钟鼓楼)</h3>
              <p className="text-gray-700 mb-2">
                Two towers at the north end of the old city. Climb the Drum Tower for the best rooftop view of
                hutong rooftops stretching to the horizon. Drum performances happen every hour on the hour.
                The square between them is where old Beijingers gather to play chess and fly kites.
              </p>
              <p className="text-sm text-gray-600">🕐 9:00-17:00 | 💰 ¥20 (combined ticket) | 📍 Gulou area, 🚇 Metro: Gulou Dajie (Line 8)</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>

            <Link href="/destinations/beijing/what-to-do/hutong" className="block border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:bg-[#fdf8f3]">
              <h3 className="text-xl font-semibold mb-2 text-[#1f2933]">8. Hutong Tours (胡同)</h3>
              <p className="text-gray-700 mb-2">
                Beijing&apos;s traditional alleyways are the living counterpoint to the imperial monuments.
                Nanluoguxiang (南锣鼓巷) is the polished tourist lane; Yandai Xiejie (烟袋斜街) near Shichahai
                is quieter and more authentic. Walk or hire a rickshaw — but negotiate the price first (¥80-120/hour).
                The real hutong life is one block off the main tourist drags.
              </p>
              <p className="text-sm text-gray-600">🕐 Anytime | 💰 Free to walk, rickshaw ¥80-120/hr | 📍 Dongcheng/Xicheng districts</p>
              <span className="text-[#af5d32] text-sm font-normal">→ Read more</span>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Great Wall Sections Compared</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold">Mutianyu (慕田峪)</h3>
              <p className="text-gray-700 mt-1">Less crowded, fully restored, beautiful forest scenery. Cable car up, toboggan slide down.</p>
              <p className="text-sm text-gray-600 mt-2">✅ Best for: Most visitors | 🚐 1.5h from Beijing | 💰 ¥40 entry + ¥120 cable car</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold">Badaling (八达岭)</h3>
              <p className="text-gray-700 mt-1">Most famous section, closest to Beijing, also the most crowded. Fully restored, wheelchair accessible.</p>
              <p className="text-sm text-gray-600 mt-2">⚠️ Go before 8 AM or skip | 🚐 1h from Beijing | 💰 ¥40 | Bus 877 from Deshengmen</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold">Jinshanling (金山岭)</h3>
              <p className="text-gray-700 mt-1">Partially unrestored, stunning watchtower views. Best for hiking — 3-4 hour walks to Simatai.</p>
              <p className="text-sm text-gray-600 mt-2">🥾 Best for: Hikers | 🚐 2.5h from Beijing | 💰 ¥65 | Stunning sunrises</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hidden Gems</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Panjiayuan Antique Market (潘家园):</strong> Weekend market opens at 4:30 AM. Antiques, ceramics, Mao-era memorabilia, and curios. The best finds disappear by 8 AM. Bargain hard — start at 30% of asking price</li>
            <li><strong>Shichahai Lakes (什刹海):</strong> Three linked lakes ringed by willow trees. In summer, bars open onto the water. In winter, the frozen lake becomes a public ice rink — locals play ice hockey and ride ice bicycles</li>
            <li><strong>National Museum of China (中国国家博物馆):</strong> Free, massive collection spanning 5,000 years. Highlights: Bronze Age artifacts, Tang dynasty pottery, Silk Road exhibits. Book online 1 day ahead. 📍 East side of Tiananmen Square</li>
            <li><strong>Jingshan Park (景山公园):</strong> Small hill directly north of the Forbidden City. Climb 10 minutes for the single best photo of the palace complex stretching south. ¥2 entry</li>
            <li><strong>Old Summer Palace (圆明园):</strong> Less visited than the Summer Palace, more atmospheric. Ruined by British-French forces in 1860. The scattered stone columns of the European-style fountains are haunting. ¥25</li>
          </ul>
        </section>

        <section className="mb-8 bg-[#fdf8f3] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-[#1f2933]">Want something more authentic?</h2>
          <p className="text-gray-700 mb-3">
            Go beyond the monuments with locals who know the real city — hutong breakfasts, night market food walks, calligraphy in courtyard homes, and hidden workshops.
          </p>
          <Link href="/destinations/beijing/local-experiences" className="inline-block text-[#af5d32] font-medium hover:underline">
            Local Experiences in Beijing →
          </Link>
        </section>

        <div className="mt-8">
          <ContextualCTA
            icon="🗺️"
            title="Plan Your Perfect Beijing Trip"
            description="See our curated 7-day itinerary with everything timed and mapped out."
            buttonText="See Beijing itinerary →"
            buttonHref="/plan-your-trip/preplanned-trips/7-day-route"
            variant="secondary"
          />
        </div>
        <ToursCTA city="Beijing" />
        <RelatedArticles articles={[
          {title: 'Forbidden City Guide', description: 'Explore the largest ancient palace complex in the world.', href: '/destinations/beijing/what-to-do/forbidden-city'},
          {title: 'Great Wall Guide', description: 'How to visit the Great Wall from Beijing.', href: '/destinations/beijing/what-to-do/great-wall'},
          {title: 'Where to Eat in Beijing', description: 'Peking duck and street food favorites.', href: '/destinations/beijing/where-to-eat'},
          {title: 'Beijing Local Tips', description: 'Insider advice for a smoother trip.', href: '/destinations/beijing/local-tips'},
        ]} />
      </main>
    </div>
  );
}
