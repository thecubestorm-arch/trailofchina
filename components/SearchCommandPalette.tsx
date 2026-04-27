"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  X,
  MapPin,
  BookOpen,
  Lightbulb,
  Newspaper,
  Settings,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useSearch } from "./SearchProvider";
import { searchIndex, SearchItem } from "@/lib/search-index";

const categoryConfig = {
  destination: { label: "Destinations", icon: MapPin, color: "#af5d32" },
  guide: { label: "Guides", icon: BookOpen, color: "#1a3a4a" },
  tip: { label: "Tips", icon: Lightbulb, color: "#f97316" },
  blog: { label: "Blog", icon: Newspaper, color: "#64748b" },
  basics: { label: "China Basics", icon: Settings, color: "#3b82f6" },
};

const RECENT_KEY = "toc-search-recent";
const MAX_RECENT = 5;

function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY);
      if (stored) setRecent(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const addRecent = useCallback((id: string) => {
    setRecent((prev) => {
      const next = [id, ...prev.filter((r) => r !== id)].slice(0, MAX_RECENT);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { recent, addRecent };
}

function fuzzyScore(query: string, item: SearchItem): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const title = item.title.toLowerCase();
  const subtitle = (item.subtitle || "").toLowerCase();
  const keywords = (item.keywords || []).join(" ").toLowerCase();

  // Exact title match = highest
  if (title === q) return 1000;
  // Starts with in title
  if (title.startsWith(q)) return 900;
  // Contains in title
  if (title.includes(q)) return 800;
  // Starts with in subtitle
  if (subtitle.startsWith(q)) return 700;
  // Contains in subtitle
  if (subtitle.includes(q)) return 600;
  // Keyword exact match
  if (keywords.includes(q)) return 500;
  // Keyword partial
  if (keywords.split(" ").some((k) => k.startsWith(q))) return 400;
  // Word boundary match in title
  if (title.split(/\s+/).some((w) => w.startsWith(q))) return 300;

  return 0;
}

function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const scored = searchIndex
    .map((item) => ({ item, score: fuzzyScore(query, item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.map(({ item }) => item);
}

export default function SearchCommandPalette() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { recent, addRecent } = useRecentSearches();

  const results = useMemo(() => searchItems(query), [query]);

  const recentItems = useMemo(() => {
    if (query.trim() || recent.length === 0) return [];
    return searchIndex.filter((item) => recent.includes(item.id));
  }, [recent, query]);

  // Flatten for keyboard nav
  const allItems = query.trim() ? results : recentItems;

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeSearch();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, allItems.length - 1));
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        return;
      }

      if (e.key === "Enter" && allItems[selectedIndex]) {
        e.preventDefault();
        const item = allItems[selectedIndex];
        addRecent(item.id);
        closeSearch();
        window.location.href = item.href;
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, allItems, selectedIndex, closeSearch, addRecent]);

  // Scroll selected into view
  useEffect(() => {
    const el = listRef.current?.children[selectedIndex] as HTMLElement;
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSearch();
    }
  };

  if (!isOpen) return null;

  // Group results by category
  const grouped: Record<string, SearchItem[]> = {};
  for (const item of allItems) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }

  const categoryOrder = ["destination", "basics", "guide", "tip", "blog"];
  const orderedCategories = categoryOrder.filter((c) => grouped[c]?.length > 0);

  // Flat list for keyboard indexing
  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/40 backdrop-blur-sm pt-[15vh]"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#ebe4d8]">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[#ebe4d8]">
          <Search size={20} className="text-[#af5d32] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Trail of China..."
            className="flex-1 text-base text-[#1a3a4a] placeholder:text-[#94a3b8] bg-transparent outline-none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 rounded-full hover:bg-[#f5f1ea] text-[#64748b]"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#f5f1ea] text-[10px] font-mono text-[#64748b] border border-[#ebe4d8]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[50vh] overflow-y-auto"
          role="listbox"
        >
          {/* Empty state */}
          {allItems.length === 0 && query.trim() && (
            <div className="px-4 py-12 text-center">
              <Search size={32} className="mx-auto text-[#cbd5e1] mb-3" />
              <p className="text-sm text-[#64748b]">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#94a3b8] mt-1">
                Try different keywords or browse by category below
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categoryOrder.map((cat) => {
                  const config = categoryConfig[cat as keyof typeof categoryConfig];
                  if (!config) return null;
                  return (
                    <Link
                      key={cat}
                      href={
                        cat === "destination"
                          ? "/destinations"
                          : cat === "basics"
                          ? "/china-basics"
                          : cat === "guide"
                          ? "/plan-your-trip"
                          : "/blog"
                      }
                      onClick={closeSearch}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#ebe4d8] text-[#64748b] hover:bg-[#f5f1ea] hover:text-[#1a3a4a] transition-colors"
                    >
                      {config.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recent searches */}
          {recentItems.length > 0 && !query.trim() && (
            <div className="py-2">
              <div className="px-4 py-1.5 flex items-center gap-2">
                <Clock size={12} className="text-[#94a3b8]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
                  Recent
                </span>
              </div>
              {recentItems.map((item, idx) => {
                const isSelected = flatIndex === selectedIndex;
                const currentIndex = flatIndex++;
                return (
                  <ResultRow
                    key={item.id}
                    item={item}
                    isSelected={isSelected}
                    onClick={() => {
                      addRecent(item.id);
                      closeSearch();
                      window.location.href = item.href;
                    }}
                    onMouseEnter={() => setSelectedIndex(currentIndex)}
                  />
                );
              })}
            </div>
          )}

          {/* Grouped results */}
          {orderedCategories.map((category) => {
            const items = grouped[category];
            const config = categoryConfig[category as keyof typeof categoryConfig];
            if (!items || !config) return null;
            const Icon = config.icon;
            return (
              <div key={category} className="py-2">
                <div className="px-4 py-1.5 flex items-center gap-2">
                  <Icon size={12} style={{ color: config.color }} />
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: config.color }}
                  >
                    {config.label}
                  </span>
                </div>
                {items.map((item) => {
                  const isSelected = flatIndex === selectedIndex;
                  const currentIndex = flatIndex++;
                  return (
                    <ResultRow
                      key={item.id}
                      item={item}
                      isSelected={isSelected}
                      onClick={() => {
                        addRecent(item.id);
                        closeSearch();
                        window.location.href = item.href;
                      }}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-[#faf8f4] border-t border-[#ebe4d8] text-[10px] text-[#94a3b8]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ebe4d8] font-mono text-[9px]">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ebe4d8] font-mono text-[9px]">↵</kbd>
              Open
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#ebe4d8] font-mono text-[9px]">ESC</kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}

function ResultRow({
  item,
  isSelected,
  onClick,
  onMouseEnter,
}: {
  item: SearchItem;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  const config = categoryConfig[item.category as keyof typeof categoryConfig];
  const Icon = config?.icon || MapPin;

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer ${
        isSelected
          ? "bg-[#f5f1ea]"
          : "hover:bg-[#faf8f4]"
      }`}
      role="option"
      aria-selected={isSelected}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: config?.color + "15" || "#f5f1ea" }}
      >
        <Icon size={16} style={{ color: config?.color || "#64748b" }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-[#1a3a4a] truncate">
          {item.title}
        </div>
        {item.subtitle && (
          <div className="text-xs text-[#64748b] truncate">{item.subtitle}</div>
        )}
      </div>
      <ChevronRight size={14} className="text-[#cbd5e1] flex-shrink-0" />
    </button>
  );
}
