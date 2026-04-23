import Link from 'next/link';

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="text-sm font-bold uppercase tracking-wider text-[#af5d32] mb-4">
        You Might Also Like
      </h2>
      <div className="divide-y divide-[#ebe4d8]">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={article.href}
            className="group flex items-start gap-3 py-3 hover:bg-[#faf8f4] transition-colors"
          >
            <span className="mt-1 text-[#af5d32] text-xs">&rarr;</span>
            <div>
              <h3 className="font-serif text-sm font-semibold text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-1">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
