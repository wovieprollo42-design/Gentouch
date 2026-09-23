import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { isPlaceholderHref } from '@/lib/href';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.11em] transition-all duration-500 ease-premium disabled:pointer-events-none disabled:opacity-55';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
  accent:
    'bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-ink/15 bg-white/70 text-ink backdrop-blur hover:border-brand-500 hover:bg-white hover:text-brand-800 hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-brand-800 hover:text-accent-600',
  light:
    'border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[0.7rem]',
  md: 'px-7 py-3.5 text-[0.74rem]',
  lg: 'px-9 py-4 text-[0.78rem]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps | 'href'>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;

    // A destination that is still a placeholder stays inert rather than
    // becoming a link to nowhere.
    if (isPlaceholderHref(href)) {
      return (
        <span
          role="link"
          aria-disabled="true"
          title="This link is not configured yet."
          className={cn(classes, 'cursor-not-allowed opacity-60')}
        >
          {children}
        </span>
      );
    }

    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
