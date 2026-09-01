import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  className = '',
  id,
  required,
  ...props
}) => {
  const generatedId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={generatedId} className="block text-xs font-semibold uppercase tracking-wider text-[#4A1521]">
          {label} {required && <span className="text-[#9E2A2B]">*</span>}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9E7B4F]">
            {leftIcon}
          </div>
        )}
        <input
          id={generatedId}
          required={required}
          className={`w-full bg-[#FFFFFF] border text-[#1C1917] text-sm rounded-sm px-3.5 py-3 transition-colors duration-200 placeholder:text-[#A8A29E] focus:outline-none focus:ring-1 ${
            leftIcon ? 'pl-10' : ''
          } ${
            error
              ? 'border-[#9E2A2B] focus:border-[#9E2A2B] focus:ring-[#9E2A2B]'
              : 'border-[#E7D7C1] hover:border-[#C5A880] focus:border-[#4A1521] focus:ring-[#4A1521]'
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-[#9E2A2B]">{error}</p>}
      {helperText && !error && <p className="text-xs text-[#78716C]">{helperText}</p>}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  helperText?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  helperText,
  className = '',
  id,
  required,
  ...props
}) => {
  const generatedId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={generatedId} className="block text-xs font-semibold uppercase tracking-wider text-[#4A1521]">
          {label} {required && <span className="text-[#9E2A2B]">*</span>}
        </label>
      )}
      <select
        id={generatedId}
        required={required}
        className={`w-full bg-[#FFFFFF] border text-[#1C1917] text-sm rounded-sm px-3.5 py-3 transition-colors duration-200 focus:outline-none focus:ring-1 cursor-pointer ${
          error
            ? 'border-[#9E2A2B] focus:border-[#9E2A2B] focus:ring-[#9E2A2B]'
            : 'border-[#E7D7C1] hover:border-[#C5A880] focus:border-[#4A1521] focus:ring-[#4A1521]'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="py-2">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[#9E2A2B]">{error}</p>}
      {helperText && !error && <p className="text-xs text-[#78716C]">{helperText}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  required,
  rows = 4,
  ...props
}) => {
  const generatedId = id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={generatedId} className="block text-xs font-semibold uppercase tracking-wider text-[#4A1521]">
          {label} {required && <span className="text-[#9E2A2B]">*</span>}
        </label>
      )}
      <textarea
        id={generatedId}
        required={required}
        rows={rows}
        className={`w-full bg-[#FFFFFF] border text-[#1C1917] text-sm rounded-sm px-3.5 py-3 transition-colors duration-200 placeholder:text-[#A8A29E] focus:outline-none focus:ring-1 resize-y ${
          error
            ? 'border-[#9E2A2B] focus:border-[#9E2A2B] focus:ring-[#9E2A2B]'
            : 'border-[#E7D7C1] hover:border-[#C5A880] focus:border-[#4A1521] focus:ring-[#4A1521]'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-[#9E2A2B]">{error}</p>}
      {helperText && !error && <p className="text-xs text-[#78716C]">{helperText}</p>}
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'burgundy' | 'outline' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-[#F4EFEB] text-[#9E7B4F] border border-[#E7D7C1]',
    burgundy: 'bg-[#4A1521] text-[#FAF8F5]',
    outline: 'bg-transparent text-[#78716C] border border-[#E7D7C1]',
    subtle: 'bg-[#FAF8F5] text-[#4A1521] border border-[#E7D7C1]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase rounded-xs select-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
