import { Toaster } from 'sonner';
import App from './App';
import { LanguageProvider } from './components/LanguageProvider';
import { ThemeProvider } from './components/ThemeProvider';
import type { Lang } from './i18n';

/** Provider tree shared by the browser entry and the prerenderer so markup stays identical. */
const Root = ({ initialLang }: { initialLang?: Lang }) => (
  <ThemeProvider>
    <LanguageProvider initialLang={initialLang}>
      <App />
      <Toaster position="top-right" richColors />
    </LanguageProvider>
  </ThemeProvider>
);

export default Root;
