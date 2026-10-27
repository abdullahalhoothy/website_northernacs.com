import { FiArrowLeft, FiCalendar, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageProvider';
import { specialtyCoffeeJeddahFaq as faqCopy } from '../../data/specialtyCoffeeJeddahFaq';
import { translations, type Lang } from '../../i18n';

export const SPECIALTY_COFFEE_JEDDAH_SLUG = 'best-area-specialty-coffee-jeddah';

const HERO_IMAGE = '/images/northernacs/best-area-specialty-coffee-jeddah.jpg';

type ArticlePost = {
  date: string;
  category?: string;
  image?: string;
  authors?: Record<Lang, string[]>;
  title: Record<Lang, string>;
};

const pointOrder = ['customer', 'specialty', 'commercial', 'access', 'growth', 'suited'] as const;

const formatDate = (date: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-ca-gregory' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));

const SpecialtyCoffeeJeddahArticle = ({ post }: { post: ArticlePost }) => {
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const article = translations[lang].specialtyCoffeeJeddah;
  const text = article;
  const labels = article.areasSection;
  const categoryLabel =
    t.categories.find((item) => item.id === post.category)?.label ?? article.fallbackCategory;
  const author = post.authors?.[lang]?.[0] ?? article.fallbackAuthor;
  const backLabel = article.back;
  const byLabel = article.by;

  return (
    <article className="bg-[#fafbfc] dark:bg-[#343433]">
      <header className="relative isolate flex h-[calc(100dvh-5rem)] items-center overflow-hidden bg-[#140c24]">
        <img
          src={post.image || HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#11091c]/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-35% via-[#0b0614]/55 to-[#07030f]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-start px-4 text-start sm:px-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-xl border border-[#0F732E] px-4 py-[7px] text-[14px] font-semibold leading-none text-[#0F732E] transition-colors hover:bg-[#3ad75a]/10"
          >
            <FiArrowLeft className="rtl:rotate-180" size={15} aria-hidden="true" />
            {backLabel}
          </Link>
          <span
            className={`mt-3.5 inline-flex rounded-lg bg-[#7E5CAC] px-3.5 py-[6px] text-[11px] font-bold uppercase leading-none text-white ${
              lang === 'en' ? 'tracking-[0.16em]' : ''
            }`}
          >
            {categoryLabel}
          </span>
          <h1 className="mt-6 max-w-[740px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[54px]">
            {post.title[lang]}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-[14px] font-medium text-white">
            <span className="inline-flex items-center gap-2">
              <FiCalendar className="text-[#c4b5fd]" size={15} aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
            </span>
            <span aria-hidden="true" className="text-white/80">
              ·
            </span>
            <span className="inline-flex items-center gap-2">
              <FiUser className="text-[#c4b5fd]" size={15} aria-hidden="true" />
              <span>
                {byLabel} {author}
              </span>
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[820px] px-4 pb-16 pt-8 font-normal sm:px-6 sm:pt-10">
        <p className="rounded-2xl border-s-[3px] border-[#0F732E] bg-[#ffffff] px-6 py-5 text-start text-[18px] italic leading-[1.7] text-[#55626e] sm:px-8 sm:py-6 sm:text-[19px]">
          {text.lead}
        </p>

        <h2 className="mt-12 text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#140820] sm:text-[32px]">
          {text.quickTitle}
        </h2>
        <p className="mt-4 text-start text-[16px] leading-[1.8] text-[#5c6772] sm:text-[17px]">
          {text.before}
          <strong className="font-bold text-[#2b1055]">{text.strong}</strong>
          {text.after}
        </p>
        <p className="mt-8 text-start text-[16px] font-bold leading-[1.75] text-[#432c69] sm:text-[17px]">
          {text.closing}
        </p>

        <section className="mt-14">
          <h2 className="text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0F732E] sm:text-[32px]">
            {labels.title}
          </h2>
          <p className="mt-4 text-start text-[16px] leading-[1.8]  sm:text-[17px]">
            {labels.intro}
          </p>
          <div className="mt-10 space-y-10">
            {article.areas.map((area) => (
              <section key={area.name}>
                <h3 className="text-start text-[22px] font-bold leading-tight text-[#7E5CAC]">
                  {area.name}
                </h3>
                <p className="mt-3 text-start text-[16px] leading-[1.8]  sm:text-[17px]">
                  <strong className="font-bold text-[#0F732E]">{labels.standout} </strong>
                  {area.standout}
                </p>
                <ul className="mt-4 list-disc space-y-3 ps-5 text-start text-[16px] leading-[1.75]  marker:text-[#7E5CAC] sm:text-[17px]">
                  {pointOrder.map((key) => (
                    <li key={key}>
                      <strong className="font-bold text-[#0F732E]">{labels[key]} </strong>
                      {area.points[key]}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110222] sm:text-[32px]">
            {article.comparison.title}
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#eceef1] bg-white shadow-[0_10px_30px_rgba(17,2,34,0.06)] dark:border-[#484846] dark:bg-[#3e3e3d]">
            <table className="w-full min-w-[980px] table-fixed border-collapse text-start text-[14px]">
              <colgroup>
                <col className="w-[120px]" />
                <col className="w-[120px]" />
                <col className="w-[130px]" />
                <col className="w-[130px]" />
                <col className="w-[160px]" />
                <col className="w-[160px]" />
                <col className="w-[160px]" />
              </colgroup>
              <thead>
                <tr className="bg-[#110222] text-[11px] font-bold uppercase leading-tight tracking-[0.08em]">
                  {article.comparison.columns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={`border-e border-white/10 px-4 py-4 text-start align-middle last:border-e-0 ${
                        index === article.comparison.columns.length - 1
                          ? 'text-[#0F732E]'
                          : 'text-white'
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {article.comparison.rows.map((row) => (
                  <tr key={row.area} className="border-t border-[#f3f4f6]">
                    <th
                      scope="row"
                      className="border-e border-[#f3f4f6] px-4 py-6 text-start align-middle text-[15px] font-bold leading-snug text-[#211331]"
                    >
                      {row.area}
                    </th>
                    {[
                      row.demand,
                      row.competition,
                      row.purchasing,
                      row.accessibility,
                      row.commercial,
                    ].map((value, index) => (
                      <td
                        key={`${row.area}-${index}`}
                        className="border-e border-[#f3f4f6] px-4 py-6 align-middle text-[14px] font-medium leading-snug text-[#7d8694]"
                      >
                        {value}
                      </td>
                    ))}
                    <td className="px-4 py-6 align-middle text-[15px] font-extrabold leading-snug text-[#1e102e]">
                      {row.fit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {article.closingSections.map((section) => (
          <section key={section.title} className="mt-16">
            <h2 className="text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110222] sm:text-[32px]">
              {section.title}
            </h2>
            {section.blocks.map((block, index) => {
              if ('text' in block) {
                return (
                  <h3
                    key={`${section.title}-sub-${index}`}
                    className={`${index === 0 ? 'mt-5' : 'mt-8'} text-start text-[20px] font-bold leading-snug text-[#0F732E] sm:text-[22px]`}
                  >
                    {block.text}
                  </h3>
                );
              }

              if ('items' in block && block.items) {
                return (
                  <ul
                    key={`${section.title}-list-${index}`}
                    className="mt-4 list-disc space-y-4 ps-5 text-start text-[16px] leading-[1.75] text-[#646C79] marker:text-[#0F732E] sm:text-[17px]"
                  >
                    {block.items.map((item) => (
                      <li key={item.label}>
                        <strong className="font-bold text-[#110222]">{item.label} </strong>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                );
              }

              const tight = section.blocks[index - 1]?.type === 'subhead';
              return (
                <p
                  key={`${section.title}-p-${index}`}
                  className={`${tight ? 'mt-2' : 'mt-4'} text-start text-[16px] leading-[1.8] text-[#646C79] sm:text-[17px]`}
                >
                  {block.parts?.map((part, partIndex) => {
                    if ('link' in part && part.link) {
                      return (
                        <Link
                          key={partIndex}
                          to={part.link}
                          className="font-bold text-[#0F732E] hover:underline"
                        >
                          {part.text}
                        </Link>
                      );
                    }
                    if ('bold' in part && part.bold) {
                      return (
                        <strong key={partIndex} className="font-bold text-[#110222]">
                          {part.text}
                        </strong>
                      );
                    }
                    return <span key={partIndex}>{part.text}</span>;
                  })}
                </p>
              );
            })}
          </section>
        ))}

        <section className="mt-16">
          <h2 className="text-start text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#110222] sm:text-[32px]">
            {faqCopy[lang].title}
          </h2>
          <div className="mt-6 space-y-8">
            {faqCopy[lang].items.map((item) => (
              <div key={item.question}>
                <h3 className="text-start text-[20px] font-bold leading-snug text-[#0F732E] sm:text-[22px]">
                  {item.question}
                </h3>
                <p className="mt-2 text-start text-[16px] leading-[1.8] text-[#646C79] sm:text-[17px]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-[#e6e8ec] pt-10">
          <h2 className="text-start text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#110222] sm:text-[32px]">
            {article.sources.title}
          </h2>
          <ul className="mt-5 list-disc space-y-4 ps-5 text-start text-[16px] leading-[1.75] text-[#646C79] marker:text-[#0F732E] sm:text-[17px]">
            {article.sources.items.map((item) => (
              <li key={item.detail}>
                <strong className="font-bold text-[#110222]">{item.label} </strong>
                {item.detail}{' '}
                {item.href && item.linkLabel ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#0F732E] hover:underline"
                  >
                    {item.linkLabel}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-start text-[13px] italic leading-[1.7] text-[#8b93a0] sm:text-[14px]">
            {article.sources.note}
          </p>
        </section>

        <img
          src={post.image || HERO_IMAGE}
          alt={post.title[lang]}
          className="mt-8 w-full rounded-2xl"
        />
      </div>
    </article>
  );
};

export default SpecialtyCoffeeJeddahArticle;
