import type { TransportHub } from "../types";

export const transportHubs: TransportHub[] = [
  { id: "pek", name: "Beijing Capital Intl. Airport", shortName: "PEK", type: "airport", lat: 40.0799, lng: 116.6031 },
  { id: "pkx", name: "Beijing Daxing Intl. Airport", shortName: "PKX", type: "airport", lat: 39.5098, lng: 116.4105 },
  { id: "beijing-south", name: "Beijing South Station", shortName: "South Stn", type: "train", lat: 39.8653, lng: 116.3786 },
  { id: "beijing-west", name: "Beijing West Station", shortName: "West Stn", type: "train", lat: 39.8937, lng: 116.3216 },
  { id: "beijing-main", name: "Beijing Station", shortName: "Beijing Stn", type: "train", lat: 39.9027, lng: 116.4271 },
  { id: "beijing-north", name: "Beijing North Station", shortName: "North Stn", type: "train", lat: 39.9465, lng: 116.3539 },
  { id: "beijing-qinghe", name: "Qinghe Station", shortName: "Qinghe", type: "train", lat: 40.0380, lng: 116.3310 },
];
