interface RedSealBadgeProps {
  character: string;
}

export default function RedSealBadge({ character }: RedSealBadgeProps) {
  return (
    <div
      className="absolute top-0 left-0 w-[36px] h-[36px] rounded-sm"
      style={{
        backgroundColor: '#c23a2a',
        transform: 'rotate(-7deg)',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.15)',
      }}
      aria-hidden="true"
    >
      <span
        className="text-white font-serif flex items-center justify-center w-full h-full"
        style={{
          fontSize: '20px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      >
        {character}
      </span>
    </div>
  );
}
