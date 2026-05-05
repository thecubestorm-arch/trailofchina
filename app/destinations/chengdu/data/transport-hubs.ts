import type { TransportHub } from "../types";

export const transportHubs: TransportHub[] = [
  {
    id: "ctu",
    name: "Chengdu Shuangliu International Airport",
    shortName: "CTU",
    type: "airport",
    lat: 30.578,
    lng: 103.947,
  },
  {
    id: "tfu",
    name: "Chengdu Tianfu International Airport",
    shortName: "TFU",
    type: "airport",
    lat: 30.312,
    lng: 104.076,
  },
  {
    id: "chengdu-station",
    name: "Chengdu Railway Station",
    shortName: "Chengdu Stn",
    type: "train",
    lat: 30.682,
    lng: 104.071,
  },
  {
    id: "chengdu-east-station",
    name: "Chengdu East Railway Station",
    shortName: "East Stn",
    type: "train",
    lat: 30.63,
    lng: 104.138,
  },
  {
    id: "chengdu-south-station",
    name: "Chengdu South Railway Station",
    shortName: "South Stn",
    type: "train",
    lat: 30.61,
    lng: 104.068,
  },
];
