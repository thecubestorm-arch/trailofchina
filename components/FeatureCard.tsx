import Link from 'next/link'

type FeatureCardProps = {
  title: string
  description: string
  href: string
  icon?: string
  eyebrow?: string
}

export function FeatureCard({ title, description, href, icon, eyebrow }: FeatureCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <article className="section-shell flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: '#fffaf3' }}>
        <div>
          {icon ? (
            <p className="text-4xl" aria-hidden="true">
              {icon}
            </p>
          ) : null}
          {eyebrow ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#af5d32]">{eyebrow}</p> : null}
          <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)]">
          <span className="group-hover:underline">Read more</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </article>
    </Link>
  )
}

export default FeatureCard
