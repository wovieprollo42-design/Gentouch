import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { ArrowRight, Users, HandHeart, Heart, Check } from '@/components/Icons';
import { images } from '@/data/images';
import { connectSteps, ministries } from '@/data/content';

export const metadata: Metadata = {
  title: 'Get Connected',
  description:
    'Join a small group, serve on a team, request prayer or become a member. Your next step at GenTouch starts here.',
  alternates: { canonical: '/connect' },
};

const serveTeams = [
  'Welcome & hospitality',
  'Kids ministry',
  'Youth ministry',
  'Worship & music',
  'Sound, lighting & media',
  'Car park & safety',
  'Prayer team',
  'Outreach & community care',
];

const membershipSteps = [
  {
    title: 'Attend a membership class',
    body: 'A short session covering who we are, what we believe and what membership means. [Dates to be confirmed.]',
  },
  {
    title: 'Meet with a leader',
    body: 'An unhurried conversation about your story, your questions and where you would like to grow.',
  },
  {
    title: 'Be welcomed in',
    body: 'We celebrate new members as a church family and help you find your place on a team or in a group.',
  },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Connected"
        title={
          <>
            You Don&rsquo;t Have to Do Life <span className="text-brand-300">Alone.</span>
          </>
        }
        description="Five simple next steps. Pick the one that fits where you are right now — every single one leads to a real person."
        image={images.welcomePrimary}
      />

      {/* Steps */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {connectSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 100}>
                <Link
                  href={step.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-canvas/70 p-8 transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:bg-white hover:shadow-lift"
                >
                  <div
                    aria-hidden="true"
                    className="ridges-brand pointer-events-none absolute -right-16 -top-16 h-56 w-56 [--rx:50%] [--ry:50%] opacity-0 transition-opacity duration-700 ease-premium mask-radial group-hover:opacity-100"
                  />
                  <span className="relative font-display text-[0.9rem] font-semibold text-accent-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="relative mt-4 text-xl font-semibold tracking-[-0.015em] text-ink transition-colors duration-400 group-hover:text-brand-800">
                    {step.title}
                  </h2>
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

      {/* Small groups */}
      <section id="small-groups" className="relative scroll-mt-28 overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Small Groups"
                title="Church gets personal in a living room."
                description="Sunday is where we gather. Small groups are where we are actually known. Groups meet across the city through the week — study, food, prayer and honest conversation."
              >
                <Button href="/contact?topic=small-group" variant="primary">
                  Find a group
                </Button>
              </SectionHeading>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="rounded-[2rem] border border-black/[0.06] bg-white p-8 shadow-soft lg:p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Users className="h-6 w-6" />
                  </span>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-ink">
                    What a group looks like
                  </h3>

                  <ul className="mt-6 space-y-3.5">
                    {[
                      'Eight to twelve people, meeting in a home or at the church.',
                      'A shared meal or coffee, every single time.',
                      'A short study from Scripture and space for real questions.',
                      'Prayer for whatever the week has handed you.',
                      'A group that serves the community together a few times a year.',
                    ].map((line) => (
                      <li key={line} className="flex gap-3.5">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-800">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-ink-muted">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 rounded-2xl bg-canvas p-5 text-[0.9rem] leading-relaxed text-ink-muted">
                    <strong className="font-semibold text-ink">Meeting days and locations:</strong>{' '}
                    [Group schedule to be confirmed.] Tell us the night that works for you and we
                    will match you to a group nearby.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Serve */}
      <section id="serve" className="relative scroll-mt-28 bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Serve With Us"
            align="center"
            title="Your gift was never meant to stay idle."
            description="No experience required and no long commitment to sign. Try a team for a month and see how it fits."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serveTeams.map((team, i) => (
              <Reveal key={team} delay={(i % 4) * 80}>
                <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-black/[0.06] bg-canvas/60 p-5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                    <HandHeart className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[0.93rem] font-medium text-ink-soft">{team}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex justify-center">
              <Button href="/contact?topic=serve" variant="accent" size="lg">
                Start serving
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="relative scroll-mt-28 overflow-hidden bg-canvas py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Become a Member"
            title="From attending to belonging."
            description="Membership is not a formality. It is how you say this is my church family, and how we say we are for you."
          />

          <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            {membershipSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-semibold text-brand-100"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={220}>
            <div className="mt-12 flex justify-center">
              <Button href="/contact?topic=membership" variant="primary" size="lg">
                Ask about membership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ministry shortcut */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-brand-100 bg-brand-50/50 p-8 lg:flex-row lg:items-center lg:p-10">
              <div className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-accent-500 shadow-soft">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.015em] text-ink">
                    Looking for a specific ministry?
                  </h2>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted">
                    All {ministries.length} of our ministries — kids, youth, young adults, men,
                    women, worship, groups and outreach — are listed with meeting times.
                  </p>
                </div>
              </div>
              <Button href="/ministry" variant="primary" className="shrink-0">
                View Ministries
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="One Step"
        title="Take the first step today."
        description="You do not need to do all five. Pick one, take it this week, and let us walk the rest of the way with you."
        primary={{ label: 'Plan Your Visit', href: '/plan-your-visit' }}
        secondary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
