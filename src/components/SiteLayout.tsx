import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaChevronDown,
  FaEnvelope,
  FaGlobe,
  FaLinkedinIn,
  FaLocationDot,
  FaMoon,
  FaSun,
  FaXmark,
} from 'react-icons/fa6';
import { translations } from '../i18n';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

type NavSubItem = {
  label: string;
  to: string;
};

type NavItem = {
  label: string;
  to?: string;
  children?: NavSubItem[];
  dropdown?: boolean;
  external?: boolean;
  highlighted?: boolean;
};

const SiteLayout = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];
  const isAr = lang === 'ar';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navItems: NavItem[] = [
    { label: t.nav.home, to: '/' },
    {
      label: t.nav.solution,
      children: [
        { label: 'Consulting Databricks / Data & AI', to: '/solutions/consulting-databricks' },
        { label: 'S-route', to: '/solutions/s-route' },
        { label: 'S-locator', to: '/solutions/s-locator' },
      ],
    },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.contact, to: '/contact' },
    { label: t.nav.blog, to: '/blogs' },
  ];

  return (
    <div
      className={`min-h-screen bg-white text-nacs-ink antialiased transition-colors duration-200 dark:bg-[#343433] dark:text-slate-100 ${isAr ? 'font-arabic' : 'font-sans'}`}
    >
      <header
        className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-all duration-200 dark:border-[#484846] dark:bg-[#343433]/95 dark:backdrop-blur ${scrolled ? 'shadow-md dark:shadow-black/20' : 'shadow-sm'}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" aria-label={t.nav.homeLabel} className="flex items-center gap-3">
              <img
                src="/images/northernacs/logo.png"
                alt={t.nav.logoAlt}
                className="h-12 w-auto"
                loading="eager"
              />
            </Link>
            <nav className="hidden h-full items-center gap-10 lg:flex">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group h-full flex items-center">
                    <button
                      type="button"
                      className={`group flex h-full items-center gap-1.5 text-sm font-bold tracking-wider transition-colors ${
                        item.children.some((child) => location.pathname === child.to)
                          ? 'text-[#08563D] dark:text-[#2dd4bf]'
                          : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'
                      }`}
                    >
                      {item.label}
                      <FaChevronDown
                        size={9}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    {/* Pop-up dropdown menu on hover */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="w-64 rounded-lg bg-white p-2 shadow-xl border border-gray-100 ring-1 ring-black/5 dark:bg-[#2b2b2a] dark:border-[#484846] dark:ring-white/10">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-md px-4 py-2.5 text-xs font-bold tracking-wider transition-colors ${
                                isActive
                                  ? 'bg-slate-50 text-[#08563D] dark:bg-[#343433] dark:text-[#2dd4bf]'
                                  : 'text-slate-700 hover:bg-[#08563D]/5 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#343433] dark:hover:text-white'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-wider text-[#08563D] transition-colors hover:opacity-80"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to!}
                    className={({ isActive }) =>
                      `text-sm font-bold tracking-wider transition-colors ${
                        item.highlighted || isActive
                          ? 'text-[#08563D] hover:opacity-80 dark:text-[#2dd4bf]'
                          : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="hidden items-center gap-1.5 py-2 hover:bg-gray-50 rounded-md p-2 text-sm font-bold tracking-wider text-slate-700 transition-colors hover:text-[#08563D] dark:text-slate-300 dark:hover:text-[#2dd4bf] md:flex"
              >
                <FaGlobe size={16} /> {t.nav.language}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-gray-100 hover:text-[#08563D] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#2dd4bf]"
              >
                {theme === 'dark' ? (
                  <FaSun size={16} className="text-amber-400" />
                ) : (
                  <FaMoon size={16} />
                )}
              </button>
              <Link
                to="/signup"
                className="hidden rounded-sm bg-[#08563D] px-6 py-2.5 text-xs font-bold  tracking-widest text-white transition-all hover:bg-[#064531] dark:bg-[#08563D] dark:hover:bg-[#0a6f4e] md:inline-block"
              >
                {t.nav.signUp}
              </Link>
              <button
                type="button"
                className="p-2 text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf] lg:hidden"
                aria-label={t.nav.menuToggleAria}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 dark:border-[#484846] dark:bg-[#343433] lg:hidden ${mobileOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="space-y-2 px-4 pb-6 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    {item.label}
                  </div>
                  <div className="ms-2 space-y-1 border-s-2 border-slate-100 ps-2 dark:border-[#484846]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4 dark:border-[#484846]">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex-1 rounded-sm border border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-800 dark:border-[#484846] dark:text-slate-200"
              >
                {t.nav.language}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-sm border border-gray-200 px-4 py-3 text-slate-800 dark:border-[#484846] dark:text-slate-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FaSun size={16} className="text-amber-400" />
                ) : (
                  <FaMoon size={16} />
                )}
              </button>
              <Link
                to="/contact"
                className="flex-1 rounded-sm bg-[#08563D] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
              >
                {t.nav.signUp}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Modern, Compact, High-Value Footer */}
      <footer className="border-t border-slate-200 bg-[#F2F2F2] text-slate-600 transition-colors duration-200 dark:border-[#484846] dark:bg-[#343433] dark:text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Col 1: Brand & Bio (2 cols wide on large screens) */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <img
                  src="/images/northernacs/logo.png"
                  alt={t.nav.logoAlt}
                  className="h-10 w-auto opacity-95 dark:brightness-0 dark:invert"
                  loading="lazy"
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {t.footer.tagline}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/northern-analytic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.linkedinAria}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-[#08563D] hover:bg-[#08563D] hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-600"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <h4 className="mb-4 text-sm font-bold  tracking-wider text-slate-900 dark:text-slate-200">
                {t.nav.solution}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/solutions/consulting-databricks"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    Databricks / Data & AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/s-route"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    S-route
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/s-locator"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    S-locator
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.s-locator.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    S-Locator Live Platform ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200">
                {isAr ? 'الشركة' : 'Company'}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400"
                  >
                    {isAr ? 'تواصل مع خبرائنا' : 'Contact Our Experts'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Office */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200">
                {isAr ? 'تواصل معنا' : 'Contact'}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <FaLocationDot
                    size={16}
                    className="mt-0.5 shrink-0 text-[#08563D] dark:text-emerald-500"
                  />
                  <span className="text-[12px]">
                    {isAr
                      ? 'جدة، حي الفيصلية، شارع الهدا، المملكة العربية السعودية'
                      : 'Halab Al-Baghdadiyah, Jeddah, Kingdom of Saudi Arabia'}
                  </span>
                </li>
                <li className="flex items-center gap-2 pt-1">
                  <FaEnvelope size={16} className="shrink-0 text-[#08563D] dark:text-emerald-500" />
                  <a
                    href="mailto:contact@northernacs.com"
                    className="text-slate-700 text-sm transition-colors hover:text-[#08563D] hover:underline dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    contact@northernacs.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-[11px] text-slate-500 sm:flex-row dark:border-[#484846] dark:text-slate-400">
            <p>
              {isAr
                ? '© 2026 نورثرن أناليتكس للخدمات الاستشارية. جميع الحقوق محفوظة.'
                : '© 2026 Northern Analytics Consulting Services. All rights reserved.'}
            </p>
            <div className="flex flex-wrap gap-5 text-slate-500 dark:text-slate-500">
              <span className="cursor-default hover:text-slate-700 dark:hover:text-slate-300">
                {isAr ? 'الخصوصية' : 'Privacy'}
              </span>
              <span className="cursor-default hover:text-slate-700 dark:hover:text-slate-300">
                {isAr ? 'شروط الاستخدام' : 'Terms of Use'}
              </span>
              <span className="cursor-default hover:text-slate-700 dark:hover:text-slate-300">
                {isAr ? 'إمكانية الوصول' : 'Accessibility'}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
