import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandshake,
  FaMinus,
  FaPlus,
  FaQuoteLeft,
  FaRoad,
  FaUmbrellaBeach,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

const itemIcons: IconType[] = [FaRoad, FaHandshake, FaUmbrellaBeach];

export const Advantages = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].advantages;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = copy.items[activeIndex];

  return (
    <section className="bg-white py-20 font-normal dark:bg-[#343433] lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-[#3a3a3a] dark:text-slate-100 sm:text-5xl">
          {copy.titleLead}{' '}
          <bdi dir="ltr" className="whitespace-nowrap">
            {copy.brand}
            <sup className="text-[0.55em] font-normal">®</sup>
          </bdi>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3f3f3f] dark:text-slate-300 sm:text-xl">
          {copy.subtitle}
        </p>

        <h3 className="mt-14 text-3xl font-light text-[#2f3a44] dark:text-slate-200 sm:text-4xl">
          {copy.heading}
        </h3>

        <div
          key={activeIndex}
          className="mx-auto mt-12 flex w-full animate-fade-in-up flex-col items-center gap-8 text-start sm:flex-row sm:items-stretch"
          role="tabpanel"
        >
          <div className="flex w-full shrink-0 flex-col items-center sm:w-56 lg:w-64">
            <img
              src=""
              alt={active.avatarAlt}
              className="h-28 w-28 overflow-hidden rounded-full bg-[#0F732E]/10 dark:bg-[#0F732E]/40 object-cover text-[0px] lg:h-36 lg:w-36"
            />
            <FaQuoteLeft
              className="mt-6 text-3xl text-[#0F732E] dark:text-[#0F732E]/80"
              aria-hidden="true"
            />
          </div>

          <div className="flex min-h-[180px] w-full min-w-0 flex-1 flex-col justify-between border-[#e3e3e3] dark:border-[#5c5c5a] sm:border-s sm:ps-10 lg:min-h-[210px] lg:ps-12">
            <div>
              <img
                src=""
                alt={active.logoAlt}
                className="h-8 w-16 overflow-hidden object-contain text-[0px]"
              />
              <p className="mt-5 text-lg leading-relaxed text-[#3f3f3f] dark:text-slate-200 lg:text-xl">
                {active.quote}
              </p>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div className="text-base leading-snug text-[#8a8a8a] dark:text-slate-400">
                <p>{active.name}</p>
                <p>{active.role}</p>
              </div>
              <Link
                to=""
                className="shrink-0 text-base font-medium text-[#0F732E] hover:underline dark:text-[#0F732E]/80"
              >
                {copy.readMore}
              </Link>
            </div>
          </div>
        </div>

        <div
          role="tablist"
          aria-label={copy.tabsLabel}
          className="mx-auto mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-10"
        >
          {copy.items.map((item, index) => {
            const Icon = itemIcons[index];
            const isActive = index === activeIndex;
            return (
              <button
                key={item.stat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-[160px] flex-col justify-between rounded-md border bg-[#ffffff] px-6 py-6 text-start transition-shadow duration-200 dark:bg-[#3e3e3d] lg:min-h-[180px] lg:px-7 lg:py-7 ${
                  isActive
                    ? 'border-[#e1e1e1] shadow-[0_0_8px_rgba(0,0,0,0.22)] dark:border-[#6a6a68]'
                    : 'border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.13)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.35)]'
                }`}
              >
                <span className="relative block h-14 w-24" aria-hidden="true">
                  <span className="absolute start-0 top-0 text-[#0F732E]">
                    {isActive ? <FaMinus size={22} /> : <FaPlus size={22} />}
                  </span>
                  <Icon className="absolute start-7 top-1 text-5xl text-[#0F732E] dark:text-[#0F732E]/80" />
                </span>
                <span
                  className={`text-lg leading-snug lg:text-xl ${
                    isActive
                      ? 'text-[#0F732E] dark:text-[#0F732E]/80'
                      : 'text-[#3d3d3d] dark:text-slate-100'
                  }`}
                >
                  {item.stat}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
