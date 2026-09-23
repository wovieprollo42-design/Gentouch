import type { SVGProps } from 'react';

/**
 * A single, consistent line-icon set drawn at a 24px grid with a 1.6 stroke.
 * Deliberately hand-rolled so the whole site shares one icon language
 * (and so no icon library ships to the browser).
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
);

export const Play = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M8.4 5.2a1 1 0 0 1 1.52-.85l8.2 5.02a1.4 1.4 0 0 1 0 2.39l-8.2 5.02A1 1 0 0 1 8.4 15.9Z" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10.5c0 5.3-6.2 10.2-7.6 11.2a.7.7 0 0 1-.8 0C10.2 20.7 4 15.8 4 10.5a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.7" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.4V12l3.1 1.9" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.3 3.6h3l1.5 3.8-1.9 1.2a11.4 11.4 0 0 0 5.5 5.5l1.2-1.9 3.8 1.5v3a1.7 1.7 0 0 1-1.9 1.7A15.6 15.6 0 0 1 4.6 5.5a1.7 1.7 0 0 1 1.7-1.9Z" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5.2" width="18" height="13.6" rx="2.4" />
    <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
  </Base>
);

export const Calendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.4" y="5" width="17.2" height="15.6" rx="2.6" />
    <path d="M3.4 9.8h17.2M8.3 3v3.6M15.7 3v3.6" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Base>
);

export const BookOpen = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 6.7C10.4 5.3 8.3 4.6 5.4 4.6a1.4 1.4 0 0 0-1.4 1.4v11a1.4 1.4 0 0 0 1.4 1.4c2.9 0 5 .7 6.6 2.1 1.6-1.4 3.7-2.1 6.6-2.1a1.4 1.4 0 0 0 1.4-1.4V6a1.4 1.4 0 0 0-1.4-1.4c-2.9 0-5 .7-6.6 2.1Z" />
    <path d="M12 6.7v13.8" />
  </Base>
);

export const Heart = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20.2S3.8 15.4 3.8 9.7a4.6 4.6 0 0 1 8.2-2.9 4.6 4.6 0 0 1 8.2 2.9c0 5.7-8.2 10.5-8.2 10.5Z" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9.4" cy="8.2" r="3.4" />
    <path d="M3.2 19.6a6.4 6.4 0 0 1 12.4 0" />
    <path d="M16.4 5.3a3.4 3.4 0 0 1 0 6.6M17.6 14.1a6.4 6.4 0 0 1 3.2 5.5" />
  </Base>
);

export const Compass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="m15.4 8.6-1.9 4.9-4.9 1.9 1.9-4.9Z" />
  </Base>
);

export const Sunrise = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.4v2.8M5.2 7.2l2 2M18.8 7.2l-2 2M2.8 16.4h2.6M18.6 16.4h2.6M3.4 20.4h17.2" />
    <path d="M7.4 16.4a4.6 4.6 0 0 1 9.2 0" />
  </Base>
);

export const HandHeart = (p: IconProps) => (
  <Base {...p}>
    <path d="M11.9 9.1 10 7.4a2.1 2.1 0 0 0-3 3l4.9 4.5 4.9-4.5a2.1 2.1 0 0 0-3-3Z" />
    <path d="M3.6 15.4 7 18.8a3 3 0 0 0 2.1.9h6.4a3 3 0 0 0 2.2-.9l2.7-2.8" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.6 4.4 4.4L19 7.4" />
  </Base>
);

export const Car = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 15.4h16M5.8 15.4v2.4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6l2.3-4.6a2 2 0 0 1 1.8-1.1h9.8a2 2 0 0 1 1.8 1.1L21 11.8v6a1 1 0 0 1-1 1h-.8a1 1 0 0 1-1-1v-2.4" />
    <path d="M3 11.8h18M7 8.6h10" />
  </Base>
);

export const Shirt = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3.6 4 6.2l1.6 4 2-.8v9.4a1.6 1.6 0 0 0 1.6 1.6h5.6a1.6 1.6 0 0 0 1.6-1.6V9.4l2 .8 1.6-4-5-2.6a3.2 3.2 0 0 1-6.4 0Z" />
  </Base>
);

export const Accessibility = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="4.6" r="1.8" />
    <path d="M7 9.2c3.3 1.1 6.7 1.1 10 0" />
    <path d="M12 8.4v5.2h3.2l2.4 5.4" />
    <path d="M12 13.6H9.4a3.6 3.6 0 1 0 2.4 6.3" />
  </Base>
);

export const Baby = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="11.4" r="7.6" />
    <path d="M9.4 9.8h.01M14.6 9.8h.01" />
    <path d="M9.6 14.4a3.6 3.6 0 0 0 4.8 0" />
  </Base>
);

export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M9.2 5.4c-3.3 1.5-5.2 4.3-5.2 7.9 0 3.1 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.3 0-.6 0-.8.1.3-1.7 1.6-3.2 3.4-4.1Zm9.4 0c-3.3 1.5-5.2 4.3-5.2 7.9 0 3.1 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.3 0-.6 0-.8.1.3-1.7 1.6-3.2 3.4-4.1Z" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
    <circle cx="12" cy="12" r="3.9" />
    <path d="M16.9 7.1h.01" />
  </Base>
);

export const YouTube = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M21.6 7.6a2.5 2.5 0 0 0-1.75-1.77C18.3 5.4 12 5.4 12 5.4s-6.3 0-7.85.43A2.5 2.5 0 0 0 2.4 7.6 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .4 4.4 2.5 2.5 0 0 0 1.75 1.77c1.55.43 7.85.43 7.85.43s6.3 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.4-4.4ZM10.2 15V9l5.1 3Z" />
  </svg>
);
