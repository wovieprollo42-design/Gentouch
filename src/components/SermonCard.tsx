import type { Sermon } from '@/data/content';
import { cn } from '@/lib/cn';
import { Photo } from './Photo';
import { Play, ArrowRight } from './Icons';

export function SermonCard({ sermon, className }: { sermon: Sermon; className?: string }) {
  const isLink = /^https?:/.test(sermon.videoUrl);

  const body = (
    <>
      <div className="relative">
        <Photo
          image={sermon.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          overlay="soft"
          className="aspect-video w-full"
          imgClassName="transition-transform duration-900 ease-premium group-hover:scale-[1.06]"
        />

        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-800 shadow-lift backdrop-blur transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white">
            <Play className="h-5 w-5 translate-x-[1px]" />
          </span>
        </span>

        <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
          {sermon.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-brand-700">
          <span>{sermon.series}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent-500" />
          <span className="text-ink-faint">{sermon.date}</span>
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.015em] text-ink transition-colors duration-400 group-hover:text-brand-800">
          {sermon.title}
        </h3>

        <p className="mt-2.5 text-[0.85rem] text-ink-faint">{sermon.speaker}</p>

        <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-ink-muted">
          {sermon.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors duration-400 group-hover:text-accent-500">
          Watch Message
          <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-premium group-hover:translate-x-1.5" />
        </span>
      </div>
    </>
  );

  const classes = cn(
    'group flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift',
    className,
  );

  if (isLink) {
    return (
      <a href={sermon.videoUrl} target="_blank" rel="noreferrer noopener" className={classes}>
        {body}
      </a>
    );
  }

  /* Video URL is still a placeholder — render as a non-navigating card. */
  return <article className={classes}>{body}</article>;
}
