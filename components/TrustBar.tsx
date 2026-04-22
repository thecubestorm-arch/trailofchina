export default function TrustBar() {
  return (
    <div className="bg-[#f5f1ea] border-y border-[#ebe4d8] py-4">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-10 items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇨🇳</span>
          <span className="text-sm text-[#5d6a73]">4 Trips to China</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🗣️</span>
          <span className="text-sm text-[#5d6a73]">We Speak Mandarin</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">👨‍👩‍👧</span>
          <span className="text-sm text-[#5d6a73]">Family in Beijing & Shanghai</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">📍</span>
          <span className="text-sm text-[#5d6a73]">15+ Cities Visited</span>
        </div>
      </div>
    </div>
  )
}
