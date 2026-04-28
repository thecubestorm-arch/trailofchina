"use client";

import { useMemo, useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { CATEGORY_CONFIG, type CategoryKey, type UnifiedLocation } from "../types";
import ListCard from "./ListCard";

interface ListViewProps {
  locations: UnifiedLocation[];
  activeCategories: Set<CategoryKey>;
  hoveredItemId: string | null;
  onHoverItem: (id: string | null) => void;
}

export default function ListView({
  locations,
  activeCategories,
  hoveredItemId,
  onHoverItem,
}: ListViewProps) {
  const listRef = useRef<HTMLDivElement>(null);

  // Group locations by their first active category
  const grouped = useMemo(() => {
    const groups: Record<string, UnifiedLocation[]> = {};
    for (const loc of locations) {
      const cat = getActiveCategory(loc, activeCategories);
      if (!cat) continue;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(loc);
    }
    return (Object.keys(CATEGORY_CONFIG) as CategoryKey[])
      .filter((c) => activeCategories.has(c) && groups[c]?.length)
      .map((c) => ({ category: c, locations: groups[c] }));
  }, [locations, activeCategories]);

  // Scroll to card when hovered from map
  const scrollToCard = useCallback((id: string) => {
    const el = listRef.current?.querySelector(`[data-card-id="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  // Expose scrollToCard via ref pattern (parent can call it)
  // We'll use a simple effect approach instead
  if (hoveredItemId) {
    // Use requestAnimationFrame to avoid scroll during render
    requestAnimationFrame(() => {
      const el = listRef.current?.querySelector(`[data-card-id="${hoveredItemId}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  if (locations.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <Search className="mx-auto text-[#64748b] mb-3" size={32} />
          <p className="text-sm text-[#1a3a4a] font-semibold mb-1">No matches</p>
          <p className="text-xs text-[#64748b]">Try adjusting filters</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-4">
      <p className="text-xs text-[#64748b] font-medium">
        {locations.length} places found
      </p>
      {grouped.map((group) => {
        const cfg = CATEGORY_CONFIG[group.category];
        return (
          <div key={group.category}>
            <h3 className="text-xs font-bold text-[#1a3a4a] uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <span>{cfg.emoji}</span>
              {cfg.label}
            </h3>
            <div className="space-y-2">
              {group.locations.map((loc) => (
                <ListCard
                  key={loc.id}
                  location={loc}
                  activeCategory={group.category}
                  isHovered={hoveredItemId === loc.id}
                  onHover={onHoverItem}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getActiveCategory(
  loc: UnifiedLocation,
  activeCategories: Set<CategoryKey>
): CategoryKey | null {
  for (const cat of activeCategories) {
    if (loc.categories[cat]) return cat;
  }
  return null;
}