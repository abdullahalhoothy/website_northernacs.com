import { useState } from 'react';
import { FaTag, FaUser } from 'react-icons/fa6';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

const DEFAULT_PER_PERSON_POTENTIAL = 50_000;
const PHARMA_PER_PERSON_POTENTIAL = 75_000;

const getPerPersonPotential = (industry: string) =>
  industry === 'pharma-medtech' ? PHARMA_PER_PERSON_POTENTIAL : DEFAULT_PER_PERSON_POTENTIAL;

const parsePeopleInput = (raw: string) => {
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed) || parsed < 0) return 0;
  return parsed;
};

export const Calculator = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].calculator;
  const isRTL = lang === 'ar';

  const [routePlanner, setRoutePlanner] = useState(true);
  const [territoryOptimization, setTerritoryOptimization] = useState(false);
  const [industry, setIndustry] = useState('');
  const [fieldService, setFieldService] = useState(1);
  const [management, setManagement] = useState(0);

  const effectiveManagement = territoryOptimization ? Math.max(0, management) : 0;
  const totalPeople = Math.max(0, fieldService) + effectiveManagement;
  const salesPotential = totalPeople * getPerPersonPotential(industry);

  // At least one product must always stay selected.
  const handleRoutePlannerChange = (checked: boolean) => {
    if (!checked && !territoryOptimization) return;
    setRoutePlanner(checked);
  };

  const handleTerritoryOptimizationChange = (checked: boolean) => {
    setTerritoryOptimization(checked);
    if (checked && management === 0) setManagement(1);
    if (!checked && !routePlanner) setRoutePlanner(true);
  };

  const formatAmount = (value: number) =>
    new Intl.NumberFormat(lang === 'ar' ? 'ar' : 'en-US').format(value);

  const industries = [
    { value: 'automotive', label: copy.industries.automotive },
    { value: 'industry-construction', label: copy.industries.industryConstruction },
    { value: 'consumer-goods', label: copy.industries.consumerGoods },
    { value: 'pharma-medtech', label: copy.industries.pharmaMedtech },
  ];

  const inputClass =
    'w-full rounded border border-[#c8c8c8] bg-white px-2 py-2 text-center text-[15px] text-[#444] outline-none focus:border-[#0F732E] dark:border-[#0F732E] dark:bg-[#0F732E] dark:text-slate-100';

  return (
    <div className="bg-sky-100/60 py-16 dark:bg-[#2b2b2a] lg:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-[#484846] dark:bg-[#343433] lg:p-12">
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-[1.75rem] font-normal leading-snug text-[#333] dark:text-slate-100 sm:text-[2rem] lg:text-[2.35rem]">
            {copy.title}
          </h3>
          <p className="text-base font-light text-[#666] dark:text-[#a3a39e]">{copy.description}</p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <label className="flex cursor-pointer items-center gap-2 text-[15px] text-[#0F732E] dark:text-[#0F732E]">
            <input
              type="checkbox"
              checked={routePlanner}
              onChange={(e) => handleRoutePlannerChange(e.target.checked)}
              className="h-[18px] w-[18px] cursor-pointer accent-[#0F732E]"
            />
            {copy.routePlanner}
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-[15px] text-[#0F732E] dark:text-[#0F732E]">
            <input
              type="checkbox"
              checked={territoryOptimization}
              onChange={(e) => handleTerritoryOptimizationChange(e.target.checked)}
              className="h-[18px] w-[18px] cursor-pointer accent-[#0F732E]"
            />
            {copy.territoryOptimization}
          </label>
        </div>

        <div className="mb-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1fr_minmax(220px,280px)] md:gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <FaTag className="h-[18px] w-[18px] shrink-0 text-[#0F732E] dark:text-[#0F732E]" />
                <span className="text-base font-medium text-[#333] dark:text-slate-100">
                  {copy.industry}
                </span>
              </div>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={`w-full cursor-pointer rounded border border-[#c8c8c8] bg-white px-3 py-2 text-[15px]  text-[#444] outline-none focus:border-[#0F732E] dark:border-[#484846] dark:bg-[#2b2b2a] dark:text-slate-100 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <option value="" disabled>
                  {copy.selectIndustry}
                </option>
                {industries.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <FaUser className="h-[18px] w-[18px] shrink-0 text-[#0F732E] dark:text-[#0F732E]" />
                <span className="text-base font-medium text-[#333] dark:text-slate-100">
                  {copy.people}
                </span>
              </div>
              <div
                className={`grid gap-4 ${
                  territoryOptimization ? 'grid-cols-2' : 'max-w-[140px] grid-cols-1'
                }`}
              >
                <div className="flex flex-col">
                  <label className="mb-1 text-[13px] text-[#666] dark:text-[#a3a39e]">
                    {copy.fieldService}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={fieldService}
                    onChange={(e) => setFieldService(parsePeopleInput(e.target.value))}
                    dir="ltr"
                    className={inputClass}
                  />
                </div>
                {territoryOptimization && (
                  <div className="flex flex-col">
                    <label className="mb-1 text-[13px] text-[#666] dark:text-[#a3a39e]">
                      {copy.management}
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={management}
                      onChange={(e) => setManagement(parsePeopleInput(e.target.value))}
                      dir="ltr"
                      className={inputClass}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex min-h-[140px] flex-col items-center justify-center rounded-md bg-[#0F732E] px-5 py-8 text-center text-white md:min-h-0">
            <div
              className="mb-2 flex flex-row text-[2rem] font-semibold leading-none tracking-tight lg:text-[2.5rem]"
              dir="ltr"
            >
              {formatAmount(salesPotential)}{' '}
              <span className="ml-2 flex items-center text-sm font-normal">{copy.currency}</span>
            </div>
            <p className="max-w-[10rem] text-sm font-light leading-snug text-white/95 lg:text-[15px]">
              {copy.additionalSalesPotential}
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="mx-auto mb-5 max-w-xl text-[15px] font-medium leading-relaxed text-[#333] dark:text-slate-100 lg:text-base">
            {copy.ctaText}
          </p>
          {/* No action for now: "Start analysis" is intentionally a no-op. */}
          <button
            type="button"
            className="inline-block rounded border border-[#0F732E] px-8 py-2.5 text-[15px] font-medium text-[#0F732E] transition-colors hover:bg-[#0F732E] hover:text-white dark:border-[#0F732E] dark:text-[#0F732E] dark:hover:bg-[#0F732E] dark:hover:text-[#343433]"
          >
            {copy.startAnalysis}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
