'use client'

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Photos</h2>
      <div className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 md:grid md:grid-cols-3 md:overflow-visible">
        {images.map((image, idx) => (
          <div key={idx} className="min-w-[260px] max-w-[85vw] snap-start overflow-hidden rounded-xl border border-[#ebe4d8] transition-transform hover:scale-[1.02] md:min-w-0 md:max-w-none">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}