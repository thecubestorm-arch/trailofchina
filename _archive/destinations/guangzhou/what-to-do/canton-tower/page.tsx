import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Canton Tower (广州塔) — Skywalk at 488 Meters',
  description: "Canton Tower isn't just an observation deck — the skywalk around the top lets you walk outside at 488 meters, with nothing between you and the Pearl River delta but air.",
  keywords: ['Canton Tower', 'Guangzhou Tower', '广州塔', 'Guangzhou observation deck', 'skywalk Guangzhou'],
  openGraph: {
    title: 'Canton Tower (广州塔) — Skywalk at 488 Meters',
    description: "Walk outside at 488 meters on Canton Tower's skywalk — nothing between you and the Pearl River delta but air.",
    url: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/canton-tower',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Canton Tower Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/what-to-do/canton-tower' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How much does Canton Tower cost?', answer: 'The observation deck costs ¥150, the skywalk costs ¥298. Book online for discounts — walk-up prices are higher.' },
  { question: 'Is the Canton Tower skywalk safe?', answer: 'Yes. You wear a full harness system attached to a rail, and you\'re accompanied by a guide. The walkway is 1.5 meters wide with railings on both sides.' },
  { question: 'What is the best time to visit Canton Tower?', answer: 'Go 30 minutes before sunset for golden hour and stay for the night view. The Pearl River lights up after dark. Weekday afternoons are least crowded.' },
  { question: 'How do I get to Canton Tower?', answer: 'Take Metro Line 3 or APM to Canton Tower Station (赤岗塔/广州塔). Exit B leads directly to the tower base.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' },
  { name: 'What to Do', path: '/destinations/guangzhou/what-to-do' },
  { name: 'Canton Tower', path: '/destinations/guangzhou/what-to-do/canton-tower' },
]);

export default function CantonTowerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Canton Tower"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' },
          { label: 'What to Do', href: '/destinations/guangzhou/what-to-do' },
        ]}
        nameZh="广州塔"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-canton-tower-1/800/600', alt: 'Canton Tower lit up at night over the Pearl River' },
          { src: 'https://picsum.photos/seed/guangzhou-canton-tower-2/800/600', alt: 'View from Canton Tower observation deck at sunset' },
          { src: 'https://picsum.photos/seed/guangzhou-canton-tower-3/800/600', alt: 'Skywalk around Canton Tower at 488 meters' },
          { src: 'https://picsum.photos/seed/guangzhou-canton-tower-4/800/600', alt: 'Canton Tower base and surrounding park' },
          { src: 'https://picsum.photos/seed/guangzhou-canton-tower-5/800/600', alt: 'Pearl River night view from Canton Tower' },
        ]}
        hook="Canton Tower isn't just an observation deck — the skywalk around the top lets you walk outside at 488 meters, with nothing between you and the Pearl River delta but air."
        quickInfo={{
          price: '¥150 (deck) / ¥298 (skywalk)',
          hours: '9:30–22:30',
          bestTime: 'Sunset–night',
          metro: 'Canton Tower (Line 3/APM)',
        }}
        whyYouLoveIt={`Canton Tower at sunset is the moment Guangzhou clicks. You ride the high-speed elevator to the observation deck, walk around the glass-enclosed perimeter, and then — if you're brave enough — you step outside onto the skywalk at 488 meters.

The skywalk is what makes this tower different from every other observation deck in China. You're harnessed to a rail system, walking on a narrow platform around the tower's "waist" (it narrows in the middle). The wind hits you. The city spreads below you. The Pearl River curves through the delta. It's genuinely thrilling in a way that glass-floored observation decks aren't.

Go 30 minutes before sunset. Watch the light change over the city, stay for the night view when Guangzhou's skyline lights up. It's the best single viewpoint in the Pearl River Delta.`}
        description={`Canton Tower (广州塔) is Guangzhou's most recognizable landmark — a 600-meter twisted tower on the south bank of the Pearl River. At 488 meters, the skywalk is the highest outdoor walkway in the world. The observation deck at 433 meters offers 360° views across Guangzhou and the Pearl River Delta.

The tower features two main experiences: the indoor observation deck (¥150) with glass panels in the floor, and the outdoor skywalk (¥298) where you walk around the tower's exterior at 488 meters with a full safety harness. There's also a rotating restaurant and, for the truly adventurous, a free-fall ride from 485 meters.`}
        hours="9:30–22:30 daily (last entry 21:30)"
        price="¥150 (observation deck) / ¥298 (skywalk)"
        nearestSubway="Canton Tower Station, Lines 3/APM"
        bestTime="30 min before sunset for golden hour + night view"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.3100%2C23.0900%2C113.3400%2C23.1200&layer=mapnik&marker=23.1067%2C113.3244"
        address="Yuejiang West Road, Haizhu District"
        addressZh="广州市海珠区阅江西路"
        relatedLinks={[]}
        relatedArticles={[
          { title: "Shamian Island", description: "Guangzhou's colonial time capsule under banyan trees.", href: "/destinations/guangzhou/what-to-do/shamian-island" },
          { title: "Dim Sum in Guangzhou", description: "The city that invented it.", href: "/destinations/guangzhou/where-to-eat/dim-sum" },
          { title: "Guangzhou Local Tips", description: "Metro survival and dim sum etiquette.", href: "/destinations/guangzhou/local-tips" },
          { title: "Where to Stay in Guangzhou", description: "Best neighborhoods for every budget.", href: "/destinations/guangzhou/where-to-stay" },
        ]}
        tips={[
          { type: 'tip', text: 'Book the skywalk online in advance — it sells out on weekends. Walk-up price is ¥398 vs ¥298 online.' },
          { type: 'tip', text: 'The skywalk requires closed-toe shoes. Sandals and flip-flops are not permitted.' },
          { type: 'photo', text: 'Go 30 minutes before sunset for the best photos. The golden hour light on the Pearl River is spectacular.' },
          { type: 'tip', text: 'The APM line connects Canton Tower to Zhujiang New Town — take it for the LED tunnel light show.' },
          { type: 'tip', text: 'Rain policy: the skywalk closes in heavy rain or wind above force 6. Check the forecast.' },
        ]}
        practicalDetails={{
          gettingThere: `Take Metro Line 3 or the APM (Automated People Mover) to Canton Tower Station (广州塔站). Exit B leads directly to the tower base. From Tianhe, it's about 15 minutes on the metro. DiDi from most central hotels costs ¥15–25.`,
          whatToSkip: `Skip the rotating restaurant unless you want overpriced Western food with a view — the observation deck café has better value snacks. Also skip the "6D cinema" inside the tower — it's a tourist trap.

The free-fall ride (极速云霄) from 485 meters is ¥130 extra and lasts about 2 seconds. Only worth it if you've always wanted to know what it feels like to fall from a tall building.`,
          photographyTips: `The best shots come from the observation deck at 433 meters, not the skywalk (you can't bring loose cameras on the skywalk — they provide lockers). Use the glass panels in the floor for dramatic downward shots.

For exterior shots of the tower, cross the Pearl River to Haixinsha Square or walk along the riverfront promenade. The tower looks best at night when the LED lights create color patterns along its entire height.`,
        }}
      />
    </>
  );
}