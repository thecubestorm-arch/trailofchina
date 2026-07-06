import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';
import AuthorByline from '@/components/AuthorByline';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Rice Noodle Rolls in Guangzhou (肠粉) — The Breakfast Staple', description: 'Cheung fun — silky rice noodle rolls with soy sauce, the Guangzhou breakfast that costs almost nothing and tastes like everything.', openGraph: { title: 'Rice Noodle Rolls in Guangzhou (肠粉)', description: 'Silky rice noodle rolls with soy sauce — the Guangzhou breakfast staple.', url: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/rice-noodle-rolls', type: 'website', images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Rice Noodle Rolls Guangzhou - Trail of China' }] }, alternates: { canonical: 'https://www.trailofchina.com/destinations/guangzhou/where-to-eat/rice-noodle-rolls' } };

const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: 'Guangzhou', path: '/destinations/guangzhou' }, { name: 'Where to Eat', path: '/destinations/guangzhou/where-to-eat' }, { name: 'Rice Noodle Rolls', path: '/destinations/guangzhou/where-to-eat/rice-noodle-rolls' }]);

export default function RiceNoodleRollsPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <AuthorByline />
    <AttractionPage name="Rice Noodle Rolls" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Guangzhou', href: '/destinations/guangzhou' }, { label: 'Where to Eat', href: '/destinations/guangzhou/where-to-eat' }]} nameZh="肠粉" city="Guangzhou"
      images={[{ src: 'https://picsum.photos/seed/guangzhou-cheung-fun-1/800/600', alt: 'Steaming rice noodle rolls with soy sauce' }, { src: 'https://picsum.photos/seed/guangzhou-cheung-fun-2/800/600', alt: 'Cheung fun being made on a steam tray' }, { src: 'https://picsum.photos/seed/guangzhou-cheung-fun-3/800/600', alt: 'Rice noodle roll with shrimp filling' }]}
      hook="Cheung fun — silky rice noodle rolls with sweet soy sauce, the Guangzhou breakfast that costs almost nothing."
      quickInfo={{ price: '¥8–15/plate', hours: '6:00–11:00', bestTime: '7:00–9:00 AM', metro: 'Multiple (Yuexiu/Liwan)' }}
      whyYouLoveIt={`Rice noodle rolls (肠粉, cheung fun) are the reason Guangzhou mornings are worth waking up for. A thin layer of rice batter is steamed on a cloth tray, filled with shrimp or beef or char siu, rolled up, and doused in sweet soy sauce. The whole thing takes 30 seconds to make and costs ¥8.

The texture is what makes it — silky, slightly chewy, slippery. The soy sauce is Guangzhou's secret: slightly sweet, slightly savory, poured on generously. You eat it standing at a counter or sitting on a plastic stool, and it's the best ¥8 you'll spend in China.`}
      description={`Rice noodle rolls (肠粉) are a Cantonese breakfast staple consisting of steamed rice batter rolled around fillings like shrimp, beef, or char siu pork, served with sweet soy sauce. The dish originated in Guangzhou's Pearl River Delta and remains the city's most popular cheap breakfast.`}
      hours="6:00–11:00 (breakfast only)" price="¥8–15 per plate" nearestSubway="Multiple stations in Yuexiu and Liwan" bestTime="7:00–9:00 AM for freshest rolls"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=113.2200%2C23.1050%2C113.2500%2C23.1350&layer=mapnik&marker=23.1247%2C113.2350"
      relatedLinks={[]} relatedArticles={[{ title: 'Dim Sum in Guangzhou', description: 'The city that invented it.', href: '/destinations/guangzhou/where-to-eat/dim-sum' }, { title: 'Wonton Noodles', description: 'Cantonese comfort food.', href: '/destinations/guangzhou/where-to-eat/wonton-noodles' }, { title: 'Beijing Road', description: '2,000-year-old shopping street.', href: '/destinations/guangzhou/what-to-do/beijing-road' }]}
      tips={[{ type: 'tip', text: 'Look for shops with steam trays visible — that means they\'re making cheung fun fresh.' }, { type: 'tip', text: 'Shrimp (虾肠) and beef (牛肉肠) are the two best fillings. Char siu (叉烧肠) is also excellent.' }, { type: 'tip', text: 'Add chili oil if you like heat. The soy sauce is sweet — the chili balances it perfectly.' }]}
      practicalDetails={{ gettingThere: 'The best cheung fun shops are in Liwan and Yuexiu. Take Line 1 to Changshoulu or Huangsha.', whatToSkip: 'Skip the pre-made cheung fun in shopping mall food courts — it sits under heat lamps. You want it made fresh on the steam tray.' }}
    />
  </>);
}