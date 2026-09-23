import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Sunrise, Users, Compass } from '@/components/Icons';

const pillars = [
  {
    icon: Sunrise,
    title: 'Know God',
    description: 'Build a deeper relationship with God.',
    detail:
      'Faith is not a performance. It starts with knowing the God who already knows you, through Scripture, prayer and honest teaching.',
  },
  {
    icon: Users,
    title: 'Find Community',
    description: 'Life is better when we grow together.',
    detail:
      'We were never meant to do this alone. Around tables and in small groups, strangers become family.',
  },
  {
    icon: Compass,
    title: 'Live With Purpose',
    description: 'Use your gifts to make an impact.',
    detail:
      'You carry something this world needs. We will help you find it, sharpen it and put it to work.',
  },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="ridges pointer-events-none absolute -right-40 -top-20 h-[560px] w-[560px] [--rx:50%] [--ry:50%] opacity-70 mask-radial"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Our Mission"
          align="center"
          title={
            <>
              Three things we build <span className="text-brand-700">everything</span> around.
            </>
          }
          description="Every service, every group and every ministry at GenTouch exists to move people forward in one of these three directions."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-7">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 110}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift lg:p-10">
                  {/* Ridge wash blooms on hover */}
                  <div
                    aria-hidden="true"
                    className="ridges-brand pointer-events-none absolute -right-20 -top-20 h-64 w-64 [--rx:50%] [--ry:50%] opacity-0 transition-opacity duration-700 ease-premium mask-radial group-hover:opacity-100"
                  />

                  <div className="relative">
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-500 ease-premium group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700">
                      <Icon className="h-7 w-7" />
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute -top-1 left-[52px] h-2 w-2 rounded-full bg-accent-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="relative mt-7 text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>

                  <p className="relative mt-3 text-[1.02rem] font-medium text-brand-700">
                    {p.description}
                  </p>

                  <p className="relative mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
                    {p.detail}
                  </p>

                  <span
                    aria-hidden="true"
                    className="relative mt-8 block h-px w-12 bg-gradient-to-r from-accent-500 to-brand-500 transition-all duration-600 ease-premium group-hover:w-24"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
