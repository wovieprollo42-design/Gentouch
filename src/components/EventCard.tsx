import Link from 'next/link';
import type { ChurchEvent } from '@/data/content';
import { cn } from '@/lib/cn';
import { Clock, MapPin, ArrowRight } from './Icons';

export function EventCard({ event, className }: { event: ChurchEvent; className?: string }) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift sm:p-7',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="ridges-brand pointer-events-none absolute -right-16 -top-16 h-52 w-52 [--rx:50%] [--ry:50%] opacity-0 transition-opacity duration-600 ease-premium mask-radial group-hover:opacity-100"
      />

      <div className="relative flex items-start gap-5">
        {/* Date block */}
        <div className="grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-800 px-4 py-3 text-white shadow-soft">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-brand-200">
            {event.month}
          </span>
          <span className="font-display text-2xl font-semibold leading-none">{event.day}</span>
        </div>

        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
            {event.category}
          </span>
          <h3 className="mt-2.5 text-lg font-semibold tracking-[-0.015em] text-ink sm:text-xl">
            {event.title}
          </h3>
        </div>
      </div>

      <p className="relative mt-5 flex-1 text-[0.92rem] leading-relaxed text-ink-muted">
        {event.description}
      </p>

      <dl className="relative mt-6 space-y-2.5 border-t border-black/5 pt-5 text-[0.85rem] text-ink-soft">
        <div className="flex items-center gap-2.5">
          <dt className="sr-only">Time</dt>
          <Clock className="h-4 w-4 shrink-0 text-brand-600" />
          <dd>{event.time}</dd>
        </div>
        <div className="flex items-center gap-2.5">
          <dt className="sr-only">Location</dt>
          <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
          <dd>{event.location}</dd>
        </div>
      </dl>

      <Link
        href={`/events#${event.slug}`}
        className="relative mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors duration-400 hover:text-accent-500"
      >
        Event Details
        <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-premium group-hover:translate-x-1.5" />
      </Link>
    </article>
  );
}
