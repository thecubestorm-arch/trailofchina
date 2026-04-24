import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Three Gorges Museum (三峡博物馆) Chongqing | History, Culture & Free Entry',
  description: "Chongqing's best museum and one of China's finest. Four floors covering the Three Gorges Dam project, Ba culture, Chongqing's WWII history as China's wartime capital, and a stunning collection of ancient bronzes and ceramics. Free entry, air-conditioned.",
  openGraph: {
    title: 'Three Gorges Museum (三峡博物馆) Chongqing | History, Culture & Free Entry',
    description: "Chongqing's best museum with four floors covering the Three Gorges Dam project, Ba culture, WWII history, and ancient bronzes.",
  },
};

const searchQuery = encodeURIComponent('Three Gorges Museum Chongqing');

const tips = [
  { type: 'tip' as const, text: 'Free entry but bring your passport' },
  { type: 'tip' as const, text: 'The Three Gorges floor is the highlight' },
  { type: 'tip' as const, text: '2-3 hours minimum' },
  { type: 'tip' as const, text: 'The WWII section is fascinating' },
  { type: 'tip' as const, text: 'Combine with People\'s Assembly Hall across the street' },
] as const;

const relatedLinks = [] as const;

export default function ThreeGorgesMuseumPage() {
  return (
    <AttractionPage
      name="Three Gorges Museum"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="三峡博物馆"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/three-gorges-museum-hall/800/600', alt: 'Grand lobby of the Three Gorges Museum in Chongqing' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-exhibit/800/600', alt: 'Ancient bronze and ceramic exhibits at Three Gorges Museum' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-dam/800/600', alt: 'Three Gorges Dam scale model and exhibition' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-ba/800/600', alt: 'Ba culture artifacts and archaeological displays' },
        { src: 'https://picsum.photos/seed/three-gorges-museum-assembly/800/600', alt: 'People\'s Assembly Hall viewed from inside the museum' },
      ]}
      hook="Free, air-conditioned, and the best way to understand why Chongqing exists — at the confluence of two rivers, shaped by 3,000 years of history."
      quickInfo={{
        price: 'Free',
        hours: '9:00–17:00 (closed Mondays)',
        bestTime: 'Afternoon (escape the heat)',
        metro: "People's Assembly Hall (Line 2)",
      }}
      whyYouLoveIt={`This museum answers the question you'll inevitably ask after a day in Chongqing: how did this city become what it is? The answer spans four floors, 3,000 years, and some of the most dramatic events in Chinese history. The Three Gorges Dam exhibit alone is worth the visit — a massive scale model of the dam, footage of the villages that were flooded, and the engineering story of how China moved 1.2 million people to build the world's largest hydroelectric project. You walk out understanding why the Yangtze looks the way it does today.

But the real gems are the smaller exhibits. The Ba culture floor shows the ancient civilization that thrived in the Chongqing region long before there was a China, with bronzes and pottery that have a raw, almost brutal energy distinct from the refined art of the central plains. The WWII section is surprisingly honest about Chongqing's role as China's wartime capital during the Japanese invasion — it doesn't gloss over the suffering, and the photos of the city under bombardment are genuinely moving.

And the best part? It's completely free, heavily air-conditioned, and quiet on weekday afternoons. When Chongqing's summer humidity is crushing you, this museum is not just educational — it's survival. Spend two hours here and you'll walk out with a completely different relationship to the city around you.`}
      description="Chongqing's best museum and one of China's finest. Four floors covering the Three Gorges Dam project, Ba culture, Chongqing's WWII history as China's wartime capital, and a stunning collection of ancient bronzes and ceramics. Free entry, air-conditioned."
      hours="9:00-17:00 (closed Mondays)"
      price="Free (ID required)"
      nearestSubway="Niujiaotuo, Line 2"
      bestTime="Weekday afternoon, or rainy days"
      tips={tips}
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5416%2C29.5619%2C106.5516%2C29.5679&layer=mapnik&marker=29.5649%2C106.5466"
      address="236 Renmin Road, Yuzhong District"
      addressZh="重庆市渝中区人民路236号"
      relatedLinks={relatedLinks}
      relatedArticles={[
        { title: "Ciqikou", description: "Explore Ciqikou, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Chongqing Guide", description: "Complete guide to planning your Chongqing trip.", href: "/destinations/chongqing" },
        { title: "Where to Eat in Chongqing", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
      ]}
      practicalDetails={{
        gettingThere: `Take Metro Line 2 to Niujiaotuo Station, or People's Assembly Hall Station (the same station may be labeled either name depending on the map). Use the exit toward People's Assembly Hall (人民大礼堂) — you literally cannot miss the massive dome of the Assembly Hall across the street from the museum. The museum entrance is on the opposite side of the plaza, facing the hall. The walk from metro to entrance is under 3 minutes.

The museum is directly next to the People's Assembly Hall, one of Chongqing's most recognizable buildings — a massive red-and-green dome that looks like a spaceship landed in the middle of the city. Most visitors do both in one trip: the museum first (2–3 hours), then walk across the plaza to admire the Assembly Hall exterior and take photos. The combo makes for an excellent half-day of culture without spending a single yuan.`,
        whatToSkip: `Some of the upper-floor exhibits can be dry — particularly the sections on modern Chongqing development and urban planning, which are more propaganda than education. If you're short on time, prioritize the Three Gorges floor (usually Floor 2), the Ba culture section, and the WWII exhibit. The other floors are skippable unless you have a specific interest in local calligraphy or modern urban development.

The museum shop is expensive and sells the same generic museum merchandise you'll find everywhere. Don't buy your souvenirs here — Ciqikou has better prices for similar items. The on-site cafe is also overpriced and mediocre; bring your own water and snacks, or eat at one of the many restaurants near the metro station instead.`,
        photographyTips: `The grand lobby is genuinely impressive — a massive atrium with natural light flooding in from above, marble floors, and a dramatic staircase. It's one of the most photogenic museum interiors in China, and the security guards are generally relaxed about photos in the public areas (just don't use flash near the artifacts). Shoot from the top of the main staircase looking down for a symmetrical composition.

The People's Assembly Hall view from inside the museum's upper-floor windows is a unique perspective — the massive dome framed by the museum's modern architecture. The best light is in the morning when the sun hits the Assembly Hall's green-tiled roof from the east, making it glow. The contrast between the traditional dome and the contemporary museum building is a great study in Chongqing's architectural character.

For exhibit photography, the Ba culture bronzes are beautifully lit and make striking close-up subjects. The Three Gorges Dam scale model is best photographed from slightly above to capture the full scope. Note that some special exhibits may prohibit photography — look for signs or ask staff before shooting.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want Deeper Context on Chongqing's History?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private museum tour with a historian guide who brings the Three Gorges, Ba culture, and WWII stories to life — way beyond the exhibit labels.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Museum Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Historian guide</span>
              <span>✓ Three Gorges deep dive</span>
              <span>✓ Assembly Hall included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
