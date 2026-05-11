import { Metadata } from 'next';
import Link from 'next/link';
import AttractionPage from '@/components/AttractionPage';

export const metadata: Metadata = {
  title: 'The Bund (外滩) - Shanghai\'s Historic Waterfront',
  description:
    'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
  openGraph: {
    title: 'The Bund (外滩) - Shanghai\'s Historic Waterfront',
    description:
      'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
    url: 'https://www.trailofchina.com/destinations/shanghai/what-to-do/bund',
    type: 'website',
    images: [{ url: 'https://www.trailofchina.com/og-default.jpg', width: 1200, height: 630, alt: 'The Bund (外滩) - Shanghai\ - Trail of China' }],
  },
};

const searchQuery = encodeURIComponent('The Bund Shanghai');

export default function BundPage() {
  return (
    <AttractionPage
      name="The Bund"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Shanghai', href: '/destinations/shanghai' },
        { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
      ]}
      nameZh="外滩"
      city="Shanghai"
      images={[
        { src: 'https://picsum.photos/seed/bund-day/800/600', alt: 'The Bund during the day' },
        { src: 'https://picsum.photos/seed/bund-night/800/600', alt: 'The Bund at night with illuminated skyline' },
        { src: 'https://picsum.photos/seed/bund-panorama/800/600', alt: 'Panoramic view of The Bund' },
        { src: 'https://picsum.photos/seed/bund-river/800/600', alt: 'Huangpu River view from The Bund' },
        { src: 'https://picsum.photos/seed/bund-sunset/800/600', alt: 'Sunset over The Bund' },
      ]}
      hook="The Bund comes alive after 8 PM when Pudong's skyscrapers light up — come for sunset, stay for the show."
      quickInfo={{
        price: 'Free',
        hours: 'Open 24h',
        bestTime: 'Best after sunset',
        metro: 'Nanjing East Road (Line 2)',
      }}
      whyYouLoveIt={`Most tourists walk the Bund during the day and miss the real magic. After 8 PM, the Pudong skyline erupts in a synchronized light show that makes Times Square look understated. The colonial facades on the Bund side are floodlit in warm gold, and the river reflects it all like a mirror. You don't need to pay for anything — just walk the promenade.

The best move? Start at Nanjing East Road metro, walk the Bund at golden hour, then hop the ¥2 ferry across the river to the Pudong side. From there, look back at the colonial buildings you just walked past — it's the single best view in Shanghai, and almost no one tells you to do this. The ferry runs until 10 PM, so you can do the round trip and catch the light show from both sides.

Skip the overpriced river cruises and the Bund Sightseeing Tunnel — they're tourist traps. The promenade is free, open 24 hours, and the experience is better on foot. If you must splurge, grab a drink at one of the rooftop bars in the historic buildings and watch the river traffic below.`}
      description={`The Bund (外滩) is Shanghai's most famous landmark — a 1.5 km waterfront promenade along the Huangpu River, lined with 33 buildings in various colonial-era architectural styles. Built in the early 20th century, it was once the heart of Shanghai's International Settlement.

The buildings were constructed between 1897 and 1937 by foreign banks and trading houses, representing styles from Neoclassical and Beaux-Arts to Art Deco. Each building has its own history, from the HSBC Building (now the Shanghai Pudong Development Bank) to the Astor House Hotel (now a restaurant).

Opposite the Bund stands the modern Pudong skyline, including the 492-meter Shanghai Tower, the 468-meter Oriental Pearl Tower, and the 420-meter Jin Mao Tower. This dramatic contrast between old and new — European colonial past and Asian economic present — makes The Bund one of the world's most photographed locations.

The area has evolved from a colonial enclave to a symbol of Shanghai's global ambitions, with luxury hotels, restaurants, and shopping replacing the old foreign firms. It remains free to walk and is the city's most popular photo spot.`}
      hours="24 hours (best during golden hour and nighttime)"
      price="Free"
      nearestSubway="Nanjing East Road Station, Line 2/10"
      bestTime="Golden hour (30 minutes before sunset) and nighttime for the skyline lights"
      mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=121.4826%2C31.2323%2C121.4926%2C31.2383&layer=mapnik&marker=31.2353%2C121.4876"
      address="Zhongshan East 1st Road, Huangpu District"
      addressZh="上海市黄浦区中山东一路"
      relatedLinks={[]}
      relatedArticles={[
        { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
        { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
        { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
        { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
        { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
        { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
      ]}
      tips={[]}
      practicalDetails={{
        gettingThere: `Take Metro Line 2 to Nanjing East Road Station. Use Exit 2 and walk east — you'll hit the promenade in under 5 minutes. Start from the northern end (near the Monument to the People's Heroes) and walk south for the full 1.5 km experience.

For the Pudong side view, take the ferry from the Jinling East Road pier (¥2, runs 7 AM – 10 PM) or metro to Lujiazui Station (Line 2) and walk to the waterfront park. The ferry is faster and more fun — you cross the Huangpu in about 5 minutes with open-air views.`,
        whatToSkip: `The Bund Sightseeing Tunnel is a slow, overpriced light show in a underground tram. It connects the Bund to Pudong but costs around ¥50-70 one-way and adds nothing to your trip. Take the ferry instead — it's ¥2 and the views are real.

River cruises sound romantic but are consistently rated as overpriced and underwhelming. The promenade walk is free and the views are identical. If you want to be on the water, the public ferry is authentic and costs next to nothing.

Avoid Chinese national holidays (especially October 1–7) if you can. The Bund becomes a shoulder-to-shoulder crush, police close nearby roads, and you'll spend more time navigating crowds than enjoying the view.`,
        photographyTips: `The classic postcard shot is from the Pudong waterfront park, looking back at the Bund's colonial skyline. Go just after sunset when the building lights turn on — the warm gold facades against a deep blue sky is the money shot.

On the Bund side, the best spot is near the intersection with Nanjing Road, where the crowd thins slightly and you get a straight-on view of the Oriental Pearl Tower. Bring a tripod if you want clean night shots — the promenade lights create mixed color temperatures that are hard to handhold.

The Shanghai Tower observation deck (118th floor) is the highest viewpoint, but the view *of* the Bund is better from the ground on the Pudong side. For a different angle, walk the pedestrian bridge near the Shanghai IFC Mall — you get the river, the ferry traffic, and both skylines in one frame.`,
      }}
      customToursCTA={
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              Want More Than the Standard Bund Experience?
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              Skip the tourist crowds. Book a private night walking tour with a local guide who knows the hidden viewpoints and the stories behind every building.
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
