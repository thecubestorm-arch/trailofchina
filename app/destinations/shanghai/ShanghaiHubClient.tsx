"use client";

import CityHubTemplate from "@/components/CityHubTemplate/CityHubTemplate";
import { shanghaiConfig } from "./config";

export default function ShanghaiHubClient() {
  return <CityHubTemplate config={shanghaiConfig} />;
}
