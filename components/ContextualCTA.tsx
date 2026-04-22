'use client';

import Link from 'next/link';

interface ContextualCTAProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary';
}

export default function ContextualCTA({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'primary',
}: ContextualCTAProps) {
  const isPrimary = variant === 'primary';

  return (
    <div
      className={`rounded-xl p-6 md:p-8 ${
        isPrimary
          ? 'bg-[#af5d32] text-white'
          : 'bg-[#f5f1ea] text-[#1f2933]'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-serif text-xl md:text-2xl font-semibold">
          {title}
        </h3>
      </div>
      <p
        className={`mb-6 ${
          isPrimary ? 'text-white/90' : 'text-[#5d6a73]'
        }`}
      >
        {description}
      </p>
      <Link
        href={buttonHref}
        className={`inline-block rounded-full px-6 py-3 font-semibold transition-colors ${
          isPrimary
            ? 'bg-[#f5f1ea] text-[#af5d32] hover:bg-white'
            : 'bg-[#af5d32] text-white hover:bg-[#1a3a4a]'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
