import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

export const metadata: Metadata = {
  title: 'Summer Palace (颐和园) Beijing | Tickets, Hours & Walking Routes',
  description:
    'Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.',
  openGraph: {
    title: 'Summer Palace (颐和园) Beijing | Tickets, Hours & Walking Routes',
    description:
      'Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.',
    url: 'https://trailofchina.com/destinations/beijing/what-to-do/summer-palace',
    type: 'website',
  },
};

const searchQuery = encodeURIComponent('Summer Palace private tour Beijing');

export default function SummerPalacePage() {
  const tips = [
    {
      type: 'tip',
      text: 'Enter from East Gate for classic route through the park',
    },
    {
      type: 'tip',
      text: 'Long Corridor has 14,000 painted beams — take your time walking through it',
    },
    {
      type: 'tip',
      text: 'Suzhou Street is charming — think "Forbidden City for commoners"',
    },
    {
      type: 'tip',
      text: 'Marble Boat is smaller than expected — it\'s a symbolic monument, not an actual boat',
    },
    {
      type: 'tip',
      text: 'Budget 3-4 hours — the park is enormous with Kunming Lake and Longevity Hill',
    },
  ] as const

  const photoSpots = [
    {
      type: 'photo',
      text: 'Long Corridor — capture the colorful paintings from within the corridor',
    },
    {
      type: 'photo',
      text: 'Marble Boat — the iconic symbol of Cixi\'s extravagance on Kunming Lake',
    },
    {
      type: 'photo',
      text: 'Kunming Lake from Longevity Hill — the classic panoramic view',
    },
    {
      type: 'photo',
      text: 'Seventeen-Arch Bridge at sunset — the bridge and islands illuminated',
    },
  ] as const

  return (
    <AttractionPage
      name="Summer Palace"
      breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Beijing', href: '/destinations/beijing' },
      { label: 'What to Do', href: '/destinations/beijing/what-to-do' },
    ]}
      nameZh="颐和园"
      city="Beijing"
      images={[
        { src: 'https://picsum.photos/seed/summer-palace-lake/800/600', alt: 'Kunming Lake at Summer Palace' },
        { src: 'https://picsum.photos/seed/summer-palace-corridor/800/600', alt: 'Long Corridor with painted beams at Summer Palace' },
        { src: 'https://picsum.photos/seed/summer-palace-marble-boat/800/600', alt: 'Marble Boat on Kunming Lake' },
        { src: 'https://picsum.photos/seed/summer-palace-pavilion/800/600', alt: 'Traditional pavilion at Summer Palace' },
        { src: 'https://picsum.photos/seed/summer-palace-sunset/800/600', alt: 'Sunset over Kunming Lake at Summer Palace' },
      ]}
      hook="The emperor's summer escape — a lake, a marble boat, and pavilions for a full day."
      quickInfo={{
        price: '¥30–60',
        hours: '6:30–18:00',
        bestTime: 'Late afternoon',
        metro: 'Beigongmen (Line 4)',
      }}
      whyYouLoveIt={`The Summer Palace is where you go when the Forbidden City starts feeling heavy. Emperors came here to escape the formality of court life, and you can feel why the moment you step into the Long Corridor. It's a 728-meter covered walkway — the longest in any classical Chinese garden — with over 14,000 individually painted beams depicting battles, legends, and landscapes. Most visitors rush through it on their way to the Marble Boat. Walk it slowly. Each painting is a story, and the repetition of red pillars against Kunming Lake creates a rhythm that calms something in your brain.

The view from Longevity Hill is the money shot. Climb the stone stairs to the Buddhist Fragrance Pavilion and look out over the lake — the Seventeen-Arch Bridge connects to South Lake Island, rowboats drift below, and the western hills frame everything in blue. On a clear day, it looks like a painting because it was designed to look like a painting. This was the imperial idea of paradise.

The Marble Boat is smaller than you expect, but its history is the point. Empress Dowager Cixi redirected naval funds to rebuild this pleasure garden, and the boat became the symbol of her extravagance. The fact that it's made of stone — and therefore can't float — somehow makes the whole thing more perfect.`}
      practicalDetails={{
        gettingThere: `Take Metro Line 4 to Beigongmen Station (North Palace Gate). Use Exit D and walk south — you'll enter through the north gate directly into the hill area, which is ideal if you want to start with the climb to the Buddhist Fragrance Pavilion.

Alternatively, take Line 4 to Xiyuan Station and enter from the east gate for a flatter, more gradual route through the Long Corridor first.`,
        whatToSkip: `The boat rides on Kunming Lake look romantic but are overpriced for what they are — a slow loop around the same view you can see from the shore for free. The electric boats especially feel like a theme park ride. If you want to be on the water, rent a pedal boat near the east gate instead — it's cheaper and more fun.

The tourist shops near the Marble Boat sell the same souvenirs you'll find everywhere in Beijing at inflated prices. Skip them and spend the time walking the western shore paths, which most tour groups ignore entirely.`,
        photographyTips: `Sunset over Kunming Lake is the single best photo opportunity in the entire park. Position yourself on the eastern shore, near the Seventeen-Arch Bridge, about 45 minutes before sunset. The low light turns the lake surface into a mirror and the western hills go amber and gold.

For the Long Corridor, shoot from within the covered walkway looking toward the lake — the repeating pillars create natural leading lines that draw the eye to the water and Longevity Hill beyond. Morning light from the east side illuminates the painted beams better than harsh midday sun.`,
      }}
      description={`Imperial retreat with Kunming Lake, Longevity Hill, Long Corridor (728m of painted beams). Marble Boat symbol of Cixi\'s extravagance. Rent a rowboat in summer. UNESCO World Heritage Site.`}
      hours="6:00-18:00 (Nov-Mar to 17:00)"
      price="¥30 (park), ¥60 (all-inclusive)"
      nearestSubway="Beigongmen, Line 4"
      bestTime="Morning (8:00-11:00) or late afternoon"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=116.2597%2C39.9871%2C116.2697%2C39.9931&layer=mapnik&marker=39.9901%2C116.2647"
      address="19 Xinjiangongmen Road, Haidian District"
      addressZh="北京市海淀区新建宫门路19号"
      
      relatedLinks={[]}
      relatedArticles={[
        { title: "Temple of Heaven", description: "Explore Temple of Heaven, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/temple-of-heaven" },
        { title: "Forbidden City", description: "Explore Forbidden City, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/forbidden-city" },
        { title: "Lama Temple", description: "Explore Lama Temple, one of Beijing's top attractions.", href: "/destinations/beijing/what-to-do/lama-temple" },
        { title: "Where to Eat in Beijing", description: "Discover Beijing's best local dishes and restaurants.", href: "/destinations/beijing/where-to-eat" },
        { title: "Beijing Guide", description: "Complete guide to planning your Beijing trip.", href: "/destinations/beijing" },
      ]}
      tips={[...tips, ...photoSpots]}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want to Actually Understand the Summer Palace?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Go beyond the pretty gardens. Book a private tour that uncovers imperial stories, includes a boat ride on Kunming Lake, and explains the garden symbolism.
            </p>
            <a
              href={`https://www.viator.com/searchResults/allText?text=${searchQuery}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              Book a Private Tour →
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span>✓ Imperial stories & scandals</span>
              <span>✓ Boat ride on Kunming Lake</span>
              <span>✓ Garden symbolism decoded</span>
            </div>
          </div>
        </section>
      }
    />
  );
}