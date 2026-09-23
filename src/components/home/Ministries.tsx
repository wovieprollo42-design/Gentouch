import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { MinistryCard } from '@/components/MinistryCard';
import { Button } from '@/components/Button';
import { ministries } from '@/data/content';

export function Ministries() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Ministries"
            title={
              <>
                There&rsquo;s a Place for <span className="text-brand-700">You</span> Here.
              </>
            }
            description="Whatever your age or season, there is a room with your name on it and people already glad you came."
            className="max-w-xl"
          />

          <Reveal delay={200}>
            <Button href="/ministry" variant="outline" className="shrink-0">
              Explore All Ministries
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ministries.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 90}>
              <MinistryCard ministry={m} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
