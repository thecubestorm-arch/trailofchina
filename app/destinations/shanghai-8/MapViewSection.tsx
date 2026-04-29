"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, List, Map } from "lucide-react";
import type { MarkerLocation } from "../shanghai/types";

type POICategory = "attraction" | "eat" | "stay";
type FilterTag =
  | "free"
  | "budget"
  | "midrange"
  | "premium"
  | "historic"
  | "modern"
  | "local"
  | "nightlife"
  | "family"
  | "landmark"
  | "food"
  | "stay"
  | "practical";

interface FilterableItem {
  id: string;
  markerId?: string;
  name: string;
  subtitle: string;
  tag?: string;
  imageSeed: string;
  href: string;
  type: "attraction" | "food" | "stay" | "info" | "tip";
  filters: FilterTag[];
}

interface POIItem {
  id: string;
  markerId: string;
  name: string;
  category: POICategory;
  hook: string;
  tag?: string;
  href: string;
  imageSeed: string;
}

const categoryConfig: Record<
  POICategory,
  { emoji: string; color: string; label: string }
> = {
  attraction: { emoji: "🏛️", color: "#af5d32", label: "Attractions" },
  eat: { emoji: "🍜", color: "#f97316", label: "Food" },
  stay: { emoji: "🏨", color: "#3b82f6", label: "Stay" },
};

const shanghaiBoundary: [number, number][] = [
  [31.4, 121.2],
  [31.42, 121.35],
  [31.38, 121.5],
  [31.35, 121.6],
  [31.3, 121.65],
  [31.25, 121.7],
  [31.2, 121.75],
  [31.15, 121.7],
  [31.1, 121.6],
  [31.05, 121.5],
  [31.02, 121.35],
  [31.05, 121.2],
  [31.1, 121.1],
  [31.2, 121.05],
  [31.3, 121.08],
  [31.4, 121.2],
];

const getItemCategory = (itemType: FilterableItem["type"]): POICategory | null => {
  if (itemType === "food") return "eat";
  if (itemType === "attraction" || itemType === "stay") return itemType;
  return null;
};

const poiMarkerIcon = (category: POICategory, isHovered: boolean) => {
  const cfg = categoryConfig[category];
  const size = isHovered ? 40 : 32;
  const borderWidth = isHovered ? 3 : 2;
  const borderColor = isHovered ? "#af5d32" : "white";
  const scale = isHovered ? "transform: scale(1.4); transform-origin: center;" : "";
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:${size}px;height:${size}px;${scale}transition:transform 0.2s ease;">
      <div style="position:absolute;inset:${isHovered ? 2 : 5}px;background:${cfg.color};border:${borderWidth}px solid ${borderColor};border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;font-size:${isHovered ? 16 : 14}px">${cfg.emoji}</div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const dimmedPoiMarkerIcon = (category: POICategory, isHovered: boolean) => {
  const cfg = categoryConfig[category];
  const size = isHovered ? 40 : 32;
  const borderWidth = isHovered ? 3 : 2;
  const borderColor = isHovered ? "#af5d32" : "rgba(255,255,255,0.75)";
  const scale = isHovered ? "transform: scale(1.4); transform-origin: center;" : "";
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:${size}px;height:${size}px;${scale}opacity:${isHovered ? "0.9" : "0.45"};transition:transform 0.2s ease, opacity 0.2s ease;">
      <div style="position:absolute;inset:${isHovered ? 2 : 5}px;background:${cfg.color};border:${borderWidth}px solid ${borderColor};border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.18);display:flex;align-items:center;justify-content:center;font-size:${isHovered ? 16 : 14}px">${cfg.emoji}</div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const poiLabelIcon = (name: string, isHovered: boolean, isActive: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="background:white;padding:2px 8px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.15);font-size:11px;font-weight:600;color:#1a3a4a;white-space:nowrap;border:1.5px solid ${isHovered ? "#af5d32" : "transparent"};opacity:${isActive ? "1" : "0.55"};transition:border-color 0.2s ease, opacity 0.2s ease;">${name}</div>`,
    iconSize: [80, 20],
    iconAnchor: [-12, 10],
  });

function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  });
  return null;
}

export default function MapViewSection({
  allItems,
  markers = [],
  searchQuery,
  activeFilters,
  hoveredItem = null,
  onHoverEnter = () => {},
  onHoverLeave = () => {},
}: {
  allItems: FilterableItem[];
  markers?: MarkerLocation[];
  searchQuery: string;
  activeFilters: FilterTag[];
  hoveredItem?: string | null;
  onHoverEnter?: (markerId: string) => void;
  onHoverLeave?: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<POICategory>>(
    new Set(["attraction", "eat", "stay"])
  );
  const [zoom, setZoom] = useState(13);
  const [mobileView, setMobileView] = useState<"list" | "map">("map");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems = useMemo(() => {
    const pois: POIItem[] = [];
    for (const item of allItems) {
      const category = getItemCategory(item.type);
      if (!category || !item.markerId || !activeCategories.has(category)) continue;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.subtitle.toLowerCase().includes(q) &&
          !(item.tag || "").toLowerCase().includes(q)
        )
          continue;
      }
      if (activeFilters.length > 0) {
        if (!activeFilters.some((f) => item.filters.includes(f))) continue;
      }

      pois.push({
        id: item.id,
        markerId: item.markerId,
        name: item.name,
        category,
        hook: item.subtitle,
        tag: item.tag,
        href: item.href,
        imageSeed: item.imageSeed,
      });
    }
    return pois;
  }, [allItems, searchQuery, activeFilters, activeCategories]);

  const toggleCategory = useCallback((cat: POICategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }, []);

  const filteredMarkers = useMemo(() => {
    const visibleMarkerIds = new Set(filteredItems.map((item) => item.markerId));
    return markers
      .filter((marker) => visibleMarkerIds.has(marker.id))
      .map((marker) => ({
        ...marker,
        displayCategory:
          (["attraction", "eat", "stay"] as POICategory[]).find(
            (category) =>
              marker.categories.includes(category) &&
              filteredItems.some(
                (item) => item.markerId === marker.id && item.category === category
              )
          ) ?? marker.categories[0],
        isActive: marker.categories.some((category) => activeCategories.has(category)),
        primaryItem:
          filteredItems.find(
            (item) =>
              item.markerId === marker.id && activeCategories.has(item.category)
          ) ??
          filteredItems.find((item) => item.markerId === marker.id) ??
          null,
      }));
  }, [activeCategories, filteredItems, markers]);

  const groupPoisByCategory = useMemo(() => {
    const groups: Record<POICategory, POIItem[]> = {
      attraction: [],
      eat: [],
      stay: [],
    };
    for (const poi of filteredItems) {
      groups[poi.category].push(poi);
    }
    return (Object.keys(categoryConfig) as POICategory[])
      .filter((c) => activeCategories.has(c) && groups[c].length > 0)
      .map((c) => ({ category: c, pois: groups[c] }));
  }, [filteredItems, activeCategories]);

  useEffect(() => {
    if (!hoveredItem) return;
    const card = listRef.current?.querySelector(`[data-marker-id="${hoveredItem}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [hoveredItem]);

  if (!mounted) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-[#64748b]">
        Loading map…
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row -mx-4 md:-mx-0 md:rounded-2xl overflow-hidden border border-[#ebe4d8] bg-white" style={{ minHeight: 600 }}>
      {/* Left: POI List (desktop 35%) */}
      <div
        className={`${
          mobileView === "list" ? "flex" : "hidden md:flex"
        } md:w-[35%] w-full flex-col border-r border-[#ebe4d8] overflow-hidden`}
        style={{ maxHeight: 700 }}
      >
        <div className="p-3 border-b border-[#ebe4d8] bg-[#faf8f4]">
          <p className="text-xs text-[#64748b] font-medium">
            {filteredItems.length} places found
          </p>
        </div>
        <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-4">
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Search className="mx-auto text-[#64748b] mb-3" size={32} />
              <p className="text-sm text-[#1a3a4a] font-semibold mb-1">No matches</p>
              <p className="text-xs text-[#64748b]">Try adjusting filters or search</p>
            </div>
          )}
          {groupPoisByCategory.map((group) => {
            const cfg = categoryConfig[group.category];
            return (
              <div key={group.category}>
                <h3 className="text-xs font-bold text-[#1a3a4a] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>{cfg.emoji}</span>
                  {cfg.label}
                </h3>
                <div className="space-y-2">
                  {group.pois.map((poi) => (
                    <Link
                      key={poi.id}
                      href={poi.href}
                      className={`flex items-start gap-3 p-2.5 rounded-xl border-l-[3px] border-y border-r transition-all group ${
                        hoveredItem === poi.markerId
                          ? "bg-[#faf4ea] border-l-[#af5d32] border-y-[#ebe4d8] border-r-[#ebe4d8]"
                          : "border-l-transparent border-y-transparent border-r-transparent hover:bg-[#f5f1ea]"
                      }`}
                      onMouseEnter={() => onHoverEnter(poi.markerId)}
                      onMouseLeave={onHoverLeave}
                      data-marker-id={poi.markerId}
                    >
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#ebe4d8]">
                        {poi.imageSeed ? (
                          <Image
                            src={`https://picsum.photos/seed/${poi.imageSeed}/200/200`}
                            alt={poi.name}
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
                          {poi.name}
                        </h4>
                        {poi.tag && (
                          <span
                            className="inline-block text-[10px] font-semibold mt-0.5 px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: cfg.color + "15",
                              color: cfg.color,
                            }}
                          >
                            {poi.tag}
                          </span>
                        )}
                        <p className="text-xs text-[#64748b] line-clamp-2 mt-0.5">
                          {poi.hook}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Leaflet Map (desktop 65%) */}
      <div
        className={`${
          mobileView === "map" ? "flex" : "hidden md:flex"
        } md:w-[65%] w-full relative`}
        style={{ minHeight: 400 }}
      >
        <MapContainer
          center={[31.23, 121.47]}
          zoom={13}
          minZoom={11}
          maxZoom={18}
          scrollWheelZoom
          style={{ height: "100%", width: "100%", minHeight: 500 }}
        >
          <ZoomTracker onZoom={setZoom} />
          <TileLayer
            attribution="&copy; OSM &copy; CARTO"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Polygon
            positions={shanghaiBoundary}
            pathOptions={{
              fillColor: "#1a3a4a",
              fillOpacity: 0.05,
              color: "#1a3a4a",
              weight: 1.5,
              dashArray: "6, 6",
              opacity: 0.4,
            }}
          />
          {zoom >= 13 &&
            filteredMarkers.map((marker) => (
              <Marker
                key={`label-${marker.id}`}
                position={[marker.lat, marker.lng]}
                icon={poiLabelIcon(
                  marker.name,
                  hoveredItem === marker.id,
                  marker.isActive
                )}
                zIndexOffset={-100}
              />
            ))}
          {filteredMarkers.map((marker) => (
            <Marker
              key={`marker-${marker.id}`}
              position={[marker.lat, marker.lng]}
              icon={
                marker.isActive
                  ? poiMarkerIcon(marker.displayCategory, hoveredItem === marker.id)
                  : dimmedPoiMarkerIcon(
                      marker.displayCategory,
                      hoveredItem === marker.id
                    )
              }
              eventHandlers={{
                mouseover: () => onHoverEnter(marker.id),
                mouseout: onHoverLeave,
              }}
            >
              <Popup>
                <Link
                  href={marker.primaryItem?.href ?? "#"}
                  className="block no-underline"
                  style={{ minWidth: 200 }}
                >
                  <img
                    src={`https://picsum.photos/seed/${marker.primaryItem?.imageSeed ?? marker.id}/400/200`}
                    alt={marker.name}
                    style={{
                      width: "100%",
                      height: 100,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: 8,
                    }}
                  />
                  <div className="flex items-center gap-1.5">
                    <span style={{ fontSize: 16 }}>
                      {categoryConfig[marker.displayCategory].emoji}
                    </span>
                    <strong style={{ color: "#1a3a4a", fontSize: 14 }}>
                      {marker.name}
                    </strong>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#64748b",
                      margin: "4px 0",
                    }}
                  >
                    {marker.primaryItem?.hook ?? ""}
                  </p>
                  {marker.primaryItem?.tag && (
                    <span
                      style={{
                        fontSize: 11,
                        color: "#af5d32",
                        fontWeight: 600,
                      }}
                    >
                      {marker.primaryItem.tag}
                    </span>
                  )}
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#af5d32",
                    }}
                  >
                    Explore →
                  </div>
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Mobile floating toggle */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-[500]">
          <button
            onClick={() =>
              setMobileView((v) => (v === "map" ? "list" : "map"))
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-lg border border-[#ebe4d8] text-sm font-semibold text-[#1a3a4a]"
          >
            {mobileView === "map" ? (
              <>
                <List size={16} />
                Show List
              </>
            ) : (
              <>
                <Map size={16} />
                Show Map
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
