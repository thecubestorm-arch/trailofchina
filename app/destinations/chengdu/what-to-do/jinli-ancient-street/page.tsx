import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Jinli Ancient Street (锦里) Chengdu | Shopping, Snacks & Night Visits',
  description:
    'Chengdu\'s most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine. Packed by day, magical at night. The perfect first stop in Chengdu for street food and souvenirs.',
  openGraph: {
    title: 'Jinli Ancient Street (锦里) Chengdu | Shopping, Snacks & Night Visits',
    description:
      'Chengdu\'s most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine.',
    url: 'https://trailofchina.com/destinations/chengdu/what-to-do/jinli-ancient-street',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent('Jinli Ancient Street Chengdu tour');

export default function JinliAncientStreetPage() {
  const tips = [
    {
      type: 'tip',
      text: 'Go at night when red lanterns are lit — the street transforms into a magical lantern-lit corridor',
    },
    {
      type: 'tip',
      text: 'Avoid weekends — Jinli becomes extremely packed and difficult to walk through',
    },
    {
      type: 'tip',
      text: 'Combine with Wuhou Shrine next door — they share an entrance and are best visited together',
    },
    {
      type: 'tip',
      text: 'Sugar painting (糖画) artists are worth watching — traditional art form with intricate designs',
    },
    {
      type: 'tip',
      text: 'Try three-cannon tea (三大炮) — a unique Chengdu street food experience',
    },
  ] as const;

  const photoSpots = [
    {
      type: 'photo',
      text: 'Red lantern street at night — the iconic lantern corridor with reflection on wet pavement',
    },
    {
      type: 'photo',
      text: 'Sugar painting artists at work — capturing the traditional art form in progress',
    },
    {
      type: 'photo',
      text: 'Wuhou Shrine entrance — the historic gate visible from Jinli street',
    },
    {
      type: 'photo',
      text: 'Traditional wooden architecture — intricate carvings and red wood facades',
    },
  ] as const;

  return (
    <AttractionPage
      name="Jinli Ancient Street"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Chengdu', href: '/destinations/chengdu' },
        { label: 'What to Do', href: '/destinations/chengdu/what-to-do' },
      ]}
      nameZh="锦里"
      city="Chengdu"
      images={[
        { src: 'https://picsum.photos/seed/jinli-lanterns/800/500', alt: 'Red lanterns illuminating Jinli Ancient Street at night' },
        { src: 'https://picsum.photos/seed/jinli-food/800/500', alt: 'Sichuan street food stalls along Jinli alley' },
        { src: 'https://picsum.photos/seed/jinli-alley/800/500', alt: 'Lantern-lit wooden alley in Jinli Ancient Street' },
        { src: 'https://picsum.photos/seed/jinli-opera/800/500', alt: 'Face-changing opera performance in Jinli' },
        { src: 'https://picsum.photos/seed/jinli-night/800/500', alt: 'Jinli Ancient Street glowing at night' },
      ]}
      hook="Chengdu's snack street — lantern-lit alleys, face-changing performances, street food paradise."
      quickInfo={{
        price: 'Free',
        hours: 'Always open',
        bestTime: 'Evening for lanterns',
        metro: 'Wuhou Shrine (Line 3)',
      }}
      whyYouLoveIt={`After dark, Jinli transforms from a crowded shopping street into something genuinely magical — thousands of red lanterns cast a warm glow over the wooden architecture, and the crowds thin out enough that you can actually hear the sizzle of street food being cooked at open-air stalls. The face-changing opera performances that happen in small theaters along the street are worth the ¥30 admission — watching a performer swap masks in a fraction of a second, inches from your face, never gets old.

The snack selection here is the best in Chengdu — three-cannon tea (three sticky rice balls thrown onto a drum before being drenched in syrup), spicy rabbit heads (a local delicacy that tastes better than it sounds), and sugar paintings made to order by artists who create intricate designs with melted sugar. Skip the souvenir shops and focus on the food; this is Chengdu's most accessible introduction to Sichuan street cuisine.`}
      practicalDetails={{
        gettingThere: 'Line 3',
        whatToSkip: 'Overpriced souvenirs',
        photographyTips: 'Night lanterns, face-changing shows',
      }}
      description={`Chengdu's most atmospheric pedestrian street — red lanterns, wooden architecture, snack stalls, and tea houses. Adjacent to Wuhou Shrine. Packed by day, magical at night. The perfect first stop in Chengdu for street food and souvenirs.`}
      hours="Open all day, best 10:00-22:00"
      price="Free entry"
      nearestSubway="Gaoshengqiao, Line 3"
      bestTime="Evening (after 6 PM) when lanterns are lit"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=104.0424%2C30.6457%2C104.0524%2C30.6517&layer=mapnik&marker=30.6487%2C104.0474"
      address="Jinli Street, Wuhou District"
      addressZh="成都市武侯区锦里"
      relatedLinks={[]}
      relatedArticles={[
        { title: "Panda Base", description: "World's most famous giant panda sanctuary with over 200 pandas.", href: "/destinations/chengdu/what-to-do/panda-base" },
        { title: "Sichuan Hotpot", description: "Chengdu's most famous culinary experience - spicy and numbing.", href: "/destinations/chengdu/where-to-eat/sichuan-hotpot" },
        { title: "Wenshu Monastery", description: "Beautiful Buddhist monastery with peaceful gardens.", href: "/destinations/chengdu/what-to-do/wenshu-monastery" },
        { title: "Kuanzhai Alley", description: "Explore Kuanzhai Alley, one of Chengdu's top attractions.", href: "/destinations/chengdu/what-to-do/kuanzhai-alley" },
        { title: "Where to Eat in Chengdu", description: "Discover Chengdu's best local dishes and restaurants.", href: "/destinations/chengdu/where-to-eat" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Crowded Jinli Walk?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Experience Jinli after dark. Book an evening tour with a local guide who knows the hidden snack stalls, the best Sichuan opera spots, and the stories behind the lanterns.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book an Evening Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Evening atmosphere & lanterns</span>
              <span>✓ Hidden snack stalls</span>
              <span>✓ Sichuan opera access</span>
            </div>
          </div>
        </section>
      }
    />
  );
}