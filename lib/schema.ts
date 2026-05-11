export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://www.trailofchina.com${item.path}`,
    })),
  };
}

export function authorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ruijie & Sascha',
    jobTitle: 'China Travel Guide Authors',
    url: 'https://www.trailofchina.com/about',
    worksFor: {
      '@type': 'Organization',
      name: 'Trail of China',
    },
    knowsAbout: 'China travel, Chinese culture, Mandarin language, China visa, China transportation',
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
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
  };
}