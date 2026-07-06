import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Guangzhou Day Trip from Shenzhen (广州) — 30 Min by Bullet Train',
  description: 'Guangzhou is 30 minutes by bullet train — 2,200 years of history, the world\'s best dim sum, and the original Cantonese cuisine all before dinner. Chen Clan Ancestral Hall, Shamian Island, and more.',
  keywords: ['Guangzhou day trip from Shenzhen', 'Shenzhen to Guangzhou train', 'Guangzhou dim sum', 'Canton Tower'],
  openGraph: {
    title: 'Guangzhou Day Trip from Shenzhen (广州)',
    description: '30 minutes by bullet train — 2,200 years of history and the world\'s best dim sum.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/day-trips/guangzhou',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Guangzhou Day Trip from Shenzhen - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/shenzhen/day-trips/guangzhou' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How do I get from Shenzhen to Guangzhou?', answer: 'Take a G-series bullet train from Shenzhen North Station to Guangzhou South Station. The journey takes 30–35 minutes and costs ¥80–120 depending on class. Trains run every 10–15 minutes from 6:30 AM to 10:30 PM.' },
  { question: 'What should I eat in Guangzhou?', answer: 'Guangzhou is the capital of Cantonese cuisine. Must-try: dim sum at Panxi Restaurant or Guangzhou Restaurant, roast goose at Yung Kee, and double-skin milk (双皮奶) at Nanxin Milk Dessert.' },
  { question: 'Is one day enough for Guangzhou?', answer: 'One day covers the highlights: Chen Clan Ancestral Hall, Shamian Island, and a proper dim sum lunch. For a deeper experience, stay overnight and add Canton Tower, the Sun Yat-sen Memorial, and the museum.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Day Trips', path: '/destinations/shenzhen/day-trips' },
  { name: 'Guangzhou', path: '/destinations/shenzhen/day-trips/guangzhou' },
]);

export default function GuangzhouDayTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Guangzhou Day Trip"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Day Trips', href: '/destinations/shenzhen/day-trips' },
        ]}
        nameZh="广州"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-gz-trip-1/800/600', alt: 'Chen Clan Ancestral Hall in Guangzhou' },
          { src: 'https://picsum.photos/seed/shenzhen-gz-trip-2/800/600', alt: 'Shamian Island colonial architecture' },
          { src: 'https://picsum.photos/seed/shenzhen-gz-trip-3/800/600', alt: 'Guangzhou dim sum spread' },
          { src: 'https://picsum.photos/seed/shenzhen-gz-trip-4/800/600', alt: 'Canton Tower at night' },
          { src: 'https://picsum.photos/seed/shenzhen-gz-trip-5/800/600', alt: 'Guangzhou South railway station' },
        ]}
        hook="Guangzhou is 30 minutes by bullet train — 2,200 years of history, the world's best dim sum, and the original Cantonese cuisine all before dinner."
        quickInfo={{ price: '¥80–120 train + meals', hours: 'Trains 6:30 AM–10:30 PM', bestTime: 'Morning train', metro: 'Shenzhen North → Guangzhou South' }}
        whyYouLoveIt={`Guangzhou is what Shenzhen was before the tech boom — a 2,200-year-old city with deep Cantonese roots, world-class food, and architecture that ranges from Qing dynasty ancestral halls to Art Deco colonial buildings on Shamian Island.

The bullet train takes 30 minutes. That's it. You can leave Shenzhen at 8 AM, be in Guangzhou by 8:30, and have a full day of eating and exploring before catching the 7 PM train back. The Chen Clan Ancestral Hall's wood carvings alone are worth the trip. And the dim sum is genuinely better than Shenzhen's — Guangzhou is the home of Cantonese cuisine, after all.`}
        description={`Guangzhou (广州), historically known as Canton, is the capital of Guangdong Province and one of China's oldest cities, with a history stretching back over 2,200 years. It's the birthplace of Cantonese cuisine and the cultural heart of southern China.

Just 30 minutes from Shenzhen by bullet train, Guangzhou makes an easy and rewarding day trip. Key attractions include the Chen Clan Ancestral Hall (a Qing dynasty masterpiece of wood and stone carving), Shamian Island (a peaceful neighborhood of colonial-era buildings), and the Canton Tower (600 meters tall with an observation deck).`}
        hours="Bullet trains 6:30 AM–10:30 PM, every 10–15 minutes"
        price="¥80–120 train + ¥200–300 meals/attractions"
        nearestSubway="Shenzhen North Station (Lines 4/5/6)"
        bestTime="Take the 8 AM train for a full day"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2200%2C23.1000%2C113.3100%2C23.1600&layer=mapnik&marker=23.1291%2C113.2644"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Hong Kong Day Trip", description: "The other direction — walk across the border.", href: "/destinations/shenzhen/day-trips/hong-kong" },
          { title: "Where to Eat in Shenzhen", description: "Dim sum and more back in Shenzhen.", href: "/destinations/shenzhen/where-to-eat" },
          { title: "Dafen Oil Painting Village", description: "Also in Guangdong Province.", href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village" },
          { title: "Shenzhen Local Tips", description: "Train booking tips.", href: "/destinations/shenzhen/local-tips" },
        ]}
        tips={[
          { type: 'tip', text: 'Book bullet train tickets on 12306 or Trip.com in advance — especially weekends.' },
          { type: 'tip', text: 'Must-eat: dim sum at Panxi Restaurant (泮溪酒家), roast goose at Yung Kee.' },
          { type: 'tip', text: 'Must-see: Chen Clan Ancestral Hall (¥10), Shamian Island (free), Canton Tower (¥150).' },
          { type: 'tip', text: 'Take Guangzhou Metro Line 2 from Guangzhou South to Haizhu Square for the Chen Clan Ancestral Hall.' },
          { type: 'photo', text: 'Shamian Island\'s colonial buildings with banyan trees are Guangzhou\'s most photogenic spot.' },
        ]}
        practicalDetails={{
          gettingThere: `Take a G-series bullet train from Shenzhen North Station to Guangzhou South Station. Journey time: 30–35 minutes. Cost: ¥80–120 depending on class. Book on 12306.cn or Trip.com — weekend trains sell out.

From Guangzhou South, take Metro Line 2 north to Haizhu Square (海珠广场, 15 min) for Chen Clan Ancestral Hall access. From there, explore on foot or by metro.

Return: Trains run until 10:30 PM. Last recommended return: 8 PM train to give buffer time.`,
          whatToSkip: `Skip Canton Tower unless you really want another observation deck — you already have Ping An Finance Centre in Shenzhen. Skip the Sun Yat-sen Memorial Hall if time is tight — the Chen Clan Ancestral Hall is more impressive.

Avoid the "Guangzhou Day Tour" packages sold at Shenzhen hotels — they\'re overpriced and include shopping stops. DIY with the bullet train is cheaper, faster, and more flexible.`,
          photographyTips: `Shamian Island is the money shot — colonial buildings with banyan tree roots and cobblestone streets. Morning light is best. The Chen Clan Ancestral Hall's carved roof ridges make dramatic close-ups. For Canton Tower, night shots from across the river on Haixinsha Island are best.`,
        }}
      />
    </>
  );
}