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
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#af5d32] text-white font-semibold rounded-xl hover:bg-[#9a4f28] transition-colors"
          >
            Back to Home
          </Link>
          <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            <Link href="/china-basics" className="rounded-full border border-[#ebe4d8] px-4 py-2 text-sm font-medium text-[#1a3a4a] hover:border-[#af5d32] hover:text-[#af5d32] transition-colors">
              China Basics
            </Link>
            <Link href="/destinations" className="rounded-full border border-[#ebe4d8] px-4 py-2 text-sm font-medium text-[#1a3a4a] hover:border-[#af5d32] hover:text-[#af5d32] transition-colors">
              Destinations
            </Link>
            <Link href="/plan-your-trip" className="rounded-full border border-[#ebe4d8] px-4 py-2 text-sm font-medium text-[#1a3a4a] hover:border-[#af5d32] hover:text-[#af5d32] transition-colors">
              Plan Your Trip
            </Link>
            <Link href="/blog" className="rounded-full border border-[#ebe4d8] px-4 py-2 text-sm font-medium text-[#1a3a4a] hover:border-[#af5d32] hover:text-[#af5d32] transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
