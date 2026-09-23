import { Reveal } from './Reveal';
import { Button } from './Button';
import { cn } from '@/lib/cn';

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
};

export function CTASection({
  eyebrow = 'Your Next Step',
  title,
  description,
  primary = { label: 'Plan Your Visit', href: '/plan-your-visit' },
  secondary = { label: 'Get Connected', href: '/connect' },
  className,
}: CTASectionProps) {
  return (
    <section className={cn('relative overflow-hidden bg-ink py-24 lg:py-32', className)}>
      {/* Brand wash + fingerprint ridge field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_0%,rgba(47,125,0,0.55),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="ridges-light pointer-events-none absolute inset-0 [--rx:50%] [--ry:12%] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500 to-transparent"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light justify-center">{eyebrow}</p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
              {description}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href={primary.href} variant="accent" size="lg" className="w-full sm:w-auto">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="light" size="lg" className="w-full sm:w-auto">
                {secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
