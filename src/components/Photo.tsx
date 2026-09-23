'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import type { Img } from '@/data/images';

type PhotoProps = {
  image: Img;
  /** Wrapper classes — set the aspect ratio and rounding here. */
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Renders a tinted scrim over the photo, for text laid on top. */
  overlay?: 'none' | 'soft' | 'strong' | 'brand';
};

const overlays = {
  none: '',
  soft: 'bg-gradient-to-t from-ink/55 via-ink/10 to-transparent',
  strong: 'bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25',
  brand: 'bg-gradient-to-br from-brand-950/80 via-ink/60 to-brand-900/40',
};

/**
 * Every photo on the site renders through here. A branded gradient plus the
 * fingerprint ridge field is painted underneath, so a slow or unavailable
 * image degrades into something that still looks like GenTouch rather than a
 * broken box.
 */
export function Photo({
  image,
  className,
  imgClassName,
  sizes = '100vw',
  priority = false,
  overlay = 'none',
}: PhotoProps) {
  const [failed, setFailed] = useState(false);

  // The wrapper must establish a positioning context for the filled image, but
  // callers sometimes need to place it absolutely. Tailwind emits `.relative`
  // after `.absolute`, so passing both would silently win the wrong way.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className ?? '');

  return (
    <div className={cn(!positioned && 'relative', 'overflow-hidden bg-brand-950', className)}>
      {/* Branded placeholder / fallback layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-ink"
      >
        <div className="ridges-light absolute inset-0 [--rx:72%] [--ry:34%] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_15%,rgba(99,200,0,0.22),transparent_70%)]" />
      </div>

      {!failed && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          // Only hides the photo if it genuinely fails; the image is never
          // gated behind JS, so it still renders before hydration.
          onError={() => setFailed(true)}
          className={cn('object-cover', imgClassName)}
        />
      )}

      {overlay !== 'none' && (
        <div aria-hidden="true" className={cn('absolute inset-0', overlays[overlay])} />
      )}
    </div>
  );
}
