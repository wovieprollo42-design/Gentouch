'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { verses, type Verse } from '@/data/verses';

/** How long a visitor must be actively browsing before a verse appears. */
export const VERSE_INTERVAL_MS = 5 * 60 * 1000;

const SEEN_KEY = 'gentouch:verses-seen';
const TICK_MS = 1000;

function readSeen(): string[] {
  try {
    const raw = sessionStorage.getItem(SEEN_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeSeen(ids: string[]) {
  try {
    sessionStorage.setItem(SEEN_KEY, JSON.stringify(ids));
  } catch {
    /* Private mode or storage disabled — rotation still works in memory. */
  }
}

/** True while the visitor is typing into a field, so we never interrupt them. */
function isBusyTyping() {
  const el = document.activeElement as HTMLElement | null;
  if (!el) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

/**
 * Drives the Scripture rotation.
 *
 * - Counts only *active* time: the clock is paused whenever the browser tab is
 *   hidden and resumes on return.
 * - The first verse is never immediate; it waits a full interval.
 * - Verses are drawn without repeats until the whole collection has been seen,
 *   then the pool reshuffles. Seen ids live in sessionStorage, so a refresh
 *   keeps the no-repeat promise while the timer itself starts over.
 */
export function useVerseRotation() {
  const [current, setCurrent] = useState<Verse | null>(null);
  const [open, setOpen] = useState(false);

  /** Accumulated active milliseconds since the last verse was dismissed. */
  const elapsed = useRef(0);
  const seen = useRef<string[]>([]);
  const suppressUntil = useRef(0);
  const ready = useRef(false);

  useEffect(() => {
    seen.current = readSeen();
    ready.current = true;
  }, []);

  /** Picks an unseen verse, reshuffling once the collection is exhausted. */
  const nextVerse = useCallback((): Verse => {
    let pool = verses.filter((v) => !seen.current.includes(v.id));

    if (pool.length === 0) {
      seen.current = [];
      pool = verses;
    }

    const choice = pool[Math.floor(Math.random() * pool.length)];
    seen.current = [...seen.current, choice.id];
    writeSeen(seen.current);
    return choice;
  }, []);

  /** Manual open from the floating button — no waiting required. */
  const openNow = useCallback(() => {
    setCurrent(nextVerse());
    setOpen(true);
    elapsed.current = 0;
  }, [nextVerse]);

  const close = useCallback(() => {
    setOpen(false);
    elapsed.current = 0;
  }, []);

  /* Never surface a verse in the middle of a form submission. */
  useEffect(() => {
    const onSubmit = () => {
      suppressUntil.current = Date.now() + 20_000;
    };
    document.addEventListener('submit', onSubmit, true);
    return () => document.removeEventListener('submit', onSubmit, true);
  }, []);

  /* The active-time clock. */
  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return; // paused while away
      if (open) return; // don't stack a second verse on an open one

      elapsed.current += TICK_MS;
      if (elapsed.current < VERSE_INTERVAL_MS) return;

      // Time is up — but wait for a polite moment.
      if (isBusyTyping() || Date.now() < suppressUntil.current) return;

      setCurrent(nextVerse());
      setOpen(true);
      elapsed.current = 0;
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [open, nextVerse]);

  return useMemo(
    () => ({ verse: current, open, openNow, close }),
    [current, open, openNow, close],
  );
}
