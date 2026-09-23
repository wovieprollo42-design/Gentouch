'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { navLinks, serviceTimes } from '@/data/site';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, Close, Clock, ArrowRight } from './Icons';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /** Solid bar once we leave the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /** Close the sheet on navigation. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /** Lock the page behind the mobile sheet, and allow Escape to dismiss it. */
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isHome = pathname === '/';
  /** Interior pages get a solid bar immediately — no dark hero behind them. */
  const solid = scrolled || !isHome || open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
          solid
            ? 'border-b border-black/[0.06] bg-white/90 shadow-[0_1px_24px_-12px_rgba(16,21,16,0.28)] backdrop-blur-xl'
            : 'border-b border-white/10 bg-transparent',
        )}
      >
        <div className="container">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500 ease-premium',
              solid ? 'h-[70px]' : 'h-[88px]',
            )}
          >
            <Logo tone={solid ? 'dark' : 'light'} size={solid ? 40 : 46} />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const active =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        data-active={active}
                        className={cn(
                          'nav-link',
                          solid
                            ? 'text-ink-soft hover:text-brand-800 data-[active=true]:text-brand-800'
                            : 'text-white/85 hover:text-white data-[active=true]:text-white',
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2.5">
              <Button
                href="/plan-your-visit"
                variant={solid ? 'accent' : 'light'}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Plan Your Visit
              </Button>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden',
                  solid
                    ? 'border-black/10 text-ink hover:border-brand-500 hover:text-brand-800'
                    : 'border-white/25 text-white hover:border-white/60',
                )}
              >
                {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity duration-400',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />

        <div
          className={cn(
            'absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-white pb-8 pt-[78px] shadow-lift transition-transform duration-500 ease-premium',
            open ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <div className="container">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-black/5">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'group flex items-center justify-between py-4 font-display text-[1.65rem] font-medium tracking-[-0.02em] transition-colors',
                          active ? 'text-brand-700' : 'text-ink hover:text-brand-700',
                        )}
                        style={{
                          animation: open
                            ? `slide-up-fade 0.45s cubic-bezier(0.22,1,0.36,1) ${i * 45 + 90}ms both`
                            : undefined,
                        }}
                      >
                        {link.label}
                        <ArrowRight className="h-5 w-5 -translate-x-2 text-brand-500 opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Button href="/plan-your-visit" variant="accent" size="lg" className="mt-7 w-full">
              Plan Your Visit
            </Button>

            <div className="mt-7 rounded-2xl bg-canvas p-5">
              <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-700">
                <Clock className="h-4 w-4" /> Join us this Sunday
              </p>
              <p className="mt-3 font-display text-lg text-ink">{serviceTimes[0].name}</p>
              <p className="text-sm text-ink-muted">{serviceTimes[0].time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
