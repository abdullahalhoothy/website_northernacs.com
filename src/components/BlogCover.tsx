import { useId } from 'react';

type BlogCoverProps = {
  title: string;
  variant: number;
  image?: string;
};

const patterns = [
  // dotted halftone panel
  (id: string) => (
    <>
      <defs>
        <pattern id={id} width="3.2" height="3.2" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="0.8" fill="#2dd4bf" opacity="0.6" />
        </pattern>
        <linearGradient id={`${id}-g`} x1="0" x2="1">
          <stop offset="0" stopColor="#0A6F4C" stopOpacity="0" />
          <stop offset="1" stopColor="#0A6F4C" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="66" y="0" width="34" height="52.4" fill={`url(#${id}-g)`} />
      <rect x="66" y="0" width="34" height="52.4" fill={`url(#${id})`} />
    </>
  ),
  // quarter-circle tiles
  (id: string) => (
    <>
      <defs>
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 0h6a6 6 0 0 1-6 6z" fill="#0A6F4C" />
          <path d="M12 12H6a6 6 0 0 1 6-6z" fill="#2dd4bf" opacity="0.75" />
          <path d="M12 0v6a6 6 0 0 1-6-6z" fill="#0A6F4C" opacity="0.55" />
          <path d="M0 12V6a6 6 0 0 1 6 6z" fill="#0A6F4C" opacity="0.8" />
        </pattern>
      </defs>
      <rect x="60" y="0" width="40" height="52.4" fill={`url(#${id})`} />
    </>
  ),
  // concentric rings
  () => (
    <g fill="none" stroke="#2dd4bf" strokeWidth="0.6">
      <circle cx="90" cy="26" r="8" opacity="0.9" />
      <circle cx="90" cy="26" r="15" opacity="0.7" />
      <circle cx="90" cy="26" r="22" opacity="0.5" />
      <circle cx="90" cy="26" r="29" opacity="0.35" />
      <circle cx="90" cy="26" r="36" opacity="0.2" />
    </g>
  ),
  // diagonal lines
  (id: string) => (
    <>
      <defs>
        <pattern
          id={id}
          width="2.4"
          height="2.4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="0.7" height="2.4" fill="#2dd4bf" opacity="0.7" />
        </pattern>
      </defs>
      <rect x="68" y="0" width="32" height="52.4" fill={`url(#${id})`} />
    </>
  ),
  // rising bars
  () => (
    <g fill="#0A6F4C">
      <rect x="66" y="34" width="5" height="18.4" opacity="0.5" />
      <rect x="73" y="26" width="5" height="26.4" opacity="0.65" />
      <rect x="80" y="18" width="5" height="34.4" opacity="0.8" />
      <rect x="87" y="10" width="5" height="42.4" fill="#2dd4bf" opacity="0.8" />
      <rect x="94" y="3" width="5" height="49.4" opacity="0.95" />
    </g>
  ),
];

const BlogCover = ({ title, variant, image }: BlogCoverProps) => {
  const rawId = useId();
  const id = `cover${rawId.replace(/:/g, '')}`;

  if (image) {
    return (
      <img
        src={image}
        alt=""
        className="aspect-[1.91/1] w-full rounded-[4px] object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div
      dir="ltr"
      className="relative aspect-[1.91/1] w-full overflow-hidden rounded-[4px] bg-[#04241a] [container-type:inline-size]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,#0b4a35_0%,#04241a_55%,#021a12_100%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 52.4"
        preserveAspectRatio="none"
      >
        {patterns[variant % patterns.length](id)}
      </svg>
      <img
        src="/images/northernacs/logo.png"
        alt=""
        className="absolute left-[12%] top-[10%] h-[8%] w-auto brightness-0 invert"
        loading="lazy"
      />
      <p className="absolute left-[12%] top-1/2 m-0 max-w-[56%] -translate-y-[44%] text-[5.4cqw] font-bold leading-[1.18] text-white">
        {title}
      </p>
    </div>
  );
};

export default BlogCover;
