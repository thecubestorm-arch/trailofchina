"use client";

import CityHubTemplate from "@/components/CityHubTemplate/CityHubTemplate";
import { shenzhenConfig } from "./config";

export default function ShenzhenHubClient() {
  return <CityHubTemplate config={shenzhenConfig} />;
}