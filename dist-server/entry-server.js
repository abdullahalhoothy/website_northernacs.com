import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.mjs';
import {
  useEffect,
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
  Fragment as Fragment$1,
  useId,
  useRef,
} from 'react';
import { toast, Toaster } from 'sonner';
import {
  useLocation,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  FaChevronDown,
  FaGlobe,
  FaSun,
  FaMoon,
  FaXmark,
  FaBars,
  FaLinkedinIn,
  FaLocationDot,
  FaEnvelope,
  FaLinkedin,
  FaBolt,
  FaTowerBroadcast,
  FaChartLine,
  FaBuildingColumns,
  FaBullseye,
  FaDiagramProject,
  FaScrewdriverWrench,
  FaRocket,
  FaUserTie,
  FaRegBuilding,
  FaRegEnvelope,
  FaPhone,
  FaCircleCheck,
  FaPaperPlane,
  FaStar,
  FaQuoteLeft,
  FaMinus,
  FaPlus,
  FaRoad,
  FaHandshake,
  FaUmbrellaBeach,
  FaCar,
  FaBuilding,
  FaCartShopping,
  FaBottleDroplet,
  FaDisplay,
  FaIndustry,
  FaHeartPulse,
  FaMapLocationDot,
  FaLayerGroup,
} from 'react-icons/fa6';
import {
  FiArrowRight,
  FiArrowLeft,
  FiChevronRight,
  FiChevronLeft,
  FiCalendar,
  FiUser,
  FiSearch,
  FiX,
  FiArrowUpRight,
} from 'react-icons/fi';
import DOMPurify from 'dompurify';
const blogs$2 = [
  {
    slug: 'best-area-specialty-coffee-jeddah',
    date: '2026-09-06',
    category: 'market-analysis',
    tags: ['jeddah', 'expansion'],
    image: '/images/northernacs/best-area-specialty-coffee-jeddah.jpg',
    seo: {
      title: {
        en: 'Best Area to Open a Specialty Coffee Shop in Jeddah (2026) | S-Locator',
        ar: 'أفضل منطقة لافتتاح مقهى قهوة مختصة في جدة (2026) | S-Locator',
      },
      description: {
        en: 'Compare Al Rawdah, Al Shati, Al Zahra, and Obhur to find the best area for a specialty coffee shop in Jeddah using demand, competition, and purchasing-power insights.',
        ar: 'قارن بين الروضة والشاطئ والزهراء وأبحر لتعرف أفضل منطقة لافتتاح مقهى قهوة مختصة في جدة، مع تحليل الطلب والمنافسة والقوة الشرائية.',
      },
      image: '/images/northernacs/og-best-area-specialty-coffee-jeddah.jpg',
      imageWidth: 1200,
      imageHeight: 612,
    },
    authors: {
      en: ['Research Team'],
      ar: ['فريق البحث'],
    },
    title: {
      en: 'Best Area to Open a Specialty Coffee Shop in Jeddah',
      ar: 'أفضل منطقة لافتتاح مقهى قهوة مختصة في جدة',
    },
    excerpt: {
      en: 'Discover the best areas to open a specialty coffee shop in Jeddah. Explore data-driven insights on Al Rawdah, Al Shati, Al Zahra, and Obhur for F&B success.',
      ar: 'اكتشف أفضل المناطق لافتتاح مقهى قهوة مختصة في جدة. استكشف رؤى مبنية على البيانات حول الروضة والشاطئ والزهراء وأبحر لنجاح قطاع الأغذية والمشروبات.',
    },
    html: {
      en: "<p>Discover the best areas to open a specialty coffee shop in Jeddah. Explore data-driven insights on Al Rawdah, Al Shati, Al Zahra, and Obhur for F&B success.</p><p>Based on the available evidence, Al Rawdah, Al Shati, Al Zahra, and Obhur are among the strongest neighborhoods to investigate for a specialty coffee shop in Jeddah. Al Rawdah stands out for its established specialty coffee culture and high purchasing power, particularly along commercial corridors like Abdul Maqsoud Khoja Street. Al Shati offers premium destination-driven footfall near the Corniche and luxury lifestyle centers. Al Zahra provides a balanced mix of commercial daytime traffic and residential density, while Obhur represents the best long-term growth opportunity due to Jeddah's rapid northward expansion and tourism developments.</p><p>The optimal choice depends entirely on whether your business model requires high-volume neighborhood convenience, a premium lifestyle destination, or an emerging growth market.</p>",
      ar: '<p>اكتشف أفضل المناطق لافتتاح مقهى قهوة مختصة في جدة. استكشف رؤى مبنية على البيانات حول الروضة والشاطئ والزهراء وأبحر لنجاح قطاع الأغذية والمشروبات.</p><p>استناداً إلى الأدلة المتاحة، تُعد الروضة والشاطئ والزهراء وأبحر من أقوى الأحياء التي تستحق الدراسة لافتتاح مقهى قهوة مختصة في جدة. تتميز الروضة بثقافة قهوة مختصة راسخة وقوة شرائية عالية، خصوصاً على المحاور التجارية مثل شارع عبد المقصود خوجة. ويوفر الشاطئ إقبالاً متميزاً مرتبطاً بالوجهة قرب الكورنيش ومراكز نمط الحياة الفاخرة. وتقدم الزهراء مزيجاً متوازناً من الحركة التجارية خلال النهار والكثافة السكنية، بينما تمثل أبحر أفضل فرصة للنمو على المدى الطويل بفضل توسع جدة السريع شمالاً والتطورات السياحية.</p><p>يعتمد الاختيار الأمثل كلياً على ما إذا كان نموذج عملك يحتاج إلى إقبال عالٍ وراحة الحي، أو وجهة لنمط حياة فاخر، أو سوق نمو ناشئ.</p>',
    },
  },
  {
    slug: 'location-intelligence-growth',
    date: '2026-10-20',
    category: 'retail-trends',
    tags: ['s-loc', 'riyadh', 'jeddah', 'demographics', 'expansion'],
    authors: {
      en: ['Location Intelligence Team', 'Product Team'],
      ar: ['فريق الذكاء المكاني', 'فريق المنتج'],
    },
    title: {
      en: 'Location Intelligence as a Growth Engine',
      ar: 'الذكاء المكاني كمحرك للنمو',
    },
    excerpt: {
      en: 'How S-Locator supports site selection, territory planning, and market expansion decisions.',
      ar: 'كيف يدعم إس لوكيتر اختيار المواقع وتخطيط المناطق وقرارات التوسع.',
    },
    html: {
      en: '<p>Market expansion depends on knowing where customers, competitors, access points, and demand signals intersect. S-Locator turns these signals into practical planning workflows.</p><p>Teams can compare opportunities, reduce location risk, and communicate decisions with clear spatial evidence.</p>',
      ar: '<p>يعتمد التوسع في الأسواق على فهم تقاطع العملاء والمنافسين ونقاط الوصول وإشارات الطلب. يحول إس لوكيتر هذه الإشارات إلى مسارات تخطيط عملية.</p><p>يمكن للفرق مقارنة الفرص وتقليل مخاطر المواقع وشرح القرارات بأدلة مكانية واضحة.</p>',
    },
  },
  {
    slug: 'retail-site-selection-saudi',
    date: '2026-10-14',
    category: 'retail-trends',
    tags: ['s-loc', 'riyadh', 'expansion'],
    authors: {
      en: ['Northern Analytics Team'],
      ar: ['فريق نورثرن أناليتكس'],
    },
    title: {
      en: 'How Retailers Choose Their Next Site in Saudi Arabia',
      ar: 'كيف يختار تجار التجزئة موقعهم القادم في السعودية',
    },
    excerpt: {
      en: 'Footfall, catchment demographics, and competitor density: the three signals that shape modern retail site selection across the Kingdom.',
      ar: 'حركة الزوار وخصائص السكان وكثافة المنافسين: ثلاث إشارات تحدد اختيار مواقع التجزئة الحديثة في المملكة.',
    },
    html: {
      en: '<p>Retail expansion in the Kingdom is moving from intuition to evidence. Footfall patterns, catchment demographics, and competitor density now sit side by side in a single planning view.</p><p>Teams that combine these signals shortlist stronger sites and avoid costly relocations later.</p>',
      ar: '<p>ينتقل التوسع في قطاع التجزئة بالمملكة من الحدس إلى الأدلة. تجتمع أنماط حركة الزوار وخصائص السكان وكثافة المنافسين في عرض تخطيط واحد.</p><p>الفرق التي تجمع هذه الإشارات تختار مواقع أقوى وتتجنب عمليات النقل المكلفة لاحقا.</p>',
    },
  },
  {
    slug: 'pharmacy-network-planning',
    date: '2026-10-13',
    category: 'healthcare-intelligence',
    tags: ['pharmacies', 'demographics', 'jeddah'],
    authors: {
      en: ['Data Science Team', 'Location Intelligence Team'],
      ar: ['فريق علم البيانات', 'فريق الذكاء المكاني'],
    },
    title: {
      en: 'Planning Pharmacy Networks with Demographic Data',
      ar: 'تخطيط شبكات الصيدليات باستخدام البيانات السكانية',
    },
    excerpt: {
      en: 'How age profiles, household density, and clinic proximity help healthcare retailers place new pharmacies where demand is real.',
      ar: 'كيف تساعد الفئات العمرية وكثافة الأسر والقرب من العيادات في وضع الصيدليات الجديدة حيث الطلب حقيقي.',
    },
    html: {
      en: '<p>Pharmacy demand follows people: their age, their health needs, and how close they live to clinics and hospitals. Demographic layers make that demand visible before a lease is signed.</p><p>Network planners can compare districts in Jeddah and Riyadh with the same scoring model.</p>',
      ar: '<p>يتبع الطلب على الصيدليات الناس: أعمارهم واحتياجاتهم الصحية وقربهم من العيادات والمستشفيات. تجعل الطبقات السكانية هذا الطلب مرئيا قبل توقيع عقد الإيجار.</p><p>يستطيع مخططو الشبكات مقارنة أحياء جدة والرياض بنموذج تقييم واحد.</p>',
    },
  },
  {
    slug: 'feasibility-study-checklist',
    date: '2026-10-08',
    category: 'feasibility-studies',
    tags: ['roi', 'expansion'],
    authors: {
      en: ['Northern Analytics Team'],
      ar: ['فريق نورثرن أناليتكس'],
    },
    title: {
      en: 'A Practical Checklist for Location Feasibility Studies',
      ar: 'قائمة عملية لدراسات جدوى المواقع',
    },
    excerpt: {
      en: 'Eight questions every expansion team should answer before committing capital to a new location.',
      ar: 'ثمانية أسئلة يجب أن تجيب عنها كل فرق التوسع قبل تخصيص رأس المال لموقع جديد.',
    },
    html: {
      en: '<p>A good feasibility study answers a small number of questions clearly: who is the customer, how many are nearby, who else is serving them, and what return is realistic.</p><p>This checklist keeps those questions in front of the team from the first shortlist to the final decision.</p>',
      ar: '<p>تجيب دراسة الجدوى الجيدة عن عدد قليل من الأسئلة بوضوح: من هو العميل، وكم عددهم في المنطقة، ومن يخدمهم أيضا، وما العائد الواقعي.</p><p>تبقي هذه القائمة الأسئلة أمام الفريق من أول قائمة مختصرة حتى القرار النهائي.</p>',
    },
  },
  {
    slug: 'market-analysis-ai',
    date: '2026-10-02',
    category: 'market-analysis',
    tags: ['saas', 'roi'],
    authors: {
      en: ['Data Science Team'],
      ar: ['فريق علم البيانات'],
    },
    title: {
      en: 'Turning Market Signals into Decisions with AI',
      ar: 'تحويل إشارات السوق إلى قرارات باستخدام الذكاء الاصطناعي',
    },
    excerpt: {
      en: 'A look at how teams combine internal sales data with external market signals to move from reporting to forecasting.',
      ar: 'نظرة على كيفية جمع الفرق بين بيانات المبيعات الداخلية وإشارات السوق الخارجية للانتقال من التقارير إلى التنبؤ.',
    },
    html: {
      en: '<p>Dashboards describe what happened. Market analysis with AI starts to explain why, and what is likely to happen next.</p><p>By joining internal sales data with external signals, teams build forecasts they can act on.</p>',
      ar: '<p>تصف لوحات المعلومات ما حدث. أما تحليل السوق بالذكاء الاصطناعي فيبدأ بتفسير السبب وما يُتوقع حدوثه لاحقا.</p><p>بدمج بيانات المبيعات الداخلية مع الإشارات الخارجية تبني الفرق توقعات يمكن العمل بها.</p>',
    },
  },
  {
    slug: 'ml-demand-forecasting',
    date: '2026-09-24',
    category: 'data-science',
    tags: ['saas'],
    authors: {
      en: ['Data Science Team', 'Product Team'],
      ar: ['فريق علم البيانات', 'فريق المنتج'],
    },
    title: {
      en: 'Demand Forecasting Models That Teams Actually Use',
      ar: 'نماذج التنبؤ بالطلب التي تستخدمها الفرق فعلا',
    },
    excerpt: {
      en: 'Accuracy matters, but adoption matters more. What we learned shipping forecasting models to commercial teams.',
      ar: 'الدقة مهمة لكن التبني أهم. ما تعلمناه عند تسليم نماذج التنبؤ للفرق التجارية.',
    },
    html: {
      en: '<p>The best forecasting model is the one commercial teams trust enough to use. Clear explanations and simple outputs matter as much as accuracy.</p><p>We share the patterns that helped our forecasts move from notebooks into weekly decisions.</p>',
      ar: '<p>أفضل نموذج تنبؤ هو الذي تثق به الفرق التجارية بما يكفي لاستخدامه. التفسير الواضح والمخرجات البسيطة لا يقلان أهمية عن الدقة.</p><p>نشارك الأنماط التي ساعدت توقعاتنا على الانتقال من الدفاتر التحليلية إلى القرارات الأسبوعية.</p>',
    },
  },
  {
    slug: 'riyadh-jeddah-markets',
    date: '2026-09-18',
    category: 'market-analysis',
    tags: ['riyadh', 'jeddah', 'demographics'],
    authors: {
      en: ['Northern Analytics Team'],
      ar: ['فريق نورثرن أناليتكس'],
    },
    title: {
      en: 'Riyadh vs Jeddah: Reading Two Markets',
      ar: 'الرياض مقابل جدة: قراءة في سوقين',
    },
    excerpt: {
      en: 'Two cities, two very different customer profiles. A side-by-side view of demographics, income, and growth corridors.',
      ar: 'مدينتان وملفان مختلفان للعملاء. عرض متجاور للتركيبة السكانية والدخل ومسارات النمو.',
    },
    html: {
      en: '<p>Riyadh and Jeddah look similar on a national map but behave differently on the ground. Income distribution, household size, and growth corridors all diverge.</p><p>A side-by-side comparison helps teams adapt their format and pricing to each city.</p>',
      ar: '<p>تبدو الرياض وجدة متشابهتين على الخريطة الوطنية لكنهما تختلفان على أرض الواقع. يتباين توزيع الدخل وحجم الأسرة ومسارات النمو.</p><p>تساعد المقارنة المتجاورة الفرق على تكييف النموذج والتسعير لكل مدينة.</p>',
    },
  },
  {
    slug: 'location-intelligence-roi',
    date: '2026-09-12',
    category: 'feasibility-studies',
    tags: ['s-loc', 'roi'],
    authors: {
      en: ['Location Intelligence Team'],
      ar: ['فريق الذكاء المكاني'],
    },
    title: {
      en: 'Measuring the ROI of Location Intelligence',
      ar: 'قياس العائد على الاستثمار في الذكاء المكاني',
    },
    excerpt: {
      en: 'A simple framework for connecting site decisions to revenue, so the value of spatial analytics is easy to defend.',
      ar: 'إطار بسيط لربط قرارات المواقع بالإيرادات حتى يسهل الدفاع عن قيمة التحليلات المكانية.',
    },
    html: {
      en: '<p>Location decisions are expensive and slow to reverse, so their return should be measured. We outline a simple framework that links each site decision to revenue and cost.</p><p>With that link in place, the value of spatial analytics becomes easy to explain to leadership.</p>',
      ar: '<p>قرارات المواقع مكلفة وبطيئة التراجع، لذا ينبغي قياس عائدها. نعرض إطارا بسيطا يربط كل قرار موقع بالإيرادات والتكلفة.</p><p>وبوجود هذا الربط يسهل شرح قيمة التحليلات المكانية للإدارة.</p>',
    },
  },
];
const blogPosts = blogs$2;
const EN_PATH_PREFIX = '/en';
const articlePath = (slug, lang) =>
  lang === 'en' ? `${EN_PATH_PREFIX}/blogs/${slug}` : `/blogs/${slug}`;
const isEnglishPath = (pathname) =>
  pathname === EN_PATH_PREFIX || pathname.startsWith(`${EN_PATH_PREFIX}/`);
const specialtyCoffeeJeddahFaq = {
  en: {
    title: 'FAQ',
    items: [
      {
        question: 'What is the best area to open a specialty coffee shop in Jeddah?',
        answer:
          'Based on current market activity, Al Rawdah, Al Shati, Al Zahra, and Obhur are top contenders. The best specific area depends on your concept; Al Shati favors premium destination concepts, while Al Rawdah is excellent for purist neighborhood cafés.',
      },
      {
        question: 'Which neighborhood is best for a coffee shop in Jeddah?',
        answer:
          'There is no single "best" neighborhood, but Al Zahra and Al Rawdah offer the most balanced mix of daytime commercial traffic and affluent residential density. For brands relying on evening leisure and tourism, coastal districts like Al Shati are preferable.',
      },
      {
        question: 'Is Al Shati a good area for specialty coffee?',
        answer:
          'Yes, Al Shati is an excellent area for premium specialty coffee. Because it borders the Red Sea and contains major luxury retail developments, it attracts a high-spending demographic seeking experiential, destination-oriented F&B venues.',
      },
      {
        question: 'Is Al Rawdah a good neighborhood for a café?',
        answer:
          "Absolutely. Al Rawdah is historically the heart of Jeddah's specialty coffee scene, particularly along Abdul Maqsoud Khoja Street. It boasts a highly educated consumer base that values premium coffee quality.",
      },
      {
        question: 'Is Al Zahra a good area for a coffee shop?',
        answer:
          'Yes, Al Zahra is highly strategic. It is anchored by major hospitals, corporate offices, and dense residential blocks, providing strong, consistent footfall throughout the morning and afternoon, which is vital for specialty coffee survival.',
      },
      {
        question: 'Which Jeddah neighborhoods have strong coffee activity?',
        answer:
          'Al Rawdah, Al Shati, Al Khalidiyah, and Al Salamah currently exhibit the strongest specialty coffee activity. These areas feature mature commercial corridors, premium F&B clustering, and demographics with strong purchasing power.',
      },
      {
        question: 'How do I compare neighborhoods before opening a coffee shop?',
        answer:
          'You should compare neighborhoods by evaluating local purchasing power indicators, accessibility (traffic flow and parking), and the density of existing F&B competitors. Using location-intelligence tools helps quantify these factors rather than relying on guesswork.',
      },
      {
        question: 'How can S-Locator help me choose a coffee-shop area?',
        answer:
          'S-Locator provides data-driven location intelligence to help you evaluate specific sites. It allows you to analyze competitor mapping, demographic profiles, and commercial activity in a specific catchment area to ensure the site matches your business model.',
      },
    ],
  },
  ar: {
    title: 'الأسئلة الشائعة',
    items: [
      {
        question: 'ما أفضل منطقة لافتتاح مقهى قهوة مختصة في جدة؟',
        answer:
          'استناداً إلى نشاط السوق الحالي، تُعد الروضة والشاطئ والزهراء وأبحر من أبرز الخيارات. وتعتمد المنطقة الأنسب على مفهومك؛ فالشاطئ يناسب مفاهيم الوجهة الفاخرة، بينما الروضة ممتازة لمقاهي الحي النقية.',
      },
      {
        question: 'أي حي هو الأفضل لمقهى في جدة؟',
        answer:
          'لا يوجد حي «أفضل» واحد، لكن الزهراء والروضة تقدمان أكثر مزيج توازناً بين الحركة التجارية النهارية والكثافة السكنية الميسورة. وللعلامات التي تعتمد على السهرات والترفيه، تكون الأحياء الساحلية مثل الشاطئ أفضل.',
      },
      {
        question: 'هل الشاطئ منطقة جيدة للقهوة المختصة؟',
        answer:
          'نعم، الشاطئ منطقة ممتازة للقهوة المختصة الفاخرة. ولأنه يطل على البحر الأحمر ويضم مشاريع تجزئة فاخرة كبرى، فهو يجذب فئة إنفاق مرتفع تبحث عن وجهات تجريبية للأغذية والمشروبات.',
      },
      {
        question: 'هل الروضة حياً جيداً لمقهى؟',
        answer:
          'بالتأكيد. الروضة تاريخياً قلب مشهد القهوة المختصة في جدة، خصوصاً على شارع عبد المقصود خوجة. وتضم قاعدة مستهلكين ذوي تعليم عالٍ يقدّرون جودة القهوة الفاخرة.',
      },
      {
        question: 'هل الزهراء منطقة جيدة لمقهى؟',
        answer:
          'نعم، الزهراء استراتيجية للغاية. ترتكز على مستشفيات كبرى ومكاتب شركات ومجمعات سكنية كثيفة، ما يوفر إقبالاً قوياً وثابتاً طوال الصباح وبعد الظهر، وهو أمر حيوي لاستمرار القهوة المختصة.',
      },
      {
        question: 'أي أحياء جدة لديها نشاط قهوة قوي؟',
        answer:
          'تُظهر الروضة والشاطئ والخالدية والسلام حالياً أقوى نشاط للقهوة المختصة. تتميز هذه المناطق بمحاور تجارية ناضجة وتجمع للأغذية والمشروبات الفاخرة وتركيبة سكانية ذات قوة شرائية عالية.',
      },
      {
        question: 'كيف أقارن الأحياء قبل افتتاح مقهى؟',
        answer:
          'ينبغي مقارنة الأحياء عبر تقييم مؤشرات القوة الشرائية المحلية، وسهولة الوصول (تدفق المرور ومواقف السيارات)، وكثافة منافسي الأغذية والمشروبات الحاليين. وتساعد أدوات الذكاء المكاني على قياس هذه العوامل بدلاً من الاعتماد على التخمين.',
      },
      {
        question: 'كيف يساعدني S-Locator في اختيار منطقة لمقهى؟',
        answer:
          'يوفر S-Locator ذكاء مواقع مبنياً على البيانات لتقييم مواقع محددة. يتيح تحليل خرائط المنافسين والملفات الديموغرافية والنشاط التجاري في نطاق جذب محدد للتأكد من أن الموقع يلائم نموذج عملك.',
      },
    ],
  },
};
const nav$1 = {
  home: 'الرئيسية',
  solution: 'الحلول',
  about: 'من نحن',
  contact: 'تواصل',
  blog: 'المدونة',
  signUp: 'تسجيل',
  services: 'الخدمات',
  projects: 'المشاريع',
  locator: 'إس لوكيتر',
  industries: 'القطاعات',
  insights: 'الرؤى',
  blogs: 'المدونة',
  language: 'En',
  homeLabel: 'الصفحة الرئيسية لنورثرن أناليتكس',
  logoAlt: 'نورثرن أناليتكس',
  searchAria: 'بحث',
  menuToggleAria: 'فتح وإغلاق القائمة',
};
const footer$1 = {
  linkedinAria: 'لينكد إن',
  tagline: 'نربط الاستراتيجية بالبيانات المتقدمة والذكاء الاصطناعي لعصر التحول الرقمي.',
  services: 'الخدمات والمنتجات',
  industries: 'القطاعات',
  contact: 'تواصل معنا',
  experts: 'تواصل مع خبرائنا',
  rights: 'جميع الحقوق محفوظة.',
  address: [
    'جدة، المملكة العربية السعودية',
    'رقم المبنى: 3096، شارع الهدا',
    'حي الفيصلية',
    'الرقم الفرعي: 7756، الرمز البريدي: 23442',
  ],
  legal: ['إمكانية الوصول', 'الخصوصية', 'شروط الاستخدام', 'إدارة ملفات الارتباط'],
  serviceLinks: [
    'الاستشارات الإدارية',
    'داتابريكس / البيانات والذكاء الاصطناعي',
    'البيانات والتحليلات',
    'منصة إس لوكيتر',
    'السحابة والبنية الهجينة',
    'الأمن السيبراني',
  ],
  industryLinks: [
    'البنوك وأسواق رأس المال',
    'القطاع الحكومي والعام',
    'الرعاية الصحية وعلوم الحياة',
    'التصنيع',
    'التجزئة والسلع الاستهلاكية',
    'الطاقة والمرافق',
  ],
};
const common$1 = {
  demo: 'اطلب عرض إس لوكيتر',
  expert: 'تحدث مع خبير',
};
const home$1 = {
  partner: 'شريك رسمي',
  title: 'داتابريكس / البيانات والذكاء الاصطناعي',
  accent: 'استشارات',
  learnMore: 'اعرف المزيد',
  spotlightEyebrow: 'تفوق التوقعات',
  spotlightTitle: 'خبراء البيانات',
  spotlightTitleLine: 'وذكاء المواقع',
  spotlightBody:
    'نورثرن أناليتكس، من مقرّها في جدة، تساعد المؤسسات في المملكة على تحويل البيانات المعقدة إلى قرارات واضحة. من خلال استشارات داتابريكس ومنصة إس لوكيتر نقدّم بنية البيانات والذكاء الاصطناعي، وذكاء السوق والمواقع، والتنفيذ العملي. نساعد عملاءنا على فهم سوقهم والتحرك بناءً عليه بوضوح وسرعة.',
  spotlightImageAlt: 'شكل زجاجي تجريدي يعبّر عن البيانات وذكاء المواقع',
  solutionsTitle: 'الحلول',
  solutionItems: [
    {
      title: 'الاستشارات',
      text: 'استشارات داتابريكس والبيانات والذكاء الاصطناعي، من البنية والترحيل إلى التمكين، حتى تعتمد الفرق بحيرة بيانات آمنة وقابلة للتوسع.',
    },
    {
      title: 'إس روت',
      text: 'تخطيط المسارات ينظّم وصول الفرق الميدانية إلى المواقع المناسبة، بوقت أقل على الطريق وتنفيذ يومي أوضح.',
    },
    {
      title: 'إس لوكيتر',
      text: 'منصة ذكاء مواقع لتخطيط السوق، واختيار المواقع، وتصميم النطاقات، والتوسع المبني على البيانات.',
    },
  ],
  offerTitle: 'ذكاء البيانات والمواقع، جاهز للسوق السعودي',
  offerText:
    'تقدّم نورثرن أناليتكس استشارات داتابريكس، وإس روت، وإس لوكيتر للمؤسسات في المملكة. من بنية بحيرة البيانات إلى المسارات الميدانية وقرارات المواقع، نساعد الفرق على الانتقال من البيانات إلى التنفيذ.',
  techTitle: 'نحوّل {البيانات} إلى {قرارات} تدفع النمو والنجاح في أنحاء المملكة.',
  projectShots: [
    {
      src: '/images/northernacs/s-locator-map-mockup.png',
      alt: 'خريطة إس لوكيتر لمدينة الرياض',
      label: 'إس لوكيتر',
    },
    {
      src: '/images/northernacs/riyadh-skyline.jpg',
      alt: 'أفق الرياض',
      label: 'السوق السعودي',
    },
    {
      src: '/images/northernacs/vision-building.jpg',
      alt: 'مبنى يعكس رؤية السعودية 2030',
      label: 'رؤية 2030',
    },
    {
      src: '/images/northernacs/about-us-northernacs-scaled.jpg',
      alt: 'فريق نورثرن أناليتكس',
      label: 'فريقنا',
    },
    {
      src: '/images/northernacs/contact.jpeg',
      alt: 'مكتب نورثرن أناليتكس',
      label: 'الاستشارات',
    },
    {
      src: '/images/northernacs/hero-skyline.png',
      alt: 'أفق مدينة لذكاء المواقع',
      label: 'المواقع',
    },
  ],
  offerStats: [
    {
      value: '3+',
      label: 'حلول',
    },
    {
      value: '2+',
      label: 'منتجات',
    },
    {
      value: '3+',
      label: 'ممارسات',
    },
    {
      value: '1+',
      label: 'سوق',
    },
    {
      value: '2+',
      label: 'لغات',
    },
    {
      value: '4+',
      label: 'رؤى',
    },
    {
      value: '5+',
      label: 'تغطية',
    },
    {
      value: '6+',
      label: 'برامج',
    },
    {
      value: '7+',
      label: 'فرق',
    },
    {
      value: '8+',
      label: 'مواقع',
    },
  ],
  subtitle: 'مع منتجنا الرئيسي:',
  intro:
    'تربط نورثرن أناليتكس بين الاستراتيجية والتنفيذ، وتقدم خبرات استشارية عالمية في البيانات ومنتجات ذكاء مكاني متقدمة إلى المملكة العربية السعودية.',
  servicesEyebrow: 'خبرات داتابريكس والبيانات',
  servicesTitle: 'خدماتنا الأساسية',
  servicesIntro: 'تنفيذ بنى بيانات عالمية واستراتيجيات متقدمة لتسريع التحول الرقمي.',
  heroImageAlt: 'تنفيذ استراتيجي وأفق مدينة',
  partnerLogoAlt: 'شعار شريك داتابريكس',
  serviceCards: [
    {
      id: 'strategy',
      title: 'الإدارة الاستراتيجية',
      description: 'تحديد الأهداف الديناميكية، تخصيص الموارد، ومواءمة المواهب لدفع خلق القيمة.',
      details:
        'نساعدك في تصميم استراتيجية متماسكة توحد بين الأعمال وتكنولوجيا المعلومات، وتحويل رؤيتك وأهدافك إلى خارطة طريق عالية التأثير. يضمن نهجنا المواءمة المثالية بين مواردك المالية والبشرية لسد الفجوة بين التخطيط والتنفيذ.',
    },
    {
      id: 'dataAi',
      title: 'بنية البيانات والذكاء الاصطناعي',
      description: 'محرك الذكاء: التحليلات التنبؤية، اتخاذ القرار الآلي، وإنشاء مصدر واحد للحقيقة.',
      details:
        'نبني محرك ذكاء قوي يحول البيانات المعقدة إلى مصدر واحد للحقيقة. نطبق التحليلات التنبؤية والقرارات الآلية بالذكاء الاصطناعي لضمان تحرك أعمالك بسرعة بياناتك.',
    },
    {
      id: 'integration',
      title: 'تكامل المؤسسات',
      description: 'أتمتة العمليات ورؤية سلسلة التوريد.\nإطلاق القيمة الكامنة من أنظمة SAP/Oracle.',
      details:
        'سد الفجوة بين أنظمتك القديمة والسوق الحديث من خلال إطلاق القيمة المحاصرة داخل الحلول القديمة. نحن نبسط عملياتك من خلال الأتمتة والتكامل الشامل.',
    },
  ],
  strategyTitle: 'استراتيجية متصلة بالتنفيذ',
  strategyText:
    'نربط الاستشارات والتنفيذ والقيمة القابلة للقياس حتى يكون لكل مبادرة بيانات أثر واضح على الأعمال.',
  databricksTitle: 'استشارات ليك هاوس للمؤسسات الحديثة',
  databricksText:
    'من التصميم إلى الهجرة والتمكين، يساعد خبراؤنا الفرق على اعتماد داتابريكس بأنماط آمنة وقابلة للتوسع.',
  aboutTitle: 'مصمم للتحول الرقمي السعودي',
  aboutText:
    'تجمع نورثرن أناليتكس بين معايير التنفيذ في أمريكا الشمالية والالتزام العميق بسوق المملكة.',
  locatorTitle: 'منصة إس لوكيتر',
  locatorText:
    'منصة ذكاء مكاني لتخطيط الأسواق واختيار المواقع وتصميم المناطق والتوسع المدعوم بالبيانات.',
  storiesTitle: 'قصص نجاح',
  visionTitle: 'رؤيتنا',
  visionText: 'أن نكون الجسر الموثوق بين قدرات البيانات المتقدمة والتحول العملي في المنطقة.',
  ctaTitle: 'هل أنت جاهز لتسريع تحولك الرقمي؟',
  ctaText:
    'سواء كنت تحتاج إلى بنية داتابريكس متقدمة أو ذكاء مكاني قوي عبر إس لوكيتر، فإن خبراءنا جاهزون لخدمة سوق المملكة.',
  v8: {
    heroPartner: 'شريك رسمي',
    heroFlagship: 'مع منتجنا الرئيسي:',
    strat1Title: 'الإدارة الاستراتيجية',
    strat1P1: 'تحديد الأهداف الديناميكية، تخصيص الموارد، ومواءمة المواهب لدفع خلق القيمة.',
    strat1P2:
      'نساعدك في تصميم استراتيجية متماسكة توحد بين الأعمال وتكنولوجيا المعلومات، وتحويل رؤيتك وأهدافك إلى خارطة طريق عالية التأثير. يضمن نهجنا المواءمة المثالية بين مواردك المالية والبشرية لسد الفجوة بين التخطيط والتنفيذ.',
    strat2Title: 'بنية البيانات والذكاء الاصطناعي',
    strat2P1: 'محرك الذكاء: التحليلات التنبؤية، اتخاذ القرار الآلي، وإنشاء مصدر واحد للحقيقة.',
    strat2P2:
      'نبني محرك ذكاء قوي يحول البيانات المعقدة إلى مصدر واحد للحقيقة. نطبق التحليلات التنبؤية والقرارات الآلية بالذكاء الاصطناعي لضمان تحرك أعمالك بسرعة بياناتك.',
    strat3Title: 'تكامل المؤسسات',
    strat3P1: 'أتمتة العمليات ورؤية سلسلة التوريد.\nإطلاق القيمة الكامنة من أنظمة SAP/Oracle.',
    strat3P2:
      'سد الفجوة بين أنظمتك القديمة والسوق الحديث من خلال إطلاق القيمة المحاصرة داخل الحلول القديمة. نحن نبسط عملياتك من خلال الأتمتة والتكامل الشامل.',
    dbBadge: 'تخصص البيانات',
    dbTitle: 'تخصص داتابريكس العميق',
    dbSub: 'تمكين مؤسستك بذكاء بيانات متطور وسير عمل تحليلي موحد ومصمم للتوسع.',
    dbC1: 'البنية التحتية',
    dbC1Sub: 'بناء أسس بيانات قوية',
    dbC1P:
      'نصمم بنى بيانات قابلة للتوسع وآمنة وعالية الأداء، مصممة لدعم أعقد تحليلات المؤسسات ومبادرات الذكاء الاصطناعي محلياً داخل Databricks.',
    dbC2: 'الترحيل السحابي',
    dbC2Sub: 'انتقال سحابي سلس',
    dbC2P:
      'نضمن ترحيلاً آمناً وبدون توقف لأنظمتك القديمة إلى بيئات Databricks الحديثة والمرنة، مع تحسين التكلفة والأداء.',
    dbC3: 'Lakehouse',
    dbC3Sub: 'تطوير بيئات البيانات الحديثة',
    dbC3P:
      'توحيد تخزين البيانات وسير عمل الذكاء الاصطناعي في بيئة Databricks Lakehouse واحدة محكمة، لإنشاء مصدر حقيقة واحد وآمن لكامل مؤسستك.',
    teamBadge: 'من نحن',
    teamTitle: 'خبرات تقنية أمريكية شمالية.\nمكرسة للسوق السعودي.',
    teamP1:
      'تأسست نورثرن أناليتكس على يد خبراء مخضرمين لربط المراكز التقنية في أمريكا الشمالية بالمشهد المزدهر في دول مجلس التعاون الخليجي، برؤية واضحة: تسريع الذكاء الرقمي وقدرات البيانات عبر المملكة العربية السعودية.',
    teamP2:
      'نجمع بين الرؤى العالمية والخبرة المحلية. من خلال استشارات Databricks والذكاء الاصطناعي ومنصتنا المكانية الرائدة، ينفذ فريقنا استراتيجيات متكاملة تحول تحديات البيانات المعقدة إلى نمو مستدام يتوافق مع رؤية السعودية 2030.',
    teamRole1: 'شريك إداري ورئيس العمليات',
    teamRole2: 'شريك ورئيس قسم التكنولوجيا',
    teamDesc1:
      'استراتيجية بيانات المؤسسات والذكاء الاصطناعي. قيادة التحول الرقمي. استشارات تنفيذية. التميز التشغيلي.',
    teamDesc2: 'استراتيجية الذكاء الاصطناعي والرقمي للإدارة العليا. استشارات إدارة الأعمال.',
    teamName1: 'عبدالله عباس',
    teamName2: 'هارون باشخازنجي',
    slBadge: 'منتجاتنا',
    slSub: 'الذكاء المكاني للمملكة العربية السعودية',
    slP: 'اكتشف منصتنا الرئيسية المصممة خصيصاً للمشهد الديناميكي في المملكة العربية السعودية. S-Locator هي مجموعة تحليلات مكانية متقدمة تمكن الشركات والجهات الحكومية من اتخاذ قرارات جغرافية مبنية على البيانات.',
    slLi1: 'خرائط حرارية ديموغرافية وذكاء في الوقت الفعلي',
    slLi2: 'نمذجة تنبؤية مدعومة بالذكاء الاصطناعي لاختيار المواقع',
    slLi3: 'مصممة بسلاسة لتناسب المبادرات الذكية لرؤية 2030',
    slBtn: 'اكتشف منصة S-LOCATOR',
    visBadge1: 'نورثرن أناليتكس',
    visBadge2: 'المملكة العربية السعودية • رؤية السعودية 2030',
    visTitle: 'الالتزام برؤية السعودية 2030:',
    visTitleAccent:
      'نقل المعرفة التقنية الأمريكية الشمالية عالية المستوى مباشرة إلى المملكة العربية السعودية.',
    visSub: 'حضور محلي، بمعايير عالمية.',
    visBtn: 'شاهد الفيلم',
    visCookie:
      'لتشغيل هذا الفيديو، يرجى تفعيل ملفات تعريف الارتباط. قد تقوم جوجل/يوتيوب بمعالجة بياناتك —',
    visLearn: 'اعرف المزيد.',
  },
};
const about$1 = {
  eyebrow: 'من نحن',
  title: 'الجسر نحو النضج الرقمي',
  intro:
    'نورثرن أناليتكس شركة استشارية متخصصة تنقل الخبرات الرائدة من أمريكا الشمالية إلى قلب التحول الرقمي في المملكة العربية السعودية.',
  missionTitle: 'الرسالة',
  missionText:
    'تقديم برامج بيانات وذكاء اصطناعي وتحليلات عملية تحول الاستراتيجية إلى تنفيذ قابل للقياس.',
  visionTitle: 'الرؤية',
  visionText:
    'أن نصبح الشريك الإقليمي الموثوق لمنصات البيانات الحديثة والذكاء المكاني والنضج الرقمي.',
  valuesTitle: 'قيمنا الأساسية',
  leadershipTitle: 'منهجية القيادة',
  leadershipText: 'نقود بوضوح وشراكة وتنفيذ مسؤول من الاكتشاف حتى النتائج القابلة للقياس.',
  engagementTitle: 'كيف نعمل',
  engagementText:
    'يبدأ كل تعاون بأهداف الأعمال، ثم ينتقل إلى التصميم والتنفيذ والتمكين والتحسين المستمر.',
};
const contact$1 = {
  eyebrow: 'تواصل معنا',
  title: 'حدثنا عن مشروعك',
  intro: 'شارك بعض التفاصيل وسيتواصل معك المختص المناسب برد مخصص.',
  infoTitle: 'معلومات التواصل',
  firstName: 'الاسم الأول *',
  lastName: 'اسم العائلة *',
  email: 'البريد الإلكتروني *',
  phone: 'الهاتف',
  location: 'الموقع محل الاهتمام *',
  company: 'الشركة',
  comments: 'التعليقات *',
  required: 'الحقول المميزة بعلامة * مطلوبة.',
  submit: 'إرسال',
  submitting: 'جاري الإرسال...',
  successTitle: 'شكرا لتواصلك',
  successText: 'وصلت رسالتك إلى فريقنا وسنرد خلال يوم عمل واحد.',
  again: 'إرسال رسالة أخرى',
  review: 'يرجى مراجعة الحقول المحددة.',
  sent: 'تم إرسال الرسالة. سيتواصل فريقنا خلال يوم عمل واحد.',
  error: 'حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.',
  validation: {
    firstNameRequired: 'الاسم الأول مطلوب.',
    lastNameRequired: 'اسم العائلة مطلوب.',
    emailRequired: 'البريد الإلكتروني مطلوب.',
    emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
    phoneInvalid: 'يقبل الهاتف الأرقام ورموز الاتصال فقط.',
    locationRequired: 'الموقع محل الاهتمام مطلوب.',
    commentsRequired: 'يرجى كتابة تعليق مختصر حتى نتمكن من المساعدة.',
    commentsMinLength: 'يجب ألا يقل التعليق عن 10 أحرف.',
  },
};
const blogs$1 = {
  eyebrow: 'الرؤى',
  title: 'أحدث المقالات',
  intro: 'مقالات ورؤى من نورثرن أناليتكس حول البيانات والذكاء الاصطناعي والذكاء المكاني.',
  readMore: 'اقرأ المقال',
  back: 'العودة إلى المدونة',
  notFound: 'المقال غير موجود.',
  searchPlaceholder: 'ابحث عن مقال',
  searchLabel: 'ابحث عن مقال',
  clearSearch: 'مسح البحث',
  categoriesTab: 'التصنيفات',
  popularTagTab: 'وسوم شائعة',
  filtersLabel: 'تصفية المقالات',
  noResults: 'لا توجد مقالات مطابقة.',
  pagination: {
    label: 'ترقيم صفحات المدونة',
    previous: 'الصفحة السابقة',
    next: 'الصفحة التالية',
    page: 'صفحة',
  },
  categories: [
    {
      id: 'retail-trends',
      label: 'اتجاهات التجزئة',
    },
    {
      id: 'healthcare-intelligence',
      label: 'ذكاء الرعاية الصحية',
    },
    {
      id: 'data-science',
      label: 'علم البيانات',
    },
    {
      id: 'market-analysis',
      label: 'تحليل السوق',
    },
    {
      id: 'feasibility-studies',
      label: 'دراسات الجدوى',
    },
  ],
  tags: [
    {
      id: 's-loc',
      label: '#S-LOC',
    },
    {
      id: 'riyadh',
      label: '#الرياض',
    },
    {
      id: 'jeddah',
      label: '#جدة',
    },
    {
      id: 'pharmacies',
      label: '#صيدليات',
    },
    {
      id: 'demographics',
      label: '#التركيبة السكانية',
    },
    {
      id: 'expansion',
      label: '#التوسع',
    },
    {
      id: 'saas',
      label: '#SaaS',
    },
    {
      id: 'roi',
      label: '#ROI',
    },
  ],
};
const aboutPage$1 = {
  pageEyebrow: 'من نحن',
  overviewTitle: 'نظرة عامة',
  clientsTitle: 'الشركاء والقطاعات',
  clientsDescription:
    'نتشارك مع منصات تقنية رائدة ونخدم مؤسسات في قطاعات رئيسية لتحقيق تحول قابل للقياس وأثر مستدام.',
  clientsButton: 'تواصل معنا',
  storiesPartnerTitle: 'شريك رسمي',
  storiesPartnerText: 'استشارات Databricks والبيانات والذكاء الاصطناعي.',
  storiesProductTitle: 'منتجنا الرئيسي',
  storiesProductText: 'ذكاء مواقع لتخطيط السوق واختيار المواقع.',
  leadershipTitle: 'فريق القيادة',
  leadershipPrev: 'القائد السابق',
  leadershipNext: 'القائد التالي',
  overviewParagraphs: [
    'نورثرن أناليتكس شركة استشارية متخصصة مقرها جدة، تنقل الخبرات الرائدة من أمريكا الشمالية إلى قلب التحول الرقمي في المملكة. نجمع بين {حلول البيانات والذكاء الاصطناعي} و{الخدمات الاستشارية}، ونساعد المؤسسات على تحويل البيانات المعقدة إلى قرارات واضحة، من الاستراتيجية حتى التنفيذ.',
    'عبر استشارات Databricks ومنصتي S-Locator وS-route نقدّم هندسة البيانات والذكاء الاصطناعي وذكاء المواقع والتنفيذ العملي، لدعم المبادرات التي تعمل ضمن مظلة رؤية السعودية 2030.',
  ],
  numbersTitle: 'أثرنا بالأرقام',
  numbersPrev: 'السابق',
  numbersNext: 'التالي',
  numbers: [
    {
      value: '4',
      label: 'قطاعات',
    },
    {
      value: '3',
      label: 'حلول',
    },
    {
      value: '3',
      label: 'خدمات أساسية',
    },
    {
      value: '2',
      label: 'منصات رقمية',
    },
    {
      value: '60%',
      label: 'نمو العائد التشغيلي',
    },
    {
      value: '50%',
      label: 'وفر محتمل في التكاليف',
    },
    {
      value: '2',
      label: 'مستويات نضج مكتسبة',
    },
    {
      value: '4',
      label: 'مراحل منهجية العمل',
    },
  ],
  welcomeKicker: 'مرحبا بكم في نورثرن أناليتكس',
  welcomeHeading: 'حلول بنية تحتية حديثة',
  welcomeBody:
    'يبدأ بناء مجتمعات أقوى من أساس راسخ في البيانات والتحليلات والذكاء الاصطناعي. في نورثرن أناليتكس نقف في طليعة التخطيط والتصميم والتنفيذ المرن والمستدام، ونطور تقنيات مدفوعة بالبيانات والذكاء الاصطناعي لمواجهة تحديات عالم سريع التغير. حلولنا في علم البيانات والذكاء الاصطناعي وذكاء الأعمال تعيد تشكيل مستقبل بنية أعمال تكنولوجيا المعلومات وصناعة القرار الذكي بمعايير تميز جديدة.',
  heroEyebrow: 'من نحن',
  heroTitle: 'الجسر نحو النضج الرقمي',
  heroIntro:
    'نورثرن أناليتكس شركة استشارية متخصصة تنقل الخبرات الرائدة من أمريكا الشمالية إلى قلب التحول الرقمي في المملكة العربية السعودية.',
  visionTitle: 'رؤيتنا',
  visionText:
    'أن نكون الجسر الاستراتيجي بين طموح القيادات التنفيذية والتميز التشغيلي. تسريع رؤية 2030 عبر نقل الخبرات الرائدة من أمريكا الشمالية مباشرة إلى الاقتصاد الرقمي للمملكة.',
  missionTitle: 'رسالتنا',
  missionText:
    'نطلق الإمكانات الحقيقية للبيانات والذكاء الاصطناعي ببناء أسس قابلة للتوسع وآمنة ومرنة. مهمتنا تتجاوز النظرية إلى التنفيذ الفعلي وتشغيل البيانات والذكاء الاصطناعي لتحقيق نمو قابل للقياس وقيمة طويلة الأمد.',
  valuesTitle: 'قيمنا الأساسية',
  valuesIntro: 'نربط بين الإدارة الاستراتيجية والتنفيذ التشغيلي',
  values: [
    {
      icon: 'globe',
      title: 'معايير عالمية وسياق محلي',
      text: 'بدمج التميز المعماري في أمريكا الشمالية مع رؤى محلية عميقة، نقدم خارطة الطريق الاستراتيجية اللازمة لتحقيق مستهدفات رؤية السعودية 2030 في العصر الرقمي.',
    },
    {
      icon: 'code',
      title: 'تركيز على التنفيذ',
      text: 'نحن منفذون قبل أن نكون مستشارين. قيمتنا تكمن في قدرتنا على التنفيذ وتقديم نماذج تشغيل وبنية تحتية للبيانات والذكاء الاصطناعي.',
    },
    {
      icon: 'scale',
      title: 'استشارات محايدة تقنيا',
      text: 'نمكن القيادات من تجاوز ضوضاء السوق وتحديد الموردين الذين يخدمون رؤيتهم بعيدة المدى. استشاراتنا غير المتحيزة تضمن بنى قابلة للتوسع وآمنة وعالية الأداء، وتعظم العائد على استثمارات البيانات والذكاء الاصطناعي.',
    },
  ],
  storiesTitle: 'التكريم والجوائز',
  storiesIntro: 'نتائج حقيقية من أعمالنا العالمية.',
  stories: [
    {
      icon: 'bank',
      sector: 'البنوك والتمويل',
      title: 'إعادة تعريف استراتيجية البيانات والذكاء الاصطناعي',
      challenge: 'بيانات مجزأة ومستوى نضج منخفض.',
      result: 'رفع نضج البيانات والذكاء الاصطناعي للبنك بدرجتين.',
      cta: 'استكشف الحالة',
    },
    {
      icon: 'strategy',
      sector: 'الاستراتيجية المؤسسية',
      title: 'تحويل البيانات إلى قيمة وطنية',
      challenge: 'جهة ضمن مجموعة السبع تحتاج إلى استراتيجية سيادية.',
      result: 'إنشاء مصادر إيرادات جديدة عبر التراخيص.',
      cta: 'استكشف الحالة',
    },
    {
      icon: 'telecom',
      sector: 'الاتصالات والاستثمار',
      title: 'تشغيل شبكات ذكي',
      challenge: 'تكاليف إرسال مرتفعة وانقطاعات متكررة.',
      result: 'تحديد إمكانية خفض التكاليف بنسبة 50%.',
      cta: 'استكشف الحالة',
    },
    {
      icon: 'energy',
      sector: 'الطاقة والصناعة',
      title: 'خطوط بيانات سحابية مؤتمتة',
      challenge: 'معالجة بيانات يدوية.',
      result: 'رفع العائد التشغيلي بنسبة 60%.',
      cta: 'استكشف الحالة',
    },
  ],
  engagementTitle: 'تاريخنا',
  engagementIntro: 'رحلة نحو نضج عال',
  steps: [
    {
      title: 'تحديد',
      text: 'مواءمة القيادة وتحديد الفرص ذات الأثر العالي.',
    },
    {
      title: 'تصميم',
      text: 'تقييم القدرات وتصميم البنية المناسبة.',
    },
    {
      title: 'بناء',
      text: 'تطوير ونشر حلول البيانات والذكاء الاصطناعي.',
    },
    {
      title: 'إطلاق',
      text: 'الدمج في العمليات اليومية وتمكين إدارة التغيير.',
    },
  ],
  leadershipHeading:
    'نمزج الرؤى العالمية بإتقان محلي، وننفذ استراتيجيات متكاملة تحول التحديات المعقدة إلى نمو مستدام وذي معنى.',
  leaders: [
    {
      name: 'عبدالله عباس',
      role: 'الشريك الإداري والرئيس التشغيلي',
      text: 'استراتيجية البيانات والذكاء الاصطناعي للمؤسسات. قيادة التحول الرقمي. استشارات القيادات التنفيذية. التميز التشغيلي.',
    },
    {
      name: 'هارون باشا',
      role: 'شريك ورئيس التقنية',
      text: 'استراتيجية رقمية وذكاء اصطناعي للقيادات التنفيذية. استشارات إدارة الأعمال.',
    },
  ],
  ctaTitle: 'كيف يمكننا مساعدتك؟',
  ctaButton: 'تواصل معنا',
  challengeLabel: 'التحدي',
  resultLabel: 'النتيجة',
};
const projectsPage$1 = {
  pageEyebrow: 'المشاريع',
  title: 'كتالوج المشاريع',
  intro: 'مجموعة من دراسات الحالات الحديثة عبر الاتصالات وذكاء التسويق والتحليلات المالية.',
  items: [
    {
      title: 'تحليل آلي للأخطاء في قطاع الاتصالات',
      location: 'كيبيك، كندا',
      image: '/images/northernacs/hero-skyline.png',
      href: 'https://northernacs.com/telecommunication_b1/',
    },
    {
      title: 'حل ذكاء أعمال للتسويق التنبؤي',
      location: 'كيبيك، كندا',
      image: '/images/northernacs/SnowmobilesYellowstone.jpg',
      href: 'https://northernacs.com/projectbrp/',
    },
    {
      title: 'حل تحليلات مالية قائم على البيانات',
      location: 'كيبيك، كندا',
      image:
        '/images/northernacs/strengthening-the-banking-sector-by-world-bank-and-switzerland.jpg',
      href: 'https://northernacs.com/project2/',
    },
  ],
};
const solutionsHero$1 = {
  brand: 'استشارات Databricks / البيانات والذكاء الاصطناعي',
  subtitle: 'البرنامج الفعّال لفريق المبيعات الميدانية',
  description:
    'اكتشف مستقبل {route} التلقائي و{territory} الديناميكي مع {brand}. يضمن التحسين المدعوم بالذكاء الاصطناعي زيارات أكثر للعملاء، وقيادة أقل، وتوفيراً كبيراً في الوقت. ابدأ الآن وضع فريق مبيعاتك الميدانية على طريق النجاح.',
  route: 'تخطيط المسارات',
  territory: 'تخطيط المناطق',
  routePlanner: 'مخطط المسارات',
  territoryOptimization: 'تحسين المناطق',
  getStarted: 'ابدأ الآن',
  imageAlt: 'مندوبو مبيعات ميدانية يخططون المسارات وزيارات العملاء',
  manAlt: 'مندوب مبيعات ميدانية يراجع المسار على هاتفه',
  womanAlt: 'مندوبة مبيعات ميدانية تخطط الزيارات على جهاز لوحي',
};
const productChooser$1 = {
  routePlanner: {
    title: 'مخطط المسارات',
    description:
      'اكتشف مستقبل تخطيط مسارات المبيعات الميدانية مع مخطط المسارات ‎portatour® المدعوم بالذكاء الاصطناعي. زيارات أكثر للعملاء بفضل المسارات المحسّنة، وتوفير في الوقت بفضل جدول زمني فعّال.',
    cta: 'تجربة مجانية',
    more: 'مزيد من التفاصيل حول مخطط مسارات المبيعات',
    imageAlt: 'مخطط المسارات على هاتف وجهاز لوحي',
  },
  territory: {
    title: 'تحسين المناطق',
    description:
      'حسّن منطقة مبيعاتك بالاعتماد على الذكاء الاصطناعي ووزّع عملاءك بكفاءة على مندوبي الميدان. مع ‎portatour® تحصل على ما يصل إلى 7 سيناريوهات محتملة بلمسة زر.',
    cta: 'ترتيب عرض',
    more: 'مزيد من التفاصيل حول تحسين المناطق',
    imageAlt: 'تحسين المناطق على حاسوب محمول',
  },
};
const customers$1 = {
  title: 'عملاؤنا',
  logos: [
    {
      alt: 'City Baby',
    },
    {
      alt: "Touch's",
    },
    {
      alt: 'IFFCO',
    },
    {
      alt: 'Krooky',
    },
    {
      alt: 'Maqyas',
    },
  ],
  categories: [
    {
      name: 'صناعة السيارات',
    },
    {
      name: 'مواد البناء',
    },
    {
      name: 'السلع الاستهلاكية',
    },
    {
      name: 'مستحضرات التجميل',
    },
    {
      name: 'المنتجات الإلكترونية',
    },
    {
      name: 'السلع الصناعية',
    },
    {
      name: 'الأجهزة الطبية',
    },
  ],
};
const advantages$1 = {
  titleLead: 'مزاياك مع',
  brand: 'Consulting',
  subtitle: 'برنامج للمبيعات الميدانية لتخطيط المسارات تلقائياً وتحسين المناطق ديناميكياً',
  heading: 'التوفير يلتقي بالكفاءة',
  readMore: 'اقرأ المزيد…',
  tabsLabel: 'المزايا',
  items: [
    {
      stat: 'كيلومترات أقل بنسبة 18%',
      logoAlt: 'MIWA',
      avatarAlt: 'بيتر نيمان',
      quote: 'نوفّر ما بين 15 و18% من المسافات المقطوعة سنوياً، إضافة إلى وقت كبير.',
      name: 'بيتر نيمان',
      role: 'المدير الوطني في MIWA',
    },
    {
      stat: 'اتصالات عملاء أكثر بنسبة 20%',
      logoAlt: 'شعار الشركة',
      avatarAlt: 'صورة العميل',
      quote: 'تتيح المسارات المحسّنة لمندوبينا إجراء اتصالات أكثر بنحو 20% مع العملاء كل أسبوع.',
      name: 'اسم العميل',
      role: 'المنصب، الشركة',
    },
    {
      stat: 'توفير 50% من الوقت',
      logoAlt: 'شعار الشركة',
      avatarAlt: 'صورة العميل',
      quote: 'أصبح تخطيط جدولنا الأسبوعي يستغرق نصف الوقت الذي كان يستغرقه سابقاً.',
      name: 'اسم العميل',
      role: 'المنصب، الشركة',
    },
  ],
};
const featuresList$1 = {
  items: [
    {
      title: 'العميل المناسب في الوقت المناسب',
      description:
        'يضمن إس-روت أن تركّز فرقك الميدانية على العملاء الأهم، مع توسيع التغطية، وتحسين جودة الزيارات، وزيادة فرص البيع.',
      bullets: [
        'ترتيب أولويات العملاء بالذكاء الاصطناعي',
        'تغطية متوازنة للمناطق',
        'جدولة الزيارات تلقائياً',
        'إدارة أذكى للحسابات',
        'تفاعل أفضل مع العملاء',
      ],
      imageAlt: 'خريطة وتخطيط المسارات',
      avatarAlt: 'هاشم عباس',
      quote: 'زيارات أكثر للعملاء. وقت أطول للبيع. تغطية أفضل للمناطق.',
      author: 'هاشم عباس',
      role: 'رئيس التسويق التجاري (السعودية/الخليج/الأردن)',
    },
    {
      title: 'ابدأ خلال دقائق',
      description:
        'صُمم إس-روت لفرق المبيعات الميدانية المشغولة. بلا إعداد معقّد، وبلا تنفيذ طويل، وبلا حاجة إلى خبرة تقنية. ابدأ تحسين المناطق وزيارات العملاء من اليوم الأول.',
      bullets: [
        'استخدم إس-روت من أي هاتف أو جهاز لوحي أو حاسوب',
        'أنشئ مسارات مبيعات محسّنة خلال دقائق',
        'أدمج الفرق الميدانية بسرعة وبتدريب محدود',
        'ابدأ تحسين تغطية المناطق فوراً',
      ],
      imageAlt: 'إس-روت على الهاتف',
      avatarAlt: 'الحسين عباس',
      quote: 'كان تطبيق إس-روت سهلاً للغاية، وبدأ فريق المبيعات لدينا يرى القيمة فوراً تقريباً.',
      author: 'الحسين عباس',
      role: 'مالك شركة سلع استهلاكية',
    },
    {
      title: 'تكامل سلس مع أنظمة CRM وERP',
      description:
        'يتكامل إس-روت بسهولة مع أنظمة إدارة العملاء وتخطيط الموارد الحالية، لتعمل فرق المبيعات دائماً ببيانات عملاء ومناطق دقيقة ومحدّثة.',
      bullets: [
        'استيراد العملاء والمواعيد وبيانات المبيعات خلال ثوانٍ',
        'الربط مع Salesforce وMicrosoft Dynamics ومنصات CRM أخرى',
        'مزامنة سجلات العملاء تلقائياً بين الأنظمة',
        'إلغاء الإدخال اليدوي وتقليل العمل الإداري',
        'إبقاء الفرق الميدانية مركّزة على البيع لا على تحديث الجداول',
      ],
      imageAlt: 'تكامل أنظمة CRM وERP',
      avatarAlt: 'محمد الهادي',
      quote:
        'غيّر إس-روت طريقة عمل فرقنا الميدانية. تخطيط المسارات الذي كان يستغرق ساعات يُنجز الآن خلال دقائق، فيركّز المندوبون على العملاء بدل الخدمات اللوجستية.',
      author: 'محمد الهادي',
      role: 'الابتكار | مستشار المنشآت الصغيرة والمتوسطة | تطوير الأعمال',
    },
  ],
};
const aboutSolution$1 = {
  titleLead: 'عن',
  brand: 'Consulting',
  subtitle:
    'تخطيط ثوري لمسارات المبيعات وتحسين المناطق لفريق مبيعاتك الميدانية، مبني على سنوات من الخبرة',
  pinLabel: 'الموقع',
  stats: [
    {
      value: '2007',
      label: 'تأسست',
    },
    {
      value: '1500+',
      label: 'العملاء',
    },
    {
      value: '20+',
      label: 'الدول',
    },
  ],
};
const faq$1 = {
  title: 'الأسئلة الشائعة',
  sRoute: [
    {
      question: 'كم من الوقت يوفّر إس-روت لفريق المبيعات الميدانية؟',
      answer:
        'الفرق التي كانت تبني المسارات يدوياً تستعيد وقت التخطيط. الجدول الأسبوعي الذي كان يستغرق ساعات يصبح جاهزاً خلال دقائق، فيقضي المندوب يومه مع العملاء.',
    },
    {
      question: 'هل يسجّل إس-روت المسارات التي يقودها المندوبون؟',
      answer:
        'إس-روت يخطّط اليوم، ولا يحتاج إلى تتبّع كل كيلومتر يقطعه المندوب. الخطة تُظهر ترتيب الزيارات وتوقيتها والعملاء الأهم.',
    },
    {
      question: 'هل يتصل إس-روت بـ Salesforce أو Dynamics أو نظام CRM آخر؟',
      answer:
        'نعم. يمكن جلب بيانات العملاء والمواعيد والمبيعات من Salesforce وMicrosoft Dynamics وأنظمة CRM وERP الأخرى، فيعمل الفريق الميداني على السجلات نفسها التي يستخدمها المكتب.',
    },
    {
      question: 'هل يمكن استخدام منطق التخطيط داخل تطبيقنا الميداني؟',
      answer:
        'يمكن أن يعمل التخطيط خلف الأدوات التي يفتحها فريقك أصلاً. نصمّم الربط بحيث يبقى المندوب على سير عمله ويتلقّى يوماً محسّناً.',
    },
    {
      question: 'عميل يطلب زيارة اليوم. كيف يتصرّف إس-روت؟',
      answer:
        'يُدرج الموعد الجديد في اليوم وتُعاد جدولة بقية الزيارات. يرى المندوب خطة عملية بدل إعادة بناء المسار من البداية.',
    },
    {
      question: 'هل يساعد إس-روت المندوبين على تجنّب الازدحام؟',
      answer:
        'ترتيب الزيارات يراعي زمن التنقّل، فيُرتَّب اليوم بحيث يقل الوقت على الطريق ويزيد الوقت في الاجتماعات.',
    },
    {
      question: 'هل يحسّن التخطيط الجيد عدد الزيارات الناجحة؟',
      answer:
        'اليوم الأضيق يتّسع عادة لمزيد من الزيارات الصحيحة. تتحسّن التغطية لأن الخطة تفضّل الحسابات المهمة لا الأقرب فقط.',
    },
    {
      question: 'لأي فرق بُني إس-روت؟',
      answer:
        'لفرق المبيعات الميدانية والترويج والخدمة التي تزور عملاء كثر داخل منطقة واحدة. يُستخدم للمسارات اليومية ولموازنة التغطية خلال الأسبوع.',
    },
    {
      question: 'هل يمكن تجربة إس-روت قبل تعميمه؟',
      answer:
        'نعم. تجربة مع فريق واحد كافية لرؤية الخطة والوقت الموفَّر ومدى ملاءمة الزيارات للمنطقة قبل التوسّع.',
    },
    {
      question: 'هل التخطيط مركزي أم يستطيع كل مندوب تخطيط يومه؟',
      answer:
        'الاثنان. يستطيع المدير تحديد أولويات المنطقة، ويستطيع المندوب تعديل يومه من الهاتف عندما يتصل عميل.',
    },
    {
      question: 'هل يوازن إس-روت المناطق وليس المسارات اليومية فقط؟',
      answer:
        'نعم. العرض نفسه يُظهر إن كانت الحسابات وأعباء العمل موزّعة بعدل، حتى لا يُثقل مندوب بينما آخر بلا عمل كافٍ.',
    },
    {
      question: 'كيف تُحمى بيانات العملاء؟',
      answer:
        'تبقى سجلات العملاء في الأنظمة التي تحكمونها أصلاً. الوصول يتبع صلاحياتكم، والربط يتبادل فقط الحقول التي يحتاجها المسار.',
    },
    {
      question: 'هل يعمل إس-روت على الهاتف؟',
      answer:
        'نعم. يفتح المندوب الخطة من الهاتف أو الجهاز اللوحي أو الحاسوب، ويبدأ من أول زيارة من غير خطوة إعداد منفصلة.',
    },
    {
      question: 'متى يستطيع الفريق البدء؟',
      answer:
        'معظم الفرق تخطّط لزيارات حقيقية خلال أيام. تُستورد بيانات العملاء وتُراجع المنطقة وتصبح المسارات الأولى جاهزة من غير تنفيذ طويل.',
    },
  ],
  sLocator: [
    {
      question: 'فيم يُستخدم إس-لوكيتر؟',
      answer:
        'يحوّل إس-لوكيتر إشارات الموقع والعملاء والمنافسين إلى قرار موقع. تستخدمه الفرق لتختار أين تفتح وأين تتوسّع وأي المواقع تتجنّب.',
    },
    {
      question: 'أي قرارات مواقع يستطيع دعمها؟',
      answer:
        'المواقع الجديدة والنقل ومقارنة مناطق الجذب وخطط المناطق. الدليل نفسه يخدم قرار متجر واحد أو شبكة مواقع.',
    },
    {
      question: 'هل نستطيع مقارنة أسواق مثل الرياض وجدة؟',
      answer:
        'نعم. يمكن قراءة المدن جنباً إلى جنب، بما في ذلك التركيبة السكانية والطلب وطريقة توزّع المنافسين، ليناسب النموذج كل سوق.',
    },
    {
      question: 'هل يشمل التركيبة السكانية والمنافسين؟',
      answer:
        'الاثنان في العرض نفسه. ملف الأسر والسكان والمنافسون القريبون يُقيَّمون معاً بدل جداول منفصلة.',
    },
    {
      question: 'كيف يساعد شبكات التجزئة أو الصيدليات؟',
      answer:
        'خطّة الشبكة تُظهر أين التغطية ضعيفة وأين سيتداخل الفرع الجديد مع فرع قائم. تستخدمها فرق التجزئة والصيدليات لوضع الموقع التالي حيث الطلب حقيقي.',
    },
    {
      question: 'هل يمكن تقييم عدة مواقع مرشّحة بنموذج واحد؟',
      answer:
        'نعم. المواقع المختصرة تشترك في نموذج تقييم واحد، فتقارنها الإدارة بالدليل نفسه لا بآراء متفرقة.',
    },
    {
      question: 'كيف تُعرض النتائج على الإدارة؟',
      answer:
        'كمقارنة واضحة: المواقع، والدليل خلف كل درجة، ومخاطرة اختيار موقع دون آخر. يمكن شرح القرار من غير عرض تقني.',
    },
    {
      question: 'هل التحليل مبني للسوق السعودي؟',
      answer:
        'نعم. العمل مرتكز على المدن والأحياء السعودية وطريقة تحرّك العملاء فعلاً، لا على قالب عالمي عام.',
    },
    {
      question: 'كم تستغرق دراسة الموقع؟',
      answer:
        'مقارنة مركّزة لمواقع مختصرة تكون عادة جاهزة خلال أيام. دراسة شبكة أو مدينة أوسع تأخذ وقتاً أطول لأن مناطق الجذب أكثر.',
    },
    {
      question: 'هل يدعم إس-لوكيتر خطّة توسّع لا موقعاً واحداً؟',
      answer:
        'نعم. تستخدمه فرق التوسّع لترتيب الأسواق والمواقع، فيذهب رأس المال أولاً إلى المواقع ذات المبرر الأقوى.',
    },
    {
      question: 'من يُعدّ الدراسة؟',
      answer:
        'تعدّ نورثرن أناليتكس التحليل مع فريقكم التجاري. تبقون أصحاب السؤال والقرار، ونحن نأتي بالدليل المكاني والنموذج.',
    },
    {
      question: 'كيف نبدأ؟',
      answer:
        'شاركونا الأسواق أو المواقع التي تدرسونها. نثبّت الأسئلة التي يجب أن تجيب عنها الدراسة، ثم نعيد مقارنة مُقيَّمة يستطيع فريقكم العمل بها.',
    },
  ],
  databricks: [
    {
      question: 'ماذا تشمل أعمال Databricks مع نورثرن أناليتكس؟',
      answer:
        'البنية والترحيل والأنماط التي سيشغّلها فريقكم يومياً. الهدف منصة واحدة محكومة لهندسة البيانات والتحليلات والذكاء الاصطناعي.',
    },
    {
      question: 'لماذا بنية الليك هاوس لبرنامج تحوّل سعودي؟',
      answer:
        'تستبدل مجموعة أدوات متفرقة بأساس واحد. يقضي الفريق وقتاً أقل في نقل البيانات بين المنصات ووقتاً أكثر في التحليل والذكاء الاصطناعي.',
    },
    {
      question: 'هل يمكن ترحيل الأحمال من منصتنا الحالية؟',
      answer:
        'نعم. نحدّد ما يُنقل وبأي ترتيب، وكيف تبقى التقارير ومسارات البيانات تعمل أثناء الترحيل.',
    },
    {
      question: 'هل تمكّنون فريقنا أم تسلّمون بناءً فقط؟',
      answer:
        'الاثنان، مع التركيز على فريقكم. التسليم يشمل البنية وأنماط العمل حتى تستطيع الفرق الداخلية توسيع المنصة بعد انسحابنا.',
    },
    {
      question: 'كيف تُعالج الحماية والحوكمة؟',
      answer:
        'الوصول وتتبع البيانات وجودتها جزء من التصميم لا تنظيف لاحق. تُشكَّل المنصة حول الضوابط التي تتطلّبها مؤسستكم أصلاً.',
    },
    {
      question: 'هل تدعم المنصة نفسها الذكاء الاصطناعي لا التقارير فقط؟',
      answer:
        'نعم. التحليلات والذكاء الاصطناعي يشاركان البيانات المحكومة نفسها، فيُدرَّب النموذج على بيانات تثق بها الأعمال.',
    },
    {
      question: 'كم تستغرق المشاركة المعتادة؟',
      answer:
        'حالة استخدام أولى يمكن أن تصل خلال أسابيع. المنصة الأوسع، مع الترحيل وتمكين الفريق، تُخطَّط على مراحل حتى تظهر القيمة قبل نهاية البرنامج.',
    },
    {
      question: 'مع أي جهات تعملون؟',
      answer:
        'مع الجهات السعودية التي تحدّث البيانات والذكاء الاصطناعي، في قطاعات تحتاج تقارير موثوقة ومساراً إلى ذكاء اصطناعي في الإنتاج.',
    },
    {
      question: 'هل يمكن تصميم المنصة بحيث تبقى البيانات محكومة داخل المملكة؟',
      answer: 'نعم. الإقامة والوصول وحدود الشبكة تُحسم من البداية وتُبنى داخل البنية.',
    },
    {
      question: 'ماذا يحدث بعد الإطلاق؟',
      answer:
        'يشغّل فريقكم المنصة بالأنماط التي نتركها. نبقى متاحين لحالة الاستخدام التالية عندما تريدون التوسعة.',
    },
    {
      question: 'هل نحتاج منصة Databricks جاهزة؟',
      answer:
        'لا. تبدأ المشاركات من مستودع حالي أو مجموعة مسارات أو قرار اعتماد Databricks. نلتقي المنصة حيث هي.',
    },
    {
      question: 'كيف نبدأ؟',
      answer:
        'أخبرونا بالقرار الذي يجب أن تدعمه المنصة. نقترح شريحة البنية الأولى والفريق المعني وشكل «الإنجاز» لتلك الشريحة.',
    },
  ],
};
const ar = {
  nav: nav$1,
  footer: footer$1,
  common: common$1,
  home: home$1,
  about: about$1,
  contact: contact$1,
  blogs: blogs$1,
  aboutPage: aboutPage$1,
  projectsPage: projectsPage$1,
  solutionsHero: solutionsHero$1,
  productChooser: productChooser$1,
  customers: customers$1,
  advantages: advantages$1,
  featuresList: featuresList$1,
  aboutSolution: aboutSolution$1,
  faq: faq$1,
};
const nav = {
  home: 'Home',
  solution: 'Solution',
  about: 'About',
  contact: 'Contact',
  blog: 'Blog',
  signUp: 'Sign up',
  services: 'Services',
  projects: 'Projects',
  locator: 'S-Locator',
  industries: 'Industries',
  insights: 'Insights',
  blogs: 'Blogs',
  language: 'Ar',
  homeLabel: 'Northern Analytics home',
  logoAlt: 'Northern Analytics',
  searchAria: 'Search',
  menuToggleAria: 'Toggle menu',
};
const footer = {
  linkedinAria: 'LinkedIn',
  tagline: 'Bridging Strategy & Advanced Data & AI for the Digital Age.',
  services: 'Services & Products',
  industries: 'Industries',
  contact: 'Contact',
  experts: 'Contact our experts',
  rights: 'All rights reserved.',
  address: [
    'Jeddah, Kingdom of Saudi Arabia',
    'Building No.: 3096, Street: Al Hada',
    'District: Al Faisaliyah District',
    'Secondary No.: 7756, Postal Code: 23442',
  ],
  legal: ['Accessibility', 'Privacy', 'Terms of use', 'Cookie Management'],
  serviceLinks: [
    'Business consulting',
    'Databricks / Data & AI',
    'Data & analytics',
    'S-Locator Platform',
    'Cloud & hybrid IT',
    'Cybersecurity',
  ],
  industryLinks: [
    'Banking & capital markets',
    'Government & public sector',
    'Healthcare & life sciences',
    'Manufacturing',
    'Retail & consumer goods',
    'Energy & utilities',
  ],
};
const common = {
  demo: 'Request S-Locator Demo',
  expert: 'Talk to an Expert',
};
const home = {
  partner: 'Official Partner',
  title: 'Databricks / Data & AI',
  accent: 'Consulting',
  learnMore: 'Learn more',
  spotlightEyebrow: 'Beyond Expectations',
  spotlightTitle: 'Data & Location',
  spotlightTitleLine: 'Intelligence Experts',
  spotlightBody:
    'Northern Analytics, headquartered in Jeddah, helps organizations across Saudi Arabia turn complex data into clear decisions. Through Databricks consulting and the S-Locator platform, we deliver data and AI architecture, market and location intelligence, and practical execution. We help clients not only understand their market, but move on it with clarity and speed.',
  spotlightImageAlt: 'Abstract glass form representing data and location intelligence',
  solutionsTitle: 'Solutions',
  solutionItems: [
    {
      title: 'Consulting',
      text: 'Databricks and Data & AI consulting, from architecture and migration to enablement, so teams adopt a secure and scalable lakehouse.',
    },
    {
      title: 'S-route',
      text: 'Route planning that organizes how field teams reach the right locations, with less time on the road and clearer daily execution.',
    },
    {
      title: 'S-locator',
      text: 'A location intelligence platform for market planning, site selection, territory design, and data-driven expansion.',
    },
  ],
  offerTitle: 'Data and location intelligence, ready for Saudi Arabia',
  offerText:
    'Northern Analytics brings Databricks consulting, S-route, and S-locator to organizations across the Kingdom. From lakehouse architecture to field routes and location decisions, we help teams move from data to action.',
  techTitle: 'Turning {data} into {decisions} to drive growth and success across the Kingdom.',
  projectShots: [
    {
      src: '/images/northernacs/s-locator-map-mockup.png',
      alt: 'S-Locator map of Riyadh',
      label: 'S-Locator',
    },
    {
      src: '/images/northernacs/riyadh-skyline.jpg',
      alt: 'Riyadh skyline',
      label: 'Saudi market',
    },
    {
      src: '/images/northernacs/vision-building.jpg',
      alt: 'Architecture aligned with Saudi Vision 2030',
      label: 'Vision 2030',
    },
    {
      src: '/images/northernacs/about-us-northernacs-scaled.jpg',
      alt: 'Northern Analytics team',
      label: 'Our team',
    },
    {
      src: '/images/northernacs/contact.jpeg',
      alt: 'Northern Analytics workspace',
      label: 'Consulting',
    },
    {
      src: '/images/northernacs/hero-skyline.png',
      alt: 'City skyline for location intelligence',
      label: 'Locations',
    },
  ],
  offerStats: [
    {
      value: '3+',
      label: 'Solutions',
    },
    {
      value: '2+',
      label: 'Products',
    },
    {
      value: '3+',
      label: 'Practices',
    },
    {
      value: '1+',
      label: 'Market',
    },
    {
      value: '2+',
      label: 'Languages',
    },
    {
      value: '4+',
      label: 'Insights',
    },
    {
      value: '5+',
      label: 'Coverage',
    },
    {
      value: '6+',
      label: 'Programs',
    },
    {
      value: '7+',
      label: 'Teams',
    },
    {
      value: '8+',
      label: 'Locations',
    },
  ],
  subtitle: 'Featuring our flagship product:',
  intro:
    'Northern Analytics bridges the gap between strategy and execution. We bring world-class North American data consulting and powerful location intelligence products directly to the Kingdom of Saudi Arabia.',
  servicesEyebrow: 'Databricks & Data Expertise',
  servicesTitle: 'Our Core Services',
  servicesIntro:
    'Executing world-class architectures and advanced data strategies to accelerate your digital transformation.',
  heroImageAlt: 'Strategic execution and city skyline',
  partnerLogoAlt: 'Databricks partner logo',
  serviceCards: [
    {
      id: 'strategy',
      title: 'Strategic Management',
      description:
        'Dynamic Goal Setting, Resource Allocation, and Talent Alignment to drive value creation.',
      details:
        'We help you design a cohesive strategy that unites Business and IT, transforming your vision and CAPEX goals into a high-impact roadmap. Our approach ensures that your financial and human resources are perfectly aligned to close the gap between planning and execution.',
    },
    {
      id: 'dataAi',
      title: 'Data & AI Architecture',
      description:
        'The Intelligence Engine: Predictive Analytics, Automated Decisioning, and establishing a Single Source of Truth.',
      details:
        'Build a robust intelligence engine that converts complex data into a single source of truth. We implement predictive analytics and AI automated decisioning to ensure your business moves at the speed of your data.',
    },
    {
      id: 'integration',
      title: 'Enterprise Integration',
      description:
        'Process Automation & Supply Chain Visibility.\nUnlocking legacy value from SAP/Oracle systems.',
      details:
        'Bridge the gap between your legacy systems and the modern market by unlocking trapped value within outdated solution. We streamline your operations through process automation and end-to-end integration.',
    },
  ],
  strategyTitle: 'Strategy Connected to Execution',
  strategyText:
    'We connect advisory, delivery, and measurable value so every data initiative has a clear business outcome.',
  databricksTitle: 'Lakehouse consulting for modern enterprises',
  databricksText:
    'From architecture to migration and enablement, our consultants help teams adopt Databricks with secure, scalable patterns.',
  aboutTitle: 'Built for Saudi digital transformation',
  aboutText:
    'Northern Analytics combines North American delivery standards with deep regional commitment in the Kingdom of Saudi Arabia.',
  locatorTitle: 'S-Locator Platform',
  locatorText:
    'A location intelligence platform for market planning, site selection, territory design, and data-driven expansion.',
  storiesTitle: 'Success Stories',
  visionTitle: 'Our Vision',
  visionText:
    'To be the trusted bridge between advanced data capabilities and practical transformation across the region.',
  ctaTitle: 'Ready to Accelerate Your Digital Transformation?',
  ctaText:
    'Whether you need advanced Databricks architecture or powerful spatial intelligence with S-Locator, our experts are ready to serve the KSA market.',
  v8: {
    heroPartner: 'OFFICIAL PARTNER',
    heroFlagship: 'Featuring our flagship product:',
    strat1Title: 'Strategic Management',
    strat1P1:
      'Dynamic Goal Setting, Resource Allocation, and Talent Alignment to drive value creation.',
    strat1P2:
      'We help you design a cohesive strategy that unites Business and IT, transforming your vision and CAPEX goals into a high-impact roadmap. Our approach ensures that your financial and human resources are perfectly aligned to close the gap between planning and execution.',
    strat2Title: 'Data & AI Architecture',
    strat2P1:
      'The Intelligence Engine: Predictive Analytics, Automated Decisioning, and establishing a Single Source of Truth.',
    strat2P2:
      'Build a robust intelligence engine that converts complex data into a single source of truth. We implement predictive analytics and AI automated decisioning to ensure your business moves at the speed of your data.',
    strat3Title: 'Enterprise Integration',
    strat3P1:
      'Process Automation & Supply Chain Visibility.\nUnlocking legacy value from SAP/Oracle systems.',
    strat3P2:
      'Bridge the gap between your legacy systems and the modern market by unlocking trapped value within outdated solution. We streamline your operations through process automation and end-to-end integration.',
    dbBadge: 'DATA SPECIALIZATION',
    dbTitle: 'Deep Databricks Specialization',
    dbSub:
      'Empowering your enterprise with cutting-edge data intelligence and unified analytical workflows tailored for scale.',
    dbC1: 'Architecture',
    dbC1Sub: 'Building robust data foundations',
    dbC1P:
      'We design highly scalable, secure, and performant data architectures tailored to support your most complex enterprise analytics and AI initiatives natively within Databricks.',
    dbC2: 'Migration',
    dbC2Sub: 'Seamless cloud transitions',
    dbC2P:
      'We ensure zero-downtime, risk-mitigated migrations of your legacy systems (on-prem or existing cloud) to modern, agile Databricks environments with optimized cost and performance.',
    dbC3: 'Lakehouse',
    dbC3Sub: 'Developing modern data environments',
    dbC3P:
      'Unify your data warehousing and AI workflows into a single, governed Databricks Lakehouse, establishing a secure, efficient single source of truth for your entire organization.',
    teamBadge: 'ABOUT US',
    teamTitle: 'North American Tech Expertise.\nDedicated to the Saudi Arabian Market.',
    teamP1:
      'Founded by industry veterans bridging the technology hubs of North America and the thriving landscape of the GCC, Northern Analytics was built with a clear vision: to accelerate digital intelligence and data capabilities across the Kingdom of Saudi Arabia (KSA).',
    teamP2:
      'We combine world-class insights with local mastery. Through our advanced Databricks/AI consulting and our flagship location platform, our team executes end-to-end strategies that transform complex data challenges into meaningful, sustainable growth tailored to the Saudi Vision 2030.',
    teamRole1: 'MANAGING PARTNER & COO',
    teamRole2: 'PARTNER & CHIEF TECHNOLOGY OFFICER',
    teamDesc1:
      'Enterprise Data & AI Strategy. Digital Transformation Leadership. C-Suite Advisory. Operational Excellence.',
    teamDesc2: 'C-Suite Digital/AI Strategy. Business Management Advisory',
    teamName1: 'ABDULLAH ABBAS',
    teamName2: 'HAROUN BACHA',
    slBadge: 'OUR PRODUCTS',
    slSub: 'Location Intelligence for Saudi Arabia',
    slP: 'Discover our flagship platform engineered specifically for the dynamic KSA landscape. S-Locator is an advanced spatial analytics suite that empowers businesses and government entities to make data-driven, geography-based decisions.',
    slLi1: 'Real-time demographic heatmaps & intelligence',
    slLi2: 'AI-powered predictive modeling for site selection',
    slLi3: 'Designed seamlessly for Vision 2030 smart initiatives',
    slBtn: 'EXPLORE S-LOCATOR PLATFORM',
    visBadge1: 'NACS',
    visBadge2: 'SAUDI ARABIA • SAUDI VISION 2030',
    visTitle: 'Commitment to Saudi Vision 2030:',
    visTitleAccent:
      'Transferring top-tier North American technological know-how directly to the Kingdom of Saudi Arabia.',
    visSub: 'Local Presence, Global Standards.',
    visBtn: 'WATCH THE FILM',
    visCookie:
      'To play this video, enable Statistics cookies. Google/YouTube may process your data —',
    visLearn: 'Learn more.',
  },
};
const about = {
  eyebrow: 'Who We Are',
  title: 'The Bridge to Digital Maturity',
  intro:
    'Northern Analytics is a specialized consultancy and advisory that translates top-tier North American expertise into the heart of the Saudi Arabia digital transformation.',
  missionTitle: 'Mission',
  missionText:
    'Deliver practical data, AI, and analytics programs that convert strategy into measurable execution.',
  visionTitle: 'Vision',
  visionText:
    'Become the trusted regional partner for modern data platforms, spatial intelligence, and digital maturity.',
  valuesTitle: 'Core Values',
  leadershipTitle: 'Leadership Mindset',
  leadershipText:
    'We lead with clarity, partnership, and accountable delivery from discovery through measurable outcomes.',
  engagementTitle: 'How We Engage',
  engagementText:
    'Every engagement starts with business goals, then moves through architecture, delivery, enablement, and continuous improvement.',
};
const contact = {
  eyebrow: 'Get in touch',
  title: 'Tell us about your project',
  intro:
    'Share a few details and the right specialist will get back to you with a tailored response.',
  infoTitle: 'Contact Information',
  firstName: 'First Name *',
  lastName: 'Last Name *',
  email: 'Email *',
  phone: 'Phone',
  location: 'Location of Interest *',
  company: 'Company',
  comments: 'Comments *',
  required: 'Fields marked with * are required.',
  submit: 'Submit',
  submitting: 'Submitting...',
  successTitle: 'Thanks for reaching out',
  successText: "Your message is on its way to our team. We'll respond within one business day.",
  again: 'Send another message',
  review: 'Please review the highlighted fields.',
  sent: 'Message sent. Our team will reach out within one business day.',
  error: 'Something went wrong. Please try again or email us directly.',
  validation: {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required.',
    emailRequired: 'Email is required.',
    emailInvalid: 'Please enter a valid email address.',
    phoneInvalid: 'Only numbers and phone characters are accepted.',
    locationRequired: 'Location of interest is required.',
    commentsRequired: 'Please share a quick comment so we can help.',
    commentsMinLength: 'Comments must be at least 10 characters.',
  },
};
const blogs = {
  eyebrow: 'Insights',
  title: 'Latest Blogs',
  intro:
    'Short articles and perspectives from Northern Analytics on data, AI, and location intelligence.',
  readMore: 'Read article',
  back: 'Back to blogs',
  notFound: 'Article not found.',
  searchPlaceholder: 'Find a blog post',
  searchLabel: 'Find a blog post',
  clearSearch: 'Clear search',
  categoriesTab: 'Categories',
  popularTagTab: 'Popular Tag',
  filtersLabel: 'Filter articles',
  noResults: 'No articles match this filter.',
  pagination: {
    label: 'Blog pagination',
    previous: 'Previous page',
    next: 'Next page',
    page: 'Page',
  },
  categories: [
    {
      id: 'retail-trends',
      label: 'Retail Trends',
    },
    {
      id: 'healthcare-intelligence',
      label: 'Healthcare Intelligence',
    },
    {
      id: 'data-science',
      label: 'Data Science',
    },
    {
      id: 'market-analysis',
      label: 'Market Analysis',
    },
    {
      id: 'feasibility-studies',
      label: 'Feasibility Studies',
    },
  ],
  tags: [
    {
      id: 's-loc',
      label: '#S-LOC',
    },
    {
      id: 'riyadh',
      label: '#Riyadh',
    },
    {
      id: 'jeddah',
      label: '#Jeddah',
    },
    {
      id: 'pharmacies',
      label: '#Pharmacies',
    },
    {
      id: 'demographics',
      label: '#Demographics',
    },
    {
      id: 'expansion',
      label: '#Expansion',
    },
    {
      id: 'saas',
      label: '#SaaS',
    },
    {
      id: 'roi',
      label: '#ROI',
    },
  ],
};
const aboutPage = {
  pageEyebrow: 'About Us',
  overviewTitle: 'Overview',
  clientsTitle: 'Partners & Sectors',
  clientsDescription:
    'We partner with leading technology platforms and serve organizations across key sectors to deliver measurable transformation and lasting impact.',
  clientsButton: 'Contact Us',
  storiesPartnerTitle: 'Official Partner',
  storiesPartnerText: 'Databricks and Data & AI consulting partner.',
  storiesProductTitle: 'Flagship Product',
  storiesProductText: 'Location intelligence for market and site planning.',
  leadershipTitle: 'Our Leadership',
  leadershipPrev: 'Previous leader',
  leadershipNext: 'Next leader',
  overviewParagraphs: [
    "Northern Analytics is a specialized consultancy and advisory firm headquartered in Jeddah, translating top-tier North American expertise into the heart of the Kingdom's digital transformation. We integrate {data & AI solutions} and {advisory services}, helping organizations turn complex data into clear decisions, from strategy to implementation.",
    'Through Databricks consulting and our S-Locator and S-route platforms, we deliver data and AI architecture, location intelligence, and practical execution that supports initiatives operating under the Saudi Vision 2030 umbrella.',
  ],
  numbersTitle: 'Impact in Numbers',
  numbersPrev: 'Previous',
  numbersNext: 'Next',
  numbers: [
    {
      value: '4',
      label: 'Industry Sectors',
    },
    {
      value: '3',
      label: 'Solutions',
    },
    {
      value: '3',
      label: 'Core Services',
    },
    {
      value: '2',
      label: 'Digital Platforms',
    },
    {
      value: '60%',
      label: 'ROI Boost',
    },
    {
      value: '50%',
      label: 'Cost Saving Potential',
    },
    {
      value: '2',
      label: 'Maturity Tiers Gained',
    },
    {
      value: '4',
      label: 'Engagement Phases',
    },
  ],
  welcomeKicker: 'Welcome to Northern Analytics',
  welcomeHeading: 'Modern Infrastructure Solutions',
  welcomeBody:
    'Building stronger communities begins with a foundation of robust data, analytics, and AI. At Northern Analytics, we are at the forefront of resilient and sustainable planning, designing, and implementing cutting-edge data-driven and AI-powered technologies to address the challenges posed by a rapidly evolving world. Our innovative solutions in Data Science, Artificial Intelligence, and BI are reshaping the future of IT business model architecture, engineering, and intelligent decision-making.',
  heroEyebrow: 'Who We Are',
  heroTitle: 'The Bridge to Digital Maturity',
  heroIntro:
    'Northern Analytics is a specialized consultancy and advisory that translates top-tier North American expertise into the heart of the Saudi Arabia digital transformation.',
  visionTitle: 'Our Vision',
  visionText:
    "To serve as the strategic bridge between C-Suite ambition and operational excellence. Accelerating Vision 2030 by transferring top-tier North American expertise directly to the Kingdom's digital economy.",
  missionTitle: 'Our Mission',
  missionText:
    'We unlock the true potential of data and AI by building scalable, secure and resilient foundations. Our mission is to move beyond theory to real-world execution, operationalizing data and AI to drive measurable growth and long-term value.',
  valuesTitle: 'Our Core Values',
  valuesIntro: 'We bridge the gap between strategic management and operational execution',
  values: [
    {
      icon: 'globe',
      title: 'Global Standards, Local Context',
      text: 'By integrating North American architectural excellence with deep local insights, we provide the strategic roadmap necessary to achieve Saudi Vision 2030 objectives in the digital era.',
    },
    {
      icon: 'code',
      title: 'Execution Focus',
      text: 'We are builders, not just strategists. Our value lies in our ability to execute and deliver data and AI operating models and infrastructure.',
    },
    {
      icon: 'scale',
      title: 'Vendor-Agnostic Advisors',
      text: 'We empower leadership to cut through market noise and identify the vendors that best serve their long-term vision. Our unbiased advisory ensures your architectural foundations are scalable, secure, and performant, maximizing the ROI of your data and AI investments.',
    },
  ],
  storiesTitle: 'Recognition and awards',
  storiesIntro: 'Real results from our global engagements.',
  stories: [
    {
      icon: 'bank',
      sector: 'Banking and Finance',
      title: 'Redefining Data and AI Strategy',
      challenge: 'Fragmented data and low maturity.',
      result: 'Moved the bank up 2 tiers in data and AI maturity.',
      cta: 'Explore Case',
    },
    {
      icon: 'strategy',
      sector: 'Corporate Strategy',
      title: 'National Data Monetization',
      challenge: 'G7 entity needed sovereign strategy.',
      result: 'Created new licensing revenue streams.',
      cta: 'Explore Case',
    },
    {
      icon: 'telecom',
      sector: 'Telecom and Investment',
      title: 'Smart Network Operations',
      challenge: 'High dispatch costs and outages.',
      result: '50% cost saving potential identified.',
      cta: 'Explore Case',
    },
    {
      icon: 'energy',
      sector: 'Energy and Industrial',
      title: 'Automated Cloud Pipelines',
      challenge: 'Manual data processing.',
      result: '60% boost in operational ROI.',
      cta: 'Explore Case',
    },
  ],
  engagementTitle: 'Our History',
  engagementIntro: 'Journey to High Maturity',
  steps: [
    {
      title: 'Define',
      text: 'Align leadership and identify high-impact opportunities.',
    },
    {
      title: 'Design',
      text: 'Assess capabilities and design architecture.',
    },
    {
      title: 'Build',
      text: 'Develop and deploy data and AI solutions.',
    },
    {
      title: 'Deploy',
      text: 'Integrate into daily operations and enable change management.',
    },
  ],
  leadershipHeading:
    'We combine world-class insights with local mastery and execute end-to-end strategies that transform complex challenges into meaningful, sustainable growth.',
  leaders: [
    {
      name: 'Abdullah Abbas',
      role: 'Managing partner and COO',
      text: 'Enterprise Data and AI Strategy. Digital Transformation Leadership. C-Suite Advisory. Operational Excellence.',
    },
    {
      name: 'Haroun Bacha',
      role: 'Partner and chief technology officer',
      text: 'C-Suite Digital and AI Strategy. Business Management Advisory.',
    },
  ],
  ctaTitle: 'How can we help?',
  ctaButton: 'Contact',
  challengeLabel: 'Challenge',
  resultLabel: 'Result',
};
const projectsPage = {
  pageEyebrow: 'PROJECTS',
  title: 'Projects Catalog',
  intro:
    'A selection of recent project case studies across telecom, marketing intelligence, and financial analytics.',
  items: [
    {
      title: 'Automated Error Analysis for Telecom',
      location: 'Quebec, Canada',
      image: '/images/northernacs/hero-skyline.png',
      href: 'https://northernacs.com/telecommunication_b1/',
    },
    {
      title: 'Predictive Marketing Business Intelligence Solution',
      location: 'Quebec, Canada',
      image: '/images/northernacs/SnowmobilesYellowstone.jpg',
      href: 'https://northernacs.com/projectbrp/',
    },
    {
      title: 'Data-Driven Financial Analysis Solution',
      location: 'Quebec, Canada',
      image:
        '/images/northernacs/strengthening-the-banking-sector-by-world-bank-and-switzerland.jpg',
      href: 'https://northernacs.com/project2/',
    },
  ],
};
const solutionsHero = {
  brand: 'Consulting Databricks / Data & AI',
  subtitle: 'The efficient software for your field sales team',
  description:
    'Discover the future of automatic {route} and dynamic {territory} with {brand}. AI-powered optimization ensures more customer visits, less driving and significant time savings. Get started now and put your field sales team on the road to success.',
  route: 'route planning',
  territory: 'territory planning',
  routePlanner: 'Route Planner',
  territoryOptimization: 'Territory Optimization',
  getStarted: 'Get started now',
  imageAlt: 'Field sales representatives planning routes and customer visits',
  manAlt: 'Field sales representative reviewing a route on his phone',
  womanAlt: 'Field sales representative planning visits on a tablet',
};
const productChooser = {
  routePlanner: {
    title: 'Route Planner',
    description:
      'Discover the future of field sales route planning with the AI-supported portatour® Route Planner. More customer visits thanks to optimized routes and time savings thanks to an efficient schedule.',
    cta: 'Free trial',
    more: 'More details about the sales route planner',
    imageAlt: 'Route planner on a phone and a tablet',
  },
  territory: {
    title: 'Territory Optimization',
    description:
      'Optimize your sales territory based on AI and distribute your customers efficiently to your field reps. With portatour® you get up to 7 possible scenarios at the touch of a button.',
    cta: 'Arrange demo',
    more: 'More details on territory optimization',
    imageAlt: 'Territory optimization on a laptop',
  },
};
const customers = {
  title: 'Our Customers',
  logos: [
    {
      alt: 'City Baby',
    },
    {
      alt: "Touch's",
    },
    {
      alt: 'IFFCO',
    },
    {
      alt: 'Krooky',
    },
    {
      alt: 'Maqyas',
    },
  ],
  categories: [
    {
      name: 'Automotive Industry',
    },
    {
      name: 'Building Materials',
    },
    {
      name: 'Consumer Goods',
    },
    {
      name: 'Cosmetics',
    },
    {
      name: 'Electronic Products',
    },
    {
      name: 'Industrial Goods',
    },
    {
      name: 'Medical Devices',
    },
  ],
};
const advantages = {
  titleLead: 'Your advantages with',
  brand: 'Consulting',
  subtitle: 'Field sales software for automatic route planning and dynamic territory optimization',
  heading: 'Savings meet efficiency',
  readMore: 'read more…',
  tabsLabel: 'Advantages',
  items: [
    {
      stat: '18% fewer kilometers',
      logoAlt: 'MIWA',
      avatarAlt: 'Pieter Niemand',
      quote: 'We save between 15 and 18% on mileage per year and a lot of time.',
      name: 'Pieter Niemand',
      role: 'MIWA National Director',
    },
    {
      stat: '20% more customer calls',
      logoAlt: 'Company logo',
      avatarAlt: 'Customer portrait',
      quote: 'Optimized routes let our reps fit in about 20% more customer calls every week.',
      name: 'Customer name',
      role: 'Position, Company',
    },
    {
      stat: '50% time saved',
      logoAlt: 'Company logo',
      avatarAlt: 'Customer portrait',
      quote: 'Planning our weekly schedule now takes half of the time it used to.',
      name: 'Customer name',
      role: 'Position, Company',
    },
  ],
};
const featuresList = {
  items: [
    {
      title: 'The Right Customer at the Right Time',
      description:
        'S-Route ensures your field teams focus on the customers that matter most, maximizing coverage, improving visit quality, and increasing sales opportunities.',
      bullets: [
        'AI-powered customer prioritization',
        'Balanced territory coverage',
        'Automated visit scheduling',
        'Smarter account management',
        'Improved customer engagement',
      ],
      imageAlt: 'Map and routing view',
      avatarAlt: 'Hashem Abbas',
      quote: 'More Customer Visits. More Time Selling. Better Territory Coverage.',
      author: 'Hashem Abbas',
      role: 'Head Of Trade Marketing (KSA/Gulf/Jordan)',
    },
    {
      title: 'Get Started in Minutes',
      description:
        'S-Route is designed for busy field sales teams. No complex setup, no lengthy implementation, and no technical expertise required. Start optimizing territories and customer visits from day one.',
      bullets: [
        'Access S-Route from any smartphone, tablet, or computer',
        'Generate optimized sales routes in minutes',
        'Quickly onboard field teams with minimal training',
        'Start improving territory coverage immediately',
      ],
      imageAlt: 'S-Route on a phone',
      avatarAlt: 'Al-hussain Abbas',
      quote:
        'S-Route was incredibly easy to implement, and our sales team started seeing value almost immediately.',
      author: 'Al-hussain Abbas',
      role: 'Owner of an FMCG company',
    },
    {
      title: 'Seamless CRM & ERP Integration',
      description:
        'S-Route integrates effortlessly with your existing CRM and ERP systems, ensuring your sales teams always work with accurate, up-to-date customer and territory data.',
      bullets: [
        'Import customers, appointments, and sales data in seconds',
        'Connect with Salesforce, Microsoft Dynamics, and other CRM platforms',
        'Synchronize customer records automatically across systems',
        'Eliminate manual data entry and reduce administrative work',
        'Keep field teams focused on selling, not updating spreadsheets',
      ],
      imageAlt: 'CRM and ERP integrations',
      avatarAlt: 'Mohammed Alhadi',
      quote:
        'S-Route transformed how our field teams operate. Route planning that used to take hours is now completed in minutes, allowing our representatives to focus on customers instead of logistics.',
      author: 'Mohammed Alhadi',
      role: 'Innovation | SME consultant | Business development',
    },
  ],
};
const aboutSolution = {
  titleLead: 'About',
  brand: 'Consulting',
  subtitle:
    'Revolutionary sales route planning and territory optimization for your field sales team - based on years of experience',
  pinLabel: 'Location',
  stats: [
    {
      value: '2007',
      label: 'founded',
    },
    {
      value: '1500+',
      label: 'Customers',
    },
    {
      value: '20+',
      label: 'Countries',
    },
  ],
};
const faq = {
  title: 'Frequently asked questions',
  sRoute: [
    {
      question: 'How much time can a field team save with S-Route?',
      answer:
        'Teams that used to build routes by hand usually get that planning time back. Weekly schedules that took hours can be ready in minutes, so representatives spend the day with customers.',
    },
    {
      question: 'Does S-Route record the routes representatives drive?',
      answer:
        'S-Route plans the day. It does not need to track every kilometer a representative drives. The plan shows the visit order, the timing, and the customers that matter.',
    },
    {
      question: 'Can S-Route connect to Salesforce, Dynamics, or another CRM?',
      answer:
        'Yes. Customer, appointment, and sales data can come from Salesforce, Microsoft Dynamics, and other CRM or ERP systems, so the field team works from the same records as the office.',
    },
    {
      question: 'Can we use the routing logic inside our own field app?',
      answer:
        'The planning can sit behind the tools your team already opens. We shape the integration so representatives keep their workflow and still receive an optimized day.',
    },
    {
      question: 'A customer asks for a visit today. How does S-Route respond?',
      answer:
        'The new appointment can be dropped into the day and the remaining visits reordered. The representative sees a practical plan instead of rebuilding the route from scratch.',
    },
    {
      question: 'Can S-Route help representatives avoid traffic?',
      answer:
        'Visit order takes travel time into account, so the day is sequenced to spend less time on the road and more time in meetings.',
    },
    {
      question: 'Does better routing help teams win more customer visits?',
      answer:
        'A tighter day usually fits in more of the right visits. Coverage improves because the plan favors the accounts that matter, not only the ones that are closest.',
    },
    {
      question: 'Which teams is S-Route built for?',
      answer:
        'Field sales, merchandising, and service teams that visit many customers across a territory. It is used for daily routes and for keeping coverage balanced over the week.',
    },
    {
      question: 'Can we try S-Route before rolling it out?',
      answer:
        'Yes. A pilot with one team is enough to see the plan, the time saved, and how the visits fit the territory before a wider rollout.',
    },
    {
      question: 'Is planning done centrally, or can each representative plan their day?',
      answer:
        'Both. A manager can set priorities for the territory, and a representative can shape the day from the phone when a customer calls.',
    },
    {
      question: 'Can S-Route balance territories, not only daily routes?',
      answer:
        'Yes. The same planning view shows whether accounts and workload are spread fairly, so one representative is not overloaded while another is underused.',
    },
    {
      question: 'How is customer data protected?',
      answer:
        'Customer records stay in the systems you already govern. Access follows your roles, and the integration exchanges only the fields the route needs.',
    },
    {
      question: 'Does S-Route work on a phone?',
      answer:
        'Yes. Representatives open the plan on a phone, tablet, or computer, and they can start from the first visit without a separate setup step.',
    },
    {
      question: 'How soon can a team start?',
      answer:
        'Most teams are planning real visits within days. Customer data is imported, the territory is checked, and the first routes are ready without a long implementation.',
    },
  ],
  sLocator: [
    {
      question: 'What is S-Locator used for?',
      answer:
        'S-Locator turns location, customer, and competitor signals into a site decision. Teams use it to choose where to open, where to expand, and which locations to avoid.',
    },
    {
      question: 'Which location decisions can it support?',
      answer:
        'New sites, relocations, catchment comparisons, and territory plans. The same evidence supports a single store decision or a network of locations.',
    },
    {
      question: 'Can we compare markets such as Riyadh and Jeddah?',
      answer:
        'Yes. Cities can be read side by side, including demographics, demand, and how competitors are already placed, so the format fits each market.',
    },
    {
      question: 'Does it include demographics and competitors?',
      answer:
        'Both sit in the same view. Household profile, population, and nearby competitors are scored together instead of in separate spreadsheets.',
    },
    {
      question: 'How does it help retail or pharmacy networks?',
      answer:
        'A network plan shows where coverage is thin and where a new branch would overlap an existing one. Retail and pharmacy teams use that to place the next site where demand is real.',
    },
    {
      question: 'Can several candidate sites be scored with one model?',
      answer:
        'Yes. Shortlisted sites share one scoring model, so leadership compares them on the same evidence rather than on separate opinions.',
    },
    {
      question: 'How are the results presented to leadership?',
      answer:
        'As a clear comparison: the sites, the evidence behind each score, and the risk of choosing one over another. The decision can be explained without a technical walkthrough.',
    },
    {
      question: 'Is the analysis built for the Saudi market?',
      answer:
        'Yes. The work is grounded in Saudi cities, districts, and the way customers actually move, not in a generic global template.',
    },
    {
      question: 'How long does a location study take?',
      answer:
        'A focused comparison of shortlisted sites is usually ready in days. A wider network or city study takes longer because more catchments are in scope.',
    },
    {
      question: 'Can S-Locator support an expansion plan, not a single site?',
      answer:
        'Yes. Expansion teams use it to sequence markets and sites, so capital goes to the locations with the stronger case first.',
    },
    {
      question: 'Who prepares the study?',
      answer:
        'Northern Analytics prepares the analysis with your commercial team. You keep the questions and the decision. We bring the spatial evidence and the model.',
    },
    {
      question: 'How do we start?',
      answer:
        'Share the markets or sites you are considering. We confirm the questions the study must answer, then return a scored comparison your team can act on.',
    },
  ],
  databricks: [
    {
      question: 'What does a Databricks engagement include?',
      answer:
        'Architecture, migration, and the patterns your team will run day to day. The aim is one governed platform for data engineering, analytics, and AI.',
    },
    {
      question: 'Why use a lakehouse for a Saudi transformation program?',
      answer:
        'It replaces a stack of disconnected tools with one foundation. Teams spend less time moving data between platforms and more time delivering analysis and AI.',
    },
    {
      question: 'Can you migrate workloads from our current platform?',
      answer:
        'Yes. We map what should move, in what order, and how reports and pipelines keep running while the migration is underway.',
    },
    {
      question: 'Do you enable our team, or only deliver a build?',
      answer:
        'Both, with the emphasis on your team. Delivery includes the architecture and the working patterns so internal teams can extend the platform after we step back.',
    },
    {
      question: 'How are security and governance handled?',
      answer:
        'Access, lineage, and data quality are part of the design, not a later cleanup. The platform is shaped around the controls your organization already requires.',
    },
    {
      question: 'Can the same platform support AI, not only reporting?',
      answer:
        'Yes. Analytics and AI share the same governed data, so a model is trained on data the business already trusts.',
    },
    {
      question: 'How long does a typical engagement last?',
      answer:
        'A first use case can land in weeks. A broader platform, with migration and team enablement, is planned in stages so value shows up before the full program ends.',
    },
    {
      question: 'Which organizations do you work with?',
      answer:
        'Saudi organizations modernizing data and AI, across sectors that need reliable reporting and a path to production AI.',
    },
    {
      question: 'Can the platform be designed so data stays governed in the Kingdom?',
      answer:
        'Yes. Residency, access, and network boundaries are decided at the start and built into the architecture.',
    },
    {
      question: 'What happens after go-live?',
      answer:
        'Your team runs the platform with the patterns we leave behind. We stay available for the next use case when you want to extend it.',
    },
    {
      question: 'Do we need a Databricks platform already?',
      answer:
        'No. Engagements start from a current warehouse, a set of pipelines, or a decision to adopt Databricks. We meet the platform where it is.',
    },
    {
      question: 'How do we begin?',
      answer:
        'Tell us the decision the platform must support. We propose the first architecture slice, the team involved, and what “done” looks like for that slice.',
    },
  ],
};
const en = {
  nav,
  footer,
  common,
  home,
  about,
  contact,
  blogs,
  aboutPage,
  projectsPage,
  solutionsHero,
  productChooser,
  customers,
  advantages,
  featuresList,
  aboutSolution,
  faq,
};
const LANG_STORAGE_KEY = 'northernacs-lang';
const isLang = (value) => value === 'en' || value === 'ar';
const translations = {
  en,
  ar,
};
const SITE_URL = 'https://northernacs.com';
const SITE_NAME = 'Northern Analytics';
const DEFAULT_SEO = {
  title: 'Northern Analytics Consulting Services',
  description:
    'Northern Analytics Consulting Services - Databricks, Data & AI, and S-Locator consulting in Saudi Arabia.',
};
const OG_LOCALE = { ar: 'ar_SA', en: 'en_US' };
const SEO_ATTR = 'data-seo';
const absoluteUrl = (path) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`);
const buildSeo = (input) => {
  const canonical = absoluteUrl(input.path);
  const otherLang = input.lang === 'ar' ? 'en' : 'ar';
  const alternates = [
    { hreflang: 'ar', href: absoluteUrl(input.alternatePaths.ar) },
    { hreflang: 'en', href: absoluteUrl(input.alternatePaths.en) },
    { hreflang: 'x-default', href: absoluteUrl(input.alternatePaths[input.defaultLang]) },
  ];
  const meta = (key, name, content) => ({
    tag: 'meta',
    attrs: { [key]: name, content },
  });
  const tags = [
    meta('name', 'description', input.description),
    meta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1'),
    { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
    ...alternates.map((alt) => ({
      tag: 'link',
      attrs: { rel: 'alternate', hreflang: alt.hreflang, href: alt.href },
    })),
    meta('property', 'og:type', input.type ?? 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', OG_LOCALE[input.lang]),
    meta('property', 'og:locale:alternate', OG_LOCALE[otherLang]),
    meta('property', 'og:url', canonical),
    meta('property', 'og:title', input.title),
    meta('property', 'og:description', input.description),
    meta('name', 'twitter:card', input.image ? 'summary_large_image' : 'summary'),
    meta('name', 'twitter:title', input.title),
    meta('name', 'twitter:description', input.description),
  ];
  if (input.image) {
    const url = absoluteUrl(input.image.url);
    tags.push(meta('property', 'og:image', url));
    if (input.image.width) tags.push(meta('property', 'og:image:width', String(input.image.width)));
    if (input.image.height)
      tags.push(meta('property', 'og:image:height', String(input.image.height)));
    if (input.image.alt) {
      tags.push(meta('property', 'og:image:alt', input.image.alt));
      tags.push(meta('name', 'twitter:image:alt', input.image.alt));
    }
    tags.push(meta('name', 'twitter:image', url));
  }
  if (input.type === 'article') {
    if (input.published) tags.push(meta('property', 'article:published_time', input.published));
    if (input.modified ?? input.published) {
      tags.push(meta('property', 'article:modified_time', input.modified ?? input.published));
    }
    if (input.section) tags.push(meta('property', 'article:section', input.section));
  }
  for (const data of input.jsonLd ?? []) {
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      text: JSON.stringify(data),
    });
  }
  return {
    lang: input.lang,
    title: input.title,
    description: input.description,
    canonical,
    alternates,
    modified: input.modified ?? input.published,
    tags,
  };
};
const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const serializeTag = ({ tag, attrs, text }) => {
  const attrString = Object.entries({ ...attrs, [SEO_ATTR]: '' })
    .map(([key, value]) => (value === '' ? key : `${key}="${escapeHtml(value)}"`))
    .join(' ');
  if (tag === 'script') {
    const safe = (text ?? '').replace(/</g, '\\u003c');
    return `<script ${attrString}>${safe}<\/script>`;
  }
  return `<${tag} ${attrString} />`;
};
const serializeSeoHead = (seo) =>
  [`<title ${SEO_ATTR}>${escapeHtml(seo.title)}</title>`, ...seo.tags.map(serializeTag)].join(
    '\n    ',
  );
const removeSeoNodes = () => {
  document.head.querySelectorAll(`[${SEO_ATTR}]`).forEach((node) => node.remove());
};
const ensureDefaultDescription = () => {
  const existing = document.head.querySelector('meta[name="description"]');
  if (existing) {
    existing.setAttribute('content', DEFAULT_SEO.description);
    return;
  }
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'description');
  meta.setAttribute('content', DEFAULT_SEO.description);
  document.head.appendChild(meta);
};
const applySeo = (seo) => {
  removeSeoNodes();
  document.head
    .querySelectorAll('meta[name="description"]:not([data-seo])')
    .forEach((node) => node.remove());
  document.title = seo.title;
  for (const { tag, attrs, text } of seo.tags) {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    element.setAttribute(SEO_ATTR, '');
    if (text) element.textContent = text;
    document.head.appendChild(element);
  }
};
const resetSeo = () => {
  removeSeoNodes();
  document.title = DEFAULT_SEO.title;
  ensureDefaultDescription();
};
const useSeo = (seo) => {
  useEffect(() => {
    if (!seo) return;
    applySeo(seo);
    return resetSeo;
  }, [seo]);
};
const DEFAULT_LANG = 'ar';
const FAQ_BY_SLUG = {
  'best-area-specialty-coffee-jeddah': specialtyCoffeeJeddahFaq,
};
const SECTION_FALLBACK = { ar: 'المدونة', en: 'Blog' };
const buildPostSeo = (post, lang) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const t = translations[lang];
  const path = articlePath(post.slug, lang);
  const canonical = absoluteUrl(path);
  const heading = post.title[lang];
  const title = ((_a = post.seo) == null ? void 0 : _a.title[lang]) ?? `${heading} | ${SITE_NAME}`;
  const description =
    ((_b = post.seo) == null ? void 0 : _b.description[lang]) ?? post.excerpt[lang];
  const coverUrl = ((_c = post.seo) == null ? void 0 : _c.image) ?? post.image;
  const section =
    ((_d = t.blogs.categories.find((item) => item.id === post.category)) == null
      ? void 0
      : _d.label) ?? SECTION_FALLBACK[lang];
  const author =
    ((_f = (_e = post.authors) == null ? void 0 : _e[lang]) == null ? void 0 : _f[0]) ?? SITE_NAME;
  const publisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/images/northernacs/logo.png') },
  };
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: heading,
      description,
      inLanguage: lang,
      articleSection: section,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      url: canonical,
      ...(coverUrl ? { image: [absoluteUrl(coverUrl)] } : {}),
      author: { '@type': 'Organization', name: author, url: SITE_URL },
      publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.nav.home, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: t.nav.blog, item: absoluteUrl('/blogs') },
        { '@type': 'ListItem', position: 3, name: heading, item: canonical },
      ],
    },
  ];
  const faq2 = (_g = FAQ_BY_SLUG[post.slug]) == null ? void 0 : _g[lang];
  if (faq2) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: faq2.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }
  return buildSeo({
    lang,
    title,
    description,
    path,
    alternatePaths: { ar: articlePath(post.slug, 'ar'), en: articlePath(post.slug, 'en') },
    defaultLang: DEFAULT_LANG,
    type: 'article',
    image: coverUrl
      ? {
          url: coverUrl,
          width: (_h = post.seo) == null ? void 0 : _h.imageWidth,
          height: (_i = post.seo) == null ? void 0 : _i.imageHeight,
          alt: heading,
        }
      : void 0,
    published: post.date,
    modified: post.date,
    section,
    jsonLd,
  });
};
const LanguageContext = createContext(void 0);
const getInitialLang = () => {
  if (typeof window === 'undefined') return 'ar';
  if (isEnglishPath(window.location.pathname)) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, 'en');
    } catch {}
    return 'en';
  }
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(saved) ? saved : 'ar';
};
const LanguageProvider = ({ children, initialLang }) => {
  const [lang, setLangState] = useState(() => initialLang ?? getInitialLang());
  const setLang = (nextLang) => {
    setLangState(nextLang);
    localStorage.setItem(LANG_STORAGE_KEY, nextLang);
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value, children });
};
const useLanguage = () => {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
};
const THEME_STORAGE_KEY = 'northernacs-theme';
const ThemeContext = createContext(void 0);
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);
  const setTheme = useCallback((nextTheme) => {
    setThemeState(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }, []);
  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value, children });
};
const useTheme = () => {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used inside ThemeProvider');
  return value;
};
const SiteLayout = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];
  const isAr = lang === 'ar';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setMobileOpen(false), [location.pathname]);
  const navItems = [
    { label: t.nav.home, to: '/' },
    {
      label: t.nav.solution,
      children: [
        { label: 'Consulting Databricks / Data & AI', to: '/solutions/consulting-databricks' },
        { label: 'S-route', to: '/solutions/s-route' },
        { label: 'S-locator', to: '/solutions/s-locator' },
      ],
    },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.contact, to: '/contact' },
    { label: t.nav.blog, to: '/blogs' },
  ];
  return /* @__PURE__ */ jsxs('div', {
    className: `min-h-screen bg-white text-nacs-ink antialiased transition-colors duration-200 dark:bg-[#343433] dark:text-slate-100 ${isAr ? 'font-arabic' : 'font-sans'}`,
    children: [
      /* @__PURE__ */ jsxs('header', {
        className: `sticky top-0 z-50 border-b border-gray-100 bg-white transition-all duration-200 dark:border-[#484846] dark:bg-[#343433]/95 dark:backdrop-blur ${scrolled ? 'shadow-md dark:shadow-black/20' : 'shadow-sm'}`,
        children: [
          /* @__PURE__ */ jsx('div', {
            className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-0',
            children: /* @__PURE__ */ jsxs('div', {
              className: 'flex h-20 items-center justify-between',
              children: [
                /* @__PURE__ */ jsx(Link, {
                  to: '/',
                  'aria-label': t.nav.homeLabel,
                  className: 'flex items-center gap-3',
                  children: /* @__PURE__ */ jsx('img', {
                    src: '/images/northernacs/logo.png',
                    alt: t.nav.logoAlt,
                    className: 'h-12 w-auto',
                    loading: 'eager',
                  }),
                }),
                /* @__PURE__ */ jsx('nav', {
                  className: 'hidden h-full items-center gap-10 lg:flex',
                  children: navItems.map((item) =>
                    item.children
                      ? /* @__PURE__ */ jsxs(
                          'div',
                          {
                            className: 'relative group h-full flex items-center',
                            children: [
                              /* @__PURE__ */ jsxs('button', {
                                type: 'button',
                                className: `group flex h-full items-center gap-1.5 text-sm font-bold tracking-wider transition-colors ${item.children.some((child) => location.pathname === child.to) ? 'text-[#08563D] dark:text-[#2dd4bf]' : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'}`,
                                children: [
                                  item.label,
                                  /* @__PURE__ */ jsx(FaChevronDown, {
                                    size: 9,
                                    className:
                                      'transition-transform duration-200 group-hover:rotate-180',
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsx('div', {
                                className:
                                  'absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50',
                                children: /* @__PURE__ */ jsx('div', {
                                  className:
                                    'w-64 rounded-lg bg-white p-2 shadow-xl border border-gray-100 ring-1 ring-black/5 dark:bg-[#2b2b2a] dark:border-[#484846] dark:ring-white/10',
                                  children: item.children.map((child) =>
                                    /* @__PURE__ */ jsx(
                                      NavLink,
                                      {
                                        to: child.to,
                                        className: ({ isActive }) =>
                                          `block rounded-md px-4 py-2.5 text-xs font-bold tracking-wider transition-colors ${isActive ? 'bg-slate-50 text-[#08563D] dark:bg-[#343433] dark:text-[#2dd4bf]' : 'text-slate-700 hover:bg-[#08563D]/5 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#343433] dark:hover:text-white'}`,
                                        children: child.label,
                                      },
                                      child.to,
                                    ),
                                  ),
                                }),
                              }),
                            ],
                          },
                          item.label,
                        )
                      : item.external
                        ? /* @__PURE__ */ jsx(
                            'a',
                            {
                              href: item.to,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              className:
                                'text-sm font-bold tracking-wider text-[#08563D] transition-colors hover:opacity-80',
                              children: item.label,
                            },
                            item.label,
                          )
                        : /* @__PURE__ */ jsx(
                            NavLink,
                            {
                              to: item.to,
                              className: ({ isActive }) =>
                                `text-sm font-bold tracking-wider transition-colors ${item.highlighted || isActive ? 'text-[#08563D] hover:opacity-80 dark:text-[#2dd4bf]' : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'}`,
                              children: item.label,
                            },
                            item.label,
                          ),
                  ),
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'flex items-center gap-2 sm:gap-3',
                  children: [
                    /* @__PURE__ */ jsxs('button', {
                      type: 'button',
                      onClick: () => setLang(lang === 'en' ? 'ar' : 'en'),
                      className:
                        'hidden items-center gap-1.5 py-2 hover:bg-gray-50 rounded-md p-2 text-sm font-bold tracking-wider text-slate-700 transition-colors hover:text-[#08563D] dark:text-slate-300 dark:hover:text-[#2dd4bf] md:flex',
                      children: [/* @__PURE__ */ jsx(FaGlobe, { size: 16 }), ' ', t.nav.language],
                    }),
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: toggleTheme,
                      'aria-label': 'Toggle theme',
                      className:
                        'flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-gray-100 hover:text-[#08563D] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#2dd4bf]',
                      children:
                        theme === 'dark'
                          ? /* @__PURE__ */ jsx(FaSun, { size: 16, className: 'text-amber-400' })
                          : /* @__PURE__ */ jsx(FaMoon, { size: 16 }),
                    }),
                    /* @__PURE__ */ jsx(Link, {
                      to: '/signup',
                      className:
                        'hidden rounded-sm bg-[#08563D] px-6 py-2.5 text-xs font-bold  tracking-widest text-white transition-all hover:bg-[#064531] dark:bg-[#08563D] dark:hover:bg-[#0a6f4e] md:inline-block',
                      children: t.nav.signUp,
                    }),
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      className:
                        'p-2 text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf] lg:hidden',
                      'aria-label': t.nav.menuToggleAria,
                      onClick: () => setMobileOpen((v) => !v),
                      children: mobileOpen
                        ? /* @__PURE__ */ jsx(FaXmark, { size: 22 })
                        : /* @__PURE__ */ jsx(FaBars, { size: 22 }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsx('div', {
            className: `overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 dark:border-[#484846] dark:bg-[#343433] lg:hidden ${mobileOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'}`,
            children: /* @__PURE__ */ jsxs('nav', {
              className: 'space-y-2 px-4 pb-6 pt-4',
              children: [
                navItems.map((item) =>
                  item.children
                    ? /* @__PURE__ */ jsxs(
                        'div',
                        {
                          className: 'space-y-1',
                          children: [
                            /* @__PURE__ */ jsx('div', {
                              className:
                                'px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400',
                              children: item.label,
                            }),
                            /* @__PURE__ */ jsx('div', {
                              className:
                                'ms-2 space-y-1 border-s-2 border-slate-100 ps-2 dark:border-[#484846]',
                              children: item.children.map((child) =>
                                /* @__PURE__ */ jsx(
                                  Link,
                                  {
                                    to: child.to,
                                    className:
                                      'block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]',
                                    children: child.label,
                                  },
                                  child.to,
                                ),
                              ),
                            }),
                          ],
                        },
                        item.label,
                      )
                    : item.external
                      ? /* @__PURE__ */ jsx(
                          'a',
                          {
                            href: item.to,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]',
                            children: item.label,
                          },
                          item.label,
                        )
                      : /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: item.to,
                            className:
                              'block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#2b2b2a] dark:hover:text-[#2dd4bf]',
                            children: item.label,
                          },
                          item.label,
                        ),
                ),
                /* @__PURE__ */ jsxs('div', {
                  className: 'mt-4 flex gap-3 border-t border-gray-100 pt-4 dark:border-[#484846]',
                  children: [
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: () => setLang(lang === 'en' ? 'ar' : 'en'),
                      className:
                        'flex-1 rounded-sm border border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-800 dark:border-[#484846] dark:text-slate-200',
                      children: t.nav.language,
                    }),
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: toggleTheme,
                      className:
                        'flex items-center justify-center rounded-sm border border-gray-200 px-4 py-3 text-slate-800 dark:border-[#484846] dark:text-slate-200',
                      'aria-label': 'Toggle theme',
                      children:
                        theme === 'dark'
                          ? /* @__PURE__ */ jsx(FaSun, { size: 16, className: 'text-amber-400' })
                          : /* @__PURE__ */ jsx(FaMoon, { size: 16 }),
                    }),
                    /* @__PURE__ */ jsx(Link, {
                      to: '/contact',
                      className:
                        'flex-1 rounded-sm bg-[#08563D] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white',
                      children: t.nav.signUp,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('main', { children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx('footer', {
        className:
          'border-t border-slate-200 bg-[#F2F2F2] text-slate-600 transition-colors duration-200 dark:border-[#484846] dark:bg-[#343433] dark:text-slate-300',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8',
          children: [
            /* @__PURE__ */ jsxs('div', {
              className: 'grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'lg:col-span-2 space-y-4',
                  children: [
                    /* @__PURE__ */ jsx(Link, {
                      to: '/',
                      className: 'inline-block',
                      children: /* @__PURE__ */ jsx('img', {
                        src: '/images/northernacs/logo.png',
                        alt: t.nav.logoAlt,
                        className: 'h-10 w-auto opacity-95 dark:brightness-0 dark:invert',
                        loading: 'lazy',
                      }),
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400',
                      children: t.footer.tagline,
                    }),
                    /* @__PURE__ */ jsx('div', {
                      className: 'flex items-center gap-3 pt-2',
                      children: /* @__PURE__ */ jsx('a', {
                        href: 'https://www.linkedin.com/company/northern-analytic',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': t.footer.linkedinAria,
                        className:
                          'flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-[#08563D] hover:bg-[#08563D] hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-600',
                        children: /* @__PURE__ */ jsx(FaLinkedinIn, { size: 14 }),
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  children: [
                    /* @__PURE__ */ jsx('h4', {
                      className:
                        'mb-4 text-sm font-bold  tracking-wider text-slate-900 dark:text-slate-200',
                      children: t.nav.solution,
                    }),
                    /* @__PURE__ */ jsxs('ul', {
                      className: 'space-y-2.5 text-sm',
                      children: [
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/solutions/consulting-databricks',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: 'Databricks / Data & AI',
                          }),
                        }),
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/solutions/s-route',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: 'S-route',
                          }),
                        }),
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/solutions/s-locator',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: 'S-locator',
                          }),
                        }),
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx('a', {
                            href: 'https://www.s-locator.com/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: 'S-Locator Live Platform ↗',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  children: [
                    /* @__PURE__ */ jsx('h4', {
                      className:
                        'mb-4 text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200',
                      children: isAr ? 'الشركة' : 'Company',
                    }),
                    /* @__PURE__ */ jsxs('ul', {
                      className: 'space-y-2.5 text-sm',
                      children: [
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/about',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: t.nav.about,
                          }),
                        }),
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/blogs',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: t.nav.blog,
                          }),
                        }),
                        /* @__PURE__ */ jsx('li', {
                          children: /* @__PURE__ */ jsx(Link, {
                            to: '/contact',
                            className:
                              'transition-colors hover:text-[#08563D] hover:underline dark:hover:text-emerald-400',
                            children: isAr ? 'تواصل مع خبرائنا' : 'Contact Our Experts',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  children: [
                    /* @__PURE__ */ jsx('h4', {
                      className:
                        'mb-4 text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200',
                      children: isAr ? 'تواصل معنا' : 'Contact',
                    }),
                    /* @__PURE__ */ jsxs('ul', {
                      className: 'space-y-2.5 text-xs text-slate-600 dark:text-slate-400',
                      children: [
                        /* @__PURE__ */ jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            /* @__PURE__ */ jsx(FaLocationDot, {
                              size: 16,
                              className: 'mt-0.5 shrink-0 text-[#08563D] dark:text-emerald-500',
                            }),
                            /* @__PURE__ */ jsx('span', {
                              className: 'text-[12px]',
                              children: isAr
                                ? 'جدة، حي الفيصلية، شارع الهدا، المملكة العربية السعودية'
                                : 'Halab Al-Baghdadiyah, Jeddah, Kingdom of Saudi Arabia',
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs('li', {
                          className: 'flex items-center gap-2 pt-1',
                          children: [
                            /* @__PURE__ */ jsx(FaEnvelope, {
                              size: 16,
                              className: 'shrink-0 text-[#08563D] dark:text-emerald-500',
                            }),
                            /* @__PURE__ */ jsx('a', {
                              href: 'mailto:contact@northernacs.com',
                              className:
                                'text-slate-700 text-sm transition-colors hover:text-[#08563D] hover:underline dark:text-slate-400 dark:hover:text-emerald-400',
                              children: 'contact@northernacs.com',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className:
                'mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-[11px] text-slate-500 sm:flex-row dark:border-[#484846] dark:text-slate-400',
              children: [
                /* @__PURE__ */ jsx('p', {
                  children: isAr
                    ? '© 2026 نورثرن أناليتكس للخدمات الاستشارية. جميع الحقوق محفوظة.'
                    : '© 2026 Northern Analytics Consulting Services. All rights reserved.',
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'flex flex-wrap gap-5 text-slate-500 dark:text-slate-500',
                  children: [
                    /* @__PURE__ */ jsx('span', {
                      className: 'cursor-default hover:text-slate-700 dark:hover:text-slate-300',
                      children: isAr ? 'الخصوصية' : 'Privacy',
                    }),
                    /* @__PURE__ */ jsx('span', {
                      className: 'cursor-default hover:text-slate-700 dark:hover:text-slate-300',
                      children: isAr ? 'شروط الاستخدام' : 'Terms of Use',
                    }),
                    /* @__PURE__ */ jsx('span', {
                      className: 'cursor-default hover:text-slate-700 dark:hover:text-slate-300',
                      children: isAr ? 'إمكانية الوصول' : 'Accessibility',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
const ABDULLAH_PHOTO = '/images/northernacs/abdullah-abbas.jpg';
const HAROUN_PHOTO = '/images/northernacs/haroun-bacha.jpg';
const DATABRICKS_LOGO = '/images/northernacs/databricks.png';
const SLOCATOR_LOGO = '/images/northernacs/s-locator-logo.png';
const LEADER_LINKEDIN = 'https://www.linkedin.com/company/northern-analytic';
const getLeaderPhoto = (name) =>
  name.includes('Haroun') || name.includes('هارون') ? HAROUN_PHOTO : ABDULLAH_PHOTO;
const HERO_IMAGE$2 = '/images/northernacs/about-us-northernacs-scaled.jpg';
const AboutPage = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang];
  const t = copy2.aboutPage;
  const nav2 = copy2.nav;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs('section', {
        className: 'relative w-full',
        children: [
          /* @__PURE__ */ jsx('img', {
            src: HERO_IMAGE$2,
            alt: t.pageEyebrow,
            className: 'h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[600px]',
            loading: 'eager',
          }),
          /* @__PURE__ */ jsx('div', {
            className:
              'pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent',
          }),
          /* @__PURE__ */ jsxs('div', {
            dir: lang === 'ar' ? 'rtl' : 'ltr',
            className: `absolute bottom-0 z-10 px-6 pb-8 sm:px-12 md:px-16 md:pb-12 ${lang === 'ar' ? 'right-0 text-right' : 'left-0 text-left'}`,
            children: [
              /* @__PURE__ */ jsxs('nav', {
                'aria-label': lang === 'ar' ? 'مسار التنقل' : 'Breadcrumb',
                className: 'text-sm font-medium text-white/85 md:text-[13px]',
                children: [
                  /* @__PURE__ */ jsx(Link, {
                    to: '/',
                    className: 'transition-colors hover:text-white',
                    children: /* @__PURE__ */ jsx('bdi', { children: nav2.home }),
                  }),
                  /* @__PURE__ */ jsx('span', { className: 'mx-1.5 text-white/60', children: '/' }),
                  /* @__PURE__ */ jsx('bdi', { className: 'text-white/90', children: nav2.about }),
                ],
              }),
              /* @__PURE__ */ jsx('h1', {
                dir: 'auto',
                className:
                  'mt-8 text-4xl font-bold leading-none text-white sm:text-5xl md:text-[56px]',
                children: t.pageEyebrow,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx(OverviewSection, {
        isAr: lang === 'ar',
        title: t.overviewTitle,
        paragraphs: t.overviewParagraphs,
        numbersTitle: t.numbersTitle,
        prevLabel: t.numbersPrev,
        nextLabel: t.numbersNext,
        stats: t.numbers,
      }),
      /* @__PURE__ */ jsx(LeadershipSection, {
        isAr: lang === 'ar',
        title: t.leadershipTitle,
        leaders: t.leaders,
        prevLabel: t.leadershipPrev,
        nextLabel: t.leadershipNext,
        linkedinLabel: copy2.footer.linkedinAria,
      }),
      /* @__PURE__ */ jsx(ClientsSection, {
        isAr: lang === 'ar',
        title: t.clientsTitle,
        description: t.clientsDescription,
        buttonLabel: t.clientsButton,
        stories: t.stories,
      }),
      /* @__PURE__ */ jsx(TimelineSection, {
        isAr: lang === 'ar',
        title: t.engagementTitle,
        prevLabel: t.numbersPrev,
        nextLabel: t.numbersNext,
        steps: t.steps,
      }),
      /* @__PURE__ */ jsx(SuccessSection, {
        isAr: lang === 'ar',
        title: t.storiesTitle,
        buttonLabel: t.clientsButton,
        prevLabel: t.numbersPrev,
        nextLabel: t.numbersNext,
        stories: t.stories,
        partner: { title: t.storiesPartnerTitle, text: t.storiesPartnerText },
        product: { title: t.storiesProductTitle, text: t.storiesProductText },
      }),
    ],
  });
};
const getPerPage = (desktop) => {
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
const renderHighlighted$1 = (text) =>
  text
    .split(/\{(.*?)\}/g)
    .map((part, index) =>
      index % 2 === 1
        ? /* @__PURE__ */ jsx(
            'strong',
            { className: 'font-bold text-nacs-accent dark:text-emerald-400', children: part },
            index,
          )
        : part,
    );
const Diamond = () =>
  /* @__PURE__ */ jsxs('svg', {
    viewBox: '0 0 36 44',
    'aria-hidden': 'true',
    className: 'h-9 w-[30px] shrink-0 lg:h-11 lg:w-9',
    children: [
      /* @__PURE__ */ jsx('polygon', {
        points: '18,0 0,22 18,44',
        className: 'fill-[#5aa98c] dark:fill-emerald-500',
      }),
      /* @__PURE__ */ jsx('polygon', {
        points: '18,0 36,22 18,44',
        className: 'fill-[#8ecbb4] dark:fill-emerald-300',
      }),
    ],
  });
const OverviewSection = ({
  isAr,
  title,
  paragraphs,
  numbersTitle,
  prevLabel,
  nextLabel,
  stats,
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
  return /* @__PURE__ */ jsxs('section', {
    className: 'relative overflow-hidden border-b-2 border-nacs-green bg-white',
    children: [
      /* @__PURE__ */ jsx('div', {
        'aria-hidden': 'true',
        className:
          'pointer-events-none absolute end-0 top-0 h-full w-[9.2%] min-w-[44px] bg-[#f3f3f3] dark:bg-white/5 rtl:-scale-x-100',
        style: { clipPath: 'polygon(100% 0, 0 47%, 96% 100%, 100% 100%)' },
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'relative mx-auto max-w-[1440px] px-[6.3%] pb-14 pt-12 lg:pb-24 lg:pt-[72px]',
        children: [
          /* @__PURE__ */ jsx('h2', {
            className:
              'text-3xl font-bold leading-[1.2] text-nacs-greenDeep sm:text-4xl dark:text-white',
            children: title,
          }),
          /* @__PURE__ */ jsx('div', {
            className:
              'mt-[22px] space-y-1.5 text-sm font-normal leading-[1.6] text-[#333] dark:text-slate-200',
            children: paragraphs.map((paragraph) =>
              /* @__PURE__ */ jsx('p', { children: renderHighlighted$1(paragraph) }, paragraph),
            ),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: 'mt-12 flex items-center justify-between gap-4 lg:mt-14',
            children: [
              /* @__PURE__ */ jsx('h3', {
                className:
                  'text-xl font-bold leading-8 text-nacs-greenDeep sm:text-2xl dark:text-white',
                children: numbersTitle,
              }),
              /* @__PURE__ */ jsxs('div', {
                className: 'flex shrink-0 items-center gap-2',
                children: [
                  /* @__PURE__ */ jsx('button', {
                    type: 'button',
                    'aria-label': prevLabel,
                    disabled: isFirst,
                    onClick: () => setIndex(Math.max(0, current - 1)),
                    className: arrowClass,
                    children: /* @__PURE__ */ jsx(PrevIcon, { size: 16 }),
                  }),
                  /* @__PURE__ */ jsx('button', {
                    type: 'button',
                    'aria-label': nextLabel,
                    disabled: isLast,
                    onClick: () => setIndex(Math.min(maxIndex, current + 1)),
                    className: arrowClass,
                    children: /* @__PURE__ */ jsx(NextIcon, { size: 16 }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'mt-10 overflow-hidden lg:mt-14',
            children: /* @__PURE__ */ jsx('div', {
              className: 'flex transition-transform duration-500 ease-out',
              style: { transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)` },
              children: stats.map((stat, statIndex) => {
                const visible = statIndex >= current && statIndex < current + perPage;
                const showDiamond = statIndex >= current && statIndex < current + perPage - 1;
                return /* @__PURE__ */ jsxs(
                  'div',
                  {
                    'aria-hidden': !visible,
                    className: 'relative flex shrink-0 flex-col items-center px-2 text-center',
                    style: { flexBasis: `${100 / perPage}%` },
                    children: [
                      /* @__PURE__ */ jsx('span', {
                        className:
                          'bg-gradient-to-r from-nacs-green to-[#7dd3b5] bg-clip-text text-4xl font-bold leading-none text-transparent sm:text-5xl lg:text-[52px] dark:from-emerald-400 dark:to-emerald-200',
                        children: stat.value,
                      }),
                      /* @__PURE__ */ jsx('span', {
                        className:
                          'mt-2.5 text-sm font-normal text-[#2f8f6c] dark:text-emerald-300',
                        children: stat.label,
                      }),
                      statIndex < stats.length - 1 &&
                        /* @__PURE__ */ jsx('div', {
                          'aria-hidden': 'true',
                          className: `absolute start-full top-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-500 rtl:translate-x-1/2 ${showDiamond ? 'opacity-100' : 'opacity-0'}`,
                          children: /* @__PURE__ */ jsx(Diamond, {}),
                        }),
                    ],
                  },
                  stat.label,
                );
              }),
            }),
          }),
        ],
      }),
    ],
  });
};
const LeaderPhoto = ({ src, alt, className, iconClassName, imageClassName }) => {
  const [errored, setErrored] = useState(false);
  return /* @__PURE__ */ jsx('div', {
    className,
    children: errored
      ? /* @__PURE__ */ jsx(FaUserTie, { 'aria-hidden': 'true', className: iconClassName })
      : /* @__PURE__ */ jsx('img', {
          src,
          alt,
          onError: () => setErrored(true),
          className: imageClassName,
          loading: 'lazy',
        }),
  });
};
const LeadershipSection = ({ isAr, title, leaders, prevLabel, nextLabel, linkedinLabel }) => {
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
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-white',
    children: /* @__PURE__ */ jsxs('div', {
      className:
        'mx-auto max-w-[1440px] px-6 pb-14 pt-14 sm:px-10 lg:px-[13.5%] lg:pb-16 lg:pt-[72px]',
      children: [
        /* @__PURE__ */ jsx('h2', {
          className: 'text-3xl font-bold leading-[1.2] text-nacs-greenDeep dark:text-white',
          children: title,
        }),
        /* @__PURE__ */ jsxs('div', {
          className:
            'mt-6 grid items-stretch gap-6 lg:mt-[30px] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8',
          children: [
            /* @__PURE__ */ jsxs('div', {
              className:
                'flex flex-col justify-between lg:h-[min(24.2vw,348px)] lg:pb-[37px] lg:pt-8',
              children: [
                /* @__PURE__ */ jsxs(
                  'div',
                  {
                    className: 'max-w-[450px] animate-fade-in-up',
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'flex items-center gap-[15px]',
                        children: [
                          /* @__PURE__ */ jsx('h3', {
                            className:
                              'text-2xl font-bold leading-8 text-[#14142b] dark:text-white',
                            children: leader.name,
                          }),
                          /* @__PURE__ */ jsx('a', {
                            href: LEADER_LINKEDIN,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            'aria-label': `${linkedinLabel} - ${leader.name}`,
                            className:
                              'flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[5px] border border-[#e3e5e8] bg-white text-[#4a4f57] transition-colors hover:border-nacs-green hover:text-nacs-green dark:border-[#484846] dark:text-slate-300 dark:hover:text-emerald-400',
                            children: /* @__PURE__ */ jsx(FaLinkedin, { size: 15 }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className:
                          'mt-2 text-[13px] font-normal leading-[18px] text-[#555] dark:text-slate-300',
                        children: leader.role,
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className:
                          'mt-[19px] text-[13px] font-normal leading-5 text-[#333] dark:text-slate-200',
                        children: leader.text,
                      }),
                    ],
                  },
                  leader.name,
                ),
                /* @__PURE__ */ jsxs('div', {
                  className: 'mt-8 flex items-center gap-2.5 lg:mt-0',
                  children: [
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      'aria-label': prevLabel,
                      onClick: goPrev,
                      className: arrowClass,
                      children: /* @__PURE__ */ jsx(PrevIcon, { size: 14 }),
                    }),
                    /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      'aria-label': nextLabel,
                      onClick: goNext,
                      className: arrowClass,
                      children: /* @__PURE__ */ jsx(NextIcon, { size: 14 }),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'order-first mx-auto lg:order-none lg:mx-0',
              children: /* @__PURE__ */ jsxs(
                'div',
                {
                  className:
                    'relative h-[320px] w-[300px] animate-fade-in-up lg:h-[min(24.2vw,348px)] lg:w-[min(23.3vw,335px)]',
                  children: [
                    /* @__PURE__ */ jsx(LeaderPhoto, {
                      src: photo,
                      alt: leader.name,
                      className: 'flex h-full w-full items-end justify-center',
                      iconClassName:
                        'h-[88%] w-[88%] translate-y-[6%] text-[#dbe4df] dark:text-white/10',
                      imageClassName: 'h-full w-full object-contain object-bottom',
                    }),
                    /* @__PURE__ */ jsx('div', {
                      className:
                        'pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#343433] dark:via-[#343433]/70',
                    }),
                  ],
                },
                leader.name,
              ),
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mt-2 flex flex-wrap justify-center gap-4',
          children: leaders.map((item, index) => {
            const selected = index === active;
            return /* @__PURE__ */ jsxs(
              'button',
              {
                type: 'button',
                onClick: () => setActive(index),
                'aria-pressed': selected,
                'aria-label': item.name,
                className:
                  'group flex w-[104px] flex-col items-center text-center lg:w-[min(8.9vw,128px)]',
                children: [
                  /* @__PURE__ */ jsx(LeaderPhoto, {
                    src: getLeaderPhoto(item.name),
                    alt: '',
                    className: `flex aspect-[128/142] w-full items-end justify-center overflow-hidden rounded-[10px] border bg-[#f3f4f6] transition-colors dark:bg-white/5 ${selected ? 'border-nacs-green/70 dark:border-emerald-400/70' : 'border-transparent group-hover:border-nacs-green/30'}`,
                    iconClassName:
                      'h-[68%] w-[68%] translate-y-[8%] text-[#c9d4ce] dark:text-white/15',
                    imageClassName: 'h-full w-full object-cover object-top',
                  }),
                  /* @__PURE__ */ jsx('span', {
                    className: `-mx-2 mt-[7px] block w-[calc(100%+16px)] text-[13px] font-bold leading-4 transition-colors ${selected ? 'text-[#111] dark:text-white' : 'text-[#9a9a9a] group-hover:text-[#555] dark:text-slate-400'}`,
                    children: item.name,
                  }),
                  /* @__PURE__ */ jsx('span', {
                    className: `-mx-2 block w-[calc(100%+16px)] text-[11px] font-normal leading-[14px] ${selected ? 'text-[#777] dark:text-slate-300' : 'text-[#b4b4b4] dark:text-slate-500'}`,
                    children: item.role,
                  }),
                ],
              },
              item.name,
            );
          }),
        }),
      ],
    }),
  });
};
const stepIcons = [FaBullseye, FaDiagramProject, FaScrewdriverWrench, FaRocket];
const TimelineSection = ({ isAr, title, prevLabel, nextLabel, steps }) => {
  const perPage = usePerPage(3);
  const maxIndex = Math.max(0, steps.length - perPage);
  const [index, setIndex] = useState(0);
  const current = Math.min(index, maxIndex);
  const PrevIcon = isAr ? FiChevronRight : FiChevronLeft;
  const NextIcon = isAr ? FiChevronLeft : FiChevronRight;
  const arrowClass =
    'flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent';
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-[#0a3a2d] text-white',
    children: /* @__PURE__ */ jsxs('div', {
      className:
        'mx-auto max-w-[1440px] px-6 pb-16 pt-12 sm:px-10 lg:px-[13.65%] lg:pb-[150px] lg:pt-[52px]',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center justify-between gap-4',
          children: [
            /* @__PURE__ */ jsx('h2', {
              className: 'text-2xl font-black uppercase leading-9 text-white sm:text-3xl',
              children: title,
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'flex shrink-0 items-center gap-2.5',
              children: [
                /* @__PURE__ */ jsx('button', {
                  type: 'button',
                  'aria-label': prevLabel,
                  disabled: current === 0,
                  onClick: () => setIndex(Math.max(0, current - 1)),
                  className: arrowClass,
                  children: /* @__PURE__ */ jsx(PrevIcon, { size: 13 }),
                }),
                /* @__PURE__ */ jsx('button', {
                  type: 'button',
                  'aria-label': nextLabel,
                  disabled: current === maxIndex,
                  onClick: () => setIndex(Math.min(maxIndex, current + 1)),
                  className: arrowClass,
                  children: /* @__PURE__ */ jsx(NextIcon, { size: 13 }),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mt-10 overflow-hidden lg:mt-[60px]',
          children: /* @__PURE__ */ jsx('div', {
            className: 'flex transition-transform duration-500 ease-out',
            style: { transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)` },
            children: steps.map((step, stepIndex) => {
              const Icon = stepIcons[stepIndex] ?? FaBullseye;
              const visible = stepIndex >= current && stepIndex < current + perPage;
              const isFirstStep = stepIndex === 0;
              const isLastStep = stepIndex === steps.length - 1;
              const lineClass =
                isFirstStep && isLastStep
                  ? 'hidden'
                  : isFirstStep
                    ? 'start-1/2 end-0'
                    : isLastStep
                      ? 'start-0 end-1/2'
                      : 'inset-x-0';
              return /* @__PURE__ */ jsxs(
                'div',
                {
                  'aria-hidden': !visible,
                  className: 'shrink-0 px-[11px]',
                  style: { flexBasis: `${100 / perPage}%` },
                  children: [
                    /* @__PURE__ */ jsx('div', {
                      className: 'flex h-16 items-center justify-center',
                      children: /* @__PURE__ */ jsx(Icon, {
                        'aria-hidden': 'true',
                        className: 'text-[52px] text-[#8fe3c0]',
                      }),
                    }),
                    /* @__PURE__ */ jsxs('div', {
                      className: 'relative -mx-[11px] mt-4 h-[22px]',
                      children: [
                        /* @__PURE__ */ jsx('span', {
                          'aria-hidden': 'true',
                          className: `absolute top-1/2 h-px -translate-y-1/2 bg-white/25 ${lineClass}`,
                        }),
                        /* @__PURE__ */ jsxs('svg', {
                          viewBox: '0 0 13 22',
                          'aria-hidden': 'true',
                          className: 'absolute left-1/2 top-0 h-[22px] w-[13px] -translate-x-1/2',
                          children: [
                            /* @__PURE__ */ jsx('polygon', {
                              points: '6.5,0 0,11 6.5,22',
                              className: 'fill-[#28a075]',
                            }),
                            /* @__PURE__ */ jsx('polygon', {
                              points: '6.5,0 13,11 6.5,22',
                              className: 'fill-[#34b88a]',
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'mt-[15px] text-[11px] font-bold leading-4 text-[#8fe3c0]',
                      children: String(stepIndex + 1).padStart(2, '0'),
                    }),
                    /* @__PURE__ */ jsx('h3', {
                      className:
                        'mt-[5px] text-[12.5px] font-extrabold uppercase leading-[18px] text-white',
                      children: step.title,
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'mt-[9px] max-w-[300px] text-[11px] font-normal leading-[18px] text-white/70',
                      children: step.text,
                    }),
                  ],
                },
                step.title,
              );
            }),
          }),
        }),
      ],
    }),
  });
};
const sectorIcons = {
  bank: FaBuildingColumns,
  strategy: FaChartLine,
  telecom: FaTowerBroadcast,
  energy: FaBolt,
};
const MARQUEE_REPEATS = 3;
const ClientsSection = ({ isAr, title, description, buttonLabel, stories }) => {
  const ButtonIcon = isAr ? FiArrowLeft : FiArrowRight;
  const sectorItems = stories.map((story) => ({
    key: story.icon,
    kind: 'sector',
    label: story.sector,
    Icon: sectorIcons[story.icon] ?? FaChartLine,
  }));
  const logoItems = [
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
  ].filter((item) => Boolean(item));
  const renderCard = (item) =>
    /* @__PURE__ */ jsx('li', {
      className:
        'flex h-[103px] w-[190px] shrink-0 items-center justify-center rounded-md border border-white/[0.14] bg-white/[0.03]',
      children:
        item.kind === 'logo'
          ? /* @__PURE__ */ jsx('img', {
              src: item.src,
              alt: item.alt,
              style: { filter: 'invert(1) grayscale(1) brightness(2.5)' },
              className: `h-full w-full object-contain mix-blend-lighten ${item.scaleClass}`,
              loading: 'lazy',
              draggable: false,
            })
          : /* @__PURE__ */ jsxs('span', {
              className: 'flex items-center gap-3 px-5 text-start',
              dir: isAr ? 'rtl' : 'ltr',
              children: [
                /* @__PURE__ */ jsx(item.Icon, {
                  'aria-hidden': 'true',
                  className: 'shrink-0 text-[30px] text-white',
                }),
                /* @__PURE__ */ jsx('span', {
                  className: 'text-[13px] font-semibold leading-[18px] text-white',
                  children: item.label,
                }),
              ],
            }),
    });
  return /* @__PURE__ */ jsxs('section', {
    className: 'relative overflow-hidden bg-[#0a1411] text-white',
    children: [
      /* @__PURE__ */ jsx('div', {
        'aria-hidden': 'true',
        className: 'pointer-events-none absolute inset-0',
        style: {
          background:
            'radial-gradient(62% 72% at 18% 100%, rgba(12,122,84,0.5) 0%, rgba(8,86,61,0.2) 45%, rgba(8,86,61,0) 78%)',
        },
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'relative pb-16 pt-12 lg:pb-[170px]',
        children: [
          /* @__PURE__ */ jsx('div', {
            className: 'mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[15.35%]',
            children: /* @__PURE__ */ jsxs('div', {
              className: 'flex items-start justify-between gap-6',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  children: [
                    /* @__PURE__ */ jsx('h2', {
                      className: 'text-3xl font-bold leading-[1.2] text-white',
                      children: title,
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'mt-8 max-w-[520px] text-[13px] font-normal leading-[18px] text-[#9da8b4]',
                      children: description,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(Link, {
                  to: '/contact',
                  className:
                    'mt-[15px] hidden h-8 shrink-0 items-center gap-2 rounded-xl bg-[#0f8a63] px-[18px] text-[13px] font-bold text-white transition-colors hover:bg-[#12a074] sm:inline-flex',
                  children: [
                    buttonLabel,
                    /* @__PURE__ */ jsx(ButtonIcon, { size: 12, 'aria-hidden': 'true' }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsx('div', {
            dir: 'ltr',
            className: 'mt-10 overflow-hidden lg:mt-[53px]',
            role: 'group',
            'aria-label': title,
            children: /* @__PURE__ */ jsx('div', {
              className:
                'flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none',
              children: [0, 1].map((copy2) =>
                /* @__PURE__ */ jsx(
                  'ul',
                  {
                    'aria-hidden': copy2 === 1,
                    className: 'flex shrink-0 gap-5 pr-5',
                    children: Array.from({ length: MARQUEE_REPEATS }).flatMap((_, repeat) =>
                      items.map((item) =>
                        /* @__PURE__ */ jsx(
                          Fragment$1,
                          { children: renderCard(item) },
                          `${copy2}-${repeat}-${item.key}`,
                        ),
                      ),
                    ),
                  },
                  copy2,
                ),
              ),
            }),
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'mx-auto mt-10 max-w-[1440px] px-6 sm:hidden',
            children: /* @__PURE__ */ jsxs(Link, {
              to: '/contact',
              className:
                'inline-flex h-9 items-center gap-2 rounded-full bg-[#0f8a63] px-5 text-[13px] font-bold text-white',
              children: [
                buttonLabel,
                /* @__PURE__ */ jsx(ButtonIcon, { size: 12, 'aria-hidden': 'true' }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
const SuccessSection = ({
  isAr,
  title,
  buttonLabel,
  prevLabel,
  nextLabel,
  stories,
  partner,
  product,
}) => {
  const perPage = usePerPage(4);
  const storyCard = (story) => ({
    key: story.icon,
    kind: 'icon',
    Icon: sectorIcons[story.icon] ?? FaChartLine,
    title: story.sector,
    text: story.result,
  });
  const partnerCard = {
    key: 'databricks',
    kind: 'logo',
    src: DATABRICKS_LOGO,
    alt: 'Databricks',
    scaleClass: 'scale-100',
    ...partner,
  };
  const productCard = {
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
  ].filter((card) => Boolean(card));
  const maxIndex = Math.max(0, cards.length - perPage);
  const [index, setIndex] = useState(0);
  const current = Math.min(index, maxIndex);
  const ButtonIcon = isAr ? FiArrowLeft : FiArrowRight;
  const PrevIcon = isAr ? FiChevronRight : FiChevronLeft;
  const NextIcon = isAr ? FiChevronLeft : FiChevronRight;
  const arrowClass =
    'absolute top-1/2 z-10 flex h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-[#2f8f6c] bg-nacs-green text-white shadow-md transition-colors hover:bg-nacs-greenDark disabled:cursor-default disabled:opacity-40 disabled:hover:bg-nacs-green';
  return /* @__PURE__ */ jsxs('section', {
    className: 'relative overflow-hidden bg-[#f1f4f3] dark:bg-[#2b2b2a]',
    children: [
      /* @__PURE__ */ jsx('div', {
        'aria-hidden': 'true',
        className: 'pointer-events-none absolute inset-0',
        style: {
          background:
            'radial-gradient(60% 70% at 18% 100%, rgba(8,86,61,0.1) 0%, rgba(8,86,61,0) 70%)',
        },
      }),
      /* @__PURE__ */ jsxs('div', {
        className:
          'relative mx-auto max-w-[1440px] px-6 pb-16 pt-12 sm:px-10 lg:px-[13.5%] lg:pb-24 lg:pt-[50px]',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'flex items-center justify-between gap-4',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className: 'text-2xl font-bold leading-8 text-nacs-greenDeep dark:text-white',
                children: title,
              }),
              /* @__PURE__ */ jsxs(Link, {
                to: '/contact',
                className:
                  'hidden h-[33px] shrink-0 items-center gap-2 rounded-xl bg-nacs-green px-[18px] text-[13px] font-bold text-white transition-colors hover:bg-nacs-greenDark sm:inline-flex',
                children: [
                  buttonLabel,
                  /* @__PURE__ */ jsx(ButtonIcon, { size: 12, 'aria-hidden': 'true' }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('div', {
            className: 'relative mt-8 lg:mt-[42px]',
            children: [
              /* @__PURE__ */ jsx('button', {
                type: 'button',
                'aria-label': prevLabel,
                disabled: current === 0,
                onClick: () => setIndex(Math.max(0, current - 1)),
                className: `${arrowClass} start-0`,
                children: /* @__PURE__ */ jsx(PrevIcon, { size: 16 }),
              }),
              /* @__PURE__ */ jsx('button', {
                type: 'button',
                'aria-label': nextLabel,
                disabled: current === maxIndex,
                onClick: () => setIndex(Math.min(maxIndex, current + 1)),
                className: `${arrowClass} end-0`,
                children: /* @__PURE__ */ jsx(NextIcon, { size: 16 }),
              }),
              /* @__PURE__ */ jsx('div', {
                className: '-my-6 mx-[22px] overflow-hidden py-6',
                children: /* @__PURE__ */ jsx('div', {
                  className: 'flex transition-transform duration-500 ease-out',
                  style: {
                    transform: `translateX(${(isAr ? 1 : -1) * current * (100 / perPage)}%)`,
                  },
                  children: cards.map((card, cardIndex) =>
                    /* @__PURE__ */ jsx(
                      'div',
                      {
                        'aria-hidden': cardIndex < current || cardIndex >= current + perPage,
                        className: 'shrink-0 px-2.5',
                        style: { flexBasis: `${100 / perPage}%` },
                        children: /* @__PURE__ */ jsxs('article', {
                          className:
                            'flex h-full min-h-[253px] flex-col items-center overflow-hidden rounded-[17px] border border-[#dde5e1] bg-white px-3 pb-6 pt-7 text-center shadow-[0_6px_24px_rgba(8,86,61,0.07)] dark:border-[#484846]',
                          children: [
                            /* @__PURE__ */ jsx('div', {
                              className:
                                'flex h-[100px] w-full max-w-[175px] items-center justify-center',
                              children:
                                card.kind === 'logo'
                                  ? /* @__PURE__ */ jsx('img', {
                                      src: card.src,
                                      alt: card.alt,
                                      className: `max-h-full w-full object-contain mix-blend-multiply ${card.scaleClass}`,
                                      loading: 'lazy',
                                      draggable: false,
                                    })
                                  : /* @__PURE__ */ jsx(card.Icon, {
                                      'aria-hidden': 'true',
                                      className: 'text-[64px] text-nacs-green',
                                    }),
                            }),
                            /* @__PURE__ */ jsx('h3', {
                              className:
                                'mt-9 text-sm font-bold leading-5 text-[#14231d] dark:text-white',
                              children: card.title,
                            }),
                            /* @__PURE__ */ jsx('p', {
                              className:
                                'mx-auto mt-2.5 max-w-[175px] text-[11px] font-normal leading-[17px] text-[#5b6b64] dark:text-slate-300',
                              children: card.text,
                            }),
                          ],
                        }),
                      },
                      card.key,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
const SPECIALTY_COFFEE_JEDDAH_SLUG = 'best-area-specialty-coffee-jeddah';
const HERO_IMAGE$1 = '/images/northernacs/best-area-specialty-coffee-jeddah.jpg';
const copy = {
  en: {
    lead: 'Discover the best areas to open a specialty coffee shop in Jeddah. Explore data-driven insights on Al Rawdah, Al Shati, Al Zahra, and Obhur for F&B success.',
    quickTitle: 'Quick Answer',
    before: 'Based on the available evidence, ',
    strong: 'Al Rawdah, Al Shati, Al Zahra, and Obhur',
    after:
      " are among the strongest neighborhoods to investigate for a specialty coffee shop in Jeddah. Al Rawdah stands out for its established specialty coffee culture and high purchasing power, particularly along commercial corridors like Abdul Maqsoud Khoja Street. Al Shati offers premium destination-driven footfall near the Corniche and luxury lifestyle centers. Al Zahra provides a balanced mix of commercial daytime traffic and residential density, while Obhur represents the best long-term growth opportunity due to Jeddah's rapid northward expansion and tourism developments.",
    closing:
      'The optimal choice depends entirely on whether your business model requires high-volume neighborhood convenience, a premium lifestyle destination, or an emerging growth market.',
  },
  ar: {
    lead: 'اكتشف أفضل المناطق لافتتاح مقهى قهوة مختصة في جدة. استكشف رؤى مبنية على البيانات حول الروضة والشاطئ والزهراء وأبحر لنجاح قطاع الأغذية والمشروبات.',
    quickTitle: 'إجابة سريعة',
    before: 'استناداً إلى الأدلة المتاحة، تُعد ',
    strong: 'الروضة والشاطئ والزهراء وأبحر',
    after:
      ' من أقوى الأحياء التي تستحق الدراسة لافتتاح مقهى قهوة مختصة في جدة. تتميز الروضة بثقافة قهوة مختصة راسخة وقوة شرائية عالية، خصوصاً على المحاور التجارية مثل شارع عبد المقصود خوجة. ويوفر الشاطئ إقبالاً متميزاً مرتبطاً بالوجهة قرب الكورنيش ومراكز نمط الحياة الفاخرة. وتقدم الزهراء مزيجاً متوازناً من الحركة التجارية خلال النهار والكثافة السكنية، بينما تمثل أبحر أفضل فرصة للنمو على المدى الطويل بفضل توسع جدة السريع شمالاً والتطورات السياحية.',
    closing:
      'يعتمد الاختيار الأمثل كلياً على ما إذا كان نموذج عملك يحتاج إلى إقبال عالٍ وراحة الحي، أو وجهة لنمط حياة فاخر، أو سوق نمو ناشئ.',
  },
};
const pointOrder = ['customer', 'specialty', 'commercial', 'access', 'growth', 'suited'];
const areaLabels = {
  en: {
    title: 'Top Areas for Specialty Coffee in Jeddah',
    intro:
      'Several neighborhoods emerge as strong candidates, but publicly available district-level data is insufficient to establish a definitive, numbered ranking. However, based on location-intelligence indicators—such as purchasing power, commercial clustering, and existing specialty F&B activity—these four districts consistently present the strongest fundamentals.',
    standout: 'Why it stands out:',
    customer: 'Customer profile:',
    specialty: 'Specialty coffee environment:',
    commercial: 'Commercial environment:',
    access: 'Accessibility:',
    growth: 'Growth:',
    suited: 'Best suited for:',
  },
  ar: {
    title: 'أفضل المناطق للقهوة المختصة في جدة',
    intro:
      'تبرز عدة أحياء كخيارات قوية، غير أن البيانات المتاحة علناً على مستوى الحي لا تكفي لوضع ترتيب نهائي مرقم. ومع ذلك، واستناداً إلى مؤشرات الذكاء المكاني، مثل القوة الشرائية والتجمع التجاري ونشاط الأغذية والمشروبات المختصة القائم، تُظهر هذه الأحياء الأربعة باستمرار أقوى المقومات.',
    standout: 'لماذا يتميز:',
    customer: 'ملف العملاء:',
    specialty: 'بيئة القهوة المختصة:',
    commercial: 'البيئة التجارية:',
    access: 'سهولة الوصول:',
    growth: 'النمو:',
    suited: 'الأنسب لـ:',
  },
};
const areas = {
  en: [
    {
      name: 'Al Rawdah',
      standout:
        "Al Rawdah is historically the epicenter of Jeddah's modern specialty coffee movement. The district is characterized by strong purchasing power, mature commercial corridors, and a densely populated, affluent residential base.",
      points: {
        customer:
          'Affluent locals, business professionals, and specialty coffee enthusiasts who prioritize cup quality and brand prestige.',
        specialty:
          "Highly competitive but highly validated. Corridors like Abdul Maqsoud Khoja Street feature dense clusters of independent roasters and premium cafés, proving the area's high demand for third-wave coffee.",
        commercial:
          'A strong mix of high-end retail, corporate offices, and premium dining, ensuring both morning commuter traffic and evening lifestyle visits.',
        access:
          'Centrally located with excellent connectivity to major arteries like Madinah Road and Prince Saud Al Faisal Street.',
        growth:
          'While mature, the district continually refreshes its retail stock, maintaining its status as a top-tier neighborhood.',
        suited:
          'Premium neighborhood specialty cafés and flagship roastery concepts targeting established coffee connoisseurs.',
      },
    },
    {
      name: 'Al Shati',
      standout:
        "Bordering the Red Sea, Al Shati is Jeddah's premier lifestyle and tourism district. Real estate reports frequently highlight coastal and entertainment-focused districts as commanding premium retail performance, attracting significant leisure footfall.",
      points: {
        customer:
          'High-net-worth individuals, tourists, weekend visitors, and younger demographics seeking aesthetic, experiential venues.',
        specialty:
          'Dominated by high-end, destination-style cafés where the architectural design and sea views are as important as the coffee profile.',
        commercial:
          'Proximity to the Jeddah Corniche, luxury hotels, and premium open-air lifestyle centers creates massive evening and weekend demand.',
        access:
          'Primarily accessed via King Abdulaziz Road and the Corniche Road; highly visible but can face peak-hour leisure traffic.',
        growth:
          'Driven by ongoing coastal and tourism developments aligned with Vision 2030 initiatives.',
        suited:
          'Premium destination cafés, experiential lifestyle concepts, and high-margin specialty brands.',
      },
    },
    {
      name: 'Al Zahra',
      standout:
        'Al Zahra strikes a highly profitable balance between residential density and heavy commercial activity, making it one of the most operationally consistent neighborhoods in the city.',
      points: {
        customer:
          'Mid-to-high-income residents, healthcare professionals, and office workers seeking daily convenience and quality.',
        specialty:
          'Strong presence of both drive-thru concepts and sit-down neighborhood cafés. Batterjee Street acts as a major F&B artery.',
        commercial:
          'Anchored by major hospitals, prominent office buildings, and significant retail centers, generating strong daytime demand often lacking in purely residential areas.',
        access:
          'Bounded by King Abdulaziz Road and Prince Sultan Road, offering excellent vehicular access and visibility.',
        growth: 'Steady, with continued infill development of community commercial plazas.',
        suited:
          'High-volume concepts, drive-thru specialty coffee, and mixed residential/commercial cafés capturing morning and afternoon trade.',
      },
    },
    {
      name: 'Obhur (North and South)',
      standout:
        'As Jeddah expands physically and economically northward, Obhur has transformed from a weekend retreat into a permanent, high-growth residential and tourism hub.',
      points: {
        customer:
          'New homeowners, young families, and domestic tourists drawn to waterfront developments.',
        specialty:
          'Less saturated than central Jeddah, offering significant early-mover advantages for quality-driven brands.',
        commercial:
          'Evolving rapidly with new community retail centers, beach clubs, and waterfront promenades.',
        access:
          'Benefiting from major infrastructure upgrades, though sprawling layouts require a reliance on vehicular traffic.',
        growth:
          "Exceptional. It is the primary corridor for Jeddah's future expansion and mega-projects.",
        suited:
          'Long-term growth concepts, large-format roasteries, and destination community cafés.',
      },
    },
  ],
  ar: [
    {
      name: 'الروضة',
      standout:
        'تُعد الروضة تاريخياً مركز حركة القهوة المختصة الحديثة في جدة. يتميز الحي بقوة شرائية عالية ومحاور تجارية ناضجة وقاعدة سكنية كثيفة وميسورة.',
      points: {
        customer:
          'سكان محليون ميسورون، ومهنيون في قطاع الأعمال، وعشاق القهوة المختصة الذين يقدّمون جودة الفنجان ومكانة العلامة.',
        specialty:
          'منافسة عالية لكنها مثبتة. تضم محاور مثل شارع عبد المقصود خوجة تجمعات كثيفة من المحامص المستقلة والمقاهي الفاخرة، ما يثبت ارتفاع الطلب في المنطقة على قهوة الموجة الثالثة.',
        commercial:
          'مزيج قوي من التجزئة الراقية والمكاتب والشركات والمطاعم الفاخرة، ما يضمن حركة صباحية للموظفين وزيارات مسائية لنمط الحياة.',
        access: 'موقع مركزي مع ربط ممتاز بشرايين رئيسية مثل طريق المدينة وطريق الأمير سعود الفيصل.',
        growth: 'رغم نضج الحي، يجدد مخزونه التجاري باستمرار ويحافظ على مكانته كحي من الفئة الأولى.',
        suited:
          'مقاهي الحي الفاخرة المختصة ومفاهيم المحامص الرائدة التي تستهدف خبراء القهوة الراسخين.',
      },
    },
    {
      name: 'الشاطئ',
      standout:
        'يطل الشاطئ على البحر الأحمر، وهو الحي الأول في جدة لنمط الحياة والسياحة. كثيراً ما تشير تقارير العقار إلى أن الأحياء الساحلية والترفيهية تحقق أداء تجزئة متميزاً وتجذب إقبالاً ترفيهياً كبيراً.',
      points: {
        customer:
          'أصحاب الثروات، والسياح، وزوار نهاية الأسبوع، والفئات الأصغر سناً الذين يبحثون عن وجهات جمالية وتجريبية.',
        specialty:
          'تطغى عليها المقاهي الراقية المصممة كوجهة، حيث يوازي التصميم المعماري وإطلالة البحر أهمية طابع القهوة.',
        commercial:
          'القرب من كورنيش جدة والفنادق الفاخرة ومراكز نمط الحياة المفتوحة يخلق طلباً كبيراً في المساء ونهاية الأسبوع.',
        access:
          'يُعتمد الوصول أساساً عبر طريق الملك عبدالعزيز وطريق الكورنيش. الحي ظاهر بوضوح، لكنه قد يواجه ازدحاماً في ساعات الذروة الترفيهية.',
        growth: 'مدفوع بالتطورات الساحلية والسياحية المستمرة المتماشية مع مبادرات رؤية 2030.',
        suited:
          'مقاهي الوجهة الفاخرة ومفاهيم نمط الحياة التجريبية والعلامات المختصة ذات الهامش المرتفع.',
      },
    },
    {
      name: 'الزهراء',
      standout:
        'تحقق الزهراء توازناً مربحاً بين الكثافة السكنية والنشاط التجاري الكثيف، ما يجعلها من أكثر الأحياء ثباتاً تشغيلياً في المدينة.',
      points: {
        customer:
          'سكان من ذوي الدخل المتوسط إلى المرتفع، ومهنيو الرعاية الصحية، وموظفو المكاتب الذين يبحثون عن الراحة اليومية والجودة.',
        specialty:
          'حضور قوي لمفاهيم الطلب من السيارة ومقاهي الحي للجلوس. يُعد شارع البترجي شرياناً رئيسياً للأغذية والمشروبات.',
        commercial:
          'ترتكز على مستشفيات كبرى ومبانٍ مكتبية بارزة ومراكز تجزئة مهمة، ما يولّد طلباً نهارياً قوياً غالباً ما يغيب عن الأحياء السكنية البحتة.',
        access: 'يحدها طريق الملك عبدالعزيز وطريق الأمير سلطان، مع وصول ووضوح ممتازين للمركبات.',
        growth: 'مستقر، مع استمرار تطوير ساحات تجارية مجتمعية داخل الحي.',
        suited:
          'المفاهيم عالية الإقبال وقهوة الطلب من السيارة المختصة والمقاهي المختلطة بين السكني والتجاري التي تلتقط حركة الصباح وبعد الظهر.',
      },
    },
    {
      name: 'أبحر (الشمال والجنوب)',
      standout:
        'مع توسع جدة شمالاً عمرانياً واقتصادياً، تحولت أبحر من ملاذ لنهاية الأسبوع إلى مركز سكني وسياحي دائم عالي النمو.',
      points: {
        customer: 'ملاك منازل جدد وأسر شابة وسياح محليون ينجذبون إلى مشاريع الواجهة البحرية.',
        specialty:
          'أقل تشبعاً من وسط جدة، ما يمنح العلامات المهتمة بالجودة أفضلية واضحة للداخلين مبكراً.',
        commercial: 'تتطور بسرعة مع مراكز تجزئة مجتمعية جديدة ونوادٍ شاطئية وممشى الواجهة البحرية.',
        access:
          'تستفيد من تحديثات كبيرة في البنية التحتية، غير أن الامتداد العمراني الواسع يجعل الاعتماد على حركة المركبات ضرورياً.',
        growth: 'استثنائي. إنها الممر الرئيسي لتوسع جدة المستقبلي والمشاريع الكبرى.',
        suited: 'مفاهيم النمو طويل الأمد والمحامص كبيرة المساحة ومقاهي المجتمع التي تُعامل كوجهة.',
      },
    },
  ],
};
const comparisonLabels = {
  en: {
    title: 'Comparing the Top Neighborhoods',
    columns: [
      'Area',
      'Demand',
      'Competition',
      'Purchasing Power',
      'Accessibility',
      'Commercial Activity',
      'Best Fit',
    ],
  },
  ar: {
    title: 'مقارنة أفضل الأحياء',
    columns: [
      'الحي',
      'الطلب',
      'المنافسة',
      'القوة الشرائية',
      'سهولة الوصول',
      'النشاط التجاري',
      'الأنسب',
    ],
  },
};
const comparisonRows = {
  en: [
    {
      area: 'Al Rawdah',
      demand: 'Very High',
      competition: 'Very High',
      purchasing: 'High',
      accessibility: 'Central / Convenient',
      commercial: 'Premium Retail & Office',
      fit: 'Flagship / Purist Café',
    },
    {
      area: 'Al Shati',
      demand: 'High (Leisure)',
      competition: 'High',
      purchasing: 'Very High',
      accessibility: 'Destination / Leisure Traffic',
      commercial: 'Tourism & Luxury Lifestyle',
      fit: 'Premium Destination',
    },
    {
      area: 'Al Zahra',
      demand: 'High (Daily)',
      competition: 'Moderate to High',
      purchasing: 'Mid-to-High',
      accessibility: 'High Traffic / High Visibility',
      commercial: 'Healthcare, Offices, Retail',
      fit: 'High-Volume / Daily Café',
    },
    {
      area: 'Obhur',
      demand: 'Growing',
      competition: 'Low to Moderate',
      purchasing: 'Mid-to-High',
      accessibility: 'Expanding Infrastructure',
      commercial: 'Emerging Retail & Tourism',
      fit: 'Long-Term / Community Café',
    },
  ],
  ar: [
    {
      area: 'الروضة',
      demand: 'مرتفع جداً',
      competition: 'مرتفعة جداً',
      purchasing: 'مرتفعة',
      accessibility: 'مركزي / مريح',
      commercial: 'تجزئة فاخرة ومكاتب',
      fit: 'مقهى رائد / لعشاق القهوة',
    },
    {
      area: 'الشاطئ',
      demand: 'مرتفع (ترفيهي)',
      competition: 'مرتفعة',
      purchasing: 'مرتفعة جداً',
      accessibility: 'وجهة / حركة ترفيهية',
      commercial: 'سياحة ونمط حياة فاخر',
      fit: 'وجهة فاخرة',
    },
    {
      area: 'الزهراء',
      demand: 'مرتفع (يومي)',
      competition: 'متوسطة إلى مرتفعة',
      purchasing: 'متوسطة إلى مرتفعة',
      accessibility: 'حركة عالية / وضوح عالٍ',
      commercial: 'رعاية صحية ومكاتب وتجزئة',
      fit: 'إقبال عالٍ / مقهى يومي',
    },
    {
      area: 'أبحر',
      demand: 'متنامٍ',
      competition: 'منخفضة إلى متوسطة',
      purchasing: 'متوسطة إلى مرتفعة',
      accessibility: 'بنية تحتية تتوسع',
      commercial: 'تجزئة وسياحة ناشئة',
      fit: 'طويل الأمد / مقهى مجتمعي',
    },
  ],
};
const closingSections = {
  en: [
    {
      title: 'Why One Jeddah Neighborhood Can Be Better Than Another',
      blocks: [
        {
          type: 'p',
          parts: [
            {
              text: 'When searching for the best area to open a specialty coffee shop in Jeddah, ',
            },
            { text: '"best"', bold: true },
            {
              text: ' is entirely relative to your specific business model. Different specialty coffee concepts require vastly different environments to succeed.',
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              label: 'Premium Destination Concepts:',
              text: 'If your brand relies on high aesthetics, signature drinks, and evening socializing, you require an environment with affluent customer profiles, high lifestyle activity, and premium F&B clustering. Areas like Al Shati thrive on this tourism and leisure-driven activity.',
            },
            {
              label: 'Neighborhood & Purist Concepts:',
              text: 'If your focus is on single-origin pour-overs, freshly roasted beans, and morning routines, you need recurring residential demand and strong daytime commercial activity. A neighborhood like Al Rawdah or Al Zahra offers the nearby households and convenient accessibility needed to build daily loyalty, despite higher competitive pressure.',
            },
            {
              label: 'Growth-Oriented Concepts:',
              text: 'If you are building a large-scale roastery or looking to capture a market before rents peak, you should value expanding residential areas and future commercial activity. Obhur provides a landscape where a new brand can become the community standard before saturation occurs.',
            },
          ],
        },
      ],
    },
    {
      title: 'Choosing the Neighborhood Is Only the First Step',
      blocks: [
        {
          type: 'p',
          parts: [
            {
              text: 'Identifying the best district is crucial, but the best neighborhood does not necessarily contain the best individual property. A great coffee shop in a poorly positioned plaza will struggle against an average coffee shop on a prime corner.',
            },
          ],
        },
        {
          type: 'p',
          parts: [{ text: 'Evaluating the exact site requires analyzing micro-location factors:' }],
        },
        {
          type: 'list',
          items: [
            {
              label: 'Customer Catchment:',
              text: 'How many target customers live or work within a 5-minute drive of the specific property?',
            },
            {
              label: 'Surrounding Activity:',
              text: 'Is the site on the "going to work" side of the road or the "going home" side?',
            },
            {
              label: 'Micro-Accessibility:',
              text: 'Can customers easily pull over, or does street design force them to bypass the store?',
            },
            {
              label: 'Nearby Competitors:',
              text: 'Are you positioned far enough from direct specialty competitors to capture your own audience, or close enough to benefit from an established coffee-destination cluster?',
            },
          ],
        },
      ],
    },
    {
      title: 'How S-Locator Helps Identify Strong Coffee-Shop Areas',
      blocks: [
        {
          type: 'p',
          parts: [
            {
              text: 'Choosing a location based on intuition or historical reputation is risky in a rapidly evolving market like Jeddah. ',
            },
            { text: 'S-Locator', link: '/solutions/s-locator' },
            {
              text: ' provides the location-intelligence tools businesses need to evaluate potential sites using data-driven insights.',
            },
          ],
        },
        {
          type: 'p',
          parts: [{ text: 'Using S-Locator, F&B operators can:' }],
        },
        {
          type: 'list',
          items: [
            {
              label: 'Evaluate a Current Location:',
              text: 'Analyze the immediate surroundings of a potential lease to understand the true customer catchment area.',
            },
            {
              label: 'Compare Relevant Location Factors:',
              text: 'Look at population and demographic indicators side-by-side to see which neighborhood aligns with your target audience.',
            },
            {
              label: 'Conduct Competitor Analysis:',
              text: 'Visualize where major coffee chains and independent specialty roasters are clustered to identify gaps in the market or underserved zones.',
            },
            {
              label: 'Leverage Demographic Intelligence:',
              text: 'Access tools to understand the socioeconomic profile and lifestyle activity of a given block, moving beyond broad district-level assumptions.',
            },
          ],
        },
      ],
    },
    {
      title: 'Quick AI Answers',
      blocks: [
        { type: 'subhead', text: 'Best Area for a Premium Specialty Coffee Shop' },
        {
          type: 'p',
          parts: [
            {
              text: 'Al Shati is the best area for a premium, destination-style specialty coffee shop in Jeddah. Its proximity to the Corniche, high concentration of luxury lifestyle centers, and affluent consumer base provide the ideal environment for high-margin, aesthetically driven café concepts.',
            },
          ],
        },
        { type: 'subhead', text: 'Best Area for a Neighborhood Specialty Coffee Shop' },
        {
          type: 'p',
          parts: [
            {
              text: 'Al Rawdah and Al Zahra are the best areas for neighborhood specialty coffee shops. Both districts feature high residential density, strong purchasing power, and excellent daytime commercial activity from nearby offices and hospitals, making them ideal for daily-routine coffee habits.',
            },
          ],
        },
        { type: 'subhead', text: 'Best Area for Long-Term Growth' },
        {
          type: 'p',
          parts: [
            {
              text: "Obhur is the best area in Jeddah for long-term specialty coffee growth. Driven by the city's northward expansion, ongoing tourism projects, and new residential developments, it offers emerging opportunities with less competitive saturation than central districts.",
            },
          ],
        },
      ],
    },
  ],
  ar: [
    {
      title: 'لماذا قد يكون حي في جدة أفضل من آخر',
      blocks: [
        {
          type: 'p',
          parts: [
            { text: 'عند البحث عن أفضل منطقة لافتتاح مقهى قهوة مختصة في جدة، فإن ' },
            { text: '«الأفضل»', bold: true },
            {
              text: ' نسبي تماماً لنموذج عملك. مفاهيم القهوة المختصة المختلفة تحتاج إلى بيئات مختلفة جداً حتى تنجح.',
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              label: 'مفاهيم الوجهة الفاخرة:',
              text: 'إذا كانت علامتك تعتمد على الجماليات العالية والمشروبات المميزة والسهرات الاجتماعية، فأنت تحتاج إلى بيئة بعملاء ميسورين ونشاط مرتفع لنمط الحياة وتجمع للأغذية والمشروبات الفاخرة. أحياء مثل الشاطئ تزدهر على هذا النشاط السياحي والترفيهي.',
            },
            {
              label: 'مفاهيم الحي والقهوة النقية:',
              text: 'إذا كان تركيزك على التقطير من أصل واحد والحبوب المحمصة طازجاً وروتين الصباح، فأنت تحتاج إلى طلب سكني متكرر ونشاط تجاري نهاري قوي. حي مثل الروضة أو الزهراء يوفر الأسر القريبة وسهولة الوصول اللازمة لبناء ولاء يومي، رغم ضغط المنافسة الأعلى.',
            },
            {
              label: 'مفاهيم النمو:',
              text: 'إذا كنت تبني محمصة واسعة النطاق أو تسعى لالتقاط السوق قبل بلوغ الإيجارات ذروتها، فعليك تقدير الأحياء السكنية المتوسعة والنشاط التجاري المستقبلي. توفر أبحر مشهداً يمكن فيه لعلامة جديدة أن تصبح معيار الحي قبل حدوث التشبع.',
            },
          ],
        },
      ],
    },
    {
      title: 'اختيار الحي ليس إلا الخطوة الأولى',
      blocks: [
        {
          type: 'p',
          parts: [
            {
              text: 'تحديد أفضل حي أمر حاسم، لكن أفضل حي لا يحتوي بالضرورة على أفضل عقار بعينه. مقهى ممتاز في ساحة ذات موقع ضعيف سيتعثر أمام مقهى متوسط على زاوية مميزة.',
            },
          ],
        },
        {
          type: 'p',
          parts: [{ text: 'تقييم الموقع الدقيق يتطلب تحليل عوامل الموقع المصغر:' }],
        },
        {
          type: 'list',
          items: [
            {
              label: 'نطاق العملاء:',
              text: 'كم عدد العملاء المستهدفين الذين يعيشون أو يعملون ضمن 5 دقائق بالسيارة من العقار؟',
            },
            {
              label: 'النشاط المحيط:',
              text: 'هل الموقع على جهة «الذهاب إلى العمل» من الطريق أم جهة «العودة إلى المنزل»؟',
            },
            {
              label: 'سهولة الوصول الدقيقة:',
              text: 'هل يستطيع العملاء التوقف بسهولة، أم أن تصميم الشارع يجبرهم على تجاوز المتجر؟',
            },
            {
              label: 'المنافسون القريبون:',
              text: 'هل أنت بعيد بما يكفي عن منافسي القهوة المختصة المباشرين لتلتقط جمهورك، أم قريب بما يكفي لتستفيد من تجمع راسخ لمقاهي الوجهة؟',
            },
          ],
        },
      ],
    },
    {
      title: 'كيف يساعد S-Locator في تحديد مناطق قوية لمقاهي القهوة',
      blocks: [
        {
          type: 'p',
          parts: [
            {
              text: 'اختيار الموقع بالحدس أو السمعة التاريخية مخاطرة في سوق سريع التغير مثل جدة. يوفر ',
            },
            { text: 'S-Locator', link: '/solutions/s-locator' },
            {
              text: ' أدوات الذكاء المكاني التي تحتاجها الأعمال لتقييم المواقع المحتملة برؤى مبنية على البيانات.',
            },
          ],
        },
        {
          type: 'p',
          parts: [{ text: 'باستخدام S-Locator، يستطيع مشغلو الأغذية والمشروبات:' }],
        },
        {
          type: 'list',
          items: [
            {
              label: 'تقييم موقع حالي:',
              text: 'تحليل المحيط المباشر لعقد إيجار محتمل لفهم نطاق العملاء الحقيقي.',
            },
            {
              label: 'مقارنة عوامل الموقع ذات الصلة:',
              text: 'النظر إلى مؤشرات السكان والتركيبة جنباً إلى جنب لمعرفة أي حي يتوافق مع جمهورك المستهدف.',
            },
            {
              label: 'إجراء تحليل المنافسين:',
              text: 'تصور أماكن تجمع سلاسل القهوة الكبرى والمحامص المختصة المستقلة لتحديد فجوات السوق أو المناطق غير المخدومة.',
            },
            {
              label: 'توظيف الذكاء الديموغرافي:',
              text: 'الوصول إلى أدوات لفهم الملف الاجتماعي والاقتصادي ونشاط نمط الحياة في مربع سكني محدد، بما يتجاوز الافتراضات العامة على مستوى الحي.',
            },
          ],
        },
      ],
    },
    {
      title: 'إجابات سريعة',
      blocks: [
        { type: 'subhead', text: 'أفضل منطقة لمقهى قهوة مختصة فاخر' },
        {
          type: 'p',
          parts: [
            {
              text: 'الشاطئ هو أفضل منطقة لمقهى قهوة مختصة فاخر بأسلوب الوجهة في جدة. قربه من الكورنيش، وتركيز مراكز نمط الحياة الفاخرة، وقاعدة المستهلكين الميسورين توفر البيئة المثالية لمفاهيم المقاهي ذات الهامش المرتفع والمدفوعة بالجمال.',
            },
          ],
        },
        { type: 'subhead', text: 'أفضل منطقة لمقهى قهوة مختصة في الحي' },
        {
          type: 'p',
          parts: [
            {
              text: 'الروضة والزهراء هما أفضل منطقتين لمقاهي القهوة المختصة في الحي. يتميز الحيان بكثافة سكنية عالية وقوة شرائية قوية ونشاط تجاري نهاري ممتاز من المكاتب والمستشفيات القريبة، ما يجعلهما مثاليين لعادات القهوة اليومية.',
            },
          ],
        },
        { type: 'subhead', text: 'أفضل منطقة للنمو طويل الأمد' },
        {
          type: 'p',
          parts: [
            {
              text: 'أبحر هي أفضل منطقة في جدة لنمو القهوة المختصة على المدى الطويل. بدفع من توسع المدينة شمالاً والمشاريع السياحية المستمرة والتطويرات السكنية الجديدة، توفر فرصاً ناشئة بتشبع تنافسي أقل من الأحياء الوسطى.',
            },
          ],
        },
      ],
    },
  ],
};
const KNIGHT_FRANK_REPORT =
  'https://www.knightfrank.com.sa/en/research/reports/saudi-arabia-commercial-market-overview';
const JLL_RETAIL_INSIGHTS = 'https://www.jll.com/en-ae/insights/market-dynamics/ksa-retail';
const sourcesCopy = {
  en: {
    title: 'Sources',
    note: 'Note: Specific district-level commercial activity and competitive concentration are assessed from publicly available retail mapping, real estate market reviews, and verified Saudi F&B market trends.',
    items: [
      {
        label: 'Public Data:',
        detail:
          'Knight Frank — Saudi Arabia Commercial Market Review. Insight into retail and F&B market dynamics, lifestyle developments, and consumer trends in Jeddah.',
        linkLabel: 'View report',
        href: KNIGHT_FRANK_REPORT,
      },
      {
        label: 'Public Data:',
        detail:
          'JLL — KSA Retail Market Dynamics (Q2 2025). Data on Jeddah retail market performance, community center resilience, and local coffee shop operational trends.',
        linkLabel: 'View insights',
        href: JLL_RETAIL_INSIGHTS,
      },
      {
        label: 'Public Data:',
        detail:
          'General Authority for Statistics (GASTAT) — Saudi Census Data. Baseline demographic and population distribution indicators for the Makkah region and Jeddah governorate.',
      },
    ],
  },
  ar: {
    title: 'المصادر',
    note: 'ملاحظة: يُقيَّم النشاط التجاري على مستوى الحي وتركيز المنافسة من خرائط التجزئة المتاحة علناً ومراجعات سوق العقار واتجاهات سوق الأغذية والمشروبات السعودية الموثقة.',
    items: [
      {
        label: 'بيانات عامة:',
        detail:
          'نايت فرانك — مراجعة السوق التجاري في السعودية. رؤية حول ديناميكيات التجزئة والأغذية والمشروبات، وتطورات نمط الحياة، واتجاهات المستهلك في جدة.',
        linkLabel: 'عرض التقرير',
        href: KNIGHT_FRANK_REPORT,
      },
      {
        label: 'بيانات عامة:',
        detail:
          'جيه إل إل — ديناميكيات سوق التجزئة في السعودية (الربع الثاني 2025). بيانات عن أداء سوق التجزئة في جدة ومرونة المراكز المجتمعية واتجاهات تشغيل المقاهي المحلية.',
        linkLabel: 'عرض التحليلات',
        href: JLL_RETAIL_INSIGHTS,
      },
      {
        label: 'بيانات عامة:',
        detail:
          'الهيئة العامة للإحصاء — بيانات التعداد السعودي. مؤشرات أساسية للتركيبة السكانية وتوزيع السكان في منطقة مكة المكرمة ومحافظة جدة.',
      },
    ],
  },
};
const formatDate$1 = (date, lang) =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-ca-gregory' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
const SpecialtyCoffeeJeddahArticle = ({ post }) => {
  var _a, _b, _c;
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const text = copy[lang];
  const labels = areaLabels[lang];
  const categoryLabel =
    ((_a = t.categories.find((item) => item.id === post.category)) == null ? void 0 : _a.label) ??
    (lang === 'ar' ? 'تحليل السوق' : 'Market Analysis');
  const author =
    ((_c = (_b = post.authors) == null ? void 0 : _b[lang]) == null ? void 0 : _c[0]) ??
    (lang === 'ar' ? 'فريق البحث' : 'Research Team');
  const backLabel = lang === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog';
  const byLabel = lang === 'ar' ? 'بقلم' : 'By';
  return /* @__PURE__ */ jsxs('article', {
    className: 'bg-[#fafbfc]',
    children: [
      /* @__PURE__ */ jsxs('header', {
        className:
          'relative isolate flex h-[calc(100dvh-5rem)] items-center overflow-hidden bg-[#140c24]',
        children: [
          /* @__PURE__ */ jsx('img', {
            src: post.image || HERO_IMAGE$1,
            alt: '',
            className: 'absolute inset-0 h-full w-full object-cover object-center',
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'pointer-events-none absolute inset-0 bg-[#11091c]/80',
          }),
          /* @__PURE__ */ jsx('div', {
            className:
              'pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-35% via-[#0b0614]/55 to-[#07030f]',
          }),
          /* @__PURE__ */ jsxs('div', {
            className:
              'relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-start px-4 text-start sm:px-6',
            children: [
              /* @__PURE__ */ jsxs(Link, {
                to: '/blogs',
                className:
                  'inline-flex items-center gap-2 rounded-xl border border-[#0F732E] px-4 py-[7px] text-[14px] font-semibold leading-none text-[#0F732E] transition-colors hover:bg-[#3ad75a]/10',
                children: [
                  /* @__PURE__ */ jsx(FiArrowLeft, {
                    className: 'rtl:rotate-180',
                    size: 15,
                    'aria-hidden': 'true',
                  }),
                  backLabel,
                ],
              }),
              /* @__PURE__ */ jsx('span', {
                className: `mt-3.5 inline-flex rounded-lg bg-[#7E5CAC] px-3.5 py-[6px] text-[11px] font-bold uppercase leading-none text-white ${lang === 'en' ? 'tracking-[0.16em]' : ''}`,
                children: categoryLabel,
              }),
              /* @__PURE__ */ jsx('h1', {
                className:
                  'mt-6 max-w-[740px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[54px]',
                children: post.title[lang],
              }),
              /* @__PURE__ */ jsxs('div', {
                className:
                  'mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-[14px] font-medium text-white',
                children: [
                  /* @__PURE__ */ jsxs('span', {
                    className: 'inline-flex items-center gap-2',
                    children: [
                      /* @__PURE__ */ jsx(FiCalendar, {
                        className: 'text-[#c4b5fd]',
                        size: 15,
                        'aria-hidden': 'true',
                      }),
                      /* @__PURE__ */ jsx('time', {
                        dateTime: post.date,
                        children: formatDate$1(post.date, lang),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx('span', {
                    'aria-hidden': 'true',
                    className: 'text-white/80',
                    children: '·',
                  }),
                  /* @__PURE__ */ jsxs('span', {
                    className: 'inline-flex items-center gap-2',
                    children: [
                      /* @__PURE__ */ jsx(FiUser, {
                        className: 'text-[#c4b5fd]',
                        size: 15,
                        'aria-hidden': 'true',
                      }),
                      /* @__PURE__ */ jsxs('span', { children: [byLabel, ' ', author] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'mx-auto max-w-[820px] px-4 pb-16 pt-8 font-normal sm:px-6 sm:pt-10',
        children: [
          /* @__PURE__ */ jsx('p', {
            className:
              'rounded-2xl border-s-[3px] border-[#0F732E] bg-[#ffffff] px-6 py-5 text-start text-[18px] italic leading-[1.7] text-[#55626e] sm:px-8 sm:py-6 sm:text-[19px]',
            children: text.lead,
          }),
          /* @__PURE__ */ jsx('h2', {
            className:
              'mt-12 text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#140820] sm:text-[32px]',
            children: text.quickTitle,
          }),
          /* @__PURE__ */ jsxs('p', {
            className: 'mt-4 text-start text-[16px] leading-[1.8] text-[#5c6772] sm:text-[17px]',
            children: [
              text.before,
              /* @__PURE__ */ jsx('strong', {
                className: 'font-bold text-[#2b1055]',
                children: text.strong,
              }),
              text.after,
            ],
          }),
          /* @__PURE__ */ jsx('p', {
            className:
              'mt-8 text-start text-[16px] font-bold leading-[1.75] text-[#432c69] sm:text-[17px]',
            children: text.closing,
          }),
          /* @__PURE__ */ jsxs('section', {
            className: 'mt-14',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className:
                  'text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0F732E] sm:text-[32px]',
                children: labels.title,
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'mt-4 text-start text-[16px] leading-[1.8]  sm:text-[17px]',
                children: labels.intro,
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'mt-10 space-y-10',
                children: areas[lang].map((area) =>
                  /* @__PURE__ */ jsxs(
                    'section',
                    {
                      children: [
                        /* @__PURE__ */ jsx('h3', {
                          className:
                            'text-start text-[22px] font-bold leading-tight text-[#7E5CAC]',
                          children: area.name,
                        }),
                        /* @__PURE__ */ jsxs('p', {
                          className: 'mt-3 text-start text-[16px] leading-[1.8]  sm:text-[17px]',
                          children: [
                            /* @__PURE__ */ jsxs('strong', {
                              className: 'font-bold text-[#0F732E]',
                              children: [labels.standout, ' '],
                            }),
                            area.standout,
                          ],
                        }),
                        /* @__PURE__ */ jsx('ul', {
                          className:
                            'mt-4 list-disc space-y-3 ps-5 text-start text-[16px] leading-[1.75]  marker:text-[#7E5CAC] sm:text-[17px]',
                          children: pointOrder.map((key) =>
                            /* @__PURE__ */ jsxs(
                              'li',
                              {
                                children: [
                                  /* @__PURE__ */ jsxs('strong', {
                                    className: 'font-bold text-[#0F732E]',
                                    children: [labels[key], ' '],
                                  }),
                                  area.points[key],
                                ],
                              },
                              key,
                            ),
                          ),
                        }),
                      ],
                    },
                    area.name,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('section', {
            className: 'mt-16',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className:
                  'text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110222] sm:text-[32px]',
                children: comparisonLabels[lang].title,
              }),
              /* @__PURE__ */ jsx('div', {
                className:
                  'mt-6 overflow-x-auto rounded-2xl border border-[#eceef1] bg-white shadow-[0_10px_30px_rgba(17,2,34,0.06)]',
                children: /* @__PURE__ */ jsxs('table', {
                  className:
                    'w-full min-w-[980px] table-fixed border-collapse text-start text-[14px]',
                  children: [
                    /* @__PURE__ */ jsxs('colgroup', {
                      children: [
                        /* @__PURE__ */ jsx('col', { className: 'w-[120px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[120px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[130px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[130px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[160px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[160px]' }),
                        /* @__PURE__ */ jsx('col', { className: 'w-[160px]' }),
                      ],
                    }),
                    /* @__PURE__ */ jsx('thead', {
                      children: /* @__PURE__ */ jsx('tr', {
                        className:
                          'bg-[#110222] text-[11px] font-bold uppercase leading-tight tracking-[0.08em]',
                        children: comparisonLabels[lang].columns.map((column, index) =>
                          /* @__PURE__ */ jsx(
                            'th',
                            {
                              scope: 'col',
                              className: `border-e border-white/10 px-4 py-4 text-start align-middle last:border-e-0 ${index === comparisonLabels[lang].columns.length - 1 ? 'text-[#0F732E]' : 'text-white'}`,
                              children: column,
                            },
                            column,
                          ),
                        ),
                      }),
                    }),
                    /* @__PURE__ */ jsx('tbody', {
                      children: comparisonRows[lang].map((row) =>
                        /* @__PURE__ */ jsxs(
                          'tr',
                          {
                            className: 'border-t border-[#f3f4f6]',
                            children: [
                              /* @__PURE__ */ jsx('th', {
                                scope: 'row',
                                className:
                                  'border-e border-[#f3f4f6] px-4 py-6 text-start align-middle text-[15px] font-bold leading-snug text-[#211331]',
                                children: row.area,
                              }),
                              [
                                row.demand,
                                row.competition,
                                row.purchasing,
                                row.accessibility,
                                row.commercial,
                              ].map((value, index) =>
                                /* @__PURE__ */ jsx(
                                  'td',
                                  {
                                    className:
                                      'border-e border-[#f3f4f6] px-4 py-6 align-middle text-[14px] font-medium leading-snug text-[#7d8694]',
                                    children: value,
                                  },
                                  `${row.area}-${index}`,
                                ),
                              ),
                              /* @__PURE__ */ jsx('td', {
                                className:
                                  'px-4 py-6 align-middle text-[15px] font-extrabold leading-snug text-[#1e102e]',
                                children: row.fit,
                              }),
                            ],
                          },
                          row.area,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          closingSections[lang].map((section) =>
            /* @__PURE__ */ jsxs(
              'section',
              {
                className: 'mt-16',
                children: [
                  /* @__PURE__ */ jsx('h2', {
                    className:
                      'text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110222] sm:text-[32px]',
                    children: section.title,
                  }),
                  section.blocks.map((block, index) => {
                    var _a2;
                    if (block.type === 'subhead') {
                      return /* @__PURE__ */ jsx(
                        'h3',
                        {
                          className: `${index === 0 ? 'mt-5' : 'mt-8'} text-start text-[20px] font-bold leading-snug text-[#0F732E] sm:text-[22px]`,
                          children: block.text,
                        },
                        `${section.title}-sub-${index}`,
                      );
                    }
                    if (block.type === 'list') {
                      return /* @__PURE__ */ jsx(
                        'ul',
                        {
                          className:
                            'mt-4 list-disc space-y-4 ps-5 text-start text-[16px] leading-[1.75] text-[#646C79] marker:text-[#0F732E] sm:text-[17px]',
                          children: block.items.map((item) =>
                            /* @__PURE__ */ jsxs(
                              'li',
                              {
                                children: [
                                  /* @__PURE__ */ jsxs('strong', {
                                    className: 'font-bold text-[#110222]',
                                    children: [item.label, ' '],
                                  }),
                                  item.text,
                                ],
                              },
                              item.label,
                            ),
                          ),
                        },
                        `${section.title}-list-${index}`,
                      );
                    }
                    const tight =
                      ((_a2 = section.blocks[index - 1]) == null ? void 0 : _a2.type) === 'subhead';
                    return /* @__PURE__ */ jsx(
                      'p',
                      {
                        className: `${tight ? 'mt-2' : 'mt-4'} text-start text-[16px] leading-[1.8] text-[#646C79] sm:text-[17px]`,
                        children: block.parts.map((part, partIndex) => {
                          if (part.link) {
                            return /* @__PURE__ */ jsx(
                              Link,
                              {
                                to: part.link,
                                className: 'font-bold text-[#0F732E] hover:underline',
                                children: part.text,
                              },
                              partIndex,
                            );
                          }
                          if (part.bold) {
                            return /* @__PURE__ */ jsx(
                              'strong',
                              { className: 'font-bold text-[#110222]', children: part.text },
                              partIndex,
                            );
                          }
                          return /* @__PURE__ */ jsx('span', { children: part.text }, partIndex);
                        }),
                      },
                      `${section.title}-p-${index}`,
                    );
                  }),
                ],
              },
              section.title,
            ),
          ),
          /* @__PURE__ */ jsxs('section', {
            className: 'mt-16',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className:
                  'text-start text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#110222] sm:text-[32px]',
                children: specialtyCoffeeJeddahFaq[lang].title,
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'mt-6 space-y-8',
                children: specialtyCoffeeJeddahFaq[lang].items.map((item) =>
                  /* @__PURE__ */ jsxs(
                    'div',
                    {
                      children: [
                        /* @__PURE__ */ jsx('h3', {
                          className:
                            'text-start text-[20px] font-bold leading-snug text-[#0F732E] sm:text-[22px]',
                          children: item.question,
                        }),
                        /* @__PURE__ */ jsx('p', {
                          className:
                            'mt-2 text-start text-[16px] leading-[1.8] text-[#646C79] sm:text-[17px]',
                          children: item.answer,
                        }),
                      ],
                    },
                    item.question,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('section', {
            className: 'mt-14 border-t border-[#e6e8ec] pt-10',
            children: [
              /* @__PURE__ */ jsx('h2', {
                className:
                  'text-start text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#110222] sm:text-[32px]',
                children: sourcesCopy[lang].title,
              }),
              /* @__PURE__ */ jsx('ul', {
                className:
                  'mt-5 list-disc space-y-4 ps-5 text-start text-[16px] leading-[1.75] text-[#646C79] marker:text-[#0F732E] sm:text-[17px]',
                children: sourcesCopy[lang].items.map((item) =>
                  /* @__PURE__ */ jsxs(
                    'li',
                    {
                      children: [
                        /* @__PURE__ */ jsxs('strong', {
                          className: 'font-bold text-[#110222]',
                          children: [item.label, ' '],
                        }),
                        item.detail,
                        ' ',
                        item.href && item.linkLabel
                          ? /* @__PURE__ */ jsx('a', {
                              href: item.href,
                              target: '_blank',
                              rel: 'noreferrer',
                              className: 'font-semibold text-[#0F732E] hover:underline',
                              children: item.linkLabel,
                            })
                          : null,
                      ],
                    },
                    item.detail,
                  ),
                ),
              }),
              /* @__PURE__ */ jsx('p', {
                className:
                  'mt-6 text-start text-[13px] italic leading-[1.7] text-[#8b93a0] sm:text-[14px]',
                children: sourcesCopy[lang].note,
              }),
            ],
          }),
          /* @__PURE__ */ jsx('img', {
            src: post.image || HERO_IMAGE$1,
            alt: post.title[lang],
            className: 'mt-8 w-full rounded-2xl',
          }),
        ],
      }),
    ],
  });
};
const BlogDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const t = translations[lang].blogs;
  const post = blogPosts.find((item) => item.slug === slug);
  const seo = useMemo(() => (post ? buildPostSeo(post, lang) : null), [post, lang]);
  useSeo(seo);
  useEffect(() => {
    if (!post) return;
    const target = articlePath(post.slug, lang);
    if (pathname.replace(/\/+$/, '') !== target) navigate(target, { replace: true });
  }, [post, lang, pathname, navigate]);
  const safeHtml = useMemo(() => {
    if (!post) return '';
    return DOMPurify.isSupported ? DOMPurify.sanitize(post.html[lang]) : post.html[lang];
  }, [post, lang]);
  if (!post) {
    return /* @__PURE__ */ jsx('section', {
      className: 'bg-white py-20',
      children: /* @__PURE__ */ jsxs('div', {
        className: 'mx-auto max-w-3xl px-4',
        children: [
          /* @__PURE__ */ jsx('p', {
            className: 'mb-6 text-lg text-nacs-muted',
            children: t.notFound,
          }),
          /* @__PURE__ */ jsx(Link, {
            to: '/blogs',
            className: 'font-bold text-nacs-green',
            children: t.back,
          }),
        ],
      }),
    });
  }
  if (post.slug === SPECIALTY_COFFEE_JEDDAH_SLUG) {
    return /* @__PURE__ */ jsx(SpecialtyCoffeeJeddahArticle, { post });
  }
  return /* @__PURE__ */ jsx('article', {
    className: 'bg-white py-16 md:py-24',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
      children: [
        /* @__PURE__ */ jsx(Link, {
          to: '/blogs',
          className: 'mb-8 inline-block text-sm font-bold text-nacs-green',
          children: t.back,
        }),
        /* @__PURE__ */ jsx('time', {
          className: 'block text-xs font-bold uppercase tracking-[0.2em] text-nacs-green',
          children: post.date,
        }),
        /* @__PURE__ */ jsx('h1', {
          className: 'mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl',
          children: post.title[lang],
        }),
        /* @__PURE__ */ jsx('div', {
          className:
            'prose prose-slate mt-10 max-w-none prose-headings:text-slate-900 prose-a:text-nacs-green',
          dangerouslySetInnerHTML: { __html: safeHtml },
        }),
      ],
    }),
  });
};
const patterns = [
  // dotted halftone panel
  (id) =>
    /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsxs('defs', {
          children: [
            /* @__PURE__ */ jsx('pattern', {
              id,
              width: '3.2',
              height: '3.2',
              patternUnits: 'userSpaceOnUse',
              children: /* @__PURE__ */ jsx('circle', {
                cx: '1.6',
                cy: '1.6',
                r: '0.8',
                fill: '#2dd4bf',
                opacity: '0.6',
              }),
            }),
            /* @__PURE__ */ jsxs('linearGradient', {
              id: `${id}-g`,
              x1: '0',
              x2: '1',
              children: [
                /* @__PURE__ */ jsx('stop', {
                  offset: '0',
                  stopColor: '#0A6F4C',
                  stopOpacity: '0',
                }),
                /* @__PURE__ */ jsx('stop', {
                  offset: '1',
                  stopColor: '#0A6F4C',
                  stopOpacity: '0.9',
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '66',
          y: '0',
          width: '34',
          height: '52.4',
          fill: `url(#${id}-g)`,
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '66',
          y: '0',
          width: '34',
          height: '52.4',
          fill: `url(#${id})`,
        }),
      ],
    }),
  // quarter-circle tiles
  (id) =>
    /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx('defs', {
          children: /* @__PURE__ */ jsxs('pattern', {
            id,
            width: '12',
            height: '12',
            patternUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('path', { d: 'M0 0h6a6 6 0 0 1-6 6z', fill: '#0A6F4C' }),
              /* @__PURE__ */ jsx('path', {
                d: 'M12 12H6a6 6 0 0 1 6-6z',
                fill: '#2dd4bf',
                opacity: '0.75',
              }),
              /* @__PURE__ */ jsx('path', {
                d: 'M12 0v6a6 6 0 0 1-6-6z',
                fill: '#0A6F4C',
                opacity: '0.55',
              }),
              /* @__PURE__ */ jsx('path', {
                d: 'M0 12V6a6 6 0 0 1 6 6z',
                fill: '#0A6F4C',
                opacity: '0.8',
              }),
            ],
          }),
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '60',
          y: '0',
          width: '40',
          height: '52.4',
          fill: `url(#${id})`,
        }),
      ],
    }),
  // concentric rings
  () =>
    /* @__PURE__ */ jsxs('g', {
      fill: 'none',
      stroke: '#2dd4bf',
      strokeWidth: '0.6',
      children: [
        /* @__PURE__ */ jsx('circle', { cx: '90', cy: '26', r: '8', opacity: '0.9' }),
        /* @__PURE__ */ jsx('circle', { cx: '90', cy: '26', r: '15', opacity: '0.7' }),
        /* @__PURE__ */ jsx('circle', { cx: '90', cy: '26', r: '22', opacity: '0.5' }),
        /* @__PURE__ */ jsx('circle', { cx: '90', cy: '26', r: '29', opacity: '0.35' }),
        /* @__PURE__ */ jsx('circle', { cx: '90', cy: '26', r: '36', opacity: '0.2' }),
      ],
    }),
  // diagonal lines
  (id) =>
    /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx('defs', {
          children: /* @__PURE__ */ jsx('pattern', {
            id,
            width: '2.4',
            height: '2.4',
            patternUnits: 'userSpaceOnUse',
            patternTransform: 'rotate(45)',
            children: /* @__PURE__ */ jsx('rect', {
              width: '0.7',
              height: '2.4',
              fill: '#2dd4bf',
              opacity: '0.7',
            }),
          }),
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '68',
          y: '0',
          width: '32',
          height: '52.4',
          fill: `url(#${id})`,
        }),
      ],
    }),
  // rising bars
  () =>
    /* @__PURE__ */ jsxs('g', {
      fill: '#0A6F4C',
      children: [
        /* @__PURE__ */ jsx('rect', {
          x: '66',
          y: '34',
          width: '5',
          height: '18.4',
          opacity: '0.5',
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '73',
          y: '26',
          width: '5',
          height: '26.4',
          opacity: '0.65',
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '80',
          y: '18',
          width: '5',
          height: '34.4',
          opacity: '0.8',
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '87',
          y: '10',
          width: '5',
          height: '42.4',
          fill: '#2dd4bf',
          opacity: '0.8',
        }),
        /* @__PURE__ */ jsx('rect', {
          x: '94',
          y: '3',
          width: '5',
          height: '49.4',
          opacity: '0.95',
        }),
      ],
    }),
];
const BlogCover = ({ title, variant, image }) => {
  const rawId = useId();
  const id = `cover${rawId.replace(/:/g, '')}`;
  if (image) {
    return /* @__PURE__ */ jsx('img', {
      src: image,
      alt: '',
      className: 'aspect-[1.91/1] w-full rounded-[4px] object-cover',
      loading: 'lazy',
    });
  }
  return /* @__PURE__ */ jsxs('div', {
    dir: 'ltr',
    className:
      'relative aspect-[1.91/1] w-full overflow-hidden rounded-[4px] bg-[#04241a] [container-type:inline-size]',
    'aria-hidden': 'true',
    children: [
      /* @__PURE__ */ jsx('div', {
        className:
          'absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,#0b4a35_0%,#04241a_55%,#021a12_100%)]',
      }),
      /* @__PURE__ */ jsx('svg', {
        className: 'absolute inset-0 h-full w-full',
        viewBox: '0 0 100 52.4',
        preserveAspectRatio: 'none',
        children: patterns[variant % patterns.length](id),
      }),
      /* @__PURE__ */ jsx('img', {
        src: '/images/northernacs/logo.png',
        alt: '',
        className: 'absolute left-[12%] top-[10%] h-[8%] w-auto brightness-0 invert',
        loading: 'lazy',
      }),
      /* @__PURE__ */ jsx('p', {
        className:
          'absolute left-[12%] top-1/2 m-0 max-w-[56%] -translate-y-[44%] text-[5.4cqw] font-bold leading-[1.18] text-white',
        children: title,
      }),
    ],
  });
};
const PAGE_SIZE = 7;
const AVATAR_COLORS = ['bg-[#08563D]', 'bg-[#0A6F4C]', 'bg-[#064531]'];
const posts = blogs$2;
const formatDate = (date, lang) =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-ca-gregory' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
const Avatars = ({ names, size }) =>
  /* @__PURE__ */ jsx('span', {
    className: 'flex shrink-0 items-center',
    'aria-hidden': 'true',
    children: names.map((name, index) =>
      /* @__PURE__ */ jsx(
        'span',
        {
          className: `flex items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white ${size} ${AVATAR_COLORS[index % AVATAR_COLORS.length]} ${index > 0 ? 'ms-[-6px]' : ''}`,
          children: name.charAt(0),
        },
        name,
      ),
    ),
  });
const CategoryPill = ({ label }) =>
  label
    ? /* @__PURE__ */ jsx('span', {
        className:
          'inline-block rounded-full border border-slate-300 px-3 py-[5px] text-[10.5px] font-semibold uppercase leading-none tracking-[0.12em] text-slate-700 dark:border-[#5c5c5a] dark:text-slate-300',
        children: label,
      })
    : null;
const BlogsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const menusRef = useRef(null);
  const topRef = useRef(null);
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [tagId, setTagId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [pinnedId, setPinnedId] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const onPointerDown = (event) => {
      var _a;
      if (!((_a = menusRef.current) == null ? void 0 : _a.contains(event.target)))
        setPinnedId(null);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPinnedId(null);
        setHoverId(null);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  const visiblePosts = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      var _a;
      const haystack = `${post.title[lang]} ${post.excerpt[lang]}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesCategory = !categoryId || post.category === categoryId;
      const matchesTag = !tagId || ((_a = post.tags) == null ? void 0 : _a.includes(tagId));
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [categoryId, lang, query, tagId]);
  const totalPages = Math.max(1, Math.ceil(visiblePosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagePosts = visiblePosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const [featured, ...rest] = pagePosts;
  const goToPage = (next) => {
    var _a;
    setPage(next);
    (_a = topRef.current) == null
      ? void 0
      : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const categoryLabel = (post) => {
    var _a;
    return (_a = t.categories.find((c) => c.id === post.category)) == null ? void 0 : _a.label;
  };
  const closeMenus = () => {
    setPinnedId(null);
    setHoverId(null);
  };
  const renderMenu = (id, label, items, selectedId, onSelect) => {
    const open = hoverId === id || pinnedId === id;
    return /* @__PURE__ */ jsxs('div', {
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      className: 'relative flex h-12 items-center',
      onMouseEnter: () => setHoverId(id),
      onMouseLeave: () => setHoverId((current) => (current === id ? null : current)),
      children: [
        /* @__PURE__ */ jsxs('button', {
          type: 'button',
          'aria-expanded': open,
          'aria-haspopup': 'true',
          onClick: () => setPinnedId((current) => (current === id ? null : id)),
          className: `flex items-center gap-1.5 text-sm font-bold tracking-wider transition-colors ${open || selectedId ? 'text-[#08563D] dark:text-[#2dd4bf]' : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'}`,
          children: [
            label,
            /* @__PURE__ */ jsx(FaChevronDown, {
              size: 9,
              className: `transition-transform duration-200 ${open ? 'rotate-180' : ''}`,
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: `absolute top-full z-30 pt-2 transition-all duration-200 ${id === 'tags' ? 'right-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2' : 'left-0 lg:left-1/2 lg:-translate-x-1/2'} ${open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-1 opacity-0'}`,
          children: /* @__PURE__ */ jsx('div', {
            className:
              'w-64 rounded-lg border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 dark:border-[#484846] dark:bg-[#2b2b2a] dark:ring-white/10',
            children: items.map((item) => {
              const active = selectedId === item.id;
              return /* @__PURE__ */ jsx(
                'button',
                {
                  type: 'button',
                  onClick: () => {
                    onSelect(active ? null : item.id);
                    setPage(1);
                    closeMenus();
                  },
                  className: `block w-full rounded-md px-4 py-2.5 text-start text-xs font-bold tracking-wider transition-colors ${active ? 'bg-slate-50 text-[#08563D] dark:bg-[#343433] dark:text-[#2dd4bf]' : 'text-slate-700 hover:bg-[#08563D]/5 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#343433] dark:hover:text-white'}`,
                  children:
                    id === 'tags'
                      ? /* @__PURE__ */ jsx('bdi', { dir: 'ltr', children: item.label })
                      : item.label,
                },
                item.id,
              );
            }),
          }),
        }),
      ],
    });
  };
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-nacs-surface py-16 md:py-12',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
      children: [
        /* @__PURE__ */ jsxs('div', {
          ref: topRef,
          dir: 'ltr',
          className:
            'mb-12 flex scroll-mt-28 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between',
          children: [
            /* @__PURE__ */ jsxs('div', {
              ref: menusRef,
              'aria-label': t.filtersLabel,
              className: 'flex items-center gap-8',
              children: [
                renderMenu('categories', t.categoriesTab, t.categories, categoryId, setCategoryId),
                renderMenu('tags', t.popularTagTab, t.tags, tagId, setTagId),
              ],
            }),
            /* @__PURE__ */ jsxs('form', {
              role: 'search',
              className: 'relative w-full lg:w-80',
              onSubmit: (event) => event.preventDefault(),
              children: [
                /* @__PURE__ */ jsx(FiSearch, {
                  className:
                    'pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-slate-400',
                  'aria-hidden': 'true',
                  size: 16,
                }),
                /* @__PURE__ */ jsx('input', {
                  type: 'search',
                  value: query,
                  onChange: (event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  },
                  placeholder: t.searchPlaceholder,
                  'aria-label': t.searchLabel,
                  className:
                    'h-12 w-full rounded-xl border border-slate-200 bg-white ps-11 pe-11 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-nacs-green focus:ring-4 focus:ring-nacs-green/10 [&::-webkit-search-cancel-button]:hidden',
                }),
                query
                  ? /* @__PURE__ */ jsx('button', {
                      type: 'button',
                      onClick: () => {
                        setQuery('');
                        setPage(1);
                      },
                      'aria-label': t.clearSearch,
                      className:
                        'absolute end-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700',
                      children: /* @__PURE__ */ jsx(FiX, { size: 15 }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        !featured
          ? /* @__PURE__ */ jsx('p', {
              className:
                'rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center text-nacs-muted',
              children: t.noResults,
            })
          : /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsxs('article', {
                  className: 'grid items-start gap-[22px] font-normal md:grid-cols-2',
                  children: [
                    /* @__PURE__ */ jsx(Link, {
                      to: articlePath(featured.slug, lang),
                      'aria-label': featured.title[lang],
                      className: 'block',
                      children: /* @__PURE__ */ jsx(BlogCover, {
                        title: featured.title[lang],
                        variant: 0,
                        image: featured.image,
                      }),
                    }),
                    /* @__PURE__ */ jsxs('div', {
                      className: 'md:pt-[7px]',
                      children: [
                        /* @__PURE__ */ jsxs('div', {
                          className:
                            'flex items-center gap-2 text-[12.5px] leading-none text-slate-500 dark:text-slate-400',
                          children: [
                            /* @__PURE__ */ jsx(Avatars, {
                              names: featured.authors[lang].slice(0, 1),
                              size: 'h-5 w-5',
                            }),
                            /* @__PURE__ */ jsx('span', {
                              className: 'font-semibold text-slate-800 dark:text-slate-200',
                              children: featured.authors[lang].join(lang === 'ar' ? ' و ' : ' & '),
                            }),
                            /* @__PURE__ */ jsx('span', { 'aria-hidden': 'true', children: '·' }),
                            /* @__PURE__ */ jsx('time', {
                              dateTime: featured.date,
                              children: formatDate(featured.date, lang),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsx('h2', {
                          className:
                            'mt-[18px] text-[28px] font-semibold leading-[1.3] text-slate-900 lg:text-[30px]',
                          children: /* @__PURE__ */ jsx(Link, {
                            to: articlePath(featured.slug, lang),
                            className: 'transition-colors hover:text-nacs-green',
                            children: featured.title[lang],
                          }),
                        }),
                        /* @__PURE__ */ jsx('p', {
                          className:
                            'mt-4 text-[14px] leading-[1.65] text-slate-600 dark:text-slate-300',
                          children: featured.excerpt[lang],
                        }),
                        /* @__PURE__ */ jsx('div', {
                          className: 'mt-[18px]',
                          children: /* @__PURE__ */ jsx(CategoryPill, {
                            label: categoryLabel(featured),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                rest.length > 0
                  ? /* @__PURE__ */ jsx('div', {
                      className:
                        'mt-12 grid gap-x-[22px] gap-y-14 border-t border-slate-200 pt-16 dark:border-[#484846] sm:grid-cols-2 lg:grid-cols-3',
                      children: rest.map((post, index) =>
                        /* @__PURE__ */ jsxs(
                          'article',
                          {
                            className: 'flex flex-col font-normal',
                            children: [
                              /* @__PURE__ */ jsx(Link, {
                                to: articlePath(post.slug, lang),
                                'aria-label': post.title[lang],
                                className: 'block',
                                children: /* @__PURE__ */ jsx(BlogCover, {
                                  title: post.title[lang],
                                  variant: index + 1,
                                  image: post.image,
                                }),
                              }),
                              /* @__PURE__ */ jsxs('div', {
                                className:
                                  'mt-[18px] flex items-start gap-2 text-[12px] leading-[1.6] text-slate-500 dark:text-slate-400',
                                children: [
                                  /* @__PURE__ */ jsx(Avatars, {
                                    names: post.authors[lang],
                                    size: 'h-[18px] w-[18px]',
                                  }),
                                  /* @__PURE__ */ jsx('span', {
                                    className:
                                      'min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-200',
                                    children: post.authors[lang].join(
                                      lang === 'ar' ? ' و ' : ' & ',
                                    ),
                                  }),
                                  /* @__PURE__ */ jsxs('span', {
                                    className: 'flex shrink-0 gap-1.5 text-end',
                                    children: [
                                      /* @__PURE__ */ jsx('span', {
                                        'aria-hidden': 'true',
                                        children: '·',
                                      }),
                                      /* @__PURE__ */ jsx('time', {
                                        dateTime: post.date,
                                        children: formatDate(post.date, lang),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsx('h3', {
                                className:
                                  'mt-3 text-[18px] font-bold leading-[1.35] text-slate-900',
                                children: /* @__PURE__ */ jsx(Link, {
                                  to: articlePath(post.slug, lang),
                                  className: 'transition-colors hover:text-nacs-green',
                                  children: post.title[lang],
                                }),
                              }),
                              /* @__PURE__ */ jsx('p', {
                                className:
                                  'mt-2.5 line-clamp-3 text-[13px] leading-[1.65] text-slate-600 dark:text-slate-300',
                                children: post.excerpt[lang],
                              }),
                              /* @__PURE__ */ jsx('div', {
                                className: 'mt-auto pt-4',
                                children: /* @__PURE__ */ jsx(CategoryPill, {
                                  label: categoryLabel(post),
                                }),
                              }),
                            ],
                          },
                          post.slug,
                        ),
                      ),
                    })
                  : null,
                totalPages > 1
                  ? /* @__PURE__ */ jsxs('nav', {
                      'aria-label': t.pagination.label,
                      className: 'mt-16 flex items-center justify-center gap-2',
                      children: [
                        /* @__PURE__ */ jsx('button', {
                          type: 'button',
                          onClick: () => goToPage(currentPage - 1),
                          disabled: currentPage === 1,
                          'aria-label': t.pagination.previous,
                          className:
                            'flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-colors hover:border-nacs-green hover:text-nacs-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-[#484846]',
                          children: /* @__PURE__ */ jsx(FiChevronLeft, {
                            size: 18,
                            className: 'rtl:rotate-180',
                          }),
                        }),
                        Array.from({ length: totalPages }, (_, index) => index + 1).map((number) =>
                          /* @__PURE__ */ jsx(
                            'button',
                            {
                              type: 'button',
                              onClick: () => goToPage(number),
                              'aria-label': `${t.pagination.page} ${number}`,
                              'aria-current': number === currentPage ? 'page' : void 0,
                              className: `flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-semibold transition-colors ${number === currentPage ? 'border-nacs-green bg-nacs-green text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-nacs-green hover:text-nacs-green dark:border-[#484846]'}`,
                              children: number,
                            },
                            number,
                          ),
                        ),
                        /* @__PURE__ */ jsx('button', {
                          type: 'button',
                          onClick: () => goToPage(currentPage + 1),
                          disabled: currentPage === totalPages,
                          'aria-label': t.pagination.next,
                          className:
                            'flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-colors hover:border-nacs-green hover:text-nacs-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-[#484846]',
                          children: /* @__PURE__ */ jsx(FiChevronRight, {
                            size: 18,
                            className: 'rtl:rotate-180',
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
      ],
    }),
  });
};
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  company: '',
  comments: '',
};
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRx = /^[0-9()#&+*\-=. ]+$/;
const fieldBase =
  'w-full rounded-md border border-nacs-line bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all focus:border-nacs-green focus:outline-none focus:ring-2 focus:ring-nacs-green/15';
const HERO_IMAGE = '/images/northernacs/contact.jpeg';
const ContactPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const v = t.validation;
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const validate = (nextValues) => {
    const found = {};
    if (!nextValues.firstName.trim()) found.firstName = v.firstNameRequired;
    if (!nextValues.lastName.trim()) found.lastName = v.lastNameRequired;
    if (!nextValues.email.trim()) found.email = v.emailRequired;
    else if (!emailRx.test(nextValues.email.trim())) found.email = v.emailInvalid;
    if (nextValues.phone.trim() && !phoneRx.test(nextValues.phone.trim()))
      found.phone = v.phoneInvalid;
    if (!nextValues.location.trim()) found.location = v.locationRequired;
    if (!nextValues.comments.trim()) found.comments = v.commentsRequired;
    else if (nextValues.comments.trim().length < 10) found.comments = v.commentsMinLength;
    return found;
  };
  const onChange = (field) => (event) => {
    const value = event.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: void 0 }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      toast.error(t.review);
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      toast.success(t.sent);
      setValues(initialState);
      setSubmitted(true);
    } catch {
      toast.error(t.error);
    } finally {
      setSubmitting(false);
    }
  };
  const fieldClass = (field) =>
    `${fieldBase} ${errors[field] ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('section', {
        className: 'bg-[#eceff1]',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'relative',
          children: [
            /* @__PURE__ */ jsx('img', {
              src: HERO_IMAGE,
              alt: t.eyebrow,
              className: 'h-[420px] w-full object-cover object-center md:h-[470px]',
              loading: 'eager',
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'absolute bottom-0 start-0 w-full bg-nacs-green md:w-1/2',
              children: /* @__PURE__ */ jsx('div', {
                className: 'px-12 py-8 sm:px-12',
                children: /* @__PURE__ */ jsx('h2', {
                  className: 'text-5xl font-black uppercase tracking-wide text-white',
                  children: t.eyebrow,
                }),
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('section', {
        className: 'bg-nacs-surface py-16 md:py-24',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8',
          children: [
            /* @__PURE__ */ jsx('h1', {
              className: 'text-4xl font-black text-slate-900 md:text-5xl',
              children: t.title,
            }),
            /* @__PURE__ */ jsx('p', {
              className: 'mx-auto mt-4 max-w-2xl text-nacs-muted',
              children: t.intro,
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('section', {
        className: 'bg-white py-16 md:py-20',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8',
          children: [
            /* @__PURE__ */ jsxs('aside', {
              className: 'rounded-2xl bg-nacs-green p-8 text-white',
              children: [
                /* @__PURE__ */ jsx('h2', {
                  className: 'mb-6 text-2xl font-black',
                  children: t.infoTitle,
                }),
                /* @__PURE__ */ jsxs('ul', {
                  className: 'space-y-5 text-white/85',
                  children: [
                    /* @__PURE__ */ jsxs('li', {
                      className: 'flex gap-3',
                      children: [
                        /* @__PURE__ */ jsx(FaRegBuilding, { className: 'mt-1 shrink-0' }),
                        'Jeddah, Kingdom of Saudi Arabia',
                      ],
                    }),
                    /* @__PURE__ */ jsxs('li', {
                      className: 'flex gap-3',
                      children: [
                        /* @__PURE__ */ jsx(FaRegEnvelope, { className: 'mt-1 shrink-0' }),
                        /* @__PURE__ */ jsx('a', {
                          href: 'mailto:contact@northernacs.com',
                          children: 'contact@northernacs.com',
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs('li', {
                      className: 'flex gap-3',
                      children: [
                        /* @__PURE__ */ jsx(FaPhone, { className: 'mt-1 shrink-0' }),
                        /* @__PURE__ */ jsx('a', {
                          href: 'tel:+966558188632',
                          children: '+966 55 818 8632',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx('div', {
              className:
                'rounded-2xl border border-nacs-line bg-white p-6 shadow-sm sm:p-8 md:p-10',
              children: submitted
                ? /* @__PURE__ */ jsxs('div', {
                    className: 'py-10 text-center',
                    children: [
                      /* @__PURE__ */ jsx('div', {
                        className:
                          'mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-nacs-mint text-nacs-green',
                        children: /* @__PURE__ */ jsx(FaCircleCheck, { size: 32 }),
                      }),
                      /* @__PURE__ */ jsx('h3', {
                        className: 'mb-2 text-2xl font-black text-slate-900',
                        children: t.successTitle,
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className: 'mx-auto mb-6 max-w-md text-nacs-muted',
                        children: t.successText,
                      }),
                      /* @__PURE__ */ jsx('button', {
                        type: 'button',
                        onClick: () => setSubmitted(false),
                        className:
                          'rounded-md bg-nacs-green px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover',
                        children: t.again,
                      }),
                    ],
                  })
                : /* @__PURE__ */ jsxs('form', {
                    noValidate: true,
                    onSubmit,
                    className: 'space-y-5',
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'grid gap-5 md:grid-cols-2',
                        children: [
                          /* @__PURE__ */ jsx(Field, {
                            name: 'firstName',
                            placeholder: t.firstName,
                            value: values.firstName,
                            onChange: onChange('firstName'),
                            error: errors.firstName,
                            className: fieldClass('firstName'),
                          }),
                          /* @__PURE__ */ jsx(Field, {
                            name: 'lastName',
                            placeholder: t.lastName,
                            value: values.lastName,
                            onChange: onChange('lastName'),
                            error: errors.lastName,
                            className: fieldClass('lastName'),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs('div', {
                        className: 'grid gap-5 md:grid-cols-2',
                        children: [
                          /* @__PURE__ */ jsx(Field, {
                            name: 'email',
                            type: 'email',
                            placeholder: t.email,
                            value: values.email,
                            onChange: onChange('email'),
                            error: errors.email,
                            className: fieldClass('email'),
                          }),
                          /* @__PURE__ */ jsx(Field, {
                            name: 'phone',
                            type: 'tel',
                            placeholder: t.phone,
                            value: values.phone,
                            onChange: onChange('phone'),
                            error: errors.phone,
                            className: fieldClass('phone'),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx(Field, {
                        name: 'location',
                        placeholder: t.location,
                        value: values.location,
                        onChange: onChange('location'),
                        error: errors.location,
                        className: fieldClass('location'),
                      }),
                      /* @__PURE__ */ jsx(Field, {
                        name: 'company',
                        placeholder: t.company,
                        value: values.company,
                        onChange: onChange('company'),
                        className: fieldClass('company'),
                      }),
                      /* @__PURE__ */ jsx('textarea', {
                        name: 'comments',
                        rows: 5,
                        placeholder: t.comments,
                        value: values.comments,
                        onChange: onChange('comments'),
                        className: `${fieldClass('comments')} min-h-[140px] resize-y`,
                      }),
                      errors.comments &&
                        /* @__PURE__ */ jsx('p', {
                          className: 'text-xs text-red-500',
                          children: errors.comments,
                        }),
                      /* @__PURE__ */ jsxs('div', {
                        className:
                          'flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between',
                        children: [
                          /* @__PURE__ */ jsx('p', {
                            className: 'text-xs text-slate-400',
                            children: t.required,
                          }),
                          /* @__PURE__ */ jsxs('button', {
                            type: 'submit',
                            disabled: submitting,
                            className:
                              'inline-flex items-center justify-center rounded-md bg-nacs-green px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-nacs-greenHover disabled:cursor-not-allowed disabled:opacity-70',
                            children: [
                              submitting ? t.submitting : t.submit,
                              !submitting &&
                                /* @__PURE__ */ jsx(FaPaperPlane, { className: 'ms-3', size: 13 }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    ],
  });
};
const Field = ({ name, type = 'text', placeholder, value, onChange, error, className }) =>
  /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsx('input', {
        name,
        type,
        placeholder,
        value,
        onChange,
        'aria-invalid': Boolean(error),
        className,
      }),
      error &&
        /* @__PURE__ */ jsx('p', { className: 'mt-1.5 text-xs text-red-500', children: error }),
    ],
  });
const useScrollShrink = (ref) => {
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
    const tick = (now) => {
      const dt = last ? Math.min(64, now - last) : 16;
      last = now;
      current += (target - current) * (1 - Math.exp(-dt / 140));
      if (Math.abs(target - current) < 4e-4) current = target;
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
  const offerRef = useRef(null);
  const techRef = useRef(null);
  useScrollShrink(offerRef);
  useScrollShrink(techRef);
  const offerOverlap = 100;
  const techTitleParts = t.home.techTitle.split(/\{(.*?)\}/g);
  return /* @__PURE__ */ jsxs('div', {
    className: 'bg-[#f8fafc]',
    children: [
      /* @__PURE__ */ jsxs('section', {
        id: 'top',
        className: 'relative flex h-[80vh] min-h-[600px] items-center overflow-hidden',
        children: [
          /* @__PURE__ */ jsx('img', {
            src: '/images/northernacs/riyadh-skyline.jpg',
            alt: t.home.heroImageAlt || 'Riyadh Skyline',
            className: `absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ${isAr ? 'scale-x-[-1]' : ''}`,
            loading: 'eager',
          }),
          /* @__PURE__ */ jsx('div', {
            className: `absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white/80 to-transparent`,
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0',
            children: /* @__PURE__ */ jsxs('div', {
              className: 'max-w-2xl animate-fade-in-up',
              children: [
                /* @__PURE__ */ jsxs('h1', {
                  className:
                    'mb-6 text-4xl font-black !leading-tight text-black md:text-5xl lg:text-6xl',
                  children: [
                    t.home.title,
                    /* @__PURE__ */ jsx('br', {}),
                    /* @__PURE__ */ jsx('span', {
                      className: 'text-[#08563D]',
                      children: t.home.accent,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx('div', {
                  className: 'mt-10 flex flex-col items-start gap-2 sm:flex-row',
                  children: /* @__PURE__ */ jsxs('a', {
                    href: '#s-locator-platform',
                    className:
                      'inline-flex items-center justify-center rounded-xl bg-[#08563D] px-5 py-5 text-sm font-bold tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#064531] hover:shadow-xl',
                    children: [
                      t.home.learnMore,
                      /* @__PURE__ */ jsx(FiArrowUpRight, { className: 'ms-3', size: 16 }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('section', {
        className: 'bg-white py-16 md:py-10 dark:bg-[#343433]',
        children: /* @__PURE__ */ jsxs('div', {
          className:
            'mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-0',
          children: [
            /* @__PURE__ */ jsxs('div', {
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'mb-6 flex flex-wrap items-center gap-4',
                  children: [
                    /* @__PURE__ */ jsx('span', {
                      className:
                        'inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#03261c] via-[#08563D] to-[#5eead4] px-5 py-3 text-white shadow-sm',
                      children: Array.from({ length: 5 }).map((_, index) =>
                        /* @__PURE__ */ jsx(
                          FaStar,
                          {
                            size: 16,
                            className: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]',
                          },
                          index,
                        ),
                      ),
                    }),
                    /* @__PURE__ */ jsx('span', {
                      className:
                        'text-base font-medium tracking-wide text-slate-500 dark:text-slate-300',
                      children: t.home.spotlightEyebrow,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('h2', {
                  className:
                    'mb-6 text-4xl font-black leading-[1.1] text-slate-900 md:text-5xl lg:text-[3.25rem] dark:text-white',
                  children: [
                    t.home.spotlightTitle,
                    /* @__PURE__ */ jsx('br', {}),
                    t.home.spotlightTitleLine,
                  ],
                }),
                /* @__PURE__ */ jsx('p', {
                  className:
                    'max-w-xl text-base leading-relaxed text-slate-600 md:text-[17px] dark:text-slate-300',
                  children: t.home.spotlightBody,
                }),
              ],
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'flex justify-center lg:justify-end',
              children: /* @__PURE__ */ jsx('img', {
                src: '/images/northernacs/data-intelligence-sculpture.png',
                alt: t.home.spotlightImageAlt,
                className: 'h-auto w-full max-w-md object-contain lg:max-w-lg',
                width: 1024,
                height: 1024,
                loading: 'lazy',
                onError: (event) => {
                  const image = event.currentTarget;
                  const fallback = '/images/northernacs/data-intelligence-sculpture.jpg';
                  if (!image.src.endsWith(fallback)) {
                    image.src = fallback;
                  }
                },
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('section', {
        id: 'solutions',
        className: 'py-10 md:py-16 bg-[#08563D] ',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-0',
          children: [
            /* @__PURE__ */ jsx('h2', {
              className: 'mb-14 text-3xl font-medium tracking-tight md:text-4xl',
              style: { color: '#ffffff' },
              children: t.home.solutionsTitle,
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'grid gap-x-12 gap-y-12 md:grid-cols-3',
              children: t.home.solutionItems.map((item) =>
                /* @__PURE__ */ jsxs(
                  'article',
                  {
                    children: [
                      /* @__PURE__ */ jsx('h3', {
                        className: 'mb-3 text-lg font-bold',
                        style: { color: '#ffffff' },
                        children: item.title,
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className: 'text-sm font-normal leading-relaxed',
                        style: { color: isDark ? '#cbd5e1' : 'rgba(255,255,255,0.82)' },
                        children: item.text,
                      }),
                    ],
                  },
                  item.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs('div', {
        ref: offerRef,
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'relative z-10',
            style: { marginBottom: -offerOverlap },
            children: [
              /* @__PURE__ */ jsx('div', {
                'aria-hidden': true,
                className: 'pointer-events-none absolute max-md:!left-0 max-md:!right-0',
                style: {
                  bottom: 'calc(var(--p, 0) * -12px)',
                  left: 'calc(var(--p, 0) * 37px)',
                  right: 'calc(var(--p, 0) * 37px)',
                  height: offerOverlap + 12,
                  opacity: 'var(--p, 0)',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  borderRadius: '0 0 calc(10px + var(--p, 0) * 8px) calc(10px + var(--p, 0) * 8px)',
                },
              }),
              /* @__PURE__ */ jsx('div', {
                'aria-hidden': true,
                className: 'pointer-events-none absolute max-md:!left-0 max-md:!right-0',
                style: {
                  top: 'calc(var(--p, 0) * 20px)',
                  bottom: 0,
                  left: 'calc(var(--p, 0) * 48px)',
                  right: 'calc(var(--p, 0) * 48px)',
                  borderRadius: 'calc(4px + var(--p, 0) * 8px)',
                  backgroundColor: isDark ? '#2b2b2a' : '#f4f1f8',
                },
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'relative px-6 py-16 md:px-12 md:py-24',
                children: /* @__PURE__ */ jsxs('div', {
                  className: 'mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16',
                  children: [
                    /* @__PURE__ */ jsxs('div', {
                      children: [
                        /* @__PURE__ */ jsx('h2', {
                          className: 'mb-8 max-w-xl text-4xl leading-[1.15] md:text-5xl',
                          style: { color: isDark ? '#ffffff' : '#241833', fontWeight: 650 },
                          children: t.home.offerTitle,
                        }),
                        /* @__PURE__ */ jsxs('a', {
                          href: '#solutions',
                          className:
                            'inline-flex items-center gap-2 rounded-xl bg-[#08563D] px-5 py-3 text-sm text-white transition-colors hover:bg-[#064531]',
                          style: { fontWeight: 600 },
                          children: [
                            t.home.learnMore,
                            /* @__PURE__ */ jsx(FiArrowUpRight, { size: 16 }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'max-w-xl text-base leading-relaxed',
                      style: { color: isDark ? '#cbd5e1' : '#6b6478', fontWeight: 450 },
                      children: t.home.offerText,
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsx('section', {
            className: 'px-4 pb-20 md:px-8 my-10',
            style: {
              backgroundColor: '#7E5CAC',
              paddingTop: offerOverlap + 64,
            },
            children: /* @__PURE__ */ jsx('div', {
              className:
                'mx-auto grid max-w-[760px] grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0',
              children: t.home.offerStats.map((item) =>
                /* @__PURE__ */ jsxs(
                  'div',
                  {
                    className: 'text-start',
                    children: [
                      /* @__PURE__ */ jsx('div', {
                        className: 'whitespace-nowrap text-[60px] leading-[0.95]',
                        style: {
                          fontWeight: 800,
                          color: 'transparent',
                          WebkitTextStroke: '1.25px #08563D',
                          WebkitMaskImage:
                            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 100%)',
                          maskImage:
                            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 100%)',
                        },
                        children: item.value,
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className: 'relative -mt-3.5 whitespace-nowrap text-[20px]',
                        style: { color: '#ffffff', fontWeight: 500 },
                        children: item.label,
                      }),
                    ],
                  },
                  item.label,
                ),
              ),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        ref: techRef,
        children: [
          /* @__PURE__ */ jsxs('section', {
            className: 'relative',
            style: { backgroundColor: isDark ? '#343433' : '#f4f1f8' },
            children: [
              /* @__PURE__ */ jsx('div', {
                'aria-hidden': true,
                className: 'pointer-events-none absolute max-md:!left-0 max-md:!right-0',
                style: {
                  top: 0,
                  bottom: 0,
                  left: 'calc(var(--p, 0) * 46px)',
                  right: 'calc(var(--p, 0) * 46px)',
                  borderRadius: '0 0 calc(var(--p, 0) * 12px) calc(var(--p, 0) * 12px)',
                  backgroundColor: isDark ? '#2b2b2a' : '#ffffff',
                },
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24',
                children: /* @__PURE__ */ jsx('h2', {
                  className: 'text-3xl leading-[1.25] md:text-[40px]',
                  style: { color: isDark ? '#ffffff' : '#241833', fontWeight: 400 },
                  children: techTitleParts.map((part, index) =>
                    index % 2 === 1
                      ? /* @__PURE__ */ jsx(
                          'span',
                          {
                            style: {
                              fontWeight: 700,
                              backgroundImage: isDark
                                ? 'linear-gradient(90deg, #2dd4bf, #6ee7b7)'
                                : 'linear-gradient(90deg, #043222, #0A6F4C)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              color: 'transparent',
                            },
                            children: part,
                          },
                          `${part}-${index}`,
                        )
                      : /* @__PURE__ */ jsx('span', { children: part }, `${part}-${index}`),
                  ),
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsx('section', {
            className: 'px-4 py-12 md:py-16',
            style: { backgroundColor: isDark ? '#343433' : '#ffffff' },
            children: /* @__PURE__ */ jsx('div', {
              className: 'mx-auto max-w-7xl rounded-[40px] px-6 py-10 md:px-10 md:py-12',
              style: { backgroundColor: isDark ? '#2b2b2a' : '#e6ebe8' },
              children: /* @__PURE__ */ jsx('div', {
                className: 'grid grid-cols-2 gap-4 sm:grid-cols-3',
                children: t.home.projectShots.map((shot) =>
                  /* @__PURE__ */ jsxs(
                    'figure',
                    {
                      className: 'overflow-hidden rounded-2xl',
                      children: [
                        /* @__PURE__ */ jsx('img', {
                          src: shot.src,
                          alt: shot.alt,
                          className: 'h-36 w-full object-cover sm:h-40',
                          loading: 'lazy',
                        }),
                        /* @__PURE__ */ jsx('figcaption', {
                          className: 'px-1 pt-2 text-center text-xs font-medium',
                          style: { color: isDark ? '#cbd5e1' : '#334155' },
                          children: shot.label,
                        }),
                      ],
                    },
                    shot.src,
                  ),
                ),
              }),
            }),
          }),
        ],
      }),
    ],
  });
};
const accent = 'text-[#0F732E]/80 dark:text-[#0F732E]';
const About = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].aboutSolution;
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-white py-10 font-normal lg:py-24',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-5xl px-4 text-center sm:px-6',
      children: [
        /* @__PURE__ */ jsxs('h2', {
          className:
            'text-[32px] font-semibold leading-tight text-[#3a3a3a] dark:text-slate-100 sm:text-4xl',
          children: [
            copy2.titleLead,
            ' ',
            /* @__PURE__ */ jsxs('bdi', {
              dir: 'ltr',
              className: 'whitespace-nowrap',
              children: [
                copy2.brand,
                /* @__PURE__ */ jsx('sup', {
                  className: 'text-[0.55em] font-normal',
                  children: '®',
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsx('p', {
          className:
            'mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4a4a4a] dark:text-slate-300 sm:text-xl',
          children: copy2.subtitle,
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5',
          children: copy2.stats.map((stat) =>
            /* @__PURE__ */ jsxs(
              'div',
              {
                className:
                  'flex min-h-[108px]  flex-col items-center justify-center border border-[#e6e6e6] bg-white px-6 py-5 shadow-md rounded-xl dark:border-[#5c5c5a] dark:bg-[#3e3e3d]',
                children: [
                  /* @__PURE__ */ jsx('p', {
                    className: `text-[32px] font-bold leading-none ${accent}`,
                    children: /* @__PURE__ */ jsx('bdi', { dir: 'ltr', children: stat.value }),
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'mt-2 text-sm text-[#9aa3ad] dark:text-slate-400',
                    children: stat.label,
                  }),
                ],
              },
              stat.label,
            ),
          ),
        }),
      ],
    }),
  });
};
const Faq = ({ product }) => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].faq;
  const items = copy2[product];
  const [openIndex, setOpenIndex] = useState(null);
  const splitAt = Math.floor(items.length / 2);
  const columns = [items.slice(0, splitAt), items.slice(splitAt)];
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-[#e7eef2] py-16 font-normal dark:bg-[#24302c] sm:py-20 lg:py-12',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-6xl px-6 sm:px-10 lg:px-16',
      children: [
        /* @__PURE__ */ jsx('h2', {
          className:
            'text-center text-[32px] font-medium tracking-tight text-[#5c564f] dark:text-slate-100 sm:text-[36px]',
          children: copy2.title,
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mt-12 grid grid-cols-1 gap-x-20 md:mt-14 md:grid-cols-2 lg:gap-x-24',
          children: columns.map((column, columnIndex) =>
            /* @__PURE__ */ jsx(
              'ul',
              {
                className: 'flex flex-col',
                children: column.map((item, itemIndex) => {
                  const index = (columnIndex === 0 ? 0 : splitAt) + itemIndex;
                  const open = openIndex === index;
                  const panelId = `faq-panel-${product}-${index}`;
                  return /* @__PURE__ */ jsxs(
                    'li',
                    {
                      className: 'border-b border-transparent py-3.5',
                      children: [
                        /* @__PURE__ */ jsx('button', {
                          type: 'button',
                          'aria-expanded': open,
                          'aria-controls': panelId,
                          onClick: () => setOpenIndex(open ? null : index),
                          className:
                            'w-full text-start text-[15px] font-normal leading-[1.45] text-[#0F732E] transition-colors hover:underline dark:text-[#7dcea0]',
                          children: item.question,
                        }),
                        /* @__PURE__ */ jsx('div', {
                          id: panelId,
                          role: 'region',
                          className: `grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`,
                          children: /* @__PURE__ */ jsx('div', {
                            className: 'overflow-hidden',
                            children: /* @__PURE__ */ jsx('p', {
                              className: `max-w-md pt-2.5 text-[14px] leading-[1.7] text-[#4b5563] transition-all duration-300 ease-out dark:text-slate-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`,
                              children: item.answer,
                            }),
                          }),
                        }),
                      ],
                    },
                    item.question,
                  );
                }),
              },
              columnIndex,
            ),
          ),
        }),
      ],
    }),
  });
};
const itemIcons = [FaRoad, FaHandshake, FaUmbrellaBeach];
const Advantages = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].advantages;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = copy2.items[activeIndex];
  return /* @__PURE__ */ jsx('section', {
    className: 'bg-white py-20 font-normal lg:py-28',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8',
      children: [
        /* @__PURE__ */ jsxs('h2', {
          className:
            'mx-auto max-w-2xl text-4xl font-semibold leading-tight text-[#3a3a3a] dark:text-slate-100 sm:text-5xl',
          children: [
            copy2.titleLead,
            ' ',
            /* @__PURE__ */ jsxs('bdi', {
              dir: 'ltr',
              className: 'whitespace-nowrap',
              children: [
                copy2.brand,
                /* @__PURE__ */ jsx('sup', {
                  className: 'text-[0.55em] font-normal',
                  children: '®',
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsx('p', {
          className:
            'mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3f3f3f] dark:text-slate-300 sm:text-xl',
          children: copy2.subtitle,
        }),
        /* @__PURE__ */ jsx('h3', {
          className: 'mt-14 text-3xl font-light text-[#2f3a44] dark:text-slate-200 sm:text-4xl',
          children: copy2.heading,
        }),
        /* @__PURE__ */ jsxs(
          'div',
          {
            className:
              'mx-auto mt-12 flex w-full animate-fade-in-up flex-col items-center gap-8 text-start sm:flex-row sm:items-stretch',
            role: 'tabpanel',
            children: [
              /* @__PURE__ */ jsxs('div', {
                className: 'flex w-full shrink-0 flex-col items-center sm:w-56 lg:w-64',
                children: [
                  /* @__PURE__ */ jsx('img', {
                    src: '',
                    alt: active.avatarAlt,
                    className:
                      'h-28 w-28 overflow-hidden rounded-full bg-[#0F732E]/10 dark:bg-[#0F732E]/40 object-cover text-[0px] lg:h-36 lg:w-36',
                  }),
                  /* @__PURE__ */ jsx(FaQuoteLeft, {
                    className: 'mt-6 text-3xl text-[#0F732E] dark:text-[#0F732E]/80',
                    'aria-hidden': 'true',
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs('div', {
                className:
                  'flex min-h-[180px] w-full min-w-0 flex-1 flex-col justify-between border-[#e3e3e3] dark:border-[#5c5c5a] sm:border-s sm:ps-10 lg:min-h-[210px] lg:ps-12',
                children: [
                  /* @__PURE__ */ jsxs('div', {
                    children: [
                      /* @__PURE__ */ jsx('img', {
                        src: '',
                        alt: active.logoAlt,
                        className: 'h-8 w-16 overflow-hidden object-contain text-[0px]',
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className:
                          'mt-5 text-lg leading-relaxed text-[#3f3f3f] dark:text-slate-200 lg:text-xl',
                        children: active.quote,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs('div', {
                    className: 'mt-6 flex items-end justify-between gap-4',
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'text-base leading-snug text-[#8a8a8a] dark:text-slate-400',
                        children: [
                          /* @__PURE__ */ jsx('p', { children: active.name }),
                          /* @__PURE__ */ jsx('p', { children: active.role }),
                        ],
                      }),
                      /* @__PURE__ */ jsx(Link, {
                        to: '',
                        className:
                          'shrink-0 text-base font-medium text-[#0F732E] hover:underline dark:text-[#0F732E]/80',
                        children: copy2.readMore,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          activeIndex,
        ),
        /* @__PURE__ */ jsx('div', {
          role: 'tablist',
          'aria-label': copy2.tabsLabel,
          className:
            'mx-auto mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-10',
          children: copy2.items.map((item, index) => {
            const Icon = itemIcons[index];
            const isActive = index === activeIndex;
            return /* @__PURE__ */ jsxs(
              'button',
              {
                type: 'button',
                role: 'tab',
                'aria-selected': isActive,
                onClick: () => setActiveIndex(index),
                className: `flex min-h-[160px] flex-col justify-between rounded-md border bg-[#ffffff] px-6 py-6 text-start transition-shadow duration-200 dark:bg-[#3e3e3d] lg:min-h-[180px] lg:px-7 lg:py-7 ${isActive ? 'border-[#e1e1e1] shadow-[0_0_8px_rgba(0,0,0,0.22)] dark:border-[#6a6a68]' : 'border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.13)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.35)]'}`,
                children: [
                  /* @__PURE__ */ jsxs('span', {
                    className: 'relative block h-14 w-24',
                    'aria-hidden': 'true',
                    children: [
                      /* @__PURE__ */ jsx('span', {
                        className: 'absolute start-0 top-0 text-[#0F732E]',
                        children: isActive
                          ? /* @__PURE__ */ jsx(FaMinus, { size: 22 })
                          : /* @__PURE__ */ jsx(FaPlus, { size: 22 }),
                      }),
                      /* @__PURE__ */ jsx(Icon, {
                        className:
                          'absolute start-7 top-1 text-5xl text-[#0F732E] dark:text-[#0F732E]/80',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx('span', {
                    className: `text-lg leading-snug lg:text-xl ${isActive ? 'text-[#0F732E] dark:text-[#0F732E]/80' : 'text-[#3d3d3d] dark:text-slate-100'}`,
                    children: item.stat,
                  }),
                ],
              },
              item.stat,
            );
          }),
        }),
      ],
    }),
  });
};
const categoryIcons = [
  FaCar,
  FaBuilding,
  FaCartShopping,
  FaBottleDroplet,
  FaDisplay,
  FaIndustry,
  FaHeartPulse,
];
const Customers = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].customers;
  return /* @__PURE__ */ jsx('section', {
    className: 'border-b border-slate-200 bg-slate-50 py-20',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'mx-auto max-w-5xl px-4 text-center sm:px-6',
      children: [
        /* @__PURE__ */ jsx('h2', {
          className: 'mb-12 text-3xl font-medium text-slate-900 sm:text-4xl',
          children: copy2.title,
        }),
        /* @__PURE__ */ jsx('div', {
          className:
            'mb-12 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale lg:gap-16',
          children: copy2.logos.map((logo) =>
            /* @__PURE__ */ jsx(
              'img',
              { src: '', alt: logo.alt, className: 'h-12 w-28 object-contain' },
              logo.alt,
            ),
          ),
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mx-auto flex max-w-[740px] flex-wrap justify-center gap-3',
          children: copy2.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return /* @__PURE__ */ jsxs(
              'div',
              {
                className:
                  'flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[#3d6f93] shadow-sm',
                children: [
                  /* @__PURE__ */ jsx(Icon, {
                    className: 'h-4 w-4 text-[#0F732E] dark:text-[#0F732E]/80',
                  }),
                  /* @__PURE__ */ jsx('span', {
                    className: 'text-[#3d3d3d] dark:text-slate-100',
                    children: category.name,
                  }),
                ],
              },
              category.name,
            );
          }),
        }),
      ],
    }),
  });
};
const FeaturesList = () => {
  const { lang } = useLanguage();
  const items = translations[lang].featuresList.items;
  return /* @__PURE__ */ jsx('section', {
    className: 'overflow-hidden bg-white py-8',
    children: /* @__PURE__ */ jsx('div', {
      className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
      children: items.map((feature, index) =>
        /* @__PURE__ */ jsxs(
          'div',
          {
            className: `grid items-stretch gap-10 py-16 lg:grid-cols-2 lg:gap-20 ${index !== 0 ? 'border-t border-slate-100' : ''}`,
            children: [
              /* @__PURE__ */ jsxs('div', {
                className: `flex flex-col ${index % 2 === 1 ? 'lg:order-2' : ''}`,
                children: [
                  /* @__PURE__ */ jsx('h2', {
                    className: 'text-3xl font-medium leading-tight text-slate-900 sm:text-4xl',
                    children: feature.title,
                  }),
                  /* @__PURE__ */ jsx('p', {
                    className: 'mt-4 text-base leading-relaxed text-slate-500',
                    children: feature.description,
                  }),
                  /* @__PURE__ */ jsx('ul', {
                    className: 'mt-6 flex flex-col gap-3.5',
                    children: feature.bullets.map((bullet) =>
                      /* @__PURE__ */ jsxs(
                        'li',
                        {
                          className: 'flex items-start gap-3 text-slate-500',
                          children: [
                            /* @__PURE__ */ jsx(FaCircleCheck, {
                              className: 'mt-0.5 h-5 w-5 shrink-0 text-[#7E5CAC]/80',
                            }),
                            /* @__PURE__ */ jsx('span', {
                              className: 'leading-relaxed',
                              children: bullet,
                            }),
                          ],
                        },
                        bullet,
                      ),
                    ),
                  }),
                  /* @__PURE__ */ jsx('figure', {
                    className:
                      'mt-8 rounded-2xl border border-slate-100 bg-[#f4f6fb] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-[#5c5c5a] dark:bg-[#3e3e3d] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
                    children: /* @__PURE__ */ jsxs('div', {
                      className: 'flex gap-5',
                      children: [
                        /* @__PURE__ */ jsxs('div', {
                          className: 'flex shrink-0 flex-col items-center',
                          children: [
                            /* @__PURE__ */ jsx('img', {
                              src: '',
                              alt: feature.avatarAlt,
                              className:
                                'mb-3 h-14 w-14 overflow-hidden rounded-full bg-white object-cover text-[0px] shadow-sm',
                            }),
                            /* @__PURE__ */ jsx(FaQuoteLeft, {
                              className: 'text-2xl text-[#7E5CAC]',
                              'aria-hidden': 'true',
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs('figcaption', {
                          className: 'min-w-0',
                          children: [
                            /* @__PURE__ */ jsxs('blockquote', {
                              className: 'text-[15px] italic leading-relaxed text-slate-600',
                              children: ['“', feature.quote, '”'],
                            }),
                            /* @__PURE__ */ jsx('p', {
                              className: 'mt-3 text-sm font-semibold text-slate-900',
                              children: feature.author,
                            }),
                            /* @__PURE__ */ jsx('p', {
                              className: 'text-xs text-slate-500',
                              children: feature.role,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsx('div', {
                className: `relative min-h-72 ${index % 2 === 1 ? 'lg:order-1' : ''}`,
                children: /* @__PURE__ */ jsx('img', {
                  src: '',
                  alt: feature.imageAlt,
                  className: 'absolute inset-0 h-full w-full object-contain text-[0px]',
                }),
              }),
            ],
          },
          feature.title,
        ),
      ),
    }),
  });
};
const renderHighlighted = (template, values) =>
  template.split(/\{(.*?)\}/g).map((part, index) =>
    index % 2 === 1
      ? /* @__PURE__ */ jsx(
          'strong',
          {
            dir: part === 'brand' ? 'ltr' : void 0,
            className: 'font-semibold text-[#1e3a5f] dark:text-white',
            children: values[part] ?? part,
          },
          `${part}-${index}`,
        )
      : /* @__PURE__ */ jsx('span', { children: part }, `text-${index}`),
  );
const HeroSection = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].solutionsHero;
  return /* @__PURE__ */ jsx('section', {
    className: 'relative overflow-hidden border-b border-slate-100 bg-white',
    children: /* @__PURE__ */ jsxs('div', {
      className:
        'relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'relative mx-auto w-full max-w-[460px] lg:col-span-5',
          children: [
            /* @__PURE__ */ jsxs('div', {
              className: 'relative aspect-square',
              children: [
                /* @__PURE__ */ jsx('div', {
                  className: 'absolute inset-0 rounded-full border border-sky-200',
                }),
                /* @__PURE__ */ jsx('div', {
                  className: 'absolute inset-[10px] overflow-hidden rounded-full bg-slate-100',
                  children: /* @__PURE__ */ jsxs('div', {
                    className: 'grid h-full grid-cols-2',
                    children: [
                      /* @__PURE__ */ jsx('img', {
                        src: '',
                        alt: copy2.manAlt,
                        className: 'h-full w-full object-cover object-[center_18%]',
                        loading: 'eager',
                      }),
                      /* @__PURE__ */ jsx('img', {
                        src: '',
                        alt: copy2.womanAlt,
                        className: 'h-full w-full object-cover object-top',
                        loading: 'eager',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className:
                'absolute start-0 top-[16%] z-20 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-lg sm:-start-6 sm:px-4',
              children: [
                /* @__PURE__ */ jsx('span', {
                  className:
                    'flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500',
                  children: /* @__PURE__ */ jsx(FaMapLocationDot, { size: 14 }),
                }),
                /* @__PURE__ */ jsx('span', {
                  className: 'whitespace-nowrap text-sm font-semibold text-slate-800',
                  children: copy2.routePlanner,
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className:
                'absolute bottom-[14%] end-0 z-20 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-lg sm:end-[-6%] sm:px-4',
              children: [
                /* @__PURE__ */ jsx('span', {
                  className:
                    'flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600',
                  children: /* @__PURE__ */ jsx(FaLayerGroup, { size: 14 }),
                }),
                /* @__PURE__ */ jsx('span', {
                  className: 'whitespace-nowrap text-sm font-semibold text-slate-800',
                  children: copy2.territoryOptimization,
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'lg:col-span-7',
          children: [
            /* @__PURE__ */ jsx('h1', {
              className: 'text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl',
              children: /* @__PURE__ */ jsx('bdi', { dir: 'ltr', children: copy2.brand }),
            }),
            /* @__PURE__ */ jsx('p', {
              className:
                'mt-4 max-w-xl text-2xl font-medium leading-snug text-slate-800 sm:text-[1.7rem]',
              children: copy2.subtitle,
            }),
            /* @__PURE__ */ jsx('p', {
              className:
                'mt-6 max-w-xl text-base leading-relaxed text-[#5b7c99] dark:text-slate-300',
              children: renderHighlighted(copy2.description, {
                route: copy2.route,
                territory: copy2.territory,
                brand: copy2.brand,
              }),
            }),
            /* @__PURE__ */ jsx(Link, {
              to: '',
              className:
                'mt-8 inline-flex items-center justify-center rounded-xl bg-[#0F732E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F732E]/90',
              children: copy2.getStarted,
            }),
          ],
        }),
      ],
    }),
  });
};
const ProductChooser = () => {
  const { lang } = useLanguage();
  const copy2 = translations[lang].productChooser;
  const products = [
    {
      title: copy2.routePlanner.title,
      description: copy2.routePlanner.description,
      cta: copy2.routePlanner.cta,
      ctaTo: '/signup',
      more: copy2.routePlanner.more,
      moreTo: '/solutions/s-route',
      imageAlt: copy2.routePlanner.imageAlt,
      Icon: FaMapLocationDot,
      iconClass: 'text-[#7E5CAC]',
    },
    {
      title: copy2.territory.title,
      description: copy2.territory.description,
      cta: copy2.territory.cta,
      ctaTo: '/contact',
      more: copy2.territory.more,
      moreTo: '/solutions/s-locator',
      imageAlt: copy2.territory.imageAlt,
      Icon: FaLayerGroup,
      iconClass: 'text-[#0F732E]',
    },
  ];
  return /* @__PURE__ */ jsx('section', {
    className: 'overflow-hidden border-b border-slate-100 bg-white py-20 lg:py-24',
    children: /* @__PURE__ */ jsx('div', {
      className: 'mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-0 lg:px-8',
      children: products.map((product, index) =>
        /* @__PURE__ */ jsxs(
          'div',
          {
            className: `flex h-full flex-col items-center px-4 text-center lg:px-16 ${index === 1 ? 'border-slate-100 pt-12 md:border-s md:pt-0' : ''}`,
            children: [
              /* @__PURE__ */ jsxs('div', {
                className: 'mb-8 flex items-center gap-3',
                children: [
                  /* @__PURE__ */ jsx(product.Icon, { className: `h-8 w-8 ${product.iconClass}` }),
                  /* @__PURE__ */ jsx('h2', {
                    className: 'text-3xl font-medium text-slate-900',
                    children: product.title,
                  }),
                ],
              }),
              /* @__PURE__ */ jsx('img', {
                src: '',
                alt: product.imageAlt,
                className: 'mb-8 h-64 w-80 object-contain',
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'mb-8 max-w-md font-light leading-relaxed text-slate-500',
                children: product.description,
              }),
              /* @__PURE__ */ jsxs('div', {
                className: 'mt-auto flex flex-col items-center',
                children: [
                  /* @__PURE__ */ jsx(Link, {
                    to: '',
                    className:
                      'mb-4 rounded-md bg-[#0F732E] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F732E]/80',
                    children: product.cta,
                  }),
                  /* @__PURE__ */ jsx(Link, {
                    to: '',
                    className: 'text-sm font-light text-[#0F732E] hover:underline dark:text-white',
                    children: product.more,
                  }),
                ],
              }),
            ],
          },
          product.title,
        ),
      ),
    }),
  });
};
const DatabricksConsultingPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ProductChooser, {}),
      /* @__PURE__ */ jsx(Customers, {}),
      /* @__PURE__ */ jsx(Advantages, {}),
      /* @__PURE__ */ jsx(FeaturesList, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Faq, { product: 'databricks' }),
    ],
  });
};
const SRoutePage = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ProductChooser, {}),
      /* @__PURE__ */ jsx(Customers, {}),
      /* @__PURE__ */ jsx(Advantages, {}),
      /* @__PURE__ */ jsx(FeaturesList, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Faq, { product: 'sRoute' }),
    ],
  });
};
const SLocatorPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ProductChooser, {}),
      /* @__PURE__ */ jsx(Customers, {}),
      /* @__PURE__ */ jsx(Advantages, {}),
      /* @__PURE__ */ jsx(FeaturesList, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Faq, { product: 'sLocator' }),
    ],
  });
};
const SignUpPage = () => {
  return /* @__PURE__ */ jsx('div', {
    className: 'min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-24',
    children: /* @__PURE__ */ jsx('div', {
      className: 'text-center',
      children: /* @__PURE__ */ jsx('h1', {
        className: 'text-3xl md:text-5xl font-black text-slate-900 tracking-tight',
        children: 'Sign Up',
      }),
    }),
  });
};
function App() {
  return /* @__PURE__ */ jsxs(Routes, {
    children: [
      /* @__PURE__ */ jsxs(Route, {
        element: /* @__PURE__ */ jsx(SiteLayout, {}),
        children: [
          /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
          /* @__PURE__ */ jsx(Route, {
            path: 'about',
            element: /* @__PURE__ */ jsx(AboutPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'contact',
            element: /* @__PURE__ */ jsx(ContactPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'blogs',
            element: /* @__PURE__ */ jsx(BlogsPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'blogs/:slug',
            element: /* @__PURE__ */ jsx(BlogDetailPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'en/blogs/:slug',
            element: /* @__PURE__ */ jsx(BlogDetailPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'solutions/consulting-databricks',
            element: /* @__PURE__ */ jsx(DatabricksConsultingPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'solutions/s-route',
            element: /* @__PURE__ */ jsx(SRoutePage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'solutions/s-locator',
            element: /* @__PURE__ */ jsx(SLocatorPage, {}),
          }),
          /* @__PURE__ */ jsx(Route, {
            path: 'signup',
            element: /* @__PURE__ */ jsx(SignUpPage, {}),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Route, {
        path: '*',
        element: /* @__PURE__ */ jsx(Navigate, { to: '/', replace: true }),
      }),
    ],
  });
}
const Root = ({ initialLang }) =>
  /* @__PURE__ */ jsx(ThemeProvider, {
    children: /* @__PURE__ */ jsxs(LanguageProvider, {
      initialLang,
      children: [
        /* @__PURE__ */ jsx(App, {}),
        /* @__PURE__ */ jsx(Toaster, { position: 'top-right', richColors: true }),
      ],
    }),
  });
const LANGS = ['ar', 'en'];
const getPrerenderRoutes = () =>
  blogPosts
    .filter((post) => post.seo)
    .flatMap((post) =>
      LANGS.map((lang) => {
        const seo = buildPostSeo(post, lang);
        return { path: articlePath(post.slug, lang), lang, seo, head: serializeSeoHead(seo) };
      }),
    );
const render = (path, lang) =>
  renderToString(
    /* @__PURE__ */ jsx(StaticRouter, {
      location: path,
      children: /* @__PURE__ */ jsx(Root, { initialLang: lang }),
    }),
  );
export { SITE_URL, getPrerenderRoutes, render };
