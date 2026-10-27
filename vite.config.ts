import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { buildPage } from './scripts/page.mjs';

type PrerenderEntry = {
  getPrerenderRoutes: () => Array<{ path: string; lang: string; head: string }>;
  render: (path: string, lang: string) => string;
};

/**
 * Dev server: render prerendered routes (articles) on the server for every request, exactly like
 * `npm run build` does, so View Source / crawlers see the real <title>, meta tags, JSON-LD and h1.
 * Falls back to the plain SPA shell if SSR throws, so a bug never blocks development.
 */
function prerenderInDev(): Plugin {
  return {
    name: 'prerender-in-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          // No `Accept` check: View Source and some crawlers send `*/*`. Only exact article URLs
          // (no file extension, matching a prerender route) are handled, so assets are unaffected.
          if (req.method !== 'GET' && req.method !== 'HEAD') return next();
          const pathname = (req.url ?? '/').split('?')[0].replace(/\/+$/, '') || '/';
          if (pathname === '/' || pathname.includes('.')) return next();

          const entry = (await server.ssrLoadModule('/src/entry-server.tsx')) as PrerenderEntry;
          const route = entry.getPrerenderRoutes().find((item) => item.path === pathname);
          if (!route) return next();

          const template = readFileSync(join(server.config.root, 'index.html'), 'utf8');
          const shell = await server.transformIndexHtml(req.url ?? pathname, template);
          const page = buildPage(shell, route, entry.render(route.path, route.lang));

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          // View Source / reload must never reuse an older (e.g. empty SPA shell) copy of this URL.
          res.setHeader('Cache-Control', 'no-store');
          res.end(page);
        } catch (error) {
          server.ssrFixStacktrace(error as Error);
          server.config.logger.error(`[prerender-in-dev] ${(error as Error).stack ?? error}`);
          next();
        }
      });
    },
  };
}

/**
 * `vite preview` only falls back to `dir/index.html` when the URL ends with `/`.
 * Production (nginx `try_files $uri $uri/index.html /index.html`) serves it without
 * the slash, so mirror that here to be able to check prerendered pages locally.
 */
function servePrerenderedPages(): Plugin {
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server) {
      const outDir = resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((req, _res, next) => {
        const [pathname, query = ''] = (req.url ?? '/').split('?');
        if (pathname !== '/' && !pathname.includes('.')) {
          const clean = pathname.replace(/\/+$/, '');
          if (existsSync(join(outDir, clean, 'index.html'))) {
            req.url = `${clean}/index.html${query ? `?${query}` : ''}`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderInDev(), servePrerenderedPages()],
});
