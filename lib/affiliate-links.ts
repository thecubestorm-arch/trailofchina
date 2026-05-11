// Affiliate Link Database
// Sascha: Replace placeholder URLs with real affiliate links

export const affiliateLinks = {
  // === eSIM ===
  "airalo": "https://www.airalo.com/?ref=PLACEHOLDER",
  "holafly": "https://holafly.com/?ref=PLACEHOLDER",
  "yesim": "https://yesim.app/?ref=PLACEHOLDER",
  "mobi-matters": "https://mobimatters.com/?ref=PLACEHOLDER",
  "chinacom-telecom-esim": "https://chinacomtelecom.com/?ref=PLACEHOLDER",
  "3hk-esim": "https://3hk.com/?ref=PLACEHOLDER",

  // === VPN ===
  "expressvpn": "https://www.expressvpn.com/?ref=PLACEHOLDER",
  "nordvpn": "https://nordvpn.com/?ref=PLACEHOLDER",
  "surfshark": "https://surfshark.com/?ref=PLACEHOLDER",
  "astrill": "https://astrill.com/?ref=PLACEHOLDER",
  "lets-vpn": "https://letsvpn.com/?ref=PLACEHOLDER",

  // === Booking / Hotels ===
  "trip-com": "https://trip.com/?ref=PLACEHOLDER",
  "trip-com-hotels": "https://trip.com/hotels/?ref=PLACEHOLDER",
  "booking-com": "https://booking.com/?ref=PLACEHOLDER",
  "agoda": "https://agoda.com/?ref=PLACEHOLDER",

  // === Transport ===
  "trip-com-trains": "https://trip.com/trains/?ref=PLACEHOLDER",
  "trip-com-flights": "https://trip.com/flights/?ref=PLACEHOLDER",
  "12go-asia": "https://12go.asia/?ref=PLACEHOLDER",

  // === Flights ===
  "skyscanner": "https://skyscanner.com/?ref=PLACEHOLDER",

  // === Travel Insurance ===
  "safetywing": "https://safetywing.com/?ref=PLACEHOLDER",
  "worldnomads": "https://worldnomads.com/?ref=PLACEHOLDER",

  // === Travel Gear ===
  "travel-adapter-amazon": "https://amazon.de/dp/PLACEHOLDER?tag=PLACEHOLDER",
  "packing-cube-amazon": "https://amazon.de/dp/PLACEHOLDER?tag=PLACEHOLDER",
  "power-bank-amazon": "https://amazon.de/dp/PLACEHOLDER?tag=PLACEHOLDER",
} as const;

export type AffiliateKey = keyof typeof affiliateLinks;

// Get raw affiliate link (or "#" if not found)
export function getAffiliateLink(key: AffiliateKey): string {
  return affiliateLinks[key] || "#";
}

// Get affiliate link with UTM tracking
export function getTrackedLink(key: AffiliateKey, page: string): string {
  const base = affiliateLinks[key];
  if (!base || (base as string) === "#") return "#";
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=trailofchina&utm_medium=affiliate&utm_campaign=${page}`;
}

// Check if a link is a placeholder (not yet filled in)
export function isPlaceholder(key: AffiliateKey): boolean {
  return affiliateLinks[key]?.includes("PLACEHOLDER") ?? true;
}