import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Ming Tombs (明十三陵) — Imperial Burial Valley Near Beijing',
  description:
    'Walk the Sacred Way between 600-year-old stone guardian statues, then descend into Dingling\'s underground burial palace. Complete guide to the Ming Tombs from Beijing — transport, which tombs to visit, and combining with the Great Wall.',
  keywords: [
    'Ming Tombs Beijing',
    'Ming Shisanling',
    'Dingling tomb',
    'Changling tomb',
    'Sacred Way Beijing',
    'Spirit Way Ming Tombs',
    'Ming Tombs day trip',
    'Ming Tombs Great Wall combined',
  ],
  openGraph: {
    title: 'Ming Tombs (明十三陵) — Imperial Burial Valley Near Beijing',
    description:
      "Walk the Sacred Way between 600-year-old stone guardian statues, then descend into Dingling's underground burial palace. Guide to the Ming Tombs from Beijing.",
    url: 'https://www.trailofchina.com/destinations/beijing/day-trips/ming-tombs',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Ming Tombs Sacred Way — Stone Guardian Statues - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/beijing/day-trips/ming-tombs',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'Which Ming Tombs should I visit?',
    answer:
      'Most visitors see Changling (the largest and most impressive hall) and Dingling (the only excavated tomb you can enter). Changling\'s Ling\'en Hall contains 32 enormous nanmu wood pillars — each cut from a single tree. Dingling lets you descend 27 metres into the actual burial chamber. Add the Sacred Way (Spirit Way) for the iconic stone animal statues. That\'s a solid 3–4 hour visit.',
  },
  {
    question: 'Can I combine the Ming Tombs with the Great Wall in one day?',
    answer:
      'Yes — this is a common combo. The Ming Tombs are on the way to the Great Wall from Beijing. The most efficient route is: leave Beijing early, visit the Sacred Way and Dingling in the morning (2–3 hours), then drive 40 minutes to Mutianyu Great Wall for the afternoon. A private driver for the full day costs ¥600–800.',
  },
  {
    question: 'Is the Ming Tombs worth visiting on its own?',
    answer:
      'On its own, the Ming Tombs are a half-day trip — not enough for a full day unless you\'re a serious history buff. The Sacred Way is visually stunning and takes 30–45 minutes. Changling takes about an hour. Dingling takes about an hour. Combined with travel time, that\'s a 5–6 hour round trip. Most travellers get more value by combining with the Great Wall.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Beijing', path: '/destinations/beijing' },
  { name: 'Day Trips', path: '/destinations/beijing/day-trips' },
  { name: 'Ming Tombs', path: '/destinations/beijing/day-trips/ming-tombs' },
]);

const searchQuery = encodeURIComponent('Ming Tombs day trip from Beijing');

export default function MingTombsPage() {
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
        name="Ming Tombs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Beijing', href: '/destinations/beijing' },
          { label: 'Day Trips', href: '/destinations/beijing/day-trips' },
        ]}
        nameZh="明十三陵"
        city="Beijing"
        images={[
          { src: 'https://picsum.photos/seed/ming-tombs-sacred-way/800/600', alt: 'Sacred Way stone animal statues at the Ming Tombs' },
          { src: 'https://picsum.photos/seed/ming-tombs-changling/800/600', alt: 'Ling\'en Hall at Changling with massive nanmu wood pillars' },
          { src: 'https://picsum.photos/seed/ming-tombs-dingling/800/600', alt: 'Underground burial chamber at Dingling tomb' },
          { src: 'https://picsum.photos/seed/ming-tombs-spirit-way/800/600', alt: 'Tree-lined Sacred Way approach to the Ming Tombs' },
          { src: 'https://picsum.photos/seed/ming-tombs-valley/800/600', alt: 'Aerial view of the Ming Tombs valley in Changping district' },
        ]}
        hook="The Ming emperors ruled from the Forbidden City but chose this valley for eternity. Walk the Sacred Way between stone guardian statues, then descend into Dingling's underground burial palace."
        quickInfo={{
          price: '¥35 Changling + ¥65 Dingling + ¥30 Sacred Way',
          hours: '8:00–17:30 (summer), 8:30–17:00 (winter)',
          bestTime: 'Apr–Jun, Sep–Nov',
          metro: '40 min by car from Beijing',
        }}
        whyYouLoveIt={`The Sacred Way alone is worth the trip. It's a 1.2 km stone-paved path lined on both sides with 36 larger-than-life statues — elephants, camels, lions, horses, and mythical beasts — each carved from a single block of stone 600 years ago. The craftsmanship is extraordinary: the elephants have wrinkled skin texture, the mythical qilin have scales, and the generals stand with real weight in their posture. Most visitors rush through in 15 minutes, but if you slow down and look at the details, it's a masterclass in Ming dynasty stone carving.

Dingling is the only Ming tomb you can enter — the underground burial palace of the Wanli Emperor, excavated in 1956. Walking down the 27-metre descent into the vault, the temperature drops and the acoustics shift. You're standing in the actual room where a man who ruled China for 48 years was laid to rest alongside his two empresses, surrounded by thrones and offerings. The excavation was controversial — many artefacts deteriorated after exposure — but the raw experience of being inside an emperor's tomb is hard to replicate anywhere else in China.

The valley itself is the thing most people miss. Thirteen Ming emperors chose this specific mountain-ringed basin for their eternal rest, arranged according to feng shui principles that are obvious when you stand there — mountains behind, water in front, facing south. The scale is vast: each tomb complex covers several acres, with gate towers, sacrificial halls, and the burial mound. You could spend days here and not see all thirteen.`}
        description={`The Ming Tombs (明十三陵, Míng Shísān Líng) are the burial site of 13 of the 16 Ming dynasty emperors, located in a mountain-ringed valley in Changping District, 50 km northwest of central Beijing. The site was chosen by the Yongle Emperor (who also built the Forbidden City) based on strict feng shui principles — mountains to the north, a river to the south, facing the auspicious south direction.

Construction began in 1409 with Changling, the tomb of the Yongle Emperor, and continued for over 200 years. Each tomb follows a similar layout: a Sacred Way leading to gate towers, a Ling'en (Favour-Bestowing) Hall for sacrificial ceremonies, a Soul Tower marking the burial mound, and the underground palace beneath. Of the 13 tombs, only three are currently open to the public: Changling, Dingling, and Zhaoling.

The Sacred Way (神道, Shéndào) is the shared ceremonial approach to all 13 tombs. It's a 1.2 km path lined with 36 stone statues of animals, mythical beasts, and military and civil officials, each carved from a single stone block during the Xuande Emperor's reign (1425–1435). The path begins at a massive stone archway and passes through the Great Red Gate and the Stele Pavilion.

Dingling (定陵), the tomb of the Wanli Emperor (r. 1572–1620), was excavated in 1956 and remains the only Ming tomb where visitors can enter the underground burial chambers. The excavation revealed three vaults containing the emperor's and two empresses' coffins, along with thousands of artefacts — porcelain, silk, jade, and gold. Unfortunately, many organic artefacts deteriorated rapidly upon exposure, a disaster that led to the cancellation of plans to excavate Changling.`}
        hours="8:00–17:30 (Apr–Oct), 8:30–17:00 (Nov–Mar)"
        price="Changling ¥35, Dingling ¥65, Zhaoling ¥30, Sacred Way ¥30 (combo tickets available)"
        nearestSubway="Changping Line to Ming Tombs station (十三陵景区站), then bus 314; or 40 min by car/DiDi from Beijing"
        bestTime="April–June and September–November for comfortable weather; avoid October national holiday week"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.2017%2C40.2343%2C116.2417%2C40.2743&layer=mapnik&marker=40.2543%2C116.2217"
        address="Ming Tombs Area, Changping District, Beijing"
        addressZh="北京市昌平区十三陵景区"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Mutianyu Great Wall', description: 'The best Great Wall section for a day trip — combine with the Ming Tombs.', href: '/destinations/beijing/day-trips/mutianyu-great-wall' },
          { title: 'Great Wall of China', description: 'Overview of all Great Wall sections near Beijing.', href: '/destinations/beijing/what-to-do/great-wall' },
          { title: 'Forbidden City', description: 'The palace where these emperors actually ruled.', href: '/destinations/beijing/what-to-do/forbidden-city' },
          { title: 'Temple of Heaven', description: 'Where Ming and Qing emperors prayed for good harvests.', href: '/destinations/beijing/what-to-do/temple-of-heaven' },
          { title: 'Chengde Mountain Resort', description: 'Another imperial escape — the Qing dynasty version.', href: '/destinations/beijing/day-trips/chengde' },
          { title: 'Beijing Local Tips', description: 'Practical tips for navigating Beijing like a local.', href: '/destinations/beijing/local-tips' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By public transport: Take metro Line 2 to Jishuitan station, then walk to Deshengmen bus stop. Bus 872 runs directly to the Ming Tombs area (about 90 minutes, ¥10). The bus stops near the Sacred Way entrance. From there, shuttle buses (¥5) or taxis connect the Sacred Way, Changling, and Dingling.

By metro + bus: Take the Changping Line (昌平线) to Ming Tombs Scenic Area station (十三陵景区站), then bus 314 to the tombs. This is faster than the Deshengmen bus but requires two connections.

By DiDi or private driver: From central Beijing, a DiDi costs about ¥80–120 one way (40–50 minutes depending on traffic). A full-day driver covering the Ming Tombs plus the Great Wall costs ¥600–800. This is the most efficient option if you want to combine both in one day.

For the Ming Tombs + Great Wall combo: Leave Beijing by 7:30 AM. Visit the Sacred Way (45 min) and Dingling (60 min) in the morning, then drive 40 minutes to Mutianyu for the afternoon on the wall. Return to Beijing by 6 PM.`,
          whatToSkip: `Zhaoling tomb — it's the least impressive of the three open tombs and not worth the extra ¥30 unless you're a Ming dynasty completist. The restored hall is nice but doesn't have the scale of Changling or the underground drama of Dingling.

Skip the overpriced "Ming Tombs Museum" shops near the entrances — the reproductions are low quality and the genuine antiques (if any) are not what you think. The actual artefacts from Dingling's excavation are in the National Museum of China in central Beijing, not here.

Don't bother with the tourist-restaurant cluster near the Dingling parking lot. The food is expensive and mediocre. Pack snacks from Beijing, or eat at one of the small restaurants in the nearby Changping town on your way back — they serve proper northern Chinese food at local prices.

Avoid the Ming Tombs during the October 1–7 national holiday. The Sacred Way becomes a conveyor belt of domestic tour groups, each with a guide shouting through a portable speaker. It destroys the atmosphere completely.`,
          photographyTips: `The Sacred Way is best photographed early morning, when the tree canopy filters soft light onto the stone statues. Walk to the far end (away from the entrance) and shoot back toward the Great Red Gate — the perspective of statues diminishing into the distance is the classic composition.

For Changling's Ling'en Hall, the 32 nanmu wood pillars are the shot. Each is over 12 metres tall and cut from a single tree — the grain and scale are hard to capture without a wide-angle lens. Stand in the centre of the hall and shoot upward to show the pillar height against the ceiling beams.

At Dingling, the underground chambers are dimly lit with coloured spotlights. Use a fast lens (f/1.8 or wider) and push your ISO — tripods aren't allowed. The marble thrones in the central vault, lit from below, make for atmospheric (if slightly eerie) shots. The Soul Tower above ground, with its yellow-tiled double-eave roof against the burial mound, is a strong exterior shot in late-afternoon light.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Combine the Ming Tombs with the Great Wall
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a full-day private tour covering the Sacred Way, Dingling, and Mutianyu Great Wall — with hotel pickup and a guide who brings the history to life.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Ming Tombs + Great Wall Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Full-day itinerary</span>
                <span>✓ Private transport</span>
                <span>✓ English-speaking guide</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}