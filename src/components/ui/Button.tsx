import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none whitespace-nowrap active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 uppercase tracking-wider',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 shadow-sm',
  };

  const variantStyles = {
    primary:
      'bg-[#4A1521] text-[#FAF8F5] hover:bg-[#310D15] hover:shadow-md focus:ring-[#4A1521] border border-[#4A1521]',
    secondary:
      'bg-[#1C1917] text-[#FAF8F5] hover:bg-[#2D2A26] hover:shadow-md focus:ring-[#1C1917] border border-[#1C1917]',
    gold:
      'bg-[#C5A880] text-[#1C1917] hover:bg-[#B38E5B] hover:text-white hover:shadow-md focus:ring-[#C5A880] border border-[#C5A880] font-semibold',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#1FB855] hover:shadow-md focus:ring-[#25D366] border border-[#25D366] font-medium',
    outline:
      'bg-transparent text-[#1C1917] border border-[#C5A880] hover:bg-[#FAF8F5] hover:border-[#4A1521] hover:text-[#4A1521] focus:ring-[#C5A880]',
    ghost:
      'bg-transparent text-[#24211E] hover:bg-[#F4EFEB] hover:text-[#4A1521] focus:ring-[#C5A880]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
