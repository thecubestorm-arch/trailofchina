import { Metadata } from 'next';
import ShanghaiPlannerClient from './ShanghaiPlannerClient';

export const metadata: Metadata = {
  title: 'Plan Your Shanghai Trip | Day-by-Day Guide | Trail of China',
  description: 'Plan your perfect Shanghai trip with day-by-day suggestions, time estimates, and budget info.',
};

export default function Shanghai7Page() {
  return <ShanghaiPlannerClient />;
}