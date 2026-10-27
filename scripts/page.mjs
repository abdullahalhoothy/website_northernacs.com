/**
 * Turns the SPA shell (`index.html`) into a complete page for one prerendered route.
 * Shared by the build-time prerender script and the Vite dev server so both emit identical markup.
 */

const replaceOnce = (source, pattern, replacement, label) => {
  if (!pattern.test(source)) {
    throw new Error(`prerender: could not find ${label} in index.html`);
  }
  return source.replace(pattern, () => replacement);
};

export const buildPage = (template, { lang, head }, appHtml) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  let page = template;
  page = replaceOnce(page, /<html[^>]*>/, `<html lang="${lang}" dir="${dir}">`, '<html>');
  // Replace the generic site title/description with the page-specific ones.
  page = replaceOnce(page, /<title>[\s\S]*?<\/title>\s*/, '', '<title>');
  page = replaceOnce(page, /<meta\s+name="description"[^>]*>\s*/, '', 'meta description');
  page = replaceOnce(page, /<\/head>/, `  ${head}\n  </head>`, '</head>');
  page = replaceOnce(
    page,
    /<div id="root"><\/div>/,
    `<div id="root" data-prerender-lang="${lang}">${appHtml}</div>`,
    '#root container',
  );
  return page;
};
