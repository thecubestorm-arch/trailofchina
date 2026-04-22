export default function LanternWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none select-none ${className}`}
      width="180"
      height="260"
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.05 }}
    >
      {/* Top string */}
      <line x1="90" y1="0" x2="90" y2="40" stroke="#c23a2a" strokeWidth="2" />
      {/* Top cap */}
      <rect x="60" y="38" width="60" height="12" rx="3" fill="#c23a2a" />
      {/* Lantern body - oval */}
      <ellipse cx="90" cy="130" rx="65" ry="80" fill="#c23a2a" />
      {/* Horizontal ribs */}
      <ellipse cx="90" cy="80" rx="60" ry="8" fill="none" stroke="#8f2a1a" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="90" cy="110" rx="65" ry="8" fill="none" stroke="#8f2a1a" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="90" cy="140" rx="65" ry="8" fill="none" stroke="#8f2a1a" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="90" cy="170" rx="60" ry="8" fill="none" stroke="#8f2a1a" strokeWidth="1.5" opacity="0.4" />
      {/* Bottom cap */}
      <rect x="60" y="208" width="60" height="12" rx="3" fill="#c23a2a" />
      {/* Bottom tassel string */}
      <line x1="90" y1="220" x2="90" y2="240" stroke="#c23a2a" strokeWidth="1.5" />
      {/* Tassel fringe */}
      <line x1="82" y1="240" x2="82" y2="258" stroke="#c23a2a" strokeWidth="1" opacity="0.6" />
      <line x1="86" y1="240" x2="86" y2="255" stroke="#c23a2a" strokeWidth="1" opacity="0.6" />
      <line x1="90" y1="240" x2="90" y2="260" stroke="#c23a2a" strokeWidth="1.5" opacity="0.8" />
      <line x1="94" y1="240" x2="94" y2="255" stroke="#c23a2a" strokeWidth="1" opacity="0.6" />
      <line x1="98" y1="240" x2="98" y2="258" stroke="#c23a2a" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}