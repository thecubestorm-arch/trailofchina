"use client";

import dynamic from "next/dynamic";
import { chongqingConfig } from "./config";

const CityHubTemplate = dynamic(
  () => import("@/components/CityHubTemplate/CityHubTemplate"),
  { ssr: false }
);

export default function ChongqingHubClient() {
  return <CityHubTemplate config={chongqingConfig} />;
}