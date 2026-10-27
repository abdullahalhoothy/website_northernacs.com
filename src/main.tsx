import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getInitialLang } from './components/LanguageProvider';
import { getInitialTheme } from './components/ThemeProvider';
import Root from './Root';
import './index.css';

const container = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages are hydrated only when the browser would render the exact same tree
// (same language, light theme). Otherwise the prerendered markup is discarded and the app
// renders fresh, which avoids hydration mismatches for returning visitors.
const prerenderedLang = container.dataset.prerenderLang;
const canHydrate =
  Boolean(prerenderedLang) && prerenderedLang === getInitialLang() && getInitialTheme() === 'light';

if (canHydrate) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
