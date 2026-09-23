import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/Button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, YouTube } from '@/components/Icons';
import { isPlaceholderHref } from '@/lib/href';
import { images } from '@/data/images';
import { contact, serviceTimes, socials, site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact & Prayer',
  description:
    'Get in touch with GenTouch, ask a question, or send a prayer request. Our team would love to hear from you.',
  alternates: { canonical: '/contact' },
};

const socialIcons = { Facebook, Instagram, YouTube } as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Prayer"
        title={
          <>
            We would love to <span className="text-brand-300">hear from you.</span>
          </>
        }
        description="A question, a prayer request, or just a hello — whatever it is, a real person on our team will read it and reply."
        image={images.planVisit}
      />

      <section id="prayer" className="relative scroll-mt-28 bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Send a Message"
                title="How can we help?"
                description="Prayer requests are treated confidentially and shared only with our prayer team."
              />

              <Reveal delay={220}>
                <div className="mt-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <div className="rounded-[2rem] border border-black/[0.06] bg-canvas/60 p-8 lg:p-9">
                  <h2 className="text-xl font-semibold tracking-[-0.015em] text-ink">
                    Church details
                  </h2>

                  <ul className="mt-7 space-y-6">
                    <li className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                        <MapPin className="h-[18px] w-[18px]" />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                          Address
                        </p>
                        <p className="mt-1.5 text-[0.97rem] leading-relaxed text-ink-soft">
                          {contact.addressLine1}
                          <br />
                          {contact.addressLine2}
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                        <Phone className="h-[18px] w-[18px]" />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                          Phone
                        </p>
                        <p className="mt-1.5 text-[0.97rem] text-ink-soft">{contact.phone}</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                        <Mail className="h-[18px] w-[18px]" />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                          Email
                        </p>
                        <p className="mt-1.5 text-[0.97rem] text-ink-soft">{contact.email}</p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                        <Clock className="h-[18px] w-[18px]" />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                          Office hours
                        </p>
                        <p className="mt-1.5 text-[0.97rem] text-ink-soft">{contact.officeHours}</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 border-t border-black/5 pt-7">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      Service times
                    </p>
                    <ul className="mt-4 space-y-3">
                      {serviceTimes.map((s) => (
                        <li key={s.name} className="flex items-baseline justify-between gap-4">
                          <span className="text-[0.95rem] text-ink-soft">{s.name}</span>
                          <span className="font-display text-[0.95rem] text-brand-700">
                            {s.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-black/5 pt-7">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      Follow along
                    </p>
                    <ul className="mt-4 flex gap-3">
                      {socials.map((s) => {
                        const Icon = socialIcons[s.name as keyof typeof socialIcons];
                        const cls =
                          'grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-ink-soft transition-all duration-400 ease-premium hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700';
                        const pending = isPlaceholderHref(s.href);

                        return (
                          <li key={s.name}>
                            {pending ? (
                              <span
                                role="link"
                                aria-disabled="true"
                                aria-label={`${site.name} on ${s.name} — link not configured yet`}
                                className={`${cls} cursor-not-allowed opacity-60`}
                              >
                                <Icon className="h-[18px] w-[18px]" />
                              </span>
                            ) : (
                              <a
                                href={s.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${site.name} on ${s.name}`}
                                className={cls}
                              >
                                <Icon className="h-[18px] w-[18px]" />
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Button
                    href={contact.directionsUrl}
                    variant="outline"
                    size="sm"
                    className="mt-8 w-full"
                  >
                    Get Directions
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Come and See"
        title="Some things are easier in person."
        description="If your question is really about whether you would fit here, the fastest answer is a Sunday morning. Let us know you are coming."
      />
    </>
  );
}
