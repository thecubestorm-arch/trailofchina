type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  )
}
