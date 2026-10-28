import { FaCircleCheck, FaQuoteLeft } from 'react-icons/fa6';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

export const FeaturesList = () => {
  const { lang } = useLanguage();
  const items = translations[lang].featuresList.items;

  return (
    <section className="overflow-hidden bg-white py-8 dark:bg-[#343433]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {items.map((feature, index) => (
          <div
            key={feature.title}
            className={`grid items-stretch gap-10 py-16 lg:grid-cols-2 lg:gap-20 ${
              index !== 0 ? 'border-t border-slate-100 dark:border-[#484846]' : ''
            }`}
          >
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <h2 className="text-3xl font-medium leading-tight text-slate-900 dark:text-[#f2f2f0] sm:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {feature.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3.5">
                {feature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-slate-500 dark:text-[#a3a39e]"
                  >
                    <FaCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#7E5CAC]/80" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <figure className="mt-8 rounded-2xl border border-slate-100 bg-[#f4f6fb] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-[#5c5c5a] dark:bg-[#3e3e3d] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="flex gap-5">
                  <div className="flex shrink-0 flex-col items-center">
                    <img
                      src=""
                      alt={feature.avatarAlt}
                      className="mb-3 h-14 w-14 overflow-hidden rounded-full bg-white object-cover text-[0px] shadow-sm dark:bg-[#484846]"
                    />
                    <FaQuoteLeft className="text-2xl text-[#7E5CAC]" aria-hidden="true" />
                  </div>
                  <figcaption className="min-w-0">
                    <blockquote className="text-[15px] italic leading-relaxed text-slate-600 dark:text-slate-300">
                      “{feature.quote}”
                    </blockquote>
                    <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-[#f2f2f0]">
                      {feature.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-[#a3a39e]">{feature.role}</p>
                  </figcaption>
                </div>
              </figure>
            </div>

            <div className={`relative min-h-72 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img
                src=""
                alt={feature.imageAlt}
                className="absolute inset-0 h-full w-full object-contain text-[0px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
