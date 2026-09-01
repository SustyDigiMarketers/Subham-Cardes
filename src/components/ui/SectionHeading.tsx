import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left' | 'right';
  className?: string;
  dark?: boolean;
}

export const FiligreeDivider: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#C5A880',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A880]" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill={color}
          opacity="0.85"
        />
        <circle cx="12" cy="12" r="2" fill="#FAF8F5" />
      </svg>
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A880]" />
    </div>
  );
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  className = '',
  dark = false,
}) => {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[alignment];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-2 ${
            dark ? 'text-[#C5A880]' : 'text-[#9E7B4F]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] ${
          dark ? 'text-[#FAF8F5]' : 'text-[#1C1917]'
        }`}
      >
        {title}
      </h2>
      <FiligreeDivider color={dark ? '#E7D7C1' : '#C5A880'} />
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg font-light leading-relaxed ${
            dark ? 'text-[#E7D7C1]/80' : 'text-[#57534E]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
