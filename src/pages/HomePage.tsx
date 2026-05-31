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
  FaPlay,
  FaCheck,
  FaChevronRight,
  FaCubes,
  FaNetworkWired,
  FaChartPie,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

const serviceIcons: Record<string, IconType> = {
  architecture: FaCubes,
  engineering: FaNetworkWired,
  analytics: FaChartPie,
};

const HomePage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="bg-[#f8fafc]">
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
          className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white/80 to-transparent`}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-lg sm:px-8 sm:py-4">
              <span className="border-e border-gray-200 pe-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 sm:pe-6">
                {isAr ? 'شريك رسمي' : 'OFFICIAL PARTNER'}
              </span>
              <img
                src="/images/northernacs/databricks.png"
                alt="Databricks Logo"
                className="h-8 object-contain sm:h-12"
                loading="eager"
              />
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {t.home.title}
              <br />
              <span className="text-[#08563D]">{t.home.accent}</span>
            </h1>

            <div className="mb-8 inline-flex flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md px-6 py-3 shadow-md sm:px-8 sm:py-4">
              <span className="border-e border-gray-300 pe-4 text-sm font-bold text-slate-700 md:text-base sm:pe-6">
                {isAr ? 'مع منتجنا الرئيسي:' : 'Featuring our flagship product:'}
              </span>
              <img
                src="/images/northernacs/s-locator-logo.png"
                alt="S-Locator Logo"
                className="h-8 object-contain md:h-12 drop-shadow-sm"
              />
            </div>

            <p className="mb-8 text-base font-light leading-relaxed text-slate-600 md:text-lg">
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
                className="inline-flex items-center justify-center rounded-md border-2 border-[#08563D] bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#08563D] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#08563D] hover:text-white hover:shadow-md"
              >
                {t.common.expert}
                <FaComments className="ms-3" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR CORE SERVICES SECTION */}
      <section id="services" className="border-b border-gray-200 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#08563D]">
              {t.home.servicesEyebrow}
            </span>
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-500">
              {t.home.servicesIntro}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {t.home.serviceCards.map(({ id, title, description }) => {
              const Icon = serviceIcons[id] ?? FaCubes;
              return (
                <article
                  key={id}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#08563D]/30 hover:shadow-[0_12px_40px_-6px_rgba(8,86,61,0.12)] md:p-10"
                >
                  <FaArrowRight
                    className={`absolute end-6 top-6 -rotate-45 text-[#08563D] opacity-0 transition-all duration-500 group-hover:opacity-100 ${isAr ? 'scale-x-[-1]' : ''}`}
                    size={16}
                  />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-[#08563D] transition-colors duration-500 group-hover:bg-[#08563D] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#08563D]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC OFFERINGS SECTION */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#08563D] mb-6">
                <FaLightbulb size={28} />
                <h3 className="text-2xl font-bold text-slate-900">
                  {isAr ? 'الإدارة الاستراتيجية' : 'Strategic Management'}
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium whitespace-pre-line">
                {isAr
                  ? 'تحديد الأهداف الديناميكية، تخصيص الموارد، ومواءمة المواهب لدفع خلق القيمة.'
                  : 'Dynamic Goal Setting, Resource Allocation, and Talent Alignment to drive value creation.'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm whitespace-pre-line">
                {isAr
                  ? 'نساعدك في تصميم استراتيجية متماسكة توحد بين الأعمال وتكنولوجيا المعلومات، وتحويل رؤيتك وأهدافك إلى خارطة طريق عالية التأثير. يضمن نهجنا المواءمة المثالية بين مواردك المالية والبشرية لسد الفجوة بين التخطيط والتنفيذ.'
                  : 'We help you design a cohesive strategy that unites Business and IT, transforming your vision and CAPEX goals into a high-impact roadmap. Our approach ensures that your financial and human resources are perfectly aligned to close the gap between planning and execution.'}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-[#08563D] mb-6">
                <FaGears size={28} />
                <h3 className="text-2xl font-bold text-slate-900">
                  {isAr ? 'بنية البيانات والذكاء الاصطناعي' : 'Data & AI Architecture'}
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium whitespace-pre-line">
                {isAr
                  ? 'محرك الذكاء: التحليلات التنبؤية، اتخاذ القرار الآلي، وإنشاء مصدر واحد للحقيقة.'
                  : 'The Intelligence Engine: Predictive Analytics, Automated Decisioning, and establishing a Single Source of Truth.'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm whitespace-pre-line">
                {isAr
                  ? 'نبني محرك ذكاء قوي يحول البيانات المعقدة إلى مصدر واحد للحقيقة. نطبق التحليلات التنبؤية والقرارات الآلية بالذكاء الاصطناعي لضمان تحرك أعمالك بسرعة بياناتك.'
                  : 'Build a robust intelligence engine that converts complex data into a single source of truth. We implement predictive analytics and AI automated decisioning to ensure your business moves at the speed of your data.'}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-[#08563D] mb-6">
                <FaPuzzlePiece size={28} />
                <h3 className="text-2xl font-bold text-slate-900">
                  {isAr ? 'تكامل المؤسسات' : 'Enterprise Integration'}
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium whitespace-pre-line">
                {isAr
                  ? 'أتمتة العمليات ورؤية سلسلة التوريد.\nإطلاق القيمة الكامنة من أنظمة SAP/Oracle.'
                  : 'Process Automation & Supply Chain Visibility.\nUnlocking legacy value from SAP/Oracle systems.'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm whitespace-pre-line">
                {isAr
                  ? 'سد الفجوة بين أنظمتك القديمة والسوق الحديث من خلال إطلاق القيمة المحاصرة داخل الحلول القديمة. نحن نبسط عملياتك من خلال الأتمتة والتكامل الشامل.'
                  : 'Bridge the gap between your legacy systems and the modern market by unlocking trapped value within outdated solution. We streamline your operations through process automation and end-to-end integration.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP DATABRICKS SPECIALIZATION */}
      <section className="bg-slate-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#08563D]">
              <FaDatabase /> {isAr ? 'تخصص البيانات' : 'DATA SPECIALIZATION'}
            </span>
            <h2 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
              {isAr ? 'تخصص داتابريكس العميق' : 'Deep Databricks Specialization'}
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {isAr
                ? 'تمكين مؤسستك بذكاء بيانات متطور وسير عمل تحليلي موحد ومصمم للتوسع.'
                : 'Empowering your enterprise with cutting-edge data intelligence and unified analytical workflows tailored for scale.'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-[#08563D] flex items-center justify-center mb-6">
                <FaServer size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {isAr ? 'البنية التحتية' : 'Architecture'}
              </h3>
              <p className="text-[#08563D] font-semibold text-sm mb-4">
                {isAr ? 'بناء أسس بيانات قوية' : 'Building robust data foundations'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                {isAr
                  ? 'نصمم بنى بيانات قابلة للتوسع وآمنة وعالية الأداء، مصممة لدعم أعقد تحليلات المؤسسات ومبادرات الذكاء الاصطناعي محلياً داخل Databricks.'
                  : 'We design highly scalable, secure, and performant data architectures tailored to support your most complex enterprise analytics and AI initiatives natively within Databricks.'}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-[#08563D] flex items-center justify-center mb-6">
                <FaCloud size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {isAr ? 'الترحيل السحابي' : 'Migration'}
              </h3>
              <p className="text-[#08563D] font-semibold text-sm mb-4">
                {isAr ? 'انتقال سحابي سلس' : 'Seamless cloud transitions'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                {isAr
                  ? 'نضمن ترحيلاً آمناً وبدون توقف لأنظمتك القديمة إلى بيئات Databricks الحديثة والمرنة، مع تحسين التكلفة والأداء.'
                  : 'We ensure zero-downtime, risk-mitigated migrations of your legacy systems (on-prem or existing cloud) to modern, agile Databricks environments with optimized cost and performance.'}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-[#08563D] flex items-center justify-center mb-6">
                <FaDatabase size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lakehouse</h3>
              <p className="text-[#08563D] font-semibold text-sm mb-4">
                {isAr ? 'تطوير بيئات البيانات الحديثة' : 'Developing modern data environments'}
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                {isAr
                  ? 'توحيد تخزين البيانات وسير عمل الذكاء الاصطناعي في بيئة Databricks Lakehouse واحدة محكمة، لإنشاء مصدر حقيقة واحد وآمن لكامل مؤسستك.'
                  : 'Unify your data warehousing and AI workflows into a single, governed Databricks Lakehouse, establishing a secure, efficient single source of truth for your entire organization.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NORTH AMERICAN TECH EXPERTISE */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#08563D] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">
                {isAr ? 'من نحن' : 'ABOUT US'}
              </span>
              <h2 className="text-3xl md:text-[42px] font-black text-slate-900 leading-[1.15] mb-8 whitespace-pre-line">
                {isAr
                  ? 'خبرات تقنية أمريكية شمالية.\nمكرسة للسوق السعودي.'
                  : 'North American Tech Expertise.\nDedicated to the Saudi Arabian Market.'}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">
                {isAr
                  ? 'تأسست نورثرن أناليتكس على يد خبراء مخضرمين لربط المراكز التقنية في أمريكا الشمالية بالمشهد المزدهر في دول مجلس التعاون الخليجي، برؤية واضحة: تسريع الذكاء الرقمي وقدرات البيانات عبر المملكة العربية السعودية.'
                  : 'Founded by industry veterans bridging the technology hubs of North America and the thriving landscape of the GCC, Northern Analytics was built with a clear vision: to accelerate digital intelligence and data capabilities across the Kingdom of Saudi Arabia (KSA).'}
              </p>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {isAr
                  ? 'نجمع بين الرؤى العالمية والخبرة المحلية. من خلال استشارات Databricks والذكاء الاصطناعي ومنصتنا المكانية الرائدة، ينفذ فريقنا استراتيجيات متكامل تحول تحديات البيانات المعقدة إلى نمو مستدام يتوافق مع رؤية السعودية 2030.'
                  : 'We combine world-class insights with local mastery. Through our advanced Databricks/AI consulting and our flagship location platform, our team executes end-to-end strategies that transform complex data challenges into meaningful, sustainable growth tailored to the Saudi Vision 2030.'}
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 w-full">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
                <img
                  src="/images/northernacs/abdullah-abbas.jpg"
                  alt="Abdullah Abbas"
                  className="w-[84px] h-[84px] rounded-full object-cover border-2 border-green-50"
                />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isAr
                      ? 'عبدالله عباس | شريك إداري ورئيس العمليات'
                      : 'ABDULLAH ABBAS | MANAGING PARTNER & COO'}
                  </p>
                  <h4 className="text-slate-900 font-bold text-[15px] leading-snug group-hover:text-[#08563D] transition-colors">
                    {isAr
                      ? 'استراتيجية بيانات المؤسسات والذكاء الاصطناعي. قيادة التحول الرقمي. استشارات تنفيذية. التميز التشغيلي.'
                      : 'Enterprise Data & AI Strategy. Digital Transformation Leadership. C-Suite Advisory. Operational Excellence.'}
                  </h4>
                </div>
                <FaChevronRight
                  className={`hidden sm:block text-slate-300 group-hover:text-[#08563D] transition-colors shrink-0 ${isAr ? 'rotate-180' : ''}`}
                />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
                <img
                  src="/images/northernacs/haroun-bacha.jpg"
                  alt="Haroun Bacha"
                  className="w-[84px] h-[84px] rounded-full object-cover border-2 border-green-50"
                />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isAr
                      ? 'هارون باشخازنجي | شريك ورئيس قسم التكنولوجيا'
                      : 'HAROUN BACHA | PARTNER & CHIEF TECHNOLOGY OFFICER'}
                  </p>
                  <h4 className="text-slate-900 font-bold text-[15px] leading-snug group-hover:text-[#08563D] transition-colors">
                    {isAr
                      ? 'استراتيجية الذكاء الاصطناعي والرقمي للإدارة العليا. استشارات إدارة الأعمال.'
                      : 'C-Suite Digital/AI Strategy. Business Management Advisory'}
                  </h4>
                </div>
                <FaChevronRight
                  className={`hidden sm:block text-slate-300 group-hover:text-[#08563D] transition-colors shrink-0 ${isAr ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. S-LOCATOR PLATFORM SECTION */}
      <section id="s-locator-platform" className="bg-[#f8fafc] py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f3ef] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#08563D] mb-6">
                <FaMapLocationDot /> {isAr ? 'منتجاتنا' : 'OUR PRODUCTS'}
              </span>
              <h2 className="text-4xl md:text-[44px] font-black text-[#111827] mb-2 leading-tight">
                S-Locator
              </h2>
              <h3 className="text-2xl md:text-[28px] text-slate-500 font-light mb-6">
                {isAr
                  ? 'الذكاء المكاني للمملكة العربية السعودية'
                  : 'Location Intelligence for Saudi Arabia'}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">
                {isAr
                  ? 'اكتشف منصتنا الرئيسية المصممة خصيصاً للمشهد الديناميكي في المملكة العربية السعودية. S-Locator هي مجموعة تحليلات مكانية متقدمة تمكن الشركات والجهات الحكومية من اتخاذ قرارات جغرافية مبنية على البيانات.'
                  : 'Discover our flagship platform engineered specifically for the dynamic KSA landscape. S-Locator is an advanced spatial analytics suite that empowers businesses and government entities to make data-driven, geography-based decisions.'}
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 text-[15px] font-medium">
                  <FaCheck className="text-[#08563D]" />{' '}
                  {isAr
                    ? 'خرائط حرارية ديموغرافية وذكاء في الوقت الفعلي'
                    : 'Real-time demographic heatmaps & intelligence'}
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-[15px] font-medium">
                  <FaCheck className="text-[#08563D]" />{' '}
                  {isAr
                    ? 'نمذجة تنبؤية مدعومة بالذكاء الاصطناعي لاختيار المواقع'
                    : 'AI-powered predictive modeling for site selection'}
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-[15px] font-medium">
                  <FaCheck className="text-[#08563D]" />{' '}
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

            <div className="lg:w-1/2 w-full relative group overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 cursor-pointer">
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

      {/* 7. COMMITMENT TO SAUDI VISION 2030 */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-bold text-slate-900 mb-12">
            {isAr ? 'الالتزام برؤية السعودية 2030' : 'Commitment to Saudi Vision 2030'}
          </h2>

          <div
            className={`flex flex-col lg:flex-row bg-white overflow-hidden border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ${isAr ? 'rounded-tr-[40px] rounded-bl-[40px]' : 'rounded-tl-[40px] rounded-br-[40px]'}`}
          >
            <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                <span className="bg-[#08563D] text-white px-3 py-1 rounded">
                  {isAr ? 'نورثرن أناليتكس' : 'NACS'}
                </span>
                <span className="tracking-[0.2em]">
                  {isAr
                    ? 'المملكة العربية السعودية • رؤية السعودية 2030'
                    : 'SAUDI ARABIA • SAUDI VISION 2030'}
                </span>
              </div>
              <h3 className="text-[34px] md:text-[40px] font-black text-slate-900 leading-[1.1] mb-8">
                {isAr ? 'الالتزام برؤية السعودية 2030:' : 'Commitment to Saudi Vision 2030:'}
                <br />
                <span className="text-[#08563D]">
                  {isAr
                    ? 'نقل المعرفة التقنية الأمريكية الشمالية عالية المستوى مباشرة إلى المملكة العربية السعودية.'
                    : 'Transferring top-tier North American technological know-how directly to the Kingdom of Saudi Arabia.'}
                </span>
              </h3>
              <p className="text-slate-500 text-sm font-semibold mb-10">
                {isAr ? 'حضور محلي، بمعايير عالمية.' : 'Local Presence, Global Standards.'}
              </p>
              <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-[#08563D] transition-colors w-max">
                <div className="w-12 h-[2px] bg-[#08563D]"></div>
                {isAr ? 'شاهد الفيلم' : 'WATCH THE FILM'}
              </div>
            </div>

            <div className="lg:w-1/2 relative group cursor-pointer min-h-[400px]">
              <img
                src="/images/northernacs/vision-building.jpg"
                alt="Saudi Vision 2030"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[80px] h-[56px] bg-[#ff0000] rounded-[14px] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform z-10 ${isAr ? 'right-0 translate-x-1/2 lg:right-0 lg:translate-x-1/2' : 'left-0 -translate-x-1/2 lg:left-0 lg:-translate-x-1/2'}`}
              >
                <FaPlay className={`text-white ${isAr ? 'mr-1' : 'ml-1'}`} size={24} />
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-white/70 px-4">
                {isAr
                  ? 'لتشغيل هذا الفيديو، يرجى تفعيل ملفات تعريف الارتباط. قد تقوم جوجل/يوتيوب بمعالجة بياناتك —'
                  : 'To play this video, enable Statistics cookies. Google/YouTube may process your data —'}{' '}
                <span className="underline cursor-pointer text-white hover:text-gray-200">
                  {isAr ? 'اعرف المزيد.' : 'Learn more.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / CTA SECTION */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">{t.home.ctaTitle}</h2>
          <p className="mb-10 text-lg text-slate-600">{t.home.ctaText}</p>
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
              className="inline-flex w-full items-center justify-center rounded-sm border-2 border-[#08563D] bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#08563D] shadow-sm transition-all hover:-translate-y-1 hover:bg-[#08563D] hover:text-white hover:shadow-md sm:w-auto"
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
