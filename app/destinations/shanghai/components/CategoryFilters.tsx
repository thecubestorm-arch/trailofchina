"use client";

import { CATEGORY_CONFIG, type CategoryKey } from "../types";

const categoryKeys: CategoryKey[] = ["things-to-do", "where-to-eat", "where-to-stay"];

interface CategoryFiltersProps {
  activeCategories: Set<CategoryKey>;
  onToggle: (cat: CategoryKey) => void;
}

export default function CategoryFilters({
  activeCategories,
  onToggle,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categoryKeys.map((key) => {
        const cfg = CATEGORY_CONFIG[key];
        const isActive = activeCategories.has(key);
        return (
          <button
            key={key}
            onClick={() => onToggle(key)}
            className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all
              ${
                isActive
                  ? "bg-[#af5d32] text-white shadow-sm"
                  : "bg-[#f5f1ea] text-[#1a3a4a] border border-[#ebe4d8] hover:border-[#af5d32]"
              }
            `}
          >
            <span>{cfg.emoji}</span>
            <span className="hidden sm:inline">{cfg.label}</span>
            <span className="sm:hidden">{cfg.emoji}</span>
          </button>
        );
      })}
    </div>
  );
}