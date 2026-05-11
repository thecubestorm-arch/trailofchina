import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'Hongya Cave (洪崖洞) - Chongqing\'s Stilted wonder',
  description:
    'Chongqing\'s iconic stilted building complex on the Jialing River. 11 stories of shops, restaurants, and views. Free to explore.',
  openGraph: {
    title: 'Hongya Cave (洪崖洞) - Chongqing\'s Stilted wonder',
    description:
      'Chongqing\'s iconic stilted building complex on the Jialing River. 11 stories of shops, restaurants, and views. Free to explore.',
    url: 'https://www.trailofchina.com/destinations/chongqing/what-to-do/hongya-cave',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Hongya Cave (洪崖洞) - Chongqing\ - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Hongya Cave Chongqing');

export default function HongyaCavePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Visit during "golden hour" — 30 minutes before sunset until about 20 minutes after for the best light and photos',
    },
    {
      type: 'tip',
      text: 'Go to the top floor (11th) first for the panoramic view, then work your way down'
    },
    {
      type: 'tip',
      text: 'The building has 11 stories but only 6 are above ground — the rest descend into the hillside'
    },
    {
      type: 'tip',
      text: 'The "cave" section (Basement 1 and 2) has food stalls and local snacks — try the stinky tofu'
    },
    {
      type: 'tip',
      text: 'The night lights turn on at 7:30 PM — the best time for photography when the building is fully illuminated'
    },
    {
      type: 'tip',
      text: 'Take the elevator instead of stairs — Chongqing is extremely hilly and the climb is exhausting'
    },
    {
      type: 'tip',
      text: 'Visit on a weekday to avoid the massive weekend crowds — weekends can make navigation difficult'
    },
  ] as const


  const photoSpots = [
    {
      type: 'photo',
      text: 'From the river level (Jialing River Bridge area) — the classic view of the building rising from the hillside'
    },
    {
      type: 'photo',
      text: 'Top floor balcony at sunset — the light on the building is spectacular'
    },
    {
      type: 'photo',
      text: 'Nighttime from the opposite bank — the illuminated building is Chongqing\'s signature image'
    },
    {
      type: 'photo',
      text: 'The staircase entrance at night — the red lanterns and neon lights are iconic'
    },
  ] as const

  return (
    <AttractionPage
      name="Hongya Cave"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Chongqing', href: '/destinations/chongqing' },
      { label: 'What to Do', href: '/destinations/chongqing/what-to-do' },
    ]}
      nameZh="洪崖洞"
      city="Chongqing"
      images={[
        { src: 'https://picsum.photos/seed/hongya-cave-night/800/600', alt: 'Hongya Cave illuminated at night like a golden lantern' },
        { src: 'https://picsum.photos/seed/hongya-cave-lights/800/600', alt: 'Golden lights reflecting on the river below Hongya Cave' },
        { src: 'https://picsum.photos/seed/hongya-cave-street/800/600', alt: '4th floor street entrance of Hongya Cave' },
        { src: 'https://picsum.photos/seed/hongya-cave-river/800/600', alt: 'Night panorama of Hongya Cave from across the river' },
        { src: 'https://picsum.photos/seed/hongya-cave-stilts/800/600', alt: 'Layered stilted buildings of Hongya Cave climbing the cliff' },
      ]}
      hook="A 75-meter cliffside complex that lights up like a golden lantern at night — this is the image that made Chongqing famous on Instagram."
      quickInfo={{
        price: 'Free',
        hours: 'Always open (shops 11:00–23:00)',
        bestTime: 'Night (after 8 PM for lights)',
        metro: 'Xiaoshizi (Line 1)',
      }}
      whyYouLoveIt={`You've seen this photo a thousand times before you even knew what it was called — a cascading stack of golden-lit buildings climbing up a cliffside, straight out of a Studio Ghibli film. Hongya Cave is that place, and the hype is actually justified. The complex is built in the traditional diaojiaolou style — stilted buildings layered into a 75-meter cliff face on the Jialing River. Eleven floors stacked on top of each other, with restaurants, teahouses, and narrow corridors that make you feel like you've wandered into a different era.

The real magic happens after 8 PM when the lights come on. Every floor glows warm gold against the black cliff, and from across the river it looks like a palace carved from light. It's no coincidence this became Chongqing's most photographed spot — locals and tourists both just stand there, staring. And here's the thing most people miss: the "bottom" entrance is actually on the 4th floor, street level. The floors keep going down from there, deep into the cliff. This is Chongqing's verticality in a single building. Walk down to the river level, cross the Jialing River Bridge, and look back — that's the money shot, and it's completely free.`}
      description={`Hongya Cave (洪崖洞) is Chongqing's most iconic landmark — an 11-story stilted building complex built into the hillside overlooking the Jialing River. The structure resembles ancient Chaotianmen Gate but was rebuilt in 2006 with modern amenities.

The building rises 15 stories in total, with 6 above ground and 5 descending into the hillside. Each level has a different theme: Level 1 is the entrance with food stalls, Level 2 has snacks, Level 3 has shopping, Level 4 has tea houses, Level 5 has performance venues, Level 6 has restaurants, Level 7 has entertainment, and Level 8-11 are observation decks and luxury suites.

The architecture is unique to Chongqing — stilted buildings (吊脚楼) have been used for over 2,000 years to deal with the city's mountainous terrain and river floods. Hongya Cave features 30 meters of elevation change and over 1,000 meters of corridors.

It's free to explore and has become Chongqing's most popular tourist destination, attracting over 100 million visitors since opening. The nightly light shows and the view of the river and city make it a must-visit for any Chongqing traveler.`}
      hours="14:00-22:00 (levels open at different times)"
      price="Free (some attractions within have separate fees)"
      nearestSubway="Linjiangmen Station, Line 1"
      bestTime="Golden hour (sunset) and nighttime for the lights"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=106.5703%2C29.5621%2C106.5803%2C29.5681&layer=mapnik&marker=29.5651%2C106.5753"
      address="88 Jialingjiang Binjiang Road, Yuzhong District"
      addressZh="重庆市渝中区嘉陵江滨江路88号"
      relatedLinks={[]}
      relatedArticles={[
        { title: "Ciqikou Ancient Town", description: "Historic port town with cobblestone streets and traditional architecture.", href: "/destinations/chongqing/what-to-do/ciqikou" },
        { title: "Chongqing Hotpot", description: "Chongqing's signature dish - spicy, oily, and unforgettable.", href: "/destinations/chongqing/where-to-eat/chongqing-hotpot" },
        { title: "Yangtze River Cable Car", description: "Aerial ride over the Yangtze River with stunning city views.", href: "/destinations/chongqing/what-to-do/yangtze-cable-car" },
        { title: "Chongqing Local Tips", description: "Practical tips for navigating Chongqing like a local.", href: "/destinations/chongqing/local-tips" },
        { title: "Chongqing Food Guide", description: "Discover Chongqing's best local dishes and restaurants.", href: "/destinations/chongqing/where-to-eat" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Stay in Chongqing", description: "Find the best neighborhoods and accommodations in Chongqing.", href: "/destinations/chongqing/where-to-stay" },
        { title: "Dazu Rock Carvings", description: "Explore Dazu Rock Carvings, one of Chongqing's top attractions.", href: "/destinations/chongqing/what-to-do/dazu-rock-carvings" },
      ]}
      tips={[...tips, ...photoSpots]}
      practicalDetails={{
        gettingThere: `Take Metro Line 1 to Xiaoshizi Station. Walk toward the river and you'll see the golden building before you hear the crowds. The 4th-floor entrance is at street level on Cangbai Road, which is actually the easiest way in. Don't try to enter from the river side unless you want to climb 11 floors.

If you're already inside Hongya Cave, the building's multiple floor levels connect to different streets — the top connects to Cangbai Road, the middle connects to Binjiang Road, and the bottom connects to the riverbank. It's free to walk through, so you can treat it as a scenic passage even if you don't shop or eat inside.`,
        whatToSkip: `The shops inside are overwhelmingly touristy — generic trinkets, overpriced souvenirs, and the same dried meat you can find anywhere in China. Don't waste your money here. The hotpot restaurants inside are also overpriced and mediocre compared to the local joints you'll find on side streets. Eat elsewhere and come here for the architecture and the views.

The elevators get insanely crowded at night when the lights turn on. If you can handle stairs, take them — or just plan to arrive before 7 PM and wait it out from a balcony. The crowds on weekends are genuinely overwhelming; if you're visiting during peak season, go on a Tuesday or Wednesday evening when you'll actually be able to move.`,
        photographyTips: `The classic shot is from across the Jialing River — walk across the Qiansimen Bridge and shoot from the middle. You'll get the full building, the river, and the reflection all in one frame. Best light is about 20 minutes after the lights turn on, when the sky is still deep blue instead of completely black.

For a different angle, go down to the river level on the Hongya Cave side and shoot upward — you get the layered stilts climbing the cliff, which looks even more dramatic than the postcard view. Bring a tripod if you want sharp night shots; the area is dimly lit except for the building itself.

Inside, the narrow corridors and red lanterns on the lower floors make great detail shots. The contrast between the warm interior lighting and the dark cliff face outside is why photographers love this place.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want the Best Hongya Cave Photo Without the Crowds?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a private evening walking tour with a local guide who knows the hidden viewpoints, the best timing for the light show, and how to navigate the crowds.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Night Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Small group sizes</span>
              <span>✓ Local English-speaking guide</span>
              <span>✓ Hidden viewpoints included</span>
            </div>
          </div>
        </section>
      }
    />
  );
}
