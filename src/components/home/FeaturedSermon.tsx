import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { Play, Clock, Calendar } from '@/components/Icons';
import { featuredSermon } from '@/data/content';

export function FeaturedSermon() {
  const s = featuredSermon;
  const hasVideo = /^https?:/.test(s.videoUrl);

  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_78%_20%,rgba(47,125,0,0.38),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="ridges-light pointer-events-none absolute inset-0 [--rx:16%] [--ry:78%] opacity-45"
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Player */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                <Photo
                  image={s.image}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  overlay="soft"
                  className="aspect-video w-full"
                  imgClassName="transition-transform duration-900 ease-premium group-hover:scale-[1.05]"
                />

                <a
                  href={hasVideo ? s.videoUrl : '/sermons'}
                  target={hasVideo ? '_blank' : undefined}
                  rel={hasVideo ? 'noreferrer noopener' : undefined}
                  aria-label={`Watch ${s.title}`}
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 text-brand-800 shadow-lift backdrop-blur transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white sm:h-24 sm:w-24">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 animate-pulse-ring rounded-full border border-white/70"
                    />
                    <Play className="h-7 w-7 translate-x-[2px] sm:h-8 sm:w-8" />
                  </span>
                </a>

                <div className="pointer-events-none absolute bottom-5 left-5 flex flex-wrap gap-2.5">
                  <span className="rounded-full bg-ink/65 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {s.series}
                  </span>
                  <span className="rounded-full bg-ink/65 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {s.duration}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow eyebrow-light">Latest Message</p>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl">
                {s.title}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.88rem] text-white/60">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                  {s.speaker}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-400" />
                  {s.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-400" />
                  {s.duration}
                </span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 text-pretty text-[1.05rem] leading-relaxed text-white/75">
                {s.description}
              </p>
            </Reveal>

            <Reveal delay={290}>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button
                  href={hasVideo ? s.videoUrl : '/sermons'}
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Watch Message
                </Button>
                <Button href="/sermons" variant="light" size="lg" className="w-full sm:w-auto">
                  View All Sermons
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
