import Link from 'next/link';
import { contact, footerLinks, serviceTimes, site, socials } from '@/data/site';
import { isPlaceholderHref } from '@/lib/href';
import { Logo } from './Logo';
import { Facebook, Instagram, YouTube, MapPin, Phone, Mail, ArrowUpRight } from './Icons';

const socialIcons = { Facebook, Instagram, YouTube } as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div
        aria-hidden="true"
        className="ridges-light pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] [--rx:50%] [--ry:50%] opacity-50 mask-radial"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
      />

      <div className="container relative py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Identity */}
          <div className="lg:col-span-5">
            <Logo tone="light" size={52} showTagline />

            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
              {site.description}
            </p>

            <ul className="mt-8 space-y-3.5 text-[0.93rem]">
              <li className="flex gap-3.5">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <span className="text-white/70">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </li>
              <li className="flex gap-3.5">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <span className="text-white/70">{contact.phone}</span>
              </li>
              <li className="flex gap-3.5">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <span className="text-white/70">{contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
              Quick Links
            </h2>
            <ul className="mt-6 space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[0.95rem] text-white/65 transition-colors duration-300 hover:text-brand-300"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service times */}
          <div className="lg:col-span-4">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
              Service Times
            </h2>
            <ul className="mt-6 space-y-4">
              {serviceTimes.map((s) => (
                <li
                  key={s.name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3.5"
                >
                  <span className="text-[0.95rem] text-white/75">{s.name}</span>
                  <span className="font-display text-[0.95rem] text-brand-300">{s.time}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-9 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
              Follow Along
            </h2>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                const cls =
                  'grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-400 ease-premium hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-300';

                // Social URLs are placeholders until the church supplies them.
                if (isPlaceholderHref(s.href)) {
                  return (
                    <li key={s.name}>
                      <span
                        role="link"
                        aria-disabled="true"
                        aria-label={`${site.name} on ${s.name} — link not configured yet`}
                        className={`${cls} cursor-not-allowed opacity-60`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${site.name} on ${s.name}`}
                      className={cls}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.82rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.name}. All Rights Reserved.</p>
          <p className="font-display italic text-white/40">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
