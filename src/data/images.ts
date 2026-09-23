/**
 * GenTouch — image registry.
 *
 * PLACEHOLDER PHOTOGRAPHY. Every entry below points at a free stock photo so
 * the site reads as finished today. Swap each `src` for a real GenTouch photo
 * (drop files in /public/photos and use e.g. "/photos/hero.jpg") before launch.
 *
 * Every image renders through <Photo />, which paints a branded gradient +
 * fingerprint-ridge placeholder underneath. If a remote photo is unavailable
 * the layout stays intact and on-brand rather than breaking.
 */

export type Img = { src: string; alt: string };

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const images = {
  hero: {
    src: u('1438232992991-995b7058bbb3', 2000),
    alt: 'A congregation gathered together in worship',
  },
  welcomePrimary: {
    src: u('1511632765486-a01980e01a18', 1200),
    alt: 'Church members talking and laughing together after a service',
  },
  welcomeSecondary: {
    src: u('1529333166437-7750a6dd5a70', 900),
    alt: 'Hands raised during a time of worship',
  },
  sermonThumb: {
    src: u('1524178232363-1fb2b075b655', 1600),
    alt: 'A speaker teaching from the stage during a weekend service',
  },
  impact: {
    src: u('1593113646773-028c64a8f1b8', 2000),
    alt: 'Volunteers serving meals to families in the community',
  },
  planVisit: {
    src: u('1517486808906-6ca8b3f04846', 1600),
    alt: 'A welcoming church entrance on a Sunday morning',
  },
  story: {
    src: u('1490578474895-699cd4e2cf59', 1600),
    alt: 'The GenTouch sanctuary before a weekend gathering',
  },
  fellowship: {
    src: u('1521737604893-d14cc237f11d', 1600),
    alt: 'A shared meal around a long table after church',
  },
  ministries: {
    kids: { src: u('1509099836639-18ba1795216d', 900), alt: 'Children learning and playing in kids ministry' },
    youth: { src: u('1529156069898-49953e39b3ac', 900), alt: 'Teenagers gathered together at a youth night' },
    youngAdults: { src: u('1543269865-cbf427effbad', 900), alt: 'Young adults in conversation around a table' },
    men: { src: u('1556484687-30636164638b', 900), alt: 'A group of men praying together' },
    women: { src: u('1573497019940-1c28c88b4f3e', 900), alt: "Women gathered for a women's ministry morning" },
    worship: { src: u('1459749411175-04bf5292ceea', 900), alt: 'The worship team leading a song from the stage' },
    groups: { src: u('1517048676732-d65bc937f952', 900), alt: 'A small group meeting in a living room' },
    outreach: { src: u('1488521787991-ed7bbaae773c', 900), alt: 'Volunteers serving together in the neighbourhood' },
  },
  people: {
    one: { src: u('1494790108377-be9c29b29330', 320), alt: '' },
    two: { src: u('1507003211169-0a1dd7228f2d', 320), alt: '' },
    three: { src: u('1544005313-94ddf0286df2', 320), alt: '' },
    four: { src: u('1472099645785-5658abf4ff4e', 320), alt: '' },
  },
} satisfies Record<string, unknown>;
