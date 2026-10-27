/* eslint-disable react-refresh/only-export-components -- build-time SSR entry, never hot-reloaded */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { blogPosts } from './data/blogPosts';
import type { Lang } from './i18n';
import { articlePath } from './seo/paths';
import { buildPostSeo } from './seo/postSeo';
import { serializeSeoHead, SITE_URL, type SeoData } from './seo/seo';
import Root from './Root';

export { SITE_URL };

export type PrerenderRoute = {
  path: string;
  lang: Lang;
  seo: SeoData;
  head: string;
};

const LANGS: Lang[] = ['ar', 'en'];

/** Every post that defines an `seo` block is prerendered once per language. */
export const getPrerenderRoutes = (): PrerenderRoute[] =>
  blogPosts
    .filter((post) => post.seo)
    .flatMap((post) =>
      LANGS.map((lang) => {
        const seo = buildPostSeo(post, lang);
        return { path: articlePath(post.slug, lang), lang, seo, head: serializeSeoHead(seo) };
      }),
    );

export const render = (path: string, lang: Lang) =>
  renderToString(
    <StaticRouter location={path}>
      <Root initialLang={lang} />
    </StaticRouter>,
  );
