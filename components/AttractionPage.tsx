import { Metadata } from 'next';
import Link from 'next/link';
import ChineseWatermark from './ChineseWatermark';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';
import ImageGallery from './ImageGallery';
import ToursCTA from './ToursCTA';

type Tip = {
  type: 'tip' | 'photo';
  text: string;
};

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
}

type RelatedLink = {
  title: string;
  href: string;
};

interface AttractionPageProps {
  breadcrumbs?: readonly { label: string; href?: string }[];
  name: string;
  nameZh: string;
  description: string;
  hours: string;
  price: string;
  nearestSubway: string;
  bestTime: string;
  tips: readonly { type: 'tip' | 'photo'; text: string }[];
  address?: string;
  addressZh?: string;
  mapUrl: string;
  relatedLinks: readonly { title: string; href: string }[];
  relatedArticles?: RelatedArticle[];
  city: string;
  images?: { src: string; alt: string }[];
}

export default function AttractionPage({
  breadcrumbs,
  name,
  nameZh,
  description,
  hours,
  price,
  nearestSubway,
  bestTime,
  tips,
  address,
  addressZh,
  mapUrl,
  relatedLinks,
  relatedArticles,
  city,
  images,
}: AttractionPageProps) {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
    }}>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbs || []} />
        </div>

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

        <ImageGallery images={images || []} />

        {/* Know Before You Go */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Know Before You Go</h2>
          <div className="space-y-4">
            {tips.filter((t) => t.type === 'tip').map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-terracotta mt-0.5 text-lg">•</span>
                <p className="text-[var(--foreground)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
            {tips.filter((t) => t.type === 'photo').map((tip, idx) => (
              <div key={`photo-${idx}`} className="flex items-start gap-3">
                <span className="mt-0.5">📷</span>
                <p className="text-[var(--foreground)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Map */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Location</h2>
          {(address || addressZh) && (
            <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
              {address && (
                <span className="text-[var(--foreground)] font-medium">{address}</span>
              )}
              {address && addressZh && (
                <span className="text-[var(--muted)] hidden sm:inline">·</span>
              )}
              {addressZh && (
                <span className="text-[var(--muted)]">{addressZh}</span>
              )}
            </div>
          )}
          <div className="aspect-video rounded-lg overflow-hidden border border-[var(--line)] shadow-sm">
            <iframe
              src={mapUrl}
              title={`${name} Location`}
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
              className="w-full h-full"
            />
          </div>
        </section>


        {/* Tours CTA */}
        <ToursCTA city={city} attraction={name} />

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}

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
