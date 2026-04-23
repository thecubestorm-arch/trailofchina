import Link from 'next/link'

interface ToursCTAProps {
  city: string
  attraction?: string
}

export default function ToursCTA({ city, attraction }: ToursCTAProps) {
  const searchQuery = attraction 
    ? `${attraction} ${city}` 
    : `${city} tours`

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-serif font-bold mb-4 text-[var(--foreground)]">Book Tours & Experiences</h2>
      <p className="text-[var(--muted)] mb-4">
        Discover guided tours, skip-the-line tickets, and unique experiences in {city}.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href={`https://www.viator.com/searchResults/allText?text=${encodeURIComponent(searchQuery)}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block p-4 border border-[#ebe4d8] rounded-xl hover:border-[#af5d32] hover:shadow-md transition-all group"
        >
          <span className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[#af5d32]">Viator</span>
          <p className="text-sm text-[var(--muted)] mt-1">Tours, tickets & day trips</p>
          <span className="text-xs text-[#af5d32] mt-2 inline-block">Find tours →</span>
        </a>
        <a
          href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(searchQuery)}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block p-4 border border-[#ebe4d8] rounded-xl hover:border-[#af5d32] hover:shadow-md transition-all group"
        >
          <span className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[#af5d32]">GetYourGuide</span>
          <p className="text-sm text-[var(--muted)] mt-1">Unforgettable experiences</p>
          <span className="text-xs text-[#af5d32] mt-2 inline-block">Find tours →</span>
        </a>
        <a
          href={`https://www.klook.com/search/?query=${encodeURIComponent(searchQuery)}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block p-4 border border-[#ebe4d8] rounded-xl hover:border-[#af5d32] hover:shadow-md transition-all group"
        >
          <span className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[#af5d32]">Klook</span>
          <p className="text-sm text-[var(--muted)] mt-1">Asia travel specialist</p>
          <span className="text-xs text-[#af5d32] mt-2 inline-block">Find tours →</span>
        </a>
      </div>
    </section>
  )
}