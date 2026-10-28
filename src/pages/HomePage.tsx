import { useEffect, useRef, type RefObject } from 'react';
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

const HomePage = () => {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isAr = lang === 'ar';
  const isDark = theme === 'dark';
  const offerRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  useScrollShrink(offerRef);
  useScrollShrink(techRef);

  const offerOverlap = 100;
  const techTitleParts = t.home.techTitle.split(/\{(.*?)\}/g);

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
            <h1 className="mb-6 !text-5xl font-black !leading-tight text-black dark:text-[#0F732E] md:text-5xl lg:text-6xl">
              {t.home.title}
              <br />
              <span className="text-[#0F732E] dark:text-white">{t.home.accent}</span>
            </h1>

            <div className="mt-10 flex flex-col items-start gap-2 sm:flex-row"></div>
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
          <div className="relative px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2
                  className="mb-8 max-w-xl text-4xl leading-[1.15] md:text-5xl"
                  style={{ color: isDark ? '#ffffff' : '#241833', fontWeight: 650 }}
                >
                  {t.home.offerTitle}
                </h2>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#08563D] px-5 py-3 text-sm text-white transition-colors hover:bg-[#064531]"
                  style={{ fontWeight: 600 }}
                >
                  {t.home.learnMore}
                  <FiArrowUpRight size={16} />
                </a>
              </div>
              <p
                className="max-w-xl text-base leading-relaxed"
                style={{ color: isDark ? '#cbd5e1' : '#6b6478', fontWeight: 450 }}
              >
                {t.home.offerText}
              </p>
            </div>
          </div>
        </div>

        <section
          className="px-4 pb-20 md:px-8 my-10"
          style={{
            backgroundColor: '#7E5CAC',
            paddingTop: offerOverlap + 64,
          }}
        >
          <div className="mx-auto grid max-w-[760px] grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
            {t.home.offerStats.map((item) => (
              <div key={item.label} className="text-start">
                <div
                  className="whitespace-nowrap text-[60px] leading-[0.95]"
                  style={{
                    fontWeight: 800,
                    color: 'transparent',
                    WebkitTextStroke: '1.25px #08563D',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 100%)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 100%)',
                  }}
                >
                  {item.value}
                </div>
                <p
                  className="relative -mt-3.5 whitespace-nowrap text-[20px]"
                  style={{ color: '#ffffff', fontWeight: 500 }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div ref={techRef}>
        <section className="relative" style={{ backgroundColor: isDark ? '#343433' : '#f4f1f8' }}>
          <div
            aria-hidden
            className="pointer-events-none absolute max-md:!left-0 max-md:!right-0"
            style={{
              top: 0,
              bottom: 0,
              left: 'calc(var(--p, 0) * 46px)',
              right: 'calc(var(--p, 0) * 46px)',
              borderRadius: '0 0 calc(var(--p, 0) * 12px) calc(var(--p, 0) * 12px)',
              backgroundColor: isDark ? '#2b2b2a' : '#ffffff',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
            <h2
              className="text-3xl leading-[1.25] md:text-[40px]"
              style={{ color: isDark ? '#ffffff' : '#241833', fontWeight: 400 }}
            >
              {techTitleParts.map((part, index) =>
                index % 2 === 1 ? (
                  <span
                    key={`${part}-${index}`}
                    style={{
                      fontWeight: 700,
                      backgroundImage: isDark
                        ? 'linear-gradient(90deg, #2dd4bf, #6ee7b7)'
                        : 'linear-gradient(90deg, #043222, #0A6F4C)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {part}
                  </span>
                ) : (
                  <span key={`${part}-${index}`}>{part}</span>
                ),
              )}
            </h2>
          </div>
        </section>

        <section
          className="px-4 py-12 md:py-16"
          style={{ backgroundColor: isDark ? '#343433' : '#ffffff' }}
        >
          <div
            className="mx-auto max-w-7xl rounded-[40px] px-6 py-10 md:px-10 md:py-12"
            style={{ backgroundColor: isDark ? '#2b2b2a' : '#e6ebe8' }}
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {t.home.projectShots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-2xl">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="h-36 w-full object-cover sm:h-40"
                    loading="lazy"
                  />
                  <figcaption
                    className="px-1 pt-2 text-center text-xs font-medium"
                    style={{ color: isDark ? '#cbd5e1' : '#334155' }}
                  >
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
