import {
  FaBottleDroplet,
  FaBuilding,
  FaCar,
  FaCartShopping,
  FaDisplay,
  FaHeartPulse,
  FaIndustry,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

const categoryIcons: IconType[] = [
  FaCar,
  FaBuilding,
  FaCartShopping,
  FaBottleDroplet,
  FaDisplay,
  FaIndustry,
  FaHeartPulse,
];

export const Customers = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].customers;

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-medium text-slate-900 sm:text-4xl">{copy.title}</h2>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale lg:gap-16">
          {copy.logos.map((logo) => (
            <img key={logo.alt} src="" alt={logo.alt} className="h-12 w-28 object-contain" />
          ))}
        </div>

        <div className="mx-auto flex max-w-[740px] flex-wrap justify-center gap-3">
          {copy.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <div
                key={category.name}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[#3d6f93] shadow-sm"
              >
                <Icon className="h-4 w-4 text-[#0F732E] dark:text-[#0F732E]/80" />
                <span className="text-[#3d3d3d] dark:text-slate-100">{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
