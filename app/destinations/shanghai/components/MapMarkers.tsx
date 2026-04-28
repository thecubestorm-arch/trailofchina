"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { CATEGORY_CONFIG, type UnifiedLocation, type CategoryKey } from "../types";

interface MapMarkersProps {
  locations: UnifiedLocation[];
  activeCategories: Set<CategoryKey>;
  hoveredItemId: string | null;
  onHoverItem: (id: string | null) => void;
}

function createMarkerIcon(isHovered: boolean, category: CategoryKey): L.DivIcon {
  const cfg = CATEGORY_CONFIG[category];
  const size = isHovered ? 40 : 32;
  const borderWidth = isHovered ? 3 : 2;
  const borderColor = isHovered ? "#af5d32" : "white";
  const scale = isHovered ? "transform: scale(1.4); transform-origin: center;" : "";

  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:${size}px;height:${size}px;${scale}transition: transform 0.2s ease;">
      <div style="position:absolute;inset:${isHovered ? 2 : 5}px;background:${cfg.color};border:${borderWidth}px solid ${borderColor};border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;font-size:${isHovered ? 16 : 14}px">${cfg.emoji}</div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function MapMarkers({
  locations,
  activeCategories,
  hoveredItemId,
  onHoverItem,
}: MapMarkersProps) {
  return (
    <>
      {locations.map((loc) => {
        const cat = getActiveCategory(loc, activeCategories);
        if (!cat) return null;

        const catEntry = loc.categories[cat]!;
        const cfg = CATEGORY_CONFIG[cat];
        const isHovered = hoveredItemId === loc.id;

        return (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createMarkerIcon(isHovered, cat)}
            eventHandlers={{
              mouseover: () => onHoverItem(loc.id),
              mouseout: () => onHoverItem(null),
            }}
          >
            <Popup
              closeButton={false}
              className="shanghai-popup"
              maxWidth={260}
            >
              <Link
                href={catEntry.href}
                className="block no-underline"
                style={{ minWidth: 220 }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                  <img
                    src={`https://picsum.photos/seed/${loc.imageSeed}-1/200/130`}
                    alt={loc.name}
                    style={{ width: "33%", height: 65, objectFit: "cover", borderRadius: 6 }}
                  />
                  <img
                    src={`https://picsum.photos/seed/${loc.imageSeed}-2/200/130`}
                    alt={loc.name}
                    style={{ width: "33%", height: 65, objectFit: "cover", borderRadius: 6 }}
                  />
                  <img
                    src={`https://picsum.photos/seed/${loc.imageSeed}-3/200/130`}
                    alt={loc.name}
                    style={{ width: "33%", height: 65, objectFit: "cover", borderRadius: 6 }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 16 }}>{cfg.emoji}</span>
                  <strong style={{ color: "#1a3a4a", fontSize: 14 }}>{loc.name}</strong>
                </div>
                <p style={{ fontSize: 12, color: "#64748b", margin: "4px 0" }}>
                  {catEntry.hook}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: cfg.color + "18",
                      color: cfg.color,
                    }}
                  >
                    {cfg.label}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#af5d32" }}>
                    {catEntry.tag}
                  </span>
                </div>
                <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600, color: "#af5d32" }}>
                  Explore →
                </div>
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

function getActiveCategory(
  loc: UnifiedLocation,
  activeCategories: Set<CategoryKey>
): CategoryKey | null {
  for (const cat of activeCategories) {
    if (loc.categories[cat]) return cat;
  }
  if (loc.categories[loc.defaultCategory]) return loc.defaultCategory;
  return null;
}