import { useEffect } from 'react';
import type { Lang } from '../i18n';

export const SITE_URL = 'https://northernacs.com';
export const SITE_NAME = 'Northern Analytics';

/** Mirrors the static <title>/<meta description> in index.html (used to restore on unmount). */
export const DEFAULT_SEO = {
  title: 'Northern Analytics Consulting Services',
  description:
    'Northern Analytics Consulting Services - Databricks, Data & AI, and S-Locator consulting in Saudi Arabia.',
};

const OG_LOCALE: Record<Lang, string> = { ar: 'ar_SA', en: 'en_US' };
const SEO_ATTR = 'data-seo';

export type SeoTag = {
  tag: 'meta' | 'link' | 'script';
  attrs: Record<string, string>;
  text?: string;
};

export type SeoAlternate = { hreflang: string; href: string };

export type SeoData = {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  alternates: SeoAlternate[];
  modified?: string;
  tags: SeoTag[];
};

export type SeoInput = {
  lang: Lang;
  title: string;
  description: string;
  /** Path for this language version, e.g. /blogs/my-article */
  path: string;
  /** Path per language, used for hreflang. The default-language entry is also used as x-default. */
  alternatePaths: Record<Lang, string>;
  defaultLang: Lang;
  type?: 'website' | 'article';
  image?: { url: string; width?: number; height?: number; alt?: string };
  published?: string;
  modified?: string;
  section?: string;
  jsonLd?: Record<string, unknown>[];
};

export const absoluteUrl = (path: string) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`;

export const buildSeo = (input: SeoInput): SeoData => {
  const canonical = absoluteUrl(input.path);
  const otherLang: Lang = input.lang === 'ar' ? 'en' : 'ar';

  const alternates: SeoAlternate[] = [
    { hreflang: 'ar', href: absoluteUrl(input.alternatePaths.ar) },
    { hreflang: 'en', href: absoluteUrl(input.alternatePaths.en) },
    { hreflang: 'x-default', href: absoluteUrl(input.alternatePaths[input.defaultLang]) },
  ];

  const meta = (key: 'name' | 'property', name: string, content: string): SeoTag => ({
    tag: 'meta',
    attrs: { [key]: name, content },
  });

  const tags: SeoTag[] = [
    meta('name', 'description', input.description),
    meta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1'),
    { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
    ...alternates.map(
      (alt): SeoTag => ({
        tag: 'link',
        attrs: { rel: 'alternate', hreflang: alt.hreflang, href: alt.href },
      }),
    ),
    meta('property', 'og:type', input.type ?? 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', OG_LOCALE[input.lang]),
    meta('property', 'og:locale:alternate', OG_LOCALE[otherLang]),
    meta('property', 'og:url', canonical),
    meta('property', 'og:title', input.title),
    meta('property', 'og:description', input.description),
    meta('name', 'twitter:card', input.image ? 'summary_large_image' : 'summary'),
    meta('name', 'twitter:title', input.title),
    meta('name', 'twitter:description', input.description),
  ];

  if (input.image) {
    const url = absoluteUrl(input.image.url);
    tags.push(meta('property', 'og:image', url));
    if (input.image.width) tags.push(meta('property', 'og:image:width', String(input.image.width)));
    if (input.image.height)
      tags.push(meta('property', 'og:image:height', String(input.image.height)));
    if (input.image.alt) {
      tags.push(meta('property', 'og:image:alt', input.image.alt));
      tags.push(meta('name', 'twitter:image:alt', input.image.alt));
    }
    tags.push(meta('name', 'twitter:image', url));
  }

  if (input.type === 'article') {
    if (input.published) tags.push(meta('property', 'article:published_time', input.published));
    if (input.modified ?? input.published) {
      tags.push(
        meta('property', 'article:modified_time', (input.modified ?? input.published) as string),
      );
    }
    if (input.section) tags.push(meta('property', 'article:section', input.section));
  }

  for (const data of input.jsonLd ?? []) {
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      text: JSON.stringify(data),
    });
  }

  return {
    lang: input.lang,
    title: input.title,
    description: input.description,
    canonical,
    alternates,
    modified: input.modified ?? input.published,
    tags,
  };
};

/* ---------- Build time: serialize to an HTML string for prerendering ---------- */

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const serializeTag = ({ tag, attrs, text }: SeoTag) => {
  const attrString = Object.entries({ ...attrs, [SEO_ATTR]: '' })
    .map(([key, value]) => (value === '' ? key : `${key}="${escapeHtml(value)}"`))
    .join(' ');
  if (tag === 'script') {
    // Prevent "</script>" or "<!--" inside JSON from terminating the block.
    const safe = (text ?? '').replace(/</g, '\\u003c');
    return `<script ${attrString}>${safe}</script>`;
  }
  return `<${tag} ${attrString} />`;
};

export const serializeSeoHead = (seo: SeoData) =>
  [`<title ${SEO_ATTR}>${escapeHtml(seo.title)}</title>`, ...seo.tags.map(serializeTag)].join(
    '\n    ',
  );

/* ---------- Runtime: keep <head> in sync after hydration / client navigation ---------- */

const removeSeoNodes = () => {
  document.head.querySelectorAll(`[${SEO_ATTR}]`).forEach((node) => node.remove());
};

const ensureDefaultDescription = () => {
  const existing = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (existing) {
    existing.setAttribute('content', DEFAULT_SEO.description);
    return;
  }
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'description');
  meta.setAttribute('content', DEFAULT_SEO.description);
  document.head.appendChild(meta);
};

export const applySeo = (seo: SeoData) => {
  removeSeoNodes();
  // The static description from index.html would otherwise duplicate ours.
  document.head
    .querySelectorAll('meta[name="description"]:not([data-seo])')
    .forEach((node) => node.remove());

  document.title = seo.title;
  for (const { tag, attrs, text } of seo.tags) {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    element.setAttribute(SEO_ATTR, '');
    if (text) element.textContent = text;
    document.head.appendChild(element);
  }
};

export const resetSeo = () => {
  removeSeoNodes();
  document.title = DEFAULT_SEO.title;
  ensureDefaultDescription();
};

export const useSeo = (seo: SeoData | null) => {
  useEffect(() => {
    if (!seo) return;
    applySeo(seo);
    return resetSeo;
  }, [seo]);
};
