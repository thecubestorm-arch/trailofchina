import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Planner | Trail of China',
  description: 'Build your custom China itinerary. Select cities, duration, and interests.',
};

export default function TravelPlannerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Travel Planner</h1>
        
        <section className="mb-8">
          <p className="text-base md:text-sm text-gray-700 leading-relaxed">
            Create your perfect China trip. Answer a few questions and we&apos;ll suggest a personalized itinerary.
          </p>
        </section>

        <section className="mb-12">
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-semibold mb-3">Which cities do you want to visit?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Beijing', 'Shanghai', 'Xi\u0026apos;an', 'Chengdu', 'Guilin/Yangshuo', 'Hong Kong'].map((city) => (
                  <label key={city} className="flex items-center gap-3 min-h-[44px] border rounded-lg p-3 cursor-pointer hover:bg-[#f5f1ea]">
                    <input type="checkbox" className="w-6 h-6 rounded" />
                    <span>{city}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3">Trip duration</label>
              <select className="w-full md:w-1/2 border rounded-lg p-3">
                <option>7 days</option>
                <option>10 days</option>
                <option>14 days</option>
                <option>21+ days</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3">What are you most interested in?</label>
              <div className="flex flex-wrap gap-2">
                {['History & Culture', 'Food & Dining', 'Nature & Scenery', 'Modern Cities', 'Adventure', 'Relaxation'].map((interest) => (
                  <label key={interest} className="border rounded-full px-4 py-2 cursor-pointer hover:bg-[#f5f1ea] min-h-[44px] flex items-center">
                    <input type="checkbox" className="hidden" />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3">Budget level</label>
              <div className="flex gap-4">
                {['Budget', 'Mid-range', 'Luxury'].map((budget) => (
                  <label key={budget} className="flex items-center gap-3 min-h-[44px]">
                    <input type="radio" name="budget" className="w-4 h-4" />
                    <span>{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent-strong)] transition"
              >
                Generate My Itinerary
              </button>
            </div>
          </form>
        </section>

        <div className="bg-[#f5f1ea] border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Note</h3>
          <p className="text-[#64748b]">
            This is a demo form. Full functionality with personalized itinerary generation coming soon. 
            For now, check our <a href="/plan-your-trip/preplanned-trips" className="text-[var(--accent)] underline">pre-planned trips</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
