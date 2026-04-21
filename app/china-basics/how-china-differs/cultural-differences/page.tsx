import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cultural Differences in China | Trail of China',
  description: 'Essential etiquette, customs, and social norms for travelers in China. What to do and what to avoid.',
};

export default function CulturalDifferencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Cultural Differences in China</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            China has unique cultural norms that differ significantly from Western countries. 
            Understanding these will help you show respect and avoid unintentional offense.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Greetings & Interactions</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Handshakes:</strong> Light handshake is acceptable; bowing is not common</li>
            <li><strong>Business cards:</strong> Receive with both hands, read it, then put away respectfully</li>
            <li><strong>Personal space:</strong> Less than Western countries; queuing is different</li>
            <li><strong>Eye contact:</strong> Moderate eye contact is fine; prolonged staring is rude</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dining Etiquette</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Chopsticks:</strong> Never stick upright in rice (resembles funeral incense)</li>
            <li><strong>Tapping:</strong> Tap table twice to say thanks when tea is poured</li>
            <li><strong>Sharing:</strong> Dishes are communal; take small portions</li>
            <li><strong>Finishing:</strong> Leave a little food to show you're satisfied (not still hungry)</li>
            <li><strong>Bill:</strong> Fighting over the bill is polite; splitting is rare</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gift Giving</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Accept gifts:</strong> Receive with both hands</li>
            <li><strong>Avoid:</strong> Clocks (death association), white flowers (funerals), sharp objects</li>
            <li><strong>Number 4:</strong> Sounds like "death" in Chinese; avoid in gifts</li>
            <li><strong>Colors:</strong> Red = lucky, White = funerals, Black = death</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Public Behavior</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Spitting:</strong> Common in some areas; carry tissues</li>
            <li><strong>Smoking:</strong> Very common; designated areas exist</li>
            <li><strong>Queue jumping:</strong> Common; stay firm but polite</li>
            <li><strong>Staring:</strong> Common for foreigners; usually curiosity, not rudeness</li>
            <li><strong>Photos:</strong> Ask before photographing people</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Learn basic phrases: "Ni hao" (hello), "Xie xie" (thank you), "Bu yao" (I don't want)</li>
            <li>• Smile goes a long way despite language barriers</li>
            <li>• Don't be offended by direct questions about age, salary, marriage</li>
            <li>• Tipping is not expected (and sometimes refused)</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Things to Avoid</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Pointing with your index finger (use open hand)</li>
            <li>• Touching someone's head (sacred)</li>
            <li>• Losing your temper publicly (loss of face)</li>
            <li>• Discussing Tibet, Taiwan, Tiananmen, or Xinjiang politics</li>
            <li>• Showing public displays of affection</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
