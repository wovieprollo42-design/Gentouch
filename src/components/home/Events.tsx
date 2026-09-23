import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { EventCard } from '@/components/EventCard';
import { Button } from '@/components/Button';
import { events } from '@/data/content';

export function Events() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="ridges pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Upcoming Events"
          align="center"
          title="Come and be part of it."
          description="There is always something happening at GenTouch. Find a date, bring a friend, and make a memory with your church family."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {events.slice(0, 3).map((e, i) => (
            <Reveal key={e.slug} delay={i * 110}>
              <EventCard event={e} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-12 flex justify-center">
            <Button href="/events" variant="primary" size="lg">
              View All Events
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
