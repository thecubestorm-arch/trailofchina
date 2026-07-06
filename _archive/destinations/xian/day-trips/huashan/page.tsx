import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mount Hua (华山) — China\'s Most Dangerous Mountain | Day Trip from Xi\'an',
  description:
    'The complete day trip guide to Huashan from Xi\'an: cable car routes, the plank walk on South Peak, sunrise from East Peak, ticket prices, and how to skip the ancient trail. Real advice, not tourist fluff.',
  keywords: [
    'Mount Hua',
    'Huashan',
    'Huashan day trip from Xi\'an',
    'Huashan plank walk',
    'Changkong Path',
    'Huashan cable car',
    'Huashan sunrise',
    'most dangerous hike China',
    'how to get to Huashan',
    'Huashan West Peak cable car',
  ],
  openGraph: {
    title: 'Mount Hua (华山) — China\'s Most Dangerous Mountain | Day Trip from Xi\'an',
    description:
      'The complete guide to Huashan: plank walks, cable car routes, sunrise timing, and how to survive China\'s most famous mountain.',
    url: 'https://www.trailofchina.com/destinations/xian/day-trips/huashan',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mount Hua — China\'s Most Dangerous Mountain - Trail of China',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/xian/day-trips/huashan',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Mount Hua from Xi\'an?',
    answer:
      'Take the high-speed train from Xi\'an North Station (西安北站) to Huashan North Station (华山北站). The trip takes 30 minutes and costs ¥54.5–69.5 depending on the train. From Huashan North, a taxi or DiDi to the West Peak cable car base takes about 10 minutes (¥20–30). Alternatively, you can take bus 游1 from Xi\'an Railway Station, but it takes 2 hours.',
  },
  {
    question: 'Should I take the West Peak or North Peak cable car?',
    answer:
      'Go up via West Peak cable car (西峰索道, ¥140) and down via North Peak cable car (北峰索道, ¥70). This gives you a downhill route from West Peak → South Peak (the highest, 2,154m) → East Peak (sunrise spot) → Central Peak → North Peak → cable car down. Going up West Peak means you climb less and see the best views on the descent. Going up North Peak means a brutal 3–4 hour ascent to the other peaks.',
  },
  {
    question: 'Is the Huashan plank walk dangerous?',
    answer:
      'The plank walk (Changkong Path, 长空栈道) on South Peak is Huashan\'s famous attraction — narrow wooden planks bolted to a sheer cliff face with a harness cable. It feels terrifying, but you\'re clipped to a safety cable the entire time. The harness rental is ¥30. Fatalities are extremely rare on the modern route. Go early (before 10 AM) to avoid long queues — in peak season, you can wait 1–2 hours.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Xi\'an', path: '/destinations/xian' },
  { name: 'Day Trips', path: '/destinations/xian/day-trips' },
  { name: 'Mount Hua', path: '/destinations/xian/day-trips/huashan' },
]);

const searchQuery = encodeURIComponent('Mount Hua Huashan private tour from Xi\'an');

export default function HuashanPage() {
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
        name="Mount Hua (Day Trip)"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Xi\'an', href: '/destinations/xian' },
          { label: 'Day Trips', href: '/destinations/xian/day-trips' },
        ]}
        nameZh="华山"
        city="Xi'an"
        images={[
          { src: 'https://picsum.photos/seed/huashan-plank-walk/800/600', alt: 'Huashan plank walk clinging to the cliff face on South Peak' },
          { src: 'https://picsum.photos/seed/huashan-sunrise-east/800/600', alt: 'Sunrise from East Peak of Mount Hua' },
          { src: 'https://picsum.photos/seed/huashan-west-peak/800/600', alt: 'West Peak viewpoint with sheer drops on both sides' },
          { src: 'https://picsum.photos/seed/huashan-cable-car/800/600', alt: 'Cable car ascending to West Peak through mountain mist' },
          { src: 'https://picsum.photos/seed/huashan-steps/800/600', alt: 'Steep stone steps carved into the mountain ridge at Huashan' },
        ]}
        hook="Huashan's plank walk has been called the world's most dangerous hike — but the real reward is the sunrise from East Peak and the view from South Peak at 2,154 meters."
        quickInfo={{
          price: '¥160 entry + ¥140 cable car up',
          hours: '24/7 (cable cars 7:00–19:00)',
          bestTime: 'Apr–Jun, Sep–Nov weekdays',
          metro: '30 min high-speed train',
        }}
        whyYouLoveIt={`Most people come for the plank walk and leave remembering the ridgeline. The five peaks of Huashan are connected by paths carved into knife-edge ridges — stone steps bolted into the rock, chain handrails on either side, and thousand-meter drops below your feet. The plank walk on South Peak is the famous bit, and yes, it's genuinely thrilling: wooden boards maybe 30cm wide, bolted to a vertical cliff, nothing but air between you and the valley floor. You're clipped to a safety cable, so you're not actually going to die, but your pulse will spike anyway.

But the plank walk is 20 minutes of a full day. The real experience is the ridgeline walking between peaks — the paths that feel like they shouldn't exist, the chains you grip while descending steps so steep you're basically climbing down a ladder, the way the fog rolls in and suddenly you can't see the bottom. And if you do sunrise from East Peak, you'll stand on a platform at 2,090m watching the sun come up over the Qinling Mountains, surrounded by people who slept in sleeping bags on the summit. It's one of the best sunrises in China, and the cold and exhaustion make it feel earned.`}
        description={`Mount Hua (华山, Huashan) is one of China's Five Sacred Mountains, located 120 km east of Xi'an in Shaanxi Province. The mountain has five peaks arranged like a flower — East Peak (朝阳峰, 2,096m), South Peak (落雁峰, 2,154m, the highest), West Peak (莲花峰, 2,083m), Central Peak (玉女峰, 2,042m), and North Peak (云台峰, 1,614m).

Huashan has been a Daoist sacred site for over 2,000 years. Monks built temples on the peaks and carved the original paths into the rock — some of these ancient routes are near-vertical, with only chain handrails between you and a very long drop. The modern route uses cable cars for the ascent and descent, but the paths between peaks still follow those ancient stone steps.

The mountain's reputation comes from two things: the plank walk (Changkong Path, 长空栈道) on South Peak — a narrow wooden path bolted to a sheer cliff face — and the overall steepness of the trails. Before cable cars were installed, the ascent took 6+ hours on paths so dangerous that the saying went: "From Huashan, there is only one road" (自古华山一条路). Today, cable cars make it accessible as a day trip, though you should still be reasonably fit — there are a lot of stairs.

The standard modern route is: West Peak cable car up → walk to South Peak (plank walk) → East Peak → Central Peak → North Peak → cable car down. This takes 5–7 hours of walking and covers about 8 km of mountain trail. Total cost including entry, cable cars, and bus transfer runs ¥400–500 per person.`}
        hours="24/7 (cable cars: West Peak 7:00–19:00, North Peak 7:00–19:00, seasonal variation)"
        price="¥160 entry (Mar–Nov), ¥100 (Dec–Feb) + ¥140 West Peak cable car up + ¥70 North Peak cable car down + ¥40 shuttle bus"
        nearestSubway="High-speed train from Xi'an North to Huashan North (30 min)"
        bestTime="April–June and September–November, weekday mornings. Avoid Chinese holidays."
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=110.0549%2C34.4444%2C110.1149%2C34.5044&layer=mapnik&marker=34.4744%2C110.0849"
        address="Huayin City, Weinan, Shaanxi Province"
        addressZh="陕西省渭南市华阴市华山"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'Terracotta Warriors', description: 'Xi\'an\'s most famous attraction — 8,000 clay soldiers standing guard.', href: '/destinations/xian/what-to-do/terracotta-warriors' },
          { title: 'Huaqing Palace', description: 'Tang dynasty hot spring palace, often combined with the warriors.', href: '/destinations/xian/day-trips/huaqing-palace' },
          { title: 'Xi\'an City Wall', description: 'Bike the best-preserved ancient city wall in China.', href: '/destinations/xian/what-to-do/city-wall' },
          { title: 'Muslim Quarter', description: 'Xi\'an\'s legendary food street and cultural hub.', href: '/destinations/xian/what-to-do/muslim-quarter' },
          { title: 'Xi\'an Local Tips', description: 'Practical tips for navigating Xi\'an like a local.', href: '/destinations/xian/local-tips' },
          { title: 'Where to Eat in Xi\'an', description: 'Roujiamo, biangbiang noodles, and everything in between.', href: '/destinations/xian/where-to-eat' },
        ]}
        tips={[
          { type: 'tip' as const, text: 'Take the West Peak cable car UP and North Peak cable car DOWN — this is the easiest route and hits all five peaks in a logical order' },
          { type: 'tip' as const, text: 'If you want sunrise, you need to start before dawn or stay overnight on the mountain. East Peak sunrise requires a 4–5 AM start from West Peak' },
          { type: 'tip' as const, text: 'Bring gloves for the chain handrails — the metal gets cold and the chains are essential on steep sections' },
          { type: 'tip' as const, text: 'Carry at least 1.5L of water and energy bars. Mountain food stalls exist but charge 3–4× city prices' },
          { type: 'photo' as const, text: 'The plank walk selfie is the shot everyone wants — go early before the queue builds up' },
          { type: 'photo' as const, text: 'East Peak sunrise: arrive 30 min before official sunrise time for the best colors' },
          { type: 'photo' as const, text: 'The ridgeline path between West Peak and South Peak gives the best wide-angle mountain panorama shots' },
        ]}
        practicalDetails={{
          gettingThere: `High-speed train (recommended): From Xi'an North Station (西安北站) to Huashan North Station (华山北站). Trains run every 20–40 minutes from 7:00 AM, take 30 minutes, and cost ¥54.5–69.5. Buy tickets on the 12306 app or at the station. From Huashan North, take a DiDi or taxi to the West Peak cable car base (西峰索道) — about 10 minutes, ¥20–30. You'll also need the shuttle bus (¥40) from the base to the cable car lower station.

Bus (budget option): Bus 游1 departs from the east square of Xi'an Railway Station at 8:00 AM (sometimes 7:30 in peak season). It takes 2 hours and costs ¥22 one way. Returns at 17:00. Only one bus per day, so if you miss it you're stuck with DiDi. Not recommended unless the high-speed trains are sold out.

DiDi/private driver: ¥300–400 one way from Xi'an, ¥600–800 round trip. Takes 90 minutes. Worth it if you're 3–4 people and want maximum flexibility on timing. Most Xi'an hotels can arrange this.

For sunrise: Take the last evening high-speed train to Huashan North, check into a mountain hostel (¥150–300 for a basic bunk on East Peak), and catch sunrise the next morning. Or take the first morning train (around 6:30 AM) and start hiking before dawn with a headlamp.`,
          whatToSkip: `The ancient trail up from the East Gate (千尺幢 route). Before cable cars, this was the only way up — a near-vertical stone staircase with chain handrails. It's still open, and some purists insist on climbing it, but it takes 3–4 hours of exhausting stair-climbing and eats the time you could spend on the peaks themselves. Take the cable car. The views between the peaks are the reward, not the commute.

The "Huashan Sword" (华山论剑) photo spot on North Peak is a tourist trap — an overpriced photo opportunity with a fake sword prop. Skip it. The real photo moments are on the ridgeline paths and at the plank walk.

Avoid Chinese national holidays (Golden Week in October, Spring Festival, May Day) at all costs. The plank walk queue can be 2–3 hours. Weekday mornings in spring or autumn are ideal.`,
          photographyTips: `The ridgeline path between West Peak and South Peak is your best wide-angle location — the mountains drop away on both sides and the path snakes along the top. Shoot in the morning when the east-facing slopes catch light and the valleys are still in shadow. A 16–35mm wide-angle captures the full drama.

For the plank walk, you need someone to photograph you from above. The plank itself is too narrow to stop and compose — you're moving in a line of people. Ask a friend to shoot from the platform above the entry point, or pay one of the local photographers at the entrance (¥20–30 for a digital shot on your phone).

East Peak sunrise is spectacular but cold. Bring a jacket and arrive 30 minutes before the official sunrise time. The light changes fast — you have about 10 minutes of golden-hour color before it transitions to flat daylight. A tripod helps for pre-dawn long exposures, but the platform is small and crowded, so handheld is more practical.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Don't Navigate Huashan Alone
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private tour with a local guide who knows which cable car to take, when to hit the plank walk to avoid queues, and where to stand for the best sunrise. Transport included.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Huashan Day Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Cable car route sorted</span>
                <span>✓ Avoid plank walk queues</span>
                <span>✓ Xi'an hotel pickup</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}