"use client";

import Link from "next/link";
import Image from "next/image";
import { CATEGORY_CONFIG, type CategoryKey, type UnifiedLocation } from "../types";

interface ListCardProps {
  location: UnifiedLocation;
  activeCategory: CategoryKey;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function ListCard({
  location,
  activeCategory,
  isHovered,
  onHover,
}: ListCardProps) {
  const cat = location.categories[activeCategory] ?? location.categories[location.defaultCategory];
  if (!cat) return null;

  const cfg = CATEGORY_CONFIG[activeCategory] ?? CATEGORY_CONFIG[location.defaultCategory];

  return (
    <Link
      href={cat.href}
      className={`
        flex items-start gap-3 p-2.5 rounded-xl transition-all group
        ${isHovered ? "bg-[#f5f1ea] ring-2 ring-[#af5d32] ring-offset-1" : "hover:bg-[#f5f1ea]"}
      `}
      onMouseEnter={() => onHover(location.id)}
      onMouseLeave={() => onHover(null)}
      data-card-id={location.id}
    >
      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#ebe4d8]">
        {location.imageSeed ? (
          <Image
            src={`https://picsum.photos/seed/${location.imageSeed}/200/200`}
            alt={location.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-lg">
            {cfg.emoji}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors truncate">
          {location.name}
        </h4>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className="inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded"
            style={{ backgroundColor: cfg.color + "18", color: cfg.color }}
          >
            {cfg.emoji} {cfg.label}
          </span>
          {cat.tag && (
            <span className="text-[10px] font-semibold text-[#af5d32]">
              {cat.tag}
            </span>
          )}
        </div>
        <p className="text-xs text-[#64748b] line-clamp-2 mt-0.5">
          {cat.hook}
        </p>
      </div>
    </Link>
  );
}