import type { Lang } from '../i18n';
import blogs from './blogs.json';

export type BlogSeo = {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  /** Social share image (1200x630-ish). Falls back to the post cover image. */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type BlogPost = {
  slug: string;
  date: string;
  category?: string;
  tags?: string[];
  image?: string;
  authors?: Record<Lang, string[]>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  html: Record<Lang, string>;
  /** Presence of this block opts the post into SEO metadata + build-time prerendering. */
  seo?: BlogSeo;
};

export const blogPosts = blogs as BlogPost[];
