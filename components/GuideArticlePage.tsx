import Link from 'next/link'

type Step = {
  title: string
  description: string
}

type Related = {
  label: string
  href: string
}

type GuideArticlePageProps = {
  category: string
  title: string
  intro: string
  whyYouNeedThis: string[]
  setupSteps: Step[]
  proTips: string[]
  scamAlerts: string[]
  related: Related[]
}

export default function GuideArticlePage({
  category,
  title,
  intro,
  whyYouNeedThis,
  setupSteps,
  proTips,
  scamAlerts,
  related,
}: GuideArticlePageProps) {
  return (
    <section className="container-px mx-auto max-w-4xl py-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">{category}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{intro}</p>

      <div className="mt-10 card-base">
        <h2 className="text-2xl font-extrabold text-slate-900">Why you need this</h2>
        <ul className="mt-4 space-y-3">
          {whyYouNeedThis.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-slate-700 md:text-base">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 card-base">
        <h2 className="text-2xl font-extrabold text-slate-900">Step-by-step setup guide</h2>
        <ol className="mt-5 space-y-4">
          {setupSteps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-china-red">Step {index + 1}</p>
              <h3 className="mt-1 text-lg font-extrabold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-black text-slate-900">Pro Tips</h2>
        <ul className="mt-3 space-y-2">
          {proTips.map((tip) => (
            <li key={tip} className="text-sm leading-relaxed text-slate-700 md:text-base">
              • {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-xl font-black text-slate-900">Scam Alerts</h2>
        <ul className="mt-3 space-y-2">
          {scamAlerts.map((alert) => (
            <li key={alert} className="text-sm leading-relaxed text-slate-700 md:text-base">
              • {alert}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 card-base">
        <h2 className="text-2xl font-extrabold text-slate-900">Related pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-china-red hover:text-china-red">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
