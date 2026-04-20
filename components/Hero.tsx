import Link from 'next/link'

type HeroProps = {
  badge?: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({ badge, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
      <div className="hero-bg rounded-3xl px-6 py-14 shadow-soft md:px-12">
        {badge ? (
          <span className="inline-flex rounded-full border border-white/40 bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/95">
            {badge}
          </span>
        ) : null}
        <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {primaryCta ? (
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link href={secondaryCta.href} className="btn-ghost">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
