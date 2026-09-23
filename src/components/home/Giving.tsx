import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { HandHeart } from '@/components/Icons';

export function Giving() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-canvas px-7 py-16 sm:px-12 lg:px-20 lg:py-24">
            <div
              aria-hidden="true"
              className="ridges-brand pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] [--rx:50%] [--ry:50%] opacity-80 mask-radial"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-500 via-brand-600 to-accent-500"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                <HandHeart className="h-7 w-7" />
              </span>

              <h2 className="mt-8 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.9rem]">
                Generosity Makes a Difference
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
                Your generosity helps us reach people, serve our community, and share the message of
                hope.
              </p>

              <p className="mx-auto mt-4 max-w-lg text-pretty text-[0.95rem] leading-relaxed text-ink-faint">
                Giving is always a response, never a requirement. If you are new here, please treat
                this as our gift to you and give nothing at all.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Button href="/give" variant="primary" size="lg" className="w-full sm:w-auto">
                  Give Online
                </Button>
                <Button href="/give#ways" variant="ghost" size="lg" className="w-full sm:w-auto">
                  Other ways to give
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
