'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import FeatureCard from '@/components/FeatureCard'
import FaqCard from '@/components/FaqCard'
import SectionIntro from '@/components/SectionIntro'
import FadeIn from '@/components/FadeIn'
import StaggerContainer from '@/components/StaggerContainer'
import ChecklistDownload from '@/components/ChecklistDownload'

const destinations = [
  {
    key: 'shanghai',
    href: '/destinations/shanghai',
    imageSrc: '/images/shanghai/modern-skyline.jpg',
    imageAlt: 'Shanghai skyline with modern skyscrapers',
  },
  {
    key: 'beijing',
    href: '/destinations/beijing',
    imageSrc: '/images/beijing/forbidden-city.jpg',
    imageAlt: 'Traditional architecture in Beijing',
  },
  {
    key: 'chongqing',
    href: '/destinations/chongqing',
    imageSrc: '/images/chongqing/river-view.jpg',
    imageAlt: 'Chongqing cityscape by the river',
  },
  {
    key: 'xian',
    href: '/destinations/xian',
    imageSrc: '/images/xian/city-wall.jpg',
    imageAlt: "Xi'an ancient city wall",
  },
  {
    key: 'chengdu',
    href: '/destinations/chengdu',
    imageSrc: '/images/chengdu/hotpot.jpg',
    imageAlt: 'Sichuan hotpot in Chengdu',
  },
]

const faqs = [
  {
    key: 'prepareFirst',
    href: '/china-basics',
  },
  {
    key: 'cityCount',
    href: '/plan-your-trip/preplanned-trips',
  },
  {
    key: 'vpn',
    href: '/china-basics/what-apps-to-use',
  },
]

const beforeYouGo = [
  {
    key: 'chinaBasics',
    href: '/china-basics',
  },
  {
    key: 'whatApps',
    href: '/china-basics/what-apps-to-use',
  },
]

export default function HomePage() {
  const t = useTranslations()

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: t(`home.faqs.items.${faq.key}.question`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`home.faqs.items.${faq.key}.answer`),
      },
    })),
  }

  return (
    <div className="min-h-screen py-8 sm:py-10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="container-px mx-auto w-full max-w-7xl space-y-16 sm:space-y-20" style={{ backgroundColor: '#f5f1ea' }}>
        <FadeIn>
          <section className="relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(235,228,216,0.94))] px-5 py-10 shadow-[var(--shadow-soft)] sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14 lg:py-20">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgba(175,93,50,0.11)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[rgba(255,252,247,0.76)] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#af5d32]">{t('home.hero.eyebrow')}</p>
                <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-[var(--foreground)] sm:mt-6 sm:text-6xl lg:text-7xl">
                  {t('home.hero.title')}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-6 sm:text-xl sm:leading-8">
                  {t('home.hero.description')}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/china-basics"
                    className="accent-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#8f431c] active:scale-[0.98]"
                  >
                    {t('home.hero.cta1')}
                  </Link>
                  <Link
                    href="/destinations"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,252,247,0.86)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[var(--surface-strong)] active:scale-[0.98]"
                  >
                    {t('home.hero.cta2')}
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/hero/china-hero.jpg"
                  alt="China travel hero image"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover sm:h-72 lg:h-80"
                  priority
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.08}>
          <section className="space-y-8">
            <SectionIntro
              eyebrow={t('home.destinations.eyebrow')}
              title={t('home.destinations.title')}
              description={t('home.destinations.description')}
              href="/destinations"
            />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {destinations.map((destination) => (
                <FeatureCard
                  key={destination.key}
                  eyebrow={t('home.destinations.cardsEyebrow')}
                  title={t(`home.destinations.cities.${destination.key}.title`)}
                  description={t(`home.destinations.cities.${destination.key}.description`)}
                  href={destination.href}
                  image={
                    <Image
                      src={destination.imageSrc}
                      alt={destination.imageAlt}
                      width={640}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  }
                />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <FadeIn delay={0.14}>
          <section className="space-y-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            <SectionIntro
              eyebrow={t('home.faqs.eyebrow')}
              title={t('home.faqs.title')}
              description={t('home.faqs.description')}
              href="/china-basics"
            />
            <StaggerContainer className="grid gap-4">
              {faqs.map((faq) => (
                <FaqCard
                  key={faq.key}
                  question={t(`home.faqs.items.${faq.key}.question`)}
                  answer={t(`home.faqs.items.${faq.key}.answer`)}
                  href={faq.href}
                />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="space-y-8">
            <SectionIntro
              eyebrow={t('home.beforeYouGo.eyebrow')}
              title={t('home.beforeYouGo.title')}
              description={t('home.beforeYouGo.description')}
              href="/china-basics"
            />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              {beforeYouGo.map((item) => (
                <FeatureCard
                  key={item.key}
                  eyebrow={t('home.beforeYouGo.eyebrow')}
                  title={t(`home.beforeYouGo.cards.${item.key}.title`)}
                  description={t(`home.beforeYouGo.cards.${item.key}.description`)}
                  href={item.href}
                  image={t(`home.beforeYouGo.cards.${item.key}.title`)}
                />
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <FadeIn delay={0.26}>
          <ChecklistDownload />
        </FadeIn>
      </div>
    </div>
  )
}
