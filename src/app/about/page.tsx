import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { Sunrise, Users, Compass, BookOpen, Heart, HandHeart } from '@/components/Icons';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Our story, what we believe and the people who lead GenTouch — a church family growing in faith together.',
  alternates: { canonical: '/about' },
};

const beliefs = [
  {
    icon: BookOpen,
    title: 'Scripture',
    body: 'We believe the Bible is God’s word to us — trustworthy, living, and the foundation of everything we teach.',
  },
  {
    icon: Heart,
    title: 'Grace',
    body: 'We believe people are welcomed by grace, not by performance. Nobody has to earn their place here.',
  },
  {
    icon: Users,
    title: 'Community',
    body: 'We believe faith grows best in relationship, which is why small groups sit at the centre of church life.',
  },
  {
    icon: HandHeart,
    title: 'Service',
    body: 'We believe the church exists for the people outside it as much as the people inside it.',
  },
];

const values = [
  {
    icon: Sunrise,
    title: 'Know God',
    body: 'Honest teaching and unhurried worship that helps people meet God for themselves.',
  },
  {
    icon: Users,
    title: 'Find Community',
    body: 'Real relationships where people are known by name and carried when it counts.',
  },
  {
    icon: Compass,
    title: 'Live With Purpose',
    body: 'Helping every person find their gift and put it to work in the world.',
  },
];

/**
 * PLACEHOLDER LEADERSHIP — no names, roles or bios have been provided.
 * Replace each entry with the real leader, their role and a short bio.
 */
const leaders = [
  { name: '[Leader Name]', role: '[Role / Title]', bio: '[Short bio — a sentence or two.]' },
  { name: '[Leader Name]', role: '[Role / Title]', bio: '[Short bio — a sentence or two.]' },
  { name: '[Leader Name]', role: '[Role / Title]', bio: '[Short bio — a sentence or two.]' },
  { name: '[Leader Name]', role: '[Role / Title]', bio: '[Short bio — a sentence or two.]' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GenTouch"
        title={
          <>
            A church built on <span className="text-brand-300">belonging.</span>
          </>
        }
        description="We are an ordinary group of people who believe God is still in the business of changing lives — starting with ours."
        image={images.story}
      />

      {/* Story */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Photo
                  image={images.fellowship}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[4/3] w-full rounded-[2.5rem] shadow-lift"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:pl-4">
              <SectionHeading
                eyebrow="Our Story"
                title="It started with a handful of people and a simple conviction."
                description="GenTouch began because a small group believed their city deserved a church where questions were welcome, doors stayed open and nobody sat alone."
              />

              <Reveal delay={260}>
                <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-ink-muted">
                  <p>
                    [Church history placeholder — when GenTouch was founded, who planted it, and
                    the story of the early years.]
                  </p>
                  <p>
                    Since then we have grown, but the conviction has not moved. Every service,
                    group and outreach still exists to help people meet God and find their place in
                    his family.
                  </p>
                  <p className="font-display text-lg italic text-brand-800">
                    There&rsquo;s a Nation Inside of You.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -right-40 top-10 h-[540px] w-[540px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <SectionHeading
            eyebrow="Our Mission"
            align="center"
            title="Know God. Find Community. Live With Purpose."
            description="Three commitments that shape how we gather, how we grow and how we serve."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 110}>
                  <article className="group h-full rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-500 ease-premium group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{v.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="What We Believe"
            title="Convictions we hold, simply put."
            description="The full statement of faith is available on request from the church office."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {beliefs.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 2) * 100}>
                  <article className="flex h-full gap-5 rounded-3xl border border-black/[0.06] bg-canvas/60 p-7 transition-all duration-600 ease-premium hover:border-brand-200 hover:bg-white hover:shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                        {b.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
                        {b.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section id="leaders" className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Our Leaders"
            align="center"
            title="Meet the team."
            description="Real people you can talk to on a Sunday. Leadership details have not been supplied yet — the placeholders below are ready for their names, roles and photos."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {leaders.map((l, i) => (
              <Reveal key={i} delay={(i % 4) * 90}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift">
                  {/* Portrait placeholder — swap for a real photo */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-ink">
                    <div
                      aria-hidden="true"
                      className="ridges-light absolute inset-0 [--rx:50%] [--ry:40%] opacity-70"
                    />
                    <span className="absolute inset-0 grid place-items-center font-display text-5xl text-white/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{l.name}</h3>
                    <p className="mt-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.13em] text-brand-700">
                      {l.role}
                    </p>
                    <p className="mt-3.5 text-[0.92rem] leading-relaxed text-ink-muted">{l.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex justify-center">
              <Button href="/contact" variant="outline" size="lg">
                Contact the team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Come and See"
        title="The best way to know us is to join us."
        description="Reading about a church only gets you so far. Pick a Sunday, walk in, and let us meet you properly."
      />
    </>
  );
}
