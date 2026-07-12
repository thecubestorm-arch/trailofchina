"use client";

import React from "react";

// ===== DESIGN SYSTEM =====
// Einheitliches Layout für alle Hub-Seiten

export function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f5f1ea]">{children}</div>;
}

export function HeroSection({ 
  label, 
  title, 
  subtitle 
}: { 
  label?: string; 
  title: string; 
  subtitle?: string 
}) {
  return (
    <section className="bg-[#f5f1ea] border-b border-[#ebe4d8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        {label && (
          <p className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#af5d32] mb-3 sm:mb-4">
            {label}
          </p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a3a4a] leading-tight mb-4 sm:mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-[#1a3a4a]/70 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function ContentSection({ 
  id, 
  icon, 
  title, 
  children 
}: { 
  id?: string; 
  icon?: string; 
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <section id={id} className="border-b border-[#ebe4d8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a3a4a] mb-6 sm:mb-8 flex items-center gap-3">
          {icon && <span className="text-2xl sm:text-3xl">{icon}</span>}
          {title}
        </h2>
        <div className="prose prose-lg prose-stone max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}

export function TipBox({ 
  children, 
  variant = "tip" 
}: { 
  children: React.ReactNode; 
  variant?: "tip" | "warning" | "info" 
}) {
  const styles = {
    tip: "bg-[#af5d32]/5 border-[#af5d32]/20 text-[#af5d32]",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    info: "bg-[#1a3a4a]/5 border-[#1a3a4a]/10 text-[#1a3a4a]",
  };

  const labels = {
    tip: "Tip: ",
    warning: "Warning: ",
    info: "Info: ",
  };

  return (
    <div className={`rounded-lg border px-4 py-3 sm:px-5 sm:py-4 my-6 sm:my-8 ${styles[variant]}`}>
      <p className="text-sm sm:text-base leading-relaxed">
        <span className="font-semibold">{labels[variant]}</span>
        {children}
      </p>
    </div>
  );
}

export function CTABanner({ 
  title, 
  description, 
  href, 
  linkText 
}: { 
  title: string; 
  description: string; 
  href: string; 
  linkText: string 
}) {
  return (
    <div className="bg-[#1a3a4a] rounded-xl p-6 sm:p-8 my-8 sm:my-10">
      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#f5f1ea] mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#f5f1ea]/80 mb-4 sm:mb-5 leading-relaxed">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#af5d32] text-white text-sm sm:text-base font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#8d4a28] transition-colors duration-200"
      >
        {linkText}
      </a>
    </div>
  );
}

export function FooterCTA({
  title = "Ready to explore China?",
  description = "Start with our complete first-timer's guide.",
  primaryHref = "/china-basics",
  primaryText = "Read the Guide",
  secondaryHref = "/destinations",
  secondaryText = "See Cities",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
}) {
  return (
    <section className="bg-[#1a3a4a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5f1ea] mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-[#f5f1ea]/70 mb-6 sm:mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={primaryHref}
            className="inline-block bg-[#af5d32] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg hover:bg-[#8d4a28] transition-colors duration-200"
          >
            {primaryText}
          </a>
          {secondaryHref && (
            <a
              href={secondaryHref}
              className="inline-block border border-[#f5f1ea]/30 text-[#f5f1ea] text-sm sm:text-base font-medium px-6 py-3 rounded-lg hover:bg-[#f5f1ea]/10 transition-colors duration-200"
            >
              {secondaryText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
