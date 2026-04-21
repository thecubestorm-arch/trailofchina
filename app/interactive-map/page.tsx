import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Map | Trail of China',
  description: 'Interactive map of China destinations. Coming soon!',
};

export default function InteractiveMapPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <span className="text-6xl">🗺️</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Interactive Map</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Explore China's destinations on an interactive map. 
          Coming soon!
        </p>
        
        <div className="bg-gray-100 rounded-xl p-8 max-w-lg mx-auto">
          <h2 className="font-semibold mb-4">What to expect:</h2>
          <ul className="text-gray-600 space-y-2 text-left">
            <li>✓ Clickable destinations across China</li>
            <li>✓ Route planning between cities</li>
            <li>✓ Points of interest markers</li>
            <li>✓ Travel time estimates</li>
          </ul>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 mb-4">Want to be notified when it's ready?</p>
          <form className="flex gap-2 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 border rounded-lg px-4 py-2"
            />
            <button 
              type="submit"
              className="bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:bg-[var(--accent-strong)] transition"
            >
              Notify Me
            </button>
          </form>
        </div>
        
        <div className="mt-12 text-sm text-gray-400">
          <p>Expected launch: Q2 2026</p>
        </div>
      </main>
    </div>
  );
}
