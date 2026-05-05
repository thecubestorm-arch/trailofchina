import type { TransportHub } from "../types";

export const transportHubs: TransportHub[] = [
  {
    id: "xiy",
    name: "Xi'an Xianyang International Airport",
    shortName: "XIY",
    type: "airport",
    lat: 34.447,
    lng: 108.751,
  },
  {
    id: "xian-station",
    name: "Xi'an Railway Station",
    shortName: "Xi'an Stn",
    type: "train",
    lat: 34.268,
    lng: 108.962,
  },
  {
    id: "xian-north-station",
    name: "Xi'an North Railway Station",
    shortName: "North Stn",
    type: "train",
    lat: 34.355,
    lng: 108.976,
  },
  {
    id: "xian-south-station",
    name: "Xi'an South Railway Station",
    shortName: "South Stn",
    type: "train",
    lat: 34.098,
    lng: 109.007,
  },
];
