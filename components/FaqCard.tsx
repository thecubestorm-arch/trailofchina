type FaqCardProps = {
  question: string
  answer: string
}

export default function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <article className="section-shell rounded-[1.5rem] bg-[#fffaf3] px-5 py-5 sm:px-6">
      <h3 className="font-serif text-2xl text-[var(--foreground)]">{question}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{answer}</p>
    </article>
  )
}
