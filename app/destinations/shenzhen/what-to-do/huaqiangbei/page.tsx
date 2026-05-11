import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Huaqiangbei (华强北) — World\'s Largest Electronics Market',
  description:
    'Huaqiangbei is a 1 km stretch of electronics malls selling every component, gadget, and drone imaginable. The world\'s largest electronics market — and it\'s free to browse.',
  keywords: [
    'Huaqiangbei',
    'Shenzhen electronics market',
    'SEG Electronics Market',
    'Shenzhen shopping',
    'electronics market China',
  ],
  openGraph: {
    title: 'Huaqiangbei (华强北) — World\'s Largest Electronics Market',
    description:
      'If it has a circuit board, Huaqiangbei sells it — the world\'s largest electronics market in Shenzhen.',
    url: 'https://www.trailofchina.com/destinations/shenzhen/what-to-do/huaqiangbei',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Huaqiangbei Electronics Market - Trail of China' }],
  },
};

const faqJsonLd = faqPageSchema([
  {
    question: 'Is Huaqiangbei safe for tourists?',
    answer: 'Yes, Huaqiangbei is generally safe. Watch your belongings in crowded areas and be prepared to bargain. The main risk is buying counterfeit products — stick to established stalls and test electronics before paying.',
  },
  {
    question: 'Can I buy individual electronic components at Huaqiangbei?',
    answer: 'Absolutely. That\'s the whole point. You can buy individual resistors, LEDs, microcontrollers, screens, batteries — anything. Many stalls sell in small quantities perfect for hobbyists.',
  },
  {
    question: 'How do I get to Huaqiangbei?',
    answer: 'Take Metro Line 1, 2, 3, or 7 to Huaqiang Road Station (华强路). Use Exit A and walk south into the market area. The SEG Plaza building is the main landmark.',
  },
  {
    question: 'What should I avoid buying at Huaqiangbei?',
    answer: 'Avoid fake iPhones, AirPods, and branded luxury goods — they\'re counterfeit and customs will confiscate them. Stick to generic electronics, components, and gadgets without fake branding.',
  },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Shenzhen', path: '/destinations/shenzhen' },
  { name: 'What to Do', path: '/destinations/shenzhen/what-to-do' },
  { name: 'Huaqiangbei', path: '/destinations/shenzhen/what-to-do/huaqiangbei' },
]);

export default function HuaqiangbeiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Huaqiangbei"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Shenzhen', href: '/destinations/shenzhen' },
          { label: 'What to Do', href: '/destinations/shenzhen/what-to-do' },
        ]}
        nameZh="华强北"
        city="Shenzhen"
        images={[
          { src: 'https://picsum.photos/seed/shenzhen-huaqiangbei-1/800/600', alt: 'Huaqiangbei electronics market bustling with shoppers' },
          { src: 'https://picsum.photos/seed/shenzhen-huaqiangbei-2/800/600', alt: 'Rows of electronic components at Huaqiangbei' },
          { src: 'https://picsum.photos/seed/shenzhen-huaqiangbei-3/800/600', alt: 'SEG Plaza building at Huaqiangbei' },
          { src: 'https://picsum.photos/seed/shenzhen-huaqiangbei-4/800/600', alt: 'Drone stalls at Huaqiangbei market' },
          { src: 'https://picsum.photos/seed/shenzhen-huaqiangbei-5/800/600', alt: 'Night view of Huaqiangbei street' },
        ]}
        hook="If it has a circuit board, Huaqiangbei sells it — this 1 km stretch has every component ever made, plus the phones and drones assembled from them."
        quickInfo={{
          price: 'Free to browse',
          hours: '10:00–21:00',
          bestTime: 'Weekday mornings',
          metro: 'Huaqiang Road (Lines 1/2/3/7)',
        }}
        whyYouLoveIt={`Huaqiangbei is what happens when an entire industry stacks itself into a single kilometer of multistory malls. There are buildings dedicated to nothing but phone cases, floors where every stall sells LED strips, and basements packed with resistors sorted by color code. You can buy a single resistor for ¥0.01 or a fleet of drones.

The real magic is the sheer density. Every floor is its own micro-economy — one building for screens, the next for batteries, the next for complete phones. Stall owners are used to foreign buyers and most speak enough English to negotiate. Come with a shopping list, a phone with Alipay, and a willingness to bargain.

Don't expect polished Apple Store aesthetics. This is raw capitalism — neon signs, crowds of buyers, and the occasional cat sleeping on a pile of phone chargers. It's overwhelming in the best way possible.`}
        description={`Huaqiangbei (华强北) is Shenzhen's legendary electronics market — a 1 km stretch of multi-story malls in Futian District that sells every electronic component, gadget, and device imaginable. It's the retail face of Shenzhen's hardware ecosystem, where the world's phones, drones, and IoT devices are prototyped and assembled.

The market is divided into several buildings. SEG Plaza is the most famous, with floors dedicated to different product categories. You'll find phone parts on one floor, laptop components on another, and an entire level of LED products. The smaller alley shops between the main buildings sell everything else — from Arduinos to camera lenses to quadcopter kits.

Huaqiangbei evolved from a single electronics street in the 1980s into what is now recognized as the world's largest electronics market. At its peak, it processed over ¥30 billion in annual transactions. While online commerce has shifted some volume away, it remains the most concentrated physical electronics marketplace on Earth.`}
        hours="10:00–21:00 daily (individual stalls vary)"
        price="Free to browse"
        nearestSubway="Huaqiang Road Station, Lines 1/2/3/7"
        bestTime="Weekday mornings (10:00–12:00) are least crowded"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0800%2C22.5400%2C114.1000%2C22.5550&layer=mapnik&marker=22.5478%2C114.0889"
        address="Huaqiang North Road, Futian District"
        addressZh="深圳市福田区华强北路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Ping An Finance Centre", description: "China's 2nd tallest building with 116th floor observation deck.", href: "/destinations/shenzhen/what-to-do/ping-an-finance-centre" },
          { title: "Dafen Oil Painting Village", description: "A village producing 5 million paintings a year.", href: "/destinations/shenzhen/what-to-do/dafen-oil-painting-village" },
          { title: "Shenzhen Local Tips", description: "Border crossings, metro hacks, and shopping advice.", href: "/destinations/shenzhen/local-tips" },
          { title: "Where to Eat in Shenzhen", description: "Dim sum, Hakka food, and street markets.", href: "/destinations/shenzhen/where-to-eat" },
        ]}
        tips={[
          { type: 'tip', text: 'Bargain hard — initial prices are often 2-3x what locals pay. Start at 40% and work up.' },
          { type: 'tip', text: 'Avoid fake iPhones, AirPods, and luxury brands — they\'re counterfeit and customs will confiscate them.' },
          { type: 'tip', text: 'Bring a phone with Alipay — most stalls don\'t accept cash or foreign cards.' },
          { type: 'photo', text: 'The neon-lit interior of SEG Plaza at night makes for great photos — ask permission before photographing individual stalls.' },
          { type: 'tip', text: 'Test all electronics before paying. Most stalls will let you plug in and verify items work.' },
        ]}
        practicalDetails={{
          gettingThere: `Take Metro Lines 1, 2, 3, or 7 to Huaqiang Road Station (华强路). Exit A leads directly to the market street. From the Luohu border crossing, it's about 20 minutes by metro. From Futian checkpoint, it's just 3 stops on Line 4.

If you're coming from Shenzhen North Station, take Line 4 to Civic Center and transfer to Line 2 one stop north. DiDi from most central hotels costs ¥15–25.`,
          whatToSkip: `Skip the "Apple Store" lookalikes — they sell refurbished and counterfeit products. The real value of Huaqiangbei is in components, DIY electronics, and unique gadgets you can't find elsewhere.

Avoid the ground-floor tourist traps with overpriced phone cases and chargers. The best deals are on the upper floors and in the smaller alley shops between the main buildings.

Don't buy branded goods (Nike, LV, Beats) — they're fake, and you risk confiscation at customs. Generic electronics and components are genuine and excellent value.`,
          photographyTips: `The market interiors are visually overwhelming — neon signs, wall-to-wall stalls, and towers of components. Best photos come from the upper floors of SEG Plaza looking down at the chaos below.

For street-level shots, walk Huaqiang North Road at dusk when the neon signs light up but the crowds thin out. The juxtaposition of raw electronics and futuristic lighting is pure Shenzhen.

Ask permission before photographing individual stall owners — most are friendly but busy. A quick smile and gesture toward your camera usually gets a nod.`,
        }}
      />
    </>
  );
}