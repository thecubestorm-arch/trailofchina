'use client';

import { useState, useCallback, useEffect } from 'react';

export interface GalleryItem {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string;
}

interface AirbnbGalleryProps {
  items: GalleryItem[];
}

export default function AirbnbGallery({ items }: AirbnbGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIdx((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setLightboxIdx((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, goNext, goPrev, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  if (!items || items.length === 0) return null;

  const mainItem = items[0];
  const bottomLeft = items[1];
  const bottomRight = items[2];
  const currentLightboxItem = items[lightboxIdx];

  return (
    <>
      <div className="flex flex-col gap-3 h-full">
        {/* Main photo — large, fills width, ~65% height feel via aspect ratio */}
        <div
          className="relative rounded-xl overflow-hidden border border-[#ebe4d8] cursor-pointer group flex-shrink-0"
          onClick={() => openLightbox(0)}
        >
          <div className="aspect-[4/3]">
            {mainItem.type === 'video' ? (
              <video
                src={mainItem.src}
                poster={mainItem.poster}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={mainItem.src}
                alt={mainItem.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

          {/* "View all photos" button */}
          <button
            onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[var(--foreground)] text-sm font-medium px-3 py-1.5 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            View all photos
          </button>
        </div>

        {/* Bottom row — 2 photos, asymmetric */}
        <div className="grid grid-cols-5 gap-3 flex-shrink-0">
          {bottomLeft && (
            <div
              className="col-span-3 relative rounded-xl overflow-hidden border border-[#ebe4d8] cursor-pointer group"
              onClick={() => openLightbox(1)}
            >
              <div className="aspect-[4/3]">
                {bottomLeft.type === 'video' ? (
                  <video
                    src={bottomLeft.src}
                    poster={bottomLeft.poster}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={bottomLeft.src}
                    alt={bottomLeft.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          )}
          {bottomRight && (
            <div
              className="col-span-2 relative rounded-xl overflow-hidden border border-[#ebe4d8] cursor-pointer group"
              onClick={() => openLightbox(2)}
            >
              <div className="aspect-[4/3]">
                {bottomRight.type === 'video' ? (
                  <video
                    src={bottomRight.src}
                    poster={bottomRight.poster}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={bottomRight.src}
                    alt={bottomRight.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image / Video */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {currentLightboxItem.type === 'video' ? (
              <video
                src={currentLightboxItem.src}
                poster={currentLightboxItem.poster}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              />
            ) : (
              <img
                src={currentLightboxItem.src}
                alt={currentLightboxItem.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {lightboxIdx + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
