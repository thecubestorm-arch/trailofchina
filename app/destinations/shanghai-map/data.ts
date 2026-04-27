// Shanghai Metro data for tourist Leaflet map overlay
// Lines: 1, 2, 7, 8, 9, 10, 12, 13 + Maglev
// ~40 key stations covering all major tourist areas
// Coordinates sourced from Wikipedia, latitude.to, and official metro data

export interface MetroStation {
  name: string;
  lat: number;
  lng: number;
}

export interface MetroLine {
  id: string;
  name: string;
  color: string;
  stations: MetroStation[];
}

export const metroLines: MetroLine[] = [
  // Line 1 — Red (north-south spine through downtown)
  {
    id: "L1",
    name: "Line 1",
    color: "#E3002B",
    stations: [
      { name: "Xinzhuang", lat: 31.1118, lng: 121.3826 },
      { name: "Xujiahui", lat: 31.1956, lng: 121.4379 },
      { name: "Changshu Road", lat: 31.2150, lng: 121.4460 },
      { name: "South Shaanxi Road", lat: 31.2189, lng: 121.4540 },
      { name: "People's Square", lat: 31.2304, lng: 121.4737 },
      { name: "Shanghai Railway Station", lat: 31.2500, lng: 121.4503 },
      { name: "North Zhongshan Road", lat: 31.2648, lng: 121.4633 },
      { name: "Gongkang Road", lat: 31.3200, lng: 121.4400 },
    ],
  },

  // Line 2 — Light Green (east-west, connects both airports)
  {
    id: "L2",
    name: "Line 2",
    color: "#8CC220",
    stations: [
      { name: "East Xujing", lat: 31.1823, lng: 121.2691 },
      { name: "Hongqiao Airport T2", lat: 31.1940, lng: 121.3200 },
      { name: "Jing'an Temple", lat: 31.2231, lng: 121.4462 },
      { name: "People's Square", lat: 31.2304, lng: 121.4737 },
      { name: "East Nanjing Road", lat: 31.2381, lng: 121.4846 },
      { name: "Lujiazui", lat: 31.2382, lng: 121.5023 },
      { name: "Century Avenue", lat: 31.2280, lng: 121.5350 },
      { name: "Longyang Road", lat: 31.2031, lng: 121.5569 },
      { name: "Pudong Airport T1&T2", lat: 31.1500, lng: 121.8000 },
    ],
  },

  // Line 7 — Orange (northwest to southeast)
  {
    id: "L7",
    name: "Line 7",
    color: "#F58F1A",
    stations: [
      { name: "Meilan Lake", lat: 31.3900, lng: 121.3500 },
      { name: "Shanghai University", lat: 31.3200, lng: 121.4000 },
      { name: "Changshou Road", lat: 31.2400, lng: 121.4400 },
      { name: "Jing'an Temple", lat: 31.2231, lng: 121.4462 },
      { name: "Changshu Road", lat: 31.2150, lng: 121.4460 },
      { name: "West Yingao Road", lat: 31.3200, lng: 121.4800 },
      { name: "Huamu Road", lat: 31.2000, lng: 121.5500 },
    ],
  },

  // Line 8 — Blue (north-south through Expo area)
  {
    id: "L8",
    name: "Line 8",
    color: "#009EDA",
    stations: [
      { name: "Shiguang Road", lat: 31.2800, lng: 121.4800 },
      { name: "Tibet North Road", lat: 31.2500, lng: 121.4700 },
      { name: "People's Square", lat: 31.2304, lng: 121.4737 },
      { name: "Dashijie", lat: 31.2320, lng: 121.4800 },
      { name: "Laoximen", lat: 31.2200, lng: 121.4800 },
      { name: "South Xizang Road", lat: 31.2100, lng: 121.4900 },
      { name: "Chengshan Road", lat: 31.1800, lng: 121.5000 },
      { name: "Shendu Highway", lat: 31.1000, lng: 121.6000 },
    ],
  },

  // Line 9 — Light Blue (southwest to northeast)
  {
    id: "L9",
    name: "Line 9",
    color: "#69CCF0",
    stations: [
      { name: "Songjiang South Railway Station", lat: 31.0000, lng: 121.2200 },
      { name: "Qibao", lat: 31.1500, lng: 121.3500 },
      { name: "Xujiahui", lat: 31.1956, lng: 121.4379 },
      { name: "Dapuqiao", lat: 31.2075, lng: 121.4639 },
      { name: "Madang Road", lat: 31.2100, lng: 121.4700 },
      { name: "Lujiabang Road", lat: 31.2100, lng: 121.5000 },
      { name: "Century Avenue", lat: 31.2280, lng: 121.5350 },
      { name: "Yanggao Middle Road", lat: 31.2200, lng: 121.5500 },
      { name: "Caolu", lat: 31.2500, lng: 121.6500 },
    ],
  },

  // Line 10 — Lilac (northwest loop + spur to Hongqiao)
  {
    id: "L10",
    name: "Line 10",
    color: "#C7A4D6",
    stations: [
      { name: "Hongqiao Airport T1", lat: 31.1900, lng: 121.3300 },
      { name: "Hongqiao Railway Station", lat: 31.1900, lng: 121.3100 },
      { name: "Jiaotong University", lat: 31.2000, lng: 121.4300 },
      { name: "Shanghai Library", lat: 31.2100, lng: 121.4400 },
      { name: "South Shaanxi Road", lat: 31.2189, lng: 121.4540 },
      { name: "Xintiandi", lat: 31.2200, lng: 121.4700 },
      { name: "Yuyuan Garden", lat: 31.2303, lng: 121.4820 },
      { name: "East Nanjing Road", lat: 31.2381, lng: 121.4846 },
      { name: "Tiantong Road", lat: 31.2400, lng: 121.4700 },
      { name: "Xinjiangwancheng", lat: 31.3200, lng: 121.5000 },
    ],
  },

  // Line 12 — Green (northwest to northeast)
  {
    id: "L12",
    name: "Line 12",
    color: "#007A5E",
    stations: [
      { name: "Qixin Road", lat: 31.1500, lng: 121.3500 },
      { name: "Hongmei Road", lat: 31.1500, lng: 121.4000 },
      { name: "Longcao Road", lat: 31.1700, lng: 121.4300 },
      { name: "South Shaanxi Road", lat: 31.2189, lng: 121.4540 },
      { name: "Qufu Road", lat: 31.2400, lng: 121.4700 },
      { name: "Tiantong Road", lat: 31.2400, lng: 121.4700 },
      { name: "Dalian Road", lat: 31.2600, lng: 121.5100 },
      { name: "Jufeng Road", lat: 31.2800, lng: 121.5500 },
    ],
  },

  // Line 13 — Pink (northwest to southeast)
  {
    id: "L13",
    name: "Line 13",
    color: "#EF90A4",
    stations: [
      { name: "Jinyun Road", lat: 31.2200, lng: 121.3500 },
      { name: "Fengzhuang", lat: 31.2400, lng: 121.3600 },
      { name: "Jinshajiang Road", lat: 31.2300, lng: 121.4000 },
      { name: "Longde Road", lat: 31.2200, lng: 121.4200 },
      { name: "Changshou Road", lat: 31.2400, lng: 121.4400 },
      { name: "Natural History Museum", lat: 31.2300, lng: 121.4600 },
      { name: "West Nanjing Road", lat: 31.2300, lng: 121.4500 },
      { name: "Middle Huaihai Road", lat: 31.2200, lng: 121.4600 },
      { name: "Xintiandi", lat: 31.2200, lng: 121.4700 },
      { name: "Madang Road", lat: 31.2100, lng: 121.4700 },
      { name: "Shibo Avenue", lat: 31.1800, lng: 121.4800 },
      { name: "Zhangjiang Road", lat: 31.2000, lng: 121.6000 },
    ],
  },

  // Maglev — Magenta/Teal (Pudong Airport express)
  {
    id: "MAG",
    name: "Maglev",
    color: "#008B9A",
    stations: [
      { name: "Longyang Road", lat: 31.2031, lng: 121.5569 },
      { name: "Pudong Airport", lat: 31.1500, lng: 121.8000 },
    ],
  },
];

// Simplified Shanghai municipal boundary polygon
// A rough ~16-point outline of Shanghai city limits for map context.
// Does not include all islands — simplified for performance.
export const shanghaiBoundary: [number, number][] = [
  [31.867, 121.100], // NW — Chongming Island
  [31.850, 121.500], // N  — Baoshan coast
  [31.520, 122.050], // NE — near PVG
  [31.000, 122.150], // E  — southern coast
  [30.720, 121.920], // SE — Hangzhou Bay
  [30.700, 121.400], // S  — Jinshan
  [30.900, 121.050], // SW — Zhejiang border
  [31.150, 121.000], // W  — Songjiang / Qingpu
  [31.450, 121.050], // NW — back toward Chongming
  [31.867, 121.100], // close loop
];

// Tourist attractions with nearest metro stations (for reference / POI layer)
export const touristAttractions = [
  { name: "The Bund", lat: 31.2397, lng: 121.4998, nearestStation: "East Nanjing Road" },
  { name: "Yu Garden", lat: 31.2272, lng: 121.4921, nearestStation: "Yuyuan Garden" },
  { name: "Oriental Pearl Tower", lat: 31.2397, lng: 121.4998, nearestStation: "Lujiazui" },
  { name: "Shanghai Tower", lat: 31.2304, lng: 121.5050, nearestStation: "Lujiazui" },
  { name: "Jing'an Temple", lat: 31.2235, lng: 121.4460, nearestStation: "Jing'an Temple" },
  { name: "Xintiandi", lat: 31.2200, lng: 121.4750, nearestStation: "Xintiandi" },
  { name: "Tianzifang", lat: 31.2100, lng: 121.4650, nearestStation: "Dapuqiao" },
  { name: "People's Square", lat: 31.2304, lng: 121.4737, nearestStation: "People's Square" },
  { name: "French Concession", lat: 31.2150, lng: 121.4550, nearestStation: "South Shaanxi Road" },
  { name: "Pudong Airport", lat: 31.1500, lng: 121.8000, nearestStation: "Pudong Airport T1&T2" },
  { name: "Shanghai Railway Station", lat: 31.2500, lng: 121.4503, nearestStation: "Shanghai Railway Station" },
];

// Default map center (People's Square area)
export const defaultCenter: [number, number] = [31.2304, 121.4737];
export const defaultZoom = 12;
