import { useEffect, useMemo, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BlogCover from '../components/BlogCover';
import blogs from '../data/blogs.json';
import { translations, type Lang } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';
import { articlePath } from '../seo/paths';

type BlogPost = {
  slug: string;
  date: string;
  category?: string;
  tags?: string[];
  image?: string;
  authors: Record<Lang, string[]>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
};

type FilterId = 'categories' | 'tags';

type FilterItem = {
  id: string;
  label: string;
};

const PAGE_SIZE = 7;
const AVATAR_COLORS = ['bg-[#08563D]', 'bg-[#0A6F4C]', 'bg-[#064531]'];

const posts = blogs as BlogPost[];

const formatDate = (date: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-ca-gregory' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));

const Avatars = ({ names, size }: { names: string[]; size: string }) => (
  <span className="flex shrink-0 items-center" aria-hidden="true">
    {names.map((name, index) => (
      <span
        key={name}
        className={`flex items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white ${size} ${
          AVATAR_COLORS[index % AVATAR_COLORS.length]
        } ${index > 0 ? 'ms-[-6px]' : ''}`}
      >
        {name.charAt(0)}
      </span>
    ))}
  </span>
);

const CategoryPill = ({ label }: { label?: string }) =>
  label ? (
    <span className="inline-block rounded-full border border-slate-300 px-3 py-[5px] text-[10.5px] font-semibold uppercase leading-none tracking-[0.12em] text-slate-700 dark:border-[#5c5c5a] dark:text-slate-300">
      {label}
    </span>
  ) : null;

const BlogsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const menusRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [tagId, setTagId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<FilterId | null>(null);
  const [pinnedId, setPinnedId] = useState<FilterId | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!menusRef.current?.contains(event.target as Node)) setPinnedId(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
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
      const haystack = `${post.title[lang]} ${post.excerpt[lang]}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesCategory = !categoryId || post.category === categoryId;
      const matchesTag = !tagId || post.tags?.includes(tagId);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [categoryId, lang, query, tagId]);

  const totalPages = Math.max(1, Math.ceil(visiblePosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagePosts = visiblePosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const [featured, ...rest] = pagePosts;

  const goToPage = (next: number) => {
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categoryLabel = (post: BlogPost) => t.categories.find((c) => c.id === post.category)?.label;

  const closeMenus = () => {
    setPinnedId(null);
    setHoverId(null);
  };

  const renderMenu = (
    id: FilterId,
    label: string,
    items: ReadonlyArray<FilterItem>,
    selectedId: string | null,
    onSelect: (next: string | null) => void,
  ) => {
    const open = hoverId === id || pinnedId === id;
    return (
      <div
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className="relative flex h-12 items-center"
        onMouseEnter={() => setHoverId(id)}
        onMouseLeave={() => setHoverId((current) => (current === id ? null : current))}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setPinnedId((current) => (current === id ? null : id))}
          className={`flex items-center gap-1.5 text-sm font-bold tracking-wider transition-colors ${
            open || selectedId
              ? 'text-[#08563D] dark:text-[#2dd4bf]'
              : 'text-slate-800 hover:text-[#08563D] dark:text-slate-200 dark:hover:text-[#2dd4bf]'
          }`}
        >
          {label}
          <FaChevronDown
            size={9}
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`absolute top-full z-30 pt-2 transition-all duration-200 ${
            id === 'tags'
              ? 'right-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2'
              : 'left-0 lg:left-1/2 lg:-translate-x-1/2'
          } ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'pointer-events-none invisible translate-y-1 opacity-0'
          }`}
        >
          <div className="w-64 rounded-lg border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 dark:border-[#484846] dark:bg-[#2b2b2a] dark:ring-white/10">
            {items.map((item) => {
              const active = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelect(active ? null : item.id);
                    setPage(1);
                    closeMenus();
                  }}
                  className={`block w-full rounded-md px-4 py-2.5 text-start text-xs font-bold tracking-wider transition-colors ${
                    active
                      ? 'bg-slate-50 text-[#08563D] dark:bg-[#343433] dark:text-[#2dd4bf]'
                      : 'text-slate-700 hover:bg-[#08563D]/5 hover:text-[#08563D] dark:text-slate-200 dark:hover:bg-[#343433] dark:hover:text-white'
                  }`}
                >
                  {id === 'tags' ? <bdi dir="ltr">{item.label}</bdi> : item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-nacs-surface py-16 dark:bg-[#343433] md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={topRef}
          dir="ltr"
          className="mb-12 flex scroll-mt-28 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          <div ref={menusRef} aria-label={t.filtersLabel} className="flex items-center gap-8">
            {renderMenu('categories', t.categoriesTab, t.categories, categoryId, setCategoryId)}
            {renderMenu('tags', t.popularTagTab, t.tags, tagId, setTagId)}
          </div>

          <form
            role="search"
            className="relative w-full lg:w-80"
            onSubmit={(event) => event.preventDefault()}
          >
            <FiSearch
              className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
              size={16}
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              className="h-12 w-full rounded-xl border border-slate-200 bg-white ps-11 pe-11 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-nacs-green focus:ring-4 focus:ring-nacs-green/10 dark:border-[#484846] dark:bg-[#3e3e3d] dark:text-[#f2f2f0] dark:placeholder:text-[#a3a39e] [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setPage(1);
                }}
                aria-label={t.clearSearch}
                className="absolute end-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <FiX size={15} />
              </button>
            ) : null}
          </form>
        </div>

        {!featured ? (
          <p className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center text-nacs-muted dark:border-[#484846] dark:bg-[#3e3e3d] dark:text-[#c8c8c4]">
            {t.noResults}
          </p>
        ) : (
          <>
            <article className="grid items-start gap-[22px] font-normal md:grid-cols-2">
              <Link
                to={articlePath(featured.slug, lang)}
                aria-label={featured.title[lang]}
                className="block"
              >
                <BlogCover title={featured.title[lang]} variant={0} image={featured.image} />
              </Link>
              <div className="md:pt-[7px]">
                <div className="flex items-center gap-2 text-[12.5px] leading-none text-slate-500 dark:text-slate-400">
                  <Avatars names={featured.authors[lang].slice(0, 1)} size="h-5 w-5" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {featured.authors[lang].join(lang === 'ar' ? ' و ' : ' & ')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date, lang)}</time>
                </div>
                <h2 className="mt-[18px] text-[28px] font-semibold leading-[1.3] text-slate-900 lg:text-[30px]">
                  <Link
                    to={articlePath(featured.slug, lang)}
                    className="transition-colors hover:text-nacs-green"
                  >
                    {featured.title[lang]}
                  </Link>
                </h2>
                <p className="mt-4 text-[14px] leading-[1.65] text-slate-600 dark:text-slate-300">
                  {featured.excerpt[lang]}
                </p>
                <div className="mt-[18px]">
                  <CategoryPill label={categoryLabel(featured)} />
                </div>
              </div>
            </article>

            {rest.length > 0 ? (
              <div className="mt-12 grid gap-x-[22px] gap-y-14 border-t border-slate-200 pt-16 dark:border-[#484846] sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, index) => (
                  <article key={post.slug} className="flex flex-col font-normal">
                    <Link
                      to={articlePath(post.slug, lang)}
                      aria-label={post.title[lang]}
                      className="block"
                    >
                      <BlogCover title={post.title[lang]} variant={index + 1} image={post.image} />
                    </Link>
                    <div className="mt-[18px] flex items-start gap-2 text-[12px] leading-[1.6] text-slate-500 dark:text-slate-400">
                      <Avatars names={post.authors[lang]} size="h-[18px] w-[18px]" />
                      <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-200">
                        {post.authors[lang].join(lang === 'ar' ? ' و ' : ' & ')}
                      </span>
                      <span className="flex shrink-0 gap-1.5 text-end">
                        <span aria-hidden="true">·</span>
                        <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                      </span>
                    </div>
                    <h3 className="mt-3 text-[18px] font-bold leading-[1.35] text-slate-900">
                      <Link
                        to={articlePath(post.slug, lang)}
                        className="transition-colors hover:text-nacs-green"
                      >
                        {post.title[lang]}
                      </Link>
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-[13px] leading-[1.65] text-slate-600 dark:text-slate-300">
                      {post.excerpt[lang]}
                    </p>
                    <div className="mt-auto pt-4">
                      <CategoryPill label={categoryLabel(post)} />
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {totalPages > 1 ? (
              <nav
                aria-label={t.pagination.label}
                className="mt-16 flex items-center justify-center gap-2"
              >
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label={t.pagination.previous}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-colors hover:border-nacs-green hover:text-nacs-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-[#484846] dark:bg-[#3e3e3d] dark:text-[#c8c8c4]"
                >
                  <FiChevronLeft size={18} className="rtl:rotate-180" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => goToPage(number)}
                    aria-label={`${t.pagination.page} ${number}`}
                    aria-current={number === currentPage ? 'page' : undefined}
                    className={`flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-semibold transition-colors ${
                      number === currentPage
                        ? 'border-nacs-green bg-nacs-green text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-nacs-green hover:text-nacs-green dark:border-[#484846] dark:bg-[#3e3e3d] dark:text-[#c8c8c4]'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label={t.pagination.next}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-colors hover:border-nacs-green hover:text-nacs-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-[#484846] dark:bg-[#3e3e3d] dark:text-[#c8c8c4]"
                >
                  <FiChevronRight size={18} className="rtl:rotate-180" />
                </button>
              </nav>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;
