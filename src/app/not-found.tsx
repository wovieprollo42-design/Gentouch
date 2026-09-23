import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/data/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_10%,rgba(47,125,0,0.45),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="ridges-light pointer-events-none absolute inset-0 [--rx:50%] [--ry:18%] opacity-50"
      />

      <div className="container relative py-32 text-center">
        <Logo tone="light" size={56} showWordmark={false} className="justify-center" />

        <p className="mt-10 font-display text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-brand-300">
          Error 404
        </p>

        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          This page seems to have wandered off.
        </h1>

        <p className="mx-auto mt-7 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
          The link may be old or the page may have moved. Everything else is right where you left
          it.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Button href="/" variant="accent" size="lg" className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button href="/contact" variant="light" size="lg" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>

        <nav aria-label="Site sections" className="mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link text-white/60 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
