import metroLinesData from "./metro-lines.generated.json";
import type { MetroLine } from "../types";

// Chengdu Metro coordinates were extracted from OSM route relations.
// Chengdu extends lines quickly, so Line 5, 8, and 10 should be re-verified
// against the latest official network map when fresher OSM relations land.
export const metroLines: MetroLine[] = JSON.parse(JSON.stringify(metroLinesData));
