import ChineseWatermark from './ChineseWatermark';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';
import ImageGallery from './ImageGallery';
import ToursCTA from './ToursCTA';
import TripAdvisorGallery from './TripAdvisorGallery';
import TableOfContents, { TOCItem } from './TableOfContents';
import React from 'react';

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

interface QuickInfo {
  price: string;
  hours: string;
  bestTime: string;
  metro: string;
}

interface PracticalDetails {
  gettingThere?: string;
  whatToSkip?: string;
  photographyTips?: string;
}

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
  /** 1-sentence hook displayed prominently below the title */
  hook?: string;
  /** Scannable info bar (price · hours · best time · metro). When provided, replaces the key-info grid. */
  quickInfo?: QuickInfo;
  /** Flowing prose for the "Why You'll Love It" section. When provided, rendered before the description. */
  whyYouLoveIt?: string;
  /** Practical details: getting there, what to skip, photography tips. Rendered as narrative sections. */
  practicalDetails?: PracticalDetails;
  /** Optional custom Tours CTA element. When provided, replaces the default ToursCTA. */
  customToursCTA?: React.ReactNode;
  /** Optional table of contents items */
  tocItems?: TOCItem[];
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
  hook,
  quickInfo,
  whyYouLoveIt,
  practicalDetails,
  customToursCTA,
  tocItems,
}: AttractionPageProps) {
  // Use magazine layout when we have images + rich content fields
  const useMagazineLayout = images && images.length > 0 && (hook || quickInfo || whyYouLoveIt);

  const mainContent = (
    <main className={tocItems && tocItems.length > 0 ? "md:col-span-3" : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"}>
      {/* Mobile TOC */}
      {tocItems && tocItems.length > 0 && (
        <div className="md:hidden mb-6">
          <TableOfContents items={tocItems} />
        </div>
      )}

      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb items={breadcrumbs || []} />
      </div>

      {/* Hero Section */}
      <header className="mb-8 relative">
        <ChineseWatermark character={nameZh[0] || '中'} />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 text-[var(--foreground)] relative z-10">
          {name}
        </h1>
        {/* Hook in hero only for legacy layout */}
        {!useMagazineLayout && hook && (
          <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed max-w-3xl relative z-10">
            {hook}
          </p>
        )}
        <div className="flex items-center gap-2 text-[var(--muted)] mt-3 relative z-10">
          <span className="text-2xl">{nameZh}</span>
          <span className="text-lg">• {city}</span>
        </div>
      </header>

      {useMagazineLayout ? (
        <>
          {/* MAGAZINE LAYOUT: Mobile = gallery on top, text below */}
          <div className="flex flex-col md:grid md:grid-cols-5 md:gap-10 mb-12">
            {/* LEFT COLUMN: Text (60% on desktop) */}
            <div className="md:col-span-3 order-2 md:order-1 flex flex-col gap-6">
              {/* Hook */}
              {hook && (
                <p className="text-lg sm:text-xl text-[var(--muted)] italic leading-relaxed">
                  {hook}
                </p>
              )}

              {/* Quick Info Bar */}
              {quickInfo && (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border rounded-lg px-4 py-3">
                  <span className="font-medium">{quickInfo.price}</span>
                  <span className="text-[var(--muted)]">·</span>
                  <span>{quickInfo.hours}</span>
                  <span className="text-[var(--muted)]">·</span>
                  <span>{quickInfo.bestTime}</span>
                  <span className="text-[var(--muted)]">·</span>
                  <span className="text-[var(--muted)]">Metro: {quickInfo.metro}</span>
                </div>
              )}

              {/* Why You'll Love It */}
              {whyYouLoveIt && (
                <div>
                  <h2 id="why-youll-love-it" className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Why You&apos;ll Love It</h2>
                  <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
                    {whyYouLoveIt.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Gallery (40% on desktop) */}
            <div className="md:col-span-2 order-1 md:order-2 mb-6 md:mb-0">
              <TripAdvisorGallery items={images} />
            </div>
          </div>

          {/* About — full width, same as Practical Details */}
          <section className="mb-10">
            <h2 id="about" className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">About {name}</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
              {description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Practical Details */}
          {practicalDetails && (
            <section className="mb-10">
              <h2 id="practical-details" className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Practical Details</h2>
              <div className="space-y-6">
                {practicalDetails.gettingThere && (
                  <div>
                    <h3 id="getting-there" className="text-lg font-semibold mb-2 text-[var(--foreground)]">Getting There</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.gettingThere.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                {practicalDetails.whatToSkip && (
                  <div>
                    <h3 id="what-to-skip" className="text-lg font-semibold mb-2 text-[var(--foreground)]">What to Skip</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.whatToSkip.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                {practicalDetails.photographyTips && (
                  <div>
                    <h3 id="photography-tips" className="text-lg font-semibold mb-2 text-[var(--foreground)]">Photography Tips</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.photographyTips.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Key Info Grid */}
          <section className="mb-10">
            <h2 id="essential-info" className="text-xl font-semibold mb-4 text-[var(--foreground)]">Essential Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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

          {/* Map */}
          <section className="mb-10">
            <h2 id="location" className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Location</h2>
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

          {/* Tours CTA (magazine layout) */}
          {customToursCTA ? customToursCTA : <ToursCTA city={city} attraction={name} />}

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <RelatedArticles articles={relatedArticles} />
          )}
        </>
      ) : (
        <>
          {/* LEGACY LAYOUT */}
          {/* Quick Info Bar */}
          {quickInfo ? (
            <section className="mb-10">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--foreground)] bg-[var(--surface)] border rounded-lg px-4 py-3">
                <span className="font-medium">{quickInfo.price}</span>
                <span className="text-[var(--muted)]">·</span>
                <span>{quickInfo.hours}</span>
                <span className="text-[var(--muted)]">·</span>
                <span>{quickInfo.bestTime}</span>
                <span className="text-[var(--muted)]">·</span>
                <span className="text-[var(--muted)]">Metro: {quickInfo.metro}</span>
              </div>
            </section>
          ) : (
            /* Legacy Key Info Grid */
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
          )}

          {/* Why You'll Love It */}
          {whyYouLoveIt && (
            <section className="mb-10">
              <h2 id="why-youll-love-it" className="text-2xl font-serif font-bold mb-5 text-[var(--foreground)]">Why You&apos;ll Love It</h2>
              <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
                {whyYouLoveIt.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Description */}
          <section className="mb-10">
            <h2 id="about" className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">About {name}</h2>
            <div className="prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed">
              {description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <ImageGallery images={images || []} />

          {/* Practical Details */}
          {practicalDetails && (
            <section className="mb-10">
              <h2 id="practical-details" className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Practical Details</h2>
              <div className="space-y-6">
                {practicalDetails.gettingThere && (
                  <div>
                    <h3 id="getting-there" className="text-lg font-semibold mb-2 text-[var(--foreground)]">Getting There</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.gettingThere.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                {practicalDetails.whatToSkip && (
                  <div>
                    <h3 id="what-to-skip" className="text-lg font-semibold mb-2 text-[var(--foreground)]">What to Skip</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.whatToSkip.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                {practicalDetails.photographyTips && (
                  <div>
                    <h3 id="photography-tips" className="text-lg font-semibold mb-2 text-[var(--foreground)]">Photography Tips</h3>
                    <div className="prose max-w-none text-[var(--foreground)] leading-relaxed">
                      {practicalDetails.photographyTips.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Know Before You Go */}
          {!practicalDetails && (
            <section className="mb-10">
              <h2 id="know-before-you-go" className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">Know Before You Go</h2>
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
          )}

          {/* Map */}
          <section className="mb-10">
            <h2 id="location" className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Location</h2>
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

          {/* Tours CTA (legacy layout) */}
          {customToursCTA ? customToursCTA : <ToursCTA city={city} attraction={name} />}

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <RelatedArticles articles={relatedArticles} />
          )}
        </>
      )}
    </main>
  );

  if (tocItems && tocItems.length > 0) {
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="md:grid md:grid-cols-4 md:gap-8">
            {mainContent}
            <aside className="md:col-span-1">
              <TableOfContents items={tocItems} className="mt-4" />
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
    }}>
      {mainContent}
    </div>
  );
}
