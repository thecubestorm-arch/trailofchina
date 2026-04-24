'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface TOCItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export default function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsible */}
      <div className="md:hidden mb-8">
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl border border-[#ebe4d8] bg-[#faf8f4] px-4 py-3 text-left transition-colors hover:bg-[#f5f1ea]"
        >
          <span className="text-sm font-semibold text-[#1a3a4a]">On This Page</span>
          <ChevronDown
            className={`h-4 w-4 text-[#1a3a4a] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <nav className="mt-2 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-sm">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      item.level === 3 ? 'pl-6' : ''
                    } ${
                      activeId === item.id
                        ? 'font-semibold text-[#af5d32] bg-[#faf8f4]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-[#faf8f4]'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside
        className={`hidden md:block ${className}`}
      >
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            On This Page
          </h3>
          <nav>
            <ul className="space-y-0.5 border-l-2 border-[#ebe4d8]">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block border-l-2 py-1.5 pr-2 text-sm transition-all duration-200 ${
                      item.level === 3 ? 'pl-5' : 'pl-3'
                    } ${
                      activeId === item.id
                        ? '-ml-0.5 border-l-[#af5d32] font-semibold text-[#af5d32]'
                        : 'border-l-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
