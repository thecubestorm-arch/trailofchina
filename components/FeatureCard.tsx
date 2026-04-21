import Link from 'next/link'

type FeatureCardProps = {
  eyebrow: string
  title: string
  description: string
  href: string
}

export default function FeatureCard({ eyebrow, title, description, href }: FeatureCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <article className="section-shell flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] transition-all hover:-translate-y-1 hover:shadow-lg sm:rounded-[1.75rem]" style={{ backgroundColor: '#fffaf3' }}>
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#af5d32]">{eyebrow}</p>
            <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
          </div>
          <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)]">
            <span className="group-hover:underline">Read more</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
