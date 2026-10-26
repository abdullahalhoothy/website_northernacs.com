import DOMPurify from 'dompurify';
import { useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import SpecialtyCoffeeJeddahArticle, {
  SPECIALTY_COFFEE_JEDDAH_SLUG,
} from '../components/blog/SpecialtyCoffeeJeddahArticle';
import { useLanguage } from '../components/LanguageProvider';
import { blogPosts } from '../data/blogPosts';
import { translations } from '../i18n';
import { articlePath } from '../seo/paths';
import { buildPostSeo } from '../seo/postSeo';
import { useSeo } from '../seo/seo';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const t = translations[lang].blogs;
  const post = blogPosts.find((item) => item.slug === slug);

  const seo = useMemo(() => (post ? buildPostSeo(post, lang) : null), [post, lang]);
  useSeo(seo);

  // Each language has its own URL (/blogs/... for Arabic, /en/blogs/... for English).
  // Switching language moves the visitor to the matching URL so the address, the
  // canonical tag, and the content always agree.
  useEffect(() => {
    if (!post) return;
    const target = articlePath(post.slug, lang);
    if (pathname.replace(/\/+$/, '') !== target) navigate(target, { replace: true });
  }, [post, lang, pathname, navigate]);

  const safeHtml = useMemo(() => {
    if (!post) return '';
    // DOMPurify needs a DOM. During prerendering (Node) the first-party HTML from blogs.json is used as-is.
    return DOMPurify.isSupported ? DOMPurify.sanitize(post.html[lang]) : post.html[lang];
  }, [post, lang]);

  if (!post) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-6 text-lg text-nacs-muted">{t.notFound}</p>
          <Link to="/blogs" className="font-bold text-nacs-green">
            {t.back}
          </Link>
        </div>
      </section>
    );
  }

  if (post.slug === SPECIALTY_COFFEE_JEDDAH_SLUG) {
    return <SpecialtyCoffeeJeddahArticle post={post} />;
  }

  return (
    <article className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="mb-8 inline-block text-sm font-bold text-nacs-green">
          {t.back}
        </Link>
        <time className="block text-xs font-bold uppercase tracking-[0.2em] text-nacs-green">
          {post.date}
        </time>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          {post.title[lang]}
        </h1>
        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-900 prose-a:text-nacs-green"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      </div>
    </article>
  );
};

export default BlogDetailPage;
