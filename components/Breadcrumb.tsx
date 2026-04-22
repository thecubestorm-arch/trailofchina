import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const backHref = items.length >= 2 ? items[items.length - 2].href : '/';

  return (
    <>
      {/* Desktop: Full breadcrumb trail */}
      <div className="hidden sm:block text-sm text-[var(--muted)] py-2">
        <nav className="flex items-center flex-wrap gap-1.5">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <span key={idx} className="flex items-center gap-1.5">
                {isLast ? (
                  <span className="text-[var(--muted)]">{item.label}</span>
                ) : (
                  <>
                    <Link
                      href={item.href || '/'}
                      className="hover:text-[#af5d32] transition-colors"
                    >
                      {item.label}
                    </Link>
                    <span className="text-[var(--muted)]">›</span>
                  </>
                )}
              </span>
            );
          })}
        </nav>
      </div>

      {/* Mobile: Back link only */}
      <div className="sm:hidden text-sm py-2">
        <Link
          href={backHref || '/'}
          className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[#af5d32] transition-colors"
        >
          ← Back
        </Link>
      </div>
    </>
  );
}