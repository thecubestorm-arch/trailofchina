import { authorSchema } from '@/lib/schema';

interface AuthorBylineProps {
  name?: string;
  role?: string;
  date?: string;
}

export default function AuthorByline({ 
  name = 'Ruijie & Sascha',
  role = 'Trail of China',
  date = 'May 2025'
}: AuthorBylineProps) {
  const authorJsonLd = authorSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
      />
      <div className="flex items-center gap-3 py-3 text-sm text-[#1a3a4a]/70">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#af5d32]/10 text-xs font-semibold text-[#af5d32]">
          R&amp;S
        </div>
        <div>
          <p className="font-medium text-[#1a3a4a]/90">{name}</p>
          <p className="text-xs text-[#1a3a4a]/60">{role} · {date}</p>
        </div>
      </div>
    </>
  );
}