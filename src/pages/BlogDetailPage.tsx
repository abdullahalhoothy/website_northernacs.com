import DOMPurify from 'dompurify';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import blogs from '../data/blogs.json';
import { translations, type Lang } from '../i18n';

type BlogPost = {
  slug: string;
  date: string;
  title: Record<Lang, string>;
  html: Record<Lang, string>;
};
const posts = blogs as BlogPost[];

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const post = posts.find((item) => item.slug === slug);

  const safeHtml = useMemo(() => {
    if (!post) return '';
    return DOMPurify.sanitize(post.html[lang]);
  }, [post, lang]);

  if (!post) {
    return (
      <section className="bg-white py-20 dark:bg-[#343433]">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-6 text-lg text-nacs-muted dark:text-[#c8c8c4]">{t.notFound}</p>
          <Link to="/blogs" className="font-bold text-nacs-green dark:text-[#c5ead8]">
            {t.back}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white py-16 dark:bg-[#343433] md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="mb-8 inline-block text-sm font-bold text-nacs-green dark:text-[#c5ead8]"
        >
          {t.back}
        </Link>
        <time className="block text-xs font-bold uppercase tracking-[0.2em] text-nacs-green dark:text-[#c5ead8]">
          {post.date}
        </time>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 dark:text-[#f2f2f0] md:text-5xl">
          {post.title[lang]}
        </h1>
        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-900 prose-a:text-nacs-green dark:prose-invert dark:prose-headings:text-[#f2f2f0] dark:prose-p:text-[#c8c8c4] dark:prose-a:text-[#c5ead8]"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      </div>
    </article>
  );
};

export default BlogDetailPage;
