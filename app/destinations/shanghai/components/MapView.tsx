"use client";

import { MapContainer, TileLayer, Polygon, useMapEvents } from "react-leaflet";
import { shanghaiBoundary, shanghaiMaxBounds } from "../data/shanghai-boundary";
import MapMarkers from "./MapMarkers";
import MapLayers from "./MapLayers";
import MapControls from "./MapControls";
import type { UnifiedLocation, LayerVisibility, CategoryKey } from "../types";

interface MapViewProps {
  locations: UnifiedLocation[];
  activeCategories: Set<CategoryKey>;
  hoveredItemId: string | null;
  onHoverItem: (id: string | null) => void;
  layerVisibility: LayerVisibility;
  onLayerChange: (layers: LayerVisibility) => void;
}

function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  });
  return null;
}

export default function MapView({
  locations,
  activeCategories,
  hoveredItemId,
  onHoverItem,
  layerVisibility,
  onLayerChange,
}: MapViewProps) {
  return (
    <MapContainer
      center={[31.23, 121.47]}
      zoom={12}
      minZoom={10}
      maxZoom={18}
      maxBounds={shanghaiMaxBounds}
      maxBoundsViscosity={0.9}
      scrollWheelZoom
      style={{ height: "100%", width: "100%", minHeight: 500 }}
    >
      <ZoomTracker onZoom={() => {}} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Polygon
        positions={shanghaiBoundary}
        pathOptions={{
          fillColor: "#1a3a4a",
          fillOpacity: 0.04,
          color: "#af5d32",
          weight: 1.5,
          opacity: 0.4,
        }}
      />
      <MapMarkers
        locations={locations}
        activeCategories={activeCategories}
        hoveredItemId={hoveredItemId}
        onHoverItem={onHoverItem}
      />
      <MapLayers layerVisibility={layerVisibility} />
      <MapControls
        layerVisibility={layerVisibility}
        onLayerChange={onLayerChange}
      />
    </MapContainer>
  );
}