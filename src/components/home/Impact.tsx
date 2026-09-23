import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { images } from '@/data/images';

const measures = [
  { value: '[000]', label: 'Meals shared with local families' },
  { value: '[00]', label: 'Community partners we serve alongside' },
  { value: '[000]', label: 'Volunteers giving their time each month' },
];

export function Impact() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0">
        <Photo
          image={images.impact}
          sizes="100vw"
          className="h-full w-full"
          imgClassName="object-[50%_40%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55"
      />
      <div
        aria-hidden="true"
        className="ridges-light absolute inset-0 [--rx:88%] [--ry:62%] opacity-40"
      />

      <div className="container relative py-24 lg:py-36">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our Impact</p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Faith That Goes
              <span className="block text-brand-300">Beyond Sunday.</span>
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-white/75">
              What happens in the room on Sunday is meant to show up on the street on Monday. We
              serve people, help families carry heavy seasons, and share hope in practical ways with
              the neighbourhood we call home.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-5 text-pretty leading-relaxed text-white/60">
              No qualifications needed. Just a willingness to show up and a pair of hands.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <Button href="/connect#serve" variant="accent" size="lg">
                Get Involved
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Measures */}
        <Reveal delay={380}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 sm:grid-cols-3">
            {measures.map((m) => (
              <div key={m.label} className="bg-ink/70 p-7 backdrop-blur-sm lg:p-8">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-semibold text-brand-300 lg:text-5xl">
                    {m.value}
                  </span>
                  <span className="mt-3 block text-[0.88rem] leading-relaxed text-white/60">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
