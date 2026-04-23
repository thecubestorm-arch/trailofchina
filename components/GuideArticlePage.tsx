import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';

type Step = {
  title: string
  description: string
}

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
}

type Related = {
  label: string
  href: string
}

type GuideArticlePageProps = {
  breadcrumbs?: readonly { label: string; href?: string }[];
  category: string
  title: string
  intro: string
  whyYouNeedThis: string[]
  setupSteps: Step[]
  proTips: string[]
  related: Related[]
  relatedArticles?: RelatedArticle[]
  icon?: string
  heroImage?: { src: string; alt: string }
}

export default function GuideArticlePage({
  breadcrumbs,
  category,
  title,
  intro,
  whyYouNeedThis,
  setupSteps,
  proTips,
  related,
  relatedArticles,
  icon,
  heroImage,
}: GuideArticlePageProps) {
  return (
    <section className="container-px mx-auto max-w-4xl py-12 md:py-16" style={{
      background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
    }}>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb items={breadcrumbs || []} />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-china-red">{category}</p>
      <div className="mt-3 flex items-center">
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="mr-3 h-10 w-10 rounded-xl bg-white shadow-sm"
          />
        )}
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl relative">
          {title}
        </h1>
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{intro}</p>

      {heroImage && (
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="mt-8 mb-8 h-48 w-full rounded-2xl object-cover md:h-64"
        />
      )}


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

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}

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
