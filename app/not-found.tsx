import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <MapPin className="mx-auto text-[#af5d32] mb-6" size={64} />
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-4">Lost in China?</h1>
        <p className="text-lg text-[#64748b] mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist — but China has plenty of real places to explore.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#af5d32] text-white font-semibold rounded-xl hover:bg-[#9a4f28] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}