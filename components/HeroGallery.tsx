'use client'

import { useState, useEffect, useCallback } from 'react'

export interface GalleryItem {
  src: string
  alt: string
  type?: 'image' | 'video'
  poster?: string // for video thumbnails
}

interface HeroGalleryProps {
  items: GalleryItem[]
}

export default function HeroGallery({ items }: HeroGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const selectedItem = items[selectedIdx]
  const lightboxItem = items[lightboxIdx]

  const openLightbox = useCallback((idx: number) => {
    setLightboxIdx(idx)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const goNext = useCallback(() => {
    setLightboxIdx((prev) => (prev + 1) % items.length)
  }, [items.length])

  const goPrev = useCallback(() => {
    setLightboxIdx((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  if (!items || items.length === 0) return null

  return (
    <div className="mb-6">
      {/* Main Image */}
      <div
        className="relative w-full rounded-xl overflow-hidden border border-[#ebe4d8] cursor-pointer group"
        onClick={() => openLightbox(selectedIdx)}
        role="button"
        tabIndex={0}
        aria-label="Open lightbox"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(selectedIdx) }}
      >
        {selectedItem.type === 'video' ? (
          <video
            src={selectedItem.src}
            poster={selectedItem.poster}
            className="w-full aspect-[16/9] object-cover"
            controls
            playsInline
          />
        ) : (
          <img
            src={selectedItem.src}
            alt={selectedItem.alt}
            className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        )}
        {/* Overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Click to expand
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              idx === selectedIdx
                ? 'border-[#af5d32] ring-1 ring-[#af5d32]'
                : 'border-transparent hover:border-[#ebe4d8]'
            }`}
            aria-label={`View ${item.alt}`}
          >
            {item.type === 'video' ? (
              <div className="relative">
                <img
                  src={item.poster || item.src}
                  alt={item.alt}
                  className="w-24 h-16 sm:w-28 sm:h-[4.5rem] object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-24 h-16 sm:w-28 sm:h-[4.5rem] object-cover"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && lightboxItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium">
            {lightboxIdx + 1} / {items.length}
          </div>

          {/* Previous Arrow */}
          {items.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Arrow */}
          {items.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Media */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === 'video' ? (
              <video
                src={lightboxItem.src}
                poster={lightboxItem.poster}
                className="max-w-full max-h-[85vh] rounded-lg"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
