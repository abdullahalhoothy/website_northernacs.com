import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaComments,
  FaMapLocationDot,
  FaSatelliteDish,
  FaUserTie,
  FaLightbulb,
  FaGears,
  FaPuzzlePiece,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCheck,
  FaChevronRight,
  FaCubes,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

const serviceIcons: Record<string, IconType> = {
  strategy: FaLightbulb,
  dataAi: FaGears,
  integration: FaPuzzlePiece,
};

const HomePage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-lg dark:border-[#5c5c5a] dark:bg-[#3e3e3d] sm:px-8 sm:py-4">
              <span className="border-e border-gray-200 pe-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:border-[#5c5c5a] dark:text-[#a3a39e] sm:pe-6">
                {isAr ? 'شريك رسمي' : 'OFFICIAL PARTNER'}
              </span>
              <img
                src="/images/northernacs/databricks.png"
                alt="Databricks Logo"
                className="h-8 object-contain sm:h-12"
                loading="eager"
              />
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 dark:text-[#f2f2f0] md:text-5xl lg:text-6xl">
              {t.home.title}
              <br />
              <span className="text-[#08563D] dark:text-[#c5ead8]">{t.home.accent}</span>
            </h1>

            <a
              href="https://www.s-locator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex cursor-pointer flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white/90 px-6 py-3 shadow-md backdrop-blur-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]/90 sm:px-8 sm:py-4"
            >
              <span className="border-e border-gray-300 pe-4 text-sm font-bold text-slate-700 dark:border-[#5c5c5a] dark:text-[#c8c8c4] sm:pe-6 md:text-base">
                {isAr ? 'مع منتجنا الرئيسي:' : 'Featuring our flagship product:'}
              </span>

              <img
                src="/images/northernacs/s-locator-logo.png"
                alt="S-Locator Logo"
                className="h-8 object-contain drop-shadow-sm md:h-12"
              />
            </a>

            <p className="mb-8 text-base font-light leading-relaxed text-slate-600 dark:text-[#c8c8c4] md:text-lg">
              {t.home.intro}
            </p>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#s-locator-platform"
                className="inline-flex items-center justify-center rounded-md bg-[#08563D] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#064531] hover:shadow-xl"
              >
                {t.common.demo}
                <FaMapLocationDot className="ms-3" size={14} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#08563D] bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#08563D] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#08563D] hover:text-white hover:shadow-md dark:bg-[#3e3e3d] dark:text-[#c5ead8] dark:hover:bg-[#08563D] dark:hover:text-white"
              >
                {t.common.expert}
                <FaComments className="ms-3" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR CORE SERVICES SECTION */}
      <section
        id="services"
        className="border-b border-gray-200 bg-slate-50 py-16 dark:border-[#5c5c5a] dark:bg-[#343433] md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#08563D] dark:text-[#c5ead8]">
              {t.home.servicesEyebrow}
            </span>
            <h2 className="mb-4 text-3xl font-black text-slate-900 dark:text-[#f2f2f0] md:text-4xl">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-500 dark:text-[#a3a39e]">
              {t.home.servicesIntro}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {t.home.serviceCards.map(({ id, title, description, details }) => {
              const Icon = serviceIcons[id] ?? FaCubes;
              return (
                <article
                  key={id}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#08563D]/30 hover:shadow-[0_12px_40px_-6px_rgba(8,86,61,0.12)] dark:border-[#5c5c5a] dark:bg-[#3e3e3d] md:p-10"
                >
                  <FaArrowRight
                    className={`absolute end-6 top-6 -rotate-45 text-[#08563D] opacity-0 transition-all duration-500 group-hover:opacity-100 dark:text-[#c5ead8] ${isAr ? 'scale-x-[-1]' : ''}`}
                    size={16}
                  />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-[#08563D] transition-colors duration-500 group-hover:bg-[#08563D] group-hover:text-white dark:border-[#5c5c5a] dark:bg-[#484846] dark:text-[#c5ead8]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#08563D] dark:text-[#f2f2f0] dark:group-hover:text-[#c5ead8]">
                    {title}
                  </h3>
                  <p className="mb-4 whitespace-pre-line text-sm font-medium leading-relaxed text-slate-600 dark:text-[#c8c8c4]">
                    {description}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                    {details}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEEP DATABRICKS SPECIALIZATION */}
      <section className="border-b border-gray-100 bg-slate-50 py-24 dark:border-[#5c5c5a] dark:bg-[#343433]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#08563D] dark:border-[#08563D]/50 dark:bg-[#08563D]/20 dark:text-[#c5ead8]">
              <FaDatabase /> {isAr ? 'تخصص البيانات' : 'DATA SPECIALIZATION'}
            </span>
            <h2 className="mt-6 text-3xl font-black text-slate-900 dark:text-[#f2f2f0] md:text-4xl">
              {isAr ? 'تخصص داتابريكس العميق' : 'Deep Databricks Specialization'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-[#a3a39e]">
              {isAr
                ? 'تمكين مؤسستك بذكاء بيانات متطور وسير عمل تحليلي موحد ومصمم للتوسع.'
                : 'Empowering your enterprise with cutting-edge data intelligence and unified analytical workflows tailored for scale.'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-[#08563D] dark:bg-[#08563D]/20 dark:text-[#c5ead8]">
                <FaServer size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-[#f2f2f0]">
                {isAr ? 'البنية التحتية' : 'Architecture'}
              </h3>
              <p className="mb-4 text-sm font-semibold text-[#08563D] dark:text-[#c5ead8]">
                {isAr ? 'بناء أسس بيانات قوية' : 'Building robust data foundations'}
              </p>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {isAr
                  ? 'نصمم بنى بيانات قابلة للتوسع وآمنة وعالية الأداء، مصممة لدعم أعقد تحليلات المؤسسات ومبادرات الذكاء الاصطناعي محلياً داخل Databricks.'
                  : 'We design highly scalable, secure, and performant data architectures tailored to support your most complex enterprise analytics and AI initiatives natively within Databricks.'}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-[#08563D] dark:bg-[#08563D]/20 dark:text-[#c5ead8]">
                <FaCloud size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-[#f2f2f0]">
                {isAr ? 'الترحيل السحابي' : 'Migration'}
              </h3>
              <p className="mb-4 text-sm font-semibold text-[#08563D] dark:text-[#c5ead8]">
                {isAr ? 'انتقال سحابي سلس' : 'Seamless cloud transitions'}
              </p>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {isAr
                  ? 'نضمن ترحيلاً آمناً وبدون توقف لأنظمتك القديمة إلى بيئات Databricks الحديثة والمرنة، مع تحسين التكلفة والأداء.'
                  : 'We ensure zero-downtime, risk-mitigated migrations of your legacy systems (on-prem or existing cloud) to modern, agile Databricks environments with optimized cost and performance.'}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-[#08563D] dark:bg-[#08563D]/20 dark:text-[#c5ead8]">
                <FaDatabase size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-[#f2f2f0]">
                Lakehouse
              </h3>
              <p className="mb-4 text-sm font-semibold text-[#08563D] dark:text-[#c5ead8]">
                {isAr ? 'تطوير بيئات البيانات الحديثة' : 'Developing modern data environments'}
              </p>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {isAr
                  ? 'توحيد تخزين البيانات وسير عمل الذكاء الاصطناعي في بيئة Databricks Lakehouse واحدة محكمة، لإنشاء مصدر حقيقة واحد وآمن لكامل مؤسستك.'
                  : 'Unify your data warehousing and AI workflows into a single, governed Databricks Lakehouse, establishing a secure, efficient single source of truth for your entire organization.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NORTH AMERICAN TECH EXPERTISE */}
      <section className="border-b border-gray-100 bg-white py-24 dark:border-[#5c5c5a] dark:bg-[#343433]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#08563D] dark:text-[#c5ead8]">
                {isAr ? 'من نحن' : 'ABOUT US'}
              </span>
              <h2 className="mb-8 whitespace-pre-line text-3xl font-black leading-[1.15] text-slate-900 dark:text-[#f2f2f0] md:text-[42px]">
                {isAr
                  ? 'خبرات تقنية أمريكية شمالية.\nمكرسة للسوق السعودي.'
                  : 'North American Tech Expertise.\nDedicated to the Saudi Arabian Market.'}
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {isAr
                  ? 'تأسست نورثرن أناليتكس على يد خبراء مخضرمين لربط المراكز التقنية في أمريكا الشمالية بالمشهد المزدهر في دول مجلس التعاون الخليجي، برؤية واضحة: تسريع الذكاء الرقمي وقدرات البيانات عبر المملكة العربية السعودية.'
                  : 'Founded by industry veterans bridging the technology hubs of North America and the thriving landscape of the GCC, Northern Analytics was built with a clear vision: to accelerate digital intelligence and data capabilities across the Kingdom of Saudi Arabia (KSA).'}
              </p>
              <p className="text-[15px] leading-relaxed text-slate-500 dark:text-[#a3a39e]">
                {isAr
                  ? 'نجمع بين الرؤى العالمية والخبرة المحلية. من خلال استشارات Databricks والذكاء الاصطناعي ومنصتنا المكانية الرائدة، ينفذ فريقنا استراتيجيات متكامل تحول تحديات البيانات المعقدة إلى نمو مستدام يتوافق مع رؤية السعودية 2030.'
                  : 'We combine world-class insights with local mastery. Through our advanced Databricks/AI consulting and our flagship location platform, our team executes end-to-end strategies that transform complex data challenges into meaningful, sustainable growth tailored to the Saudi Vision 2030.'}
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 w-full">
              <div className="group flex cursor-pointer items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]">
                <img
                  src="/images/northernacs/abdullah-abbas.jpg"
                  alt="Abdullah Abbas"
                  className="w-[84px] h-[84px] rounded-full object-cover border-2 border-green-50"
                />
                <div className="flex-1">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#a3a39e]">
                    {isAr
                      ? 'عبدالله عباس | شريك إداري ورئيس العمليات'
                      : 'ABDULLAH ABBAS | MANAGING PARTNER & COO'}
                  </p>
                  <h4 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#08563D] dark:text-[#f2f2f0] dark:group-hover:text-[#c5ead8]">
                    {isAr
                      ? 'استراتيجية بيانات المؤسسات والذكاء الاصطناعي. قيادة التحول الرقمي. استشارات تنفيذية. التميز التشغيلي.'
                      : 'Enterprise Data & AI Strategy. Digital Transformation Leadership. C-Suite Advisory. Operational Excellence.'}
                  </h4>
                </div>
                <FaChevronRight
                  className={`hidden shrink-0 text-slate-300 transition-colors group-hover:text-[#08563D] dark:text-[#5c5c5a] dark:group-hover:text-[#c5ead8] sm:block ${isAr ? 'rotate-180' : ''}`}
                />
              </div>
              <div className="group flex cursor-pointer items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-md dark:border-[#5c5c5a] dark:bg-[#3e3e3d]">
                <img
                  src="/images/northernacs/haroun-bacha.jpg"
                  alt="Haroun Bacha"
                  className="w-[84px] h-[84px] rounded-full object-cover border-2 border-green-50"
                />
                <div className="flex-1">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#a3a39e]">
                    {isAr
                      ? 'هارون باشخازنجي | شريك ورئيس قسم التكنولوجيا'
                      : 'HAROUN BACHA | PARTNER & CHIEF TECHNOLOGY OFFICER'}
                  </p>
                  <h4 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#08563D] dark:text-[#f2f2f0] dark:group-hover:text-[#c5ead8]">
                    {isAr
                      ? 'استراتيجية الذكاء الاصطناعي والرقمي للإدارة العليا. استشارات إدارة الأعمال.'
                      : 'C-Suite Digital/AI Strategy. Business Management Advisory'}
                  </h4>
                </div>
                <FaChevronRight
                  className={`hidden shrink-0 text-slate-300 transition-colors group-hover:text-[#08563D] dark:text-[#5c5c5a] dark:group-hover:text-[#c5ead8] sm:block ${isAr ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. S-LOCATOR PLATFORM SECTION */}
      <section
        id="s-locator-platform"
        className="border-b border-gray-100 bg-[#f8fafc] py-24 dark:border-[#5c5c5a] dark:bg-[#343433]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e8f3ef] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#08563D] dark:bg-[#08563D]/25 dark:text-[#c5ead8]">
                <FaMapLocationDot /> {isAr ? 'منتجاتنا' : 'OUR PRODUCTS'}
              </span>
              <h2 className="mb-2 text-4xl font-black leading-tight text-[#111827] dark:text-[#f2f2f0] md:text-[44px]">
                S-Locator
              </h2>
              <h3 className="mb-6 text-2xl font-light text-slate-500 dark:text-[#a3a39e] md:text-[28px]">
                {isAr
                  ? 'الذكاء المكاني للمملكة العربية السعودية'
                  : 'Location Intelligence for Saudi Arabia'}
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-slate-600 dark:text-[#c8c8c4]">
                {isAr
                  ? 'اكتشف منصتنا الرئيسية المصممة خصيصاً للمشهد الديناميكي في المملكة العربية السعودية. S-Locator هي مجموعة تحليلات مكانية متقدمة تمكن الشركات والجهات الحكومية من اتخاذ قرارات جغرافية مبنية على البيانات.'
                  : 'Discover our flagship platform engineered specifically for the dynamic KSA landscape. S-Locator is an advanced spatial analytics suite that empowers businesses and government entities to make data-driven, geography-based decisions.'}
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[15px] font-medium text-slate-700 dark:text-[#c8c8c4]">
                  <FaCheck className="text-[#08563D] dark:text-[#c5ead8]" />{' '}
                  {isAr
                    ? 'خرائط حرارية ديموغرافية وذكاء في الوقت الفعلي'
                    : 'Real-time demographic heatmaps & intelligence'}
                </li>
                <li className="flex items-center gap-3 text-[15px] font-medium text-slate-700 dark:text-[#c8c8c4]">
                  <FaCheck className="text-[#08563D] dark:text-[#c5ead8]" />{' '}
                  {isAr
                    ? 'نمذجة تنبؤية مدعومة بالذكاء الاصطناعي لاختيار المواقع'
                    : 'AI-powered predictive modeling for site selection'}
                </li>
                <li className="flex items-center gap-3 text-[15px] font-medium text-slate-700 dark:text-[#c8c8c4]">
                  <FaCheck className="text-[#08563D] dark:text-[#c5ead8]" />{' '}
                  {isAr
                    ? 'مصممة بسلاسة لتناسب المبادرات الذكية لرؤية 2030'
                    : 'Designed seamlessly for Vision 2030 smart initiatives'}
                </li>
              </ul>
              <a
                href="https://s-locator.northernacs.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-[#08563D] px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#064531] hover:shadow-lg"
              >
                {isAr ? 'اكتشف منصة S-LOCATOR' : 'EXPLORE S-LOCATOR PLATFORM'}
                <FaArrowUpRightFromSquare className="ms-3" size={13} />
              </a>
            </div>

            <div className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:border-[#5c5c5a] lg:w-1/2">
              <img
                src="/images/northernacs/s-locator-map-mockup.png"
                alt="S-Locator Dashboard"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#08563D]/10 pointer-events-none mix-blend-multiply transition-colors duration-700 group-hover:bg-[#08563D]/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08563D]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / CTA SECTION */}
      <section id="contact" className="bg-white py-20 dark:bg-[#343433]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-black text-slate-900 dark:text-[#f2f2f0] md:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mb-10 text-lg text-slate-600 dark:text-[#c8c8c4]">{t.home.ctaText}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#s-locator-platform"
              className="inline-flex w-full items-center justify-center rounded-sm bg-[#08563D] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#064531] hover:shadow-xl sm:w-auto"
            >
              {t.common.demo}
              <FaSatelliteDish className="ms-3" size={14} />
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-sm border-2 border-[#08563D] bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#08563D] shadow-sm transition-all hover:-translate-y-1 hover:bg-[#08563D] hover:text-white hover:shadow-md dark:bg-[#3e3e3d] dark:text-[#c5ead8] dark:hover:bg-[#08563D] dark:hover:text-white sm:w-auto"
            >
              {t.common.expert}
              <FaUserTie className="ms-3" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
