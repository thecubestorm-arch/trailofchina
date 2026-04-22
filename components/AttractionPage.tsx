import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from './ChineseWatermark';

type Tip = {
  type: 'tip' | 'scam' | 'photo';
  text: string;
};

type RelatedLink = {
  title: string;
  href: string;
};

interface AttractionPageProps {
  name: string;
  nameZh: string;
  description: string;
  hours: string;
  price: string;
  nearestSubway: string;
  bestTime: string;
  tips: readonly { type: 'tip' | 'scam' | 'photo'; text: string }[];
  mapUrl: string;
  relatedLinks: readonly { title: string; href: string }[];
  city: string;
}

export default function AttractionPage({
  name,
  nameZh,
  description,
  hours,
  price,
  nearestSubway,
  bestTime,
  tips,
  mapUrl,
  relatedLinks,
  city,
}: AttractionPageProps) {
  const tipCount = (tips as Tip[]).filter((t) => t.type === 'tip').length;
  const scamCount = (tips as Tip[]).filter((t) => t.type === 'scam').length;
  const photoCount = (tips as Tip[]).filter((t) => t.type === 'photo').length;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <header className="mb-10 relative">
          <ChineseWatermark character={nameZh[0] || '中'} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-[var(--foreground)] relative z-10">
            {name}
          </h1>
          <div className="flex items-center gap-2 text-[var(--muted)] mt-2">
            <span className="text-2xl">{nameZh}</span>
            <span className="text-lg">• {city}</span>
          </div>
        </header>

        {/* Key Info Bar */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">Essential Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 bg-[var(--surface)]">
              <span className="text-[var(--muted)] text-sm block mb-1">🕒 Opening Hours</span>
              <span className="font-medium text-[var(--foreground)]">{hours}</span>
            </div>
            <div className="border rounded-lg p-4 bg-[var(--surface)]">
              <span className="text-[var(--muted)] text-sm block mb-1">💰 Admission</span>
              <span className="font-medium text-[var(--foreground)]">{price}</span>
            </div>
            <div className="border rounded-lg p-4 bg-[var(--surface)]">
              <span className="text-[var(--muted)] text-sm block mb-1">🚇 Nearest Subway</span>
              <span className="font-medium text-[var(--foreground)]">{nearestSubway}</span>
            </div>
            <div className="border rounded-lg p-4 bg-[var(--surface)]">
              <span className="text-[var(--muted)] text-sm block mb-1">🌞 Best Time to Visit</span>
              <span className="font-medium text-[var(--foreground)]">{bestTime}</span>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">About {name}</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
            {description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Practical Tips</h2>
          
          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tips.filter((t) => t.type === 'tip').length > 0 && (
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Helpful Tips
                </h3>
                <div className="space-y-3">
                  {tips
                    .filter((t) => t.type === 'tip')
                    .map((tip, idx) => (
                      <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                        <span className="text-amber-900">{tip.text}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Scam Alerts */}
          {scamCount > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Avoid These Scams
              </h3>
              <div className="space-y-2">
                {tips
                  .filter((t) => t.type === 'scam')
                  .map((tip, idx) => (
                    <div key={idx} className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4 rounded-r">
                      <span className="text-[var(--foreground)] font-medium">{tip.text}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Best Photo Spots */}
          {photoCount > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📷</span> Best Photo Spots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips
                  .filter((t) => t.type === 'photo')
                  .map((tip, idx) => (
                    <div key={idx} className="bg-[var(--background-strong)] border border-[var(--line)] p-4 rounded-lg">
                      <span className="text-[var(--foreground)]">{tip.text}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </section>

        {/* Map */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Location</h2>
          <div className="aspect-video rounded-lg overflow-hidden border border-[var(--line)] shadow-sm">
            <iframe
              src={mapUrl}
              title={`${name} Location`}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Related Links */}
        {relatedLinks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Explore More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block p-4 border border-[var(--line)] rounded-lg hover:border-[var(--primary)] hover:shadow-sm transition-all bg-[var(--background)] hover:bg-[var(--accent-soft)]"
                >
                  <span className="text-[var(--primary)] font-medium block mb-1">{link.title}</span>
                  <span className="text-[var(--muted)] text-sm">Click to view details</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
