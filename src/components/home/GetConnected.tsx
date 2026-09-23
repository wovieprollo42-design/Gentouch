import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowRight } from '@/components/Icons';
import { connectSteps } from '@/data/content';

export function GetConnected() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Get Connected"
          align="center"
          title={
            <>
              You Don&rsquo;t Have to Do Life <span className="text-brand-700">Alone.</span>
            </>
          }
          description="Five simple next steps. Pick the one that fits where you are right now — every single one leads to a real person."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {connectSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={(i % 3) * 100}
              className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <Link
                href={step.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-canvas/70 p-7 transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:bg-white hover:shadow-lift sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="ridges-brand pointer-events-none absolute -right-16 -top-16 h-56 w-56 [--rx:50%] [--ry:50%] opacity-0 transition-opacity duration-700 ease-premium mask-radial group-hover:opacity-100"
                />

                <span className="relative font-display text-[0.9rem] font-semibold text-accent-500">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="relative mt-4 text-xl font-semibold tracking-[-0.015em] text-ink transition-colors duration-400 group-hover:text-brand-800">
                  {step.title}
                </h3>

                <p className="relative mt-3.5 flex-1 text-[0.94rem] leading-relaxed text-ink-muted">
                  {step.description}
                </p>

                <span className="relative mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors duration-400 group-hover:text-accent-500">
                  {step.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-premium group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
