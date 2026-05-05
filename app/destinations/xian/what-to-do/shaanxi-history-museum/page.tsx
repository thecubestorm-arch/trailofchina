import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: "Shaanxi History Museum: Xi'an's Best Museum for Dynastic China",
  description:
    "Visit Shaanxi History Museum for bronzes, Tang treasures, and Silk Road artifacts. Hours, booking tips, and how to plan the visit.",
  openGraph: {
    title: "Shaanxi History Museum: Xi'an's Best Museum for Dynastic China",
    description:
      "Visit Shaanxi History Museum for bronzes, Tang treasures, and Silk Road artifacts. Hours, booking tips, and how to plan the visit.",
    url: 'https://trailofchina.com/destinations/xian/what-to-do/shaanxi-history-museum',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent("Shaanxi History Museum Xi'an tour");

export default function ShaanxiHistoryMuseumPage() {
  const tips = [
    {
      type: 'tip' as const,
      text: 'Reserve timed-entry tickets ahead of time whenever possible. Free slots disappear quickly on weekends and holidays.',
    },
    {
      type: 'tip' as const,
      text: 'Go early in the day if you want the main galleries before tour groups stack up.',
    },
    {
      type: 'tip' as const,
      text: 'Give yourself at least two hours. Rushing this museum defeats the point.',
    },
    {
      type: 'tip' as const,
      text: "Pair it with Big Wild Goose Pagoda nearby so you don't zigzag across the city.",
    },
  ];

  const photoSpots = [
    {
      type: 'photo' as const,
      text: 'The grand entry hall works best for wide shots before the crowds fully build.',
    },
    {
      type: 'photo' as const,
      text: 'Look for the Tang tri-color ceramics and goldwork displays if you want the most visually striking gallery shots.',
    },
  ];

  return (
    <AttractionPage
      name="Shaanxi History Museum"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: "Xi'an", href: '/destinations/xian' },
        { label: 'What to Do', href: '/destinations/xian/what-to-do' },
      ]}
      nameZh="陕西历史博物馆"
      city="Xi'an"
      hook="If you want Xi'an to make sense, this is the museum that stitches the dynasties, the Silk Road, and the archaeology together."
      quickInfo={{
        price: 'Main entry free',
        hours: 'Usually daytime hours',
        bestTime: 'Morning',
        metro: 'Xiaozhai or Dayanta area',
      }}
      whyYouLoveIt={`Xi'an can feel overwhelming because every landmark points to a different dynasty, ruler, or period. The Shaanxi History Museum fixes that. It gives you the full arc: Zhou bronzes, Qin imperial power, Han expansion, Tang cosmopolitan wealth, and the Silk Road currents that made the region central to Chinese history. After a visit here, the Terracotta Warriors and the pagodas stop being isolated attractions and start fitting into one coherent story.

The collection is deep, and it does not rely on spectacle alone. Some of the most memorable objects are small: carved figurines, painted pottery, metalwork, and tomb finds that show how refined life in Shaanxi was at its peak. This is one of the best museum stops in inland China, not just a filler activity for a bad-weather day.`}
      images={[
        { src: 'https://picsum.photos/seed/xian-shaanxi-museum-1/800/600', alt: "Shaanxi History Museum exterior in Xi'an" },
        { src: 'https://picsum.photos/seed/xian-shaanxi-museum-2/800/600', alt: 'Ancient artifacts in Shaanxi History Museum galleries' },
        { src: 'https://picsum.photos/seed/xian-shaanxi-museum-3/800/600', alt: 'Bronze and ceramic exhibits in the museum' },
        { src: 'https://picsum.photos/seed/xian-shaanxi-museum-4/800/600', alt: 'Tang dynasty treasures on display in Xi’an' },
      ]}
      practicalDetails={{
        gettingThere: `The museum sits south of the old city in the same general zone as Big Wild Goose Pagoda, so it combines naturally with that area. Metro plus a short walk is usually simplest, and a DiDi is often the most efficient option if you're starting from Bell Tower or the City Wall.`,
        whatToSkip: `Don't try to read every label. Focus on the dynasty-to-dynasty progression and the standout galleries instead of forcing a complete museum marathon. If a special exhibition requires extra payment and you're short on time, the main free collection is already strong enough to justify the visit.`,
        photographyTips: `Use the exterior and entry hall for the cleanest photos. Inside, prioritize a few standout rooms rather than stopping constantly. Many of the best objects are behind glass, so angles matter more than zoom.`,
      }}
      description={`The Shaanxi History Museum is the best single primer on why Xi'an mattered so much for so long. Shaanxi province sat at the center of imperial power for multiple dynasties, and this museum turns that political and cultural weight into something visible: bronzes from early states, tomb goods from the Qin and Han periods, and refined Tang-era objects that reflect the city's role as a Silk Road capital.

For travelers, the museum is especially useful because it gives context before or after the Terracotta Warriors. Instead of seeing Qin Shi Huang's army as a one-off wonder, you start to place it in a broader timeline of state formation, burial culture, religion, trade, and court life. The museum also complements Xi'an's built heritage, from the City Wall to Big Wild Goose Pagoda, by showing the material culture that once filled those worlds.

If you only have time for one museum in Xi'an, make it this one. It is broad, well-known, and genuinely helpful for understanding the city rather than just adding another checklist stop.`}
      hours="Check current timed-entry schedule before visiting"
      price="Main ticket free; some special exhibitions may cost extra"
      nearestSubway="Xiaozhai / Dayanta area"
      bestTime="Morning on a weekday if possible"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=108.9530%2C34.2200%2C108.9630%2C34.2260&layer=mapnik&marker=34.2230%2C108.9580"
      address="91 Xiaozhai East Road, Yanta District"
      addressZh="西安市雁塔区小寨东路91号"
      relatedLinks={[]}
      relatedArticles={[
        { title: 'Terracotta Warriors', description: "See Qin dynasty power in its most famous form.", href: '/destinations/xian/what-to-do/terracotta-warriors' },
        { title: 'Big Wild Goose Pagoda', description: "Pair the museum with Xi'an's major Tang-era landmark nearby.", href: '/destinations/xian/what-to-do/big-wild-goose-pagoda' },
        { title: 'City Wall', description: "Continue with Xi'an's most visible historic structure.", href: '/destinations/xian/what-to-do/city-wall' },
        { title: "Xi'an Local Tips", description: "Practical tips for planning a smoother visit.", href: '/destinations/xian/local-tips' },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 text-center shadow-sm sm:p-8">
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Want the Museum to Actually Make Sense?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-[var(--muted)]">
              A guided visit helps connect the dynasties, key artifacts, and Silk Road context instead of leaving you with disconnected labels.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#8f4d28] hover:shadow-lg"
            >
              Find Museum Tours →
            </a>
          </div>
        </section>
      }
    />
  );
}
