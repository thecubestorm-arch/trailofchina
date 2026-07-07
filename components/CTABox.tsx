"use client";

import { ExternalLink } from "lucide-react";

interface AffiliateLink {
  label: string;
  url: string;
  primary?: boolean;
}

interface CTABoxProps {
  variant: "esim" | "vpn" | "insurance" | "hotel" | "tour" | "gear" | "generic";
  title?: string;
  description?: string;
  links?: AffiliateLink[];
}

const defaultContent: Record<
  string,
  { emoji: string; title: string; description: string; links: AffiliateLink[] }
> = {
  esim: {
    emoji: "🌍",
    title: "Get Connected Before You Land",
    description:
      "Don't waste your first day hunting for a SIM card. Order an eSIM now and have instant data the moment you step off the plane in China.",
    links: [
      {
        label: "Get Airalo eSIM",
        url: "https://placeholder.trailofchina.com/airalo",
        primary: true,
      },
      {
        label: "Compare Holafly",
        url: "https://placeholder.trailofchina.com/holafly",
      },
    ],
  },
  vpn: {
    emoji: "🔒",
    title: "Stay Connected to the Free Internet",
    description:
      "Google, WhatsApp, and Instagram don't work in China without a VPN. Set one up before you go — it's essential.",
    links: [
      {
        label: "Get ExpressVPN",
        url: "https://placeholder.trailofchina.com/expressvpn",
        primary: true,
      },
      {
        label: "Try NordVPN",
        url: "https://placeholder.trailofchina.com/nordvpn",
      },
    ],
  },
  insurance: {
    emoji: "🛡️",
    title: "Travel Insurance for China",
    description:
      "Medical care in China is excellent but not free. A good travel insurance covers emergencies, trip cancellations, and lost gear.",
    links: [
      {
        label: "Get SafetyWing",
        url: "https://placeholder.trailofchina.com/safetywing",
        primary: true,
      },
    ],
  },
  hotel: {
    emoji: "🏨",
    title: "Find the Perfect Stay",
    description:
      "Compare prices across Booking.com and Agoda to find the best hotel or apartment for your China trip.",
    links: [
      {
        label: "Search Booking.com",
        url: "https://placeholder.trailofchina.com/booking",
        primary: true,
      },
      {
        label: "Compare on Agoda",
        url: "https://placeholder.trailofchina.com/agoda",
      },
    ],
  },
  tour: {
    emoji: "🎫",
    title: "Skip the Lines, Book a Tour",
    description:
      "Popular attractions sell out fast. Book guided tours and skip-the-line tickets in advance — especially for the Great Wall and Terracotta Warriors.",
    links: [
      {
        label: "Browse GetYourGuide",
        url: "https://placeholder.trailofchina.com/getyourguide",
        primary: true,
      },
    ],
  },
  gear: {
    emoji: "🎒",
    title: "Gear We Recommend for China",
    description:
      "Power adapters, portable chargers, VPN-ready routers, and other essentials for your China packing list.",
    links: [
      {
        label: "Shop on Amazon",
        url: "https://placeholder.trailofchina.com/amazon",
        primary: true,
      },
    ],
  },
  generic: {
    emoji: "💡",
    title: "Recommended for Your Trip",
    description: "Hand-picked products and services for China travelers.",
    links: [],
  },
};

export default function CTABox({
  variant,
  title,
  description,
  links,
}: CTABoxProps) {
  const content = defaultContent[variant];
  if (!content) return null;

  const displayTitle = title ?? content.title;
  const displayDescription = description ?? content.description;
  const displayLinks = links ?? content.links;

  return (
    <aside className="my-8 rounded-lg border-l-4 border-[#af5d32] bg-[#faf8f4] p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden="true">
          {content.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-lg font-semibold text-[#1a3a4a]">
            {displayTitle}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-[#5a5a5a]">
            {displayDescription}
          </p>

          {displayLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {displayLinks.map((link, i) =>
                link.primary ? (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#af5d32] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#8d4a28]"
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] underline underline-offset-2 transition hover:text-[#8d4a28]"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                )
              )}
            </div>
          )}

          <p className="mt-3 text-xs text-[#9e9e9e]">
            This recommendation may earn us a small commission at no extra cost
            to you.
          </p>
        </div>
      </div>
    </aside>
  );
}
