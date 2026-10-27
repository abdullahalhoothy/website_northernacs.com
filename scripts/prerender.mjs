/**
 * Build-time prerendering.
 *
 * Runs after `vite build` (client -> dist/) and `vite build --ssr` (server -> dist-server/).
 * For every post that defines an `seo` block it renders the real React tree to static HTML
 * (once per language), injects the matching <head> tags, and writes
 *   dist/blogs/<slug>/index.html      (Arabic, default)
 *   dist/en/blogs/<slug>/index.html   (English)
 * so crawlers and social scrapers receive complete content without executing JavaScript.
 * The browser then hydrates the same markup (see src/main.tsx).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { buildPage } from './page.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverEntry = join(root, 'dist-server', 'entry-server.js');

/** Public pages that are client-rendered; listed in the sitemap alongside prerendered articles. */
const STATIC_PAGES = [
  '/',
  '/about',
  '/contact',
  '/blogs',
  '/solutions/consulting-databricks',
  '/solutions/s-route',
  '/solutions/s-locator',
];

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const buildSitemap = (siteUrl, routes) => {
  const pageUrls = STATIC_PAGES.map(
    (path) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n  </url>`,
  );

  const articleUrls = routes.map(({ seo }) => {
    const alternates = seo.alternates
      .map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />`,
      )
      .join('\n');
    return [
      '  <url>',
      `    <loc>${escapeXml(seo.canonical)}</loc>`,
      seo.modified ? `    <lastmod>${seo.modified}</lastmod>` : null,
      alternates,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...pageUrls,
    ...articleUrls,
    '</urlset>',
    '',
  ].join('\n');
};

const main = async () => {
  const { render, getPrerenderRoutes, SITE_URL } = await import(pathToFileURL(serverEntry).href);
  const template = await readFile(join(distDir, 'index.html'), 'utf8');
  const routes = getPrerenderRoutes();

  if (routes.length === 0) {
    console.log('prerender: no posts with an `seo` block, nothing to do.');
    return;
  }

  for (const route of routes) {
    const appHtml = render(route.path, route.lang);
    if (!/<h1[\s>]/.test(appHtml)) {
      throw new Error(`prerender: ${route.path} rendered without an <h1>`);
    }
    const outFile = join(distDir, route.path, 'index.html');
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, buildPage(template, route, appHtml), 'utf8');
    console.log(`prerender: ${route.path}  [${route.lang}]  "${route.seo.title}"`);
  }

  await writeFile(join(distDir, 'sitemap.xml'), buildSitemap(SITE_URL, routes), 'utf8');
  console.log('prerender: sitemap.xml written');
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
