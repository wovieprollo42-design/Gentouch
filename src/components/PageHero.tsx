import type { ReactNode } from 'react';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import type { Img } from '@/data/images';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: Img;
  children?: ReactNode;
};

/** The shared masthead used by every interior page. */
export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0">
        <Photo
          image={image}
          priority
          sizes="100vw"
          className="h-full w-full"
          imgClassName="scale-105"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/90"
      />
      <div
        aria-hidden="true"
        className="ridges-light absolute inset-0 [--rx:82%] [--ry:28%] opacity-45"
      />

      <div className="container relative pb-20 pt-[150px] lg:pb-28 lg:pt-[190px]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow eyebrow-light">{eyebrow}</p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>

          {description && (
            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                {description}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3.5">{children}</div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Soft transition into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
