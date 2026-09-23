import type { Testimonial } from '@/data/content';
import { cn } from '@/lib/cn';
import { Photo } from './Photo';
import { Quote } from './Icons';

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        'group relative flex h-full flex-col rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-600 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift sm:p-8',
        className,
      )}
    >
      <Quote className="h-7 w-7 text-brand-200 transition-colors duration-600 group-hover:text-brand-300" />

      <blockquote className="mt-5 flex-1 text-[1.02rem] leading-[1.65] text-ink-soft">
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-black/5 pt-6">
        <Photo
          image={testimonial.image}
          sizes="56px"
          className="h-12 w-12 shrink-0 rounded-full ring-2 ring-brand-100"
        />
        <div>
          <p className="text-[0.95rem] font-semibold text-ink">{testimonial.name}</p>
          <p className="text-[0.8rem] text-ink-faint">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
