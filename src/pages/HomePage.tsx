import { useEffect, useMemo, useRef, useState, type CSSProperties, type RefObject } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';
import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';
import { useTheme } from '../components/ThemeProvider';

const useScrollShrink = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.style.setProperty('--p', '0');
      return;
    }

    let current = 0;
    let target = 0;
    let frame = 0;
    let last = 0;

    const computeTarget = () => {
      const vh = window.innerHeight;
      const top = node.getBoundingClientRect().top;
      const start = vh * 0.95;
      const end = vh * 0.1;
      const raw = Math.min(1, Math.max(0, (start - top) / (start - end)));
      target = raw * raw * (3 - 2 * raw);
    };

    const tick = (now: number) => {
      const dt = last ? Math.min(64, now - last) : 16;
      last = now;
      current += (target - current) * (1 - Math.exp(-dt / 140));
      if (Math.abs(target - current) < 0.0004) current = target;
      node.style.setProperty('--p', current.toFixed(4));
      if (current !== target) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
      }
    };

    const kick = () => {
      computeTarget();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    kick();
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
    };
  }, [ref]);
};

const useOnceInView = (ref: RefObject<HTMLElement | null>, threshold = 0.25) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
};

const riseIn = (visible: boolean, delay: number): CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(22px)',
  transitionProperty: 'opacity, transform',
  transitionDuration: '650ms',
  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  transitionDelay: visible ? `${delay}ms` : '0ms',
});

const parseStatValue = (value: string) => {
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: Number(match[2].replace(/,/g, '')),
    suffix: match[3],
    grouped: match[2].includes(','),
  };
};

const CountStat = ({ value, active }: { value: string; active: boolean }) => {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active || !parsed) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(parsed.number);
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(parsed.number * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    setCurrent(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, parsed]);

  if (!parsed) return value;

  const digits = parsed.grouped ? current.toLocaleString('en-US') : String(current);
  return `${parsed.prefix}${digits}${parsed.suffix}`;
};

const clientLogos = Array.from({ length: 18 }, (_, index) => {
  const id = String(index + 1).padStart(2, '0');
  return `/images/northernacs/clients/logo-${id}.svg`;
});

const HomePage = () => {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isAr = lang === 'ar';
  const isDark = theme === 'dark';
  const offerRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const offerCopyRef = useRef<HTMLDivElement>(null);
  const offerStatsRef = useRef<HTMLElement>(null);
  useScrollShrink(offerRef);
  useScrollShrink(techRef);
  const offerCopySeen = useOnceInView(offerCopyRef, 0.3);
  const offerStatsSeen = useOnceInView(offerStatsRef, 0.25);

  const offerOverlap = 100;

  return (
    <div className="bg-[#f8fafc] dark:bg-[#343433]">
      {/* 1. HERO SECTION */}
      <section
        id="top"
        className="relative flex h-[80vh] min-h-[600px] items-center overflow-hidden"
      >
        {/* إضافة الانعكاس الأفقي للصورة في حالة اللغة العربية فقط */}
        <img
          src="/images/northernacs/riyadh-skyline.jpg"
          alt={t.home.heroImageAlt || 'Riyadh Skyline'}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ${isAr ? 'scale-x-[-1]' : ''}`}
          loading="eager"
        />
        <div
          className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white/80 to-transparent dark:from-[#343433] dark:via-[#343433]/85 dark:to-transparent`}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="mb-6 !text-5xl font-black !leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              {t.home.title}
              <br />
              <span className="text-[#0F732E] dark:text-[#44c96e]">{t.home.accent}</span>
            </h1>

            <div className="mt-10 flex flex-col items-start gap-2 sm:flex-row"></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20 dark:bg-[#343433]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <h2 className="mb-3 text-3xl font-black leading-[1.1]  md:text-[2.5rem] dark:text-white">
              {t.home.clientsTitle}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-[17px] dark:text-slate-300">
              {t.home.clientsSentence}
            </p>
          </div>
          <div className="rounded-[28px] bg-[#dbdbdb] px-6 py-10 sm:px-8 md:rounded-[32px] md:px-10 md:py-12">
            <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-12">
              {clientLogos.map((src, index) => (
                <li key={src} className="flex items-center justify-center">
                  <img
                    src={src}
                    alt={`${t.home.clientsLogoAlt} ${index + 1}`}
                    width={160}
                    height={72}
                    loading="lazy"
                    className="h-12 w-full max-w-[140px] object-contain sm:h-14"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10 dark:bg-[#343433]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-0">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#03261c] via-[#08563D] to-[#5eead4] px-5 py-3 text-white shadow-sm">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    size={16}
                    className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
                  />
                ))}
              </span>
              <span className="text-base font-medium tracking-wide text-slate-500 dark:text-slate-300">
                {t.home.spotlightEyebrow}
              </span>
            </div>
            <h2 className="mb-6 !text-4xl font-black leading-[1.1] text-slate-900 md:text-5xl lg:text-[3.25rem] dark:text-white">
              {t.home.spotlightTitle}
              <br />
              {t.home.spotlightTitleLine}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-[17px] dark:text-slate-300">
              {t.home.spotlightBody}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/northernacs/data-intelligence-sculpture.png"
              alt={t.home.spotlightImageAlt}
              className="h-auto w-full max-w-md object-contain lg:max-w-lg"
              width={1024}
              height={1024}
              loading="lazy"
              onError={(event) => {
                const image = event.currentTarget;
                const fallback = '/images/northernacs/data-intelligence-sculpture.jpg';
                if (!image.src.endsWith(fallback)) {
                  image.src = fallback;
                }
              }}
            />
          </div>
        </div>
      </section>

      <section id="solutions" className="py-10 md:py-16 bg-[#08563D] ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <h2
            className="mb-14 text-3xl font-medium tracking-tight md:text-4xl"
            style={{ color: '#ffffff' }}
          >
            {t.home.solutionsTitle}
          </h2>
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
            {t.home.solutionItems.map((item) => (
              <article key={item.title}>
                <h3 className="mb-3 text-lg font-bold" style={{ color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p
                  className="text-sm font-normal leading-relaxed"
                  style={{ color: isDark ? '#cbd5e1' : 'rgba(255,255,255,0.82)' }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div ref={offerRef}>
        <div className="relative z-10" style={{ marginBottom: -offerOverlap }}>
          {/* الطبقة الخلفية الباهتة التي تظهر خلف البطاقة (نفس التصميم المرجعي) */}
          <div
            aria-hidden
            className="pointer-events-none absolute max-md:!left-0 max-md:!right-0"
            style={{
              bottom: 'calc(var(--p, 0) * -12px)',
              left: 'calc(var(--p, 0) * 37px)',
              right: 'calc(var(--p, 0) * 37px)',
              height: offerOverlap + 12,
              opacity: 'var(--p, 0)',
              backgroundColor: 'rgba(255,255,255,0.18)',
              borderRadius: '0 0 calc(10px + var(--p, 0) * 8px) calc(10px + var(--p, 0) * 8px)',
            }}
          />
          {/* خلفية البطاقة: هي فقط التي يتقلص عرضها، والمحتوى ثابت فلا يقفز */}
          <div
            aria-hidden
            className="pointer-events-none absolute max-md:!left-0 max-md:!right-0"
            style={{
              top: 'calc(var(--p, 0) * 20px)',
              bottom: 0,
              left: 'calc(var(--p, 0) * 48px)',
              right: 'calc(var(--p, 0) * 48px)',
              borderRadius: 'calc(4px + var(--p, 0) * 8px)',
              backgroundColor: isDark ? '#2b2b2a' : '#f4f1f8',
            }}
          />
          <div ref={offerCopyRef} className="relative px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2
                  className="mb-8 max-w-xl text-4xl leading-[1.15] md:text-5xl"
                  style={{
                    color: isDark ? '#ffffff' : '#241833',
                    fontWeight: 650,
                    ...riseIn(offerCopySeen, 0),
                  }}
                >
                  {t.home.offerTitle}
                </h2>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#08563D] px-5 py-3 text-sm text-white transition-colors hover:bg-[#064531]"
                  style={{ fontWeight: 600, ...riseIn(offerCopySeen, 420) }}
                >
                  {t.home.learnMore}
                  <FiArrowUpRight size={16} />
                </a>
              </div>
              <p
                className="max-w-xl text-base leading-relaxed"
                style={{
                  color: isDark ? '#cbd5e1' : '#6b6478',
                  fontWeight: 450,
                  ...riseIn(offerCopySeen, 840),
                }}
              >
                {t.home.offerText}
              </p>
            </div>
          </div>
        </div>

        <section
          ref={offerStatsRef}
          className="!mt-14 px-4 pb-20 md:px-8"
          style={{
            backgroundColor: isDark ? '#4a336e' : '#7E5CAC',
            paddingTop: offerOverlap + 36,
          }}
        >
          <div className="mx-auto grid w-fit max-w-full grid-cols-[repeat(2,max-content)] gap-x-3 !gap-y-6 sm:grid-cols-[repeat(3,max-content)] lg:grid-cols-[repeat(5,max-content)] lg:gap-x-4 lg:gap-y-2">
            {t.home.offerStats.map((item) => (
              <div key={item.label} className="text-start">
                <div
                  role="img"
                  aria-label={item.value}
                  className="whitespace-nowrap pe-1 text-[clamp(1.75rem,2.5vw,2.75rem)] leading-none tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '1.75px #ffffff',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.88) 38%, rgba(0,0,0,0.12) 100%)',
                    maskImage:
                      'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.88) 38%, rgba(0,0,0,0.12) 100%)',
                  }}
                >
                  <span aria-hidden="true">
                    <CountStat value={item.value} active={offerStatsSeen} />
                  </span>
                </div>
                <p
                  className="mt-0.5 w-36 text-sm leading-snug sm:w-44 md:text-[15px]"
                  style={{ color: isDark ? '#f7f2fc' : '#ffffff', fontWeight: 500 }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
