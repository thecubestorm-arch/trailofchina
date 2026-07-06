import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Wonton Noodles in Guangzhou (云吞面) — Cantonese Comfort Food', description: 'Thin egg noodles, shrimp wontons, clear broth — wonton noodles perfected over centuries in Guangzhou.', openGraph: { title: 'Wonton Noodles in Guangzhou (云吞面)', description: 'Cantonese comfort food perfected over centuries.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/wonton-noodles', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Wonton Noodles Guangzhou - Trail of China' }] }, alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/wonton-noodles' } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Eat', path: '/destinations/guangzhou/where-to-eat' }, { name: 'Wonton Noodles', path: '/destinations/guangzhou/where-to-eat/wonton-noodles' }]);

export default function WontonNoodlesPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Wonton Noodles" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Eat', href: '/destinations/guangzhou/where-to-eat' }]} nameZh="云吞面" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-wonton-1/800/600', alt: 'Wonton noodles in clear broth' }, { src: 'https://picsum.photos/seed/guangzhou-wonton-2/800/600', alt: 'Shrimp wontons close-up' }, { src: 'https://picsum.photos/seed/guangzhou-wonton-3/800/600', alt: 'Traditional wonton noodle shop in Guangzhou' }]}
      hook="Thin egg noodles, shrimp wontons, clear broth — Cantonese comfort food perfected over centuries."
      quickInfo={{ price: '¥15–30/bowl', hours: '6:00–14:00', bestTime: 'Morning (7–9 AM)', metro: 'Multiple (Yuexiu/Liwan)' }}
      whyYouLoveIt={`Wonton noodles (云吞面) are the workhorse of Cantonese cuisine — cheap, fast, and deeply satisfying. The Guangzhou version is the gold standard: thin alkaline egg noodles with a slight chew, plump shrimp wontons with translucent wrappers, and a clear broth that's been simmering since before dawn.

The best wonton noodle shops in Guangzhou have been making the same broth for decades, sometimes generations. They start at 4 AM, and by 6 AM the first bowls are served. You'll see businessmen in suits sitting next to construction workers, all eating the same ¥15 bowl of perfection.`}
      description={`Wonton noodles (云吞面) are a Cantonese staple consisting of thin egg noodles, shrimp wontons, and clear broth. The dish originated in Guangzhou and remains the city's most popular quick meal. The best bowls cost ¥15–30 and can be found in small shops throughout the old city districts.`}
      hours="6:00–14:00 (best before 10:00)" price="¥15–30 per bowl" nearestSubway="Multiple stations in Yuexiu and Liwan" bestTime="Early morning (7–9 AM) for freshest wontons"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2200%2C23.1100%2C113.2600%2C23.1400&layer=mapnik&marker=23.1297%2C113.2300"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'Rice Noodle Rolls', description: 'The Guangzhou breakfast staple.', href: '/destinations/guangzhou/where-to-eat/rice-noodle-rolls' }, { title: 'Where to Stay', description: 'Best neighborhoods.', href: '/destinations/guangzhou/where-to-stay' }]}
      tips={[{ type: 'tip', text: 'Look for shops with queues of locals — that\'s the quality signal. ¥15 bowls are usually the best.' }, { type: 'tip', text: 'The wontons should have whole shrimp inside, not just pork filling. If the wrapper is translucent with visible pink shrimp, you\'re in the right place.' }, { type: 'tip', text: 'Add a splash of red vinegar and chili oil from the table — that\'s how locals eat it.' }]}
      practicalDetails={{ gettingThere: 'The best wonton noodle shops are in Liwan and Yuexiu districts. Take Line 1 to Huangsha or Changshoulu.', whatToSkip: 'Skip the wonton noodle chains in shopping malls — they cost 3x more and taste worse than the neighborhood shops.' }}
    />
  </>);
}