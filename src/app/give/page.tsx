import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { HandHeart, Users, Sunrise, Mail, MapPin, Check } from '@/components/Icons';
import { images } from '@/data/images';
import { contact } from '@/data/site';

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Your generosity helps us reach people, serve our community, and share the message of hope. Give online to GenTouch.',
  alternates: { canonical: '/give' },
};

const impact = [
  {
    icon: Sunrise,
    title: 'Sunday gatherings',
    body: 'Worship, teaching and a welcoming space for everyone who walks through the door.',
  },
  {
    icon: Users,
    title: 'Kids, youth & groups',
    body: 'Safe, well-run ministries where the next generation grows and people find community.',
  },
  {
    icon: HandHeart,
    title: 'Community outreach',
    body: 'Meals, care and practical help for families in our neighbourhood who need it most.',
  },
];

const ways = [
  {
    title: 'Online',
    body: 'The simplest way to give, one-off or recurring, from any device.',
    detail: '[Online giving link to be provided.]',
  },
  {
    title: 'In person',
    body: 'Give during any weekend service at the giving box near the entrance.',
    detail: contact.addressLine1,
  },
  {
    title: 'Bank transfer',
    body: 'Set up a standing order directly with your bank.',
    detail: '[Bank account details to be provided.]',
  },
  {
    title: 'By post',
    body: 'Cheques can be posted to the church office.',
    detail: `${contact.addressLine1}, ${contact.addressLine2}`,
  },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Giving"
        title={
          <>
            Generosity Makes a <span className="text-brand-300">Difference.</span>
          </>
        }
        description="Your generosity helps us reach people, serve our community, and share the message of hope."
        image={images.impact}
      >
        <Button href="#ways" variant="accent" size="lg">
          Give Online
        </Button>
      </PageHero>

      {/* Heart behind giving */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <HandHeart className="h-7 w-7" />
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-8 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-4xl">
                Giving is a response, never a requirement.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-muted">
                If you are visiting GenTouch for the first time, please treat this page as
                information rather than an invitation. You are our guest. Giving is something our
                church family does together, freely and without pressure, because we believe what
                God is doing here is worth investing in.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
            {impact.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 110}>
                  <article className="group h-full rounded-3xl border border-black/[0.06] bg-canvas/60 p-8 transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-lift">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.015em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section id="ways" className="relative scroll-mt-28 overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -right-40 top-16 h-[540px] w-[540px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <SectionHeading
            eyebrow="Ways to Give"
            align="center"
            title="Four simple ways."
            description="Giving details have not been supplied yet. Add the church's online giving link and bank details, and every option below goes live."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100}>
                <article className="h-full rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-700 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[0.97rem] leading-relaxed text-ink-muted">{w.body}</p>
                  <p className="mt-5 rounded-2xl bg-canvas px-4 py-3 text-[0.88rem] text-ink-soft">
                    {w.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href="/contact?topic=giving" variant="primary" size="lg">
                Questions about giving
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stewardship */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-black/[0.06] bg-canvas/60 p-8 sm:p-10">
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-ink">
                How we handle what you give
              </h2>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-ink-muted">
                Every gift is handled with care and accountability. Annual financial statements are
                available to members on request, and our leadership is happy to answer any question
                about how funds are used.
              </p>

              <ul className="mt-7 space-y-3.5 text-[0.95rem] text-ink-soft">
                <li className="flex items-center gap-3">
                  <Mail className="h-[18px] w-[18px] shrink-0 text-brand-600" />
                  {contact.email}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-[18px] w-[18px] shrink-0 text-brand-600" />
                  {contact.address}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Thank You"
        title="Every gift becomes someone's story."
        description="Behind each number is a child in kids ministry, a family who received a meal, or a person who heard hope for the first time."
        primary={{ label: 'Plan Your Visit', href: '/plan-your-visit' }}
        secondary={{ label: 'Get Connected', href: '/connect' }}
      />
    </>
  );
}
