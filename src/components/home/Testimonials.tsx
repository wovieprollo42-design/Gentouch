import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="ridges pointer-events-none absolute -right-32 top-1/3 h-[500px] w-[500px] [--rx:50%] [--ry:50%] opacity-60 mask-radial"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Testimonials"
          align="center"
          title="Stories of Changed Lives"
          description="The best thing about GenTouch is not the building or the music. It is what God is doing in ordinary people."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 110}>
              <TestimonialCard testimonial={t} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
