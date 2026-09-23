import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { Clock, ArrowRight } from '@/components/Icons';
import { images } from '@/data/images';
import { ministries } from '@/data/content';

export const metadata: Metadata = {
  title: 'Ministries',
  description:
    'Kids, youth, young adults, men, women, worship, small groups and outreach — find where you belong at GenTouch.',
  alternates: { canonical: '/ministry' },
};

export default function MinistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title={
          <>
            There&rsquo;s a Place for <span className="text-brand-300">You</span> Here.
          </>
        }
        description="Eight ministries, one family. Whatever your age or season, there is a room with your name on it."
        image={images.ministries.groups}
      >
        <Button href="/connect" variant="accent" size="lg">
          Get Connected
        </Button>
        <Button href="/plan-your-visit" variant="light" size="lg">
          Plan Your Visit
        </Button>
      </PageHero>

      <section className="relative bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Find Your People"
            align="center"
            title="Every ministry exists for one reason: so nobody walks alone."
            description="Explore what runs through the week, then let us know which one you would like to try. We will introduce you personally."
          />

          <div className="mt-16 space-y-6 lg:space-y-8">
            {ministries.map((m, i) => (
              <Reveal key={m.slug} delay={60}>
                <article
                  id={m.slug}
                  className="group grid scroll-mt-28 overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-soft transition-all duration-600 ease-premium hover:border-brand-200 hover:shadow-lift lg:grid-cols-12"
                >
                  <div className={i % 2 === 1 ? 'lg:order-2 lg:col-span-5' : 'lg:col-span-5'}>
                    <Photo
                      image={m.image}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="aspect-[16/10] w-full lg:h-full lg:aspect-auto lg:min-h-[320px]"
                      imgClassName="transition-transform duration-900 ease-premium group-hover:scale-[1.05]"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center p-8 lg:col-span-7 lg:p-12 ${
                      i % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="inline-flex w-fit rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-800 ring-1 ring-brand-100">
                      {m.audience}
                    </span>

                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                      {m.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink-muted">
                      {m.description}
                    </p>

                    <p className="mt-6 flex items-center gap-2.5 text-[0.88rem] text-ink-soft">
                      <Clock className="h-4 w-4 shrink-0 text-brand-600" />
                      {m.meets}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3.5">
                      <Button href={`/contact?ministry=${m.slug}`} variant="primary" size="sm">
                        Get involved
                      </Button>
                      <a
                        href="/connect"
                        className="group/l inline-flex items-center gap-2 px-2 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors duration-400 hover:text-accent-500"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-premium group-hover/l:translate-x-1.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Take the Step"
        title="Not sure where you fit?"
        description="Tell us a little about yourself and we will point you toward the ministry that suits your season — or simply sit with you until you find it."
        primary={{ label: 'Get Connected', href: '/connect' }}
        secondary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
