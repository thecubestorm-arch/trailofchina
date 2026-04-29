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
      <div className="mt-8 space-y-4">
        {cards.map((cta) => (
          <div
            key={`${position}-${cta.href}-${cta.title}`}
            className="border-l-4 border-[#af5d32] bg-[#fcfaf6] px-5 py-4 md:px-6"
          >
            <p className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">{cta.title}</p>
            <p className="mt-2 text-base leading-8 text-[#5d6a73] md:text-lg">
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

      <div className="max-w-none text-[#1a3a4a]">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#af5d32]">{category}</p>
      <div className="mt-3 flex items-center">
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="mr-3 h-10 w-10 rounded-xl bg-white shadow-sm"
          />
        )}
        <h1 className="relative font-serif text-4xl font-bold leading-tight text-[#1a3a4a] md:text-5xl">
          {title}
        </h1>
      </div>
      <p className="mt-3 text-sm text-[#5d6a73]">
        {metaParts.join(' · ')}
      </p>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d6a73] md:text-xl">{intro}</p>

      {heroImage && (
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="mt-10 mb-10 h-56 w-full rounded-2xl object-cover md:h-80"
        />
      )}

      {hook && (
        <div className="mt-8 border-l-4 border-[#af5d32] pl-5">
          <p className="text-base leading-8 text-[#1a3a4a] md:text-lg">
            {hook}
          </p>
        </div>
      )}

      {quickInfo && (
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#5d6a73] md:text-base">
          {quickInfo.split(' · ').map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#af5d32]" />}
              {item.trim()}
            </span>
          ))}
        </div>
      )}

      {keyTakeaway && (
        <div className="mt-8 border-l-4 border-[#af5d32] bg-[#fcfaf6] px-6 py-5">
          <p className="text-base leading-8 text-[#1a3a4a] md:text-lg">
            {keyTakeaway}
          </p>
        </div>
      )}

      {renderInlineCtas('after-intro')}

      {children && (
        <div className="mt-12 space-y-12 text-[#1a3a4a] [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-[#1a3a4a] [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1a3a4a] md:[&_h2]:text-3xl [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a3a4a] md:[&_h3]:text-2xl [&_p]:text-base [&_p]:leading-8 [&_p]:text-[#1a3a4a] md:[&_p]:text-lg [&_ul]:space-y-4 [&_ol]:space-y-4 [&_li]:text-base [&_li]:leading-8 [&_li]:text-[#1a3a4a] md:[&_li]:text-lg [&_hr]:border-[#ebe4d8]">
          {children}
        </div>
      )}

      {whyYouNeedThis && whyYouNeedThis.length > 0 && (
        <div className="mt-12 border-t border-[#ebe4d8] pt-10">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">Why you need this</h2>
          <ul className="mt-6 space-y-4">
            {whyYouNeedThis.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-8 text-[#1a3a4a] md:text-lg">
                <span aria-hidden="true" className="mt-3 inline-block h-2 w-2 rounded-full bg-[#af5d32]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {renderInlineCtas('before-steps')}

      {setupSteps && setupSteps.length > 0 && (
        <div className="mt-12 border-t border-[#ebe4d8] pt-10">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">Step-by-step setup guide</h2>
          <ol className="mt-8 space-y-8">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4 md:gap-6">
                <div className="relative flex justify-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#fcfaf6] font-serif text-lg font-bold text-[#af5d32] ring-1 ring-[#af5d32]/20">
                    {index + 1}
                  </span>
                  {index < setupSteps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-10 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-[#ebe4d8]"
                    />
                  )}
                </div>
                <div className="pb-1">
                  <h3 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-base leading-8 text-[#1a3a4a] md:text-lg">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {renderInlineCtas('after-steps')}

      {proTips && proTips.length > 0 && (
        <div className="mt-12 border-l-4 border-[#af5d32] bg-[#fcfaf6] py-1 pl-5 md:pl-6">
          <h2 className="font-serif text-xl font-bold text-[#1a3a4a] md:text-2xl">Pro Tips</h2>
          <ul className="mt-4 space-y-3">
            {proTips.map((tip) => (
              <li key={tip} className="text-base leading-8 text-[#5d6a73] md:text-lg">
                {tip}
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
        <div className="mt-12 border-t border-[#ebe4d8] pt-8">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a4a] md:text-3xl">Related pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full bg-[#f5f1ea] px-4 py-2 text-sm font-semibold text-[#5d6a73] transition hover:bg-[#efe5d8] hover:text-[#af5d32]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
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
