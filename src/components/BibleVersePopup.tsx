'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { useVerseRotation } from '@/lib/useVerseRotation';
import { BIBLE_TRANSLATION, chapterUrl } from '@/data/verses';
import { BookOpen, Close, ArrowUpRight } from './Icons';

/**
 * A quiet Scripture card that rises from the corner. Deliberately small and
 * non-modal: it never covers the page, never traps focus and never blocks
 * what someone was doing.
 */
export function BibleVersePopup() {
  const { verse, open, openNow, close } = useVerseRotation();
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openedManually = useRef(false);

  useEffect(() => setMounted(true), []);

  /* Escape closes the card whenever it is showing. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  /* Move focus only when the visitor asked for the verse themselves. */
  useEffect(() => {
    if (open && openedManually.current) {
      closeRef.current?.focus();
      openedManually.current = false;
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      {/* Manual trigger */}
      <button
        type="button"
        onClick={() => {
          openedManually.current = true;
          openNow();
        }}
        aria-label="Show an encouraging Bible verse"
        className={cn(
          'group fixed bottom-5 right-5 z-30 grid place-items-center rounded-full bg-brand-700 text-white shadow-lift transition-all duration-500 ease-premium hover:-translate-y-1 hover:bg-brand-800 hover:shadow-glow sm:bottom-7 sm:right-7',
          open && 'pointer-events-none translate-y-3 opacity-0',
        )}
        style={{ height: 54, width: 54 }}
      >
        {/* Fingerprint-inspired ripple, borrowed from the mark */}
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-500/70"
        />
        <BookOpen className="relative h-[22px] w-[22px]" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white opacity-0 shadow-lift transition-all duration-400 ease-premium group-hover:opacity-100 max-sm:hidden">
          A Word For You
        </span>
      </button>

      {/* The verse card */}
      <div
        role="dialog"
        aria-label="A word for you"
        aria-hidden={!open}
        className={cn(
          'fixed bottom-4 left-4 right-4 z-50 transition-all duration-600 ease-premium sm:left-auto sm:right-7 sm:bottom-7 sm:w-[25rem]',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-6 opacity-0',
        )}
      >
        {verse && (
          <article className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-[#FCFDFA] shadow-[0_2px_8px_rgba(16,21,16,0.06),0_28px_60px_-24px_rgba(16,21,16,0.35)]">
            {/* Brand hairline */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500"
            />
            {/* Fingerprint ridge wash */}
            <div
              aria-hidden="true"
              className="ridges-brand pointer-events-none absolute -right-12 -top-12 h-48 w-48 [--rx:50%] [--ry:50%] opacity-70 mask-radial"
            />

            <div className="relative p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="flex items-center gap-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-700">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <BookOpen className="h-[17px] w-[17px]" />
                  </span>
                  A Word For You
                </p>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close verse"
                  className="-mr-1.5 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-faint transition-colors duration-300 hover:bg-accent-50 hover:text-accent-600"
                >
                  <Close className="h-[18px] w-[18px]" />
                </button>
              </div>

              <blockquote className="mt-5">
                <p className="font-display text-[1.18rem] leading-[1.58] text-ink-soft">
                  <span aria-hidden="true" className="text-brand-400">&ldquo;</span>
                  {verse.text}
                  <span aria-hidden="true" className="text-brand-400">&rdquo;</span>
                </p>

                <footer className="mt-4 flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-4 w-[3px] rounded-full bg-accent-500" />
                  <cite className="not-italic">
                    <span className="text-[0.95rem] font-semibold text-brand-800">
                      {verse.reference}
                    </span>
                    <span className="ml-2 text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
                      {BIBLE_TRANSLATION.abbreviation}
                    </span>
                  </cite>
                </footer>
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
                <a
                  href={chapterUrl(verse)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-400 ease-premium hover:bg-brand-800"
                >
                  Read Full Chapter
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 ease-premium group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={close}
                  className="rounded-full px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-faint transition-colors duration-300 hover:text-ink"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </article>
        )}
      </div>
    </>
  );
}
