export default function InkWashDivider() {
  return (
    <div className="my-10 h-[50px] opacity-[0.08]">
      <div 
        className="w-full h-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #1a3a4a 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
