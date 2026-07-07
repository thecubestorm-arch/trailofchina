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

export function travelGuideSchema({ title, description, url, image }: { title: string; description: string; url: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: title,
    description,
    url: `https://www.trailofchina.com${url}`,
    ...(image ? { image } : {}),
    author: {
      '@type': 'Organization',
      name: 'Trail of China',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trail of China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.trailofchina.com/og-default.jpg',
      },
    },
  };
}

export function touristAttractionSchema({ name, description, url, image }: { name: string; description: string; url: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    description,
    url: `https://www.trailofchina.com${url}`,
    ...(image ? { image } : {}),
  };
}

export function blogPostingSchema({ title, description, url, image, datePublished, author: authorName }: { title: string; description: string; url: string; image: string; datePublished: string; author?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url: `https://www.trailofchina.com${url}`,
    datePublished,
    author: {
      '@type': 'Person',
      name: authorName || 'Ruijie & Sascha',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trail of China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.trailofchina.com/og-default.jpg',
      },
    },
  };
}

export function articleSchema({ title, description, url, image, datePublished }: { title: string; description: string; url: string; image?: string; datePublished?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.trailofchina.com${url}`,
    ...(image ? { image } : {}),
    ...(datePublished ? { datePublished } : {}),
    author: {
      '@type': 'Organization',
      name: 'Trail of China',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trail of China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.trailofchina.com/og-default.jpg',
      },
    },
  };
}

export function websiteSchema({ name, url, searchUrl }: { name: string; url: string; searchUrl?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: `https://www.trailofchina.com${url}`,
    ...(searchUrl ? {
      potentialAction: {
        '@type': 'SearchAction',
        target: `https://www.trailofchina.com${searchUrl}`,
        'query-input': 'required name=search_term_string',
      },
    } : {}),
  };
}
