import { Link } from 'react-router-dom';
import {
  FaBolt,
  FaBullseye,
  FaBuildingColumns,
  FaChartLine,
  FaDiagramProject,
  FaLinkedin,
  FaRocket,
  FaScrewdriverWrench,
  FaTowerBroadcast,
  FaUserTie,
} from 'react-icons/fa6';
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import type { IconType } from 'react-icons';
import { Fragment, useEffect, useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { translations } from '../i18n';

const ABDULLAH_PHOTO = '/images/northernacs/abdullah-abbas.jpg';
const HAROUN_PHOTO = '/images/northernacs/haroun-bacha.jpg';
const DATABRICKS_LOGO = '/images/northernacs/databricks.png';
const SLOCATOR_LOGO = '/images/northernacs/s-locator-logo.png';
// Only the company page is known; replace with each leader's own profile URL when available.
const LEADER_LINKEDIN = 'https://www.linkedin.com/company/northern-analytic';

const getLeaderPhoto = (name: string) =>
  name.includes('Haroun') || name.includes('هارون') ? HAROUN_PHOTO : ABDULLAH_PHOTO;

const HERO_IMAGE = '/images/northernacs/about-us-northernacs-scaled.jpg';

const AboutPage = () => {
  const { lang } = useLanguage();
  const copy = translations[lang];
  const t = copy.aboutPage;
  const nav = copy.nav;

  return (
    <>
      <section className="relative w-full">
        <img
          src={HERO_IMAGE}
          alt={t.pageEyebrow}
          className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[600px]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          className={`absolute bottom-0 z-10 px-6 pb-8 sm:px-12 md:px-16 md:pb-12 ${
            lang === 'ar' ? 'right-0 text-right' : 'left-0 text-left'
          }`}
        >
          <nav
            aria-label={lang === 'ar' ? 'مسار التنقل' : 'Breadcrumb'}
            className="text-sm font-medium text-white/85 md:text-[13px]"
          >
            <Link to="/" className="transition-colors hover:text-white">
              <bdi>{nav.home}</bdi>
            </Link>
            <span className="mx-1.5 text-white/60">/</span>
            <bdi className="text-white/90">{nav.about}</bdi>
          </nav>
          <h1
            dir="auto"
            className="mt-8 text-4xl font-bold leading-none text-white sm:text-5xl md:text-[56px]"
          >
            {t.pageEyebrow}
          </h1>
        </div>
      </section>

      <OverviewSection
        isAr={lang === 'ar'}
        title={t.overviewTitle}
        paragraphs={t.overviewParagraphs}
        servicesIntro={t.overviewServicesIntro}
        services={t.overviewServices}
        numbersTitle={t.numbersTitle}
        prevLabel={t.numbersPrev}
        nextLabel={t.numbersNext}
        stats={t.numbers}
      />

      <LeadershipSection
        isAr={lang === 'ar'}
        title={t.leadershipTitle}
        leaders={t.leaders}
        prevLabel={t.leadershipPrev}
        nextLabel={t.leadershipNext}
        linkedinLabel={copy.footer.linkedinAria}
      />

      <ClientsSection
        isAr={lang === 'ar'}
        title={t.clientsTitle}
        description={t.clientsDescription}
        description2={t.clientsDescription2}
        buttonLabel={t.clientsButton}
        stories={t.stories}
      />

      <TimelineSection
        isAr={lang === 'ar'}
        title={t.engagementTitle}
        prevLabel={t.numbersPrev}
        nextLabel={t.numbersNext}
        steps={t.steps}
      />

      <SuccessSection
        isAr={lang === 'ar'}
        title={t.storiesTitle}
        buttonLabel={t.clientsButton}
        prevLabel={t.numbersPrev}
        nextLabel={t.numbersNext}
        stories={t.stories}
        partner={{ title: t.storiesPartnerTitle, text: t.storiesPartnerText }}
        product={{ title: t.storiesProductTitle, text: t.storiesProductText }}
      />
    </>
  );
};

type Stat = { value: string; label: string };

/** Items visible at once: `desktop` on lg+, 2 on sm+, otherwise 1. */
const getPerPage = (desktop: number) => {
  if (typeof window === 'undefined') return desktop;
  if (window.matchMedia('(min-width: 1024px)').matches) return desktop;
  if (window.matchMedia('(min-width: 640px)').matches) return 2;
  return 1;
};

const usePerPage = (desktop = 4) => {
  const [perPage, setPerPage] = useState(() => getPerPage(desktop));
  useEffect(() => {
    const onResize = () => setPerPage(getPerPage(desktop));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [desktop]);
  return perPage;
};

/** Wraps `{highlighted}` segments of a translated string in a bold accent span. */
const renderHighlighted = (text: string) =>
  text.split(/\{(.*?)\}/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-nacs-accent dark:text-emerald-400">
        {part}
      </strong>
    ) : (
      part
    ),
  );

const Diamond = () => (
  <svg viewBox="0 0 36 44" aria-hidden="true" className="h-9 w-[30px] shrink-0 lg:h-11 lg:w-9">
    <polygon points="18,0 0,22 18,44" className="fill-[#5aa98c] dark:fill-emerald-500" />
    <polygon points="18,0 36,22 18,44" className="fill-[#8ecbb4] dark:fill-emerald-300" />
  </svg>
);

const OverviewSection = ({
  isAr,
  title,
  paragraphs,
  servicesIntro,
  services,
  numbersTitle,
  prevLabel,
  nextLabel,
  stats,
}: {
  isAr: boolean;
  title: string;
  paragraphs: readonly string[];
  servicesIntro: string;
  services: readonly string[];
  numbersTitle: string;
  prevLabel: string;
  nextLabel: string;
  stats: readonly Stat[];
}) => {
  const perPage = usePerPage();
  const maxIndex = Math.max(0, stats.length - perPage);
  const [index, setIndex] = useState(0);
  const current = Math.min(index, maxIndex);
  const isFirst = current === 0;
  const isLast = current === maxIndex;

  const PrevIcon = isAr ? FiArrowRight : FiArrowLeft;
  const NextIcon = isAr ? FiArrowLeft : FiArrowRight;

  const arrowClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-nacs-green bg-white text-nacs-green transition-colors hover:bg-nacs-green hover:text-white disabled:cursor-default disabled:border-[#d9e8e1] disabled:text-[#c3d9cf] disabled:hover:bg-white disabled:hover:text-[#c3d9cf] lg:h-[46px] lg:w-[46px] dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-[#343433] dark:disabled:border-[#484846] dark:disabled:text-[#5b5b59]';

  return (
    <section className="relative overflow-hidden border-b-2 border-nacs-green bg-white dark:bg-[#343433]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute end-0 top-0 h-full w-[9.2%] min-w-[44px] bg-[#f3f3f3] dark:bg-white/5 rtl:-scale-x-100"
        style={{ clipPath: 'polygon(100% 0, 0 47%, 96% 100%, 100% 100%)' }}
      />

      <div className="relative mx-auto max-w-[1440px] px-[6.3%] pb-14 pt-12 lg:pb-24 lg:pt-[72px]">
        <h2 className="text-3xl font-bold leading-[1.2] text-nacs-greenDeep sm:text-4xl dark:text-white">
          {title}
        </h2>

        <div className="mt-[22px] space-y-1.5 text-sm font-normal leading-[1.6] text-[#333] dark:text-slate-200">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{renderHighlighted(paragraph)}</p>
          ))}
          <p className="pt-2">{servicesIntro}</p>
          <ul className="list-disc space-y-1.5 ps-5 marker:text-nacs-accent">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 lg:mt-14">
          <h3 className="text-xl font-bold leading-8 text-nacs-greenDeep sm:text-2xl dark:text-white">
            {numbersTitle}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label={prevLabel}
              disabled={isFirst}
              onClick={() => setIndex(Math.max(0, current - 1))}
              className={arrowClass}
            >
              <PrevIcon size={16} />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              disabled={isLast}
              onClick={() => setIndex(Math.min(maxIndex, current + 1))}
              className={arrowClass}
            >
              <NextIcon size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden lg:mt-14">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)` }}
          >
            {stats.map((stat, statIndex) => {
              const visible = statIndex >= current && statIndex < current + perPage;
              // Separator sits on the edge between two visible items only.
              const showDiamond = statIndex >= current && statIndex < current + perPage - 1;
              return (
                <div
                  key={stat.label}
                  aria-hidden={!visible}
                  className="relative flex shrink-0 flex-col items-center px-2 text-center"
                  style={{ flexBasis: `${100 / perPage}%` }}
                >
                  <span className="bg-gradient-to-r from-nacs-green to-[#7dd3b5] bg-clip-text text-4xl font-bold leading-none text-transparent sm:text-5xl lg:text-[52px] dark:from-emerald-400 dark:to-emerald-200">
                    {stat.value}
                  </span>
                  <span className="mt-2.5 text-sm font-normal text-[#2f8f6c] dark:text-emerald-300">
                    {stat.label}
                  </span>
                  {statIndex < stats.length - 1 && (
                    <div
                      aria-hidden="true"
                      className={`absolute start-full top-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-500 rtl:translate-x-1/2 ${showDiamond ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Diamond />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type Leader = { name: string; role: string; text: string };

/** Portrait with a graceful silhouette fallback while the real photo is missing. */
const LeaderPhoto = ({
  src,
  alt,
  className,
  iconClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  iconClassName: string;
  imageClassName: string;
}) => {
  const [errored, setErrored] = useState(false);
  return (
    <div className={className}>
      {errored ? (
        <FaUserTie aria-hidden="true" className={iconClassName} />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className={imageClassName}
          loading="lazy"
        />
      )}
    </div>
  );
};

const LeadershipSection = ({
  isAr,
  title,
  leaders,
  prevLabel,
  nextLabel,
  linkedinLabel,
}: {
  isAr: boolean;
  title: string;
  leaders: readonly Leader[];
  prevLabel: string;
  nextLabel: string;
  linkedinLabel: string;
}) => {
  const [active, setActive] = useState(0);
  const total = leaders.length;
  const leader = leaders[Math.min(active, total - 1)];
  const photo = getLeaderPhoto(leader.name);

  const goPrev = () => setActive((active - 1 + total) % total);
  const goNext = () => setActive((active + 1) % total);
  const PrevIcon = isAr ? FiChevronRight : FiChevronLeft;
  const NextIcon = isAr ? FiChevronLeft : FiChevronRight;

  const arrowClass =
    'flex h-[35px] w-[35px] items-center justify-center rounded-full border border-nacs-green bg-white text-nacs-green transition-colors hover:bg-nacs-green hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-[#343433]';

  return (
    <section className="bg-white dark:bg-[#343433]">
      <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-14 sm:px-10 lg:px-[13.5%] lg:pb-16 lg:pt-[72px]">
        <h2 className="text-3xl font-bold leading-[1.2] text-nacs-greenDeep dark:text-white">
          {title}
        </h2>

        <div className="mt-6 grid items-stretch gap-6 lg:mt-[30px] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
          <div className="flex flex-col justify-between lg:h-[min(24.2vw,348px)] lg:pb-[37px] lg:pt-8">
            <div key={leader.name} className="max-w-[450px] animate-fade-in-up">
              <div className="flex items-center gap-[15px]">
                <h3 className="text-2xl font-bold leading-8 text-[#14142b] dark:text-white">
                  {leader.name}
                </h3>
                <a
                  href={LEADER_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${linkedinLabel} - ${leader.name}`}
                  className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[5px] border border-[#e3e5e8] bg-white text-[#4a4f57] transition-colors hover:border-nacs-green hover:text-nacs-green dark:border-[#484846] dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  <FaLinkedin size={15} />
                </a>
              </div>
              <p className="mt-2 text-[13px] font-normal leading-[18px] text-[#555] dark:text-slate-300">
                {leader.role}
              </p>
              <p className="mt-[19px] text-[13px] font-normal leading-5 text-[#333] dark:text-slate-200">
                {leader.text}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5 lg:mt-0">
              <button type="button" aria-label={prevLabel} onClick={goPrev} className={arrowClass}>
                <PrevIcon size={14} />
              </button>
              <button type="button" aria-label={nextLabel} onClick={goNext} className={arrowClass}>
                <NextIcon size={14} />
              </button>
            </div>
          </div>

          <div className="order-first mx-auto lg:order-none lg:mx-0">
            <div
              key={leader.name}
              className="relative h-[320px] w-[300px] animate-fade-in-up lg:h-[min(24.2vw,348px)] lg:w-[min(23.3vw,335px)]"
            >
              <LeaderPhoto
                src={photo}
                alt={leader.name}
                className="flex h-full w-full items-end justify-center"
                iconClassName="h-[88%] w-[88%] translate-y-[6%] text-[#dbe4df] dark:text-white/10"
                imageClassName="h-full w-full object-contain object-bottom"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#343433] dark:via-[#343433]/70" />
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          {leaders.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={selected}
                aria-label={item.name}
                className="group flex w-[104px] flex-col items-center text-center lg:w-[min(8.9vw,128px)]"
              >
                <LeaderPhoto
                  src={getLeaderPhoto(item.name)}
                  alt=""
                  className={`flex aspect-[128/142] w-full items-end justify-center overflow-hidden rounded-[10px] border bg-[#f3f4f6] transition-colors dark:bg-white/5 ${
                    selected
                      ? 'border-nacs-green/70 dark:border-emerald-400/70'
                      : 'border-transparent group-hover:border-nacs-green/30'
                  }`}
                  iconClassName="h-[68%] w-[68%] translate-y-[8%] text-[#c9d4ce] dark:text-white/15"
                  imageClassName="h-full w-full object-cover object-top"
                />
                <span
                  className={`-mx-2 mt-[7px] block w-[calc(100%+16px)] text-[13px] font-bold leading-4 transition-colors ${
                    selected
                      ? 'text-[#111] dark:text-white'
                      : 'text-[#9a9a9a] group-hover:text-[#555] dark:text-slate-400'
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`-mx-2 block w-[calc(100%+16px)] text-[11px] font-normal leading-[14px] ${
                    selected
                      ? 'text-[#777] dark:text-slate-300'
                      : 'text-[#b4b4b4] dark:text-slate-500'
                  }`}
                >
                  {item.role}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

type Step = { title: string; text: string };

const stepIcons: IconType[] = [FaBullseye, FaDiagramProject, FaScrewdriverWrench, FaRocket];

const TimelineSection = ({
  isAr,
  title,
  prevLabel,
  nextLabel,
  steps,
}: {
  isAr: boolean;
  title: string;
  prevLabel: string;
  nextLabel: string;
  steps: readonly Step[];
}) => {
  const perPage = usePerPage(3);
  const maxIndex = Math.max(0, steps.length - perPage);
  const [index, setIndex] = useState(0);
  const current = Math.min(index, maxIndex);

  const PrevIcon = isAr ? FiChevronRight : FiChevronLeft;
  const NextIcon = isAr ? FiChevronLeft : FiChevronRight;

  const arrowClass =
    'flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent';

  return (
    <section className="bg-[#0a3a2d] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-12 sm:px-10 lg:px-[13.65%] lg:pb-[150px] lg:pt-[52px]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black uppercase leading-9 text-white sm:text-3xl">
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              aria-label={prevLabel}
              disabled={current === 0}
              onClick={() => setIndex(Math.max(0, current - 1))}
              className={arrowClass}
            >
              <PrevIcon size={13} />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              disabled={current === maxIndex}
              onClick={() => setIndex(Math.min(maxIndex, current + 1))}
              className={arrowClass}
            >
              <NextIcon size={13} />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden lg:mt-[60px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)` }}
          >
            {steps.map((step, stepIndex) => {
              const Icon = stepIcons[stepIndex] ?? FaBullseye;
              const visible = stepIndex >= current && stepIndex < current + perPage;
              const isFirstStep = stepIndex === 0;
              const isLastStep = stepIndex === steps.length - 1;
              // The line starts at the first diamond and stops at the last one.
              const lineClass =
                isFirstStep && isLastStep
                  ? 'hidden'
                  : isFirstStep
                    ? 'start-1/2 end-0'
                    : isLastStep
                      ? 'start-0 end-1/2'
                      : 'inset-x-0';
              return (
                <div
                  key={step.title}
                  aria-hidden={!visible}
                  className="shrink-0 px-[11px]"
                  style={{ flexBasis: `${100 / perPage}%` }}
                >
                  <div className="flex h-16 items-center justify-center">
                    <Icon aria-hidden="true" className="text-[52px] text-[#8fe3c0]" />
                  </div>

                  <div className="relative -mx-[11px] mt-4 h-[22px]">
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 h-px -translate-y-1/2 bg-white/25 ${lineClass}`}
                    />
                    <svg
                      viewBox="0 0 13 22"
                      aria-hidden="true"
                      className="absolute left-1/2 top-0 h-[22px] w-[13px] -translate-x-1/2"
                    >
                      <polygon points="6.5,0 0,11 6.5,22" className="fill-[#28a075]" />
                      <polygon points="6.5,0 13,11 6.5,22" className="fill-[#34b88a]" />
                    </svg>
                  </div>

                  <p className="mt-[15px] text-[11px] font-bold leading-4 text-[#8fe3c0]">
                    {String(stepIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-[5px] text-[12.5px] font-extrabold uppercase leading-[18px] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-[9px] max-w-[300px] text-[11px] font-normal leading-[18px] text-white/70">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type Story = { icon: string; sector: string };

type MarqueeItem =
  | { key: string; kind: 'logo'; src: string; alt: string; scaleClass: string }
  | { key: string; kind: 'sector'; label: string; Icon: IconType };

const sectorIcons: Record<string, IconType> = {
  bank: FaBuildingColumns,
  strategy: FaChartLine,
  telecom: FaTowerBroadcast,
  energy: FaBolt,
};

// Each logical set is repeated so one "group" is always wider than the viewport.
const MARQUEE_REPEATS = 3;

const ClientsSection = ({
  isAr,
  title,
  description,
  description2,
  buttonLabel,
  stories,
}: {
  isAr: boolean;
  title: string;
  description: string;
  description2: string;
  buttonLabel: string;
  stories: readonly Story[];
}) => {
  const ButtonIcon = isAr ? FiArrowLeft : FiArrowRight;

  const sectorItems: MarqueeItem[] = stories.map((story) => ({
    key: story.icon,
    kind: 'sector',
    label: story.sector,
    Icon: sectorIcons[story.icon] ?? FaChartLine,
  }));
  const logoItems: MarqueeItem[] = [
    {
      key: 'databricks',
      kind: 'logo',
      src: DATABRICKS_LOGO,
      alt: 'Databricks',
      scaleClass: 'scale-[0.8]',
    },
    {
      key: 's-locator',
      kind: 'logo',
      src: SLOCATOR_LOGO,
      alt: 'S-Locator',
      scaleClass: 'scale-[1.3]',
    },
  ];
  const items = [
    logoItems[0],
    sectorItems[0],
    logoItems[1],
    sectorItems[2],
    sectorItems[1],
    sectorItems[3],
  ].filter((item): item is MarqueeItem => Boolean(item));

  const renderCard = (item: MarqueeItem) => (
    <li className="flex h-[103px] w-[190px] shrink-0 items-center justify-center rounded-md border border-white/[0.14] bg-white/[0.03]">
      {item.kind === 'logo' ? (
        <img
          src={item.src}
          alt={item.alt}
          // Opaque white-background logos: invert -> black bg, then lift to pure white.
          style={{ filter: 'invert(1) grayscale(1) brightness(2.5)' }}
          className={`h-full w-full object-contain mix-blend-lighten ${item.scaleClass}`}
          loading="lazy"
          draggable={false}
        />
      ) : (
        <span className="flex items-center gap-3 px-5 text-start" dir={isAr ? 'rtl' : 'ltr'}>
          <item.Icon aria-hidden="true" className="shrink-0 text-[30px] text-white" />
          <span className="text-[13px] font-semibold leading-[18px] text-white">{item.label}</span>
        </span>
      )}
    </li>
  );

  return (
    <section className="relative overflow-hidden bg-[#0a1411] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(62% 72% at 18% 100%, rgba(12,122,84,0.5) 0%, rgba(8,86,61,0.2) 45%, rgba(8,86,61,0) 78%)',
        }}
      />

      <div className="relative pb-16 pt-12 lg:pb-[170px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[15.35%]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold leading-[1.2] text-white">{title}</h2>
              <p className="mt-8 max-w-[520px] text-[13px] font-normal leading-[18px] text-[#9da8b4]">
                {description}
              </p>
              <ul className="list-disc space-y-1.5 ps-5 marker:text-nacs-accent">
                <li className="mt-8 max-w-[520px] text-[13px] font-normal leading-[18px] text-[#9da8b4]">
                  {description2}
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-[15px] hidden h-8 shrink-0 items-center gap-2 rounded-xl bg-[#0f8a63] px-[18px] text-[13px] font-bold text-white transition-colors hover:bg-[#12a074] sm:inline-flex"
            >
              {buttonLabel}
              <ButtonIcon size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          dir="ltr"
          className="mt-10 overflow-hidden lg:mt-[53px]"
          role="group"
          aria-label={title}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-5 pr-5">
                {Array.from({ length: MARQUEE_REPEATS }).flatMap((_, repeat) =>
                  items.map((item) => (
                    <Fragment key={`${copy}-${repeat}-${item.key}`}>{renderCard(item)}</Fragment>
                  )),
                )}
              </ul>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1440px] px-6 sm:hidden">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0f8a63] px-5 text-[13px] font-bold text-white"
          >
            {buttonLabel}
            <ButtonIcon size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

type HighlightCard =
  | {
      key: string;
      kind: 'logo';
      src: string;
      alt: string;
      scaleClass: string;
      title: string;
      text: string;
    }
  | { key: string; kind: 'icon'; Icon: IconType; title: string; text: string };

const SuccessSection = ({
  isAr,
  title,
  buttonLabel,
  prevLabel,
  nextLabel,
  stories,
  partner,
  product,
}: {
  isAr: boolean;
  title: string;
  buttonLabel: string;
  prevLabel: string;
  nextLabel: string;
  stories: readonly (Story & { result: string })[];
  partner: { title: string; text: string };
  product: { title: string; text: string };
}) => {
  const perPage = usePerPage(4);

  const storyCard = (story: Story & { result: string }): HighlightCard => ({
    key: story.icon,
    kind: 'icon',
    Icon: sectorIcons[story.icon] ?? FaChartLine,
    title: story.sector,
    text: story.result,
  });
  const partnerCard: HighlightCard = {
    key: 'databricks',
    kind: 'logo',
    src: DATABRICKS_LOGO,
    alt: 'Databricks',
    scaleClass: 'scale-100',
    ...partner,
  };
  const productCard: HighlightCard = {
    key: 's-locator',
    kind: 'logo',
    src: SLOCATOR_LOGO,
    alt: 'S-Locator',
    scaleClass: 'scale-[1.5]',
    ...product,
  };
  const cards = [
    partnerCard,
    stories[0] && storyCard(stories[0]),
    stories[1] && storyCard(stories[1]),
    productCard,
    stories[2] && storyCard(stories[2]),
    stories[3] && storyCard(stories[3]),
  ].filter((card): card is HighlightCard => Boolean(card));

  const maxIndex = Math.max(0, cards.length - perPage);
  const [index, setIndex] = useState(0);
  const current = Math.min(index, maxIndex);

  const ButtonIcon = isAr ? FiArrowLeft : FiArrowRight;
  const PrevIcon = isAr ? FiChevronRight : FiChevronLeft;
  const NextIcon = isAr ? FiChevronLeft : FiChevronRight;

  const arrowClass =
    'absolute top-1/2 z-10 flex h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-[#2f8f6c] bg-nacs-green text-white shadow-md transition-colors hover:bg-nacs-greenDark disabled:cursor-default disabled:opacity-40 disabled:hover:bg-nacs-green';

  return (
    <section className="relative overflow-hidden bg-[#f1f4f3] dark:bg-[#2b2b2a]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 18% 100%, rgba(8,86,61,0.1) 0%, rgba(8,86,61,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-12 sm:px-10 lg:px-[13.5%] lg:pb-24 lg:pt-[50px]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold leading-8 text-nacs-greenDeep dark:text-white">
            {title}
          </h2>
          <Link
            to="/contact"
            className="hidden h-[33px] shrink-0 items-center gap-2 rounded-xl bg-nacs-green px-[18px] text-[13px] font-bold text-white transition-colors hover:bg-nacs-greenDark sm:inline-flex"
          >
            {buttonLabel}
            <ButtonIcon size={12} aria-hidden="true" />
          </Link>
        </div>

        <div className="relative mt-8 lg:mt-[42px]">
          <button
            type="button"
            aria-label={prevLabel}
            disabled={current === 0}
            onClick={() => setIndex(Math.max(0, current - 1))}
            className={`${arrowClass} start-0`}
          >
            <PrevIcon size={16} />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={current === maxIndex}
            onClick={() => setIndex(Math.min(maxIndex, current + 1))}
            className={`${arrowClass} end-0`}
          >
            <NextIcon size={16} />
          </button>

          <div className="-my-6 mx-[22px] overflow-hidden py-6">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)` }}
            >
              {cards.map((card, cardIndex) => (
                <div
                  key={card.key}
                  aria-hidden={cardIndex < current || cardIndex >= current + perPage}
                  className="shrink-0 px-2.5"
                  style={{ flexBasis: `${100 / perPage}%` }}
                >
                  <article className="flex h-full min-h-[253px] flex-col items-center overflow-hidden rounded-[17px] border border-[#dde5e1] bg-white px-3 pb-6 pt-7 text-center shadow-[0_6px_24px_rgba(8,86,61,0.07)] dark:border-[#484846] dark:bg-[#3e3e3d]">
                    <div className="flex h-[100px] w-full max-w-[175px] items-center justify-center">
                      {card.kind === 'logo' ? (
                        <img
                          src={card.src}
                          alt={card.alt}
                          className={`max-h-full w-full object-contain mix-blend-multiply ${card.scaleClass}`}
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <card.Icon aria-hidden="true" className="text-[64px] text-nacs-green" />
                      )}
                    </div>
                    <h3 className="mt-9 text-sm font-bold leading-5 text-[#14231d] dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-[175px] text-[11px] font-normal leading-[17px] text-[#5b6b64] dark:text-slate-300">
                      {card.text}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
