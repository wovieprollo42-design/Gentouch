import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BibleVersePopup } from '@/components/BibleVersePopup';
import { contact, serviceTimes, site } from '@/data/site';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — A Place to Belong. A Faith to Grow.`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'GenTouch',
    'church',
    'Sunday worship',
    'small groups',
    'kids ministry',
    'youth ministry',
    'sermons',
    'plan your visit',
    'community church',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/brand/gentouch-logo.png', type: 'image/png', sizes: '720x720' },
    ],
    apple: '/brand/gentouch-logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — A Place to Belong. A Faith to Grow.`,
    description: site.description,
    images: [
      {
        url: site.logo,
        width: 720,
        height: 720,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — A Place to Belong. A Faith to Grow.`,
    description: site.description,
    images: [site.logo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F8F3' },
    { media: '(prefers-color-scheme: dark)', color: '#101510' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/** Structured data so search engines understand the church, not just the page. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.logo}`,
  telephone: contact.phone,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.addressLine1,
    addressLocality: contact.addressLine2,
  },
  openingHoursSpecification: serviceTimes.map((s) => ({
    '@type': 'OpeningHoursSpecification',
    description: `${s.name} — ${s.time}`,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BibleVersePopup />
      </body>
    </html>
  );
}
