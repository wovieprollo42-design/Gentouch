import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
  /** Rendered under the description — usually buttons. */
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'max-w-2xl',
        centered && 'mx-auto max-w-3xl text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className={cn('eyebrow', centered && 'justify-center', tone === 'light' && 'eyebrow-light')}>
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2
          className={cn(
            'mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl',
            tone === 'light' ? 'text-white' : 'text-ink',
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={150}>
          <p
            className={cn(
              'lead mt-6 text-pretty',
              tone === 'light' && 'text-white/75',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}

      {children && (
        <Reveal delay={220}>
          <div className={cn('mt-9 flex flex-wrap gap-3.5', centered && 'justify-center')}>
            {children}
          </div>
        </Reveal>
      )}
    </div>
  );
}
