import metroLinesData from "./metro-lines.generated.json";
import type { MetroLine } from "@/components/CityHubTemplate/types";

// Chongqing Rail Transit (CRT) lines from OSM route relations.
// Includes both heavy rail and monorail lines (Lines 2 and 3 are monorail).
export const metroLines: MetroLine[] = JSON.parse(JSON.stringify(metroLinesData));
