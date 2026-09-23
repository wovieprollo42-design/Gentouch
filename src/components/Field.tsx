'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const control =
  'w-full rounded-2xl border bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-faint/70 transition-all duration-300 ease-premium focus:outline-none focus:ring-4';

const ok = 'border-black/10 hover:border-brand-300 focus:border-brand-600 focus:ring-brand-500/10';
const bad = 'border-accent-400 bg-accent-50/40 focus:border-accent-500 focus:ring-accent-500/15';

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

function Shell({
  label,
  name,
  error,
  hint,
  required,
  className,
  children,
}: BaseProps & { children: ReactNode }) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 flex items-baseline gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-soft"
      >
        {label}
        {required && (
          <span className="text-accent-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {hint && !error && <p className="mt-2 text-[0.8rem] text-ink-faint">{hint}</p>}

      <p
        id={`${name}-error`}
        role="alert"
        className={cn(
          'mt-2 text-[0.82rem] font-medium text-accent-600 transition-opacity duration-300',
          error ? 'opacity-100' : 'sr-only opacity-0',
        )}
      >
        {error ?? ''}
      </p>
    </div>
  );
}

export function TextField({
  type = 'text',
  placeholder,
  autoComplete,
  value,
  onChange,
  ...base
}: BaseProps & {
  type?: 'text' | 'email' | 'tel' | 'date';
  placeholder?: string;
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Shell {...base}>
      <input
        id={base.name}
        name={base.name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, base.error ? bad : ok)}
      />
    </Shell>
  );
}

export function TextArea({
  placeholder,
  rows = 5,
  value,
  onChange,
  ...base
}: BaseProps & {
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Shell {...base}>
      <textarea
        id={base.name}
        name={base.name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, 'resize-y', base.error ? bad : ok)}
      />
    </Shell>
  );
}

export function SelectField({
  options,
  value,
  onChange,
  ...base
}: BaseProps & {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Shell {...base}>
      <select
        id={base.name}
        name={base.name}
        value={value}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.name}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, 'appearance-none pr-10', base.error ? bad : ok)}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235C6759' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='m6 9.5 6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
          backgroundSize: '18px',
        }}
      >
        {options.map((o) => (
          <option key={o} value={o === options[0] ? '' : o}>
            {o}
          </option>
        ))}
      </select>
    </Shell>
  );
}

export function CheckboxField({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      htmlFor={name}
      className="group flex cursor-pointer items-start gap-3.5 rounded-2xl border border-black/10 bg-canvas/60 p-4 transition-all duration-400 ease-premium hover:border-brand-300 hover:bg-brand-50/50"
    >
      <span className="relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-black/20 bg-white transition-all duration-300 checked:border-brand-700 checked:bg-brand-700"
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="pointer-events-none absolute h-3 w-3 scale-50 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100"
        >
          <path d="m5 12.6 4.4 4.4L19 7.4" />
        </svg>
      </span>

      <span className="text-[0.92rem] leading-relaxed text-ink-soft">{label}</span>
    </label>
  );
}
