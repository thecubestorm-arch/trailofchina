import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';
import TableOfContents, { TOCItem } from './TableOfContents';

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

type InlineCta = {
  position: 'after-intro' | 'before-steps' | 'after-steps'
  title: string
  description: string
  href: string
  label: string
}

type GuideArticlePageProps = {
  breadcrumbs?: readonly { label: string; href?: string }[];
  category: string
  title: string
  intro: string
  whyYouNeedThis?: string[]
  setupSteps?: Step[]
  proTips?: string[]
  related?: Related[]
  relatedArticles?: RelatedArticle[]
  icon?: string
  heroImage?: { src: string; alt: string }
  hook?: string
  quickInfo?: string
  keyTakeaway?: string
  updatedAt?: string
  readTime?: string
  inlineCtas?: InlineCta[]
  children?: React.ReactNode
  tocItems?: TOCItem[]
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
  hook,
  quickInfo,
  keyTakeaway,
  updatedAt,
  readTime,
  inlineCtas,
  children,
  tocItems,
}: GuideArticlePageProps) {
  const estimateReadTime = () => {
    if (readTime) return readTime;

    const words = [
      intro,
      hook,
      quickInfo,
      ...(whyYouNeedThis || []),
      ...(setupSteps || []).flatMap((step) => [step.title, step.description]),
      ...(proTips || []),
    ]
      .filter(Boolean)
      .join(' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  const metaParts = ['By Trail of China'];
  if (updatedAt) {
    metaParts.push(`Updated ${updatedAt}`);
  }
  metaParts.push(estimateReadTime());

  const renderInlineCtas = (position: InlineCta['position']) => {
    const cards = inlineCtas?.filter((cta) => cta.position === position) || [];
    if (cards.length === 0) return null;

    return (
      <div className="mt-6 space-y-4">
        {cards.map((cta) => (
          <div
            key={`${position}-${cta.href}-${cta.title}`}
            className="rounded-xl border border-[#af5d32]/20 bg-[#fcfaf6] p-4"
          >
            <p className="text-lg font-bold text-[#1a3a4a]">{cta.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#1a3a4a]/75 md:text-base">
              {cta.description}
            </p>
            <Link
              href={cta.href}
              className="mt-3 inline-flex items-center text-sm font-semibold text-[#af5d32] transition hover:text-[#8f4b28] md:text-base"
            >
              {cta.label}
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const content = (
    <section className="mx-auto py-12 md:py-16" style={{
      background: 'linear-gradient(0deg, rgba(245,241,234,0.02) 0%, rgba(245,241,234,0.02) 100%), #ffffff',
    }}>
      {/* Mobile TOC */}
      {tocItems && tocItems.length > 0 && (
        <div className="md:hidden">
          <TableOfContents items={tocItems} />
        </div>
      )}

      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb items={breadcrumbs || []} />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#af5d32]">{category}</p>
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
      <p className="mt-3 text-sm text-[#1a3a4a]/60">
        {metaParts.join(' · ')}
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{intro}</p>

      {heroImage && (
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="mt-8 mb-8 h-48 w-full rounded-2xl object-cover md:h-64"
        />
      )}

      {hook && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold leading-relaxed text-red-800 md:text-base">
            {hook}
          </p>
        </div>
      )}

      {quickInfo && (
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-600">
          {quickInfo.split(' · ').map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-china-red" />
              {item.trim()}
            </span>
          ))}
        </div>
      )}

      {keyTakeaway && (
        <div className="mt-6 rounded-xl border-l-4 border-[#af5d32] bg-[#fcfaf6] px-5 py-4">
          <p className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-[#1a3a4a] md:text-base">
            <span aria-hidden="true" className="text-[#af5d32]">✓</span>
            <span>{keyTakeaway}</span>
          </p>
        </div>
      )}

      {renderInlineCtas('after-intro')}

      {children && (
        <div className="mt-10 space-y-8">
          {children}
        </div>
      )}

      {whyYouNeedThis && whyYouNeedThis.length > 0 && (
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
      )}

      {renderInlineCtas('before-steps')}

      {setupSteps && setupSteps.length > 0 && (
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
      )}

      {renderInlineCtas('after-steps')}

      {proTips && proTips.length > 0 && (
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
      )}

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}

      {related && related.length > 0 && (
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
      )}
    </section>
  );

  if (tocItems && tocItems.length > 0) {
    return (
      <div className="container-px mx-auto max-w-6xl">
        <div className="md:grid md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2 max-w-none">
            {content}
          </div>
          <div className="md:col-span-1">
            <TableOfContents items={tocItems} className="mt-12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-px mx-auto max-w-6xl">
      {content}
    </div>
  );
}
