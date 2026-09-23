/**
 * GenTouch — central site configuration.
 *
 * Every value wrapped in [square brackets] is a PLACEHOLDER awaiting real
 * church information. Replace the text only; nothing else needs to change.
 */

export const site = {
  name: 'GenTouch',
  tagline: "There's a Nation Inside of You!",
  /** Live site. Change this when a custom domain is connected — canonicals,
   * Open Graph URLs and the sitemap are all derived from it. */
  url: 'https://gentouch-church.vercel.app',
  description:
    'GenTouch is a welcoming church family where you can encounter God, discover your purpose, build meaningful relationships, and grow in faith together.',
  logo: '/brand/gentouch-logo.png',
} as const;

export const contact = {
  addressLine1: '[Church Street Address]',
  addressLine2: '[City, State ZIP]',
  get address() {
    return `${this.addressLine1}, ${this.addressLine2}`;
  },
  phone: '[Phone Number]',
  phoneHref: 'tel:',
  email: '[email@gentouch.org]',
  emailHref: 'mailto:',
  /** Replace with a Google Maps link to the church campus. */
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=GenTouch+Church',
  officeHours: '[Office Hours — e.g. Mon–Fri, 9:00 AM – 4:00 PM]',
} as const;

export const serviceTimes = [
  {
    name: 'Sunday Worship',
    time: '[Service Time]',
    detail: 'Our main gathering — worship, teaching and community.',
  },
  {
    name: 'Sunday Second Service',
    time: '[Service Time]',
    detail: 'Same message, same heart, a different hour to join us.',
  },
  {
    name: 'Midweek Gathering',
    time: '[Day & Time]',
    detail: 'Prayer, Bible study and small-group connection.',
  },
] as const;

export const socials = [
  { name: 'Facebook', href: '[Facebook URL]', handle: '[@gentouch]' },
  { name: 'Instagram', href: '[Instagram URL]', handle: '[@gentouch]' },
  { name: 'YouTube', href: '[YouTube URL]', handle: '[GenTouch Church]' },
] as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Ministries', href: '/ministry' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Get Connected', href: '/connect' },
  { label: 'Give', href: '/give' },
] as const;

export const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Ministries', href: '/ministry' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
] as const;
