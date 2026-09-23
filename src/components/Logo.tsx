import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { site } from '@/data/site';

type LogoProps = {
  /** `dark` for light backgrounds, `light` for photography / dark sections. */
  tone?: 'dark' | 'light';
  size?: number;
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
  href?: string | null;
};

/**
 * The GenTouch mark is a full-colour logo on a white field, so on dark or
 * photographic backgrounds it sits inside a soft white disc. That keeps the
 * artwork untouched while still reading as premium over imagery.
 */
export function Logo({
  tone = 'dark',
  size = 44,
  showWordmark = true,
  showTagline = false,
  className,
  href = '/',
}: LogoProps) {
  const inner = (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span
        className={cn(
          'relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-white transition-shadow duration-500 ease-premium',
          tone === 'light'
            ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_10px_30px_-10px_rgba(0,0,0,0.6)]'
            : 'shadow-[0_0_0_1px_rgba(16,21,16,0.07)]',
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={site.logo}
          alt=""
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full scale-[1.14] object-contain"
        />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[1.32rem] font-semibold tracking-[-0.02em]',
              tone === 'light' ? 'text-white' : 'text-ink',
            )}
          >
            Gen<span className={tone === 'light' ? 'text-brand-300' : 'text-brand-700'}>Touch</span>
          </span>
          {showTagline && (
            <span
              className={cn(
                'mt-1.5 text-[0.58rem] font-medium uppercase tracking-[0.2em]',
                tone === 'light' ? 'text-white/65' : 'text-ink-faint',
              )}
            >
              {site.tagline}
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label={`${site.name} — home`} className="inline-flex">
      {inner}
    </Link>
  );
}
