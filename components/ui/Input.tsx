'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Base input styles
const baseInputStyles = `
  w-full px-4 py-3 bg-brand-darker border border-white/10 
  rounded-lg font-body text-base font-light text-white
  transition-all duration-150
  focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10
  placeholder:text-white/30
  disabled:opacity-50 disabled:cursor-not-allowed
`;

// Input
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            baseInputStyles,
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// Textarea
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            baseInputStyles,
            'resize-y min-h-[120px]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// Select
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, placeholder, ...props }, ref) => {
    return (
      <div className="w-full">
        <select
          ref={ref}
          className={cn(
            baseInputStyles,
            `cursor-pointer appearance-none pr-12
            bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C9A961' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6,9 12,15 18,9'%3E%3C/polyline%3E%3C/svg%3E")]
            bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]`,
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';

// Label
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('block text-sm font-normal text-white/70 mb-2', className)}
        {...props}
      >
        {children}
        {required && <span className="text-brand-orange ml-1">*</span>}
      </label>
    );
  }
);
Label.displayName = 'Label';

// Form Group
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('mb-4', className)} {...props} />;
  }
);
FormGroup.displayName = 'FormGroup';

export { Input, Textarea, Select, Label, FormGroup };
