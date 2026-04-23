import { Metadata } from 'next';
import Link from 'next/link';
import HeroGallery from '@/components/HeroGallery';
import type { GalleryItem } from '@/components/HeroGallery';
import ChineseWatermark from '@/components/ChineseWatermark';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'The Bund (外滩) - Option A | Shanghai\'s Historic Waterfront',
  description:
    'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
  openGraph: {
    title: 'The Bund (外滩) - Option A | Shanghai\'s Historic Waterfront',
    description:
      'Shanghai\'s iconic waterfront promenade with colonial-era buildings and the Pudong skyline. Free to visit, best at sunset.',
    url: 'https://trailofchina.com/destinations/shanghai/what-to-do/bund-option-a',
    type: 'website',
  },
};

const galleryItems: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/bund-day/1200/675', alt: 'The Bund waterfront during the day' },
  { src: 'https://picsum.photos/seed/bund-night/1200/675', alt: 'The Bund waterfront at night' },
  { src: 'https://picsum.photos/seed/bund-panorama/1200/675', alt: 'Panoramic view of the Bund' },
  { src: 'https://picsum.photos/seed/bund-river/1200/675', alt: 'The Bund and the Huangpu River' },
  { src: 'https://picsum.photos/seed/bund-sunset/1200/675', alt: 'The Bund at golden hour sunset' },
];

const relatedArticles = [
  { title: "Shanghai Tower", description: "China's tallest building and the world's second-tallest.", href: "/destinations/shanghai/what-to-do/shanghai-tower" },
  { title: "Yu Garden", description: "400-year-old classical Chinese garden in Shanghai's Old City.", href: "/destinations/shanghai/what-to-do/yu-garden" },
  { title: "French Concession", description: "Shanghai's most charming neighborhood of tree-lined streets.", href: "/destinations/shanghai/what-to-do/french-concession" },
  { title: "Shanghai Local Tips", description: "Practical tips for navigating Shanghai like a local.", href: "/destinations/shanghai/local-tips" },
  { title: "China Basics", description: "Essential tips for first-time visitors to China.", href: "/china-basics" },
  { title: "Where to Eat in Shanghai", description: "Discover Shanghai's best local dishes and restaurants.", href: "/destinations/shanghai/where-to-eat" },
];

const practicalDetails = {
  gettingThere: `Take Metro Line 2 to Nanjing East Road Station. Use Exit 2 and walk east — you'll hit the promenade in under 5 minutes. Start from the northern end (near the Monument to the People's Heroes) and walk south for the full 1.5 km experience.

For the Pudong side view, take the ferry from the Jinling East Road pier (¥2, runs 7 AM – 10 PM) or metro to Lujiazui Station (Line 2) and walk to the waterfront park. The ferry is faster and more fun — you cross the Huangpu in about 5 minutes with open-air views.`,
  whatToSkip: `The Bund Sightseeing Tunnel is a slow, overpriced light show in a underground tram. It connects the Bund to Pudong but costs around ¥50-70 one-way and adds nothing to your trip. Take the ferry instead — it's ¥2 and the views are real.

River cruises sound romantic but are consistently rated as overpriced and underwhelming. The promenade walk is free and the views are identical. If you want to be on the water, the public ferry is authentic and costs next to nothing.

Avoid Chinese national holidays (especially October 1–7) if you can. The Bund becomes a shoulder-to-shoulder crush, police close nearby roads, and you'll spend more time navigating crowds than enjoying the view.`,
  photographyTips: `The classic postcard shot is from the Pudong waterfront park, looking back at the Bund's colonial skyline. Go just after sunset when the building lights turn on — the warm gold facades against a deep blue sky is the money shot.

On the Bund side, the best spot is near the intersection with Nanjing Road, where the crowd thins slightly and you get a straight-on view of the Oriental Pearl Tower. Bring a tripod if you want clean night shots — the promenade lights create mixed color temperatures that are hard to handhold.

The Shanghai Tower observation deck (118th floor) is the highest viewpoint, but the view *of* the Bund is better from the ground on the Pudong side. For a different angle, walk the pedestrian bridge near the Shanghai IFC Mall — you get the river, the ferry traffic, and both skylines in one frame.`,
};

export default function BundOptionAPage() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
    }}>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Shanghai', href: '/destinations/shanghai' },
            { label: 'What to Do', href: '/destinations/shanghai/what-to-do' },
          ]} />
        </div>

        {/* Hero Section */}
        <header className="mb-8 relative">
          <ChineseWatermark character="外" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
            The Bund
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
            <span className="text-2xl">外滩</span>
            <span className="text-lg">• Shanghai</span>
          </div>
        </header>

        {/* Full-width Hero Gallery */}
        <HeroGallery items={galleryItems} />

        {/* Hook (italic, below gallery) */}
        <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-3xl mb-8">
          The Bund comes alive after 8 PM when Pudong's skyscrapers light up — come for sunset, stay for the show.
        </p>

        {/* Quick Info Bar */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border rounded-lg px-4 py-3">
            <span className="font-medium">Free</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Open 24h</span>
            <span className="text-[var(--muted)]">·</span>
            <span>Best after sunset</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--muted)]">Metro: Nanjing East Road (Line 2)</span>
          </div>
        </section>

        {/* Why You'll Love It */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-5 text-[var(--foreground)]">Why You'll Love It</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
            <p className="mb-4">
              Most tourists walk the Bund during the day and miss the real magic. After 8 PM, the Pudong skyline erupts in a synchronized light show that makes Times Square look understated. The colonial facades on the Bund side are floodlit in warm gold, and the river reflects it all like a mirror. You don't need to pay for anything — just walk the promenade.
            </p>
            <p className="mb-4">
              The best move? Start at Nanjing East Road metro, walk the Bund at golden hour, then hop the ¥2 ferry across the river to the Pudong side. From there, look back at the colonial buildings you just walked past — it's the single best view in Shanghai, and almost no one tells you to do this. The ferry runs until 10 PM, so you can do the round trip and catch the light show from both sides.
            </p>
            <p className="mb-4">
              Skip the overpriced river cruises and the Bund Sightseeing Tunnel — they're tourist traps. The promenade is free, open 24 hours, and the experience is better on foot. If you must splurge, grab a drink at one of the rooftop bars in the historic buildings and watch the river traffic below.
            </p>
          </div>
        </section>

        {/* Description / About */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">About The Bund</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
            <p className="mb-4">
              The Bund (外滩) is Shanghai's most famous landmark — a 1.5 km waterfront promenade along the Huangpu River, lined with 33 buildings in various colonial-era architectural styles. Built in the early 20th century, it was once the heart of Shanghai's International Settlement.
            </p>
            <p className="mb-4">
              The buildings were constructed between 1897 and 1937 by foreign banks and trading houses, representing styles from Neoclassical and Beaux-Arts to Art Deco. Each building has its own history, from the HSBC Building (now the Shanghai Pudong Development Bank) to the Astor House Hotel (now a restaurant).
            </p>
            <p className="mb-4">
              Opposite the Bund stands the modern Pudong skyline, including the 492-meter Shanghai Tower, the 468-meter Oriental Pearl Tower, and the 420-meter Jin Mao Tower. This dramatic contrast between old and new — European colonial past and Asian economic present — makes The Bund one of the world's most photographed locations.
            </p>
            <p className="mb-4">
              The area has evolved from a colonial enclave to a symbol of Shanghai's global ambitions, with luxury hotels, restaurants, and shopping replacing the old foreign firms. It remains free to walk and is the city's most popular photo spot.
            </p>
          </div>
        </section>

        {/* Practical Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Practical Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Getting There</h3>
              <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                <p className="mb-2">Take Metro Line 2 to Nanjing East Road Station. Use Exit 2 and walk east — you'll hit the promenade in under 5 minutes. Start from the northern end (near the Monument to the People's Heroes) and walk south for the full 1.5 km experience.</p>
                <p className="mb-2">For the Pudong side view, take the ferry from the Jinling East Road pier (¥2, runs 7 AM – 10 PM) or metro to Lujiazui Station (Line 2) and walk to the waterfront park. The ferry is faster and more fun — you cross the Huangpu in about 5 minutes with open-air views.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">What to Skip</h3>
              <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                <p className="mb-2">The Bund Sightseeing Tunnel is a slow, overpriced light show in a underground tram. It connects the Bund to Pudong but costs around ¥50-70 one-way and adds nothing to your trip. Take the ferry instead — it's ¥2 and the views are real.</p>
                <p className="mb-2">River cruises sound romantic but are consistently rated as overpriced and underwhelming. The promenade walk is free and the views are identical. If you want to be on the water, the public ferry is authentic and costs next to nothing.</p>
                <p className="mb-2">Avoid Chinese national holidays (especially October 1–7) if you can. The Bund becomes a shoulder-to-shoulder crush, police close nearby roads, and you'll spend more time navigating crowds than enjoying the view.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Photography Tips</h3>
              <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                <p className="mb-2">The classic postcard shot is from the Pudong waterfront park, looking back at the Bund's colonial skyline. Go just after sunset when the building lights turn on — the warm gold facades against a deep blue sky is the money shot.</p>
                <p className="mb-2">On the Bund side, the best spot is near the intersection with Nanjing Road, where the crowd thins slightly and you get a straight-on view of the Oriental Pearl Tower. Bring a tripod if you want clean night shots — the promenade lights create mixed color temperatures that are hard to handhold.</p>
                <p className="mb-2">The Shanghai Tower observation deck (118th floor) is the highest viewpoint, but the view *of* the Bund is better from the ground on the Pudong side. For a different angle, walk the pedestrian bridge near the Shanghai IFC Mall — you get the river, the ferry traffic, and both skylines in one frame.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Map */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Location</h2>
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
            <span className="text-[var(--foreground)] font-medium">Zhongshan East 1st Road, Huangpu District</span>
            <span className="text-[var(--muted)] hidden sm:inline">·</span>
            <span className="text-[var(--muted)]">上海市黄浦区中山东一路</span>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden border border-[var(--line)] shadow-sm">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=121.4826%2C31.2323%2C121.4926%2C31.2383&layer=mapnik&marker=31.2353%2C121.4876"
              title="The Bund Location"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Custom Big Tours CTA */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f2933] to-[#2d3748] text-white p-8 sm:p-12 text-center shadow-xl">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
                Want More Than the Standard Bund Experience?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Skip the tourist crowds. Book a private night walking tour with a local guide who knows the hidden viewpoints and the stories behind every building.
              </p>
              <a
                href="https://www.viator.com/searchResults/allText?text=Bund%20Shanghai%20night%20tour"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-[#af5d32] hover:bg-[#8f431c] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Book a Night Tour
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Or compare options on{' '}
                <a href="https://www.getyourguide.com/s/?q=Bund%20Shanghai%20night%20tour" target="_blank" rel="noopener noreferrer sponsored" className="text-gray-300 hover:text-white underline">GetYourGuide</a>
                {' '}and{' '}
                <a href="https://www.klook.com/search/?query=Bund%20Shanghai%20night%20tour" target="_blank" rel="noopener noreferrer sponsored" className="text-gray-300 hover:text-white underline">Klook</a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </main>
    </div>
  );
}
