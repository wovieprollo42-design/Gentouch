import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Welcome } from '@/components/home/Welcome';
import { Mission } from '@/components/home/Mission';
import { FeaturedSermon } from '@/components/home/FeaturedSermon';
import { Ministries } from '@/components/home/Ministries';
import { Events } from '@/components/home/Events';
import { GetConnected } from '@/components/home/GetConnected';
import { Impact } from '@/components/home/Impact';
import { Testimonials } from '@/components/home/Testimonials';
import { Giving } from '@/components/home/Giving';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'GenTouch — A Place to Belong. A Faith to Grow.',
  description:
    'Experience God. Build meaningful relationships. Grow in faith. Make a difference. Join us this Sunday at GenTouch.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Mission />
      <FeaturedSermon />
      <Ministries />
      <Events />
      <GetConnected />
      <Impact />
      <Testimonials />
      <Giving />
      <CTASection
        title="Your Next Step Starts Here."
        description="Whether you're exploring faith, looking for a church family, or ready to get involved, there's a place for you at GenTouch."
      />
    </>
  );
}
