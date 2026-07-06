import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Lama Temple (雍和宫) Beijing | History, Hours & Visitor Tips',
  description:
    'Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.',
  openGraph: {
    title: 'Lama Temple (雍和宫) Beijing | History, Hours & Visitor Tips',
    description:
      'Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.',
    url: 'https://www.trailofchina.com/destinations/beijing/what-to-do/lama-temple',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'Lama Temple (雍和宫) Beijing | History, Hours & Visitor Tips - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('Lama Temple private tour Beijing');

export default function LamaTemplePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Come at opening for monk chanting — the spiritual morning ritual',
    },
    {
      type: 'tip',
      text: 'The Maitreya Buddha is in Wanfu Pavilion — the 18-meter statue carved from single sandalwood tree',
    },
    {
      type: 'tip',
      text: 'Free incense at entrance — participate in the ritual',
    },
    {
      type: 'tip',
      text: 'Dress respectfully — shoulders and knees covered',
    },
    {
      type: 'tip',
      text: 'Combine with Confucius Temple next door — same entrance, same ticket',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Red walls and golden roofs — the iconic Lama Temple aesthetic',
    },
    {
      type: 'photo',
      text: 'Incense smoke at morning light — the spiritual atmosphere',
    },
    {
      type: 'photo',
      text: 'Prayer wheels — outside Wanfu Pavilion only (no photos inside)',
    },
  ] as const

  return (
    <AttractionPage
      name="Lama Temple"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="雍和宫"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/lama-temple-gate/800/600', alt: 'Lama Temple entrance gate' },
        { src: 'https://picsum.photos/seed/lama-temple-incense/800/600', alt: 'Incense smoke rising at Lama Temple' },
        { src: 'https://picsum.photos/seed/lama-temple-roof/800/600', alt: 'Golden roofs of Lama Temple' },
        { src: 'https://picsum.photos/seed/lama-temple-hall/800/600', alt: 'Main hall at Lama Temple' },
        { src: 'https://picsum.photos/seed/lama-temple-wheels/800/600', alt: 'Tibetan prayer wheels at Lama Temple' },
      ]}
      hook="A Tibetan Buddhist temple with a 26-meter Buddha carved from a single sandalwood tree."
      quickInfo={{
        price: '¥25',
        hours: '9:00–16:30',
        bestTime: 'Morning, weekdays',
        metro: 'Yonghegong (Line 2/5)',
      }}
      whyYouLoveIt={`The first thing that hits you is the smell. Sandalwood incense in thick coils hangs in the air before you even pass through the gate, and by the time you reach the main courtyard, it's worked its way into your clothes. This isn't a museum with incense added for atmosphere — this is a working monastery where monks still chant, pray, and live. The fact that it exists in central Beijing, surrounded by apartment blocks and metro lines, makes it feel like a portal to somewhere else entirely.

The 26-meter Maitreya Buddha in Wanfu Pavilion is the reason most people come, and it's worth the price of admission alone. Carved from a single sandalwood tree, it rises through three floors of the pavilion, and the scale doesn't compute until you're standing at its feet. The craftsmanship is staggering — facial expressions, hand gestures, the folds of robes, all from one trunk. But what stays with me is the sound of monks chanting in the hall below it. The acoustics of the old wooden building make the voices resonate in a way that feels intentional, even if it wasn't.

Outside the main halls, the prayer wheels line the paths — rows of copper cylinders engraved with sutras, spinning as people walk past. Spin one and you're supposed to be sending a prayer into the world. Whether or not you believe it, there's something meditative about the physical act, the weight of the wheel, the soft metallic clink as it turns.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 2 or Line 5 to Yonghegong Station. Use Exit F and walk east — the temple entrance is directly across the street, impossible to miss with its red walls and golden roofs. The station name literally means "Lama Temple," so you can't go wrong.

The Confucius Temple is next door to the west and shares the same ticket. Exit Lama Temple through the west gate and walk 2 minutes to combine both sites in a single morning.`,
        whatToSkip: `Skip the tourist shops lining the street outside the temple entrance. They sell the same incense, prayer beads, and "lucky" trinkets at inflated prices. If you want to participate in the incense ritual, grab the free sticks offered at the temple entrance instead.

The tea houses nearby are mostly tourist-oriented with overpriced menus. For better value, walk 10 minutes south to Guijie (Ghost Street) after your visit for some of Beijing's best local restaurants.`,
        photographyTips: `No photos are allowed inside the main halls, including Wanfu Pavilion where the giant Buddha sits. This rule is enforced, so don't try to sneak shots. Instead, focus on the exterior — the red walls, golden tile roofs, and incense smoke create a color palette that's unmistakably Tibetan Buddhist.

The best exterior shots are in the side courtyards, away from the central axis where crowds concentrate. Morning light from the east illuminates the golden roof decorations beautifully between 9:00 and 10:30 AM. The prayer wheels near the western path make for intimate, detail-focused compositions.`,
      }}
      description={`Largest Tibetan Buddhist temple outside Tibet. Red walls, golden roofs, thick incense. The 18-meter Maitreya Buddha carved from single sandalwood tree. Visit early morning when monks chant.`}
      hours="9:00-16:30"
      price="¥25"
      nearestSubway="Yonghegong, Lines 2/5"
      bestTime="Early morning (9:00-10:30) for monk chanting"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.4060%2C39.9426%2C116.4160%2C39.9486&layer=mapnik&marker=39.9456%2C116.4110"
      address="12 Yonghegong Street, Dongcheng District"
      addressZh="北京市东城区雍和宫大街12号"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Temple of Heaven", description: "Explore Temple of Heaven, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Bell and Drum Towers", description: "Explore Bell and Drum Towers, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/bell-and-drum-towers" },
        { title: "Hutong Tours", description: "Explore Hutong Tours, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/hutong" },
        { title: "Beijing Local Tips", description: "Practical tips for navigating Beijing like a local.", href: "/destinations/beijing/local-tips" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than a Quick Temple Visit?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Understand what you are seeing. Book a guided tour that includes Buddhist ceremonies, the story of the sandalwood Buddha, and incense ritual participation.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Guided Visit →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Buddhist ceremony access</span>
              <span>✓ Sandalwood Buddha story</span>
              <span>✓ Incense ritual participation</span>
            </div>
          </div>
        </section>
      }
    />
  );
}