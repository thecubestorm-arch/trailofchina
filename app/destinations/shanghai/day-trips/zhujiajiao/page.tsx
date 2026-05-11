import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Zhujiajiao (朱家角) — Shanghai\'s Ancient Water Town by Metro',
  description:
    'Take Line 17 to the end and walk into a 1,700-year-old water town — stone bridges, canal houses, and the best zongzi in Shanghai. The easiest and cheapest day trip from the city. Complete guide.',
  keywords: [
    'Zhujiajiao water town',
    'Zhujiajiao from Shanghai',
    'Shanghai water town metro',
    'Zhujiajiao day trip',
    'Zhujiajiao zongzi',
    'Line 17 Zhujiajiao',
    'ancient water town Shanghai',
  ],
  openGraph: {
    title: 'Zhujiajiao (朱家角) — Shanghai\'s Ancient Water Town by Metro',
    description:
      "You don't need a train — take Line 17 to the end and walk into a 1,700-year-old water town with stone bridges, canal houses, and the best zongzi in Shanghai.",
    url: 'https://www.trailofchina.com/destinations/shanghai/day-trips/zhujiajiao',
    type: 'website',
    images: [
      {
        url: 'https://www.trailofchina.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: "Zhujiajiao Water Town — Shanghai's Ancient Water Town by Metro - Trail of China",
      },
    ],
  },
  alternates: {
    canonical: 'https://www.trailofchina.com/destinations/shanghai/day-trips/zhujiajiao',
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'How do I get to Zhujiajiao from central Shanghai?',
    answer:
      'Take Shanghai Metro Line 17 west to its terminus, Zhujiajiao Station (朱家角站). From central Shanghai (e.g., Jing\'an Temple or People\'s Square), take Line 2 to Hongqiao Railway Station, transfer to Line 17, and ride to the end. Total time: about 60–70 minutes. The station is a 10-minute walk from the old town entrance. Cost: ¥7–9 depending on your starting station. No train booking needed — just tap your transport card or Alipay.',
  },
  {
    question: 'Is Zhujiajiao free to enter?',
    answer:
      'Yes, the old town streets and canal-side areas are completely free. You only pay if you want to enter specific historic sites inside: the Kezhi Garden (¥20), the Tongtianhe Chinese Medicine Museum (¥20), and the Yuanjin Buddhist Temple (¥10). Most visitors never bother with these — wandering the canals, bridges, and food streets is the main attraction and costs nothing.',
  },
  {
    question: 'What should I eat in Zhujiajiao?',
    answer:
      'Zongzi (粽子) — sticky rice dumplings wrapped in bamboo leaves, the town\'s signature food. Look for the ones stuffed with braised pork (肉粽); they\'re made fresh throughout the day. Also try hongshao rou (红烧肉, braised pork belly) at the canal-side restaurants, and the fried soybean snacks sold from street carts. Skip the overpriced restaurants near the main entrance and eat at the places deeper in the old town where the locals go.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Shanghai', path: '/destinations/shanghai' },
  { name: 'Day Trips', path: '/destinations/shanghai/day-trips' },
  { name: 'Zhujiajiao', path: '/destinations/shanghai/day-trips/zhujiajiao' },
]);

const searchQuery = encodeURIComponent('Zhujiajiao water town day tour from Shanghai');

export default function ZhujiajiaoPage() {
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
        name="Zhujiajiao"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Shanghai', href: '/destinations/shanghai' },
          { label: 'Day Trips', href: '/destinations/shanghai/day-trips' },
        ]}
        nameZh="朱家角"
        city="Shanghai"
        images={[
          { src: 'https://picsum.photos/seed/zhujiajiao-bridges/800/600', alt: 'Stone bridge arching over a canal in Zhujiajiao water town' },
          { src: 'https://picsum.photos/seed/zhujiajiao-canal-houses/800/600', alt: 'Traditional whitewashed canal houses with black tile roofs, Zhujiajiao' },
          { src: 'https://picsum.photos/seed/zhujiajiao-zongzi/800/600', alt: 'Fresh zongzi sticky rice dumplings wrapped in bamboo leaves, Zhujiajiao' },
          { src: 'https://picsum.photos/seed/zhujiajiao-fangsheng-bridge/800/600', alt: 'Fangsheng Bridge — the largest stone bridge in Zhujiajiao' },
          { src: 'https://picsum.photos/seed/zhujiajiao-morning-mist/800/600', alt: 'Early morning mist rising from Zhujiajiao canals with stone bridges' },
        ]}
        hook="You don't need a train — take Line 17 to the end and walk into a 1,700-year-old water town with stone bridges, canal houses, and the best zongzi in Shanghai."
        quickInfo={{
          price: 'Free entry (sites ¥10–20)',
          hours: 'Old town always open, shops 9:00–17:00',
          bestTime: 'Weekday mornings, Sep–Nov',
          metro: 'Line 17 to Zhujiajiao (1h from center)',
        }}
        whyYouLoveIt={`Zhujiajiao is the easiest day trip from Shanghai, and that's not a backhanded compliment — it's genuinely the most accessible ancient water town in China. You take the metro. One transfer, one line, ¥9, no train booking, no planning ahead. You just go. And when Line 17 deposits you at the station and you walk ten minutes to the old town entrance, you're in a place that doesn't feel 70 minutes from the world's most futuristic city — it feels like it's been waiting there for 1,700 years, because it has.

Thirty-six stone bridges cross canals between whitewashed houses with black tile roofs. The Fangsheng Bridge (放生桥) is the biggest — a five-arch stone bridge built in 1812 that you can climb for a panoramic view of the entire old town. Underneath, old women sell vegetables from wooden boats. A cat sleeps on a stone step. A guy makes zongzi in a storefront that hasn't changed its recipe in three generations. This is the China that the guidebooks are always talking about, and it's on the metro.

The trick is timing. Zhujiajiao gets busy on weekends — really busy, with Shanghai families and tour groups flooding in by 10 AM. Go on a weekday morning, arrive by 8:30, and you'll have the canals to yourself for an hour. The breakfast stalls are making zongzi fresh, the morning light is perfect, and the town actually feels like someone's home rather than someone's attraction.`}
        description={`Zhujiajiao (朱家角) is a 1,700-year-old water town in Shanghai's Qingpu District, about 60 minutes by metro from the city center. Founded during the Three Kingdoms period (220–280 AD), it flourished as a trading port during the Ming and Qing dynasties, when its canals connected Lake Tai to the Huangpu River. Today it's the best-preserved water town within Shanghai municipality — and the only one you can reach by metro.

The old town covers 0.7 km² and is built around a network of canals crossed by 36 stone bridges. The main streets — Dongjing Street (东井街) and Bei Da Street (北大街) — are lined with Ming-era merchant houses, many still occupied by their original families. The canal-side buildings have ground floors that open directly onto the water, designed for loading goods from boats.

Fangsheng Bridge (放生桥) is the centerpiece — at 70 meters, it's the longest, widest, and tallest stone arch bridge in Shanghai. Built in 1812 during the Qing dynasty, its five arches span the main canal. Climb to the top for the best panorama of the town. The bridge's name means "releasing life" — historically, people would buy fish and turtles at the bridge and release them into the canal, a Buddhist practice that continues today.

Food is the other big draw. Zhujiajiao is famous across Shanghai for its zongzi (粽子), sticky rice dumplings wrapped in bamboo leaves and stuffed with braised pork, red bean paste, or salted egg yolk. They're sold from storefronts and street carts throughout the old town, made fresh throughout the day. The ones deep in the old town are cheaper and better than the tourist-oriented stalls near the entrance.`}
        hours="Old town streets always accessible; shops and restaurants roughly 9:00–17:00 (some stay open later on weekends)"
        price="Old town free; Kezhi Garden ¥20; Tongtianhe Chinese Medicine Museum ¥20; Yuanjin Temple ¥10"
        nearestSubway="Line 17 to Zhujiajiao Station, then 10-min walk"
        bestTime="September–November (comfortable weather, fewer crowds), weekday mornings before 10 AM"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.0330%2C31.0880%2C121.0730%2C31.1280&layer=mapnik&marker=31.1080%2C121.0530"
        address="Zhujiajiao Town, Qingpu District, Shanghai"
        addressZh="上海市青浦区朱家角镇"
        relatedLinks={[]}
        relatedArticles={[
          { title: 'The Bund', description: "Shanghai's iconic waterfront promenade.", href: '/destinations/shanghai/what-to-do/bund' },
          { title: 'Yu Garden', description: 'A classical garden and bazaar in central Shanghai.', href: '/destinations/shanghai/what-to-do/yu-garden' },
          { title: 'Suzhou Day Trip', description: 'Gardens and Tongli water town by bullet train.', href: '/destinations/shanghai/day-trips/suzhou' },
          { title: 'Hangzhou Day Trip', description: 'West Lake and tea country — another great escape.', href: '/destinations/shanghai/day-trips/hangzhou' },
          { title: 'Shanghai Local Tips', description: 'Practical tips for navigating Shanghai.', href: '/destinations/shanghai/local-tips' },
          { title: 'Where to Eat in Shanghai', description: "Shanghai's best dishes and where to find them.", href: '/destinations/shanghai/where-to-eat' },
        ]}
        tips={[]}
        practicalDetails={{
          gettingThere: `From central Shanghai, take Metro Line 2 to Hongqiao Railway Station (虹桥火车站), then transfer to Line 17 and ride west to the terminus, Zhujiajiao Station (朱家角站). Total time from People's Square: about 65 minutes. From Jing'an Temple: about 60 minutes. Cost: ¥7–9 depending on starting station. No advance booking needed — just tap your Shanghai Public Transport Card, Alipay, or WeChat Pay.

From Zhujiajiao Station, walk south on Xiangnengbang Road for about 10 minutes (800 m) to reach the old town entrance. There are signs in English and Chinese, and it's a pleasant walk along a canal.

Alternative: DiDi from central Shanghai costs ¥80–120 and takes about 50 minutes without traffic. Useful if you're carrying heavy bags or traveling with small children, but the metro is genuinely easier for most travelers.

Return: The last Line 17 train from Zhujiajiao Station departs around 10:30 PM, connecting to Line 2 and the rest of the Shanghai metro. Check the Shanghai Metro app for exact times on the day.`,
          whatToSkip: `The tourist shops lining the first 200 meters of Bei Da Street (the main street from the entrance). They sell the same mass-produced souvenirs you find everywhere in China — "I love Shanghai" T-shirts, cheap jade, fake antique postcards. Walk past them quickly and head deeper into the old town where the real shops and food stalls are.

The "ancient wine workshop" and similar packaged attractions inside the old town. These are ticketed tourist experiences (¥20–30 each) that are underwhelming. You'll get more authentic culture from sitting on a canal-side bench eating zongzi and watching the boats go by.

Weekends. Zhujiajiao is close enough to Shanghai that it gets packed on Saturdays and Sundays, especially in good weather. The narrow streets and bridges get congested, the food stalls sell out, and the atmosphere shifts from "charming water town" to "suburban shopping mall." Weekday mornings are a completely different experience — quieter, more local, and more beautiful.`,
          photographyTips: `Arrive before 9 AM for the best shots. The canals are still, the light is soft, and there are almost no other visitors. Start at Fangsheng Bridge and shoot downstream as the morning mist clears — the bridge arches create perfect natural frames for the canal houses below.

The best canal-side shots are from the smaller bridges on the side canals east of the main street. These are less crowded and more photogenic than the main Fangsheng Bridge area. The Zhongxian Bridge (中新桥) at the east end of the old town is particularly good — it's quiet, the houses on both sides lean over the water, and you can shoot long-exposure reflections if you have a tripod.

If you're shooting zongzi and street food, the vendors deep in the old town (past the first 200 meters of tourist shops) are more photogenic and more willing to let you photograph. A 50mm or 85mm portrait lens captures the wrapping process beautifully — ask first, buy a zongzi, and they'll usually be happy to let you shoot.`,
        }}
        customToursCTA={
          <section className="mb-10">
            <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
                Explore Zhujiajiao with a Local
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                Book a private Zhujiajiao tour with an English-speaking guide who knows the hidden canals, the best zongzi vendors, and the stories behind 1,700 years of water town history.
              </p>
              <a
                href={`https://www.getyourguide.com/s/?q=${searchQuery}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
              >
                Book a Private Zhujiajiao Tour →
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
                <span>✓ Metro-included transport</span>
                <span>✓ Hidden canal routes</span>
                <span>✓ Best zongzi spots included</span>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}