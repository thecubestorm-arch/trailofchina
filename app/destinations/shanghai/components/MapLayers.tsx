"use client";

import { Polyline, Marker, CircleMarker } from "react-leaflet";
import L from "leaflet";
import { metroLines } from "../data/metro-lines";
import { transportHubs } from "../data/transport-hubs";
import type { LayerVisibility } from "../types";

interface MapLayersProps {
  layerVisibility: LayerVisibility;
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

export default function MapLayers({ layerVisibility }: MapLayersProps) {
  return (
    <>
      {/* Metro Lines */}
      {layerVisibility.metroLines &&
        metroLines.map((line) => (
          <Polyline
            key={line.id}
            positions={line.path}
            pathOptions={{
              color: line.color,
              weight: 3,
              opacity: 0.7,
            }}
          />
        ))}

      {/* Metro Stations */}
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

      {/* Transport Hubs */}
      {layerVisibility.trainStations &&
        transportHubs
          .filter((h) => h.type === "train")
          .map((hub) => (
            <Marker
              key={hub.id}
              position={[hub.lat, hub.lng]}
              icon={createTransportIcon("train")}
            >
              {/* Using tooltip for label instead of popup for non-intrusive display */}
            </Marker>
          ))}

      {layerVisibility.airports &&
        transportHubs
          .filter((h) => h.type === "airport")
          .map((hub) => (
            <Marker
              key={hub.id}
              position={[hub.lat, hub.lng]}
              icon={createTransportIcon("airport")}
            />
          ))}
    </>
  );
}