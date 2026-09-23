# GenTouch — Church Website

A premium, responsive church website built with Next.js 16 (App Router), TypeScript and Tailwind CSS.
The visual system is derived entirely from the existing GenTouch logo: its green is the dominant
brand colour, its red is reserved as an accent, and the fingerprint ridges in the mark become a
recurring background motif across the site.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 20+ recommended.

---

## What still needs real church information

Nothing about the church has been invented. Every unknown fact is written as a `[Placeholder]`
in square brackets so it is obvious on the page and easy to find in the code.

**Everything below lives in `src/data/site.ts` unless stated otherwise.**

| What | Where | Currently |
|---|---|---|
| Street address, city, ZIP | `contact.addressLine1/2` | `[Church Street Address]` |
| Phone, email, office hours | `contact` | placeholders |
| Google Maps link | `contact.directionsUrl` | generic search URL — replace with the campus link |
| Service names and times | `serviceTimes` | `[Service Time]` |
| Facebook / Instagram / YouTube URLs | `socials` | placeholders (render inert until set) |
| Leadership names, roles, bios, photos | `src/app/about/page.tsx` → `leaders` | `[Leader Name]` |
| Ministry meeting days and times | `src/data/content.ts` → `ministries[].meets` | `[Day & Time]` |
| Sermon titles, speakers, dates, video URLs | `src/data/content.ts` → `sermons` | `[Speaker Name]`, `[Sermon Video URL]` |
| Event dates, times, locations | `src/data/content.ts` → `events` | `[MTH] [00]` |
| Testimonial names and quotes | `src/data/content.ts` → `testimonials` | `[First Name L.]` |
| Service length, parking, accessibility, kids ages | `src/data/content.ts` → `visitFaqs` | inline placeholders |
| Online giving link and bank details | `src/app/give/page.tsx` → `ways` | placeholders |
| Impact numbers | `src/components/home/Impact.tsx` → `measures` | `[000]` |
| Years serving badge | `src/components/home/Welcome.tsx` | `[00+]` |

A link whose value is still `[Bracketed]` renders as an inert, dimmed element rather than a broken
link — see `src/lib/href.ts`. Sermon cards with a placeholder video URL do not become clickable.

### Photography

All photos are **placeholder stock imagery** and are listed in one file: `src/data/images.ts`.
Replace each `src` with a real GenTouch photograph — drop files into `public/photos/` and use a
local path, e.g. `"/photos/hero.jpg"`. Alt text is already written for every image; update it to
match the new photo.

Every photo renders through `<Photo />`, which paints a branded gradient plus the fingerprint
ridge field underneath. If an image is slow or unavailable, the layout stays intact and on-brand
rather than showing a broken box.

### Forms

Both forms validate fully on the client (required fields, email format, phone format, focus moves
to the first invalid field, accessible error messages) and show a success state. Neither sends
anything yet — there is no endpoint. Search for `BACKEND HOOK` in:

- `src/components/ContactForm.tsx`
- `src/components/PlanVisitForm.tsx`

Point them at the church's form handler (a Next.js route handler, Formspree, Resend, or the ChMS
of choice) and keep the existing success state.

### Map

`/plan-your-visit` shows a styled "Find us here" card instead of an embedded map, because
embedding one without the real address would point at the wrong place. Once the address is
confirmed, swap that block for a Google Maps `<iframe>` — it is commented in
`src/app/plan-your-visit/page.tsx`.

---

## Bible verse feature

A quiet Scripture card that rises from the bottom-right corner.

- **First verse appears after 5 minutes**, never immediately.
- Counts **active time only** — the clock pauses while the browser tab is hidden and resumes on
  return.
- After the visitor closes a verse, the next one is 5 minutes later.
- **No verse repeats** until the whole collection has been shown; then the pool reshuffles.
- Seen verses are tracked in `sessionStorage`, so a refresh keeps the no-repeat promise while the
  timer itself starts over. A new session starts clean.
- **Never interrupts** someone typing in a field, and stays quiet for 20 seconds after any form
  submission.
- A floating button (bottom-right) opens a verse on demand, without waiting.
- Non-modal: it never covers the page, never traps focus, closes with Escape or the close button.
  Focus moves to the card only when the visitor opened it themselves.

**Translation:** World English Bible (WEB) — a modern English translation in the **public domain**,
so it can be quoted freely with no licence request. Verses are quoted exactly, never paraphrased.

**To edit the verses:** `src/data/verses.ts`. Add, remove or reorder entries in the `verses` array;
nothing else needs to change. To switch translations, update `BIBLE_TRANSLATION` and replace each
verse's `text` with that translation's wording — check the licence first, as NIV, ESV, NLT and
others require permission.

**To change the interval:** `VERSE_INTERVAL_MS` in `src/lib/useVerseRotation.ts`.

---

## Structure

```
src/
  app/                    # one folder per route (App Router)
    layout.tsx            # fonts, metadata, JSON-LD, nav, footer, verse popup
    page.tsx              # homepage
    about/ ministry/ sermons/ events/ connect/ give/ contact/ plan-your-visit/
    not-found.tsx  sitemap.ts  robots.ts  globals.css
  components/
    Navbar  Footer  Button  SectionHeading  CTASection  PageHero
    MinistryCard  EventCard  SermonCard  TestimonialCard
    Photo  Logo  Reveal  Accordion  Icons
    Field  ContactForm  PlanVisitForm
    BibleVersePopup
    home/                 # homepage sections
  data/
    site.ts               # church facts, navigation, socials
    content.ts            # ministries, sermons, events, testimonials, FAQs
    images.ts             # every image on the site, in one place
    verses.ts             # Scripture rotation
  lib/
    cn.ts  href.ts  useVerseRotation.ts
public/
  brand/gentouch-logo.png # the supplied logo, unmodified
  icon.svg                # favicon derived from the logo
  site.webmanifest
```

---

## Design system

Tokens live in `tailwind.config.ts`.

| Token | Value | Use |
|---|---|---|
| `brand-500` | `#63C800` | primary green |
| `brand-700` | `#2F7D00` | deep green — most buttons and headings |
| `accent-500` | `#E51B16` | red — primary CTAs, active states, small details only |
| `ink` | `#101510` | text and dark sections |
| `canvas` | `#F6F8F3` | soft background |

Green dominates; red appears only on the main call to action, the active nav underline, and small
accent details. Type is Fraunces (display) over Plus Jakarta Sans (body). The `.ridges`,
`.ridges-brand` and `.ridges-light` utilities in `globals.css` draw the fingerprint motif.

**Animation** is limited to fade-up section reveals, image zoom on hover, card elevation, an
animated nav underline and one gentle pulse ring. All of it is disabled under
`prefers-reduced-motion`.

---

## Accessibility & SEO

- Semantic landmarks, one `<h1>` per page, skip-to-content link.
- Visible focus rings; the mobile menu traps scroll, closes on Escape and on navigation.
- Form fields use real labels, `aria-invalid`, `aria-describedby` and `role="alert"` messages.
- Accordion uses `aria-expanded` / `aria-controls` with proper region labelling.
- Per-page titles, descriptions, canonicals, Open Graph and Twitter cards; `Church` JSON-LD in the
  root layout; `sitemap.xml` and `robots.txt` generated.
- Set the real domain in `site.url` (`src/data/site.ts`) before launch — canonicals, Open Graph
  URLs and the sitemap all derive from it.
- Images are served through `next/image` (AVIF/WebP, responsive `sizes`, lazy below the fold).
- Verified: no console errors, no broken images and no horizontal overflow on any page at both
  1440px and 360px.
