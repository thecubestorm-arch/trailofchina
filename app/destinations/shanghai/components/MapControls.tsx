"use client";

import { useState } from "react";
import { useMap } from "react-leaflet";
import { Layers, Navigation } from "lucide-react";
import type { LayerVisibility } from "../types";

interface MapControlsProps {
  layerVisibility: LayerVisibility;
  onLayerChange: (layers: LayerVisibility) => void;
}

function NorthArrow() {
  const map = useMap();
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        width: 40,
        height: 40,
        background: "white",
        borderRadius: "50%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#1a3a4a" strokeWidth="1.5" fill="white" />
        <polygon points="12,2 15,14 12,11 9,14" fill="#1a3a4a" />
        <polygon points="12,22 9,14 12,17 15,14" fill="#ccc" stroke="#1a3a4a" strokeWidth="0.5" />
        <text x="12" y="8" textAnchor="middle" fontSize="5" fontWeight="bold" fill="white">N</text>
      </svg>
    </div>
  );
}

export default function MapControls({
  layerVisibility,
  onLayerChange,
}: MapControlsProps) {
  const [panelOpen, setPanelOpen] = useState(false);

  const toggle = (key: keyof LayerVisibility) => {
    onLayerChange({ ...layerVisibility, [key]: !layerVisibility[key] });
  };

  const layers = [
    { key: "metroLines" as const, label: "🚇 Metro Lines", default: true },
    { key: "metroStations" as const, label: "🚉 Metro Stations", default: false },
    { key: "trainStations" as const, label: "🚂 Train Stations", default: true },
    { key: "airports" as const, label: "✈️ Airports", default: true },
  ];

  return (
    <>
      <NorthArrow />
      {/* Layer toggle button */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-md border border-[#ebe4d8] hover:bg-[#f5f1ea] transition-colors"
          title="Map layers"
        >
          <Layers size={18} className="text-[#1a3a4a]" />
        </button>
        {panelOpen && (
          <div className="absolute top-11 right-0 bg-white rounded-lg shadow-lg border border-[#ebe4d8] p-3 min-w-[180px]">
            <p className="text-xs font-bold text-[#1a3a4a] mb-2">Map Layers</p>
            {layers.map((layer) => (
              <label
                key={layer.key}
                className="flex items-center gap-2 py-1.5 cursor-pointer text-sm text-[#1a3a4a]"
              >
                <input
                  type="checkbox"
                  checked={layerVisibility[layer.key]}
                  onChange={() => toggle(layer.key)}
                  className="accent-[#af5d32]"
                />
                {layer.label}
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
}