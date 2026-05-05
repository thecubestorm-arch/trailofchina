"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMapEvents,
  Polyline,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, List, Map, Layers } from "lucide-react";
import { unifiedLocations, markers as beijingMarkers } from "../beijing/data/attractions";
import {
  beijingBoundary,
  beijingMaxBounds,
} from "../beijing/data/beijing-boundary";
import { metroLines } from "../beijing/data/metro-lines";
import { transportHubs } from "../beijing/data/transport-hubs";
import type { LayerVisibility, MarkerLocation } from "../beijing/types";

type POICategory = "attraction" | "eat" | "stay";
type CategoryView = "overview" | "things-to-do" | "where-to-eat" | "where-to-stay";
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
  { emoji: string; color: string; label: string; shortLabel: string }
> = {
  attraction: {
    emoji: "🏛️",
    color: "#af5d32",
    label: "Attractions",
    shortLabel: "Things to Do",
  },
  eat: { emoji: "🍜", color: "#f97316", label: "Food", shortLabel: "Food" },
  stay: { emoji: "🏨", color: "#3b82f6", label: "Stay", shortLabel: "Stay" },
};

const getItemCategory = (itemType: FilterableItem["type"]): POICategory | null => {
  if (itemType === "food") return "eat";
  if (itemType === "attraction" || itemType === "stay") return itemType;
  return null;
};

const viewToCategories: Record<CategoryView, POICategory[]> = {
  overview: ["attraction", "eat", "stay"],
  "things-to-do": ["attraction"],
  "where-to-eat": ["eat"],
  "where-to-stay": ["stay"],
};

const categoryFilterButtons: { id: CategoryView; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "things-to-do", label: "Things to Do" },
  { id: "where-to-eat", label: "Where to Eat" },
  { id: "where-to-stay", label: "Where to Stay" },
];

const viewHighlightCategory: Partial<Record<CategoryView, POICategory>> = {
  "things-to-do": "attraction",
  "where-to-eat": "eat",
  "where-to-stay": "stay",
};

const poiMarkerIcon = (
  categories: POICategory[],
  highlightedCategory: POICategory | null,
  name: string,
  showLabel: boolean,
  isHovered: boolean,
  isDimmed: boolean
) => {
  const visibleCategories: POICategory[] =
    categories.length > 0 ? categories : ["attraction"];
  const pillCount = visibleCategories.length;
  const pillSize = isHovered ? 30 : 24;
  const gap = 4;
  const pillsWidth = pillCount * pillSize + Math.max(0, pillCount - 1) * gap;
  const labelGap = showLabel ? 4 : 0;
  const labelHorizontalPadding = 16;
  const estimatedLabelTextWidth = Math.max(36, Math.ceil(name.length * 6.4));
  const labelWidth = showLabel
    ? estimatedLabelTextWidth + labelHorizontalPadding
    : 0;
  const width = pillsWidth + 10 + labelGap + labelWidth;
  const height = pillSize + 10;
  const borderColor = isHovered ? "#af5d32" : "white";
  const borderWidth = isHovered ? 2.5 : 2;
  const opacity = isDimmed ? (isHovered ? 0.85 : 0.45) : 1;
  const scale = isHovered ? "scale(1.08)" : "scale(1)";

  const pills = visibleCategories
    .map((category) => {
      const cfg = categoryConfig[category];
      const isHighlighted = highlightedCategory === null || highlightedCategory === category;
      return `<div style="width:${pillSize}px;height:${pillSize}px;background:${cfg.color};border:${borderWidth}px solid ${borderColor};border-radius:999px;box-shadow:0 2px 6px rgba(0,0,0,0.22);display:flex;align-items:center;justify-content:center;font-size:${isHovered ? 14 : 13}px;line-height:1;opacity:${isHighlighted ? 1 : 0.4};transform:${isHighlighted ? "scale(1)" : "scale(0.94)"};transition:opacity 0.2s ease, transform 0.2s ease;">${cfg.emoji}</div>`;
    })
    .join("");

  const labelHtml = showLabel
    ? `<div style="background:white;padding:2px 8px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.15);font-size:11px;font-weight:600;color:#1a3a4a;white-space:nowrap;border:1.5px solid ${isHovered ? "#af5d32" : "transparent"};opacity:${opacity};transition:border-color 0.2s ease, opacity 0.2s ease;">${name}</div>`
    : "";

  return L.divIcon({
    className: "",
    html: `<div style="width:${width}px;height:${height}px;display:flex;align-items:center;justify-content:flex-start;opacity:${opacity};transform:${scale};transform-origin:center;transition:transform 0.2s ease, opacity 0.2s ease;">
      <div style="display:flex;align-items:center;gap:${labelGap}px;padding:5px;">
        <div style="display:flex;align-items:center;gap:${gap}px;">${pills}</div>
        ${labelHtml}
      </div>
    </div>`,
    iconSize: [width, height],
    iconAnchor: [width / 2, height / 2],
  });
};

function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  });
  return null;
}

function createTransportIcon(type: "airport" | "train"): L.DivIcon {
  if (type === "airport") {
    return L.divIcon({
      className: "",
      html: `<div style="background:white;border:2px solid #1a3a4a;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.2);font-size:18px;">✈️</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
  }
  return L.divIcon({
    className: "",
    html: `<div style="background:white;border:2px solid #1a3a4a;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.2);font-size:16px;">🚉</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

export default function MapViewSection({
  allItems,
  markers = beijingMarkers,
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
  const [activeView, setActiveView] = useState<CategoryView>("overview");
  const [zoom, setZoom] = useState(10);
  const [mobileView, setMobileView] = useState<"list" | "map">("map");
  const [layerVisibility, setLayerVisibility] = useState<LayerVisibility>({
    metroLines: true,
    metroStations: false,
    trainStations: true,
    airports: true,
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeCategories = useMemo(
    () => new Set(viewToCategories[activeView]),
    [activeView]
  );

  const matchedItems = useMemo(() => {
    const pois: POIItem[] = [];
    for (const item of allItems) {
      const category = getItemCategory(item.type);
      if (!category || !item.markerId) continue;

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
  }, [allItems, searchQuery, activeFilters]);

  const filteredItems = useMemo(
    () =>
      matchedItems.filter((item) => activeCategories.has(item.category)),
    [matchedItems, activeCategories]
  );

  const filteredMarkers = useMemo(() => {
    const itemsByMarker = matchedItems.reduce<Record<string, POIItem[]>>(
      (acc, item) => {
        if (!acc[item.markerId]) acc[item.markerId] = [];
        acc[item.markerId].push(item);
        return acc;
      },
      {}
    );
    const highlightedCategory = viewHighlightCategory[activeView] ?? null;

    return markers
      .map((marker) => {
        const markerItems = itemsByMarker[marker.id] ?? [];
        const visibleCategories = marker.categories.filter((category) =>
          markerItems.some((item) => item.category === category)
        );
        const activeMarkerCategories = visibleCategories.filter((category) =>
          activeCategories.has(category)
        );
        const primaryItem =
          markerItems.find(
            (item) =>
              item.category === highlightedCategory &&
              activeCategories.has(item.category)
          ) ??
          markerItems.find((item) => activeCategories.has(item.category)) ??
          markerItems[0] ??
          null;

        return {
          ...marker,
          displayCategories: visibleCategories,
          activeMarkerCategories,
          highlightCategory:
            highlightedCategory &&
            visibleCategories.includes(highlightedCategory)
              ? highlightedCategory
              : null,
          primaryItem,
        };
      })
      .filter((marker) => marker.activeMarkerCategories.length > 0)
      .map((marker) => ({
        ...marker,
      }));
  }, [activeCategories, activeView, markers, matchedItems]);

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
    const container = listRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(`[data-marker-id="${hoveredItem}"]`)
    );
    if (cards.length === 0) return;

    const cardToScroll =
      cards.length === 1
        ? cards[0]
        : cards.reduce((closestCard, currentCard) => {
            const currentDistance = Math.abs(
              currentCard.offsetTop - container.scrollTop
            );
            const closestDistance = Math.abs(
              closestCard.offsetTop - container.scrollTop
            );
            return currentDistance < closestDistance ? currentCard : closestCard;
          });

    cardToScroll.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [hoveredItem]);

  if (!mounted) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-[#64748b]">
        Loading map…
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative z-40 flex flex-wrap gap-2">
        {categoryFilterButtons.map((filter) => {
          const isActive = activeView === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveView(filter.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-[#af5d32] bg-[#af5d32] text-white"
                  : "border-[#d9c8b5] bg-white text-[#1a3a4a] hover:border-[#af5d32]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="relative z-0 flex flex-col md:flex-row -mx-4 md:-mx-0 md:rounded-2xl overflow-hidden border border-[#ebe4d8] bg-white" style={{ minHeight: 600 }}>
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
                          : "border-l-transparent border-y-transparent border-r-transparent hover:border-l-[#af5d32] hover:border-y-[#ebe4d8] hover:border-r-[#ebe4d8] hover:bg-[#faf4ea]"
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
        } md:w-[65%] w-full relative z-0 overflow-hidden`}
        style={{ minHeight: 400 }}
      >
        <MapContainer
          center={[39.9042, 116.4074]}
          zoom={10}
          className="beijing-hub-map z-0"
          bounds={beijingMaxBounds}
          minZoom={10}
          maxZoom={18}
          maxBounds={beijingMaxBounds}
          maxBoundsViscosity={0.9}
          scrollWheelZoom
          style={{ height: "100%", width: "100%", minHeight: 500 }}
        >
          <ZoomTracker onZoom={setZoom} />
          <TileLayer
            attribution="&copy; OSM &copy; CARTO"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Polygon
            positions={beijingBoundary}
            pathOptions={{
              fillColor: "#1a3a4a",
              fillOpacity: 0.05,
              color: "#af5d32",
              weight: 2,
              opacity: 0.6,
            }}
          />
          {layerVisibility.metroLines &&
            metroLines.map((line) => (
              <Polyline
                key={line.id}
                positions={line.path}
                pathOptions={{ color: line.color, weight: 3, opacity: 0.7 }}
              />
            ))}
          {layerVisibility.metroStations &&
            metroLines.flatMap((line) =>
              line.stations.map((station) => (
                <CircleMarker
                  key={`${line.id}-${station.name}`}
                  center={[station.lat, station.lng]}
                  radius={3}
                  pathOptions={{
                    color: line.color,
                    fillColor: "white",
                    fillOpacity: 1,
                    weight: 1.5,
                  }}
                />
              ))
            )}
          {layerVisibility.trainStations &&
            transportHubs
              .filter((hub) => hub.type === "train")
              .map((hub) => (
                <Marker
                  key={hub.id}
                  position={[hub.lat, hub.lng]}
                  icon={createTransportIcon("train")}
                />
              ))}
          {layerVisibility.airports &&
            transportHubs
              .filter((hub) => hub.type === "airport")
              .map((hub) => (
                <Marker
                  key={hub.id}
                  position={[hub.lat, hub.lng]}
                  icon={createTransportIcon("airport")}
                />
              ))}
          {filteredMarkers.map((marker) => (
            <Marker
                key={`marker-${marker.id}`}
                position={[marker.lat, marker.lng]}
                icon={poiMarkerIcon(
                  marker.displayCategories,
                  marker.highlightCategory,
                  marker.name,
                  zoom >= 13,
                  hoveredItem === marker.id,
                  marker.activeMarkerCategories.length === 0
                )}
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
                    <strong style={{ color: "#1a3a4a", fontSize: 14 }}>
                      {marker.name}
                    </strong>
                  </div>
                  {marker.displayCategories.length > 0 && (
                    <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                      {marker.displayCategories.map((category) => (
                        <span
                          key={category}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "2px 8px",
                            borderRadius: 999,
                            backgroundColor:
                              marker.highlightCategory === null ||
                              marker.highlightCategory === category
                                ? `${categoryConfig[category].color}15`
                                : "#f8fafc",
                            color:
                              marker.highlightCategory === null ||
                              marker.highlightCategory === category
                                ? categoryConfig[category].color
                                : "#94a3b8",
                            fontSize: 11,
                            fontWeight: 600,
                            border:
                              marker.highlightCategory === category
                                ? `1px solid ${categoryConfig[category].color}40`
                                : "1px solid #e2e8f0",
                            opacity:
                              marker.highlightCategory === null ||
                              marker.highlightCategory === category
                                ? 1
                                : 0.75,
                          }}
                        >
                          <span>{categoryConfig[category].emoji}</span>
                          <span>{categoryConfig[category].shortLabel}</span>
                        </span>
                      ))}
                    </div>
                  )}
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

        <div className="absolute right-3 top-3 z-[500]">
          <button
            type="button"
            onClick={() => setPanelOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ebe4d8] bg-white shadow-md transition-colors hover:bg-[#f5f1ea]"
            aria-label="Map layers"
          >
            <Layers size={18} className="text-[#1a3a4a]" />
          </button>
          {panelOpen && (
            <div className="absolute right-0 top-11 min-w-[190px] rounded-lg border border-[#ebe4d8] bg-white p-3 shadow-lg">
              <p className="mb-2 text-xs font-bold text-[#1a3a4a]">Map Layers</p>
              <label className="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-[#1a3a4a]">
                <input
                  type="checkbox"
                  checked={layerVisibility.metroLines}
                  onChange={() =>
                    setLayerVisibility((layers) => ({
                      ...layers,
                      metroLines: !layers.metroLines,
                    }))
                  }
                  className="accent-[#af5d32]"
                />
                🚇 Metro Lines
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-[#1a3a4a]">
                <input
                  type="checkbox"
                  checked={layerVisibility.metroStations}
                  onChange={() =>
                    setLayerVisibility((layers) => ({
                      ...layers,
                      metroStations: !layers.metroStations,
                    }))
                  }
                  className="accent-[#af5d32]"
                />
                🚉 Metro Stations
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-[#1a3a4a]">
                <input
                  type="checkbox"
                  checked={layerVisibility.trainStations}
                  onChange={() =>
                    setLayerVisibility((layers) => ({
                      ...layers,
                      trainStations: !layers.trainStations,
                    }))
                  }
                  className="accent-[#af5d32]"
                />
                🚂 Train Stations
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-[#1a3a4a]">
                <input
                  type="checkbox"
                  checked={layerVisibility.airports}
                  onChange={() =>
                    setLayerVisibility((layers) => ({
                      ...layers,
                      airports: !layers.airports,
                    }))
                  }
                  className="accent-[#af5d32]"
                />
                ✈️ Airports
              </label>
            </div>
          )}
        </div>

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
      <style jsx global>{`
        .beijing-hub-map,
        .beijing-hub-map.leaflet-container {
          z-index: 0;
        }

        .beijing-hub-map .leaflet-pane {
          z-index: 1;
        }

        .beijing-hub-map .leaflet-top,
        .beijing-hub-map .leaflet-bottom {
          z-index: 2;
        }
      `}</style>
      </div>
    </div>
  );
}
