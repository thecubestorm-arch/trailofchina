import { createNavigation } from 'next-intl/navigation';
export const locales = ['en', 'de'] as const;
export type Locale = typeof locales[number];
export const defaultLocale = 'en' as const;
export const { Link, redirect, usePathname } = createNavigation({ locales, defaultLocale });
