import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaChevronDown,
  FaGlobe,
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaXmark,
} from 'react-icons/fa6';
import { translations } from '../i18n';
import { useLanguage } from './LanguageProvider';

type NavItem = {
  label: string;
  to: string;
  dropdown?: boolean;
  external?: boolean;
  highlighted?: boolean;
};

const SiteLayout = () => {
  const { lang, setLang } = useLanguage();
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
    { label: t.nav.about, to: '/about' },
    { label: t.nav.locator, to: 'https://www.s-locator.com/', external: true, highlighted: true },
  ];

  return (
    <div
      className={`min-h-screen bg-white text-nacs-ink antialiased ${isAr ? 'font-arabic' : 'font-sans'}`}
    >
      <header
        className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden h-8 items-center justify-end border-b border-gray-50 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 text-[#08563D] transition-colors hover:text-slate-600"
            >
              <FaGlobe size={10} /> {t.nav.language}
            </button>
          </div>
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
                item.dropdown ? (
                  <a
                    key={item.label}
                    href={item.to}
                    className="group flex h-full items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-slate-800 transition-colors hover:text-[#08563D]"
                  >
                    {item.label}
                    <FaChevronDown
                      size={9}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </a>
                ) : item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-wider text-[#08563D] transition-colors hover:opacity-80"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-bold uppercase tracking-wider transition-colors ${item.highlighted || isActive ? 'text-[#08563D] hover:opacity-80' : 'text-slate-800 hover:text-[#08563D]'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>
            <div className="flex items-center gap-4 md:gap-6">
              <button
                type="button"
                aria-label={t.nav.searchAria}
                className="hidden text-slate-400 transition-colors hover:text-[#08563D] md:block"
              >
                <FaMagnifyingGlass size={16} />
              </button>
              <Link
                to="/contact"
                className="hidden rounded-sm bg-[#08563D] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#064531] md:inline-block"
              >
                {t.nav.contact}
              </Link>
              <button
                type="button"
                className="p-2 text-slate-800 hover:text-[#08563D] lg:hidden"
                aria-label={t.nav.menuToggleAria}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="space-y-2 px-4 pb-6 pt-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex-1 rounded-sm border border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-800"
              >
                {t.nav.language}
              </button>
              <Link
                to="/contact"
                className="flex-1 rounded-sm bg-[#08563D] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
              >
                {t.nav.contact}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* NEW KPMG-STYLE FOOTER WITH AUTO-ARABIC */}
      <footer className="bg-[#08563D] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <img
              src="/images/northernacs/logo.png"
              alt={t.nav.logoAlt}
              className="h-10 w-auto brightness-0 invert"
              loading="lazy"
            />
          </div>

          <div className="mb-20 grid grid-cols-1 gap-12 text-sm md:grid-cols-3">
            <div>
              <h3 className="mb-6 text-lg font-bold">{isAr ? 'تواصل معنا' : 'Contact'}</h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <p className="mb-1 font-bold text-white">
                    {isAr
                      ? 'JABA7682, حلب البغدادية، جدة، المملكة العربية السعودية'
                      : 'JABA7682, Halab albaghdadiyah, Jeddah, KSA'}
                  </p>
                </li>
                <li className="pt-2">
                  <a
                    href="mailto:contact@northernacs.com"
                    className="transition-all hover:underline"
                  >
                    contact@northernacs.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    to="/contact"
                    className="font-medium text-white transition-all hover:underline"
                  >
                    {isAr ? 'تواصل مع خبرائنا' : 'Contact Our Experts'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">{isAr ? 'الشركة' : 'Company'}</h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <Link to="/about" className="transition-all hover:underline">
                    {isAr ? 'من نحن' : 'About Us'}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://s-locator.northernacs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all hover:underline"
                  >
                    {isAr ? 'منصة إس لوكيتر' : 'S-Locator Platform'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12 flex justify-center">
            <a
              href="https://www.linkedin.com/company/northern-analytic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedinAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-[#08563D]"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          <div className="mt-8 text-center text-[10px] text-white/40">
            {isAr
              ? '© 2026 تم التصميم والتطوير كمنتج لشركة نورثرن أناليتكس. جميع الحقوق محفوظة.'
              : '© 2026 Designed and developed as a product of Northern Analytics Consulting Services. All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
