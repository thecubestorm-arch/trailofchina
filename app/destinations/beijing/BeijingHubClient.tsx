"use client";

import CityHubTemplate from "@/components/CityHubTemplate/CityHubTemplate";
import { beijingConfig } from "./config";

export default function BeijingHubClient() {
  return <CityHubTemplate config={beijingConfig} />;
}
