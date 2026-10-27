import { useState } from 'react';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

export type FaqProduct = 'sRoute' | 'sLocator' | 'databricks';

export const Faq = ({ product }: { product: FaqProduct }) => {
  const { lang } = useLanguage();
  const copy = translations[lang].faq;
  const items = copy[product];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const splitAt = Math.floor(items.length / 2);
  const columns = [items.slice(0, splitAt), items.slice(splitAt)];

  return (
    <section className="bg-[#e7eef2] py-16 font-normal dark:bg-[#24302c] sm:py-20 lg:py-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-[32px] font-medium tracking-tight text-[#5c564f] dark:text-slate-100 sm:text-[36px]">
          {copy.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-20 md:mt-14 md:grid-cols-2 lg:gap-x-24">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="flex flex-col">
              {column.map((item, itemIndex) => {
                const index = (columnIndex === 0 ? 0 : splitAt) + itemIndex;
                const open = openIndex === index;
                const panelId = `faq-panel-${product}-${index}`;
                return (
                  <li key={item.question} className="border-b border-transparent py-3.5">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="w-full text-start text-[15px] font-normal leading-[1.45] text-[#0F732E] transition-colors hover:underline dark:text-[#7dcea0]"
                    >
                      {item.question}
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`max-w-md pt-2.5 text-[14px] leading-[1.7] text-[#4b5563] transition-all duration-300 ease-out dark:text-slate-300 ${
                            open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};
