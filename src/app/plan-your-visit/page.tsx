import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { Accordion } from '@/components/Accordion';
import { PlanVisitForm } from '@/components/PlanVisitForm';
import { CTASection } from '@/components/CTASection';
import {
  MapPin,
  Clock,
  Car,
  Shirt,
  Baby,
  Accessibility,
  Phone,
  Mail,
  Check,
} from '@/components/Icons';
import { images } from '@/data/images';
import { visitFaqs } from '@/data/content';
import { contact, serviceTimes } from '@/data/site';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description:
    'Everything a first-time visitor needs to know about GenTouch — service times, what to expect, parking, kids ministry and accessibility.',
  alternates: { canonical: '/plan-your-visit' },
};

const expectations = [
  {
    icon: Shirt,
    title: 'What should I wear?',
    body: 'Come as you are. Jeans, trainers, a shirt, a dress — all of it is welcome and none of it is noticed.',
  },
  {
    icon: Clock,
    title: 'How long is it?',
    body: 'About [00] minutes, including worship and the message. Stay for coffee afterwards if you can.',
  },
  {
    icon: Car,
    title: 'Where do I park?',
    body: '[Parking details to be confirmed.] Our team will be outside to help you find a space.',
  },
  {
    icon: Baby,
    title: 'What about my kids?',
    body: 'Kids Ministry runs during every service, with secure check-in and trained, background-checked volunteers.',
  },
  {
    icon: Accessibility,
    title: 'Is it accessible?',
    body: '[Accessibility details to be confirmed.] Tell us what you need and we will have it ready.',
  },
  {
    icon: MapPin,
    title: 'Where are you?',
    body: `${contact.addressLine1}, ${contact.addressLine2}. Directions are one tap away.`,
  },
];

const arrival = [
  {
    step: 'Before you arrive',
    body: 'Fill in the form below and we will look out for you. If you are bringing children, we will have their check-in ready in advance.',
  },
  {
    step: 'When you pull in',
    body: 'Our car park team will wave you into a visitor space near the main entrance so you are not hunting for a spot.',
  },
  {
    step: 'At the door',
    body: 'Someone from the welcome team will meet you by name, show you around and walk you to a seat if you would like.',
  },
  {
    step: 'During the service',
    body: 'Live worship, a message from the Bible and time to pray. We will never put a spotlight on guests or ask you to stand up.',
  },
  {
    step: 'Afterwards',
    body: 'Grab a coffee and stay as long as you like. If you have questions, our team will be in the foyer, glad to answer them.',
  },
];

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Your Visit"
        title={
          <>
            Your first Sunday, <span className="text-brand-300">made easy.</span>
          </>
        }
        description="Walking into a new church can feel like a lot. Here is exactly what happens, so nothing about your first visit is a surprise."
        image={images.planVisit}
      >
        <Button href="#visit-form" variant="accent" size="lg">
          I&rsquo;m Planning to Visit
        </Button>
        <Button href={contact.directionsUrl} variant="light" size="lg">
          Get Directions
        </Button>
      </PageHero>

      {/* Welcome + times */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Welcome"
                title="However you arrive, you are already welcome."
                description="You do not need to dress a certain way, know anyone, or have any church background at all. Bring your questions and your doubts — we would rather have you honest than impressive."
              />

              <Reveal delay={250}>
                <p className="mt-6 text-pretty text-[1.02rem] leading-relaxed text-ink-muted">
                  Our only hope for your first Sunday is that you leave feeling genuinely seen. No
                  pressure, no spotlight, no expectation to give or sign up for anything.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-canvas/60 shadow-soft">
                  <div className="border-b border-black/5 bg-white px-8 py-6">
                    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-700">
                      Service Times
                    </h2>
                  </div>

                  <ul className="divide-y divide-black/5">
                    {serviceTimes.map((s) => (
                      <li key={s.name} className="px-8 py-6">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                            {s.name}
                          </h3>
                          <span className="font-display text-lg text-brand-700">{s.time}</span>
                        </div>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-muted">
                          {s.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-black/5 bg-white px-8 py-6">
                    <p className="flex items-start gap-3 text-[0.93rem] leading-relaxed text-ink-soft">
                      <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-600" />
                      <span>
                        {contact.addressLine1}
                        <br />
                        {contact.addressLine2}
                      </span>
                    </p>
                    <Button
                      href={contact.directionsUrl}
                      variant="primary"
                      size="sm"
                      className="mt-5 w-full"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-white pb-24 lg:pb-28">
        <div className="container">
          <Reveal>
            {/*
              MAP PLACEHOLDER — no campus address has been supplied, so an
              embedded map would point at the wrong place. Once the address is
              confirmed, replace this block with a Google Maps <iframe> or a
              static map image.
            */}
            <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] shadow-soft">
              <Photo
                image={images.planVisit}
                sizes="100vw"
                overlay="brand"
                className="aspect-[21/9] w-full max-sm:aspect-[4/3]"
              />
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/95 text-brand-800 shadow-lift">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="mt-6 font-display text-2xl text-white">Find us here</p>
                  <p className="mt-2 text-[0.95rem] text-white/75">
                    {contact.addressLine1}, {contact.addressLine2}
                  </p>
                  <Button
                    href={contact.directionsUrl}
                    variant="light"
                    size="sm"
                    className="mt-7"
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -right-40 top-16 h-[540px] w-[540px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <SectionHeading
            eyebrow="What to Expect"
            align="center"
            title="No surprises, we promise."
            description="The six questions first-time visitors ask us most, answered before you have to ask."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {expectations.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.title} delay={(i % 3) * 100}>
                  <article className="group h-full rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.015em] text-ink">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-muted">{e.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Arrival walkthrough */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Your Sunday, Step by Step"
                title="From the car park to the coffee."
                description="Here is the whole morning, start to finish, so you know exactly what you are walking into."
              />
            </div>

            <div className="lg:col-span-7">
              <ol className="relative space-y-8 border-l border-brand-100 pl-8">
                {arrival.map((a, i) => (
                  <Reveal key={a.step} delay={i * 90} as="li" className="relative">
                    {/* The list item is the positioning context, so the marker
                        sits on the rail 2rem to its left. */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-11 top-1 grid h-6 w-6 place-items-center rounded-full border-4 border-white bg-brand-700 text-white shadow-soft"
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                      {a.step}
                    </h3>
                    <p className="mt-2.5 text-[0.97rem] leading-relaxed text-ink-muted">
                      {a.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            align="center"
            title="Everything else you might be wondering."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <Reveal>
              <Accordion items={visitFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="visit-form" className="relative scroll-mt-28 bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Tell Us You're Coming"
                title="I'm Planning to Visit"
                description="Let us know which Sunday you are aiming for and we will have someone ready to meet you at the door by name."
              />

              <Reveal delay={240}>
                <div className="mt-10 rounded-[2rem] border border-black/[0.06] bg-canvas/60 p-7">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                    Prefer to talk to someone?
                  </p>
                  <ul className="mt-5 space-y-4 text-[0.95rem] text-ink-soft">
                    <li className="flex items-center gap-3">
                      <Phone className="h-[18px] w-[18px] shrink-0 text-brand-600" />
                      {contact.phone}
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-[18px] w-[18px] shrink-0 text-brand-600" />
                      {contact.email}
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-[18px] w-[18px] shrink-0 text-brand-600" />
                      {contact.officeHours}
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={160}>
                <div className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-lift sm:p-9">
                  <PlanVisitForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="See You Sunday"
        title="We'll be looking out for you."
        description="Whether it's this week or a month from now, the door is open and the coffee is on."
        primary={{ label: 'Get Directions', href: contact.directionsUrl }}
        secondary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
