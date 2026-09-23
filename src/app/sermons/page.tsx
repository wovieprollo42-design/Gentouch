import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { SermonCard } from '@/components/SermonCard';
import { CTASection } from '@/components/CTASection';
import { Play, Calendar, Clock, YouTube } from '@/components/Icons';
import { images } from '@/data/images';
import { featuredSermon, sermons } from '@/data/content';
import { socials } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Watch the latest message from GenTouch and catch up on past teaching, any time, wherever you are.',
  alternates: { canonical: '/sermons' },
};

export default function SermonsPage() {
  const s = featuredSermon;
  const hasVideo = /^https?:/.test(s.videoUrl);
  const youtube = socials.find((x) => x.name === 'YouTube');

  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title={
          <>
            Teaching that meets you <span className="text-brand-300">where you are.</span>
          </>
        }
        description="Missed a Sunday, or want to sit with a message again? Every service is here, free and open to everyone."
        image={images.sermonThumb}
      />

      {/* Latest message */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="group relative overflow-hidden rounded-[2rem] shadow-lift">
                  <Photo
                    image={s.image}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    overlay="soft"
                    className="aspect-video w-full"
                    imgClassName="transition-transform duration-900 ease-premium group-hover:scale-[1.05]"
                  />
                  <a
                    href={hasVideo ? s.videoUrl : '#all'}
                    target={hasVideo ? '_blank' : undefined}
                    rel={hasVideo ? 'noreferrer noopener' : undefined}
                    aria-label={`Watch ${s.title}`}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 text-brand-800 shadow-lift transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white sm:h-24 sm:w-24">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 animate-pulse-ring rounded-full border border-white/70"
                      />
                      <Play className="h-7 w-7 translate-x-[2px] sm:h-8 sm:w-8" />
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Latest Message"
                title={s.title}
                description={s.description}
              />

              <Reveal delay={260}>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.88rem] text-ink-muted">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                    {s.speaker}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-600" />
                    {s.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-600" />
                    {s.duration}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <Button href={hasVideo ? s.videoUrl : '#all'} variant="accent">
                    Watch Message
                  </Button>
                  {youtube && (
                    <Button href={youtube.href} variant="outline">
                      <YouTube className="h-4 w-4" />
                      Subscribe
                    </Button>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="all" className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <SectionHeading
            eyebrow="Message Archive"
            align="center"
            title="Every message, always available."
            description="Sermon video links have not been supplied yet. Add each message's URL in the sermon data file and these cards become live players."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {sermons.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 100}>
                <SermonCard sermon={item} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Better Together"
        title="A message is good. A church family is better."
        description="Watching online is a great place to start. When you are ready, there is a seat waiting for you in the room."
      />
    </>
  );
}
