import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mutianyu Great Wall (慕田峪长城) — The Best Day Trip from Beijing',
  description:
    'The most rewarding Great Wall section near Beijing: fewer crowds, cable car access, and a toboggan slide down. Complete guide to getting there, ticket prices, and which watchtowers to walk.',
  keywords: [
    'Mutianyu Great Wall',
    'Great Wall day trip Beijing',
    'Mutianyu vs Badaling',
    'Great Wall toboggan',
    'Mutianyu cable car',
    'how to get to Mutianyu',
    'Great Wall from Beijing',
  ],
  openGraph: {
    title: 'Mutianyu Great Wall (慕田峪长城) — The Best Day Trip from Beijing',
    description:
      'The most rewarding Great Wall section near Beijing: fewer crowds, cable car access, and a toboggan slide down.',
    url: 'https://www.trailofchina.com/destinations/beijing/day-trips/mutianyu-great-wall',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mutianyu Great Wall — The Best Day Trip from Beijing - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/beijing/day-trips/mutianyu-great-wall',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Mutianyu Great Wall from Beijing by public transport?',
    answer:
      'Take bus 916 Express from Dongzhimen Long-Distance Bus Station to Huairou Bei Dajie (about 70 minutes, ¥12). From there, take a local minibus (¥5) or DiDi (about ¥30) to the Mutianyu parking area. Total travel time is roughly 2 hours each way. A private driver costs ¥400–600 round-trip and takes 90 minutes each way.',
  },
  {
    question: 'Should I take the cable car or hike up at Mutianyu?',
    answer:
      'If you want to maximize time on the wall itself, take the cable car up. The walk up is on a paved forest path — pleasant but it eats 20–30 minutes you could spend on the wall. The real question is how to get down: the toboggan slide is genuinely fun and costs ¥60 one-way.',
  },
  {
    question: 'Is Mutianyu better than Badaling?',
    answer:
      'Yes, for most travelers. Mutianyu has the same restored wall quality as Badaling but a fraction of the crowds. Badaling gets 10+ million visitors per year; Mutianyu gets a tenth of that. The trade-off is that Mutianyu takes slightly longer to reach (90 min vs 60 min by car).',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Beijing', path: '/destinations/beijing' },
  { name: 'Day Trips', path: '/destinations/beijing/day-trips' },
  { name: 'Mutianyu Great Wall', path: '/destinations/beijing/day-trips/mutianyu-great-wall' },
]);

const searchQuery = encodeURIComponent('Mutianyu Great Wall private tour from Beijing');

export default function MutianyuGreatWallPage() {
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
        name="Mutianyu Great Wall"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Beijing', href: '/destinations/beijing' },
          { label: 'Day Trips', href: '/destinations/beijing/day-trips' },
        ]}
        nameZh="慕田峪长城"
        city="Beijing"
        images={[
          { src: 'https://picsum.photos/seed/mutianyu-panorama/800/600', alt: 'Mutianyu Great Wall winding through autumn mountains' },
          { src: 'https://picsum.photos/seed/mutianyu-watchtower/800/600', alt: 'Watchtower at Mutianyu with mountain ridges beyond' },
          { src: 'https://picsum.photos/seed/mutianyu-toboggan/800/600', alt: 'Toboggan slide track descending from Mutianyu' },
          { src: 'https://picsum.photos/seed/mutianyu-cablecar/800/600', alt: 'Cable car ascending to Mutianyu Great Wall' },
          { src: 'https://picsum.photos/seed/mutianyu-morning/800/600', alt: 'Early morning light on Mutianyu with mist in the valley' },
        ]}
        hook="The wall you've seen in photos is Mutianyu — but the real thing is better in person. Go early, take the cable car up, walk east toward section 20, and toboggan down."
        quickInfo={{
          price: '¥40 wall + ¥100–140 cable car',
          hours: '7:30–17:30 (summer), 8:00–17:00 (winter)',
          bestTime: 'Weekday mornings Apr–Jun, Sep–Nov',
          metro: '90 min by car from Beijing',
        }}
        whyYouLoveIt={`Badaling is what most first-time visitors end up at, because every hotel concierge and tour operator defaults to it. The problem is that 10 million people a year have the same idea. You'll spend more time navigating crowds than actually walking the wall, and the souvenir hawkers are relentless.

Mutianyu is the wall that lives up to the photographs. Fully restored but uncrowded, with watchtowers that follow the ridgeline through thick forest. Walk east from the cable car station and by section 18 the tour groups thin out entirely. By watchtower 20 you might have a whole section to yourself, standing on stone that's been here since the Ming dynasty, with mountains rolling away in every direction. It's the wall you came to China to see.

The toboggan slide down is the punctuation mark. A stainless-steel luge track that winds through the pine forest below the wall — you control your own speed with a brake lever. It's silly, it's fun, and it beats walking back down a paved path. Kids lose their minds over it, and honestly, so do most adults.`}
        description={`Mutianyu (慕田峪) is a 2.2 km section of the Great Wall located 70 km northeast of Beijing in Huairou District. First built during the Northern Qi dynasty (550–577 AD) and rebuilt under Ming general Qi Jiguang in 1569, it's one of the best-preserved and least crowded sections within day-trip range of the capital.

The wall here follows a steep ridgeline through dense forest, with 23 watchtowers connected by a fully restored parapet. Unlike Badaling's flat, straight stretches, Mutianyu dips and climbs dramatically — sections 19 through 22 require scrambling up near-vertical stone steps. The forest on both sides keeps the wall cooler in summer and turns blazing red and gold in October.

Access is via cable car (two systems: the enclosed gondola from the south and the open chairlift from the east), or on foot via a 20-minute paved path. The chairlift up and toboggan down is the most popular combination. A separate enclosed cable car serves the western end, near sections 14–16.

The entry fee is ¥40 for the wall itself, plus ¥100 for the chairlift up and toboggan down, or ¥140 for the enclosed cable car round trip. Plan 3–4 hours on site, plus 90 minutes each way from central Beijing.`}
        hours="7:30–17:30 (Apr–Oct), 8:00–17:00 (Nov–Mar)"
        price="¥40 (wall entry) + ¥100 (chairlift + toboggan) or ¥140 (cable car round trip)"
        nearestSubway="No metro — 90 min by car or 2h by bus from Dongzhimen"
        bestTime="April–June and September–November, weekday mornings before 9 AM"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.5582%2C40.4219%2C116.5782%2C40.4419&layer=mapnik&marker=40.4319%2C116.5682"
        address="Mutianyu Village, Huairou District, Beijing"
        addressZh="北京市怀柔区慕田峪村"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Great Wall of China', description: 'Overview of all Great Wall sections near Beijing.', href: '/destinations/beijing/what-to-do/great-wall' },
          { title: 'Forbidden City', description: "The world's largest palace complex — 980 buildings, 500 years of history.", href: '/destinations/beijing/what-to-do/forbidden-city' },
          { title: 'Ming Tombs', description: "The Ming emperors' eternal resting place — another classic day trip.", href: '/destinations/beijing/day-trips/ming-tombs' },
          { title: 'Gubei Water Town', description: 'Water town + night walks on Simatai Great Wall.', href: '/destinations/beijing/day-trips/gubei-water-town' },
          { title: 'Beijing Local Tips', description: 'Practical tips for navigating Beijing like a local.', href: '/destinations/beijing/local-tips' },
          { title: 'Where to Eat in Beijing', description: "Beijing's best dishes and where to find them.", href: '/destinations/beijing/where-to-eat' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `By public transport: Take bus 916 Express (快车) from Dongzhimen Long-Distance Bus Station to Huairou Bei Dajie (怀柔北大街). The bus runs every 15 minutes, costs ¥12, and takes about 70 minutes. From Huairou, you have three options: (1) Local minibus H23 to Mutianyu village, ¥5, 30 min. (2) DiDi from Huairou to the Mutianyu parking area, about ¥30, 20 min. (3) Shared taxi near the bus stop, ¥10–15 per person.

By DiDi or private driver: From central Beijing (e.g., Wangfujing, Sanlitun), a DiDi costs ¥150–200 one way and takes 75–90 minutes depending on traffic. Hiring a driver for the full day (they wait for you) runs ¥400–600. Most hotels can arrange this — ask for a Mandarin-speaking driver if you want them to also buy your tickets at the base.

By organized tour: Multiple companies offer half-day tours from Beijing for ¥250–400 including transport and tickets. These are convenient but you'll be on someone else's schedule, typically spending only 2 hours on the wall. Self-guided is better if you want more time.`,
          whatToSkip: `Badaling section — it's the closest and most famous, but also the most crowded. On weekends and holidays, you'll queue 30+ minutes just to get through the ticket gates. The wall itself is fine but the experience is miserable. Mutianyu gives you the same restored wall quality without the crowds.

The tourist shops at the Mutianyu base are aggressively persistent. You'll walk through a gauntlet of vendors selling "I climbed the Great Wall" T-shirts, jade, and tea before reaching the ticket office. Don't engage — a firm "bù yào" (不要, "don't want") and eye aversion works. Prices on the wall for water and snacks are 2–3× city prices; bring your own from a Beijing convenience store.

Skip the overpriced restaurant at the Mutianyu parking area. The food is mediocre and the prices are absurd. Pack a lunch from Beijing or grab noodles at one of the small village restaurants along the road to the wall — they're cheaper and more authentic.`,
          photographyTips: `The iconic Mutianyu shot is the wall snaking over the ridgeline from watchtower 20, looking back toward the cable car station. You need to be at tower 20, looking east — the wall curves and climbs through the forest, and the perspective compresses beautifully with a 70–200mm telephoto lens.

Morning fog is your best friend. In spring and autumn, mist fills the valleys below the wall while the ridgeline stays clear. Arrive at opening (7:30 AM) and you might catch the wall floating above a sea of clouds. This effect is most common September through early November.

For the toboggan, action shots are tricky since you're the one on it. Have a friend photograph you from the wall above the slide track, or position yourself at one of the track's turns. The track is most photogenic in the early morning when the forest canopy filters golden light onto the stainless steel.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Skip the Crowds at Badaling
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Mutianyu tour with hotel pickup, a local English-speaking guide, and flexible timing so you can walk the wall at your own pace.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Mutianyu Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Uncrowded sections</span>
                <span>✓ Hotel pickup included</span>
                <span>✓ Flexible timing</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}