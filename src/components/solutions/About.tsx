import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

const accent = 'text-[#0F732E]/80 dark:text-[#0F732E]';

export const About = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].aboutSolution;

  return (
    <section className="bg-white py-10 font-normal dark:bg-[#343433] lg:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-[32px] font-semibold leading-tight text-[#3a3a3a] dark:text-slate-100 sm:text-4xl">
          {copy.titleLead}{' '}
          <bdi dir="ltr" className="whitespace-nowrap">
            {copy.brand}
            <sup className="text-[0.55em] font-normal">®</sup>
          </bdi>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4a4a4a] dark:text-slate-300 sm:text-xl">
          {copy.subtitle}
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[108px]  flex-col items-center justify-center border border-[#e6e6e6] bg-white px-6 py-5 shadow-md rounded-xl dark:border-[#5c5c5a] dark:bg-[#3e3e3d]"
            >
              <p className={`text-[32px] font-bold leading-none ${accent}`}>
                <bdi dir="ltr">{stat.value}</bdi>
              </p>
              <p className="mt-2 text-sm text-[#9aa3ad] dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
