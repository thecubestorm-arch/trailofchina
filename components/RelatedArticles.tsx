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
      <h2 className="text-2xl font-serif font-bold mb-6 text-[var(--foreground)]">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={article.href}
            className="group block p-5 border-l-4 border-[#af5d32] rounded-lg bg-[#f5f1ea] hover:shadow-md transition-all"
          >
            <h3 className="font-serif font-bold text-lg mb-2 text-[#333] group-hover:text-[#af5d32] transition-colors">
              {article.title}
            </h3>
            <p className="text-[#555] text-sm leading-relaxed mb-3">
              {article.description}
            </p>
            <span className="text-[#af5d32] text-sm font-medium flex items-center gap-1">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
