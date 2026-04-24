export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#ebe4d8] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-serif">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">4</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Trips to China</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">2+</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Years</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">中文</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">We Speak</span>
          </div>
          <span className="hidden md:block text-[#ebe4d8]">·</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">15+</span>
            <span className="text-xs md:text-sm text-[#5d6a73] uppercase tracking-wider">Cities</span>
          </div>
        </div>
      </div>
    </div>
  )
}
