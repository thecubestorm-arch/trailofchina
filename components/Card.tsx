import Link from 'next/link'

type CardProps = {
  title: string
  description: string
  href?: string
  teaser?: string
  children?: React.ReactNode
}

export default function Card({ title, description, href, teaser, children }: CardProps) {
  const cardBody = (
    <article className="card-base group h-full">
      {teaser ? <p className="text-xs font-bold uppercase tracking-wide text-china-red">{teaser}</p> : null}
      <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      {children}
      {href ? <p className="mt-5 text-sm font-semibold text-china-red">Read guide →</p> : null}
    </article>
  )

  if (href === undefined) return cardBody

  return (
    <Link href={href} className="block h-full">
      {cardBody}
    </Link>
  )
}
