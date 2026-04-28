import { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import ContextualCTA from '@/components/ContextualCTA';

export const metadata: Metadata = {
  title: 'Cultural Differences in China | Trail of China',
  description:
    'Essential etiquette, customs, and social norms for travelers in China. Dining, greetings, gift giving, and public behavior explained.',
};

export default function CulturalDifferencesPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🤝"
        heroImage={{ src: 'https://picsum.photos/seed/chinese-culture-etiquette/800/400', alt: 'Cultural Differences in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Cultural Differences' },
        ]}
        category="How China Differs"
        title="Cultural Differences in China"
        intro="China has unique cultural norms that differ significantly from Western countries. Understanding these will help you show respect and avoid unintentional offense."
        proTips={[
          'Learn basic phrases: "Ni hao" (hello), "Xie xie" (thank you), "Bu yao" (I don\'t want)',
          'Smile goes a long way despite language barriers',
          'Don\'t be offended by direct questions about age, salary, marriage',
          'Tipping is not expected (and sometimes refused)',
        ]}
        related={[
          { label: 'Censorship', href: '/china-basics/how-china-differs/censorship' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
        ]}
        relatedArticles={[
          { title: 'Censorship in China', description: 'What to expect from the Great Firewall.', href: '/china-basics/how-china-differs/censorship' },
          { title: 'How China Differs', description: 'Overview of key differences for travelers.', href: '/china-basics/how-china-differs' },
        ]}
        tocItems={[
          { id: 'greetings', title: 'Greetings & Interactions' },
          { id: 'dining', title: 'Dining Etiquette' },
          { id: 'gift-giving', title: 'Gift Giving' },
          { id: 'public-behavior', title: 'Public Behavior' },
        ]}
      >
        {/* Greetings & Interactions */}
        <div id="greetings" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Greetings & Interactions</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Handshakes:</strong> Light handshake is acceptable; bowing is not common</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Business cards:</strong> Receive with both hands, read it, then put away respectfully</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Personal space:</strong> Less than Western countries; queuing is different</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Eye contact:</strong> Moderate eye contact is fine; prolonged staring is rude</li>
          </ul>
        </div>

        {/* Dining Etiquette */}
        <div id="dining" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Dining Etiquette</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Chopsticks:</strong> Never stick upright in rice (resembles funeral incense)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Tapping:</strong> Tap table twice to say thanks when tea is poured</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Sharing:</strong> Dishes are communal; take small portions</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Finishing:</strong> Leave a little food to show you're satisfied (not still hungry)</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Bill:</strong> Fighting over the bill is polite; splitting is rare</li>
          </ul>
        </div>

        {/* Gift Giving */}
        <div id="gift-giving" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Gift Giving</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Accept gifts:</strong> Receive with both hands</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Avoid:</strong> Clocks (death association), white flowers (funerals), sharp objects</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Number 4:</strong> Sounds like "death" in Chinese; avoid in gifts</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Colors:</strong> Red = lucky, White = funerals, Black = death</li>
          </ul>
        </div>

        {/* Public Behavior */}
        <div id="public-behavior" className="card-base">
          <h2 className="text-2xl font-extrabold text-slate-900">Public Behavior</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Spitting:</strong> Common in some areas; carry tissues</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Smoking:</strong> Very common; designated areas exist</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Queue jumping:</strong> Common; stay firm but polite</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Staring:</strong> Common for foreigners; usually curiosity, not rudeness</li>
            <li className="text-sm leading-relaxed text-slate-700 md:text-base">• <strong>Photos:</strong> Ask before photographing people</li>
          </ul>
        </div>
      </GuideArticlePage>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ContextualCTA
          icon="📋"
          title="Download Our Free China Cheat Sheet"
          description="Quick reference for phrases, etiquette, and essentials — save it to your phone before you go."
          buttonText="Get the Cheat Sheet →"
          buttonHref="#cheat-sheet"
          variant="secondary"
        />
      </div>
    </div>
  );
}