'use client';

import CityHubTemplate from '@/components/CityHubTemplate/CityHubTemplate';
import { xianConfig } from './config';

export default function XianHubClient() {
  return <CityHubTemplate config={xianConfig} />;
}
