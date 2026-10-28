import { Link } from 'react-router-dom';
import { FaLayerGroup, FaMapLocationDot } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../../i18n';
import { useLanguage } from '../LanguageProvider';

export const ProductChooser = () => {
  const { lang } = useLanguage();
  const copy = translations[lang].productChooser;

  const products: {
    title: string;
    description: string;
    cta: string;
    ctaTo: string;
    more: string;
    moreTo: string;
    imageAlt: string;
    Icon: IconType;
    iconClass: string;
  }[] = [
    {
      title: copy.routePlanner.title,
      description: copy.routePlanner.description,
      cta: copy.routePlanner.cta,
      ctaTo: '/signup',
      more: copy.routePlanner.more,
      moreTo: '/solutions/s-route',
      imageAlt: copy.routePlanner.imageAlt,
      Icon: FaMapLocationDot,
      iconClass: 'text-[#7E5CAC]',
    },
    {
      title: copy.territory.title,
      description: copy.territory.description,
      cta: copy.territory.cta,
      ctaTo: '/contact',
      more: copy.territory.more,
      moreTo: '/solutions/s-locator',
      imageAlt: copy.territory.imageAlt,
      Icon: FaLayerGroup,
      iconClass: 'text-[#0F732E]',
    },
  ];

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-0 lg:px-8">
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`flex h-full flex-col items-center px-4 text-center lg:px-16 ${
              index === 1 ? 'border-slate-100 pt-12 md:border-s md:pt-0' : ''
            }`}
          >
            <div className="mb-8 flex items-center gap-3">
              <product.Icon className={`h-8 w-8 ${product.iconClass}`} />
              <h2 className="text-3xl font-medium text-slate-900">{product.title}</h2>
            </div>
            <img src="" alt={product.imageAlt} className="mb-8 h-64 w-80 object-contain" />
            <p className="mb-8 max-w-md font-light leading-relaxed text-slate-500">
              {product.description}
            </p>
            <div className="mt-auto flex flex-col items-center">
              <Link
                to=""
                className="mb-4 rounded-md bg-[#0F732E] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F732E]/80"
              >
                {product.cta}
              </Link>
              <Link
                to=""
                className="text-sm font-light text-[#0F732E] hover:underline dark:text-white"
              >
                {product.more}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
