import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Street Food at Dongmen (东门老街) — Shenzhen Night Market', description: 'Dongmen old street night market in Luohu — stinky tofu, skewers, bubble tea, and cheap electronics. The sensory overload is half the fun.', keywords: ['Dongmen night market', 'Shenzhen street food', '东门老街', 'Luohu food market'], openGraph: { title: 'Street Food at Dongmen (东门老街)', description: 'Luohu\'s busiest night market — stinky tofu, skewers, and bubble tea.', url: 'https://www.trailofchina.com/destinations/shenzhen/where-to-eat/street-food-dongmen', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Street Food at Dongmen - Trail of China' }] } };

const faqJsonLd = faqPageSchema([{ question: 'When does Dongmen night market open?', answer: 'Stalls start opening around 5 PM and stay busy until midnight. Peak time is 7–10 PM. Weekends are the most crowded and lively.' }, { question: 'Is Dongmen street food safe?', answer: 'Generally yes. Look for stalls with high turnover — the food is fresh because it\'s constantly being cooked and sold. Avoid anything that looks like it\'s been sitting out.' }]);
const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Shenzhen', path: '/destinations/shenzhen' }, { name: 'Where to Eat', path: '/destinations/shenzhen/where-to-eat' }, { name: 'Street Food at Dongmen', path: '/destinations/shenzhen/where-to-eat/street-food-dongmen' }]);

export default function StreetFoodDongmenPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Street Food at Dongmen" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Shenzhen', href: '/destinations/shenzhen' }, { label: 'Where to Eat', href: '/destinations/shenzhen/where-to-eat' }]} nameZh="东门老街" city="Shenzhen"
      images={[{ src: 'https://picsum.photos/seed/shenzhen-dongmen-1/800/600', alt: 'Dongmen night market street food stalls' }, { src: 'https://picsum.photos/seed/shenzhen-dongmen-2/800/600', alt: 'Skewers and stinky tofu' }, { src: 'https://picsum.photos/seed/shenzhen-dongmen-3/800/600', alt: 'Bubble tea shops at Dongmen' }]}
      hook="Old street night market — stinky tofu, skewers, and bubble tea at Luohu's busiest spot. Come hungry and bring small bills."
      quickInfo={{ price: '¥10–30/person', hours: '17:00–00:00', bestTime: 'Evening (19:00–22:00)', metro: 'Laojie (Lines 1/3)' }}
      whyYouLoveIt={`Dongmen (东门老街) is Shenzhen's sensory overload district — a maze of pedestrian streets packed with food stalls, bubble tea shops, clothing stores, and cheap electronics. The food stalls start firing up around 5 PM and by 8 PM the whole area is a wall of noise, smoke, and delicious smells.

The must-tries are simple: stinky tofu (臭豆腐, smells terrible, tastes incredible), grilled skewers (串串, everything from lamb to lotus root), egg waffles (鸡蛋仔), and fresh bubble tea from any of the 50+ shops on the main strip. Total cost for a full eating tour: ¥30–50 if you pace yourself.`}
      description={`Dongmen Old Street (东门老街) is Luohu District's historic shopping area, transformed into one of Shenzhen's liveliest night food markets. The pedestrian-only streets fill with food stalls, clothing shops, and electronics vendors every evening, creating a chaotic, exciting atmosphere that's pure Shenzhen.`}
      hours="17:00–00:00 (stalls), shops open 10:00–22:00" price="¥10–30 per person" nearestSubway="Laojie Station, Lines 1/3" bestTime="Evening (19:00–22:00)" mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=114.1100%2C22.5400%2C114.1300%2C22.5550&layer=mapnik&marker=22.5492%2C114.1197"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum', description: 'The sit-down alternative.', href: '/destinations/shenzhen/where-to-eat/dim-sum' }, { title: 'Huaqiangbei', description: 'More shopping — the electronics version.', href: '/destinations/shenzhen/what-to-do/huaqiangbei' }, { title: 'Where to Stay', description: 'Luohu is right next to Dongmen.', href: '/destinations/shenzhen/where-to-stay' }]}
      tips={[{ type: 'tip', text: 'Come after 7 PM when all stalls are open and the atmosphere is at its peak.' }, { type: 'tip', text: 'Bring cash in small bills — some stalls don\'t have change for ¥100.' }, { type: 'tip', text: 'Try the stinky tofu — it smells terrible but tastes incredible.' }]}
      practicalDetails={{ gettingThere: 'Metro Line 1 or 3 to Laojie Station (老街站), Exit A. Walk straight into the pedestrian streets. From Luohu border crossing, it\'s a 10-minute walk west.' }}
    />
  </>);
}