'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-body font-medium
      uppercase tracking-wider rounded-full transition-all duration-300
      cursor-pointer border-2 border-transparent
      disabled:opacity-50 disabled:cursor-not-allowed
    `;
    
    const variants = {
      primary: `
        bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker
        shadow-[0_0_20px_rgba(207,84,0,0.3)]
        hover:shadow-[0_0_30px_rgba(207,84,0,0.5)] hover:-translate-y-0.5
        disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_20px_rgba(207,84,0,0.3)]
      `,
      secondary: `
        bg-transparent text-brand-gold border-brand-gold
        hover:bg-brand-gold hover:text-brand-darker
      `,
      ghost: `
        bg-transparent text-white/70 hover:text-white hover:bg-white/10
      `,
      link: `
        bg-transparent text-brand-gold underline-offset-4 hover:underline
        p-0 border-0
      `,
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
