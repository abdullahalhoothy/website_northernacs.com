import type { Lang } from '../i18n';

/**
 * Arabic is the site's default language and lives at the plain URL.
 * English gets its own crawlable URL under /en so each language can be prerendered,
 * indexed, and cross-linked with hreflang.
 */
export const EN_PATH_PREFIX = '/en';

export const articlePath = (slug: string, lang: Lang) =>
  lang === 'en' ? `${EN_PATH_PREFIX}/blogs/${slug}` : `/blogs/${slug}`;

export const isEnglishPath = (pathname: string) =>
  pathname === EN_PATH_PREFIX || pathname.startsWith(`${EN_PATH_PREFIX}/`);
