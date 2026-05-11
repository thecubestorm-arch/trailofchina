import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Huaqing Palace (华清宫) — Tang Dynasty Hot Springs | Day Trip from Xi\'an',
  description:
    'The complete day trip guide to Huaqing Palace from Xi\'an: imperial hot spring baths, the Xi\'an Incident site, and the Song of Everlasting Sorrow night show. Combine with Terracotta Warriors.',
  keywords: [
    'Huaqing Palace',
    '华清宫',
    'Huaqing Palace Xi\'an',
    'Huaqing hot springs',
    'Song of Everlasting Sorrow',
    'Xi\'an Incident',
    'Chiang Kai-shek arrest',
    'Yang Guifei',
    'how to get to Huaqing Palace',
    'Terracotta Warriors Huaqing combo',
  ],
  openGraph: {
    title: 'Huaqing Palace (华清宫) — Tang Dynasty Hot Springs | Day Trip from Xi\'an',
    description:
      'Where a Tang emperor built hot spring baths for his favorite concubine — and where a modern general arrested Chiang Kai-shek, changing Chinese history forever.',
    url: 'https://www.trailofchina.com/destinations/xian/day-trips/huaqing-palace',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Huaqing Palace — Tang Dynasty Hot Springs - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/xian/day-trips/huaqing-palace',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Huaqing Palace from Xi\'an?',
    answer:
      'Huaqing Palace is right next to the Terracotta Warriors in Lintong District, about 30 km east of Xi\'an. Take bus 306 (游5) from the east square of Xi\'an Railway Station — it stops at Huaqing Palace first (about 45 min, ¥6), then continues to the Terracotta Warriors. A DiDi from central Xi\'an costs ¥60–80 and takes 35–45 minutes. This is why Huaqing Palace and the Terracotta Warriors are best combined in one day trip.',
  },
  {
    question: 'Can I combine Huaqing Palace with the Terracotta Warriors?',
    answer:
      'Yes, and you should. They\'re only 10 minutes apart by bus (bus 306 runs between them). The ideal day: arrive at Huaqing Palace by 9:00 AM, spend 2–3 hours, then take bus 306 to the Terracotta Warriors for 11:30 AM. Or reverse it — Terracotta Warriors at opening (8:30 AM), then Huaqing Palace in the afternoon. If you\'re staying for the night show, do Terracotta Warriors in the morning and Huaqing Palace in the afternoon/evening.',
  },
  {
    question: 'Is the Song of Everlasting Sorrow night show worth it?',
    answer:
      'It\'s one of the best outdoor performances in China. The show uses the palace and lake as a stage, with 300+ performers, underwater scenes, and a real fire effect on the water. It runs April through October, starts at 20:30 (20:10 in peak season), and lasts 70 minutes. Tickets ¥268–988 depending on seat. Book ahead — it sells out on weekends. The higher-tier seats (¥500+) are worth it for better sightlines.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Xi\'an', path: '/destinations/xian' },
  { name: 'Day Trips', path: '/destinations/xian/day-trips' },
  { name: 'Huaqing Palace', path: '/destinations/xian/day-trips/huaqing-palace' },
]);

const searchQuery = encodeURIComponent('Huaqing Palace Terracotta Warriors tour Xi\'an');

export default function HuaqingPalacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AuthorByline date="May 2025" />
      <AttractionPage
        name="Huaqing Palace (Day Trip)"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Xi\'an', href: '/destinations/xian' },
          { label: 'Day Trips', href: '/destinations/xian/day-trips' },
        ]}
        nameZh="华清宫"
        city="Xi'an"
        images={[
          { src: 'https://picsum.photos/seed/huaqing-palace-lake/800/600', alt: 'Huaqing Palace lake and pavilion with mountains behind' },
          { src: 'https://picsum.photos/seed/huaqing-hot-spring-baths/800/600', alt: 'Ancient Tang dynasty hot spring bath pools at Huaqing Palace' },
          { src: 'https://picsum.photos/seed/huaqing-night-show/800/600', alt: 'The Song of Everlasting Sorrow outdoor performance at night' },
          { src: 'https://picsum.photos/seed/huaqing-xian-incident/800/600', alt: 'The Xi\'an Incident site where Chiang Kai-shek was arrested' },
          { src: 'https://picsum.photos/seed/huaqing-garden-view/800/600', alt: 'Palace gardens with classical Chinese architecture at Huaqing' },
        ]}
        hook="Huaqing Palace is where a Tang emperor built hot spring baths for his favorite concubine — and where a modern general arrested Chiang Kai-shek, changing Chinese history forever."
        quickInfo={{
          price: '¥120 (peak) / ¥80 (off-peak)',
          hours: '7:30–18:00 (night show 20:30)',
          bestTime: 'Apr–Jun, Sep–Nov',
          metro: 'Bus 306, 45 min from Xi\'an',
        }}
        whyYouLoveIt={`Huaqing Palace has two stories, and both are wild. The first: Emperor Xuanzong of the Tang dynasty built an entire hot spring palace complex so he could bathe with Yang Guifei, one of the Four Beauties of ancient China. He was so obsessed that he essentially neglected running the empire, which contributed to the An Lushan Rebellion — one of the deadliest conflicts in human history. You can still see the actual bathing pools: the Lotus Pool where Yang Guifei bathed, the Star Pool where the emperor soaked, and the Prince Pool. The pools are shaped like lotus flowers and stars, with original Tang dynasty drainage systems still visible. The water comes from natural hot springs that have been flowing for over 3,000 years.

The second story: on December 12, 1936, General Zhang Xueliang surrounded Huaqing Palace and arrested Chiang Kai-shek in what became known as the Xi'an Incident. Chiang was sleeping in a room on the grounds — you can see the bullet holes in the window glass from the shootout. He fled barefoot up the hill behind the palace, was caught hiding in a rock crevice, and was forced to agree to a united front against Japan. This one event reshaped the course of the Chinese Civil War and World War II in Asia. Two thousand years of history in one palace complex, and both stories are told with real physical evidence you can touch.`}
        description={`Huaqing Palace (华清宫, Huaqing Gong) is a Tang dynasty hot spring palace complex in Lintong District, 30 km east of central Xi'an. The site has been a royal bathing resort since the Western Zhou dynasty (1046–771 BC), but its golden age came under Emperor Xuanzong of Tang (712–756 AD), who expanded the palace and spent winters here with his consort Yang Guifei.

The site contains multiple excavated bathing pools from the Tang dynasty, including the Lotus Pool (海棠汤, Yang Guifei's personal bath), the Star Pool (星辰汤, the emperor's pool), and the Prince Pool (太子汤). The original Tang dynasty water channels and heating systems are visible. The natural hot springs still flow at 43°C (109°F), and you can soak in a modern hot spring pool on the grounds (separate ticket).

The palace is also the site of the Xi'an Incident (西安事变) of December 12, 1936, when generals Zhang Xueliang and Yang Hucheng arrested Chiang Kai-shek to force a united front against Japan. The room where Chiang was sleeping — with bullet holes still visible in the glass — and the rock crevice where he was captured on the hillside are both preserved and open to visitors.

From April to October, Huaqing Palace stages "The Song of Everlasting Sorrow" (长恨歌), an outdoor performance based on Bai Juyi's famous poem about the love story of Xuanzong and Yang Guifei. The show uses the palace buildings and lake as a stage, with 300+ performers, underwater scenes, fire effects, and aerial stunts. It's one of the most spectacular outdoor shows in China.`}
        hours="7:30–18:00 (Nov–Mar 8:00–17:30). Night show: Apr–Oct, 20:30 (20:10 in peak season)"
        price="¥120 peak season (Mar–Nov), ¥80 off-peak (Dec–Feb). Night show: ¥268–988. Hot spring soak: ¥168 additional"
        nearestSubway="Bus 306 from Xi'an Railway Station (45 min)"
        bestTime="April–June and September–November. For the night show, May–October."
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=109.1937%2C34.3404%2C109.2337%2C34.3804&layer=mapnik&marker=34.3604%2C109.2137"
        address="38 Huaqing Road, Lintong District, Xi'an"
        addressZh="西安市临潼区华清路38号"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Terracotta Warriors', description: 'Xi\'an\'s most famous attraction — 8,000 clay soldiers. 10 min away by bus.', href: '/destinations/xian/what-to-do/terracotta-warriors' },
          { title: 'Mount Hua (Huashan)', description: 'China\'s most dangerous mountain — a thrilling day trip east of Xi\'an.', href: '/destinations/xian/day-trips/huashan' },
          { title: 'Xi\'an City Wall', description: 'Bike the best-preserved ancient city wall in China.', href: '/destinations/xian/what-to-do/city-wall' },
          { title: 'Muslim Quarter', description: 'Xi\'an\'s legendary food street and cultural hub.', href: '/destinations/xian/what-to-do/muslim-quarter' },
          { title: 'Xi\'an Local Tips', description: 'Practical tips for navigating Xi\'an like a local.', href: '/destinations/xian/local-tips' },
          { title: 'Where to Eat in Xi\'an', description: 'Roujiamo, biangbiang noodles, and more.', href: '/destinations/xian/where-to-eat' },
        ]}
        tips={[
          { type: 'tip' as const, text: 'Combine with Terracotta Warriors — they\'re 10 minutes apart by bus 306. Do Huaqing Palace in the morning, Terracotta Warriors after' },
          { type: 'tip' as const, text: 'The night show (Song of Everlasting Sorrow) runs April–October only. Book ahead on weekends — it sells out' },
          { type: 'tip' as const, text: 'The Xi\'an Incident room has real bullet holes in the window glass — look for them near the exhibit entrance' },
          { type: 'tip' as const, text: 'If you\'re staying for the night show, plan a full day trip: Terracotta Warriors in the morning, Huaqing Palace afternoon, show at 20:30' },
          { type: 'photo' as const, text: 'The Lotus Pool (Yang Guifei\'s bath) photographs best in the morning when sunlight enters the courtyard directly' },
          { type: 'photo' as const, text: 'The night show is spectacular but hard to photograph — a fast lens (f/1.4–2.8) and high ISO are essential for the performance shots' },
        ]}
        practicalDetails={{
          gettingThere: `Bus 306 (游5): From the east square of Xi'an Railway Station (西安火车站东广场). The bus is clearly marked and runs every 10–15 minutes. It stops at Huaqing Palace first (about 45 minutes, ¥6), then continues to the Terracotta Warriors (about 55 minutes total, ¥8 from Xi'an, ¥2 from Huaqing Palace). This is the most convenient option because it connects both sites.

DiDi or taxi: ¥60–80 from central Xi'an, 35–45 minutes. Worth it if you're in a group. The driver can drop you at Huaqing Palace and wait, or you can take bus 306 between the two sites (10 minutes, ¥2).

Private driver: ¥400–500 for a full day covering both Huaqing Palace and Terracotta Warriors. Most Xi'an hotels can arrange this. Best option if you want to stay for the night show and not worry about the last bus.

Combining with Terracotta Warriors: This is the standard Xi'an day trip. Take bus 306 to Huaqing Palace first (get off at the first stop, not the terminus). Spend 2–3 hours. Then take bus 306 from Huaqing Palace to the Terracotta Warriors (10 minutes, ¥2). Spend 2–3 hours. Take bus 306 back to Xi'an (55 minutes, ¥8). Total travel time: about 2 hours. Total sightseeing time: 4–6 hours.`,
          whatToSkip: `The modern hot spring soak (¥168) is fine but nothing special — it's a standard Chinese spa experience, not a historic bath. If you're short on time, skip it and focus on the Tang dynasty pools and the Xi'an Incident site, which are the unique parts of the visit.

The 5D cinema (¥50) is a short film about the love story of Xuanzong and Yang Guifei. It's a novelty — 5D means your seat moves and water splashes you. Touristy, skip it unless you're traveling with kids who need a break from walking.

Avoid the "Imperial Banquet" dinner experience (¥300+). It's themed dining with actors in costume, but the food is mediocre and the experience feels manufactured. You'll eat better and cheaper in Xi'an's Muslim Quarter.`,
          photographyTips: `The Tang dynasty bathing pools are the money shot. The Lotus Pool (海棠汤) is Yang Guifei's personal bath, shaped like a lotus flower with original stone. Photograph it in the morning when direct sunlight enters the courtyard — the warm light on the ancient stone is beautiful. Use a wide-angle lens to capture the pool shape and surrounding architecture.

The Xi'an Incident room is small and dim, but the bullet holes in the window glass make a powerful image. Get close and use a macro or portrait lens. The context — the room where a military dictator was arrested — gives the photo weight beyond its visual quality.

For the night show, bring a fast lens (f/1.4–2.8) and push ISO to 3200+. The show is performed on and around the lake with theatrical lighting — dramatic but dim. A 50mm f/1.8 is ideal: fast enough for the light, long enough to isolate performers from the crowd. Don't try video unless you have stabilization — the performers move fast and the light changes constantly.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Combine Huaqing Palace + Terracotta Warriors
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private day tour that covers both sites with a local guide, hotel pickup, and flexible timing. Add the night show for the full experience.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Huaqing + Terracotta Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Both sites in one day</span>
                <span>✓ Hotel pickup included</span>
                <span>✓ Night show upgrade available</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}