import type { Metadata } from 'next'
import GuideArticlePage from '@/components/GuideArticlePage'
import ContextualCTA from '@/components/ContextualCTA'

export const metadata: Metadata = {
  title: 'Cultural Differences in China | Trail of China',
  description:
    'Essential etiquette, customs, and social norms for travelers in China. Dining, greetings, gift giving, and public behavior explained.',
}

const tocItems = [
  { id: 'greetings-interactions', title: 'Greetings & Interactions' },
  { id: 'dining-etiquette', title: 'Dining Etiquette' },
  { id: 'gift-giving', title: 'Gift Giving' },
  { id: 'public-behavior', title: 'Public Behavior' },
]

export default function CulturalDifferencesPage() {
  return (
    <div>
      <GuideArticlePage
        icon="🙏"
        heroImage={{ src: 'https://picsum.photos/seed/china-cultural-differences/800/400', alt: 'Cultural differences in China' }}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'China Basics', href: '/china-basics' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Cultural Differences' },
        ]}
        category="How China Differs"
        title="Cultural Differences in China"
        intro="China has unique cultural norms that differ significantly from Western countries. Understanding these will help you show respect and avoid unintentional offense."
        whyYouNeedThis={[
          'Basic etiquette signals respect quickly, even when you do not speak much Chinese.',
          'Dining, greetings, and gift-giving norms can be very different from Western expectations.',
          'Some behaviors that feel ordinary at home can come across poorly in China.',
          'Understanding common public behavior patterns helps you interpret situations more accurately and react calmly.',
        ]}
        quickInfo="Dining etiquette matters · Tipping uncommon · Curiosity about foreigners is normal"
        tocItems={tocItems}
        related={[
          { label: 'Censorship', href: '/china-basics/how-china-differs/censorship' },
          { label: 'How China Differs', href: '/china-basics/how-china-differs' },
          { label: 'Before You Go', href: '/china-basics/before-you-go' },
        ]}
        relatedArticles={[
          {
            title: 'Censorship in China',
            description: 'What to expect from the Great Firewall.',
            href: '/china-basics/how-china-differs/censorship',
          },
          {
            title: 'How China Differs',
            description: 'Overview of key differences for travelers.',
            href: '/china-basics/how-china-differs',
          },
        ]}
      >
        <>
          <div>
            <h2 id="greetings-interactions" className="text-2xl font-extrabold text-slate-900">Greetings &amp; Interactions</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Handshakes:</strong> Light handshake is acceptable; bowing is not common</li>
              <li><strong>Business cards:</strong> Receive with both hands, read it, then put away respectfully</li>
              <li><strong>Personal space:</strong> Less than Western countries; queuing is different</li>
              <li><strong>Eye contact:</strong> Moderate eye contact is fine; prolonged staring is rude</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 id="dining-etiquette" className="text-2xl font-extrabold text-slate-900">Dining Etiquette</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Chopsticks:</strong> Never stick upright in rice (resembles funeral incense)</li>
              <li><strong>Tapping:</strong> Tap table twice to say thanks when tea is poured</li>
              <li><strong>Sharing:</strong> Dishes are communal; take small portions</li>
              <li><strong>Finishing:</strong> Leave a little food to show you&apos;re satisfied (not still hungry)</li>
              <li><strong>Bill:</strong> Fighting over the bill is polite; splitting is rare</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 id="gift-giving" className="text-2xl font-extrabold text-slate-900">Gift Giving</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Accept gifts:</strong> Receive with both hands</li>
              <li><strong>Avoid:</strong> Clocks (death association), white flowers (funerals), sharp objects</li>
              <li><strong>Number 4:</strong> Sounds like &quot;death&quot; in Chinese; avoid in gifts</li>
              <li><strong>Colors:</strong> Red = lucky, White = funerals, Black = death</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 id="public-behavior" className="text-2xl font-extrabold text-slate-900">Public Behavior</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Spitting:</strong> Common in some areas; carry tissues</li>
              <li><strong>Smoking:</strong> Very common; designated areas exist</li>
              <li><strong>Queue jumping:</strong> Common; stay firm but polite</li>
              <li><strong>Staring:</strong> Common for foreigners; usually curiosity, not rudeness</li>
              <li><strong>Photos:</strong> Ask before photographing people</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-slate-900">Pro Tips</h2>
              <ul className="mt-3 space-y-2">
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Learn basic phrases: &quot;Ni hao&quot; (hello), &quot;Xie xie&quot; (thank you), &quot;Bu yao&quot; (I don&apos;t want)</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Smile goes a long way despite language barriers</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Don&apos;t be offended by direct questions about age, salary, marriage</li>
                <li className="text-sm leading-relaxed text-slate-700 md:text-base">• Tipping is not expected (and sometimes refused)</li>
              </ul>
            </div>
          </div>
        </>
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
  )
}
