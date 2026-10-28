import { Link } from 'react-router-dom';
import { FaLayerGroup, FaMapLocationDot } from 'react-icons/fa6';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

const renderHighlighted = (template: string, values: Record<string, string>) =>
  template.split(/\{(.*?)\}/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong
        key={`${part}-${index}`}
        dir={part === 'brand' ? 'ltr' : undefined}
        className="font-semibold text-[#1e3a5f] dark:text-white"
      >
        {values[part] ?? part}
      </strong>
    ) : (
      <span key={`text-${index}`}>{part}</span>
    ),
  );

export const HeroSection = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].solutionsHero;

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white dark:border-[#484846] dark:bg-[#343433]">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-sky-200" />
            <div className="absolute inset-[10px] overflow-hidden rounded-full bg-slate-100">
              <div className="grid h-full grid-cols-2">
                <img
                  src=""
                  alt={copy.manAlt}
                  className="h-full w-full object-cover object-[center_18%]"
                  loading="eager"
                />
                <img
                  src=""
                  alt={copy.womanAlt}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="absolute start-0 top-[16%] z-20 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-lg dark:border-[#484846] dark:bg-[#3e3e3d] sm:-start-6 sm:px-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500">
              <FaMapLocationDot size={14} />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-slate-800 dark:text-slate-100">
              {copy.routePlanner}
            </span>
          </div>

          <div className="absolute bottom-[14%] end-0 z-20 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-lg dark:border-[#484846] dark:bg-[#3e3e3d] sm:end-[-6%] sm:px-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <FaLayerGroup size={14} />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-slate-800 dark:text-slate-100">
              {copy.territoryOptimization}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-[#f2f2f0] sm:text-6xl">
            <bdi dir="ltr">{copy.brand}</bdi>
          </h1>
          <p className="mt-4 max-w-xl text-2xl font-medium leading-snug text-slate-800 dark:text-slate-200 sm:text-[1.7rem]">
            {copy.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b7c99] dark:text-slate-300">
            {renderHighlighted(copy.description, {
              route: copy.route,
              territory: copy.territory,
              brand: copy.brand,
            })}
          </p>
          <Link
            to=""
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0F732E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F732E]/90"
          >
            {copy.getStarted}
          </Link>
        </div>
      </div>
    </section>
  );
};
