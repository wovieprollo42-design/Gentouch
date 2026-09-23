import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { images } from '@/data/images';

export function Welcome() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="ridges pointer-events-none absolute -left-32 top-24 h-[480px] w-[480px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image composition */}
          <div className="relative lg:col-span-6">
            <Reveal>
              <Photo
                image={images.welcomePrimary}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/5] w-full rounded-[2.5rem] shadow-lift sm:aspect-[5/5]"
                imgClassName="transition-transform duration-900 ease-premium hover:scale-[1.04]"
              />
            </Reveal>

            {/* Offsets live on the Reveal itself: its reveal transform would
                otherwise become the positioning context for these children. */}
            <Reveal
              delay={200}
              className="absolute -bottom-10 -right-2 w-[42%] max-w-[260px] sm:-right-8"
            >
              <Photo
                image={images.welcomeSecondary}
                sizes="(max-width: 640px) 45vw, 260px"
                className="aspect-square w-full rounded-[1.75rem] border-[6px] border-white shadow-lift"
              />
            </Reveal>

            {/* Anchor badge */}
            <Reveal delay={320} className="absolute -left-2 bottom-16 sm:-left-8">
              <div className="rounded-2xl bg-white p-5 shadow-lift">
                <p className="font-display text-3xl font-semibold text-brand-700">[00+]</p>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  Years serving
                  <br />
                  our community
                </p>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:pl-6">
            <Reveal>
              <p className="eyebrow">Welcome to GenTouch</p>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.07] tracking-[-0.03em] text-ink sm:text-5xl">
                More Than a Church.
                <span className="block text-brand-700">A Family Growing in Faith.</span>
              </h2>
            </Reveal>

            <Reveal delay={170}>
              <p className="lead mt-7 text-pretty">
                GenTouch is a community of ordinary people who have found something worth building a
                life around. Here you can encounter God honestly, discover the purpose he placed
                inside you, and build friendships that hold when life gets heavy.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <p className="mt-5 text-pretty text-[1.02rem] leading-relaxed text-ink-muted">
                You do not need to have it all figured out, and you will not be asked to pretend you
                do. Come as you are, ask the hard questions, and grow at your own pace &mdash;
                surrounded by people who are walking the same road.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button href="/about" variant="primary">
                  Our Story
                </Button>
                <Button href="/about#leaders" variant="outline">
                  Meet Our Leaders
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
