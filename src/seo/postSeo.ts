import type { BlogPost } from '../data/blogPosts';
import { specialtyCoffeeJeddahFaq } from '../data/specialtyCoffeeJeddahFaq';
import { translations, type Lang } from '../i18n';
import { articlePath } from './paths';
import { absoluteUrl, buildSeo, SITE_NAME, SITE_URL, type SeoData } from './seo';

export const DEFAULT_LANG: Lang = 'ar';

const FAQ_BY_SLUG: Record<string, typeof specialtyCoffeeJeddahFaq> = {
  'best-area-specialty-coffee-jeddah': specialtyCoffeeJeddahFaq,
};

const SECTION_FALLBACK: Record<Lang, string> = { ar: 'المدونة', en: 'Blog' };

export const buildPostSeo = (post: BlogPost, lang: Lang): SeoData => {
  const t = translations[lang];
  const path = articlePath(post.slug, lang);
  const canonical = absoluteUrl(path);
  const heading = post.title[lang];
  const title = post.seo?.title[lang] ?? `${heading} | ${SITE_NAME}`;
  const description = post.seo?.description[lang] ?? post.excerpt[lang];
  const coverUrl = post.seo?.image ?? post.image;
  const section =
    t.blogs.categories.find((item) => item.id === post.category)?.label ?? SECTION_FALLBACK[lang];
  const author = post.authors?.[lang]?.[0] ?? SITE_NAME;

  const publisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/images/northernacs/logo.png') },
  };

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: heading,
      description,
      inLanguage: lang,
      articleSection: section,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      url: canonical,
      ...(coverUrl ? { image: [absoluteUrl(coverUrl)] } : {}),
      author: { '@type': 'Organization', name: author, url: SITE_URL },
      publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.nav.home, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: t.nav.blog, item: absoluteUrl('/blogs') },
        { '@type': 'ListItem', position: 3, name: heading, item: canonical },
      ],
    },
  ];

  const faq = FAQ_BY_SLUG[post.slug]?.[lang];
  if (faq) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return buildSeo({
    lang,
    title,
    description,
    path,
    alternatePaths: { ar: articlePath(post.slug, 'ar'), en: articlePath(post.slug, 'en') },
    defaultLang: DEFAULT_LANG,
    type: 'article',
    image: coverUrl
      ? {
          url: coverUrl,
          width: post.seo?.imageWidth,
          height: post.seo?.imageHeight,
          alt: heading,
        }
      : undefined,
    published: post.date,
    modified: post.date,
    section,
    jsonLd,
  });
};
