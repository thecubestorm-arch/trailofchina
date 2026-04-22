import Link from 'next/link'

type FaqCardProps = {
  question: string
  answer: string
  href: string
}

export default function FaqCard({ question, answer, href }: FaqCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <article className="section-shell h-full rounded-xl transition-all hover:-translate-y-1 hover:shadow-md sm:px-6" style={{ backgroundColor: '#fffaf3' }}>
        <h3 className="font-serif text-2xl text-[var(--foreground)]">{question}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{answer}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#af5d32]">
          <span className="group-hover:underline">Learn more</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </article>
    </Link>
  )
}
