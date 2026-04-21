import type { Metadata } from 'next'
import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'
import FaqCard from '@/components/FaqCard'
import SectionIntro from '@/components/SectionIntro'
import FadeIn from '@/components/FadeIn'
import StaggerContainer from '@/components/StaggerContainer'

export const metadata: Metadata = {
  title: 'Travel China Without Confusion',
  description:
    'Start planning your first China trip with practical prep guides, destination overviews, and realistic itinerary ideas for international travelers.',
  keywords: 'China travel guide,first trip to China,China itinerary,China travel planning,travel China first time',
}

const destinations = [
  {
    title: 'Shanghai',
    description:
      "China's most international city - easy arrivals, world-class food, and a skyline that announces what's coming.",
    href: '/destinations/shanghai',
  },
  {
    title: 'Beijing',
    description:
      'The capital, the Great Wall, the hutongs. A must for first-timers who want to feel the full weight of Chinese history.',
    href: '/destinations/beijing',
  },
  {
    title: 'Chongqing',
    description: 'A bold, hilly river city known for fiery hotpot, dramatic skyline views, and unique urban terrain.',
    href: '/destinations/chongqing',
  },
  {
    title: "Xi'an",
    description: "Home to the Terracotta Army and ancient city walls - the best base for China's ancient history.",
    href: '/destinations/xian',
  },
  {
    title: 'Chengdu',
    description: 'Pandas, teahouses, and the best Sichuan food in the world. A relaxed city with enormous appeal.',
    href: '/destinations/chengdu',
  },
]

const faqs = [
  {
    question: 'What should I prepare first before traveling to China?',
    answer:
      "Start with the basics that affect your first 48 hours: a working eSIM or SIM card, Alipay or WeChat Pay set up, a VPN installed on your device, and your hotel address saved offline. Handle these before departure - they're much harder to fix on arrival day.",
    href: '/china-basics',
  },
  {
    question: 'How many cities should I include on a first China trip?',
    answer:
      'Most first-time travelers are better served by two to four core stops. That keeps transfer time under control and leaves enough energy to actually enjoy each destination. Two weeks with three cities done well beats two weeks with six cities done rushed.',
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    question: 'Do I need a VPN in China?',
    answer:
      "If you use Google, Instagram, WhatsApp, or most Western apps, yes - and it must be installed before you enter China. VPN providers' websites are blocked inside China, making last-minute downloads impossible.",
    href: '/china-basics/what-apps-to-use',
  },
]

const beforeYouGo = [
  {
    title: 'China Basics',
    description:
      'Everything you need to know before landing: apps, internet, how payments work, and how to get around.',
    href: '/china-basics',
  },
  {
    title: 'What Apps to Use',
    description:
      'Set up maps, messaging, translation, and ride-hailing before your flight so your phone is ready from day one.',
    href: '/china-basics/what-apps-to-use',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <div className="min-h-screen py-8 sm:py-10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="container-px mx-auto w-full max-w-7xl space-y-16 sm:space-y-20" style={{ backgroundColor: '#f5f1ea' }}>
        <FadeIn>
          <section className="relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(235,228,216,0.94))] px-5 py-10 shadow-[var(--shadow-soft)] sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14 lg:py-20">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgba(175,93,50,0.11)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[rgba(255,252,247,0.76)] blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#af5d32]">Trail of China</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-[var(--foreground)] sm:mt-6 sm:text-6xl lg:text-7xl">
                Travel China Without Confusion
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-8">
                Practical guides and itineraries for first-time travelers who want clearer decisions, smoother arrival
                days, and a smarter first route through China.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/china-basics"
                  className="accent-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#8f431c] active:scale-[0.98]"
                >
                  China Basics
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,252,247,0.86)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[var(--surface-strong)] active:scale-[0.98]"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.08}>
          <section className="space-y-8">
            <SectionIntro
              eyebrow="Top 5 Destinations"
              title="The cities that define a first China trip"
              description="These are the destinations that come up most often for first-time visitors - each offering a different side of China's scale and character."
              href="/destinations"
            />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {destinations.map((destination) => (
                <FeatureCard
                  key={destination.title}
                  eyebrow="Top Destination"
                  title={destination.title}
                  description={destination.description}
                  href={destination.href}
                  image={destination.title}
                />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <FadeIn delay={0.14}>
          <section className="space-y-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            <SectionIntro
              eyebrow="Common Questions"
              title="What first-time travelers usually need answered early"
              description="These are the practical questions that often decide whether a first China trip feels smooth or stressful."
              href="/china-basics"
            />
            <StaggerContainer className="grid gap-4">
              {faqs.map((faq) => (
                <FaqCard key={faq.question} question={faq.question} answer={faq.answer} href={faq.href} />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="space-y-8">
            <SectionIntro
              eyebrow="Before You Go"
              title="The practical prep that makes the biggest difference"
              description="Sorting out apps, internet access, and payment options before departure turns a potentially stressful arrival day into a confident one."
              href="/china-basics"
            />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              {beforeYouGo.map((item) => (
                <FeatureCard
                  key={item.title}
                  eyebrow="Before You Go"
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  image={item.title}
                />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
