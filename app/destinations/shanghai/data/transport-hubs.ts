import type { TransportHub } from "../types";

export const transportHubs: TransportHub[] = [
  {
    id: "pvg",
    name: "Shanghai Pudong Intl. Airport",
    shortName: "PVG",
    type: "airport",
    lat: 31.1443,
    lng: 121.8083,
  },
  {
    id: "sha",
    name: "Shanghai Hongqiao Airport",
    shortName: "SHA",
    type: "airport",
    lat: 31.1979,
    lng: 121.3363,
  },
  {
    id: "shanghai-station",
    name: "Shanghai Station",
    shortName: "Shanghai Stn",
    type: "train",
    lat: 31.2497,
    lng: 121.4581,
  },
  {
    id: "hongqiao-station",
    name: "Shanghai Hongqiao Station",
    shortName: "Hongqiao Stn",
    type: "train",
    lat: 31.1949,
    lng: 121.3200,
  },
  {
    id: "south-station",
    name: "Shanghai South Station",
    shortName: "South Stn",
    type: "train",
    lat: 31.1546,
    lng: 121.4319,
  },
];