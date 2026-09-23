/**
 * GenTouch — curated Scripture for the verse popup.
 *
 * TRANSLATION: World English Bible (WEB) — a modern English translation that is
 * in the PUBLIC DOMAIN, so it can be quoted freely on a public website with no
 * licence or permissions request. Verses are quoted exactly, not paraphrased.
 *
 * TO EDIT: add, remove or reorder entries in the array below. Nothing else
 * needs to change — the popup reads its whole rotation from this file.
 *
 * To switch translations, set BIBLE_TRANSLATION and replace the `text` of each
 * verse with that translation's wording. Check the licence of any non-public-
 * domain translation (NIV, ESV, NLT and others require permission) before use.
 */

export const BIBLE_TRANSLATION = {
  abbreviation: 'WEB',
  name: 'World English Bible',
  note: 'Public domain',
} as const;

export type Verse = {
  /** Stable id — used to remember which verses a visitor has already seen. */
  id: string;
  /** Exact quotation. Do not paraphrase. */
  text: string;
  /** Human-readable reference, e.g. "Jeremiah 29:11". */
  reference: string;
  /** Book + chapter slug used to build the "Read Full Chapter" link. */
  chapter: string;
};

export const verses: Verse[] = [
  {
    id: 'jer-29-11',
    text: 'For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future.',
    reference: 'Jeremiah 29:11',
    chapter: 'JER.29',
  },
  {
    id: 'prov-3-5-6',
    text: 'Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
    reference: 'Proverbs 3:5–6',
    chapter: 'PRO.3',
  },
  {
    id: 'isa-40-31',
    text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
    reference: 'Isaiah 40:31',
    chapter: 'ISA.40',
  },
  {
    id: 'phil-4-6-7',
    text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
    reference: 'Philippians 4:6–7',
    chapter: 'PHP.4',
  },
  {
    id: 'josh-1-9',
    text: 'Haven’t I commanded you? Be strong and courageous. Don’t be afraid. Don’t be dismayed, for Yahweh your God is with you wherever you go.',
    reference: 'Joshua 1:9',
    chapter: 'JOS.1',
  },
  {
    id: 'psa-23-1',
    text: 'Yahweh is my shepherd; I shall lack nothing. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.',
    reference: 'Psalm 23:1–3',
    chapter: 'PSA.23',
  },
  {
    id: 'rom-8-28',
    text: 'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
    reference: 'Romans 8:28',
    chapter: 'ROM.8',
  },
  {
    id: 'matt-11-28',
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    chapter: 'MAT.11',
  },
  {
    id: 'psa-46-1',
    text: 'God is our refuge and strength, a very present help in trouble.',
    reference: 'Psalm 46:1',
    chapter: 'PSA.46',
  },
  {
    id: 'john-3-16',
    text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
    reference: 'John 3:16',
    chapter: 'JHN.3',
  },
  {
    id: '2cor-5-17',
    text: 'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
    reference: '2 Corinthians 5:17',
    chapter: '2CO.5',
  },
  {
    id: 'psa-119-105',
    text: 'Your word is a lamp to my feet, and a light for my path.',
    reference: 'Psalm 119:105',
    chapter: 'PSA.119',
  },
  {
    id: 'heb-11-1',
    text: 'Now faith is assurance of things hoped for, proof of things not seen.',
    reference: 'Hebrews 11:1',
    chapter: 'HEB.11',
  },
  {
    id: 'isa-41-10',
    text: 'Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
    reference: 'Isaiah 41:10',
    chapter: 'ISA.41',
  },
  {
    id: 'gal-6-9',
    text: 'Let’s not be weary in doing good, for we will reap in due season, if we don’t give up.',
    reference: 'Galatians 6:9',
    chapter: 'GAL.6',
  },
  {
    id: 'psa-34-18',
    text: 'Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.',
    reference: 'Psalm 34:18',
    chapter: 'PSA.34',
  },
  {
    id: 'eph-2-10',
    text: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them.',
    reference: 'Ephesians 2:10',
    chapter: 'EPH.2',
  },
  {
    id: 'lam-3-22-23',
    text: 'It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.',
    reference: 'Lamentations 3:22–23',
    chapter: 'LAM.3',
  },
  {
    id: '1pet-5-7',
    text: 'Casting all your worries on him, because he cares for you.',
    reference: '1 Peter 5:7',
    chapter: '1PE.5',
  },
  {
    id: 'psa-37-4',
    text: 'Also delight yourself in Yahweh, and he will give you the desires of your heart.',
    reference: 'Psalm 37:4',
    chapter: 'PSA.37',
  },
  {
    id: 'matt-5-16',
    text: 'Even so, let your light shine before men, that they may see your good works and glorify your Father who is in heaven.',
    reference: 'Matthew 5:16',
    chapter: 'MAT.5',
  },
  {
    id: 'rom-12-2',
    text: 'Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
    reference: 'Romans 12:2',
    chapter: 'ROM.12',
  },
  {
    id: 'phil-4-13',
    text: 'I can do all things through Christ, who strengthens me.',
    reference: 'Philippians 4:13',
    chapter: 'PHP.4',
  },
  {
    id: 'psa-139-14',
    text: 'I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well.',
    reference: 'Psalm 139:14',
    chapter: 'PSA.139',
  },
];

/** Builds the public "Read Full Chapter" link for a verse. */
export function chapterUrl(verse: Verse) {
  return `https://www.bible.com/bible/206/${verse.chapter}.WEB`;
}
