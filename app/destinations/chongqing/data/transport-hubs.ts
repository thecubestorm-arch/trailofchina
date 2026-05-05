import type { TransportHub } from "@/components/CityHubTemplate/types";

export const transportHubs: TransportHub[] = [
  {
    id: "ckg-airport",
    name: "Chongqing Jiangbei International Airport",
    shortName: "CKG",
    lat: 29.719,
    lng: 106.641,
    type: "airport",
  },
  {
    id: "chongqing-north-station",
    name: "Chongqing North Railway Station",
    shortName: "Chongqing North",
    lat: 29.604,
    lng: 106.551,
    type: "train",
  },
  {
    id: "chongqing-west-station",
    name: "Chongqing West Railway Station",
    shortName: "Chongqing West",
    lat: 29.501,
    lng: 106.433,
    type: "train",
  },
  {
    id: "chongqing-station",
    name: "Chongqing Railway Station",
    shortName: "Chongqing Station",
    lat: 29.553,
    lng: 106.555,
    type: "train",
  },
];