import Link from 'next/link'

type FeatureCardProps = {
  eyebrow: string
  title: string
  description: string
  href: string
}

export default function FeatureCard({ eyebrow, title, description, href }: FeatureCardProps) {
  return (
    <article className="section-shell group flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">{eyebrow}</p>
          <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="mt-7">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  )
}
