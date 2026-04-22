export default function ChineseWatermark({ character }: { character: string }) {
  return (
    <span
      className="absolute -top-6 -left-2 font-serif text-[6rem] md:text-[8rem] font-bold text-[#af5d32] opacity-[0.04] leading-none select-none pointer-events-none"
      aria-hidden="true"
    >
      {character}
    </span>
  )
}
