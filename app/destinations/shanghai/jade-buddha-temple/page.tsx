import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Jade Buddha Temple (玉佛禅寺) - Shanghai',
  description:
    'Visit the Jade Buddha Temple in Shanghai to see two extraordinary Buddha statues carved from single pieces of Burmese jade. A peaceful retreat in the heart of the city.',
  openGraph: {
    title: 'Jade Buddha Temple (玉佛禅寺) - Shanghai',
    description:
      'Visit the Jade Buddha Temple in Shanghai to see two extraordinary Buddha statues carved from single pieces of Burmese jade. A peaceful retreat in the heart of the city.',
    url: 'https://www.trailofchina.com/destinations/shanghai/what-to-do/jade-buddha-temple',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Jade Buddha Temple (玉佛禅寺) - Shanghai - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Jade Buddha Temple Shanghai');

export default function JadeBuddhaTemplePage() {
  return (
    <AttractionPage
      name="Jade Buddha Temple"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Shanghai', href: '/destinations/shanghai' },
        { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
      ]}
      nameZh="玉佛禅寺"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/jade-buddha-temple/800/600', alt: 'Jade Buddha Temple main hall' },
        { src: 'https://picsum.photos/seed/jade-buddha-statue/800/600', alt: 'Jade Buddha statue' },
        { src: 'https://picsum.photos/seed/jade-buddha-incense/800/600', alt: 'Incense burners at the temple' },
        { src: 'https://picsum.photos/seed/jade-buddha-courtyard/800/600', alt: 'Temple courtyard' },
      ]}
      hook="The Jade Buddha Temple houses two extraordinary Buddha statues carved from single pieces of Burmese jade — one seated, one reclining — that draw pilgrims and travelers alike into a surprisingly peaceful corner of Shanghai."
      quickInfo={{
        price: '¥20 entry',
        hours: '8am–4:30pm',
        bestTime: 'Early morning',
        metro: 'Jiangning Road (Line 13)',
      }}
      whyYouLoveIt={`Most tourists rush in, snap a photo, and leave. But if you arrive early (before 8am), you'll hear the monks' morning chants echoing through the main hall — a hauntingly beautiful experience. The vegetarian restaurant next door serves some of Shanghai's best meat-free dishes, and the incense-scented courtyards are a world away from Jing'an's commercial chaos outside.

The temple was founded in 1882 during the Qing Dynasty to house two jade Buddha statues that had been brought from Burma. A monk named Hui Gen had traveled to Burma and was gifted the statues by a local wealthy Chinaman. He brought them back to Shanghai, and a temple was built to enshrine them. The original temple was destroyed during the 1911 revolution, and the current buildings date from the 1920s.

The seated Buddha is the more famous of the two — 1.9 meters tall and carved from a single piece of white jade. It's housed in a separate hall and is genuinely impressive up close. The reclining Buddha, representing the Buddha's death and entry into Nirvana, is smaller but equally exquisite. Both are remarkably lifelike, with detailed folds in the robes and serene expressions that have survived over a century of incense smoke and public viewing.`}
      description={`The Jade Buddha Temple (玉佛禅寺) is a Buddhist temple in Shanghai's Putuo District, founded in 1882 to house two white jade Buddha statues brought from Burma by the monk Hui Gen. The temple is one of Shanghai's most famous religious sites and remains an active place of worship.

The temple complex covers approximately 2.8 hectares and contains multiple halls, courtyards, and ancillary buildings. The architecture follows traditional Chinese Buddhist temple design with yellow walls, upturned eaves, and painted beams. The main buildings include the Grand Hall (天王殿), the Hall of the Great Hero (大雄宝殿), and the Jade Buddha Chamber (玉佛楼) that houses the seated jade Buddha.

The seated jade Buddha is 190 centimeters tall, carved from a single piece of white jade, and decorated with precious stones. It represents the Buddha in a meditation pose. The reclining jade Buddha, 96 centimeters long, represents the Buddha entering Nirvana and is displayed in a separate reclining Buddha hall.

Beyond the jade statues, the temple houses numerous other Buddhist artifacts, scriptures, and artworks. The complex also includes a vegetarian restaurant that is well-regarded by locals and visitors alike, and a small shop selling Buddhist items.

The temple is an active religious site, with resident monks conducting daily prayers and ceremonies. Visitors are welcome to observe the rituals, and the atmosphere remains devotional rather than purely touristic. Photography is restricted in the halls housing the jade Buddhas.`}
      hours="8:00 AM – 4:30 PM daily (chanting ceremonies at 8:30 AM and 4:00 PM)"
      price="¥20 general admission; additional ¥10 for the reclining Buddha hall"
      nearestSubway="Jiangning Road Station, Line 13, Exit 3"
      bestTime="Early morning (8:00–9:00 AM) for the monks' chanting ceremony; weekdays for fewer crowds"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4360%2C31.2360%2C121.4460%2C31.2420&layer=mapnik&marker=31.2390%2C121.4410"
      address="170 Anyuan Road, Putuo District"
      addressZh="上海市普陀区安远路170号"
      relatedLinks={[]}
      relatedArticles={[
        { title: "The Bund", description: "Shanghai's iconic waterfront promenade with colonial-era buildings and the Pudong skyline.", href: "/destinations/shanghai/what-to-do/bund" },
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
      ]}
      tips={[]}
      practicalDetails={{
        gettingThere: `Take Metro Line 13 to Jiangning Road Station and use Exit 3. Walk north along Jiangning Road for about 5 minutes, then turn left onto Anyuan Road. The temple entrance is at 170 Anyuan Road — look for the traditional yellow temple walls and the large wooden gate.

The temple is also accessible by taxi or ride-share — most drivers know it by name (玉佛禅寺 or Yùfó Chán Sì). If you're staying in the Jing'an area, it's about a 15-minute walk west along Anyuan Road from the Jing'an Temple area.`,
        whatToSkip: `The tourist-oriented incense packages sold near the entrance are overpriced. If you want to burn incense, buy the basic sticks inside the temple grounds — they're cheaper and the money goes to the temple rather than street vendors.

Avoid visiting during major Buddhist holidays (especially Vesak / Buddha's Birthday, usually in May) unless you're specifically interested in the ceremonies. The temple is packed with pilgrims, and you'll spend more time navigating crowds than appreciating the space.

The small shops inside the temple complex sell Buddhist trinkets at inflated prices. If you want souvenirs, the quality is better at the temple's official gift shop, but prices are still higher than comparable items elsewhere in Shanghai.`,
        photographyTips: `Photography is allowed in the courtyards and exterior areas but prohibited inside the halls housing the jade Buddha statues. Respect the signs and the monks' requests — this is an active religious site, not just a museum.

The best exterior shots are in the main courtyard, where the incense burners create atmospheric smoke against the temple architecture. Morning light (8:00–9:00 AM) gives the yellow walls a warm glow. The courtyards are relatively compact, so a standard zoom lens is sufficient — you don't need ultra-wide angles.

For shots of the temple's architecture, the main gate and the Hall of the Great Hero offer the most impressive facades. The contrast between the traditional temple buildings and the modern high-rises visible beyond the walls makes for an interesting juxtaposition that captures Shanghai's blend of old and new.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than the Standard Jade Buddha Visit?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Explore Shanghai's spiritual side with a guided temple and neighborhood tour.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Temple Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Small group sizes</span>
              <span>✓ Local English-speaking guide</span>
              <span>✓ Spiritual context explained</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
