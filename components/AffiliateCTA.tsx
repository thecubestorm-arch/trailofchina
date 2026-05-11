"use client";

import { getTrackedLink, isPlaceholder } from "@/lib/affiliate-links";
import type { AffiliateKey } from "@/lib/affiliate-links";
import { ExternalLink } from "lucide-react";

interface AffiliateCTAProps {
  product: AffiliateKey;
  label: string;
  description?: string;
  page: string; // for UTM tracking
  tag?: string; // e.g. "Best Value", "Our Pick"
  variant?: "primary" | "secondary";
}

export default function AffiliateCTA({
  product,
  label,
  description,
  page,
  tag,
  variant = "primary",
}: AffiliateCTAProps) {
  const href = getTrackedLink(product, page);
  const placeholder = isPlaceholder(product);

  return (
    <div className="my-6 rounded-2xl border border-[#1a3a4a]/10 bg-[#faf8f4] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#1a3a4a]">{label}</span>
            {tag && (
              <span className="rounded-full bg-[#af5d32]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#af5d32]">
                {tag}
              </span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-sm text-[#1a3a4a]/70">{description}</p>
          )}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors min-h-[44px] ${
            variant === "primary"
              ? "bg-[#1a3a4a] text-white hover:bg-[#1a3a4a]/90"
              : "bg-[#af5d32]/10 text-[#af5d32] hover:bg-[#af5d32]/20"
          } ${placeholder ? "pointer-events-none opacity-50" : ""}`}
        >
          {variant === "primary" ? "Get it now" : "Learn more"}
          <ExternalLink size={14} />
        </a>
      </div>
      <p className="mt-2 text-[10px] text-[#1a3a4a]/40">
        Partner link · We may earn a commission at no extra cost to you
      </p>
    </div>
  );
}