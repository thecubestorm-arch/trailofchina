import Link from 'next/link'

type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
  href?: string
}

export default function SectionIntro({ eyebrow, title, description, href }: SectionIntroProps) {
  const content = (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block w-fit">
        {content}
      </Link>
    )
  }

  return content
}
