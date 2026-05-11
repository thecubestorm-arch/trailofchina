import { Metadata } from 'next';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: "Du Fu Thatched Cottage (杜甫草堂) | Chengdu Poet's Garden Guide",
  description:
    "Visit Du Fu Thatched Cottage in Chengdu for classical gardens, literary history, and one of the city's calmest cultural attractions.",
  openGraph: {
    title: 'Du Fu Thatched Cottage - Trail of China',
    description: 'Classical gardens and literary history in Chengdu.',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Du Fu Thatched Cottage - Trail of China' }],
  },
};

export default function DufuCottagePage() {
  return (
    <AttractionPage
      name="Du Fu Thatched Cottage"
      nameZh="杜甫草堂"
      city="Chengdu"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
      ]}
      images={[
        { src: 'https://picsum.photos/seed/chengdu-dufu-1/800/500', alt: 'Gardens at Du Fu Thatched Cottage in Chengdu' },
        { src: 'https://picsum.photos/seed/chengdu-dufu-2/800/500', alt: 'Traditional halls and bamboo around Du Fu Thatched Cottage' },
        { src: 'https://picsum.photos/seed/chengdu-dufu-3/800/500', alt: 'Pathways through the grounds of Du Fu Thatched Cottage' },
      ]}
      hook="A leafy museum-garden dedicated to poet Du Fu, and one of Chengdu's best places to trade noise for atmosphere."
      quickInfo={{
        price: '¥50',
        hours: '9:00-18:00',
        bestTime: 'Weekday mornings',
        metro: 'Caotang North Road area by taxi or bus transfer',
      }}
      whyYouLoveIt="This is where Chengdu's slower reputation really makes sense. The site is not about a single dramatic monument. It is about layered quiet: bamboo, tiled halls, old trees, poems on stone, and enough space to move slowly. If you like temples and gardens more than checklist landmarks, it is one of the city's highest-value stops."
      practicalDetails={{
        gettingThere: 'Best reached by DiDi from central Chengdu or combined with the nearby Huanhuaxi area',
        whatToSkip: 'Rushing through in under an hour',
        photographyTips: 'Use shaded garden paths and courtyard frames instead of shooting only the recreated cottage',
      }}
      description="Du Fu lived in Chengdu during one of the most difficult periods of the Tang dynasty, and the cottage site commemorates the years in which he wrote many of his best-known poems. Today's complex is part memorial, part museum, part classical garden. It is especially good for travelers who want a more contemplative counterweight to Chengdu's busier temple streets and commercial alleys."
      hours="9:00-18:00"
      price="¥50"
      nearestSubway="Best reached by DiDi from central Chengdu"
      bestTime="Weekday mornings and late afternoons"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.03%2C30.656%2C104.038%2C30.662&layer=mapnik&marker=30.659%2C104.034"
      address="37 Qinghua Road, Qingyang District"
      addressZh="青羊区青华路37号"
      relatedLinks={[]}
      relatedArticles={[
        { title: 'Wuhou Shrine', description: 'Chengdu’s strongest Three Kingdoms historical site.', href: '/destinations/chengdu/what-to-do/wuhou-shrine' },
        { title: 'Wide and Narrow Alleys', description: 'Restore the pace after the museum with cafés and courtyards.', href: '/destinations/chengdu/what-to-do/wide-narrow-alleys' },
        { title: 'Chengdu Local Tips', description: 'How to pace your days in a slower city.', href: '/destinations/chengdu/local-tips' },
      ]}
      tips={[
        { type: 'tip', text: 'Give it at least 90 minutes; the gardens matter as much as the memorial halls.' },
        { type: 'tip', text: 'This works especially well on a hotter afternoon because much of the site is shaded.' },
        { type: 'photo', text: 'The quiet bamboo paths and tiled eaves are stronger photos than the busiest central courtyard.' },
      ]}
    />
  );
}
