'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { ChevronDown } from './Icons';

type Item = { q: string; a: string };

export function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-soft">
      <ul className="divide-y divide-black/5">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-400 hover:bg-canvas/70 sm:px-8 sm:py-6"
                >
                  <span
                    className={cn(
                      'text-[1.05rem] font-semibold tracking-[-0.01em] transition-colors duration-400',
                      isOpen ? 'text-brand-800' : 'text-ink',
                    )}
                  >
                    {item.q}
                  </span>

                  <span
                    className={cn(
                      'grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-premium',
                      isOpen
                        ? 'rotate-180 border-brand-700 bg-brand-700 text-white'
                        : 'border-black/10 text-ink-muted',
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </h3>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                // A `hidden` attribute would lose to the display utility below,
                // so visibility is driven by the class instead.
                aria-hidden={!isOpen}
                className={cn(
                  'px-6 pb-6 sm:px-8 sm:pb-7',
                  isOpen ? 'block' : 'hidden',
                )}
              >
                <p className="max-w-2xl text-[0.97rem] leading-relaxed text-ink-muted">{item.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
