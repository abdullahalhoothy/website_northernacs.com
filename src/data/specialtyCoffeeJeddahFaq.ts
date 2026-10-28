import type { Lang } from '../i18n';

export type FaqItem = { question: string; answer: string };

export const specialtyCoffeeJeddahFaq: Record<Lang, { title: string; items: FaqItem[] }> = {
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
