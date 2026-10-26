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

type Copy = {
  lead: string;
  quickTitle: string;
  before: string;
  strong: string;
  after: string;
  closing: string;
};

const copy: Record<Lang, Copy> = {
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

type AreaPoints = {
  customer: string;
  specialty: string;
  commercial: string;
  access: string;
  growth: string;
  suited: string;
};

type AreaCopy = {
  name: string;
  standout: string;
  points: AreaPoints;
};

const pointOrder: (keyof AreaPoints)[] = [
  'customer',
  'specialty',
  'commercial',
  'access',
  'growth',
  'suited',
];

const areaLabels: Record<Lang, { title: string; intro: string; standout: string } & AreaPoints> = {
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

const areas: Record<Lang, AreaCopy[]> = {
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

type ComparisonRow = {
  area: string;
  demand: string;
  competition: string;
  purchasing: string;
  accessibility: string;
  commercial: string;
  fit: string;
};

const comparisonLabels: Record<Lang, { title: string; columns: string[] }> = {
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

const comparisonRows: Record<Lang, ComparisonRow[]> = {
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

type RichPart = { text: string; bold?: boolean; link?: string };
type TextBlock = { type: 'p'; parts: RichPart[] };
type ListBlock = { type: 'list'; items: { label: string; text: string }[] };
type SubheadBlock = { type: 'subhead'; text: string };
type ClosingSection = { title: string; blocks: (TextBlock | ListBlock | SubheadBlock)[] };

const closingSections: Record<Lang, ClosingSection[]> = {
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

type SourceItem = { label: string; detail: string; linkLabel?: string; href?: string };

const KNIGHT_FRANK_REPORT =
  'https://www.knightfrank.com.sa/en/research/reports/saudi-arabia-commercial-market-overview';
const JLL_RETAIL_INSIGHTS = 'https://www.jll.com/en-ae/insights/market-dynamics/ksa-retail';

const sourcesCopy: Record<Lang, { title: string; items: SourceItem[]; note: string }> = {
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
  const text = copy[lang];
  const labels = areaLabels[lang];
  const categoryLabel =
    t.categories.find((item) => item.id === post.category)?.label ??
    (lang === 'ar' ? 'تحليل السوق' : 'Market Analysis');
  const author = post.authors?.[lang]?.[0] ?? (lang === 'ar' ? 'فريق البحث' : 'Research Team');
  const backLabel = lang === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog';
  const byLabel = lang === 'ar' ? 'بقلم' : 'By';

  return (
    <article className="bg-[#fafbfc]">
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
            {areas[lang].map((area) => (
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
            {comparisonLabels[lang].title}
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#eceef1] bg-white shadow-[0_10px_30px_rgba(17,2,34,0.06)]">
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
                  {comparisonLabels[lang].columns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={`border-e border-white/10 px-4 py-4 text-start align-middle last:border-e-0 ${
                        index === comparisonLabels[lang].columns.length - 1
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
                {comparisonRows[lang].map((row) => (
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

        {closingSections[lang].map((section) => (
          <section key={section.title} className="mt-16">
            <h2 className="text-start text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#110222] sm:text-[32px]">
              {section.title}
            </h2>
            {section.blocks.map((block, index) => {
              if (block.type === 'subhead') {
                return (
                  <h3
                    key={`${section.title}-sub-${index}`}
                    className={`${index === 0 ? 'mt-5' : 'mt-8'} text-start text-[20px] font-bold leading-snug text-[#0F732E] sm:text-[22px]`}
                  >
                    {block.text}
                  </h3>
                );
              }

              if (block.type === 'list') {
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
                  {block.parts.map((part, partIndex) => {
                    if (part.link) {
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
                    if (part.bold) {
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
            {sourcesCopy[lang].title}
          </h2>
          <ul className="mt-5 list-disc space-y-4 ps-5 text-start text-[16px] leading-[1.75] text-[#646C79] marker:text-[#0F732E] sm:text-[17px]">
            {sourcesCopy[lang].items.map((item) => (
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
            {sourcesCopy[lang].note}
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
