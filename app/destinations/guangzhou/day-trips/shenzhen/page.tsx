import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Shenzhen Day Trip from Guangzhou (深圳) — China\'s Tech Capital',
  description: "Shenzhen is 30 minutes by bullet train from Guangzhou — a city that was a fishing village 40 years ago and is now China's tech capital. Electronics markets, skyscrapers, and 15 minutes from Hong Kong.",
  keywords: ['Shenzhen day trip from Guangzhou', 'Guangzhou to Shenzhen', 'bullet train Guangzhou Shenzhen'],
  openGraph: {
    title: 'Shenzhen Day Trip from Guangzhou (深圳)',
    description: "30 minutes by bullet train — from fishing village to China's tech capital.",
    url: 'https://www.trailofchina.com/destinations/guangzhou/day-trips/shenzhen',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Shenzhen Day Trip from Guangzhou - Trail of China' }],
  },
  alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/day-trips/shenzhen' },
};

const faqJsonLd = faqPageSchema([
  { question: 'How do I get from Guangzhou to Shenzhen?', answer: 'Take the bullet train from Guangzhou South or Guangzhou East Station to Shenzhen North. 30–40 minutes, ¥80–120. Book on 12306 app or website. Trains run every 10–15 minutes.' },
  { question: 'Is Shenzhen worth a day trip from Guangzhou?', answer: 'Yes if you want to see China\'s tech capital, the world\'s largest electronics market (Huaqiangbei), or walk across the border to Hong Kong. Skip it if you\'re primarily interested in history or food — Guangzhou has more of both.' },
  { question: 'Can I visit Hong Kong from Shenzhen on a day trip?', answer: 'Yes — walk across the Futian checkpoint (15 min) to Hong Kong\'s MTR system. You need a valid Chinese visa for re-entry. Most Western nationals get visa-free Hong Kong entry.' },
]);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' },
  { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Day Trips', path: '/destinations/guangzhou/day-trips' },
  { name: 'Shenzhen', path: '/destinations/guangzhou/day-trips/shenzhen' },
]);

export default function ShenzhenDayTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AuthorByline />
      <AttractionPage
        name="Shenzhen Day Trip"
        breadcrumbs={[
          { label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' },
          { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Day Trips', href: '/destinations/guangzhou/day-trips' },
        ]}
        nameZh="深圳"
        city="Guangzhou"
        images={[
          { src: 'https://picsum.photos/seed/guangzhou-sz-trip-1/800/600', alt: 'Shenzhen Ping An Finance Centre skyline' },
          { src: 'https://picsum.photos/seed/guangzhou-sz-trip-2/800/600', alt: 'Huaqiangbei electronics market' },
          { src: 'https://picsum.photos/seed/guangzhou-sz-trip-3/800/600', alt: 'Bullet train from Guangzhou to Shenzhen' },
          { src: 'https://picsum.photos/seed/guangzhou-sz-trip-4/800/600', alt: 'OCT Loft art district in Shenzhen' },
          { src: 'https://picsum.photos/seed/guangzhou-sz-trip-5/800/600', alt: 'Futian border crossing to Hong Kong' },
        ]}
        hook="Shenzhen is 30 minutes by bullet train — a city that was a fishing village 40 years ago and is now China's tech capital. Go for the electronics markets, stay for the skyline."
        quickInfo={{ price: '¥80–120 train + attractions', hours: 'Full day', bestTime: 'Weekday mornings', metro: 'Bullet train from GZ South/East' }}
        whyYouLoveIt={`Taking the bullet train from Guangzhou to Shenzhen is a 30-minute lesson in Chinese speed. You leave Guangzhou — 2,200 years old, the food capital of China — and arrive in Shenzhen, which was a fishing village when Deng Xiaoping drew a circle around it in 1980. Today it's China's Silicon Valley.

The contrast is the point. In Guangzhou you eat dim sum in century-old restaurants; in Shenzhen you browse the world's largest electronics market. In Guangzhou you walk colonial-era Shamian Island; in Shenzhen you look down from the 116th floor of China's second-tallest building.

If you have an extra day in Guangzhou and want to see the future that China is building, take the train.`}
        description={`Shenzhen (深圳) is China's tech capital, 30 minutes by bullet train from Guangzhou. Founded as a Special Economic Zone in 1980, it grew from a fishing village to a city of 17 million. Key attractions include Huaqiangbei (world's largest electronics market), Ping An Finance Centre (599m observation deck), Dafen Oil Painting Village, and the Hong Kong border at Futian.`}
        hours="Bullet trains run 6:30–23:00, every 10–15 minutes"
        price="Bullet train ¥80–120 one way + attractions"
        nearestSubway="Guangzhou South or Guangzhou East Station (bullet train)"
        bestTime="Weekday mornings for fewer crowds at Huaqiangbei"
        mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.0200%2C22.5200%2C114.1000%2C22.5600&layer=mapnik&marker=22.5431%2C114.0579"
        relatedLinks={[]}
        relatedArticles={[
          { title: "What to Do in Guangzhou", description: "Top attractions when you return.", href: "/destinations/guangzhou/what-to-do" },
          { title: "Foshan Day Trip", description: "The other direction — wing chun and culture.", href: "/destinations/guangzhou/day-trips/foshan" },
          { title: "Guangzhou Local Tips", description: "Metro and bullet train tips.", href: "/destinations/guangzhou/local-tips" },
          { title: "Shenzhen Full Guide", description: "Complete Shenzhen city guide.", href: "/destinations/shenzhen" },
        ]}
        tips={[
          { type: 'tip', text: 'Book bullet train tickets on 12306 app or website. Trains run every 10–15 minutes but can sell out at peak times.' },
          { type: 'tip', text: 'Guangzhou East → Shenzhen is slightly faster (29 min) than Guangzhou South → Shenzhen North (35 min).' },
          { type: 'tip', text: 'Must-do: Huaqiangbei electronics market (free) + Ping An Finance Centre observation deck (¥200).' },
          { type: 'tip', text: 'If you want to visit Hong Kong too, cross at Futian checkpoint (15 min walk) — but that\'s a very packed day.' },
          { type: 'photo', text: 'The Ping An Finance Centre at sunset and the Huaqiangbei neon at night are the best Shenzhen photo ops.' },
        ]}
        practicalDetails={{
          gettingThere: `Take the bullet train from Guangzhou East Station (广州东站) to Shenzhen Station (29 min, ¥80–100) or from Guangzhou South Station (广州南站) to Shenzhen North (35 min, ¥80–120).

Book on the 12306 app — you'll need your passport number. Arrive at the station 30 minutes before departure for security and boarding.`,
          whatToSkip: `Don't try to do Shenzhen AND Hong Kong in one day — pick one or the other. If you want both, spend a night in Shenzhen.

Skip the Window of the World theme park unless you have kids — it's kitschy and eats up half a day.`,
          photographyTips: `The Ping An Finance Centre observation deck gives the best skyline shot. At Huaqiangbei, the neon-lit interior of SEG Plaza at night is pure cyberpunk. OCT Loft has street art and gallery interiors.`,
        }}
      />
    </>
  );
}