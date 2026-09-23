import Link from 'next/link';
import type { Ministry } from '@/data/content';
import { cn } from '@/lib/cn';
import { Photo } from './Photo';
import { ArrowRight } from './Icons';

export function MinistryCard({
  ministry,
  className,
}: {
  ministry: Ministry;
  className?: string;
}) {
  return (
    <Link
      href={`/ministry#${ministry.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-600 ease-premium hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift',
        className,
      )}
    >
      <Photo
        image={ministry.image}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        overlay="soft"
        className="aspect-[4/3] w-full"
        imgClassName="transition-transform duration-900 ease-premium group-hover:scale-[1.07]"
      />

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-800 backdrop-blur">
        {ministry.audience}
      </span>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink transition-colors duration-400 group-hover:text-brand-800">
          {ministry.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-muted">
          {ministry.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors duration-400 group-hover:text-accent-500">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-premium group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
