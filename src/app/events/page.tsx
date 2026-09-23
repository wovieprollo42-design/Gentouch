import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { EventCard } from '@/components/EventCard';
import { CTASection } from '@/components/CTASection';
import { Clock, MapPin, Calendar } from '@/components/Icons';
import { images } from '@/data/images';
import { events } from '@/data/content';
import { serviceTimes } from '@/data/site';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Worship nights, serve days, baptisms and family gatherings — see what is coming up at GenTouch.',
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            Come and be <span className="text-brand-300">part of it.</span>
          </>
        }
        description="There is always something happening at GenTouch. Find a date, bring a friend, and make a memory with your church family."
        image={images.fellowship}
      />

      {/* Weekly rhythm */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Every Week"
            title="Our weekly rhythm."
            description="Before anything on the calendar, there is the steady beat of gathering together."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
            {serviceTimes.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <article className="group h-full rounded-3xl border border-black/[0.06] bg-canvas/60 p-7 transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 font-display text-lg text-brand-700">{s.time}</p>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-muted">{s.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="ridges pointer-events-none absolute -right-40 top-20 h-[540px] w-[540px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
        />
        <div className="container relative">
          <SectionHeading
            eyebrow="Upcoming Events"
            align="center"
            title="What's coming up."
            description="Event dates, times and locations have not been supplied yet. Add them in the events data file and this calendar updates everywhere it appears."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {events.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 100}>
                <EventCard event={e} className="h-full scroll-mt-28" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detail list */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="At a Glance" title="The full schedule." />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/[0.06] shadow-soft">
            <ul className="divide-y divide-black/5">
              {events.map((e) => (
                <li
                  key={e.slug}
                  id={e.slug}
                  className="group flex scroll-mt-28 flex-col gap-4 bg-white p-6 transition-colors duration-400 hover:bg-canvas/70 sm:flex-row sm:items-center sm:justify-between sm:p-7"
                >
                  <div className="flex items-center gap-5">
                    <div className="grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-800 px-3.5 py-2.5 text-white">
                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-brand-200">
                        {e.month}
                      </span>
                      <span className="font-display text-xl font-semibold leading-none">
                        {e.day}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                        {e.title}
                      </h3>
                      <p className="mt-1 text-[0.85rem] text-ink-faint">{e.dateLabel}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-7 gap-y-2 text-[0.87rem] text-ink-soft sm:justify-end">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-600" />
                      {e.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-600" />
                      {e.location}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="See You There"
        title="Bring someone with you."
        description="Events are the easiest doorway into church life — especially for a friend who would never walk into a Sunday service first."
        primary={{ label: 'Plan Your Visit', href: '/plan-your-visit' }}
        secondary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
