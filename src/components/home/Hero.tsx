import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Reveal } from '@/components/Reveal';
import { MapPin, Clock, ArrowUpRight } from '@/components/Icons';
import { images } from '@/data/images';
import { contact, serviceTimes } from '@/data/site';

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        <Photo
          image={images.hero}
          priority
          sizes="100vw"
          className="h-full w-full"
          imgClassName="scale-[1.04] object-[50%_35%]"
        />
      </div>
      {/* Directional scrim: deep behind the headline, open on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
      />
      {/* Keeps the transparent navigation legible over any photograph */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(65%_55%_at_12%_45%,rgba(47,125,0,0.28),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="ridges-light absolute inset-0 [--rx:84%] [--ry:26%] opacity-35"
      />

      {/* Headline block takes the free space and sits optically centred */}
      <div className="container relative flex flex-1 items-center pb-12 pt-[128px] sm:pb-16 lg:pt-[150px]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-3.5 rounded-full border border-white/15 bg-white/[0.07] py-2 pl-2 pr-5 backdrop-blur-md">
              <Logo tone="light" size={36} showWordmark={false} href={null} />
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                There&rsquo;s a Nation Inside of You
              </span>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="mt-8 text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              A Place to Belong.
              <span className="block text-brand-300">A Faith to Grow.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
              Experience God. Build meaningful relationships. Grow in faith. Make a difference.
            </p>
          </Reveal>

          <Reveal delay={290}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
              <Button href="/plan-your-visit" variant="accent" size="lg" className="w-full sm:w-auto">
                Plan Your Visit
              </Button>
              <Button href="/sermons" variant="light" size="lg" className="w-full sm:w-auto">
                Watch Sermons
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Sunday strip */}
      <Reveal delay={380} className="relative">
        <div className="container pb-10 lg:pb-14">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl">
            <div className="grid divide-white/10 sm:grid-cols-3 sm:divide-x">
              <div className="flex flex-col justify-center gap-1.5 p-6 sm:p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand-300">
                  Join Us This Sunday
                </p>
                <p className="font-display text-xl text-white">{serviceTimes[0].name}</p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-white/10 p-6 sm:border-t-0 sm:p-7">
                <Clock className="h-5 w-5 shrink-0 text-brand-300" />
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/50">
                    Service Time
                  </p>
                  <p className="mt-0.5 text-[0.98rem] text-white">{serviceTimes[0].time}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 p-6 sm:border-t-0 sm:p-7">
                <div className="flex min-w-0 items-center gap-3.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-300" />
                  <div className="min-w-0">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Where
                    </p>
                    <p className="mt-0.5 truncate text-[0.98rem] text-white">
                      {contact.addressLine1}
                    </p>
                  </div>
                </div>

                <a
                  href={contact.directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/dir inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brand-300 transition-colors duration-400 hover:text-white"
                >
                  Get Directions
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 ease-premium group-hover/dir:translate-x-0.5 group-hover/dir:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
